import { useEffect, useRef } from 'react';
import Container from '../../layout/Container';

export default function VisionHeroSection({ 
  eyebrow,
  title,
  subtitle,
  stats = []
}) {
  const bgTextRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!bgTextRef.current) return;
      const scrollY = window.scrollY;
      const translateX = -scrollY * 0.5;
      bgTextRef.current.style.transform = `translateX(${translateX}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative overflow-hidden pb-20 pt-[calc(var(--nav-h)+56px)]">
      <div
        ref={bgTextRef}
        className="pointer-events-none absolute -bottom-20 right-0 si whitespace-nowrap text-[clamp(280px,35vw,550px)] leading-none text-color-border opacity-[0.4] transition-transform duration-500 ease-out"
        aria-hidden="true"
      >
        vision
      </div>

      <Container className="relative z-10 flex min-h-[60vh] flex-col justify-center">
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
    </section>
  );
}
