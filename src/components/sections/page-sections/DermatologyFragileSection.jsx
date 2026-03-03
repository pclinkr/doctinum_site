import SectionHeading from '../SectionHeading';
import { useTranslation } from 'react-i18next';

const ITEMS = [
  {
    id: 'effects',
    icon: <path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z" />
  },
  {
    id: 'adherence',
    icon: <path d="M4 7h16M4 12h16M4 17h10" />
  },
  {
    id: 'subjective',
    icon: <path d="M3 13h6l3 8 4-18 3 10h2" />
  }
];

export default function DermatologyFragileSection() {
  const { t } = useTranslation();
  const copy = t('sections.dermatologyFragile', { returnObjects: true });
  const title = copy.title;

  return (
    <section className="mx-auto w-full max-w-[1200px] px-16 py-24 text-center max-[1024px]:px-8 max-[768px]:px-5">
      <SectionHeading className="rev" title={<>{title}</>} style={{ marginBottom: '54px' }} />

      <div className="relative mx-auto max-w-[1080px]">
        <div className="pointer-events-none absolute left-0 right-0 top-[20px] z-0 h-[96px] max-[809px]:hidden">
          <svg className="h-full w-full" viewBox="0 0 1080 140" preserveAspectRatio="none" aria-hidden="true">
            <path
              d="M134 88 C290 118, 410 116, 540 72 C668 30, 786 30, 946 62"
              fill="none"
              stroke="var(--border-mid)"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              className="derm-flow-path"
              d="M134 88 C290 118, 410 116, 540 72 C668 30, 786 30, 946 62"
              fill="none"
              stroke="var(--action-primary-bg)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="220 2000"
            />
          </svg>
        </div>

        <div className="relative z-[1] grid grid-cols-1 gap-8 md:grid-cols-3">
          {ITEMS.map((item, index) => {
            const itemCopy = copy.items[item.id];
            const delayClass = index === 0 ? 'd1' : index === 1 ? 'd2' : 'd3';
            return (
              <article key={item.id} className={`rev ${delayClass} flex flex-col items-center`}>
                <div className="mb-5 flex h-[92px] w-[92px] items-center justify-center rounded-[22px] bg-[var(--color-primary)]">
                  <svg className="h-[22px] w-[22px] fill-none stroke-[2] stroke-[var(--text-inverse)] [stroke-linecap:round] [stroke-linejoin:round]" viewBox="0 0 24 24">
                    {item.icon}
                  </svg>
                </div>
                <h3 className="mb-2 text-[29px] font-[var(--w500)] leading-[1.08] tracking-[-0.04em] text-[var(--color-primary)] max-[1024px]:text-[24px]">
                  {itemCopy.title}
                </h3>
                <p className="max-w-[28ch] text-[14px] leading-[1.72] text-[var(--muted)]">{itemCopy.body}</p>
              </article>
            );
          })}
        </div>
      </div>

      <style>{`
        .derm-flow-path {
          animation: derm-flow 2.8s cubic-bezier(0.4, 0, 0.2, 1) infinite alternate;
        }
        @keyframes derm-flow {
          from { stroke-dashoffset: 360; opacity: 0.95; }
          to { stroke-dashoffset: -720; opacity: 0.7; }
        }
      `}</style>
    </section>
  );
}
