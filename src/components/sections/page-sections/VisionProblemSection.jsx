import Container from '../../layout/Container';

export default function VisionProblemSection({ 
  label,
  title,
  intro,
  body,
  statPill,
  barriers = []
}) {
  return (
    <section className="border-y border-color-border bg-color-surface py-28">
      <Container>
        <div className="mx-auto max-w-[800px]">
          <div className="rev mb-16">
            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.18em] text-color-primary">
              {label}
            </p>
            <h2 className="mb-6 text-[clamp(29px,3vw,42px)] font-[var(--w500)] leading-[1.2] tracking-[-0.02em]">
              {title}
            </h2>
            <p className="mb-8 text-[17px] font-light leading-[1.8] text-ink-72" dangerouslySetInnerHTML={{ __html: intro }} />
            <p className="mb-8 text-[17px] font-light leading-[1.8] text-ink-72">
              {body}
            </p>
            {statPill && (
              <div className="mt-4 inline-flex items-baseline gap-2 rounded-sm bg-color-primary px-5 py-[10px] text-white">
                <span className="text-[24px] font-[var(--w600)]">{statPill.value}</span>
                <span className="text-[13px] opacity-85">{statPill.label}</span>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-0">
            {barriers.map((barrier, index) => (
              <div
                key={index}
                className={`rev grid grid-cols-[2rem_1fr] gap-5 border-color-border py-7 ${
                  index === 0 ? 'border-t' : ''
                } border-b`}
              >
                <span className="pt-[2px] font-serif text-[14.5px] text-color-accent-1">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <div className="mb-2 text-[13.5px] font-medium uppercase tracking-[0.05em]">
                    {barrier.title}
                  </div>
                  <div className="text-[14.5px] font-light text-ink-65">
                    {barrier.text}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
