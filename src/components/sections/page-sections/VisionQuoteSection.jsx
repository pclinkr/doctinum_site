import { useEffect, useRef } from 'react';

export default function VisionQuoteSection() {
  const waveformRef = useRef(null);

  useEffect(() => {
    if (!waveformRef.current) return;

    const heights = [8, 14, 22, 34, 28, 40, 52, 44, 56, 48, 60, 52, 44, 38, 48, 36, 28, 22, 14, 8];
    waveformRef.current.innerHTML = '';

    heights.forEach((h) => {
      const bar = document.createElement('div');
      bar.className = 'w-[3px] rounded-sm bg-white-40';
      const duration = 0.8 + Math.random() * 0.8;
      const delay = Math.random() * 1.2;
      bar.style.cssText = `height:${h}px; animation: waveAnimation ${duration}s ease-in-out ${delay}s infinite alternate;`;
      waveformRef.current.appendChild(bar);
    });
  }, []);

  return (
    <section className="relative flex min-h-[300px] w-full items-center justify-center overflow-hidden bg-color-primary">
      <style>{`
        @keyframes waveAnimation {
          from { transform: scaleY(0.3); opacity: 0.3; }
          to { transform: scaleY(1); opacity: 0.9; }
        }
      `}</style>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(255,255,255,0.06)_0%,transparent_60%)]" />
      
      <div className="relative px-12 pt-12 pb-16 text-center opacity-0 animate-[fadeIn_1.2s_ease_0.6s_forwards]">
        <div 
          ref={waveformRef}
          className="mb-10 flex items-center justify-center gap-[3px]"
        />
        
        <p className="mx-auto max-w-[280px] font-serif text-[21px] italic leading-[1.6] text-white-90">
          "Le patient doit venir à l'outil." C'est précisément la limite structurelle que nous résolvons.
        </p>
        <p className="mt-5 text-[12px] uppercase tracking-[0.1em] text-white-50">
          — Doctinum · Thèse fondatrice
        </p>
      </div>
    </section>
  );
}
