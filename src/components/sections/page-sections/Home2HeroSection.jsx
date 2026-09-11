import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../../ui/Button';
import Container from '../../layout/Container';
import HeroShowcaseFigure from '../../blocks/HeroShowcaseFigure';

const REVEAL_FAILSAFE_MS = 1600;

export default function Home2HeroSection({
  onNavigate,
  storyStarted,
  instant = false,
  onJumpToSimulation,
}) {
  const { t } = useTranslation();
  const trustItems = t('sections.home2.hero.trustItems', {
    returnObjects: true,
  });
  const showcase = t('sections.home2.hero.showcase', { returnObjects: true });

  // Filet de sécurité: le hero ne doit jamais rester invisible si le loader
  // ne signale pas son état (onglet en arrière-plan, animation non jouée...).
  const [failsafeReveal, setFailsafeReveal] = useState(false);

  useEffect(() => {
    const timerId = window.setTimeout(
      () => setFailsafeReveal(true),
      REVEAL_FAILSAFE_MS
    );
    return () => window.clearTimeout(timerId);
  }, []);

  const playReveal = instant || storyStarted || failsafeReveal;
  const revealClass = !instant && playReveal ? 'opacity-0 animate-fadeUp' : '';
  const hiddenClass = !instant && !playReveal ? 'opacity-0' : '';
  const instantClass = instant ? 'animate-none opacity-100 translate-y-0' : '';
  const blockClass = `${revealClass || hiddenClass || instantClass}`.trim();
  const maskDelay = (baseMs) => `${instant ? Math.round(baseMs / 3) : baseMs}ms`;

  return (
    <section className="relative overflow-hidden bg-[var(--color-bg)] pt-[var(--nav-h)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-10%] top-[-18%] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--color-accent-1)_28%,transparent)_0%,transparent_68%)] blur-[10px]"
      />

      <Container className="relative grid min-h-[calc(100vh-var(--nav-h))] grid-cols-1 items-start gap-14 pb-16 pt-24 min-[1080px]:grid-cols-[1fr_0.95fr] min-[1080px]:gap-20 min-[1080px]:pb-0 min-[1080px]:pt-[104px]">
        <div className="relative flex flex-col justify-start">
          <h1 className="mb-8 font-serif text-[clamp(2.9rem,5.4vw,4.6rem)] font-[600] leading-[1.04] tracking-[-0.015em] text-[var(--color-text)]">
            <span className="mask-line">
              <span
                className={playReveal ? 'mask-in' : ''}
                style={{ animationDelay: maskDelay(220) }}
              >
                {t('sections.home2.hero.titleLine1')}
              </span>
            </span>
            <span className="mask-line">
              <span
                className={playReveal ? 'mask-in' : ''}
                style={{ animationDelay: maskDelay(340) }}
              >
                {t('sections.home2.hero.titleLine2')}{' '}
                <em className="not-italic text-[var(--color-action)]">
                  {t('sections.home2.hero.titleAccent')}
                </em>
              </span>
            </span>
          </h1>

          <p
            className={`${blockClass} mb-10 max-w-[52ch] text-[16.5px] leading-[1.78] text-[var(--color-muted)]`}
            style={revealClass ? { animationDelay: '420ms' } : undefined}
          >
            {t('sections.home2.hero.subtitle')}
          </p>

          <div
            className={`${blockClass} flex flex-wrap gap-3`}
            style={revealClass ? { animationDelay: '540ms' } : undefined}
          >
            <Button variant="heroPrimary" onClick={() => onNavigate('demo')}>
              {t('sections.home2.hero.primaryCta')}
            </Button>
          </div>

          <div
            className={`${blockClass} mt-12 flex flex-wrap gap-x-12 gap-y-6 border-t border-[var(--color-border)] pt-8`}
            style={revealClass ? { animationDelay: '660ms' } : undefined}
          >
            {(trustItems || []).map((item) => (
              <div key={item.value}>
                <p className="font-serif text-[30px] font-[600] leading-none text-[var(--color-accent-1)]">
                  {item.value}
                </p>
                <p className="mt-2 text-[12.5px] leading-[1.5] text-[var(--color-muted)]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex items-start justify-center">
          <HeroShowcaseFigure
            content={showcase}
            instant={instant}
            playReveal={playReveal}
            onJumpToSimulation={onJumpToSimulation}
          />
        </div>
      </Container>
    </section>
  );
}
