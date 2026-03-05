import Container from '../../layout/Container';
import Badge from '../../ui/Badge';
import ExampleCard from './ExampleCard';

export default function ExamplesGridSection({
  locale = 'fr',
  onNavigate,
  badgeText,
  title,
  description,
  cards = [],
  showOverlay = true,
  overlayGradient = 'var(--gradient-overlay-top)',
  aspectRatio = 'aspect-[16/11]',
  className = '',
  containerClassName = '',
  onCardClick,
  showCardButton = true,
}) {
  const handleCardClick = (cardItem) => {
    if (onCardClick) {
      onCardClick(cardItem);
    } else if (onNavigate && cardItem.page) {
      onNavigate(cardItem.page);
    } else if (onNavigate) {
      onNavigate('case-detail');
    }
  };

  return (
    <Container className={`pb-20 pt-0 ${containerClassName}`}>
      <section className={`rev ${className}`}>
        {badgeText && (
          <Badge className="mb-4 inline-flex rounded-full border border-[var(--border-mid)] bg-[var(--surface)] px-3 py-1 text-[11px] font-[var(--w500)] uppercase tracking-[0.08em]">
            {badgeText}
          </Badge>
        )}
        <h2 className="max-w-[18ch] text-[clamp(34px,4.2vw,50px)] leading-[1.02] tracking-[-0.045em]">
          {title}
        </h2>
        {description && (
          <p className="mt-4 max-w-[720px] text-[14px] leading-[1.7] text-[var(--muted)]">
            {description}
          </p>
        )}

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {cards.map((cardItem) => (
            <ExampleCard
              key={cardItem.title}
              cardItem={cardItem}
              onCardClick={handleCardClick}
              showOverlay={showOverlay}
              overlayGradient={overlayGradient}
              aspectRatio={aspectRatio}
              showButton={showCardButton}
            />
          ))}
        </div>
      </section>
    </Container>
  );
}
