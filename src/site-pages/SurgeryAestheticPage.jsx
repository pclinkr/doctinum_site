import { useTranslation } from 'react-i18next';
import FinalCtaSection from '../components/sections/FinalCtaSection';
import SolutionHeroSection from '../components/sections/page-sections/SolutionHeroSection';
import TestimonialSection from '../components/sections/page-sections/TestimonialSection';
import SolutionChallengeSection from '../components/sections/page-sections/SolutionChallengeSection';
import StructureSuperviseSection from '../components/sections/page-sections/StructureSuperviseSection';
import ImagineProtocolSection from '../components/sections/page-sections/ImagineProtocolSection';
import ExamplesGridSection from '../components/sections/page-sections/ExamplesGridSection';
import HomeSecurityFrameSection from '../components/sections/page-sections/HomeSecurityFrameSection';
import { getCtaSubtitleFull } from '../constants/site';

function ConfiguredExamplesSection({ onNavigate }) {
  const { t } = useTranslation();
  const copy = t('pages.solutions.surgery.examples', { returnObjects: true });
  const badgeText = copy.badge;
  const title = copy.title;
  const description = copy.description;
  const cards = copy.cards;

  return (
    <ExamplesGridSection
      onNavigate={onNavigate}
      badgeText={badgeText}
      title={title}
      description={description}
      cards={cards}
      showOverlay={true}
      overlayGradient="var(--gradient-overlay-top)"
    />
  );
}

export default function SurgeryAestheticPage({ active, onNavigate }) {
  const { t } = useTranslation();
  const ctaSubtitleFull = getCtaSubtitleFull(t);
  const copy = t('pages.solutions.surgery', { returnObjects: true });

  return (
    <div id="page-case-detail" className={`page ${active ? 'active' : ''}`.trim()}>
      <SolutionHeroSection 
        onNavigate={onNavigate}
        badge={{
          text: copy.hero.badge,
          variant: 'secondary'
        }}
        title={copy.hero.title}
        backgroundImage="/assets/images/aesthetic_face.png"
        backgroundType="image"
        showOverlayText={true}
        showOverlayImage={true}
        overlayGradientImage="var(--gradient-accent-warm-terra-overlay)"
      />
      <TestimonialSection
        quote={copy.testimonial}
        showVisual={true}
        visualImageUrl="/assets/images/aesthetic_patient.png"
      />
      <SolutionChallengeSection
        items={copy.challengeItems}
      />
      <StructureSuperviseSection />
      <ImagineProtocolSection />
      <ConfiguredExamplesSection onNavigate={onNavigate} />
      <HomeSecurityFrameSection onNavigate={onNavigate} />
      <FinalCtaSection onNavigate={onNavigate} subtitle={ctaSubtitleFull} />
    </div>
  );
}
