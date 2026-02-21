import { useEffect, useRef, useState } from 'react';
import Button from '../../ui/Button';

function clamp(value, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

function progressBetween(progressValue, start, end) {
  if (end <= start) return 0;
  return clamp((progressValue - start) / (end - start));
}

export default function HomeVoiceAgentSection({ onNavigate }) {
  const sectionRef = useRef(null);
  const progressRef = useRef(0);
  const [progress, setProgress] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const syncPreference = () => setPrefersReducedMotion(mediaQuery.matches);

    syncPreference();
    mediaQuery.addEventListener('change', syncPreference);
    return () => mediaQuery.removeEventListener('change', syncPreference);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setProgress(1);
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
      setProgress(nextProgress);
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

  const introProgress = progressBetween(progress, 0.02, 0.24);
  const phoneFocusProgress = progressBetween(progress, 0.16, 0.52);
  const transcriptProgress = progressBetween(progress, 0.42, 0.86);
  const finishProgress = progressBetween(progress, 0.78, 1.0);

  const phoneScale = 0.84 + phoneFocusProgress * 0.18 - finishProgress * 0.04;
  const phoneTranslateY = 34 * (1 - phoneFocusProgress) - finishProgress * 10;
  const phoneRotate = -4 * (1 - phoneFocusProgress) + finishProgress * 1.5;
  const leftTranslateX = -54 * (1 - introProgress);
  const rightTranslateX = 52 * (1 - transcriptProgress);
  const leftOpacity = 0.24 + introProgress * 0.76;
  const rightOpacity = 0.12 + transcriptProgress * 0.88;

  const transcriptEntries = [
    { speaker: 'Alex', text: 'Hello, this is Alex from PaceLinker AI.', start: 0.46 },
    { speaker: 'Alex', text: 'I can answer your questions and guide your next steps.', start: 0.58 },
    { speaker: 'You', text: 'Great, show me how a real call flow starts.', start: 0.7 }
  ];

  return (
    <section className="voice-demo-scroll" ref={sectionRef}>
      <div className="voice-demo-sticky">
        <div className="voice-demo-shell">
          <div className="voice-demo-head">
            <p className="voice-demo-label">Voice Agent Playground</p>
            <h2 className="voice-demo-title">
              Test an <span className="si">AI voice agent</span> while scrolling
            </h2>
            <p className="voice-demo-sub">
              The sequence plays inside this section first. Once the sequence is done, the next section appears naturally.
            </p>
          </div>

          <div className="voice-demo-stage">
            <div
              className="voice-demo-side left"
              style={{ transform: `translate3d(${leftTranslateX}px,0,0)`, opacity: leftOpacity }}
            >
              <div className="voice-dialog-chip">
                <span className="voice-dialog-dot" />
                Dialogue
              </div>
              <div className="voice-goal-card">
                Goal: introduce the AI voice agent and invite the user to start a first interaction.
              </div>
              <Button className="voice-test-button" onClick={() => onNavigate('contact')}>
                Launch voice demo
              </Button>
            </div>

            <div
              className="voice-phone-wrap"
              style={{ transform: `translate3d(0,${phoneTranslateY}px,0) scale(${phoneScale}) rotate(${phoneRotate}deg)` }}
            >
              <div className="voice-phone-glow" />
              <div className="voice-phone-frame">
                <div className="voice-phone-notch" />
                <div className="voice-phone-content">
                  <div className="voice-avatar" />
                  <div className="voice-agent-name">Alex</div>
                  <div className="voice-agent-role">PaceLinker AI</div>
                </div>
                <div className="voice-answer-row">
                  <span className="voice-answer-icon">☎</span>
                  <span>Click to answer</span>
                </div>
              </div>
            </div>

            <div
              className="voice-demo-side right"
              style={{ transform: `translate3d(${rightTranslateX}px,0,0)`, opacity: rightOpacity }}
            >
              {transcriptEntries.map((entry) => {
                const lineProgress = progressBetween(progress, entry.start, entry.start + 0.16);
                return (
                  <div
                    key={`${entry.speaker}-${entry.text}`}
                    className="voice-transcript-line"
                    style={{
                      opacity: 0.14 + lineProgress * 0.86,
                      transform: `translate3d(0,${(1 - lineProgress) * 16}px,0)`
                    }}
                  >
                    <p className="voice-transcript-speaker">{entry.speaker}</p>
                    <p className="voice-transcript-text">{entry.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
