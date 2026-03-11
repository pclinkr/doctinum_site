import { useTranslation } from 'react-i18next';
import VisionHeroSection from '../components/sections/page-sections/VisionHeroSection';
import VisionQuoteSection from '../components/sections/page-sections/VisionQuoteSection';
import VisionProblemSection from '../components/sections/page-sections/VisionProblemSection';
import VisionThesisSection from '../components/sections/page-sections/VisionThesisSection';
import VisionFoundersSection from '../components/sections/page-sections/VisionFoundersSection';
import VisionConvictionSection from '../components/sections/page-sections/VisionConvictionSection';
import VisionRoadmapSection from '../components/sections/page-sections/VisionRoadmapSection';
import VisionCtaSection from '../components/sections/page-sections/VisionCtaSection';

export default function VisionPage({ active, onNavigate }) {
  const { t } = useTranslation();
  const copy = t('pages.vision', { returnObjects: true });

  if (!copy || !copy.hero) {
    return null;
  }

  return (
    <div
      id="page-vision"
      className={`page ${active ? 'active' : ''}`.trim()}
    >

      <VisionHeroSection
        eyebrow={copy.hero.eyebrow}
        title={copy.hero.title}
        subtitle={copy.hero.subtitle}
        stats={copy.hero.stats}
      />

      <VisionQuoteSection />

      <VisionProblemSection
        label={copy.problem.label}
        title={copy.problem.title}
        intro={copy.problem.intro}
        body={copy.problem.body}
        statPill={copy.problem.statPill}
        barriers={copy.problem.barriers}
      />

      <VisionThesisSection
        label={copy.thesis.label}
        title={copy.thesis.title}
        body={copy.thesis.body}
        pillars={copy.thesis.pillars}
      />

      <VisionFoundersSection
        label={copy.founders.label}
        title={copy.founders.title}
        intro={copy.founders.intro}
        founders={copy.founders.founders}
      />

      <VisionConvictionSection
        label={copy.conviction.label}
        title={copy.conviction.title}
        cards={copy.conviction.cards}
      />

      <VisionRoadmapSection
        label={copy.roadmap.label}
        title={copy.roadmap.title}
        timeline={copy.roadmap.timeline}
      />

      <VisionCtaSection
        title={copy.cta.title}
        subtitle={copy.cta.subtitle}
        primaryCta={copy.cta.primaryCta}
        secondaryCta={copy.cta.secondaryCta}
        onNavigate={onNavigate}
      />
    </div>
  );
}
