import { useTranslation } from 'react-i18next';
import Container from '../../layout/Container';

const OUTPUT_TAG_CLASSES = {
  alert:
    'border-[color-mix(in_srgb,#f87171_35%,transparent)] text-[#f87171] bg-transparent',
  warn: 'border-[color-mix(in_srgb,#fbbf24_35%,transparent)] text-[#fbbf24] bg-transparent',
  green:
    'border-[color-mix(in_srgb,#4ade80_35%,transparent)] text-[#4ade80] bg-transparent',
  muted: 'border-[var(--white-15)] text-[var(--white-40)] bg-transparent',
};

export default function Home2ApproachSection() {
  const { t } = useTranslation();
  const steps = t('sections.home2.approach.steps', { returnObjects: true });
  const outputRows = t('sections.home2.approach.outputRows', {
    returnObjects: true,
  });

  return (
    <section
      id="approach"
      className="bg-[var(--color-primary)] py-24 text-[var(--color-white)]"
    >
      <Container>
        <p className="rev ds-text-label mb-5 text-[var(--color-accent-1)]">
          {t('sections.home2.approach.label')}
        </p>
        <h2 className="rev d1 mb-5 max-w-[20ch] text-[clamp(2rem,3.5vw,3rem)] font-normal leading-[1.18] tracking-[-0.01em]">
          {t('sections.home2.approach.titlePrefix')}{' '}
          <em className="si text-[var(--color-accent-1)]">
            {t('sections.home2.approach.titleAccent')}
          </em>
        </h2>
        <p className="rev d2 mb-12 max-w-[56ch] text-[15px] leading-[1.8] text-[var(--white-70)]">
          {t('sections.home2.approach.body')}
        </p>

        <div className="grid gap-10 min-[980px]:grid-cols-[1fr_1px_1fr]">
          <div className="rev">
            <p className="mb-6 border-b border-[var(--white-14)] pb-3 text-[11px] font-[var(--w500)] uppercase tracking-[0.14em] text-[var(--color-accent-1)]">
              {t('sections.home2.approach.stepsTitle')}
            </p>

            <div className="flex flex-col">
              {(steps || []).map((step, index) => (
                <div
                  key={step.title}
                  className="grid grid-cols-[36px_1fr] gap-4 border-b border-[var(--white-08)] py-5 last:border-b-0"
                >
                  <span className="pt-0.5 font-serif text-[18px] text-[var(--white-34)]">
                    {step.number}
                  </span>
                  <div>
                    <p className="mb-1 text-[14px] font-[var(--w500)] text-[var(--color-white)]">
                      {step.title}
                    </p>
                    <p className="text-[14px] leading-[1.65] text-[var(--white-60)]">
                      {step.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden bg-[var(--white-14)] min-[980px]:block" />

          <div className="rev d1">
            <p className="mb-6 border-b border-[var(--white-14)] pb-3 text-[11px] font-[var(--w500)] uppercase tracking-[0.14em] text-[var(--color-accent-1)]">
              {t('sections.home2.approach.outputTitle')}
            </p>

            <div className="border border-[var(--white-14)] bg-[var(--white-05)] p-7">
              <p className="mb-5 text-[11px] font-[var(--w500)] uppercase tracking-[0.12em] text-[var(--color-accent-1)]">
                {t('sections.home2.approach.outputHeader')}
              </p>

              <div className="flex flex-col">
                {(outputRows || []).map((row) => (
                  <div
                    key={row.label}
                    className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--white-08)] py-3 last:border-b-0"
                  >
                    <span className="text-[14px] text-[var(--white-60)]">
                      {row.label}
                    </span>
                    <span className="flex items-center gap-2 text-[14px] font-[var(--w500)] text-[var(--color-white)]">
                      {row.value}
                      {row.tagLabel ? (
                        <span
                          className={`inline-flex border px-2 py-[3px] text-[10px] uppercase tracking-[0.1em] ${OUTPUT_TAG_CLASSES[row.tagTone] || OUTPUT_TAG_CLASSES.muted}`.trim()}
                        >
                          {row.tagLabel}
                        </span>
                      ) : null}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-[var(--white-14)] pt-4 text-[12px] text-[var(--white-38)]">
                <span>{t('sections.home2.approach.footerLeft')}</span>
                <span>{t('sections.home2.approach.footerRight')}</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
