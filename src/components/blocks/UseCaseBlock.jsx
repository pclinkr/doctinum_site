import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../ui/Button';
import MediaContainer from '../ui/MediaContainer';

export default function UseCaseBlock({
  title,
  media,
  cta,
  buttons = [],
  isImageRight = false,
  onNavigate,
  targetPage = 'case-studies',
  className = ''
}) {
  const { t } = useTranslation();

  const handleMediaClick = () => {
    onNavigate(targetPage);
  };

  const renderButtons = () => {
    if (buttons.length > 0) {
      return buttons.map((button) => (
        <Button 
          key={`${title}-${button.label}`} 
          variant="light" 
          onClick={() => onNavigate(button.page)}
        >
          {button.label}
        </Button>
      ));
    }
    
    return (
      <Button variant="light" onClick={() => onNavigate(targetPage)}>
        {cta}
      </Button>
    );
  };

  return (
    <article className={`rev mb-12 grid grid-cols-2 items-center gap-10 border-b border-[var(--border)] pb-12 last:mb-0 last:border-b-0 max-[809px]:flex max-[809px]:flex-col ${className}`}>
      <button
        type="button"
        onClick={handleMediaClick}
        className={`group relative aspect-[4/3] overflow-hidden rounded-[var(--r-md)] ${isImageRight ? 'min-[810px]:order-2' : 'min-[810px]:order-1'}`.trim()}
      >
        <MediaContainer
          type={media.type}
          src={media.src}
          gradient={media.gradient}
          alt={media.alt || title}
          autoPlay={media.autoPlay}
          muted={media.muted}
          loop={media.loop}
          playsInline={media.playsInline}
          enableParallax={media.enableParallax}
        />
        
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.0)_0%,rgba(18,42,70,0.12)_100%)]" />
        
        {media.showPlaceholder !== false && (
          <div className="absolute bottom-4 right-4 rounded-[var(--r-sm)] bg-[var(--white-90)] px-3 py-2 text-[12px] font-[var(--w500)] tracking-[0.01em] text-[var(--color-primary)] backdrop-blur-[8px]">
            {t('sections.homeUseCases.imagePlaceholder')}
          </div>
        )}
      </button>

      <div className={`flex flex-col gap-3 ${isImageRight ? 'min-[810px]:order-1' : 'min-[810px]:order-2'}`.trim()}>
        <h3 className="text-[clamp(24px,3.1vw,36px)] font-[var(--w500)] leading-[1.08] tracking-[-0.05em] text-[var(--color-primary)]">
          {title}
        </h3>

        <div className="mt-1 flex flex-wrap gap-2">
          {renderButtons()}
        </div>
      </div>
    </article>
  );
}
