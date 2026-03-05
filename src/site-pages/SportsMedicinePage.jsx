import { useTranslation } from 'react-i18next';
import FinalCtaSection from '../components/sections/FinalCtaSection';
import SolutionHeroSection from '../components/sections/page-sections/SolutionHeroSection';
import TestimonialSection from '../components/sections/page-sections/TestimonialSection';
import SolutionChallengeSection from '../components/sections/page-sections/SolutionChallengeSection';
import SportsStructureSection from '../components/sections/page-sections/SportsStructureSection';
import SportsProtocolSection from '../components/sections/page-sections/SportsProtocolSection';
import SportsCasesSection from '../components/sections/page-sections/SportsCasesSection';
import HomeSecurityFrameSection from '../components/sections/page-sections/HomeSecurityFrameSection';
import { getCtaSubtitleFull } from '../constants/site';

export default function SportsMedicinePage({ active, onNavigate }) {
  const { t } = useTranslation();
  const ctaSubtitleFull = getCtaSubtitleFull(t);
  const pageCopy = t('pages.solutions.sports', { returnObjects: true });

  return (
    <div
      id="page-sports-medicine"
      className={`page ${active ? 'active' : ''}`.trim()}
    >
      <SolutionHeroSection
        onNavigate={onNavigate}
        badge={{ text: pageCopy.hero.badge, variant: 'secondary' }}
        title={pageCopy.hero.title}
        subtitle={pageCopy.hero.subtitle}
        backgroundImage="/assets/images/sport_hero.png"
        backgroundType="image"
        showOverlayText={true}
        showOverlayImage={true}
        overlayGradientImage="var(--gradient-accent-warm-overlay)"
      />

      <TestimonialSection
        quote={pageCopy.testimonial}
        showVisual
        visualImageUrl="/assets/images/sport_medecine_image.png"
      />

      <SolutionChallengeSection items={pageCopy.challengeItems} />
      <SportsStructureSection />
      <SportsProtocolSection />
      <SportsCasesSection onNavigate={onNavigate} />

      <HomeSecurityFrameSection onNavigate={onNavigate} />
      <FinalCtaSection onNavigate={onNavigate} subtitle={ctaSubtitleFull} />
    </div>
  );
}
