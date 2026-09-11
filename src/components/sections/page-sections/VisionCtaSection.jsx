import Container from '../../layout/Container';
import AppLink from '../../ui/AppLink';
import Button from '../../ui/Button';

export default function VisionCtaSection({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  secondaryPage = 'editors-api',
  onNavigate,
}) {
  return (
    <section className="bg-color-primary py-[clamp(56px,7vw,110px)] text-center text-white">
      <Container>
        <h2 className="rev mx-auto mb-6 max-w-[600px] font-serif text-[clamp(1.9rem,3.2vw,2.8rem)] font-[600] leading-[1.16] tracking-[-0.02em]">
          {title}
        </h2>

        <p className="rev mx-auto mb-10 max-w-[440px] text-[16px] font-light leading-[1.7] text-white-70">
          {subtitle}
        </p>

        <div className="rev flex flex-col items-center justify-center gap-4 sm:flex-row">
          {primaryCta && (
            <Button
              variant="darkPrimary"
              onClick={() => onNavigate && onNavigate('contact')}
            >
              {primaryCta}
            </Button>
          )}

          {/* Un vrai <a href> — le référencement doit voir le lien — mais habillé
              exactement comme la variante `darkSecondary` du bouton. */}
          {secondaryCta && (
            <AppLink
              page={secondaryPage}
              onNavigate={onNavigate}
              className="inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full border border-[var(--white-38)] px-7 py-[14px] font-sans text-[13px] font-medium leading-none tracking-[var(--track)] text-[var(--color-white)] transition-[transform,background-color,border-color] duration-300 ease-out hover:-translate-y-[2px] hover:border-[var(--color-white)] hover:bg-[var(--white-10)] motion-reduce:hover:translate-y-0"
            >
              {secondaryCta}
            </AppLink>
          )}
        </div>
      </Container>
    </section>
  );
}
