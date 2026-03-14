import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import VoiceCallPhone from '../../ui/VoiceCallPhone';
import VoiceTranscriptPanel from '../../ui/VoiceTranscriptPanel';
import { getRetellWebClientClass } from '../../../lib/retellWebCall';

const MEDICAL_DOMAIN_IDS = [
  'orthopedie',
  'cancer',
  'transplantation-hepatique',
  'chirurgie-esthetique',
];

const HOME2_SPECIALTY_TO_MEDICAL_DOMAIN = {
  ortho: 'orthopedie',
  oncologie: 'cancer',
  cardiaque: 'transplantation-hepatique',
  esthetique: 'chirurgie-esthetique',
  orthopedie: 'orthopedie',
  cancer: 'cancer',
  'transplantation-hepatique': 'transplantation-hepatique',
  'chirurgie-esthetique': 'chirurgie-esthetique',
};

const DEFAULT_ENDPOINT_TEMPLATE = '/api/retell/test-web-call';
const DEFAULT_AGENT_ID = 'agent_9f250d09bcb3b222b1baa1ff88';
const OVERLAY_CLOSE_DELAY_MS = 760;

const FALLBACK_TYPING_INTERVAL_MS = 24;
const FALLBACK_TYPING_SPEED_FACTOR = 0.72;
const FALLBACK_TYPING_MIN_TICKS = 18;

function clamp(value, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

function resolveBackendEndpoint() {
  return process.env.NEXT_PUBLIC_RETELL_PROXY_PATH || DEFAULT_ENDPOINT_TEMPLATE;
}

function extractAccessToken(responsePayload) {
  return (
    responsePayload?.data?.accessToken ||
    responsePayload?.accessToken ||
    responsePayload?.data?.token ||
    ''
  );
}

function normalizeRole(rawRole) {
  const roleValue = String(rawRole || '').toLowerCase();

  if (
    roleValue.includes('agent') ||
    roleValue.includes('assistant') ||
    roleValue.includes('ai')
  ) {
    return 'agent';
  }

  return 'patient';
}

function normalizeTranscriptEntries(updatePayload) {
  const transcriptPayload = updatePayload?.transcript ?? updatePayload;

  if (!transcriptPayload) return [];

  const transcriptRows = Array.isArray(transcriptPayload)
    ? transcriptPayload
    : Array.isArray(transcriptPayload?.entries)
      ? transcriptPayload.entries
      : Array.isArray(transcriptPayload?.messages)
        ? transcriptPayload.messages
        : Array.isArray(transcriptPayload?.utterances)
          ? transcriptPayload.utterances
          : [];

  return transcriptRows
    .map((row, index) => {
      const text = String(
        row?.content ?? row?.transcript ?? row?.text ?? ''
      ).trim();
      if (!text) return null;

      return {
        id: `live-${index}-${text.slice(0, 24)}`,
        role: normalizeRole(row?.role ?? row?.speaker ?? row?.speaker_type),
        text,
      };
    })
    .filter(Boolean);
}

function mergeTranscriptEntries(currentEntries, incomingEntries) {
  if (!incomingEntries.length) return currentEntries;

  const signatures = new Set(
    currentEntries.map((entry) => `${entry.role}:${entry.text}`)
  );
  const mergedEntries = [...currentEntries];

  incomingEntries.forEach((entry) => {
    const signature = `${entry.role}:${entry.text}`;
    if (signatures.has(signature)) return;

    signatures.add(signature);
    mergedEntries.push({
      id: `${entry.id}-${Date.now()}-${Math.random().toString(16).slice(2, 6)}`,
      role: entry.role,
      text: entry.text,
    });
  });

  return mergedEntries.slice(-80);
}

function resolveDomainId(specialtyId) {
  return (
    HOME2_SPECIALTY_TO_MEDICAL_DOMAIN[specialtyId] || MEDICAL_DOMAIN_IDS[0]
  );
}

export default function Home2VoiceSimulationOverlay({
  specialtyId,
  isClosing = false,
  onRequestClose,
}) {
  const { t, i18n } = useTranslation();
  const [isShown, setIsShown] = useState(false);
  const [selectedDomainId, setSelectedDomainId] = useState(
    resolveDomainId(specialtyId)
  );
  const [callState, setCallState] = useState('idle');
  const [orbMode, setOrbMode] = useState('listening');
  const [callStatusLabel, setCallStatusLabel] = useState('');
  const [transcriptEntries, setTranscriptEntries] = useState([]);

  const callAttemptIdRef = useRef(0);
  const retellClientRef = useRef(null);
  const transcriptViewportRef = useRef(null);
  const fallbackAudioRef = useRef(null);
  const fallbackTimerIdsRef = useRef([]);
  const closeTimerIdRef = useRef(null);
  const autoLaunchDoneRef = useRef(false);

  const medicalDomains = useMemo(
    () => t('sections.medicalVoice.domains', { returnObjects: true }),
    [t, i18n.resolvedLanguage, i18n.language]
  );

  const fallbackTranscripts = useMemo(
    () =>
      t('sections.medicalVoice.fallbackTranscripts', { returnObjects: true }),
    [t, i18n.resolvedLanguage, i18n.language]
  );

  const selectedDomain = useMemo(
    () =>
      medicalDomains.find((domain) => domain.id === selectedDomainId) ||
      medicalDomains[0],
    [selectedDomainId, medicalDomains]
  );

  const clearCloseTimer = () => {
    if (!closeTimerIdRef.current) return;
    window.clearTimeout(closeTimerIdRef.current);
    closeTimerIdRef.current = null;
  };

  const scheduleOverlayClose = useCallback(
    (delayMs = OVERLAY_CLOSE_DELAY_MS) => {
      clearCloseTimer();
      closeTimerIdRef.current = window.setTimeout(() => {
        onRequestClose?.();
      }, delayMs);
    },
    [onRequestClose]
  );

  const clearFallbackTimers = () => {
    fallbackTimerIdsRef.current.forEach((timerId) =>
      window.clearTimeout(timerId)
    );
    fallbackTimerIdsRef.current = [];
  };

  const stopFallbackAudio = () => {
    if (!fallbackAudioRef.current) return;
    fallbackAudioRef.current.pause();
    fallbackAudioRef.current.currentTime = 0;
    fallbackAudioRef.current = null;
  };

  const stopRetellClient = async () => {
    if (!retellClientRef.current) return;

    try {
      await retellClientRef.current.stopCall();
    } catch (error) {
      console.warn('Unable to stop Retell call cleanly:', error);
    } finally {
      retellClientRef.current = null;
    }
  };

  const setOrbModeFromRole = (roleValue) => {
    setOrbMode(roleValue === 'agent' ? 'speaking' : 'listening');
  };

  const runFallbackDemo = useCallback(
    async (reasonKey = 'liveUnavailable') => {
      await stopRetellClient();
      stopFallbackAudio();
      clearFallbackTimers();

      setCallState('fallback');
      setCallStatusLabel(t(`sections.medicalVoice.status.${reasonKey}`));
      setOrbMode('listening');
      setTranscriptEntries([]);

      const fallbackAudioUrl =
        process.env.NEXT_PUBLIC_VOICE_DEMO_FALLBACK_AUDIO_URL;

      if (fallbackAudioUrl) {
        try {
          const fallbackAudio = new Audio(fallbackAudioUrl);
          fallbackAudioRef.current = fallbackAudio;
          await fallbackAudio.play();
        } catch (audioError) {
          console.warn('Fallback audio file failed to play:', audioError);
        }
      }

      const script =
        fallbackTranscripts[selectedDomain.id] ||
        fallbackTranscripts.orthopedie ||
        [];

      const streamFallbackLine = (lineId, fullText) => {
        const textCharacters = Array.from(fullText || '');
        if (!textCharacters.length) return 0;

        const totalTicks = Math.max(
          FALLBACK_TYPING_MIN_TICKS,
          Math.round(textCharacters.length * FALLBACK_TYPING_SPEED_FACTOR)
        );
        let tickCount = 0;

        const typingTimerId = window.setInterval(() => {
          tickCount += 1;

          const progress = clamp(tickCount / totalTicks);
          const easedProgress = 1 - Math.pow(1 - progress, 2.2);
          const nextLength = Math.max(
            1,
            Math.round(textCharacters.length * easedProgress)
          );
          const nextText = textCharacters.slice(0, nextLength).join('');

          setTranscriptEntries((currentEntries) =>
            currentEntries.map((transcriptEntry) =>
              transcriptEntry.id === lineId
                ? { ...transcriptEntry, text: nextText }
                : transcriptEntry
            )
          );

          if (progress >= 1) {
            window.clearInterval(typingTimerId);
          }
        }, FALLBACK_TYPING_INTERVAL_MS);

        fallbackTimerIdsRef.current.push(typingTimerId);
        return totalTicks * FALLBACK_TYPING_INTERVAL_MS;
      };

      script.forEach((entry, index) => {
        const lineId = `fallback-${index}-${Date.now()}`;

        const lineTimerId = window.setTimeout(() => {
          setOrbModeFromRole(entry.role);
          setTranscriptEntries((currentEntries) => [
            ...currentEntries,
            { id: lineId, role: entry.role, text: '' },
          ]);
          streamFallbackLine(lineId, entry.text);
        }, entry.delayMs);

        fallbackTimerIdsRef.current.push(lineTimerId);
      });

      const lastEntry = script.at(-1);
      const lastEntryCharactersCount = Array.from(lastEntry?.text || '').length;
      const lastEntryTicks = Math.max(
        FALLBACK_TYPING_MIN_TICKS,
        Math.round(lastEntryCharactersCount * FALLBACK_TYPING_SPEED_FACTOR)
      );
      const lastEntryTypingDurationMs = lastEntryCharactersCount
        ? lastEntryTicks * FALLBACK_TYPING_INTERVAL_MS
        : 0;
      const finalTypingTailMs = Math.max(520, lastEntryTypingDurationMs + 520);

      const endTimerId = window.setTimeout(
        () => {
          setCallState('ended');
          setCallStatusLabel(
            t('sections.medicalVoice.status.fallbackCompleted')
          );
          setOrbMode('listening');
          scheduleOverlayClose();
        },
        (lastEntry?.delayMs || 0) + finalTypingTailMs
      );

      fallbackTimerIdsRef.current.push(endTimerId);
    },
    [fallbackTranscripts, selectedDomain, scheduleOverlayClose, t]
  );

  const startRetellCall = useCallback(async () => {
    const attemptId = Date.now();
    callAttemptIdRef.current = attemptId;

    stopFallbackAudio();
    clearFallbackTimers();
    clearCloseTimer();
    await stopRetellClient();

    setCallState('connecting');
    setCallStatusLabel(t('sections.medicalVoice.status.creating'));
    setOrbMode('listening');
    setTranscriptEntries([]);

    try {
      const endpoint = resolveBackendEndpoint();
      const agentId =
        process.env.NEXT_PUBLIC_RETELL_AGENT_ID || DEFAULT_AGENT_ID;

      const webCallResponse = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          domain: selectedDomain.label,
          domainKey: selectedDomain.id,
          agentId,
        }),
      });

      if (!webCallResponse.ok) {
        throw new Error(
          `Backend request failed with status ${webCallResponse.status}`
        );
      }

      const webCallPayload = await webCallResponse.json();
      if (callAttemptIdRef.current !== attemptId) return;

      const accessToken = extractAccessToken(webCallPayload);
      if (!accessToken) {
        throw new Error('Missing data.accessToken in backend response.');
      }

      setCallStatusLabel(t('sections.medicalVoice.status.connectingRetell'));

      const RetellWebClient = await getRetellWebClientClass();
      const retellClient = new RetellWebClient();
      retellClientRef.current = retellClient;

      retellClient.on('call_started', () => {
        if (callAttemptIdRef.current !== attemptId) return;
        setCallState('live');
        setCallStatusLabel(t('sections.medicalVoice.status.liveRunning'));
        setOrbMode('listening');
      });

      retellClient.on('call_ended', () => {
        if (callAttemptIdRef.current !== attemptId) return;
        setCallState('ended');
        setCallStatusLabel(t('sections.medicalVoice.status.callFinished'));
        setOrbMode('listening');
        scheduleOverlayClose();
      });

      retellClient.on('update', (updatePayload) => {
        if (callAttemptIdRef.current !== attemptId) return;
        const liveTranscriptEntries = normalizeTranscriptEntries(updatePayload);
        if (!liveTranscriptEntries.length) return;

        const latestEntry =
          liveTranscriptEntries[liveTranscriptEntries.length - 1];
        if (latestEntry) {
          setOrbModeFromRole(latestEntry.role);
        }

        setTranscriptEntries((currentEntries) =>
          mergeTranscriptEntries(currentEntries, liveTranscriptEntries)
        );
      });

      retellClient.on('error', (retellError) => {
        if (callAttemptIdRef.current !== attemptId) return;
        console.error('Retell live call error:', retellError);
        runFallbackDemo('liveUnavailable');
      });

      await retellClient.startCall({ accessToken });
    } catch (error) {
      if (callAttemptIdRef.current !== attemptId) return;
      console.error('Failed to start Retell call:', error);
      runFallbackDemo('liveUnavailable');
    }
  }, [runFallbackDemo, selectedDomain, t, scheduleOverlayClose]);

  const requestOverlayClose = useCallback(async () => {
    callAttemptIdRef.current = Date.now();
    clearFallbackTimers();
    clearCloseTimer();
    stopFallbackAudio();
    await stopRetellClient();
    setCallState('idle');
    setCallStatusLabel(t('sections.medicalVoice.status.ready'));
    setOrbMode('listening');
    setTranscriptEntries([]);
    onRequestClose?.();
  }, [onRequestClose, t]);

  const startCallFromPhone = () => {
    if (
      callState === 'connecting' ||
      callState === 'live' ||
      callState === 'fallback'
    ) {
      return;
    }
    startRetellCall();
  };

  const hangupCallFromPhone = () => {
    requestOverlayClose();
  };

  useEffect(() => {
    setSelectedDomainId(resolveDomainId(specialtyId));
  }, [specialtyId]);

  useEffect(() => {
    if (!transcriptViewportRef.current) return;

    transcriptViewportRef.current.scrollTo({
      top: transcriptViewportRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [transcriptEntries]);

  useEffect(() => {
    setCallStatusLabel(t('sections.medicalVoice.status.ready'));
  }, [t, i18n.resolvedLanguage, i18n.language]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      setIsShown(true);
    });

    return () => window.cancelAnimationFrame(frameId);
  }, []);

  useEffect(() => {
    if (!isShown || isClosing || autoLaunchDoneRef.current) return;
    autoLaunchDoneRef.current = true;
    startRetellCall();
  }, [isShown, isClosing, startRetellCall]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key !== 'Escape') return;
      requestOverlayClose();
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [requestOverlayClose]);

  useEffect(() => {
    return () => {
      callAttemptIdRef.current = Date.now();
      clearFallbackTimers();
      clearCloseTimer();
      stopFallbackAudio();
      stopRetellClient();
    };
  }, []);

  const shouldShowConversation =
    callState === 'connecting' ||
    callState === 'live' ||
    callState === 'fallback' ||
    callState === 'ended';

  const phoneAvatarUrl =
    process.env.NEXT_PUBLIC_VOICE_DEMO_AVATAR_URL ||
    '/assets/voice-demo/avatar-default.jpg';

  return (
    <div
      className={`fixed inset-0 z-[220] transition-opacity duration-420 ease-out ${isShown && !isClosing ? 'opacity-100' : 'pointer-events-none opacity-0'}`.trim()}
      role="dialog"
      aria-modal="true"
      aria-label={t('sections.home2.simulation.label')}
    >
      <div className="absolute inset-0 bg-[rgba(7,11,24,.72)] backdrop-blur-[3px]" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-[1240px] items-center justify-center px-5 py-8 min-[980px]:px-8">
        <div
          className={`relative w-full overflow-hidden rounded-[24px] border border-[var(--white-20)] bg-[radial-gradient(circle_at_16%_18%,color-mix(in_srgb,var(--color-info)_28%,transparent)_0%,transparent_45%),linear-gradient(140deg,#f9fbff_0%,#f2f5ff_52%,#eef4fb_100%)] shadow-[0_40px_120px_rgba(8,14,30,.48)] transition-all duration-420 ease-out ${isShown && !isClosing ? 'translate-y-0 scale-100' : 'translate-y-[20px] scale-[0.96]'}`.trim()}
        >
          <button
            type="button"
            className="absolute right-4 top-4 z-[2] inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--ink-10)] bg-[var(--color-white)]/90 text-[var(--color-primary)] transition-colors duration-150 ease-out hover:bg-[var(--color-white)]"
            onClick={requestOverlayClose}
            aria-label={t('common.close')}
          >
            <span className="relative block h-3.5 w-3.5">
              <span className="absolute left-1/2 top-1/2 h-[2px] w-3.5 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-full bg-current" />
              <span className="absolute left-1/2 top-1/2 h-[2px] w-3.5 -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-full bg-current" />
            </span>
          </button>

          <div className="grid gap-8 px-5 pb-6 pt-12 min-[980px]:grid-cols-[420px_1fr] min-[980px]:px-8 min-[980px]:pb-8 min-[980px]:pt-8">
            <div className="flex flex-col justify-between">
              <div className="mb-5 min-[980px]:mb-0">
                <p className="mb-2 text-[11px] font-[var(--w500)] uppercase tracking-[0.08em] text-[var(--muted)]">
                  {t('sections.home2.simulation.label')}
                </p>
                <h3 className="text-[clamp(1.55rem,2.2vw,2.1rem)] font-[var(--w500)] leading-[1.15] tracking-[-0.035em] text-[var(--color-primary)]">
                  {selectedDomain?.label ||
                    t('sections.medicalVoice.headTitleAccent')}
                </h3>
                <p className="mt-2 text-[13px] leading-[1.6] text-[var(--muted)]">
                  {callStatusLabel}
                </p>
              </div>

              <div className="flex min-h-0 items-center justify-center rounded-[20px] border border-[var(--ink-08)] bg-[var(--color-white)]/72 p-2">
                <VoiceCallPhone
                  domainLabel={selectedDomain?.label || ''}
                  state={callState}
                  orbMode={orbMode}
                  onStartCall={startCallFromPhone}
                  onHangupCall={hangupCallFromPhone}
                  avatarUrl={phoneAvatarUrl}
                />
              </div>
            </div>

            <div
              className={`relative min-h-[360px] rounded-[20px] border border-[var(--ink-08)] bg-[var(--color-white)]/78 p-4 transition-all duration-300 ease-out min-[980px]:p-6 ${shouldShowConversation ? 'opacity-100' : 'opacity-88'}`.trim()}
            >
              <p className="mb-4 text-[11px] font-[var(--w500)] uppercase tracking-[0.08em] text-[var(--muted)]">
                {t('sections.medicalVoice.headLabel')}
              </p>
              <div className="h-[calc(100%-26px)] min-h-[300px]">
                <VoiceTranscriptPanel
                  transcriptEntries={transcriptEntries}
                  transcriptViewportRef={transcriptViewportRef}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
