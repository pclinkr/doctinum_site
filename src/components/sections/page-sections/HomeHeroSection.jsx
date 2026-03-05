import Button from '../../ui/Button';
import StorySliderPhone from '../../ui/StorySliderPhone';
import { useTranslation } from 'react-i18next';
import Container from '../../layout/Container';

export default function HomeHeroSection({
  onNavigate,
  storyStarted,
  storyGradients,
  storyDurationMs,
  instant = false,
}) {
  const { t } = useTranslation();
  const shouldReveal = !instant && storyStarted;
  const instantClass = instant ? 'animate-none opacity-100 translate-y-0' : '';
  const hiddenUntilRevealClass = !instant && !storyStarted ? 'opacity-0' : '';
  const heroTitleClass = shouldReveal
    ? 'opacity-0 animate-fadeUp'
    : `${hiddenUntilRevealClass} ${instantClass}`;
  const heroBodyClass = shouldReveal
    ? 'opacity-0 animate-fadeUp'
    : `${hiddenUntilRevealClass} ${instantClass}`;
  const heroCtaClass = shouldReveal
    ? 'opacity-0 animate-fadeUp'
    : `${hiddenUntilRevealClass} ${instantClass}`;

  return (
    <Container
      as="section"
      className="grid min-h-[90vh] grid-cols-[1fr_440px] items-center gap-16 pb-20 pt-[calc(var(--nav-h)+56px)] max-[1199px]:grid-cols-[1fr_360px] max-[1199px]:gap-10 max-[809px]:min-h-0 max-[809px]:grid-cols-1 max-[809px]:gap-10 max-[809px]:pb-14 max-[809px]:pt-[calc(var(--nav-h)+32px)]"
      aria-label={t('sections.hero.ariaLabel')}
    >
      <div className="flex flex-col">
        <h1
          className={`mb-6 text-[var(--black)] ${heroTitleClass}`.trim()}
          style={shouldReveal ? { animationDelay: '80ms' } : undefined}
        >
          {t('sections.hero.titlePrefix')}
          <br />
          {t('sections.hero.titleMiddle')}{' '}
          <span className="si">{t('sections.hero.titleAccent')}</span>
        </h1>
        <p
          className={`ds-text-lead mb-9 max-w-[440px] text-[var(--muted)] ${heroBodyClass}`.trim()}
          style={shouldReveal ? { animationDelay: '200ms' } : undefined}
        >
          {t('sections.hero.subtitle')}
        </p>
        <div className="flex items-center justify-start gap-4">
          <div
            className={heroCtaClass}
            style={shouldReveal ? { animationDelay: '320ms' } : undefined}
          >
            <Button size="lg" onClick={() => onNavigate('contact')}>
              {t('sections.hero.cta')}
            </Button>
          </div>
          <div
            className={heroCtaClass}
            style={shouldReveal ? { animationDelay: '420ms' } : undefined}
          >
            <Button
              variant="light"
              size="lg"
              onClick={() => onNavigate('contact')}
            >
              {t('sections.hero.cta2')}
            </Button>
          </div>
        </div>
      </div>

      <StorySliderPhone
        start={storyStarted}
        videos={storyGradients}
        storyDurationMs={storyDurationMs}
        reveal={storyStarted}
        instant={instant}
        phoneSize={{ width: '380px', height: '640px' }}
      />
    </Container>
  );
}
