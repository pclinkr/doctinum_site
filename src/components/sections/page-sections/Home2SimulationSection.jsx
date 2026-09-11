import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Container from '../../layout/Container';
import Icon from '../../ui/Icon';

export default function Home2SimulationSection({ onLaunchSimulation }) {
  const { t } = useTranslation();
  const specialties = t('sections.home2.simulation.specialties', {
    returnObjects: true,
  });

  const [activeSpecialtyId, setActiveSpecialtyId] = useState(
    specialties?.[0]?.id || ''
  );

  useEffect(() => {
    if (!specialties.some((specialty) => specialty.id === activeSpecialtyId)) {
      setActiveSpecialtyId(specialties?.[0]?.id || '');
    }
  }, [specialties, activeSpecialtyId]);

  return (
    <section id="simulation" className="bg-[var(--color-bg)] py-28">
      <Container className="grid items-center gap-14 min-[980px]:grid-cols-[1fr_0.9fr] min-[980px]:gap-20">
        <div>
          <p className="rev ds-text-label mb-6 text-[var(--color-action)]">
            {t('sections.home2.simulation.label')}
          </p>

          <h2 className="rev-mask d1 mb-7 max-w-[20ch] font-serif text-[clamp(2.1rem,3.8vw,3.2rem)] font-[600] leading-[1.12] text-[var(--color-text)]">
            <span>
              {t('sections.home2.simulation.titlePrefix')}{' '}
              <em className="not-italic text-[var(--color-action)]">
                {t('sections.home2.simulation.titleAccent')}
              </em>
            </span>
          </h2>

          <p className="rev d2 mb-6 max-w-[56ch] text-[16px] leading-[1.8] text-[var(--color-muted)]">
            {t('sections.home2.simulation.body')}
          </p>

          <p className="rev d3 max-w-[56ch] text-[13.5px] leading-[1.7] text-[var(--color-subtle)]">
            {t('sections.home2.simulation.note')}
          </p>
        </div>

        <div className="rev d2 relative overflow-hidden rounded-[26px] shadow-[0_40px_80px_-46px_rgba(34,30,26,0.7)]">
          <img
            src="/assets/images/aesthetic_patient.png"
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(165deg,color-mix(in_srgb,var(--color-primary)_88%,transparent)_0%,color-mix(in_srgb,var(--color-primary)_95%,transparent)_100%)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,color-mix(in_srgb,var(--color-accent-1)_22%,transparent)_0%,transparent_62%)]"
          />

          <div className="relative z-[1] px-8 py-14 text-center min-[980px]:px-12">
            <div className="relative mx-auto mb-8 grid h-[104px] w-[104px] place-items-center rounded-full border border-[var(--white-20)]">
              <span className="pointer-events-none absolute inset-[-14px] rounded-full border border-[var(--white-28)] animate-[home2RingPulse_2.4s_ease-in-out_infinite] motion-reduce:animate-none" />
              <Icon
                name="phone"
                size={38}
                strokeColor="var(--color-accent-1)"
              />
            </div>

            <p className="mx-auto mb-2 max-w-[18ch] font-serif text-[26px] font-[600] leading-[1.25] text-[var(--color-white)]">
              {t('sections.home2.simulation.agentName')}
            </p>
            <p className="mb-9 text-[10.5px] uppercase tracking-[0.14em] text-[var(--white-55)]">
              {t('sections.home2.simulation.agentRole')}
            </p>

            {specialties.length > 1 ? (
              <div className="mb-9 flex flex-wrap justify-center gap-2">
                {(specialties || []).map((specialty) => {
                  const isActive = specialty.id === activeSpecialtyId;
                  return (
                    <button
                      key={specialty.id}
                      type="button"
                      onClick={() => setActiveSpecialtyId(specialty.id)}
                      className={`rounded-full border px-4 py-2 text-[10.5px] uppercase tracking-[0.09em] transition-colors duration-300 ease-out ${isActive ? 'border-[var(--white-38)] bg-[var(--white-10)] text-[var(--color-white)]' : 'border-[var(--white-14)] text-[var(--white-46)] hover:border-[var(--white-34)] hover:text-[var(--white-84)]'}`.trim()}
                    >
                      {specialty.label}
                    </button>
                  );
                })}
              </div>
            ) : null}

            <button
              type="button"
              className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[var(--color-white)] px-7 py-4 text-[12.5px] font-[var(--w500)] uppercase tracking-[0.09em] text-[var(--color-primary)] transition-[transform,background-color] duration-300 ease-out hover:-translate-y-[2px] hover:bg-[var(--color-surface)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-1)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-primary)] motion-reduce:hover:translate-y-0"
              onClick={(event) => {
                const triggerRect = event.currentTarget.getBoundingClientRect();
                onLaunchSimulation?.(activeSpecialtyId, {
                  left: triggerRect.left,
                  top: triggerRect.top,
                  width: triggerRect.width,
                  height: triggerRect.height,
                });
              }}
            >
              <span
                aria-hidden="true"
                className="grid h-6 w-6 place-items-center rounded-full bg-[var(--color-action)] text-[var(--color-white)]"
              >
                <svg width="10" height="10" viewBox="0 0 12 12" aria-hidden="true">
                  <path d="M3 1.6v8.8L10.2 6z" fill="currentColor" />
                </svg>
              </span>
              {t('sections.home2.simulation.buttonCta')}
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
