import BrandIcon from '../ui/BrandIcon';
import { useTranslation } from 'react-i18next';
import Badge from '../ui/Badge';

export default function ProblemCard() {
  const { t } = useTranslation();

  const problems = t('sections.problemCard.problems', { returnObjects: true });

  return (
    <div
      className="rev relative mx-auto max-w-[980px] overflow-hidden rounded-[24px] px-8 py-12 max-[700px]:px-5 max-[700px]:py-9 bg-[var(--surface)] shadow-[0_2px_24px_var(--ink-04)]"
    >
      {/* <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#d8c8a8]/20 to-transparent" /> */}
      {/* <div className="pointer-events-none absolute -left-8 top-16 h-64 w-64 rounded-full bg-[#d9a895]/25 blur-2xl" /> */}
      {/* <div className="pointer-events-none absolute -right-8 bottom-4 h-72 w-72 rounded-full bg-[#d8c8a8]/15 blur-2xl" /> */}
      {/* <div className="pointer-events-none absolute left-8 right-8 top-[92px] h-px bg-[#d8c8a8]/30 max-[700px]:left-5 max-[700px]:right-5" /> */}

      <div className="mx-auto max-w-[760px] text-center">
        <Badge className="rev d1 mb-5 inline-block rounded-full bg-[var(--ink-06)] px-[13px] py-2 text-[12px] font-[var(--w500)]">{t('sections.problemCard.badge')}</Badge>

        <h2 className="rev d2 mb-6">
          {t('sections.problemCard.titlePrefix')} <span className="si">{t('sections.problemCard.titleAccent')}</span> {t('sections.problemCard.titleSuffix')}
        </h2>

        <p className="rev d3 mx-auto mb-10 max-w-[720px]">
          {t('sections.problemCard.intro')}
        </p>
      </div>

      <div className="relative mb-10 mt-8 grid grid-cols-2 gap-x-10 gap-y-9 max-[700px]:grid-cols-1">
        {problems.map((problem, index) => (
          <article
            key={index}
            className="rev relative pl-10 max-[700px]:pl-9"
            style={{ transitionDelay: `${220 + index * 120}ms` }}
          >
            <span className="absolute left-0 top-1 inline-flex h-6 w-6 items-center justify-center rounded-full border border-[var(--border-default)] bg-[var(--color-primary)] text-[11px] font-[var(--w500)] text-[var(--text-inverse)]">
              {index + 1}
            </span>
            <span className="absolute left-[30px] top-[13px] h-[7px] w-[7px] rounded-full bg-[var(--action-primary-bg)] opacity-80" />
            <span className="absolute left-3 top-8 bottom-[-18px] w-px bg-[var(--border-default)] max-[700px]:bottom-[-12px]" />
            <h3 className="mb-2 text-[22px] font-[var(--w500)] leading-[1.25] tracking-[-0.02em] text-[var(--text-primary)] max-[700px]:text-[20px]">
              {problem.title}
            </h3>
            <p className="text-[16px] leading-[1.65] text-[var(--text-muted)]">
              {problem.description}
            </p>
          </article>
        ))}
      </div>

      <div className="rev mx-auto mt-6 max-w-[680px] border-t border-[#d8c8a8]/20 pt-8 text-center" style={{ transitionDelay: '760ms' }}>
        <p className="text-[26px] font-[var(--w300)] italic leading-[1.45] tracking-[-0.02em] text-[var(--text-primary)] opacity-90 max-[700px]:text-[22px]">
          {t('sections.problemCard.outroLine1')}<br />
          {t('sections.problemCard.outroLine2')}
        </p>
      </div>

      <div className="rev mt-8 flex items-center justify-center gap-[8px]" style={{ transitionDelay: '900ms' }}>
        <div className="flex h-[36px] w-[36px] items-center justify-center rounded-[6px] bg-[var(--action-primary-bg)]">
          <BrandIcon stroke="var(--action-primary-fg)" width={18} height={18} />
        </div>
      </div>
    </div>
  );
}
