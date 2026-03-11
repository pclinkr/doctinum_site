import Container from '../../layout/Container';

export default function VisionHeroSection({ 
  eyebrow,
  title,
  subtitle,
  stats = []
}) {
  return (
    <Container
      as="section"
      className="flex min-h-[60vh] flex-col justify-center pb-20 pt-[calc(var(--nav-h)+56px)]"
    >
      <p className="mb-8 text-[11.5px] font-medium uppercase tracking-[0.18em] text-color-primary opacity-0 animate-[fadeUp_0.8s_ease_0.1s_forwards]">
        {eyebrow}
      </p>
      
      <h1 className="mb-6 text-[var(--black)] opacity-0 animate-fadeUp">
        Le canal qui manquait<br />
        au suivi <span className="si">patient</span>.
      </h1>
      
      <p className="mb-12 max-w-[460px] text-[17px] font-light leading-[1.75] text-ink-68 opacity-0 animate-[fadeUp_0.9s_ease_0.4s_forwards]">
        {subtitle}
      </p>
      
      {stats && stats.length > 0 && (
        <div className="flex gap-16 pt-12 opacity-0 animate-[fadeUp_0.9s_ease_0.55s_forwards]">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-[48px] font-[var(--w600)] leading-[1] tracking-[-0.02em] text-color-primary">
                {stat.value}
              </div>
              <div className="mt-3 text-[13.5px] font-[var(--w500)] leading-[1.5] tracking-[-0.01em] text-ink-68">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      )}
    </Container>
  );
}
