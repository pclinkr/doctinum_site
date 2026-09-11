import { useTranslation } from 'react-i18next';
import Container from '../../layout/Container';
import Icon from '@/components/ui/Icon';

/**
 * "Pourquoi c'est différent": voix + écran, IA encadrée, cadre français.
 * `linkPage` transforme le badge de la carte mise en avant en lien. Laisser
 * à null quand la section vit déjà sur la page ciblée.
 */
export default function WhyDifferentSection({ onNavigate, linkPage = null }) {
  const { t } = useTranslation();
  const cards = t('sections.whyDifferent.cards', { returnObjects: true });
  const body = t('sections.whyDifferent.body');

  return (
    <section id="why-different" className="bg-[var(--color-surface)] py-28">
      <Container>
        <p className="rev mb-6 text-[12px] font-[var(--w500)] uppercase tracking-[0.16em] text-[var(--color-action)]">
          {t('sections.whyDifferent.label')}
        </p>

        <h2
          className={`rev-mask d1 max-w-[26ch] font-serif text-[clamp(1.9rem,3.2vw,2.8rem)] font-[600] leading-[1.16] tracking-[-0.02em] text-[var(--color-text)] ${body ? 'mb-6' : 'mb-16'}`.trim()}
        >
          <span>
            {t('sections.whyDifferent.titlePrefix')}{' '}
            <em className="not-italic text-[var(--color-action)]">
              {t('sections.whyDifferent.titleAccent')}
            </em>
          </span>
        </h2>

        {body ? (
          <p className="rev d2 mb-16 max-w-[60ch] text-[16px] leading-[1.8] text-[var(--color-muted)]">
            {body}
          </p>
        ) : null}

        <div className="grid grid-cols-1 gap-6 min-[760px]:grid-cols-2 min-[1160px]:grid-cols-3">
          {(cards || []).map((card, index) => {
            const isHighlighted = Boolean(card.highlight);
            const isLink = isHighlighted && Boolean(linkPage);

            return (
              <article
                key={card.title}
                className={`rev ${index > 0 ? `d${Math.min(index, 4)}` : ''} flex flex-col rounded-[20px] border px-8 py-9 transition-[transform,box-shadow] duration-500 ease-out hover:-translate-y-1 motion-reduce:hover:translate-y-0 ${
                  isHighlighted
                    ? 'border-transparent bg-[var(--color-primary)] text-[var(--color-white)] shadow-[0_30px_60px_-34px_rgba(34,30,26,0.7)]'
                    : 'border-[var(--color-border)] bg-[var(--color-white)] text-[var(--color-text)] hover:shadow-[0_28px_50px_-30px_rgba(34,30,26,0.4)]'
                }`.trim()}
              >
                <span className="mb-6 block">
                  <Icon
                    name={card.icon}
                    type="outline"
                    size={26}
                    strokeColor={
                      isHighlighted
                        ? 'var(--color-accent-1)'
                        : 'var(--color-action)'
                    }
                  />
                </span>

                <h3
                  className={`mb-3 text-[14px] font-[var(--w500)] uppercase tracking-[0.06em] ${isHighlighted ? 'text-[var(--color-white)]' : 'text-[var(--color-text)]'}`}
                >
                  {card.title}
                </h3>

                <p
                  className={`text-[15px] leading-[1.74] ${isHighlighted ? 'text-[var(--white-72)]' : 'text-[var(--color-muted)]'}`}
                >
                  {card.body}
                </p>

                {isLink ? (
                  <button
                    type="button"
                    onClick={() => onNavigate?.(linkPage)}
                    className="mt-7 inline-flex w-fit rounded-full border border-[var(--white-38)] px-4 py-2 text-[11.5px] font-[var(--w500)] uppercase tracking-[0.1em] text-[var(--color-white)] transition-colors duration-300 ease-out hover:bg-[var(--white-10)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-1)]"
                  >
                    {card.tag}
                  </button>
                ) : (
                  <span
                    className={`mt-7 inline-flex w-fit rounded-full border px-4 py-2 text-[11.5px] font-[var(--w500)] uppercase tracking-[0.1em] ${
                      isHighlighted
                        ? 'border-[var(--white-38)] text-[var(--white-72)]'
                        : 'border-[var(--color-border-strong)] text-[var(--color-muted)]'
                    }`}
                  >
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
