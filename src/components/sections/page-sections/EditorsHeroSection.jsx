import Container from '../../layout/Container';
import Button from '../../ui/Button';
import BrandIcon from '../../ui/BrandIcon';

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
      <div
        className={`relative flex items-start justify-end pt-5 max-[809px]:justify-center animate-fadeUp`}
        style={{ animationDelay: '300ms' }}
      >
        <div
          className="relative overflow-hidden bg-white shadow-[0_40px_100px_var(--ink-15),0_2px_8px_var(--ink-07)]"
          style={{
            width: '380px',
            height: '600px',
            borderRadius: '10px',
          }}
        >
          <img
            src="/assets/images/nurse_headset.png"
            alt="Editors API interface"
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-[2] h-[25%] bg-gradient-to-t from-white/80 via-white/60 to-transparent" />
        </div>
        <div className="absolute -bottom-2 -right-6 z-[5] flex h-[66px] w-[66px] items-center justify-center rounded-[18px] bg-[var(--action-primary-bg)] shadow-[0_8px_24px_var(--ink-28)]">
          <BrandIcon stroke="var(--action-primary-fg)" width={30} height={30} />
        </div>
      </div>

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
