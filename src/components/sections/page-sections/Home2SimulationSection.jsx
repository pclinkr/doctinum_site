import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Container from '../../layout/Container';
import Button from '../../ui/Button';
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
    <section
      id="simulation"
      className="bg-[var(--color-white)] py-24"
    >
      <Container className="grid items-center gap-14 min-[980px]:grid-cols-[1fr_1fr]">
        <div>
          <p className="rev ds-text-label mb-5 text-[var(--color-secondary)]">
            {t('sections.home2.simulation.label')}
          </p>

          <h2 className="rev d1 mb-6 max-w-[20ch] text-[clamp(2rem,3.4vw,2.9rem)] leading-[1.2] text-[var(--color-primary)]">
            {t('sections.home2.simulation.titlePrefix')}{' '}
            <em className="si text-[var(--color-accent-2)]">
              {t('sections.home2.simulation.titleAccent')}
            </em>
          </h2>

          <p className="rev d2 mb-5 max-w-[56ch] text-[15px] leading-[1.82] text-[color-mix(in_srgb,var(--color-primary)_72%,white)]">
            {t('sections.home2.simulation.body')}
          </p>

          <p className="rev d3 text-[13px] leading-[1.7] text-[var(--color-muted)]">
            {t('sections.home2.simulation.note')}
          </p>
        </div>

        <div className="rounded-sm rev d2 relative overflow-hidden bg-[var(--color-primary)] px-8 py-12 min-[980px]:px-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,color-mix(in_srgb,var(--color-primary)_25%,transparent)_0%,transparent_65%)]" />

          <div className="relative z-[1] text-center">
            <div className="relative mx-auto mb-6 grid h-[102px] w-[102px] place-items-center rounded-full border border-[var(--white-14)]">
              <span className="pointer-events-none absolute inset-[-12px] rounded-full border border-[var(--white-40)] animate-[home2RingPulse_2s_ease-in-out_infinite]" />
              <Icon name="phone" size={42} strokeColor="var(--color-white)" />
            </div>

            <p className="mb-1 text-[27px] text-[var(--color-white)]">
              {t('sections.home2.simulation.agentName')}
            </p>
            <p className="mb-8 text-[11px] uppercase tracking-[0.1em] text-[var(--white-40)]">
              {t('sections.home2.simulation.agentRole')}
            </p>

            <div className="mb-8 flex flex-wrap justify-center gap-2">
              {(specialties || []).map((specialty) => {
                const isActive = specialty.id === activeSpecialtyId;
                return (
                  <button
                    key={specialty.id}
                    type="button"
                    onClick={() => setActiveSpecialtyId(specialty.id)}
                    className={`rounded border px-3 py-1.5 text-[10px] uppercase tracking-[0.08em] transition-colors duration-200 ease-out ${isActive ? 'border-[var(--white-38)] bg-[var(--white-10)] text-[var(--color-white)]' : 'border-[var(--white-14)] text-[var(--white-46)] hover:border-[var(--white-34)] hover:text-[var(--white-84)]'}`.trim()}
                  >
                    {specialty.label}
                  </button>
                );
              })}
            </div>

            <Button
              className="w-full bg-[var(--color-success)] py-[14px] text-[12px] uppercase tracking-[0.08em] hover:opacity-90"
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
              {t('sections.home2.simulation.buttonCta')}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
