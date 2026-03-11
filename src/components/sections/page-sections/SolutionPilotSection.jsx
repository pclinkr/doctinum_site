import SectionHeading from '../SectionHeading';
import Container from '../../layout/Container';

export default function SolutionPilotSection({ title, description, steps, objectives, objectiveItems }) {
  return (
    <Container as="section" className="py-[var(--space-10)]">
      <div className="mx-auto max-w-[900px] px-[var(--space-6)] max-[700px]:px-[var(--space-4)]">
        <SectionHeading
          className="text-center"
          title={title}
        />

        {description && (
          <p className="mx-auto my-[var(--space-8)] max-w-[720px] text-center text-[20px] leading-[1.6] text-[var(--color-muted)] max-[700px]:mb-[var(--space-6)] max-[700px]:text-[18px]">
            {description}
          </p>
        )}

        {steps && steps.length > 0 && (
          <div className="my-[var(--space-10)] grid grid-cols-2 gap-[var(--space-6)] max-[700px]:my-[var(--space-8)] max-[700px]:grid-cols-1">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="flex items-center gap-[var(--space-4)] rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-[var(--space-6)] max-[700px]:p-[var(--space-5)]"
              >
                <div className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-primary)] text-[18px] font-semibold text-white max-[700px]:h-[36px] max-[700px]:w-[36px] max-[700px]:text-[16px]">
                  {index + 1}
                </div>
                <p className="text-[16px] font-medium leading-[1.4] text-[var(--color-text)] max-[700px]:text-[15px]">
                  {step}
                </p>
              </div>
            ))}
          </div>
        )}

        {objectiveItems && objectiveItems.length > 0 && (
          <div className="mx-auto max-w-[600px] rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-[var(--space-8)] max-[700px]:p-[var(--space-6)]">
            {objectives && (
              <p className="mb-[var(--space-4)] text-[18px] font-medium text-[var(--color-text)] max-[700px]:text-[16px]">
                {objectives}
              </p>
            )}
            <ul className="space-y-[var(--space-3)] text-[16px] leading-[1.6] text-[var(--color-text)] max-[700px]:text-[15px]">
              {objectiveItems.map((item, index) => (
                <li key={index} className="flex items-start gap-[var(--space-3)]">
                  <span className="mt-[6px] flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] max-[700px]:mt-[4px] max-[700px]:h-[18px] max-[700px]:w-[18px]">
                    <svg
                      className="h-[11px] w-[11px] max-[700px]:h-[10px] max-[700px]:w-[10px]"
                      viewBox="0 0 10 10"
                      stroke="#fff"
                      strokeWidth="2.5"
                      fill="none"
                    >
                      <polyline points="2,5 4.5,7.5 8,2.5" />
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Container>
  );
}
