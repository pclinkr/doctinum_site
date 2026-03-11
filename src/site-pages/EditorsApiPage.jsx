import { useTranslation } from 'react-i18next';
import FinalCtaSection from '../components/sections/FinalCtaSection';
import EditorsHeroSection from '../components/sections/page-sections/EditorsHeroSection';
import EditorsProductProblemSection from '../components/sections/page-sections/EditorsProductProblemSection';
import EditorsVoiceInfrastructureSection from '../components/sections/page-sections/EditorsVoiceInfrastructureSection';
import EditorsCaseRow from '../components/sections/page-sections/EditorsCaseRow';
import EditorsArchitectureSection from '../components/sections/page-sections/EditorsArchitectureSection';
import EditorsApiExampleSection from '../components/sections/page-sections/EditorsApiExampleSection';
import EditorsIntegrationCasesSection from '../components/sections/page-sections/EditorsIntegrationCasesSection';
import EditorsPricingSection from '../components/sections/page-sections/EditorsPricingSection';
import HomeSecurityFrameSection from '../components/sections/page-sections/HomeSecurityFrameSection';

export default function EditorsApiPage({ active, onNavigate }) {
  const { t } = useTranslation();
  const copy = t('pages.editorsApi', { returnObjects: true });

  if (!copy || !copy.hero) {
    return null;
  }

  return (
    <div
      id="page-editors-api"
      className={`page ${active ? 'active' : ''}`.trim()}
    >
      <EditorsHeroSection
        onNavigate={onNavigate}
        title={copy.hero.title}
        subtitle={copy.hero.subtitle}
        description={""}
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
      />
      
      <EditorsProductProblemSection
        title={copy.problem.title}
        intro={copy.problem.intro}
        blocks={copy.problem.blocks}
        footer={copy.problem.footer}
      />
      
      <EditorsVoiceInfrastructureSection
        title={copy.infrastructure.title}
        blocks={copy.infrastructure.blocks}
      />
      
      <EditorsCaseRow
        imagePosition="right"
        imageUrl="/assets/images/questionnaire_to_call.png"
        title={copy.transform.title}
        description={copy.transform.description}
        items={copy.transform.items}
      />
      
      <EditorsArchitectureSection
        title={copy.architecture.title}
        steps={copy.architecture.steps}
        description={copy.architecture.description}
      />
      
      <EditorsApiExampleSection
        title={copy.apiExample.title}
        examples={copy.apiExample.examples}
      />
      
      <EditorsIntegrationCasesSection
        title={copy.integrationCases.title}
        cards={copy.integrationCases.cards}
      />
      
      <EditorsPricingSection
        title={copy.pricing.title}
        leftTitle={copy.pricing.leftTitle}
        leftItems={copy.pricing.leftItems}
        rightTitle={copy.pricing.rightTitle}
        rightItems={copy.pricing.rightItems}
      />
      
      <HomeSecurityFrameSection onNavigate={onNavigate} />
      
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
