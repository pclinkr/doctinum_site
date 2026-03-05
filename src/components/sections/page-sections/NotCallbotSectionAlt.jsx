import { useTranslation } from 'react-i18next';
import SectionHeading from '../SectionHeading';

const ICONS = [
  <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4Z" />,
  <path d="M3 13h6l3 8 4-18 3 10h2" />,
  <path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z" />,
];

export default function NotCallbotSectionAlt() {
  const { t } = useTranslation();
  const copy = t('sections.notCallbot', { returnObjects: true });
  const items = copy.items.map((item, index) => ({
    ...item,
    icon: ICONS[index],
  }));

  return (
    <section className="mx-auto w-full max-w-[1200px] px-16 pb-24 pt-2 text-center max-[1024px]:px-8 max-[768px]:px-5">
      <SectionHeading
        className="rev"
        title={
          <>
            {copy.title} <span className="si">{copy.titleAccent}</span>
            {copy.titleSuffix}
          </>
        }
        style={{ marginBottom: '48px' }}
      />

      <div className="relative mx-auto max-w-[1080px]">
        <div className="relative mb-8 h-[86px] max-[809px]:hidden">
          <div className="pointer-events-none absolute inset-0 z-0">
            <svg
              className="absolute left-0 top-1/2 h-[74px] w-full -translate-y-1/2"
              viewBox="0 0 1080 140"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M134 90 C290 122, 410 122, 540 72 C670 22, 790 22, 946 56"
                fill="none"
                stroke="var(--border-mid)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                className="nc-alt-flow-path"
                d="M134 90 C290 122, 410 122, 540 72 C670 22, 790 22, 946 56"
                fill="none"
                stroke="var(--action-primary-bg)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="220 2000"
              />
            </svg>
          </div>

          <div className="relative z-[1] grid grid-cols-3">
            {items.map((item, index) => (
              <div
                key={item.title}
                className={`rev ${index === 0 ? 'd1' : index === 1 ? 'd2' : 'd3'} mx-auto flex h-[92px] w-[92px] items-center justify-center rounded-[22px] bg-[var(--color-primary)]`}
              >
                <svg
                  className="h-[22px] w-[22px] fill-none stroke-[2] stroke-[var(--text-inverse)] [stroke-linecap:round] [stroke-linejoin:round]"
                  viewBox="0 0 24 24"
                >
                  {item.icon}
                </svg>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 max-[809px]:grid-cols-1">
          {items.map((item, index) => (
            <article
              key={item.title}
              className={`rev ${index === 0 ? 'd1' : index === 1 ? 'd2' : 'd3'} flex flex-col items-center px-7 py-8 text-center`}
            >
              <div className="mb-4 hidden h-[56px] w-[56px] items-center justify-center rounded-[16px] border border-[var(--border)] bg-[var(--bg-page)] max-[809px]:flex">
                <svg
                  className="h-[19px] w-[19px] fill-none stroke-[2] stroke-[var(--color-primary)] [stroke-linecap:round] [stroke-linejoin:round]"
                  viewBox="0 0 24 24"
                >
                  {item.icon}
                </svg>
              </div>
              <h3 className="mb-2 flex h-[124px] items-center justify-center text-[29px] font-[var(--w500)] leading-[1.08] tracking-[-0.04em] text-[var(--color-primary)] max-[1024px]:h-[104px] max-[1024px]:text-[23px]">
                <span>{item.title}</span>
              </h3>
              <p className="w-full text-[15px] leading-[1.68] text-[var(--muted)]">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .nc-alt-flow-path {
          animation: nc-alt-flow 2.8s cubic-bezier(0.4, 0, 0.2, 1) infinite alternate;
        }
        @keyframes nc-alt-flow {
          from {
            stroke-dashoffset: 360;
            opacity: 0.95;
          }
          to {
            stroke-dashoffset: -720;
            opacity: 0.7;
          }
        }
      `}</style>
    </section>
  );
}
