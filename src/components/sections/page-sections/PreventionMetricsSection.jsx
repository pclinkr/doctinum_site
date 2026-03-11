import Container from '../../layout/Container';

export default function PreventionMetricsSection({ metrics = [] }) {
  if (!metrics || metrics.length === 0) return null;

  return (
    <Container className="py-16">
      <div className="mx-auto max-w-[1100px]">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-4 text-[clamp(48px,6vw,72px)] font-[var(--w600)] leading-[1] tracking-[-0.04em] text-[var(--color-muted)]">
                {metric.value}
              </div>
              <div className="mb-2 text-[20px] font-[var(--w500)] leading-[1.3] tracking-[-0.02em] text-[var(--text-primary)]">
                {metric.label}
              </div>
              {metric.description && (
                <p className="text-[14px] leading-[1.5] text-[var(--muted)]">
                  {metric.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
