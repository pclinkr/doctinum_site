import { useTranslation } from 'react-i18next';
import Container from '../../layout/Container';

export default function Home2TensionSection() {
  const { t } = useTranslation();
  const cards = t('sections.home2.tension.cards', { returnObjects: true });

  return (
    <section
      id="tension"
      className="border-y border-[var(--color-border)] bg-[var(--color-surface)] py-24"
    >
      <Container>
        <p className="rev ds-text-label mb-5 text-[var(--color-info)]">
          {t('sections.home2.tension.label')}
        </p>

        <p className="rev d1 mx-auto mb-14 max-w-[30ch] text-center font-serif text-[clamp(1.6rem,2.7vw,2.2rem)] italic leading-[1.45] text-[var(--color-primary)]">
          {t('sections.home2.tension.statementPrefix')}{' '}
          <span className="not-italic text-[var(--color-danger)]">
            {t('sections.home2.tension.statementAccent')}
          </span>
          <br />
          {t('sections.home2.tension.statementSuffix')}
        </p>

        <div className="grid grid-cols-1 gap-px border border-[var(--color-border)] bg-[var(--color-border)] min-[740px]:grid-cols-2 min-[1180px]:grid-cols-4">
          {(cards || []).map((card, index) => (
            <article
              key={card.number}
              className={`rev ${index > 0 ? `d${Math.min(index, 4)}` : ''} bg-[var(--color-white)] px-7 py-9`.trim()}
            >
              <p className="mb-4 font-serif text-[42px] leading-none text-[var(--color-accent-1)]">
                {card.number}
              </p>
              <h3 className="mb-2 text-[13px] font-[var(--w500)] uppercase tracking-[0.06em] text-[var(--color-primary)]">
                {card.title}
              </h3>
              <p className="text-[14px] leading-[1.7] text-[color-mix(in_srgb,var(--color-primary)_65%,white)]">
                {card.body}
              </p>
            </article>
          ))}
        </div>

        <p className="rev d2 px-3 pt-9 text-center text-[15px] italic leading-[1.7] text-[var(--color-muted)]">
          {t('sections.home2.tension.footerPrefix')} ·{' '}
          <span className="not-italic font-[var(--w500)] text-[var(--color-danger)]">
            {t('sections.home2.tension.footerAccent')}
          </span>
        </p>
      </Container>
    </section>
  );
}
