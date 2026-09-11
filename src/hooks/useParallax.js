import { useEffect, useRef } from 'react';

/**
 * Applique un décalage vertical progressif à un élément selon sa position
 * dans le viewport. La valeur est écrite dans --parallax-y, consommée par
 * la classe .parallax-layer. Neutralisé si l'utilisateur a demandé moins
 * d'animations.
 */
export function useParallax(amplitude = 28) {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return undefined;

    const reducedMotionQuery = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    );
    if (reducedMotionQuery.matches) return undefined;

    let frameId = 0;

    const applyOffset = () => {
      frameId = 0;
      const bounds = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const distanceFromCenter =
        bounds.top + bounds.height / 2 - viewportHeight / 2;
      const progress = Math.max(
        -1.2,
        Math.min(1.2, distanceFromCenter / viewportHeight)
      );

      element.style.setProperty(
        '--parallax-y',
        `${(progress * amplitude).toFixed(1)}px`
      );
    };

    const scheduleUpdate = () => {
      if (frameId) return;
      frameId = window.requestAnimationFrame(applyOffset);
    };

    applyOffset();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);

    return () => {
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, [amplitude]);

  return elementRef;
}

export default useParallax;
