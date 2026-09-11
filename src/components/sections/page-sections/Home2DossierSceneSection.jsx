import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Container from '../../layout/Container';

const TAG_CLASSES = {
  green:
    'border-[color-mix(in_srgb,var(--color-success)_38%,transparent)] text-[var(--color-success)] bg-[color-mix(in_srgb,var(--color-success)_9%,transparent)]',
  warn: 'border-[color-mix(in_srgb,var(--color-danger)_34%,transparent)] text-[var(--color-danger)] bg-[color-mix(in_srgb,var(--color-danger)_8%,transparent)]',
  muted:
    'border-[var(--color-border-strong)] text-[var(--color-muted)] bg-transparent',
};

const WAVE_BARS = [
  6, 13, 9, 20, 14, 26, 17, 32, 21, 27, 15, 22, 11, 18, 8, 14, 19, 10, 24, 12,
  17, 9, 21, 7,
];

/**
 * Scène pilotée par le scroll: à mesure que l'on descend, la conversation
 * avance et le dossier de pré-consultation se remplit ligne par ligne.
 * Au repos (pas de JS, mobile, mouvement réduit) tout est déjà visible.
 */
export default function Home2DossierSceneSection() {
  const { t } = useTranslation();
  const steps = t('sections.home2.dossierScene.steps', { returnObjects: true });
  const stepCount = Array.isArray(steps) ? steps.length : 0;

  const sectionRef = useRef(null);
  const [isScrubbing, setIsScrubbing] = useState(false);
  const [activeIndex, setActiveIndex] = useState(Math.max(0, stepCount - 1));

  useEffect(() => {
    if (!stepCount) return undefined;

    const reducedMotionQuery = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    );
    const wideViewportQuery = window.matchMedia('(min-width: 900px)');

    let frameId = 0;

    const canScrub = () =>
      wideViewportQuery.matches && !reducedMotionQuery.matches;

    const readProgress = () => {
      frameId = 0;

      if (!canScrub()) {
        setActiveIndex(stepCount - 1);
        return;
      }

      const sectionElement = sectionRef.current;
      if (!sectionElement) return;

      const bounds = sectionElement.getBoundingClientRect();
      const scrollableDistance = bounds.height - (window.innerHeight || 0);
      if (scrollableDistance <= 0) {
        setActiveIndex(stepCount - 1);
        return;
      }

      const progress = Math.min(
        1,
        Math.max(0, -bounds.top / scrollableDistance)
      );
      const nextIndex = Math.min(
        stepCount - 1,
        Math.floor(progress * stepCount + 0.0001)
      );
      setActiveIndex(nextIndex);
    };

    const scheduleRead = () => {
      if (frameId) return;
      frameId = window.requestAnimationFrame(readProgress);
    };

    const syncMode = () => {
      const scrubbing = canScrub();
      setIsScrubbing(scrubbing);
      if (!scrubbing) {
        setActiveIndex(stepCount - 1);
        return;
      }
      scheduleRead();
    };

    syncMode();
    window.addEventListener('scroll', scheduleRead, { passive: true });
    window.addEventListener('resize', syncMode);
    reducedMotionQuery.addEventListener('change', syncMode);
    wideViewportQuery.addEventListener('change', syncMode);

    return () => {
      window.removeEventListener('scroll', scheduleRead);
      window.removeEventListener('resize', syncMode);
      reducedMotionQuery.removeEventListener('change', syncMode);
      wideViewportQuery.removeEventListener('change', syncMode);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, [stepCount]);

  if (!stepCount) return null;

  const activeStep = steps[activeIndex] || steps[0];
  const completedCount = activeIndex + 1;
  const completion = Math.round((completedCount / stepCount) * 100);

  return (
    <section
      id="dossier"
      ref={sectionRef}
      className={`relative bg-[var(--color-surface)] ${isScrubbing ? 'min-[900px]:h-[420vh]' : ''}`.trim()}
    >
      <div
        className={
          isScrubbing
            ? 'min-[900px]:sticky min-[900px]:top-[var(--nav-h)] min-[900px]:flex min-[900px]:min-h-[calc(100vh-var(--nav-h))] min-[900px]:items-center'
            : ''
        }
      >
        <Container className="w-full py-28 min-[900px]:py-16">
          <div className="grid items-center gap-14 min-[900px]:grid-cols-[1fr_0.88fr] min-[900px]:gap-20">
            {/* Colonne voix */}
            <div>
              <p className="ds-text-label mb-6 text-[var(--color-action)]">
                {t('sections.home2.dossierScene.label')}
              </p>

              <h2 className="mb-6 max-w-[16ch] font-serif text-[clamp(2.1rem,3.8vw,3.2rem)] font-[600] leading-[1.12] text-[var(--color-text)]">
                {t('sections.home2.dossierScene.titlePrefix')}{' '}
                <em className="not-italic text-[var(--color-action)]">
                  {t('sections.home2.dossierScene.titleAccent')}
                </em>
              </h2>

              <p className="mb-12 max-w-[48ch] text-[16px] leading-[1.8] text-[var(--color-muted)]">
                {t('sections.home2.dossierScene.body')}
              </p>

              {isScrubbing ? (
                <div className="rounded-[22px] border border-[var(--color-border)] bg-[var(--color-white)] px-8 py-7">
                  <div className="mb-6 flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="grid h-9 w-9 place-items-center rounded-full bg-[var(--color-surface)] font-serif text-[15px] font-[600] text-[var(--color-action)]"
                    >
                      {activeStep.role?.charAt(0)}
                    </span>
                    <div>
                      <p className="text-[12.5px] font-[var(--w500)] leading-tight text-[var(--color-text)]">
                        {activeStep.role}
                      </p>
                      <p className="text-[11.5px] leading-tight text-[var(--color-subtle)]">
                        {t('sections.home2.dossierScene.speakerMeta')}
                      </p>
                    </div>
                  </div>

                  <p
                    key={activeIndex}
                    className="min-h-[3.6em] animate-fadeUp font-serif text-[clamp(1.35rem,2.3vw,1.85rem)] font-[500] leading-[1.4] text-[var(--color-text)]"
                  >
                    {activeStep.voice}
                  </p>

                  <div
                    aria-hidden="true"
                    className="mt-7 flex h-8 items-center gap-[3px]"
                  >
                    {WAVE_BARS.map((barHeight, barIndex) => (
                      <span
                        key={barIndex}
                        className="voice-bar w-[3px] rounded-full bg-[var(--color-accent-1)]"
                        style={{
                          height: `${barHeight}px`,
                          animationDelay: `${barIndex * 70}ms`,
                          opacity: 0.35 + (barHeight / 32) * 0.65,
                        }}
                      />
                    ))}
                  </div>
                </div>
              ) : null}
            </div>

            {/* Colonne dossier */}
            <div className="rounded-[26px] border border-[var(--color-border)] bg-[var(--color-white)] p-8 shadow-[0_36px_70px_-46px_rgba(34,30,26,0.5)]">
              <div className="mb-7 flex items-end justify-between gap-4 border-b border-[var(--color-border)] pb-5">
                <p className="text-[10.5px] font-[var(--w500)] uppercase tracking-[0.14em] text-[var(--color-action)]">
                  {t('sections.home2.dossierScene.cardTitle')}
                </p>
                {isScrubbing ? (
                  <p className="shrink-0 text-right font-serif text-[26px] font-[600] leading-none text-[var(--color-accent-1)] [font-variant-numeric:tabular-nums]">
                    {completion}
                    <span className="text-[15px]">%</span>
                    <span className="ml-2 font-sans text-[10px] font-[400] uppercase tracking-[0.1em] text-[var(--color-subtle)]">
                      {t('sections.home2.dossierScene.completionLabel')}
                    </span>
                  </p>
                ) : null}
              </div>

              <ul className="m-0 flex list-none flex-col p-0">
                {steps.map((step, index) => {
                  const isFilled = !isScrubbing || index <= activeIndex;

                  return (
                    <li
                      key={step.label}
                      className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--color-border)] py-4 transition-[opacity,transform] duration-700 ease-out last:border-b-0"
                      style={{
                        opacity: isFilled ? 1 : 0.22,
                        transform: isFilled
                          ? 'translateY(0)'
                          : 'translateY(6px)',
                      }}
                    >
                      <span className="text-[14.5px] text-[var(--color-muted)]">
                        {step.label}
                      </span>

                      <span className="flex items-center gap-2.5 text-[14.5px] font-[var(--w500)] text-[var(--color-text)]">
                        {isFilled ? (
                          <>
                            {step.value}
                            {step.tagLabel ? (
                              <span
                                className={`inline-flex rounded-full border px-2.5 py-[3px] text-[9.5px] uppercase tracking-[0.09em] ${TAG_CLASSES[step.tagTone] || TAG_CLASSES.muted}`}
                              >
                                {step.tagLabel}
                              </span>
                            ) : null}
                          </>
                        ) : (
                          <span
                            aria-hidden="true"
                            className="inline-block h-[9px] w-24 rounded-full bg-[var(--color-surface)]"
                          />
                        )}
                      </span>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-2 border-t border-[var(--color-border)] pt-5 text-[12px] text-[var(--color-subtle)]">
                <span>{t('sections.home2.dossierScene.footerLeft')}</span>
                <span>{t('sections.home2.dossierScene.footerRight')}</span>
              </div>
            </div>
          </div>

          {isScrubbing ? (
            <div
              className="mt-12 flex items-center gap-2"
              role="presentation"
              aria-hidden="true"
            >
              {steps.map((step, index) => (
                <span
                  key={step.label}
                  className="h-px flex-1 origin-left transition-colors duration-500 ease-out"
                  style={{
                    backgroundColor:
                      index <= activeIndex
                        ? 'var(--color-accent-1)'
                        : 'var(--color-border-strong)',
                  }}
                />
              ))}
            </div>
          ) : null}
        </Container>
      </div>
    </section>
  );
}
