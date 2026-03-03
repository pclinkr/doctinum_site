import { useTranslation } from 'react-i18next';
import FinalCtaSection from '../components/sections/FinalCtaSection';
import SolutionHeroSection from '../components/sections/page-sections/SolutionHeroSection';
import TestimonialSection from '../components/sections/page-sections/TestimonialSection';
import HomeSecurityFrameSection from '../components/sections/page-sections/HomeSecurityFrameSection';
import DermatologyNarrativeSection from '../components/sections/page-sections/DermatologyNarrativeSection';
import DermatologyFragileSection from '../components/sections/page-sections/DermatologyFragileSection';
import DermatologyTrajectorySection from '../components/sections/page-sections/DermatologyTrajectorySection';
import DermatologyConfigurationsSection from '../components/sections/page-sections/DermatologyConfigurationsSection';
import DermatologyOrganizationSection from '../components/sections/page-sections/DermatologyOrganizationSection';
import { getCtaSubtitleFull } from '../constants/site';

export default function DermatologyPage({ active, onNavigate }) {
  const { t } = useTranslation();
  const ctaSubtitleFull = getCtaSubtitleFull(t);
  const pageCopy = t('pages.solutions.dermatology', { returnObjects: true });

  return (
    <div id="page-dermatology" className={`page ${active ? 'active' : ''}`.trim()}>
      <SolutionHeroSection
        onNavigate={onNavigate}
        badge={{ text: pageCopy.hero.badge, variant: 'secondary' }}
        title={pageCopy.hero.title}
        subtitle={pageCopy.hero.subtitle}
        backgroundImage="/assets/images/aesthetic_patient_2.png"
        backgroundType="image"
        showOverlayText={true}
        showOverlayImage={true}
        overlayGradientImage="var(--gradient-accent-warm-overlay)"
      />

      <TestimonialSection quote={pageCopy.testimonial} showVisual visualImageUrl="/assets/images/aesthetic_patient.png" />

      <DermatologyNarrativeSection />
      <DermatologyFragileSection />
      <DermatologyTrajectorySection />
      <DermatologyConfigurationsSection />
      <DermatologyOrganizationSection />

      <HomeSecurityFrameSection onNavigate={onNavigate} />
      <FinalCtaSection onNavigate={onNavigate} subtitle={ctaSubtitleFull} />
    </div>
  );
}
