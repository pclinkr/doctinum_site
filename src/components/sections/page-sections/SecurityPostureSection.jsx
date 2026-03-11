import Container from '../../layout/Container';

export default function SecurityPostureSection({ 
  label,
  title,
  intro,
  activeItems = [],
  pendingItems = [],
  note
}) {
  return (
    <section className="border-y border-color-border bg-color-surface py-28">
      <Container>
        <div className="mx-auto max-w-[860px]">
          <p className="rev mb-5 text-[11px] font-medium uppercase tracking-[0.18em] text-color-primary">
            {label}
          </p>
          <h2 className="rev mb-5 text-[clamp(1.6rem,2.5vw,2.2rem)] font-[var(--w400)] leading-[1.25] tracking-[-0.02em]">
            {title}
          </h2>
          <p className="rev mb-8 max-w-[680px] text-[1rem] font-light leading-[1.8] text-ink-68">
            {intro}
          </p>
          
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="rev">
              <p className="mb-5 border-b border-color-border pb-3 text-[0.75rem] font-medium uppercase tracking-[0.12em] text-color-primary">
                En place aujourd'hui
              </p>
              <ul className="flex flex-col gap-3">
                {activeItems.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-baseline gap-3 text-[0.9rem] font-light leading-[1.5] text-ink-68"
                  >
                    <span className="flex-shrink-0 text-[0.75rem] font-medium text-color-primary">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="rev">
              <p className="mb-5 border-b border-color-border pb-3 text-[0.75rem] font-medium uppercase tracking-[0.12em] text-color-muted">
                Trajectoire engagée
              </p>
              <ul className="flex flex-col gap-3">
                {pendingItems.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-baseline gap-3 text-[0.9rem] font-light leading-[1.5] text-ink-68"
                  >
                    <span className="flex-shrink-0 text-[0.75rem] font-medium text-color-muted">○</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {note && (
            <div className="rev mt-8 border-l-2 border-color-accent-1 bg-white px-6 py-5 text-[0.88rem] font-light leading-[1.7] text-ink-65">
              <strong className="font-medium text-ink">Notre posture :</strong> {note}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
