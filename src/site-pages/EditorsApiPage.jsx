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
      {/* Mention d'état de l'offre. Elle occupait une bande pleine largeur sous
          la barre, ponctuée d'un point gris: elle se lisait comme une ligne
          oubliée plutôt que comme une information assumée. En pastille posée,
          centrée et en retrait, elle se donne pour ce qu'elle est — et rien ne
          traverse plus l'écran d'un bord à l'autre. */}
      <div className="px-[clamp(14px,3vw,34px)] pb-2 pt-[calc(var(--nav-h)+clamp(12px,2vw,24px))]">
        <p className="mx-auto flex w-fit items-center gap-2.5 rounded-full border border-[var(--color-border-strong)] bg-[var(--color-surface)] px-4 py-2 text-center text-[13px] leading-[1.5] text-[var(--color-muted)]">
          <span aria-hidden="true" className="relative flex h-2 w-2 shrink-0">
            {/* Une pastille qui respire: l'offre est en cours, pas figée. */}
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent-1)] opacity-60 motion-reduce:animate-none" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-accent-1)]" />
          </span>
          {t('pages.editorsApi.preparationNotice')}
        </p>
      </div>

      <EditorsHeroSection
        onNavigate={onNavigate}
        title={copy.hero.title}
        subtitle={copy.hero.subtitle}
        description={''}
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
        imageUrl="/assets/images/proms_to_vocal.png"
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
