import { useTranslation } from 'react-i18next';
import FinalCtaSection from '../components/sections/FinalCtaSection';
import MissionCard from '../components/sections/MissionCard';
import FaqSection from '../components/sections/page-sections/FaqSection';
import HomeCasesSection from '../components/sections/page-sections/HomeCasesSection';
import HomeHeroSection from '../components/sections/page-sections/HomeHeroSection';
import HomeProblemSection from '../components/sections/page-sections/HomeProblemSection';
import HomeMarqueeSection from '../components/sections/page-sections/HomeMarqueeSection';
import HomeMedicalVoiceCallSection from '../components/sections/page-sections/HomeMedicalVoiceCallSection';
import HomeServicesSection from '../components/sections/page-sections/HomeServicesSection';
import HomeVoiceAgentSection from '../components/sections/page-sections/HomeVoiceAgentSection';
import ProcessSection from '../components/sections/page-sections/ProcessSection';
import TestimonialSection from '../components/sections/page-sections/TestimonialSection';
import WhyChooseSection from '../components/sections/page-sections/WhyChooseSection';
import { getHelpItems, getHomeFaqItems, getStoryGradients } from '../constants/content';
import { getCtaSubtitleFull, getStoryDurationMs } from '../constants/site';
import ProblemCard from '../components/sections/ProblemCard';

export default function HomePage({ active, onNavigate, storyStarted, instantHero }) {
  const { t } = useTranslation();
  const storyGradients = getStoryGradients(t);
  const storyDurationMs = getStoryDurationMs(t);
  const helpItems = getHelpItems(t);
  const homeFaqItems = getHomeFaqItems(t);
  const ctaSubtitleFull = getCtaSubtitleFull(t);

  return (
    <div id="page-home" className={`page ${active ? 'active' : ''}`.trim()}>
      <HomeHeroSection onNavigate={onNavigate} storyStarted={storyStarted} storyGradients={storyGradients} storyDurationMs={storyDurationMs} instant={instantHero} />
      {/* <HomeProblemSection backgroundImageUrl="/assets/images/man_pain_stomach2.png" /> */}
      <section className="mission-section"><ProblemCard /></section>
      <HomeMarqueeSection />
      {/* <HomeVoiceAgentSection onNavigate={onNavigate} /> */}
      <HomeServicesSection items={helpItems} />
      <section className="mission-section"><MissionCard /></section>
      <HomeCasesSection onNavigate={onNavigate} />
      <ProcessSection />
      <TestimonialSection initials="EK" />
      <WhyChooseSection />
      <FaqSection items={homeFaqItems} />
      <HomeMedicalVoiceCallSection />
      <FinalCtaSection id="homeCta" onNavigate={onNavigate} subtitle={ctaSubtitleFull} />
      <div id="homeFooter" />
    </div>
  );
}
