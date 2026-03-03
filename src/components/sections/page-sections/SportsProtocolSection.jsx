import SectionHeading from '../SectionHeading';
import Badge from '../../ui/Badge';
import { useTranslation } from 'react-i18next';

export default function SportsProtocolSection() {
  const { t } = useTranslation();
  const copy = t('sections.sportsProtocol', { returnObjects: true });
  const heading = copy.heading;
  const leftTitle = copy.leftTitle;
  const leftList = copy.leftList;
  const leftBottom = copy.leftBottom;
  const rightTitle = copy.rightTitle;
  const rightList = copy.rightList;
  const rightBottom = copy.rightBottom;

  return (
    <section className="mx-auto w-full max-w-[1200px] px-16 py-24 text-center max-[1024px]:px-8 max-[768px]:px-5">
      <SectionHeading className="rev" title={<>{heading}</>} style={{ marginBottom: '48px' }} />

      <div className="rev grid grid-cols-2 gap-5 text-left max-[809px]:grid-cols-1">
        <div className="relative rounded-[var(--r-md)] bg-[var(--surface)] p-8">
          <div className="border-b border-[var(--border)] pb-3 text-[12px] font-[var(--w500)] uppercase tracking-[0.07em] text-[var(--muted)] mb-4">
            {leftTitle}
          </div>
          <p className="mb-3 text-[14px] text-[var(--muted)]">{copy.leftIntro}</p>
          <div className="space-y-2 mb-6">
            {leftList.map((item) => (
              <div key={item} className="flex items-center gap-[10px] py-2 text-[14px] text-[var(--muted)]">
                <span className="flex h-[19px] w-[19px] shrink-0 items-center justify-center rounded-full bg-[var(--ink-06)]">
                  <svg className="h-[10px] w-[10px]" viewBox="0 0 10 10" stroke="currentColor" strokeWidth="2" fill="none">
                    <circle cx="5" cy="5" r="3" />
                  </svg>
                </span>
                {item}
              </div>
            ))}
          </div>

          <div className="border-t border-[var(--border)] pt-4">
            <p className="mb-3 text-[14px] text-[var(--muted)]">{copy.leftBottomIntro}</p>
            {leftBottom.map((item) => (
              <div key={item} className="flex items-center gap-[10px] py-2 text-[14px] text-[var(--color-primary)]">
                <span className="flex h-[19px] w-[19px] shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)]">
                  <svg className="h-[10px] w-[10px]" viewBox="0 0 10 10" stroke="#fff" strokeWidth="2.5" fill="none">
                    <polyline points="2,5 4.5,7.5 8,2.5" />
                  </svg>
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative rounded-[var(--r-md)] bg-[var(--surface)] p-8">
          <Badge className="absolute -top-3 right-5 rounded-full bg-[var(--color-primary)] px-[13px] py-1 text-[12px] font-[var(--w500)] text-[var(--cta-text)]">
            {copy.brand}
          </Badge>

          <div className="border-b border-[var(--border)] pb-3 text-[12px] font-[var(--w500)] uppercase tracking-[0.07em] text-[var(--muted)] mb-4">
            {rightTitle}
          </div>
          <p className="mb-3 text-[14px] text-[var(--muted)]">
            {copy.rightIntro}
          </p>

          <div className="space-y-2">
            {rightList.map((item) => (
              <div key={item} className="flex items-center gap-[10px] py-2 text-[14px] text-[var(--muted)]">
                <span className="flex h-[19px] w-[19px] shrink-0 items-center justify-center rounded-full bg-[var(--ink-06)]">
                  <svg className="h-[10px] w-[10px]" viewBox="0 0 10 10" stroke="currentColor" strokeWidth="2" fill="none">
                    <circle cx="5" cy="5" r="3" />
                  </svg>
                </span>
                {item}
              </div>
            ))}
          </div>

          <div className="border-t border-[var(--border)] pt-4 mt-4">
            <p className="text-[14px] leading-[1.7] text-[var(--muted)]">{rightBottom}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
