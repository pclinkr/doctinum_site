import { useTranslation } from 'react-i18next';
import FinalCtaSection from '../components/sections/FinalCtaSection';
import MissionCard from '../components/sections/MissionCard';
import PageHero from '../components/sections/PageHero';
import AboutTeamSection from '../components/sections/page-sections/AboutTeamSection';
import AwardsSection from '../components/sections/page-sections/AwardsSection';
import LogosStripSection from '../components/sections/page-sections/LogosStripSection';
import TestimonialSection from '../components/sections/page-sections/TestimonialSection';
import { getAboutAwards, getAboutTeamMembers } from '../constants/content';
import { getCtaSubtitleFull, getSocialProofText } from '../constants/site';

export default function AboutPage({ active, onNavigate }) {
  const { t } = useTranslation();
  const aboutAwards = getAboutAwards(t);
  const aboutTeamMembers = getAboutTeamMembers(t);
  const ctaSubtitleFull = getCtaSubtitleFull(t);
  const socialProofText = getSocialProofText(t);

  return (
    <div id="page-about" className={`page ${active ? 'active' : ''}`.trim()}>
      <PageHero
        className="rev"
        badge={t('pages.about.badge')}
        title={t('pages.about.title')}
        description={t('pages.about.description')}
        showReveal={false}
        showProof
        proofText={socialProofText}
      />
      <AboutTeamSection members={aboutTeamMembers} />
      <section className="mx-auto w-full max-w-[1200px] px-16 pb-24 pt-10 max-[1024px]:px-8 max-[768px]:px-5">
        <MissionCard />
      </section>
      <TestimonialSection
        initials="EC"
        visualStyle={{ background: 'linear-gradient(160deg,#c8b888,#b0a070)' }}
        visualText="Bloom"
      />
      <AwardsSection awards={aboutAwards} />
      <LogosStripSection />
      <FinalCtaSection onNavigate={onNavigate} subtitle={ctaSubtitleFull} />
      <div className="about-footer-placeholder" />
    </div>
  );
}
