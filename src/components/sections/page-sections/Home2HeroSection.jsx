import { useTranslation } from 'react-i18next';
import Button from '../../ui/Button';
import Home2CallPreviewBlock from '../../blocks/Home2CallPreviewBlock';
import Container from '../../layout/Container';

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
  const revealClass =
    !instant && storyStarted ? 'opacity-0 animate-fadeUp' : '';
  const hiddenClass = !instant && !storyStarted ? 'opacity-0' : '';
  const instantClass = instant ? 'animate-none opacity-100 translate-y-0' : '';

  return (
    <section className="relative overflow-hidden pt-[var(--nav-h)]">
      <Container className="grid min-h-[calc(100vh-var(--nav-h))] grid-cols-1 gap-0 py-0 min-[1080px]:grid-cols-[1fr_1fr]">
        <div className="relative flex flex-col justify-center py-20 pr-0 min-[1080px]:pr-14">

          <p
            className={`${revealClass || hiddenClass || instantClass} mb-10 inline-flex w-fit items-center gap-[10px] text-[11px] font-[var(--w500)] uppercase tracking-[0.16em] text-[var(--color-secondary)]`.trim()}
            style={revealClass ? { animationDelay: '100ms' } : undefined}
          >
            <span className="h-[6px] w-[6px] rounded-full bg-[var(--color-info)] animate-pulse" />
            {t('sections.home2.hero.kicker')}
          </p>

          <h1
            className={`${revealClass || hiddenClass || instantClass} mb-8`.trim()}
            style={revealClass ? { animationDelay: '240ms' } : undefined}
          >
            {t('sections.home2.hero.titleLine1')}
            <br />
            {t('sections.home2.hero.titleLine2')}{' '}
            <span className="si">
              {t('sections.home2.hero.titleAccent')}
            </span>
          </h1>

          <p
            className={`${revealClass || hiddenClass || instantClass} mb-11 max-w-[50ch] text-[17px] font-light leading-[1.82] text-[color-mix(in_srgb,var(--color-primary)_72%,white)]`.trim()}
            style={revealClass ? { animationDelay: '380ms' } : undefined}
          >
            {t('sections.home2.hero.subtitle')}
          </p>

          <div
            className={`${revealClass || hiddenClass || instantClass} flex flex-wrap gap-4`.trim()}
            style={revealClass ? { animationDelay: '520ms' } : undefined}
          >
            <Button
              variant="heroPrimary"
              onClick={onJumpToSimulation}
            >
              {t('sections.home2.hero.primaryCta')}
            </Button>
            <Button
              variant="heroSecondary"
              onClick={() => onNavigate('demo')}
            >
              {t('sections.home2.hero.secondaryCta')}
            </Button>
          </div>

          <div
            className={`${revealClass || hiddenClass || instantClass} mt-10 flex flex-wrap gap-x-10 gap-y-5 border-t border-[var(--color-border)] pt-8`.trim()}
            style={revealClass ? { animationDelay: '660ms' } : undefined}
          >
            {(trustItems || []).map((item) => (
              <div key={item.value}>
                <p className="text-[36px] font-[var(--w400)] leading-none text-[var(--color-muted)]">
                  {item.value}
                </p>
                <p className="mt-1 text-[12px] leading-[1.5] text-[var(--color-muted)]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex items-center justify-center overflow-hidden px-6 py-14 min-[1080px]:px-10 min-[1080px]:py-16">
          <div className="pointer-events-none absolute inset-0" />
          <div
            className={`${revealClass || hiddenClass || instantClass}`.trim()}
            style={revealClass ? { animationDelay: '560ms' } : undefined}
          >
            <Home2CallPreviewBlock
              content={t('sections.home2.hero.preview', {
                returnObjects: true,
              })}
              onJumpToSimulation={onJumpToSimulation}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
