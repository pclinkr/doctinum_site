import SectionHeading from '../SectionHeading';
import Container from '../../layout/Container';

export default function HomeWhyVoiceSection({ title, blocks, footer }) {
  return (
    <Container as="section" className="py-[var(--space-10)]">
      <div className="mx-auto max-w-[900px] px-[var(--space-6)] max-[700px]:px-[var(--space-4)]">
        <SectionHeading
          className="text-center"
          title={title}
        />

        <div className="my-[var(--space-10)] grid grid-cols-2 gap-[var(--space-8)] max-[700px]:mb-[var(--space-8)] max-[700px]:mt-[var(--space-8)] max-[700px]:grid-cols-1 max-[700px]:gap-[var(--space-6)]">
          {blocks?.map((block, index) => (
            <div 
              key={index}
              className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-[var(--space-8)] transition-[transform,shadow] duration-300 ease-out hover:translate-y-px hover:shadow-[0_12px_32px_rgba(19,47,75,0.06)] max-[700px]:p-[var(--space-6)]"
            >
              <h3 className="mb-[var(--space-4)] text-[24px] font-semibold leading-[1.3] tracking-[-0.02em] text-[var(--color-text)] max-[700px]:text-[20px]">
                {block.title}
              </h3>
              <p className="text-[16px] font-normal leading-[1.6] text-[var(--color-muted)]">
                {block.description}
              </p>
            </div>
          ))}
        </div>

        {footer && (
          <div className="my-[var(--space-12)] p-[var(--space-8)] text-center max-[700px]:my-[var(--space-8)] max-[700px]:p-[var(--space-6)]">
            <p className="text-[28px] font-medium italic leading-[1.4] tracking-[-0.03em] text-[var(--color-text)] max-[700px]:text-[22px] max-[700px]:leading-[1.5]">
              {footer}
            </p>
          </div>
        )}
      </div>
    </Container>
  );
}
