import { useTranslation } from 'react-i18next';
import FinalCtaSection from '../components/sections/FinalCtaSection';
import CaseDetailBodySection from '../components/sections/page-sections/CaseDetailBodySection';
import CaseDetailHeroSection from '../components/sections/page-sections/SolutionHeroSection';
import { getCtaSubtitleFull } from '../constants/site';

export default function CaseDetailPage({ active, onNavigate }) {
  const { t } = useTranslation();
  const ctaSubtitleFull = getCtaSubtitleFull(t);

  return (
    <div id="page-case-detail" className={`page ${active ? 'active' : ''}`.trim()}>
      <CaseDetailHeroSection onNavigate={onNavigate} />
      <CaseDetailBodySection />
      <FinalCtaSection onNavigate={onNavigate} subtitle={ctaSubtitleFull} />
    </div>
  );
}
