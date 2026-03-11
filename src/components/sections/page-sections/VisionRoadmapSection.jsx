import Container from '../../layout/Container';

export default function VisionRoadmapSection({ 
  label,
  title,
  timeline = []
}) {
  return (
    <section className="py-28">
      <Container>
        <div className="mx-auto max-w-[1000px]">
          <p className="rev mb-5 text-[11px] font-medium uppercase tracking-[0.18em] text-color-primary">
            {label}
          </p>
          <h2 className="rev mb-14 text-[clamp(29px,3vw,42px)] font-[var(--w500)] leading-[1.2] tracking-[-0.02em]">
            {title}
          </h2>
          
          <div className="flex flex-col gap-0">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="rev grid grid-cols-[7rem_1fr] gap-8 border-b border-color-border py-8"
              >
                <div className="pt-[2px] text-[15px] font-[var(--w600)] uppercase tracking-[0.05em] text-color-primary">
                  {item.year}
                </div>
                
                <div>
                  <div className="mb-2 text-[13.5px] font-medium uppercase tracking-[0.08em]">
                    {item.title}
                  </div>
                  <div className="mb-3 text-[14.5px] font-light leading-[1.7] text-ink-65">
                    {item.text}
                  </div>
                  {item.tags && item.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="border border-color-border bg-color-surface px-[11px] py-1 text-[11.5px] uppercase tracking-[0.08em] text-color-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
