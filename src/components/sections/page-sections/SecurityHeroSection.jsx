import Container from '../../layout/Container';

export default function SecurityHeroSection({
  eyebrow,
  title,
  subtitle,
  badges = [],
}) {
  return (
    <section className="relative overflow-hidden py-[clamp(64px,8vw,124px)] text-center">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_60%,rgba(255,255,255,0.05)_0%,transparent_65%)]" />

      <Container className="relative z-10">
        <p className="mb-7 text-[12px] font-[var(--w500)] uppercase tracking-[0.16em] text-color-accent-1 opacity-0 animate-[fadeUp_0.8s_ease_0.1s_forwards]">
          {eyebrow}
        </p>

        <h1 className="mx-auto mb-7 max-w-[760px] font-serif text-[clamp(2.4rem,4.6vw,3.8rem)] font-[600] leading-[1.1] tracking-[-0.02em] opacity-0 animate-[fadeUp_0.9s_ease_0.25s_forwards]">
          {title}
        </h1>

        <p className="mx-auto mb-12 max-w-[600px] text-[17px] font-light leading-[1.8] opacity-0 animate-[fadeUp_0.9s_ease_0.4s_forwards]">
          {subtitle}
        </p>

        {badges && badges.length > 0 && (
          <div className="flex flex-wrap justify-center gap-4 opacity-0 animate-[fadeUp_0.9s_ease_0.55s_forwards]">
            {badges.map((badge, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-2 rounded-full bg-color-surface px-4 py-2 text-[11.5px] font-[var(--w500)] uppercase tracking-[0.1em] text-white-85"
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
