import { useTranslation } from 'react-i18next';
import SectionHeading from '../SectionHeading';

function Bullet({ item }) {
  return (
    <div className="flex items-center gap-[10px] py-2 text-[14px] text-[var(--muted)]">
      <span className="flex h-[19px] w-[19px] shrink-0 items-center justify-center rounded-full bg-[var(--ink-06)]">
        <svg
          className="h-[10px] w-[10px]"
          viewBox="0 0 10 10"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        >
          <circle cx="5" cy="5" r="3" />
        </svg>
      </span>
      {item}
    </div>
  );
}

export default function DermatologyConfigurationsSection() {
  const { t } = useTranslation();
  const copy = t('sections.dermatologyConfigurations', { returnObjects: true });

  return (
    <section className="mx-auto w-full max-w-[1200px] px-16 py-24 text-center max-[1024px]:px-8 max-[768px]:px-5">
      <SectionHeading
        className="rev"
        title={<>{copy.heading}</>}
        style={{ marginBottom: '12px' }}
      />
      <p className="rev mb-12 text-[14px] leading-[1.6] text-[var(--muted)]">
        {copy.warning}
      </p>

      <div className="rev grid grid-cols-3 gap-5 text-left max-[1024px]:grid-cols-2 max-[809px]:grid-cols-1">
        {copy.cards.map((card, index) => (
          <div
            key={card.title}
            className={`rev ${index === 0 ? 'd1' : index === 1 ? 'd2' : 'd3'} rounded-[var(--r-md)] bg-[var(--surface)] p-8`}
          >
            <div className="mb-4 border-b border-[var(--border)] pb-3 text-[12px] font-[var(--w500)] uppercase tracking-[0.07em] text-[var(--muted)]">
              {card.title}
            </div>
            <div className="space-y-2">
              {card.items.map((item) => (
                <Bullet key={item} item={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
