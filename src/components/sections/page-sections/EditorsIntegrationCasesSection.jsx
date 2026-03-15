import Container from '../../layout/Container';
import Card from '../../ui/Card';

export default function EditorsIntegrationCasesSection({
  title = '',
  cards = [],
  className = '',
  containerClassName = '',
}) {
  return (
    <Container className={`py-20 ${containerClassName}`}>
      <section className={`rev ${className}`}>
        <h2 className="mb-12 text-[clamp(34px,4.2vw,50px)] leading-[1.02] tracking-[-0.045em]">
          {title}
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <Card
              key={index}
              className="rev flex flex-col p-0 overflow-hidden border border-[var(--border)] bg-[var(--surface)] shadow-none"
            >
              <div
                className="relative overflow-hidden bg-cover bg-center p-6"
                style={{
                  background: card.gradient || 'var(--gradient-accent-warm)',
                }}
              >
                <h3 className="text-[18px] font-[var(--w600)] leading-[1.2] tracking-[-0.02em] text-[var(--color-white)]">
                  {card.title}
                </h3>
                {/* <div
                  className="absolute inset-0"
                  style={{ background: 'var(--gradient-overlay-top)' }}
                /> */}
              </div>
              <div className="flex flex-col gap-3 p-6">
                <p className="text-[14px] leading-[1.6] text-[var(--muted)]">
                  {card.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </Container>
  );
}
