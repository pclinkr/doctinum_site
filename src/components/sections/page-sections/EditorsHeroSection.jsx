import Container from '../../layout/Container';
import Button from '../../ui/Button';
import StorySliderPhone from '../../ui/StorySliderPhone';

export default function EditorsHeroSection({
  onNavigate,
  title = '',
  subtitle = '',
  description = '',
  ctaButtons = [],
}) {
  return (
    <Container
      as="section"
      className="grid min-h-[80vh] grid-cols-[440px_1fr] items-center gap-16 pb-20 pt-[calc(var(--nav-h)+56px)] max-[1199px]:grid-cols-[360px_1fr] max-[1199px]:gap-10 max-[809px]:min-h-0 max-[809px]:grid-cols-1 max-[809px]:gap-10 max-[809px]:pb-14 max-[809px]:pt-[calc(var(--nav-h)+32px)]"
    >
      <StorySliderPhone
        start={true}
        videos={[]}
        storyDurationMs={0}
        reveal={true}
        instant={true}
        phoneSize={{ width: '380px', height: '600px' }}
        className="max-[809px]:order-2"
      />

      <div className="flex flex-col max-[809px]:order-1">
        <h1 className="mb-6 text-[clamp(40px,5.5vw,64px)] font-[var(--w500)] leading-[1.08] tracking-[-0.055em] text-[var(--text-primary)]">
          {title}
        </h1>
        <p className="text-xl mb-4 max-w-[540px] text-[var(--muted)]">
          {subtitle}
        </p>
        {description && (
          <p className="text-md mb-9 max-w-[540px] text-[var(--muted)]">
            {description}
          </p>
        )}
        
        {ctaButtons.length > 0 && (
          <div className="flex items-center justify-start gap-4">
            {ctaButtons.map((button, index) => (
              <Button
                key={index}
                variant={button.variant === 'secondary' ? 'light' : 'default'}
                size="lg"
                onClick={button.onClick}
              >
                {button.text}
              </Button>
            ))}
          </div>
        )}
      </div>
    </Container>
  );
}
