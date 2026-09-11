import Container from '../../layout/Container';

export default function VisionConvictionSection({ label, title, cards = [] }) {
  return (
    <section className="border-t border-color-border bg-color-surface py-[clamp(56px,7vw,110px)]">
      <Container>
        <div className="mx-auto max-w-[1000px]">
          <p className="rev mb-5 text-[12px] font-[var(--w500)] uppercase tracking-[0.16em] text-color-primary">
            {label}
          </p>
          <h2 className="rev mb-12 font-serif text-[clamp(1.9rem,3.2vw,2.8rem)] font-[600] leading-[1.16] tracking-[-0.02em]">
            {title}
          </h2>

          <div className="grid grid-cols-1 gap-8">
            {cards.map((card, index) => (
              <div
                key={index}
                className="rev rounded-[20px] border border-color-border bg-color-white p-8"
              >
                <p className="mb-3 text-[12px] font-[var(--w500)] uppercase tracking-[0.16em] text-color-muted">
                  {card.label}
                </p>
                <p className="text-[17px] font-light leading-[1.75]">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
