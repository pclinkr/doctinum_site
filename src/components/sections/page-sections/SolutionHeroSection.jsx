import Container from '../../layout/Container';
import Button from '../../ui/Button';

export default function SolutionHeroSection({
  onNavigate,
  title = 'Glowhaus',
  subtitle,
  backgroundType = 'gradient',
  backgroundValue = 'var(--gradient-accent-warm)',
  backgroundImage = null,
  backgroundVideo = null,
  showBackButton = true,
  showNextButton = true,
  backButtonText = '← Back',
  backButtonPage = null,
  nextButtonText = '→',
  nextButtonPage = null,
  onBackClick,
  onNextClick,
  className = '',
  containerClassName = '',
  aspectRatio = 'aspect-[16/7]',
  overlayGradientText = 'var(--gradient-overlay-top)',
  overlayGradientImage = 'var(--gradient-overlay-top)',
  showOverlayText = true,
  showOverlayImage = true,
  ctaButtons = [],
  badge = null,
}) {
  const handleBackClick = () => {
    if (onBackClick) {
      onBackClick();
    } else if (backButtonPage && onNavigate) {
      onNavigate(backButtonPage);
    }
  };

  const handleNextClick = () => {
    if (onNextClick) {
      onNextClick();
    } else if (nextButtonPage && onNavigate) {
      onNavigate(nextButtonPage);
    }
  };

  // Déterminer si les boutons doivent être affichés
  const shouldShowBackButton =
    showBackButton && (onBackClick || backButtonPage);
  const shouldShowNextButton =
    showNextButton && (onNextClick || nextButtonPage);

  const renderBackground = () => {
    switch (backgroundType) {
      case 'gradient':
        return (
          <div
            className="h-full w-full"
            style={{ background: backgroundValue }}
          />
        );
      case 'image':
        return (
          <>
            <div
              className="h-full w-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: backgroundImage
                  ? `url(${backgroundImage})`
                  : 'none',
              }}
            />
            {showOverlayImage && (
              <div
                className="absolute inset-0"
                style={{ background: overlayGradientImage }}
              />
            )}
          </>
        );
      case 'video':
        return (
          <>
            {backgroundVideo && (
              <video
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={backgroundVideo} type="video/mp4" />
              </video>
            )}
            {showOverlayImage && (
              <div
                className="absolute inset-0"
                style={{ background: overlayGradientImage }}
              />
            )}
          </>
        );
      default:
        return (
          <div
            className="h-full w-full"
            style={{ background: backgroundValue }}
          />
        );
    }
  };

  return (
    <Container className={`pt-[calc(var(--nav-h)+20px)] ${containerClassName}`}>
      <div
        className={`relative ${aspectRatio} overflow-hidden rounded-[var(--r-lg)] ${className}`}
      >
        {renderBackground()}

        {shouldShowBackButton && (
          <button
            className="absolute left-5 top-5 flex cursor-pointer items-center gap-[6px] rounded-full bg-[var(--white-90)] px-4 py-2 text-[13px] font-[var(--w500)] backdrop-blur-[8px] transition-all duration-150 ease-out hover:bg-white"
            onClick={handleBackClick}
          >
            {backButtonText}
          </button>
        )}

        {shouldShowNextButton && (
          <button
            className="absolute right-5 top-5 flex cursor-pointer items-center gap-[6px] rounded-full bg-[var(--white-90)] px-4 py-2 text-[13px] font-[var(--w500)] backdrop-blur-[8px] transition-all duration-150 ease-out hover:bg-white"
            onClick={handleNextClick}
          >
            {nextButtonText}
          </button>
        )}

        <div
          className="absolute bottom-0 left-0 right-0 p-12"
          style={showOverlayText ? { background: overlayGradientText } : {}}
        >
          {badge && (
            <div className="mb-4">
              <span
                className={`inline-flex items-center px-3 py-1 rounded-full text-[12px] font-medium ${
                  badge.variant === 'secondary'
                    ? 'bg-white/10 text-white border border-white/20'
                    : 'bg-white text-black'
                }`}
              >
                {badge.text}
              </span>
            </div>
          )}

          <h1
            className={`mb-2 text-[clamp(40px,5.5vw,64px)] font-[var(--w500)] leading-[1.08] tracking-[-0.055em] ${showOverlayText ? 'text-white' : 'text-[var(--text-primary)]'}`}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className={`max-w-[460px] text-[16px] leading-[1.55] ${showOverlayText ? 'text-[var(--white-75)]' : 'text-[var(--text-muted)]'}`}
            >
              {subtitle}
            </p>
          )}

          {ctaButtons.length > 0 && (
            <div
              className={`mt-6 flex gap-4 ${ctaButtons.length === 2 ? 'flex-row' : 'flex-row'}`}
            >
              {ctaButtons.map((button, index) => (
                <Button
                  key={index}
                  variant={
                    button.variant === 'secondary'
                      ? 'heroSecondary'
                      : 'heroPrimary'
                  }
                  onClick={button.onClick}
                >
                  {button.text}
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}
