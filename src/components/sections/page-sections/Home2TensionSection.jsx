import { useTranslation } from 'react-i18next';
import Container from '../../layout/Container';

export default function Home2TensionSection() {
  const { t } = useTranslation();
  const cards = t('sections.home2.tension.cards', { returnObjects: true });
  const statementSuffix = t('sections.home2.tension.statementSuffix');
  const intro = t('sections.home2.tension.intro');

  return (
    <section id="tension" className="bg-[var(--color-surface)] py-28">
      <Container>
        <p className="rev ds-text-label mb-6 text-center text-[var(--color-action)]">
          {t('sections.home2.tension.label')}
        </p>

        <h2 className="rev-mask d1 mx-auto mb-7 max-w-[24ch] text-center font-serif text-[clamp(2rem,3.6vw,3rem)] font-[600] leading-[1.15] text-[var(--color-text)]">
          <span>
            {t('sections.home2.tension.statementPrefix')}{' '}
            <em className="not-italic text-[var(--color-action)]">
              {t('sections.home2.tension.statementAccent')}
            </em>
            {statementSuffix ? ` ${statementSuffix}` : ''}
          </span>
        </h2>

        {intro ? (
          <p className="rev d1 mx-auto mb-16 max-w-[62ch] text-center text-[16px] leading-[1.78] text-[var(--color-muted)]">
            {intro}
          </p>
        ) : null}

        <div className="grid grid-cols-1 gap-6 min-[740px]:grid-cols-2 min-[1080px]:grid-cols-3">
          {(cards || []).map((card, index) => (
            <article
              key={card.number}
              className={`rev ${index > 0 ? `d${Math.min(index, 4)}` : ''} group rounded-[20px] border border-[var(--color-border)] bg-[var(--color-white)] px-8 py-9 transition-[transform,box-shadow] duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_28px_50px_-30px_rgba(34,30,26,0.4)] motion-reduce:hover:translate-y-0`.trim()}
            >
              <p className="mb-6 font-serif text-[40px] font-[600] leading-none text-[var(--color-accent-1)]">
                {card.number}
              </p>
              <h3 className="mb-3 text-[13px] font-[var(--w500)] uppercase tracking-[0.08em] text-[var(--color-text)]">
                {card.title}
              </h3>
              <p className="text-[15px] leading-[1.72] text-[var(--color-muted)]">
                {card.body}
              </p>
            </article>
          ))}
        </div>

        <div className="rev d2 mt-14 rounded-[20px] border border-[var(--color-border)] bg-[var(--color-white)] px-8 py-8 min-[740px]:px-10">
          <p className="mb-4 text-[11px] font-[var(--w500)] uppercase tracking-[0.14em] text-[var(--color-action)]">
            {t('sections.home2.tension.studyLabel')}
          </p>
          <p className="max-w-[74ch] font-serif text-[clamp(1.25rem,2.1vw,1.6rem)] font-[500] leading-[1.45] text-[var(--color-text)]">
            {t('sections.home2.tension.studyPrefix')}{' '}
            <em className="not-italic text-[var(--color-action)]">
              {t('sections.home2.tension.studyAccent')}
            </em>
          </p>
        </div>
      </Container>
    </section>
  );
}
