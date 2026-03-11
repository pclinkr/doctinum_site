import Container from '../../layout/Container';

export default function VisionConvictionSection({ 
  label,
  title,
  cards = []
}) {
  return (
    <section className="border-t border-color-border bg-color-surface py-28">
      <Container>
        <div className="mx-auto max-w-[1000px]">
          <p className="rev mb-5 text-[11px] font-medium uppercase tracking-[0.18em] text-color-primary">
            {label}
          </p>
          <h2 className="rev mb-12 text-[clamp(29px,3vw,42px)] font-[var(--w500)] leading-[1.2] tracking-[-0.02em]">
            {title}
          </h2>
          
          <div className="grid grid-cols-1 gap-8">
            {cards.map((card, index) => (
              <div
                key={index}
                className="rev border border-color-border bg-white p-8"
              >
                <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.15em] text-color-muted">
                  {card.label}
                </p>
                <p className="text-[16px] font-light leading-[1.7]">
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
