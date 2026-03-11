import SectionHeading from '../SectionHeading';
import Container from '../../layout/Container';

export default function HomeOurApproachSection({ title, intro, steps }) {
  return (
    <Container as="section" className="py-[var(--space-10)]">
      <div className="mx-auto max-w-[900px] px-[var(--space-6)] max-[700px]:px-[var(--space-4)]">
        <SectionHeading
          className="text-center"
          title={title}
        />

        {intro && (
          <p className="mx-auto my-[var(--space-8)] max-w-[720px] text-center text-[20px] leading-[1.6] text-[var(--color-muted)] max-[700px]:mb-[var(--space-6)] max-[700px]:text-[18px]">
            {intro}
          </p>
        )}

        <div className="my-[var(--space-10)] space-y-[var(--space-6)] max-[700px]:my-[var(--space-8)]">
          {steps?.map((step, index) => (
            <div 
              key={index}
              className="flex gap-[var(--space-6)] rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-[var(--space-6)] transition-shadow duration-300 ease-out hover:shadow-[0_8px_24px_rgba(19,47,75,0.06)] max-[700px]:flex-col max-[700px]:gap-[var(--space-4)] max-[700px]:p-[var(--space-5)]"
            >
              <div className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-primary)] text-[20px] font-semibold text-white max-[700px]:h-[40px] max-[700px]:w-[40px] max-[700px]:text-[18px]">
                {index + 1}
              </div>
              <div className="flex-1">
                <h3 className="mb-[var(--space-2)] text-[20px] font-semibold leading-[1.3] tracking-[-0.02em] text-[var(--color-text)] max-[700px]:text-[18px]">
                  {step.title}
                </h3>
                <p className="text-[16px] leading-[1.6] text-[var(--color-muted)] max-[700px]:text-[15px]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
