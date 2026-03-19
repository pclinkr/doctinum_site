import Home2Waveform from '../ui/Home2Waveform';
import LiveCallButton from '../ui/LiveCallButton';

import { useState, useEffect, useRef, useMemo } from 'react';

export default function Home2CallPreviewBlock({ content, onJumpToSimulation }) {
  const [visibleBubbles, setVisibleBubbles] = useState(new Set());
  const [animationKey, setAnimationKey] = useState(0);
  const timeoutsRef = useRef([]);

  // Variables configurables pour les timings (stables avec useMemo)
  const TIMINGS = useMemo(() => ({
    bubbleInterval: 1500,      // Temps entre chaque bulle
    displayDuration: 6000,    // Temps après l'apparition du dernier bloc avant disparition
    pauseBetweenCycles: 500,  // Temps de pause avant de recommencer
  }), []);


  useEffect(() => {
    // Nettoyer tous les timeouts existants
    const clearAllTimeouts = () => {
      timeoutsRef.current.forEach(timeout => clearTimeout(timeout));
      timeoutsRef.current = [];
    };

    const startAnimation = () => {
      clearAllTimeouts();
      setVisibleBubbles(new Set());
      
      // Afficher les bulles une par une dans l'ordre
      const bubbleTimeouts = content?.bubbles?.map((_, index) => {
        return setTimeout(() => {
          setVisibleBubbles(prev => new Set(prev).add(index));
        }, index * TIMINGS.bubbleInterval);
      }) || [];
      
      timeoutsRef.current.push(...bubbleTimeouts);
      
      // Disparition synchrone après la durée d'affichage
      const hideTimeout = setTimeout(() => {
        setVisibleBubbles(new Set());
        
        // Recommencer le cycle après la pause
        const restartTimeout = setTimeout(() => {
          setAnimationKey(prev => prev + 1);
        }, TIMINGS.pauseBetweenCycles);
        
        timeoutsRef.current.push(restartTimeout);
      }, ((content?.bubbles?.length - 1) || 0) * TIMINGS.bubbleInterval + TIMINGS.displayDuration);
      
      timeoutsRef.current.push(hideTimeout);
    };

    startAnimation();
    
    return () => clearAllTimeouts();
  }, [content?.bubbles, animationKey, TIMINGS]); // Retiré animationKey des dépendances

  const bubbles = content?.bubbles || [];
  const metrics = content?.metrics || [];

  return (
    <div className="relative z-[1] w-full max-w-[420px] bg-primary p-6 rounded-sm">
      <p className="mb-4 text-center text-[10px] font-[var(--w500)] uppercase tracking-[0.16em] text-[var(--color-accent-1)]">
        {content?.label}
      </p>

      <div className="rounded-sm border border-[var(--white-14)] bg-[var(--white-04)] px-4 py-5">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-[var(--color-info)] font-serif text-[var(--color-white)] overflow-hidden">
            {content?.avatar}
          </div>
          <div>
            <p className="text-[13px] font-[var(--w500)] text-[var(--color-white)]">
              {content?.patientName}
            </p>
            <p className="mt-0.5 text-[11px] text-[var(--white-40)]">
              {content?.patientMeta}
            </p>
          </div>
          <div className="ml-auto flex items-center gap-2 text-[10px] uppercase tracking-[0.1em] text-[var(--white-40)]">
            <span className="h-[6px] w-[6px] rounded-full bg-[#4ade80] animate-pulse" />
            {content?.status}
          </div>
        </div>

        <Home2Waveform className="mb-4" />

        <div className="flex flex-col gap-2">
          {bubbles.map((bubble, index) => {
            const isPatient = bubble.role === 'patient';
            const isVisible = visibleBubbles.has(index);

            return (
              <div
                key={`${bubble.role}-${index}-${animationKey}`}
                className={`border-l-2 px-3 py-2.5 text-[13px] leading-[1.5] transition-all duration-700 ease-out ${
                  isPatient 
                    ? 'border-[var(--color-accent-2)] bg-[var(--white-04)] text-[var(--white-55)] italic' 
                    : 'border-[var(--color-accent-1)] bg-[var(--white-07)] text-[var(--white-84)]'
                } ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4'
                }`.trim()}
              >
                <p
                  className={`mb-1 text-[9px] uppercase tracking-[0.12em] ${isPatient ? 'text-[var(--color-accent-2)]' : 'text-[var(--color-accent-1)]'}`.trim()}
                >
                  {bubble.roleLabel}
                </p>
                <p className="text-[14px] leading-[1.5]">{bubble.text}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-px border border-[var(--white-14)] bg-[var(--white-14)]">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="bg-primary px-3 py-3 text-center"
          >
            <p className="text-[var(--color-accent-1)]">
              {metric.value}
            </p>
            <p className="mt-1 text-[10px] uppercase text-[var(--white-55)]">
              {metric.label}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-4 flex justify-center">
        <LiveCallButton
          onClick={onJumpToSimulation}
          label={content?.cta}
        />
      </div>
    </div>
  );
}
