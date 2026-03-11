import Container from '../../layout/Container';

export default function SecurityHeroSection({ 
  eyebrow,
  title,
  subtitle,
  badges = []
}) {
  return (
    <section className="relative overflow-hidden py-32 text-center">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_60%,rgba(255,255,255,0.05)_0%,transparent_65%)]" />
      
      <Container className="relative z-10">
        <p className="mb-7 text-[11.5px] font-medium uppercase tracking-[0.18em] text-color-accent-1 opacity-0 animate-[fadeUp_0.8s_ease_0.1s_forwards]">
          {eyebrow}
        </p>
        
        <h1 className="mx-auto mb-7 max-w-[760px] text-[clamp(2.2rem,4vw,3.4rem)] font-[var(--w400)] leading-[1.2] tracking-[-0.02em] opacity-0 animate-[fadeUp_0.9s_ease_0.25s_forwards]">
          {title}
        </h1>
        
        <p className="mx-auto mb-12 max-w-[600px] text-[1.05rem] font-light leading-[1.8] opacity-0 animate-[fadeUp_0.9s_ease_0.4s_forwards]">
          {subtitle}
        </p>
        
        {badges && badges.length > 0 && (
          <div className="flex flex-wrap justify-center gap-4 opacity-0 animate-[fadeUp_0.9s_ease_0.55s_forwards]">
            {badges.map((badge, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-2 bg-color-surface rounded-lg px-[1.1rem] py-2 text-[0.78rem] font-medium uppercase tracking-[0.08em] text-white-85"
              >
                <span className="h-[6px] w-[6px] flex-shrink-0 rounded-full bg-color-primary" />
                {badge}
              </span>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
