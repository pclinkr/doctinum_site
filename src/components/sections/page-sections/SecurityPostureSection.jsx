import Container from '../../layout/Container';

export default function SecurityPostureSection({
  label,
  title,
  intro,
  activeItems = [],
  pendingItems = [],
  note,
}) {
  return (
    <section className="border-y border-color-border bg-color-surface py-[clamp(56px,7vw,110px)]">
      <Container>
        <div className="mx-auto max-w-[860px]">
          <p className="rev mb-5 text-[12px] font-[var(--w500)] uppercase tracking-[0.16em] text-color-primary">
            {label}
          </p>
          <h2 className="rev mb-5 font-serif text-[clamp(1.9rem,3.2vw,2.8rem)] font-[600] leading-[1.16] tracking-[-0.02em]">
            {title}
          </h2>
          <p className="rev mb-8 max-w-[680px] text-[17px] font-light leading-[1.8] text-ink-68">
            {intro}
          </p>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="rev">
              <p className="mb-5 border-b border-color-border pb-3 text-[12px] font-[var(--w500)] uppercase tracking-[0.16em] text-color-primary">
                En place aujourd'hui
              </p>
              <ul className="flex flex-col gap-3">
                {activeItems.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-baseline gap-3 text-[15px] leading-[1.6] text-ink-68"
                  >
                    <span className="flex-shrink-0 text-[13px] font-[var(--w500)] text-color-primary">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rev">
              <p className="mb-5 border-b border-color-border pb-3 text-[12px] font-[var(--w500)] uppercase tracking-[0.16em] text-color-muted">
                Trajectoire engagée
              </p>
              <ul className="flex flex-col gap-3">
                {pendingItems.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-baseline gap-3 text-[15px] leading-[1.6] text-ink-68"
                  >
                    <span className="flex-shrink-0 text-[13px] font-[var(--w500)] text-color-muted">
                      ○
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {note && (
            <div className="rev mt-8 border-l-2 border-color-accent-1 bg-color-white px-6 py-5 text-[15px] leading-[1.7] text-ink-65">
              <strong className="font-medium text-ink">Notre posture :</strong>{' '}
              {note}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
