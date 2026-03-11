import Container from '../../layout/Container';

export default function VisionCtaSection({ 
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  onNavigate
}) {
  return (
    <section className="bg-color-primary py-28 text-center text-white">
      <Container>
        <h2 className="rev mx-auto mb-6 max-w-[600px] text-[clamp(29px,3vw,45px)] font-[var(--w500)] leading-[1.25] tracking-[-0.02em]">
          {title}
        </h2>
        
        <p className="rev mx-auto mb-10 max-w-[440px] text-[16px] font-light leading-[1.7] text-white-70">
          {subtitle}
        </p>
        
        <div className="rev flex flex-col items-center justify-center gap-4 sm:flex-row">
          {primaryCta && (
            <button
              onClick={() => onNavigate && onNavigate('contact')}
              className="inline-flex items-center gap-[10px] bg-white px-8 py-[14px] text-[13.5px] font-medium uppercase tracking-[0.06em] text-color-primary transition-all duration-200 hover:-translate-y-[1px] hover:bg-color-accent-1"
            >
              {primaryCta}
            </button>
          )}
          
          {secondaryCta && (
            <a
              href="#"
              className="inline-flex items-center gap-[10px] border border-white-40 bg-transparent px-8 py-[14px] text-[13.5px] font-medium uppercase tracking-[0.06em] text-white transition-all duration-200 hover:bg-white-10"
            >
              {secondaryCta}
            </a>
          )}
        </div>
      </Container>
    </section>
  );
}
