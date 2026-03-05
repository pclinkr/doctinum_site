import { useTranslation } from 'react-i18next';
import SolutionStatementSection from './SolutionStatementSection';
import SolutionWorkflowSection from './SolutionWorkflowSection';

export default function HomeOurSolutionSection() {
  const { t } = useTranslation();

  return (
    <section
      className="mx-auto w-full max-w-[1200px] px-16 py-24 max-[1024px]:px-8 max-[768px]:px-5"
      id="homeOurSolution"
    >
      <div className="rev mb-10 text-center">
        <p className="mb-3 text-[11px] font-[var(--w500)] uppercase tracking-[0.07em] text-[var(--muted)]">
          {t('sections.homeOurSolution.eyebrow')}
        </p>
        <h2 className="mx-auto max-w-[980px] text-[var(--color-primary)]">
          {t('sections.homeOurSolution.title')}
        </h2>
      </div>

      <SolutionStatementSection
        statementTitle={{
          line1: t('sections.homeOurSolution.statementLine1'),
          line2: t('sections.homeOurSolution.statementLine2'),
        }}
        statementBody={t('sections.homeOurSolution.statementBody')}
        impactTitle={t('sections.homeOurSolution.impactTitle')}
        impactItems={t('sections.homeOurSolution.impactItems', {
          returnObjects: true,
        })}
      />
      <SolutionWorkflowSection />
    </section>
  );
}
