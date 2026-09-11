import Container from '../../layout/Container';

export default function VisionRoadmapSection({ label, title, timeline = [] }) {
  return (
    <section className="py-[clamp(56px,7vw,110px)]">
      <Container>
        <div className="mx-auto max-w-[1000px]">
          <p className="rev mb-5 text-[12px] font-[var(--w500)] uppercase tracking-[0.16em] text-color-primary">
            {label}
          </p>
          <h2 className="rev mb-14 font-serif text-[clamp(1.9rem,3.2vw,2.8rem)] font-[600] leading-[1.16] tracking-[-0.02em]">
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
                  <div className="mb-2 text-[14px] font-[var(--w500)] uppercase tracking-[0.06em]">
                    {item.title}
                  </div>
                  <div className="mb-3 text-[15px] leading-[1.7] text-ink-65">
                    {item.text}
                  </div>
                  {item.tags && item.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="rounded-full border border-color-border bg-color-surface px-3 py-1 text-[11.5px] font-[var(--w500)] uppercase tracking-[0.1em] text-color-muted"
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
