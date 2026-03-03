import { ArrowRight } from 'lucide-react';
import Card from '../../ui/Card';

export default function ExampleCard({ 
  cardItem,
  onCardClick,
  showOverlay = true,
  overlayGradient = 'var(--gradient-overlay-top)',
  aspectRatio = 'aspect-[16/11]',
  showButton = true,
  className = ''
}) {
  const handleClick = () => {
    if (onCardClick) {
      onCardClick(cardItem);
    }
  };

  const handleButtonClick = (event) => {
    event.stopPropagation();
    handleClick();
  };

  return (
    <Card
      className={`rev cursor-pointer border-0 bg-transparent p-0 shadow-none transition-transform duration-300 ease-spring hover:translate-y-px ${className}`}
      onClick={handleClick}
    >
      <div className={`relative ${aspectRatio} overflow-hidden rounded-[16px] border border-[var(--border)]`}>
        {cardItem.imageUrl && (
          <>
            <div 
              className="h-full w-full bg-cover bg-center bg-no-repeat" 
              style={{ backgroundImage: `url(${cardItem.imageUrl})` }}
            />
            {showOverlay && (
              <div className="absolute inset-0" style={{ background: cardItem.overlayGradient || overlayGradient }} />
            )}
          </>
        )}
        {!cardItem.imageUrl && cardItem.gradient && (
          <div 
            className="h-full w-full"
            style={{ 
              backgroundImage: cardItem.gradient,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        )}
      </div>
      <div className="relative mt-3 rounded-[16px] bg-[var(--surface)] px-4 pb-4 pt-4 pr-12">
        <h3 className="text-[clamp(18px,1.45vw,24px)] leading-[1.12] tracking-[-0.02em] text-[var(--color-primary)]">{cardItem.title}</h3>
        {cardItem.description && (
          <p className="mt-2 text-[14px] leading-[1.58] text-[var(--ink-50)]">{cardItem.description}</p>
        )}
        {showButton && (
          <button
            type="button"
            aria-label={`Open ${cardItem.title}`}
            className="absolute bottom-4 right-4 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-primary)] text-[var(--color-primary-contrast)] transition-transform duration-200 ease-out hover:scale-[1.05]"
            onClick={handleButtonClick}
          >
            <ArrowRight size={12} />
          </button>
        )}
      </div>
    </Card>
  );
}
