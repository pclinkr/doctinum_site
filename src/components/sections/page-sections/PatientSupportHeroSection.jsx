import Container from '../../layout/Container';
import Button from '../../ui/Button';

export default function PatientSupportHeroSection({
  onNavigate,
  title = '',
  subtitle = '',
  ctaButtons = [],
  imageUrl = '/assets/images/patient_support_hero.png',
}) {
  return (
    <Container className="pt-[calc(var(--nav-h)+56px)] pb-16 max-[809px]:pt-[calc(var(--nav-h)+32px)]">
      <section className="rev grid min-h-[70vh] grid-cols-[440px_1fr] items-center gap-16 max-[1199px]:grid-cols-[360px_1fr] max-[1199px]:gap-10 max-[809px]:min-h-0 max-[809px]:grid-cols-1 max-[809px]:gap-10">
        <div
          className="relative aspect-[4/5] overflow-hidden rounded-[var(--r-md)] bg-cover bg-center"
          style={{
            backgroundImage: `url(${imageUrl})`,
            background: 'var(--gradient-accent-cool)',
          }}
        >
          <div
            className="absolute inset-0"
            style={{ background: 'var(--gradient-overlay-top)' }}
          />
        </div>

        <div className="flex flex-col">
          <h1 className="mb-6 text-[clamp(40px,5.5vw,64px)] font-[var(--w500)] leading-[1.08] tracking-[-0.055em] text-[var(--text-primary)]">
            {title}
          </h1>
          <p className="ds-text-lead mb-9 max-w-[560px] text-[var(--muted)]">
            {subtitle}
          </p>
          
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
      </section>
    </Container>
  );
}
