import { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import MedicalDomainSelector from '../../ui/MedicalDomainSelector';
import VoiceCallPhone from '../../ui/VoiceCallPhone';
import VoiceTranscriptPanel from '../../ui/VoiceTranscriptPanel';
import { getRetellWebClientClass } from '../../../lib/retellWebCall';

const MEDICAL_DOMAIN_IDS = ['orthopedie', 'cancer', 'transplantation-hepatique', 'chirurgie-esthetique'];

const DEFAULT_ENDPOINT_TEMPLATE = '/api/retell/test-web-call';
const DEFAULT_AGENT_ID = 'agent_9f250d09bcb3b222b1baa1ff88';

const FALLBACK_TYPING_INTERVAL_MS = 24;
const FALLBACK_TYPING_SPEED_FACTOR = 0.72;
const FALLBACK_TYPING_MIN_TICKS = 18;

function clamp(value, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

function progressBetween(progressValue, start, end) {
  if (end <= start) return 0;
  return clamp((progressValue - start) / (end - start));
}

function smoothstep(value) {
  const clamped = clamp(value);
  return clamped * clamped * (3 - 2 * clamped);
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

  if (roleValue.includes('agent') || roleValue.includes('assistant') || roleValue.includes('ai')) {
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
      const text = String(row?.content ?? row?.transcript ?? row?.text ?? '').trim();
      if (!text) return null;

      return {
        id: `live-${index}-${text.slice(0, 24)}`,
        role: normalizeRole(row?.role ?? row?.speaker ?? row?.speaker_type),
        text
      };
    })
    .filter(Boolean);
}

function mergeTranscriptEntries(currentEntries, incomingEntries) {
  if (!incomingEntries.length) return currentEntries;

  const signatures = new Set(currentEntries.map((entry) => `${entry.role}:${entry.text}`));
  const mergedEntries = [...currentEntries];

  incomingEntries.forEach((entry) => {
    const signature = `${entry.role}:${entry.text}`;
    if (signatures.has(signature)) return;
    signatures.add(signature);
    mergedEntries.push({
      id: `${entry.id}-${Date.now()}-${Math.random().toString(16).slice(2, 6)}`,
      role: entry.role,
      text: entry.text
    });
  });

  return mergedEntries.slice(-80);
}

export default function HomeMedicalVoiceCallSection() {
  const { t, i18n } = useTranslation();
  const sectionRef = useRef(null);
  const progressRef = useRef(0);
  const [selectedDomainId, setSelectedDomainId] = useState(MEDICAL_DOMAIN_IDS[0]);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [callState, setCallState] = useState('idle');
  const [orbMode, setOrbMode] = useState('listening');
  const [callStatusLabel, setCallStatusLabel] = useState('');
  const [remainingTests, setRemainingTests] = useState(null);
  const [transcriptEntries, setTranscriptEntries] = useState([]);

  const callAttemptIdRef = useRef(0);
  const retellClientRef = useRef(null);
  const transcriptViewportRef = useRef(null);
  const fallbackAudioRef = useRef(null);
  const fallbackTimerIdsRef = useRef([]);
  const endResetTimerIdRef = useRef(null);

  const medicalDomains = useMemo(
    () => t('sections.medicalVoice.domains', { returnObjects: true }),
    [t, i18n.resolvedLanguage, i18n.language]
  );
  const fallbackTranscripts = useMemo(
    () => t('sections.medicalVoice.fallbackTranscripts', { returnObjects: true }),
    [t, i18n.resolvedLanguage, i18n.language]
  );

  const selectedDomain = useMemo(
    () => medicalDomains.find((domain) => domain.id === selectedDomainId) || medicalDomains[0],
    [selectedDomainId, medicalDomains]
  );

  const setOrbModeFromRole = (roleValue) => {
    setOrbMode(roleValue === 'agent' ? 'speaking' : 'listening');
  };

  useEffect(() => {
    if (callState !== 'idle') return;
    setCallStatusLabel(t('sections.medicalVoice.status.ready'));
  }, [callState, t, i18n.resolvedLanguage, i18n.language]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const syncPreference = () => setPrefersReducedMotion(mediaQuery.matches);

    syncPreference();
    mediaQuery.addEventListener('change', syncPreference);
    return () => mediaQuery.removeEventListener('change', syncPreference);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setScrollProgress(1);
      return undefined;
    }

    let animationFrameId = 0;

    const updateProgressFromScroll = () => {
      if (!sectionRef.current) return;

      const sectionElement = sectionRef.current;
      const sectionRect = sectionElement.getBoundingClientRect();
      const totalScrollableDistance = Math.max(1, sectionElement.offsetHeight - window.innerHeight);
      const scrolledWithinSection = clamp(-sectionRect.top, 0, totalScrollableDistance);
      const nextProgress = scrolledWithinSection / totalScrollableDistance;

      if (Math.abs(nextProgress - progressRef.current) < 0.003) return;

      progressRef.current = nextProgress;
      setScrollProgress(nextProgress);
    };

    const handleScroll = () => {
      window.cancelAnimationFrame(animationFrameId);
      animationFrameId = window.requestAnimationFrame(updateProgressFromScroll);
    };

    updateProgressFromScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [prefersReducedMotion]);

  const clearFallbackTimers = () => {
    fallbackTimerIdsRef.current.forEach((timerId) => window.clearTimeout(timerId));
    fallbackTimerIdsRef.current = [];
  };

  const clearEndResetTimer = () => {
    if (!endResetTimerIdRef.current) return;
    window.clearTimeout(endResetTimerIdRef.current);
    endResetTimerIdRef.current = null;
  };

  const scheduleReturnToIdle = (delayMs = 2500) => {
    clearEndResetTimer();
    endResetTimerIdRef.current = window.setTimeout(() => {
      setCallState('idle');
      setCallStatusLabel(t('sections.medicalVoice.status.ready'));
      setOrbMode('listening');
      setTranscriptEntries([]);
    }, delayMs);
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

  const runFallbackDemo = async (reasonKey = 'liveUnavailable') => {
    await stopRetellClient();
    stopFallbackAudio();
    clearFallbackTimers();
    clearEndResetTimer();

    setCallState('fallback');
    setCallStatusLabel(t(`sections.medicalVoice.status.${reasonKey}`));
    setOrbMode('listening');
    setTranscriptEntries([]);

    const fallbackAudioUrl = process.env.NEXT_PUBLIC_VOICE_DEMO_FALLBACK_AUDIO_URL;

    if (fallbackAudioUrl) {
      try {
        const fallbackAudio = new Audio(fallbackAudioUrl);
        fallbackAudioRef.current = fallbackAudio;
        await fallbackAudio.play();
      } catch (audioError) {
        console.warn('Fallback audio file failed to play:', audioError);
      }
    }

    const script = fallbackTranscripts[selectedDomain.id] || fallbackTranscripts.orthopedie || [];

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
        const nextLength = Math.max(1, Math.round(textCharacters.length * easedProgress));
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
          { id: lineId, role: entry.role, text: '' }
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
    const endTimerId = window.setTimeout(() => {
      setCallState('ended');
      setCallStatusLabel(t('sections.medicalVoice.status.fallbackCompleted'));
      scheduleReturnToIdle(2000);
    }, (lastEntry?.delayMs || 0) + finalTypingTailMs);

    fallbackTimerIdsRef.current.push(endTimerId);
  };

  const startRetellCall = async () => {
    const attemptId = Date.now();
    callAttemptIdRef.current = attemptId;

    stopFallbackAudio();
    clearFallbackTimers();
    clearEndResetTimer();
    await stopRetellClient();

    setCallState('connecting');
    setCallStatusLabel(t('sections.medicalVoice.status.creating'));
    setOrbMode('listening');
    setTranscriptEntries([]);
    setRemainingTests(null);

    try {
      const endpoint = resolveBackendEndpoint();
      const agentId = process.env.NEXT_PUBLIC_RETELL_AGENT_ID || DEFAULT_AGENT_ID;
      const requestHeaders = { 'Content-Type': 'application/json' };

      const webCallResponse = await fetch(endpoint, {
        method: 'POST',
        headers: requestHeaders,
        body: JSON.stringify({
          domain: selectedDomain.label,
          domainKey: selectedDomain.id,
          agentId
        })
      });

      if (!webCallResponse.ok) {
        throw new Error(`Backend request failed with status ${webCallResponse.status}`);
      }

      const webCallPayload = await webCallResponse.json();
      if (callAttemptIdRef.current !== attemptId) return;

      const accessToken = extractAccessToken(webCallPayload);
      const testsLeft = webCallPayload?.data?.remainingTests;

      if (!accessToken) {
        throw new Error('Missing data.accessToken in backend response.');
      }

      if (typeof testsLeft === 'number') {
        setRemainingTests(testsLeft);
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
        scheduleReturnToIdle(900);
      });

      retellClient.on('update', (updatePayload) => {
        if (callAttemptIdRef.current !== attemptId) return;
        const liveTranscriptEntries = normalizeTranscriptEntries(updatePayload);
        if (!liveTranscriptEntries.length) return;

        const latestEntry = liveTranscriptEntries[liveTranscriptEntries.length - 1];
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
  };

  const stopCall = async () => {
    callAttemptIdRef.current = Date.now();
    clearFallbackTimers();
    clearEndResetTimer();
    stopFallbackAudio();
    await stopRetellClient();
    setTranscriptEntries([]);
    setCallState('idle');
    setCallStatusLabel(t('sections.medicalVoice.status.ready'));
    setOrbMode('listening');
  };

  const startCallFromPhone = () => {
    if (callState === 'connecting' || callState === 'live' || callState === 'fallback') return;
    startRetellCall();
  };
  const hangupCallFromPhone = () => stopCall();

  useEffect(() => {
    if (!transcriptViewportRef.current) return;
    transcriptViewportRef.current.scrollTo({
      top: transcriptViewportRef.current.scrollHeight,
      behavior: 'smooth'
    });
  }, [transcriptEntries]);

  useEffect(() => {
    return () => {
      callAttemptIdRef.current = Date.now();
      clearFallbackTimers();
      clearEndResetTimer();
      stopFallbackAudio();
      stopRetellClient();
    };
  }, []);

  const sectionRevealProgress = progressBetween(scrollProgress, 0.05, 0.26);
  const headerRevealProgress = progressBetween(scrollProgress, 0.05, 0.22);
  const selectorRevealProgress = progressBetween(scrollProgress, 0.1, 0.31);
  const phoneMoveProgress = progressBetween(scrollProgress, 0.12, 0.64);
  const transcriptRevealProgress = progressBetween(scrollProgress, 0.36, 0.88);
  const headerDriftProgress = progressBetween(scrollProgress, 0.22, 0.84);
  const selectorDriftProgress = progressBetween(scrollProgress, 0.26, 0.88);
  const isConversationVisible =
    callState === 'connecting' ||
    callState === 'live' ||
    callState === 'fallback' ||
    callState === 'ended';

  const headerEase = smoothstep(headerRevealProgress);
  const selectorEase = smoothstep(selectorRevealProgress);
  const headerTranslateY = 18 * (1 - headerEase) - 8 * headerDriftProgress;
  const selectorTranslateY = 26 * (1 - selectorEase) - 8 * selectorDriftProgress;
  const stageTranslateY = 28 * (1 - sectionRevealProgress);
  const stageOpacity = 0.22 + sectionRevealProgress * 0.78;
  const selectorOpacity = selectorEase * 0.96;
  const selectorScale = 0.986 + selectorEase * 0.014;

  const phoneTranslateY = 26 * (1 - phoneMoveProgress);
  const phoneRotate = -10 * (1 - phoneMoveProgress);
  const phoneScale = 0.64 + phoneMoveProgress * 0.2;
  const phoneTranslateX = isConversationVisible ? -186 : 0;
  const transcriptTranslateX = isConversationVisible ? 54 * (1 - transcriptRevealProgress) : 112;
  const transcriptOpacity = isConversationVisible ? 0.2 + transcriptRevealProgress * 0.8 : 0;
  const phoneAvatarUrl = process.env.NEXT_PUBLIC_VOICE_DEMO_AVATAR_URL || '/assets/voice-demo/avatar-default.jpg';

  return (
    <section className="medical-voice-scroll" id="medicalVoiceDemo" ref={sectionRef}>
      <div className="medical-voice-sticky">
        <div className="medical-voice-shell rev-no-scale">
          <div
            className="medical-voice-header"
            style={{ transform: `translate3d(0,${headerTranslateY}px,0)` }}
          >
            <p className="medical-voice-head-label mb-3 text-[12px] font-[var(--w500)] uppercase tracking-[0.06em] text-[var(--muted)]">{t('sections.medicalVoice.headLabel')}</p>
            <h2 className="medical-voice-head-title text-[clamp(32px,4.5vw,52px)] font-[var(--w500)] leading-[var(--lh-head)] tracking-[-0.055em] text-[var(--color-primary)]">
              {t('sections.medicalVoice.headTitlePrefix')} <span className="si">{t('sections.medicalVoice.headTitleAccent')}</span>
            </h2>
          </div>

          <div
            className="medical-voice-selector-wrap"
            style={{
              transform: `translate3d(0,${selectorTranslateY}px,0) scale(${selectorScale})`,
              opacity: selectorOpacity
            }}
          >
            <MedicalDomainSelector
              options={medicalDomains}
              selectedId={selectedDomain.id}
              onSelect={setSelectedDomainId}
            />
          </div>

          <div
            className={`medical-voice-stage ${isConversationVisible ? 'conversation-active' : ''}`.trim()}
            style={{ transform: `translate3d(0,${stageTranslateY}px,0)`, opacity: stageOpacity }}
          >
            <div
              className="medical-voice-phone-col"
              style={{ transform: `translate3d(${phoneTranslateX}px,${phoneTranslateY}px,0) scale(${phoneScale}) rotate(${phoneRotate}deg)` }}
            >
              <VoiceCallPhone
                domainLabel={selectedDomain.label}
                state={callState}
                orbMode={orbMode}
                onStartCall={startCallFromPhone}
                onHangupCall={hangupCallFromPhone}
                avatarUrl={phoneAvatarUrl}
              />
            </div>

            <div
              className="medical-voice-transcript-col"
              style={{
                transform: `translate3d(${transcriptTranslateX}px,0,0)`,
                opacity: transcriptOpacity
              }}
            >
              <VoiceTranscriptPanel
                transcriptEntries={transcriptEntries}
                transcriptViewportRef={transcriptViewportRef}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
