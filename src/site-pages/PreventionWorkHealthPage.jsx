import { useTranslation } from 'react-i18next';
import FinalCtaSection from '../components/sections/FinalCtaSection';
import SolutionHeroSection from '../components/sections/page-sections/SolutionHeroSection';
import HomeFieldObservationSection from '../components/sections/page-sections/HomeFieldObservationSection';
import HomeOurApproachSection from '../components/sections/page-sections/HomeOurApproachSection';
import HomeWhyVoiceSection from '../components/sections/page-sections/HomeWhyVoiceSection';
import HomeUseCasesSection from '../components/sections/page-sections/HomeUseCasesSection';
import HomeBeyondAgentSection from '../components/sections/page-sections/HomeBeyondAgentSection';
import PreventionOrganizationsSection from '../components/sections/page-sections/PreventionOrganizationsSection';
import SolutionRegulatorySection from '../components/sections/page-sections/SolutionRegulatorySection';
import SolutionPilotSection from '../components/sections/page-sections/SolutionPilotSection';
import { getCtaSubtitleFull } from '../constants/site';

export default function PreventionWorkHealthPage({ active, onNavigate }) {
  const { t } = useTranslation();
  const ctaSubtitleFull = getCtaSubtitleFull(t);
  const copy = t('pages.prevention', { returnObjects: true });

  if (!copy || !copy.hero) {
    return null;
  }

  return (
    <div
      id="page-prevention-work-health"
      className={`page ${active ? 'active' : ''}`.trim()}
    >
      <SolutionHeroSection
        onNavigate={onNavigate}
        title={copy.hero.title}
        subtitle={copy.hero.subtitle}
        ctaButtons={[
          {
            text: copy.hero.cta1,
            variant: 'primary',
            onClick: () => onNavigate('contact'),
          },
          {
            text: copy.hero.cta2,
            variant: 'secondary',
            onClick: () => onNavigate('contact'),
          },
        ]}
        imageUrl="/assets/images/prevention_hero.jpg"
      />

      <HomeFieldObservationSection
        title={copy.fieldObservation.title}
        intro={copy.fieldObservation.intro}
        blocks={copy.fieldObservation.blocks}
        footer={copy.fieldObservation.footer}
      />

      <HomeOurApproachSection
        title={copy.approach.title}
        intro={copy.approach.intro}
        steps={copy.approach.steps}
      />

      <HomeWhyVoiceSection
        title={copy.whyVoice.title}
        blocks={copy.whyVoice.blocks}
        footer={copy.whyVoice.footer}
      />

      <HomeUseCasesSection
        title={copy.useCases.title}
        cards={copy.useCases.cards}
      />

      <HomeBeyondAgentSection
        title={copy.beyondAgent.title}
        description={copy.beyondAgent.description}
        items={copy.beyondAgent.items}
      />

      <PreventionOrganizationsSection
        title={copy.organizations.title}
        cards={copy.organizations.cards}
      />

      <SolutionRegulatorySection
        description={copy.regulatory.description}
        items={copy.regulatory.items}
      />

      <SolutionPilotSection
        title={copy.pilot.title}
        description={copy.pilot.description}
        steps={copy.pilot.steps}
        objectives={copy.pilot.objectives}
        objectiveItems={copy.pilot.objectiveItems}
      />

      <FinalCtaSection
        onNavigate={onNavigate}
        title={copy.finalCta.title}
        subtitle={copy.finalCta.subtitle}
        primaryCta={copy.finalCta.primaryCta}
        secondaryCta={copy.finalCta.secondaryCta}
      />
    </div>
  );
}
