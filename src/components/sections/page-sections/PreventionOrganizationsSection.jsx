import Container from '../../layout/Container';
import Card from '../../ui/Card';

export default function PreventionOrganizationsSection({
  title = '',
  cards = [],
  className = '',
  containerClassName = '',
}) {
  return (
    <Container className={`py-20 ${containerClassName}`}>
      <section className={`rev ${className}`}>
        <h2 className="mb-12 text-center text-[clamp(34px,4.2vw,50px)] leading-[1.02] tracking-[-0.045em]">
          {title}
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, index) => (
            <Card
              key={index}
              className="rev flex flex-col items-center border border-[var(--border)] bg-[var(--surface)] p-8 text-center shadow-none"
            >
              <div className="mb-4 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[var(--color-primary)]">
                <svg
                  className="h-[28px] w-[28px] fill-none stroke-[2] stroke-[var(--text-inverse)] [stroke-linecap:round] [stroke-linejoin:round]"
                  viewBox="0 0 24 24"
                >
                  {index === 0 && (
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z M9 22V12h6v10" />
                  )}
                  {index === 1 && (
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2 M9 11a4 4 0 100-8 4 4 0 000 8z M23 21v-2a4 4 0 00-3-3.87 M16 3.13a4 4 0 010 7.75" />
                  )}
                  {index === 2 && (
                    <path d="M12 2L2 7l10 5 10-5-10-5z M2 17l10 5 10-5 M2 12l10 5 10-5" />
                  )}
                  {index === 3 && (
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  )}
                </svg>
              </div>
              <h3 className="mb-2 text-[18px] font-[var(--w500)] leading-[1.2] tracking-[-0.02em] text-[var(--color-primary)]">
                {card.title}
              </h3>
              <p className="text-[14px] leading-[1.6] text-[var(--muted)]">
                {card.description}
              </p>
            </Card>
          ))}
        </div>
      </section>
    </Container>
  );
}
