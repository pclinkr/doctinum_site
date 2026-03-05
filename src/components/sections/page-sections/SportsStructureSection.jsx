import SectionHeading from '../SectionHeading';
import { useTranslation } from 'react-i18next';

const ICONS = {
  structure: <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4Z" />,
  support: <path d="M3 7h18M3 12h18M3 17h12" />,
  indicators: <path d="M3 13h6l3 8 4-18 3 10h2" />,
  visibility: (
    <path d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6-10-6-10-6zm10-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
  ),
};

export default function SportsStructureSection() {
  const { t } = useTranslation();
  const copy = t('sections.sportsStructure', { returnObjects: true });
  const title = copy.title;
  const subtitle = copy.subtitle;
  const items = copy.items.map((item, index) => {
    const iconsByIndex = [
      ICONS.structure,
      ICONS.support,
      ICONS.indicators,
      ICONS.visibility,
    ];
    return { title: item.title, icon: iconsByIndex[index] || ICONS.structure };
  });
  const closing = copy.closing;

  return (
    <section className="mx-auto w-full max-w-[1200px] px-16 pb-28 pt-8 text-center max-[1024px]:px-8 max-[768px]:px-5">
      <SectionHeading
        className="rev"
        title={<>{title}</>}
        style={{ marginBottom: '14px' }}
      />
      <p className="rev mx-auto mb-14 max-w-[760px] text-[16px] leading-[1.7] text-[var(--muted)]">
        {subtitle}
      </p>

      <div className="relative mx-auto max-w-[1080px]">
        <div className="pointer-events-none absolute left-0 right-0 top-[22px] z-0 h-[96px] max-[809px]:hidden">
          <svg
            className="h-full w-full"
            viewBox="0 0 1080 140"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M96 76 C215 104, 305 98, 404 68 C512 44, 586 44, 680 64 C780 86, 868 88, 986 66"
              fill="none"
              stroke="var(--border-mid)"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              className="ss-flow-path"
              d="M96 76 C215 104, 305 98, 404 68 C512 44, 586 44, 680 64 C780 86, 868 88, 986 66"
              fill="none"
              stroke="var(--action-primary-bg)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="240 2200"
            />
          </svg>
        </div>

        <div className="relative z-[1] mx-auto grid max-w-[1080px] grid-cols-2 gap-x-6 gap-y-8 text-left max-[809px]:grid-cols-1 min-[810px]:grid-cols-4">
          {items.map((item, index) => (
            <article
              key={item.title}
              className={`rev ${index === 0 ? 'd1' : index === 1 ? 'd2' : index === 2 ? 'd3' : 'd4'} flex flex-col items-center text-center`}
            >
              <div className="mb-5 flex h-[92px] w-[92px] items-center justify-center rounded-[22px] bg-[var(--color-primary)]">
                <svg
                  className="h-[22px] w-[22px] fill-none stroke-[2] stroke-[var(--text-inverse)] [stroke-linecap:round] [stroke-linejoin:round]"
                  viewBox="0 0 24 24"
                >
                  {item.icon}
                </svg>
              </div>
              <div className="w-full rounded-[18px] bg-transparent px-4 py-5">
                <p className="text-[17px] leading-[1.5] text-[var(--color-primary)]">
                  {item.title}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <p className="rev mt-14 text-[16px] leading-[1.7] text-[var(--muted)]">
        {closing}
      </p>

      <style>{`
        .ss-flow-path {
          animation: ss-flow 2.8s cubic-bezier(0.4, 0, 0.2, 1) infinite alternate;
        }
        @keyframes ss-flow {
          from { stroke-dashoffset: 360; opacity: 0.95; }
          to { stroke-dashoffset: -720; opacity: 0.7; }
        }
      `}</style>
    </section>
  );
}
