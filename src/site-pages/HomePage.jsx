import { useTranslation } from 'react-i18next';
import FinalCtaSection from '../components/sections/FinalCtaSection';
import MissionCard from '../components/sections/MissionCard';
import FaqSection from '../components/sections/page-sections/FaqSection';
import HomeOurSolutionSection from '../components/sections/page-sections/HomeOurSolutionSection';
import HomeHeroSection from '../components/sections/page-sections/HomeHeroSection';
import HomeSlidingBanner from '../components/sections/page-sections/HomeSlidingBanner';
import HomeMedicalVoiceCallSection from '../components/sections/page-sections/HomeMedicalVoiceCallSection';
import NotCallbotSectionAlt from '../components/sections/page-sections/NotCallbotSectionAlt';
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
      {/* <HomeSlidingBanner /> */}
      <section className="mx-auto w-full max-w-[1200px] px-16 pb-24 pt-10 max-[1024px]:px-8 max-[768px]:px-5"><ProblemCard /></section>
      <HomeOurSolutionSection onNavigate={onNavigate} />
      <NotCallbotSectionAlt />
      <section className="mx-auto w-full max-w-[1200px] px-16 pb-24 pt-10 max-[1024px]:px-8 max-[768px]:px-5"><MissionCard /></section>
      <TestimonialSection initials="EK" />
      <WhyChooseSection />
      <FaqSection items={homeFaqItems} />
      <HomeMedicalVoiceCallSection />
      <FinalCtaSection id="homeCta" onNavigate={onNavigate} subtitle={ctaSubtitleFull} />
      <div id="homeFooter" />
    </div>
  );
}
