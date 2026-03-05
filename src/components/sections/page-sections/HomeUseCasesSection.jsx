import { useTranslation } from 'react-i18next';
import UseCaseBlock from '../../blocks/UseCaseBlock';

const PLACEHOLDER_GRADIENTS = [
  'linear-gradient(140deg,#dfe8f6 0%,#cfdff5 45%,#d9e8fc 100%)',
  'linear-gradient(140deg,#e6efea 0%,#d9e9e1 48%,#ebf5f0 100%)',
  'linear-gradient(140deg,#efe6d9 0%,#e7dcc9 45%,#f5ede3 100%)',
];

export default function HomeUseCasesSection({ onNavigate }) {
  const { t } = useTranslation();
  const items = t('sections.homeUseCases.items', { returnObjects: true });
  const solutionsMenu = t('megaMenu.solutions', { returnObjects: true });
  const solutionGroups = solutionsMenu?.groups || [];

  return (
    <section
      className="mx-auto w-full max-w-[1200px] px-16 py-24 max-[1024px]:px-8 max-[768px]:px-5"
      id="homeUseCases"
    >
      <div className="rev mb-11">
        <p className="mb-3 text-[11px] font-[var(--w500)] uppercase tracking-[0.07em] text-[var(--muted)]">
          {t('sections.homeUseCases.eyebrow')}
        </p>
        <h2 className="max-w-[860px] text-[var(--color-primary)]">
          {t('sections.homeUseCases.title')}
        </h2>
      </div>

      {items.map((item, index) => {
        const isImageRight = index !== 1;
        const groupLinks = solutionGroups[index]?.links || [];
        const targetPage = groupLinks[0]?.page || 'case-studies';

        // Configuration du média pour chaque élément
        const mediaConfig =
          index === 0
            ? {
                type: 'image',
                src: '/assets/images/aesthetic_patient_2.png',
                alt: item.title,
                enableParallax: true,
              }
            : index === 1
              ? {
                  type: 'image',
                  src: '/assets/images/phone_patient.png',
                  alt: item.title,
                  enableParallax: true,
                }
              : index === 2
                ? {
                    type: 'image',
                    src: '/assets/images/haute_vigilance_patient_2.png',
                    alt: item.title,
                    enableParallax: true,
                  }
                : {
                    type: 'gradient',
                    gradient:
                      PLACEHOLDER_GRADIENTS[index] || PLACEHOLDER_GRADIENTS[0],
                  };

        return (
          <UseCaseBlock
            key={item.title}
            title={item.title}
            media={mediaConfig}
            cta={item.cta}
            buttons={groupLinks}
            isImageRight={isImageRight}
            onNavigate={onNavigate}
            targetPage={index === 1 ? 'sports-medicine' : targetPage}
          />
        );
      })}
    </section>
  );
}
