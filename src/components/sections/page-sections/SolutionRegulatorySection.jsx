import Container from '../../layout/Container';

export default function SolutionRegulatorySection({ description, items }) {
  return (
    <Container as="section" className="py-[var(--space-10)]">
      <div className="mx-auto max-w-[900px] px-[var(--space-6)] max-[700px]:px-[var(--space-4)]">
        <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-[var(--space-8)] max-[700px]:p-[var(--space-6)]">
          {description && (
            <p className="mb-[var(--space-6)] text-[18px] leading-[1.6] text-[var(--color-text)] max-[700px]:text-[16px]">
              {description}
            </p>
          )}

          {items && items.length > 0 && (
            <ul className="space-y-[var(--space-3)] text-[16px] leading-[1.6] text-[var(--color-muted)] max-[700px]:text-[15px]">
              {items.map((item, index) => (
                item ? (
                  <li key={index} className="flex items-start gap-[var(--space-3)]">
                    <span className="mt-[6px] flex h-[6px] w-[6px] shrink-0 rounded-full bg-[var(--color-muted)] max-[700px]:mt-[5px]" />
                    <span>{item}</span>
                  </li>
                ) : (
                  <li key={index} className="h-[var(--space-2)]" />
                )
              ))}
            </ul>
          )}
        </div>
      </div>
    </Container>
  );
}
