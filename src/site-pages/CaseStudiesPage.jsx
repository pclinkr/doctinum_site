import { useTranslation } from 'react-i18next';
import FinalCtaSection from '../components/sections/FinalCtaSection';
import PageHero from '../components/sections/PageHero';
import CaseStudiesGridSection from '../components/sections/page-sections/CaseStudiesGridSection';
import { getCaseStudyCards } from '../constants/content';
import { getCtaSubtitleFull, getSocialProofText } from '../constants/site';

export default function CaseStudiesPage({ active, onNavigate }) {
  const { t } = useTranslation();
  const caseStudyCards = getCaseStudyCards(t);
  const ctaSubtitleFull = getCtaSubtitleFull(t);
  const socialProofText = getSocialProofText(t);

  return (
    <div
      id="page-case-studies"
      className={`page ${active ? 'active' : ''}`.trim()}
    >
      <PageHero
        badge={t('pages.caseStudies.badge')}
        title={t('pages.caseStudies.title')}
        description={t('pages.caseStudies.description')}
        showProof
        proofText={socialProofText}
      />
      <CaseStudiesGridSection cards={caseStudyCards} onNavigate={onNavigate} />
      <FinalCtaSection onNavigate={onNavigate} subtitle={ctaSubtitleFull} />
    </div>
  );
}
