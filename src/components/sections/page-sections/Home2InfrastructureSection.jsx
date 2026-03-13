import { useTranslation } from 'react-i18next';
import Container from '../../layout/Container';
import Icon from '@/components/ui/Icon';

export default function Home2InfrastructureSection({ onNavigate }) {
  const { t } = useTranslation();
  const cards = t('sections.home2.infrastructure.cards', {
    returnObjects: true,
  });

  return (
    <section id="infra" className="bg-[var(--color-bg)] py-24">
      <Container>
        <p className="rev ds-text-label mb-5 text-[var(--color-subtle)]">
          {t('sections.home2.infrastructure.label')}
        </p>
        <h2 className="rev d1 mb-5 max-w-[20ch] text-[clamp(2rem,3.4vw,2.9rem)] leading-[1.2]">
          {t('sections.home2.infrastructure.titlePrefix')}{' '}
          <em className="text-[var(--color-accent-2)] si">
            {t('sections.home2.infrastructure.titleAccent')}
          </em>
        </h2>
        <p className="rev d2 mb-11 max-w-[56ch] text-[15px] leading-[1.8] text-[color-mix(in_srgb,var(--color-primary)_70%,white)]">
          {t('sections.home2.infrastructure.body')}
        </p>

        <div className="grid grid-cols-1 gap-px border border-[var(--color-border)] bg-[var(--color-border)] min-[760px]:grid-cols-2 min-[1160px]:grid-cols-3">
          {(cards || []).map((card, index) => {
            const cardClasses = card.highlight
              ? 'bg-[var(--color-primary)] text-[var(--color-white)]'
              : 'bg-[var(--color-white)] text-[var(--color-primary)]';

            const textMuted = card.highlight
              ? 'text-[var(--white-70)]'
              : 'text-[color-mix(in_srgb,var(--color-primary)_65%,white)]';

            return (
              <article
                key={card.title}
                className={`rev ${index > 0 ? `d${Math.min(index, 4)}` : ''} px-8 py-9 ${cardClasses}`.trim()}
              >
                <span className="mb-4 block">
                  <Icon name={card.icon} type="outline"/>
                </span>
                <h3 className="mb-2 text-[13px] font-[var(--w500)] uppercase tracking-[0.07em]">
                  {card.title}
                </h3>
                <p className={`text-[14px] leading-[1.72] ${textMuted}`.trim()}>
                  {card.body}
                </p>

                {card.highlight ? (
                  <button
                    type="button"
                    onClick={() => onNavigate('security')}
                    className="mt-4 inline-flex border border-[var(--white-20)] bg-[var(--white-10)] px-3 py-[6px] text-[10px] uppercase tracking-[0.1em] text-[var(--color-white)] transition-colors duration-200 ease-out hover:bg-[var(--white-20)]"
                  >
                    {card.tag}
                  </button>
                ) : (
                  <span className="mt-4 rounded inline-flex border border-[var(--color-border)] bg-badge px-3 py-[6px] text-[10px] uppercase tracking-[0.1em] text-[var(--color-primary)]">
                    {card.tag}
                  </span>
                )}
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
