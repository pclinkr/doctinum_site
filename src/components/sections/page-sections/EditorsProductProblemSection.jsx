import Container from '../../layout/Container';

export default function EditorsProductProblemSection({
  title = '',
  intro = '',
  blocks = [],
  footer = '',
  className = '',
  containerClassName = '',
}) {
  return (
    <Container className={`py-20 ${containerClassName}`}>
      <section className={`rev ${className}`}>
        <h2 className="text-center mb-8 text-[clamp(34px,4.2vw,50px)] leading-[1.02] tracking-[-0.045em]">
          {title}
        </h2>
        
        {intro && (
          <p className="mb-12 mx-auto text-center max-w-[720px] text-[16px] leading-[1.7] text-[var(--muted)]">
            {intro}
          </p>
        )}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {blocks.map((block, index) => (
            <div
              key={index}
              className="rev text-center rounded-[var(--r-md)] border border-[var(--border)] bg-[var(--surface)] p-6"
            >
              <h3 className="mb-3 text-[18px] font-[var(--w500)] leading-[1.2] tracking-[-0.02em] text-[var(--color-primary)]">
                {block.title}
              </h3>
              <p className="text-[14px] leading-[1.6] text-[var(--muted)]">
                {block.description}
              </p>
            </div>
          ))}
        </div>

        {footer && (
          <p className="mt-12 text-center text-[16px] font-[var(--w500)] leading-[1.7] text-[var(--foreground)]">
            {footer}
          </p>
        )}
      </section>
    </Container>
  );
}
