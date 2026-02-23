import { useTranslation } from 'react-i18next';

const STEP_TONES = [
  { bg: 'bg-[linear-gradient(160deg,#ffffff_0%,#f7f9ff_100%)]', border: 'border-[#dde4f2]' },
  { bg: 'bg-[linear-gradient(160deg,#ffffff_0%,#f5faf8_100%)]', border: 'border-[#dbece4]' },
  { bg: 'bg-[linear-gradient(160deg,#ffffff_0%,#f8f6ff_100%)]', border: 'border-[#e3ddf4]' },
  { bg: 'bg-[linear-gradient(160deg,#ffffff_0%,#f6fbff_100%)]', border: 'border-[#dce9f5]' },
  { bg: 'bg-[linear-gradient(160deg,#ffffff_0%,#fbf8f4_100%)]', border: 'border-[#ebe1d7]' }
];

export default function HomeOurSolutionSection() {
  const { t } = useTranslation();
  const impactItems = t('sections.homeOurSolution.impactItems', { returnObjects: true });
  const workflowSteps = t('sections.homeOurSolution.workflow.steps', { returnObjects: true });

  return (
    <section className="mx-auto w-full max-w-[1200px] px-16 py-24 max-[1024px]:px-8 max-[768px]:px-5" id="homeOurSolution">
      <div className="rev mb-10 text-center">
        <p className="mb-3 text-[11px] font-[var(--w500)] uppercase tracking-[0.07em] text-[var(--muted)]">{t('sections.homeOurSolution.eyebrow')}</p>
        <h2 className="mx-auto max-w-[980px] text-[var(--color-primary)]">
          {t('sections.homeOurSolution.title')}
        </h2>
      </div>

      <div className="rev mb-8 grid gap-6 rounded-[24px] border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[0_16px_42px_var(--ink-06)] max-[809px]:p-6">
        <div className="grid grid-cols-[1.1fr_.9fr] gap-8 max-[980px]:grid-cols-1">
          <div className="flex flex-col gap-4">
            <h3 className="text-[clamp(24px,3.2vw,36px)] font-[var(--w500)] leading-[1.08] tracking-[-0.045em] text-[var(--color-primary)]">
              <span className="block">{t('sections.homeOurSolution.statementLine1')}</span>
              <span className="block">{t('sections.homeOurSolution.statementLine2')}</span>
            </h3>
            <p className="max-w-[65ch] text-[15px] leading-[1.72] text-[var(--muted)]">
              {t('sections.homeOurSolution.statementBody')}
            </p>
          </div>

          <div className="rounded-[14px] border border-[var(--ink-10)] bg-[linear-gradient(150deg,#fff_0%,#fafcfe_100%)] px-5 py-4">
            <p className="mb-2 text-[11px] font-[var(--w500)] uppercase tracking-[0.07em] text-[var(--muted)]">{t('sections.homeOurSolution.impactTitle')}</p>
            <div className="flex flex-col gap-[10px]">
              {impactItems.map((itemText, index) => (
                <div key={itemText} className={`rev flex items-start gap-3 rounded-[10px] border border-transparent px-2 py-2 hover:border-[var(--ink-08)] ${index === 0 ? 'd1' : index === 1 ? 'd2' : 'd3'}`.trim()}>
                  <span className="mt-[7px] h-[6px] w-[6px] shrink-0 rounded-full bg-[var(--action-primary-bg)]" />
                  <p className="text-[13px] leading-[1.58] text-[var(--color-primary)]">{itemText}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="rev rounded-[24px] border border-[var(--border)] bg-[linear-gradient(160deg,var(--bg-white)_0%,var(--bg-surface)_100%)] p-8 max-[809px]:p-6">
        <div className="mb-7 flex items-end justify-between gap-5 max-[809px]:flex-col max-[809px]:items-start">
          <div>
            <p className="mb-2 text-[11px] font-[var(--w500)] uppercase tracking-[0.07em] text-[var(--muted)]">{t('sections.homeOurSolution.workflow.eyebrow')}</p>
            <h3 className="text-[clamp(26px,3.5vw,40px)] font-[var(--w500)] leading-[1.08] tracking-[-0.05em] text-[var(--color-primary)]">
              {t('sections.homeOurSolution.workflow.title')}
            </h3>
          </div>
          <div className="rounded-full border border-[var(--border-mid)] bg-[var(--bg-page)] px-4 py-2 text-[13px] font-[var(--w500)] tracking-[var(--track)] text-[var(--muted)]">
            {t('sections.homeOurSolution.workflow.chip')}
          </div>
        </div>

        <div className="grid grid-cols-[1.15fr_.85fr] gap-8 max-[980px]:grid-cols-1">
          <div className="flex flex-col gap-3">
            {workflowSteps.map((stepItem, index) => (
              <div key={stepItem.title} className={`rev grid grid-cols-[38px_1fr] gap-4 rounded-[16px] border p-5 ${STEP_TONES[index]?.bg || 'bg-[var(--surface)]'} ${STEP_TONES[index]?.border || 'border-[var(--border)]'} ${index === 0 ? 'd1' : index === 1 ? 'd2' : index === 2 ? 'd3' : index === 3 ? 'd4' : ''}`.trim()}>
                <div className="relative flex justify-center">
                  <span className="relative z-[2] flex h-6 w-6 items-center justify-center rounded-full border border-[var(--border-mid)] bg-[var(--bg-white)] text-[10px] font-[var(--w500)] text-[var(--muted)]">
                    {index + 1}
                  </span>
                  {index < workflowSteps.length - 1 ? (
                    <span className="absolute top-6 h-[calc(100%+18px)] w-px bg-[linear-gradient(180deg,var(--ink-16)_0%,var(--ink-06)_100%)]" />
                  ) : null}
                </div>
                <div>
                  <h4 className="mb-2 text-[17px] font-[var(--w500)] tracking-[-0.02em] text-[var(--color-primary)]">{stepItem.title}</h4>
                  <p className="text-[14px] leading-[1.66] text-[var(--muted)]">{stepItem.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-rows-[auto_1fr] gap-4">
            <div className="rev rounded-[16px] border border-[var(--border)] bg-[var(--surface)] p-5">
              <p className="mb-2 text-[11px] font-[var(--w500)] uppercase tracking-[0.07em] text-[var(--muted)]">{t('sections.homeOurSolution.visual.alertTitle')}</p>
              <p className="text-[14px] leading-[1.65] text-[var(--muted)]">
                {t('sections.homeOurSolution.visual.alertBody')}
              </p>
            </div>

            <div className="rev d2 rounded-[16px] border border-[var(--border)] bg-[var(--surface)] p-5">
              <p className="mb-3 text-[11px] font-[var(--w500)] uppercase tracking-[0.07em] text-[var(--muted)]">{t('sections.homeOurSolution.visual.chartTitle')}</p>
              <div className="space-y-4">
                <div className="rounded-[12px] border border-[var(--ink-10)] bg-[var(--bg-page)] p-3">
                  <p className="mb-2 text-[11px] text-[var(--muted)]">{t('sections.homeOurSolution.visual.chartLineLabel')}</p>
                  <svg viewBox="0 0 240 70" className="h-[72px] w-full">
                    <path d="M6 56 C30 46, 40 48, 58 40 C76 33, 90 36, 112 28 C134 20, 150 26, 174 18 C194 12, 210 16, 234 8" fill="none" stroke="rgba(58,92,168,.45)" strokeWidth="2.2" />
                    <path d="M6 60 C32 51, 56 54, 78 46 C102 38, 122 43, 146 35 C170 28, 196 30, 234 22" fill="none" stroke="rgba(38,146,108,.5)" strokeWidth="2" />
                  </svg>
                </div>

                <div className="rounded-[12px] border border-[var(--ink-10)] bg-[var(--bg-page)] p-3">
                  <p className="mb-2 text-[11px] text-[var(--muted)]">{t('sections.homeOurSolution.visual.chartBarsLabel')}</p>
                  <div className="space-y-2">
                    <div className="h-[8px] w-[88%] rounded-full bg-[var(--ink-08)]">
                      <div className="h-full w-[76%] rounded-full bg-[rgba(58,92,168,.62)]" />
                    </div>
                    <div className="h-[8px] w-[72%] rounded-full bg-[var(--ink-08)]">
                      <div className="h-full w-[52%] rounded-full bg-[rgba(38,146,108,.62)]" />
                    </div>
                    <div className="h-[8px] w-[92%] rounded-full bg-[var(--ink-08)]">
                      <div className="h-full w-[84%] rounded-full bg-[rgba(164,126,70,.58)]" />
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="rounded-full border border-[rgba(58,92,168,.25)] bg-[rgba(58,92,168,.1)] px-2 py-1 text-[11px] text-[rgba(43,66,118,.9)]">{t('sections.homeOurSolution.visual.badges.lowAlert')}</span>
                  <span className="rounded-full border border-[rgba(38,146,108,.25)] bg-[rgba(38,146,108,.1)] px-2 py-1 text-[11px] text-[rgba(23,106,77,.9)]">{t('sections.homeOurSolution.visual.badges.stable')}</span>
                  <span className="rounded-full border border-[rgba(164,126,70,.22)] bg-[rgba(164,126,70,.1)] px-2 py-1 text-[11px] text-[rgba(126,93,45,.9)]">{t('sections.homeOurSolution.visual.badges.monitoring')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="rev d3 mt-7 rounded-[12px] border border-[var(--ink-10)] bg-[var(--bg-page)] px-4 py-3 text-[13px] leading-[1.6] text-[var(--muted)]">
          {t('sections.homeOurSolution.reassurance')}
        </p>
      </div>
    </section>
  );
}
