import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import VoiceCallPhone from '../../ui/VoiceCallPhone';
import VoiceTranscriptPanel from '../../ui/VoiceTranscriptPanel';
import ConversionModal from '../../ui/ConversionModal';
import { getRetellWebClientClass } from '../../../lib/retellWebCall';

const DEFAULT_ENDPOINT_TEMPLATE = '/api/retell/test-web-call';
const OVERLAY_TRANSITION_MS = 1000;

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
        id: `live-${index}`,
        role: normalizeRole(row?.role ?? row?.speaker ?? row?.speaker_type),
        text,
      };
    })
    .filter(Boolean);
}


export default function Home2VoiceSimulationOverlay({
  specialtyId,
  launchOriginRect,
  isClosing = false,
  onRequestClose,
}) {
  const { t, i18n } = useTranslation();
  const [isShown, setIsShown] = useState(false);
  const [callState, setCallState] = useState('idle');
  const [orbMode, setOrbMode] = useState('listening');
  const [callStatusLabel, setCallStatusLabel] = useState('');
  const [transcriptEntries, setTranscriptEntries] = useState([]);
  const [showConversionModal, setShowConversionModal] = useState(false);

  const callAttemptIdRef = useRef(0);
  const retellClientRef = useRef(null);
  const transcriptViewportRef = useRef(null);
  const fallbackAudioRef = useRef(null);
  const ringAudioRef = useRef(null);
  const fallbackTimerIdsRef = useRef([]);
  const maxDurationTimerRef = useRef(null);
  const autoLaunchDoneRef = useRef(false);
  const modalFrameRef = useRef(null);
  const [modalFrameRect, setModalFrameRect] = useState(null);

    const fallbackTranscripts = useMemo(
    () =>
      t('sections.medicalVoice.fallbackTranscripts', { returnObjects: true }),
    [t, i18n.resolvedLanguage, i18n.language]
  );

  const specialtyLabel = useMemo(
    () => {
      const specialties = t('sections.home2.simulation.specialties', { returnObjects: true });
      const specialty = specialties?.find(s => s.id === specialtyId);
      return specialty?.label || specialtyId;
    },
    [t, i18n.resolvedLanguage, i18n.language, specialtyId]
  );

  const simulationResults = useMemo(
    () => t('sections.medicalVoice.results', { returnObjects: true }),
    [t, i18n.resolvedLanguage, i18n.language]
  );

    const selectedSimulationResult = useMemo(
    () =>
      simulationResults?.[specialtyId] ||
      simulationResults?.default ||
      null,
    [specialtyId, simulationResults]
  );

  const clearFallbackTimers = () => {
    fallbackTimerIdsRef.current.forEach((id) => {
      window.clearTimeout(id);
      window.clearInterval(id);
    });
    fallbackTimerIdsRef.current = [];
  };

  const clearMaxDurationTimer = () => {
    if (maxDurationTimerRef.current) {
      window.clearTimeout(maxDurationTimerRef.current);
      maxDurationTimerRef.current = null;
    }
  };

  const startMaxDurationTimer = () => {
    clearMaxDurationTimer();
    // 2 minutes = 120000 ms
    maxDurationTimerRef.current = window.setTimeout(() => {
      hangupCallFromPhone();
    }, 120000);
  };

  const stopFallbackAudio = () => {
    if (!fallbackAudioRef.current) return;
    fallbackAudioRef.current.pause();
    fallbackAudioRef.current.currentTime = 0;
    fallbackAudioRef.current = null;
  };

  const playRingAudio = () => {
    try {
      const ringAudio = new Audio('/sounds/ring_and_pick_up.mp3');
      ringAudioRef.current = ringAudio;
      ringAudio.play().catch((error) => {
        console.warn('Ring audio failed to play:', error);
      });
    } catch (error) {
      console.warn('Ring audio creation failed:', error);
    }
  };

  const stopRingAudio = () => {
    if (!ringAudioRef.current) return;
    ringAudioRef.current.pause();
    ringAudioRef.current.currentTime = 0;
    ringAudioRef.current = null;
  };

  const handleConversionDemo = () => {
    setShowConversionModal(false);
    window.location.href = '/demo';
  };

  const handleConversionCancel = () => {
    setShowConversionModal(false);
    runFallbackDemo('rateLimitExceeded');
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
      
      
      // Jouer le son de sonnerie avant le fallback
      playRingAudio();

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
        fallbackTranscripts[specialtyId] ||
        fallbackTranscripts.ortho ||
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
          // Arrêter le son de sonnerie au début de la première ligne
          if (index === 0) {
            stopRingAudio();
            startMaxDurationTimer();
          }
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
        },
        (lastEntry?.delayMs || 0) + finalTypingTailMs
      );

      fallbackTimerIdsRef.current.push(endTimerId);
    },
    [fallbackTranscripts, specialtyId, t]
  );

  const startRetellCall = useCallback(async () => {
    const attemptId = Date.now();
    callAttemptIdRef.current = attemptId;

    stopFallbackAudio();
    clearFallbackTimers();
    await stopRetellClient();

    if (callAttemptIdRef.current !== attemptId) {
      return;
    }

    // Jouer le son de sonnerie
    playRingAudio();
    setCallState('connecting');
    setCallStatusLabel(t('sections.medicalVoice.status.creating'));
    setOrbMode('listening');
    setTranscriptEntries([]);
    
    try {
      const endpoint = resolveBackendEndpoint();
      const webCallResponse = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          demoType: specialtyId,
        }),
      });

      const webCallPayload = await webCallResponse.json();
      
      // Handle rate limit or budget exceeded
      if (!webCallResponse.ok) {
        if (webCallResponse.status === 429) {
          stopRingAudio();
          setCallState('idle');
          setCallStatusLabel('');
          setOrbMode('listening');
          
          // Show conversion modal
          setShowConversionModal(true);
          return;
        }
        
        throw new Error(
          `Backend request failed with status ${webCallResponse.status}`
        );
      }
      
      if (callAttemptIdRef.current !== attemptId) return;

      const accessToken = extractAccessToken(webCallPayload);
      if (!accessToken) {
        throw new Error('Missing data.accessToken in backend response.');
      }

      if (callAttemptIdRef.current !== attemptId) return;

      setCallStatusLabel(t('sections.medicalVoice.status.connectingRetell'));

      const RetellWebClient = await getRetellWebClientClass();
      
      if (callAttemptIdRef.current !== attemptId) return;
      
      const retellClient = new RetellWebClient();
      retellClientRef.current = retellClient;

      retellClient.on('call_started', () => {
        if (callAttemptIdRef.current !== attemptId) {
          // L'appel a été annulé pendant la connexion, arrêter immédiatement
          try {
            retellClient.stopCall();
          } catch (e) {
            // Ignorer les erreurs
          }
          // Mettre l'état à jour pour cohérence
          setCallState('ended');
          setCallStatusLabel(t('sections.medicalVoice.status.callFinished'));
          setOrbMode('listening');
          stopRingAudio();
          return;
        }
        stopRingAudio();
        startMaxDurationTimer();
        setCallState('live');
        setCallStatusLabel(t('sections.medicalVoice.status.liveRunning'));
        setOrbMode('listening');
      });

      retellClient.on('call_ended', () => {
        if (callAttemptIdRef.current !== attemptId) return;
        setCallState('ended');
        setCallStatusLabel(t('sections.medicalVoice.status.callFinished'));
        setOrbMode('listening');
      });

      retellClient.on('update', (updatePayload) => {
        if (callAttemptIdRef.current !== attemptId) {
          // L'appel a été annulé, arrêter immédiatement
          try {
            retellClient.stopCall();
          } catch (e) {
            // Ignorer les erreurs
          }
          // Mettre l'état à jour pour cohérence
          setCallState('ended');
          setCallStatusLabel(t('sections.medicalVoice.status.callFinished'));
          setOrbMode('listening');
          return;
        }
        const liveTranscriptEntries = normalizeTranscriptEntries(updatePayload);
        if (!liveTranscriptEntries.length) return;

        const latestEntry =
          liveTranscriptEntries[liveTranscriptEntries.length - 1];
        if (latestEntry) {
          setOrbModeFromRole(latestEntry.role);
        }

        setTranscriptEntries(liveTranscriptEntries);
      });

      retellClient.on('error', (retellError) => {
        if (callAttemptIdRef.current !== attemptId) return;
        console.error('Retell live call error:', retellError);
        runFallbackDemo('liveUnavailable');
      });

      if (callAttemptIdRef.current !== attemptId) return;

      await retellClient.startCall({ accessToken });
    } catch (error) {
      if (callAttemptIdRef.current !== attemptId) return;
      console.error('Failed to start Retell call:', error);
      runFallbackDemo('liveUnavailable');
    }
  }, [runFallbackDemo, specialtyId, t]);

  const requestOverlayClose = useCallback(() => {
    // Invalider l'appel en cours
    callAttemptIdRef.current = Date.now();
    
    // Fermer la modale (le cleanup se fera automatiquement au démontage)
    onRequestClose?.();
  }, [onRequestClose]);

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

  const hangupCallFromPhone = async () => {
    callAttemptIdRef.current = Date.now();
    clearFallbackTimers();
    clearMaxDurationTimer();
    stopFallbackAudio();
    stopRingAudio();
    await stopRetellClient();
    
    setCallState('ended');
    setCallStatusLabel(t('sections.medicalVoice.status.callFinished'));
    setOrbMode('listening');
  };


  // Cleanup au démontage du composant
  useEffect(() => {
    return () => {
      clearFallbackTimers();
      clearMaxDurationTimer();
      stopFallbackAudio();
      stopRingAudio();
      stopRetellClient();
    };
  }, []);

  useEffect(() => {
    const updateModalFrameRect = () => {
      if (!modalFrameRef.current) return;
      setModalFrameRect(modalFrameRef.current.getBoundingClientRect());
    };

    updateModalFrameRect();
    window.addEventListener('resize', updateModalFrameRect);

    return () => {
      window.removeEventListener('resize', updateModalFrameRect);
    };
  }, [isShown, isClosing, launchOriginRect]);

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
      stopFallbackAudio();
      stopRetellClient();
    };
  }, []);

  const shouldShowConversation =
    callState === 'connecting' ||
    callState === 'live' ||
    callState === 'fallback';

  const shouldShowResults = callState === 'ended' && selectedSimulationResult;

  const modalTransformOrigin = useMemo(() => {
    if (!launchOriginRect || !modalFrameRect) return '50% 50%';

    const launchCenterX = launchOriginRect.left + launchOriginRect.width * 0.5;
    const launchCenterY = launchOriginRect.top + launchOriginRect.height * 0.5;
    const originX = launchCenterX - modalFrameRect.left;
    const originY = launchCenterY - modalFrameRect.top;

    return originX + 'px ' + originY + 'px';
  }, [launchOriginRect, modalFrameRect]);

  const modalHiddenTransform = launchOriginRect
    ? 'translate3d(0,0,0) scale(0.14)'
    : 'translate3d(0,20px,0) scale(0.96)';

  const modalTransform =
    isShown && !isClosing
      ? 'translate3d(0,0,0) scale(1)'
      : modalHiddenTransform;

  const phoneAvatarUrl =
    process.env.NEXT_PUBLIC_VOICE_DEMO_AVATAR_URL ||
    '/assets/voice-demo/avatar-default.jpg';

  return (
    <div
      className={`fixed inset-0 z-[220] overflow-y-auto overscroll-contain transition-opacity ease-out ${isShown && !isClosing ? 'opacity-100' : 'pointer-events-none opacity-0'}`.trim()}
      style={{ transitionDuration: `${OVERLAY_TRANSITION_MS}ms` }}
      role="dialog"
      aria-modal="true"
      aria-label={t('sections.home2.simulation.label')}
    >
      <div className="absolute inset-0 bg-[var(--color-surface)]" />
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(255,255,255,0.1)_0%,transparent_46%),radial-gradient(circle_at_84%_84%,rgba(255,255,255,0.07)_0%,transparent_44%)]" /> */}

      <div className="relative mx-auto flex min-h-screen w-full max-w-[1240px] items-start justify-center px-4 py-4 min-[980px]:items-center min-[980px]:px-8 min-[980px]:py-8">
        <div
          ref={modalFrameRef}
          className="relative flex max-h-[calc(100dvh-2rem)] w-full flex-col overflow-hidden rounded-[24px] border border-[var(--white-20)] bg-[var(--gradient-voice-simulation-overlay)] transition-all ease-out min-[980px]:max-h-[calc(100dvh-4rem)]"
          style={{
            transform: modalTransform,
            transformOrigin: modalTransformOrigin,
            transitionDuration: `${OVERLAY_TRANSITION_MS}ms`,
          }}
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

          <div className="grid flex-1 gap-6 overflow-y-auto overscroll-contain px-4 pb-5 pt-12 min-[980px]:grid-cols-[minmax(460px,1.08fr)_1fr] min-[980px]:gap-8 min-[980px]:px-8 min-[980px]:pb-8 min-[980px]:pt-8">
            <div className="flex min-h-[340px] items-center justify-center min-[980px]:min-h-[520px]">
              <p className="sr-only" aria-live="polite">
                {callStatusLabel}
              </p>
              <div
                className="flex min-h-0 w-full flex-1 items-center justify-center"
                style={{
                  '--medical-phone-frame-width': 'clamp(198px, 30vw, 320px)',
                  '--medical-phone-frame-height':
                    'calc(var(--medical-phone-frame-width) * 1.8868)',
                  '--medical-phone-bottom-pad': '34px',
                }}
              >
                <VoiceCallPhone
                  domainLabel={specialtyLabel || ''}
                  state={callState}
                  orbMode={orbMode}
                  onStartCall={startCallFromPhone}
                  onHangupCall={hangupCallFromPhone}
                  avatarUrl={phoneAvatarUrl}
                />
              </div>
            </div>

            <div
              className={`relative flex h-[300px] min-h-[300px] flex-col overflow-hidden rounded-[20px] bg-[var(--color-white)]/78 p-4 transition-all duration-300 ease-out min-[980px]:h-[520px] min-[980px]:min-h-[520px] min-[980px]:p-6 ${
                shouldShowConversation || shouldShowResults
                  ? 'opacity-100'
                  : 'opacity-88'
              }`.trim()}
            >
              {shouldShowResults ? (
                <div className="min-h-0 flex-1 overflow-y-auto pr-1 [scrollbar-width:thin]">
                  <div className="space-y-4">
                    <div className="rounded-[10px] border border-[var(--color-info)]/20 bg-[var(--color-info)]/5 px-3 py-2">
                      <p className="text-[15px] leading-[1.6] text-[var(--color-info)]">
                        ℹ️  {simulationResults?.disclaimer || ''}
                      </p>
                    </div>

                    <div className="rounded-[14px] border border-[var(--ink-08)] bg-[var(--color-white)] p-3">
                      <p className="text-[11px] font-[var(--w500)] uppercase tracking-[0.08em] text-[var(--muted)]">
                        {selectedSimulationResult.header}
                      </p>
                      <h4 className="mt-2 text-[16px] font-[var(--w500)] leading-[1.4] text-[var(--color-primary)]">
                        {selectedSimulationResult.title}
                      </h4>
                    </div>

                    <div className="rounded-[14px] border border-[var(--ink-08)] bg-[var(--color-white)] p-3">
                      <p className="mb-3 text-[11px] font-[var(--w500)] uppercase tracking-[0.08em] text-[var(--muted)]">
                        {selectedSimulationResult.metricsTitle}
                      </p>
                      <div className="space-y-2">
                        {(selectedSimulationResult.metrics || []).map(
                          (item) => (
                            <div
                              key={item.label}
                              className="flex items-start justify-between gap-3 rounded-[10px] bg-[var(--color-surface)] px-3 py-2"
                            >
                              <p className="text-[12px] text-[var(--muted)]">
                                {item.label}
                              </p>
                              <p className="text-right text-[12px] font-[var(--w500)] text-[var(--color-primary)]">
                                {item.value}
                              </p>
                            </div>
                          )
                        )}
                      </div>
                    </div>

                    {selectedSimulationResult.alert ? (
                      <div className="rounded-[14px] border border-[#efc2c2] bg-[#fff2f2] p-3">
                        <p className="text-[11px] font-[var(--w500)] uppercase tracking-[0.08em] text-[#9f3f3f]">
                          {selectedSimulationResult.alert.badge}
                        </p>
                        <p className="mt-2 text-[14px] font-[var(--w500)] text-[#7a2626]">
                          {selectedSimulationResult.alert.title}
                        </p>
                        <p className="mt-1 text-[12px] leading-[1.55] text-[#8d3939]">
                          {selectedSimulationResult.alert.body}
                        </p>
                      </div>
                    ) : null}
                  </div>
                </div>
              ) : (
                <div className="min-h-0 flex-1 overflow-hidden">
                  <VoiceTranscriptPanel
                    transcriptEntries={transcriptEntries}
                    transcriptViewportRef={transcriptViewportRef}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <ConversionModal
        isOpen={showConversionModal}
        onCancel={handleConversionCancel}
        onDemo={handleConversionDemo}
      />
    </div>
  );
}
