import { useEffect, useRef, useState } from 'react';

const LOAD_DURATION_MS = 1950;
const CURTAIN_DURATION_MS = 1360;
const REVEAL_ENTRY_DELAY_MS = 360;

export function useLoader() {
  const [loaderStage, setLoaderStage] = useState('loading');

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const loadingTimeoutId = window.setTimeout(() => {
      setLoaderStage('curtain');
    }, LOAD_DURATION_MS);

    const doneTimeoutId = window.setTimeout(() => {
      document.body.style.overflow = '';
      setLoaderStage('done');
    }, LOAD_DURATION_MS + CURTAIN_DURATION_MS);

    return () => {
      window.clearTimeout(loadingTimeoutId);
      window.clearTimeout(doneTimeoutId);
      document.body.style.overflow = '';
    };
  }, []);

  return loaderStage;
}

export function useScrollState() {
  const [isNavScrolled, setIsNavScrolled] = useState(false);
  const [isFloatingCtaVisible, setIsFloatingCtaVisible] = useState(false);
  const [navBlurProgress, setNavBlurProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const blurRampDistance = 140;
      const nextBlurProgress = Math.min(1, Math.max(0, scrollY / blurRampDistance));

      setIsNavScrolled(scrollY > 24);
      setIsFloatingCtaVisible(scrollY > window.innerHeight * 0.65);
      setNavBlurProgress(nextBlurProgress);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { isNavScrolled, isFloatingCtaVisible, navBlurProgress };
}

export function useRevealAnimation(currentPage) {
  const observerRef = useRef(null);
  const revealTimeoutIdsRef = useRef([]);
  const hasPlayedInitialRevealRef = useRef(false);

  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    revealTimeoutIdsRef.current.forEach((timeoutId) => window.clearTimeout(timeoutId));
    revealTimeoutIdsRef.current = [];
    const isInitialRun = !hasPlayedInitialRevealRef.current;
    const entryDelayMs = isInitialRun ? REVEAL_ENTRY_DELAY_MS : 0;
    const observeDelayMs = isInitialRun ? 180 : 0;

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target;
            revealObserver.unobserve(element);

            const timeoutId = window.setTimeout(() => {
              element.classList.add('in');
            }, entryDelayMs);
            revealTimeoutIdsRef.current.push(timeoutId);
          }
        });
      },
      {
        threshold: isInitialRun ? 0.3 : 0.12,
        rootMargin: isInitialRun ? '0px 0px -14% 0px' : '0px 0px -6% 0px'
      }
    );

    observerRef.current = revealObserver;
    const timerId = window.setTimeout(() => {
      document.querySelectorAll('.page.active .rev:not(.in)').forEach((element) => revealObserver.observe(element));
    }, observeDelayMs);

    hasPlayedInitialRevealRef.current = true;

    return () => {
      window.clearTimeout(timerId);
      revealTimeoutIdsRef.current.forEach((timeoutId) => window.clearTimeout(timeoutId));
      revealTimeoutIdsRef.current = [];
      revealObserver.disconnect();
    };
  }, [currentPage]);
}

function animateCounter(counterElement) {
  const targetValue = Number.parseInt(counterElement.dataset.target || '0', 10);
  const suffix = counterElement.dataset.suffix || '';
  const startingValue = Math.floor(targetValue * 0.3);
  const totalFrames = Math.round((1500 / 1000) * 60);
  let frame = 0;

  const easeOutQuad = (value) => 1 - (1 - value) * (1 - value);

  const tick = () => {
    frame += 1;
    const currentValue = Math.round(startingValue + (targetValue - startingValue) * easeOutQuad(frame / totalFrames));
    counterElement.textContent = `${currentValue}${suffix}`;

    if (frame < totalFrames) {
      requestAnimationFrame(tick);
    } else {
      counterElement.textContent = `${targetValue}${suffix}`;
    }
  };

  requestAnimationFrame(tick);
}

export function useKpiAnimation(currentPage) {
  const observerRef = useRef(null);

  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    const pendingRevealFrameIds = new Map();

    const startCounter = (counterElement) => {
      if (counterElement.dataset.counted === '1') return;
      counterElement.dataset.counted = '1';
      animateCounter(counterElement);
    };

    const startWhenRevealed = (counterElement) => {
      const revealContainer = counterElement.closest('.rev');

      if (!revealContainer || revealContainer.classList.contains('in')) {
        startCounter(counterElement);
        return;
      }

      const waitForReveal = () => {
        if (counterElement.dataset.counted === '1') return;
        if (!document.body.contains(counterElement)) return;

        if (revealContainer.classList.contains('in')) {
          startCounter(counterElement);
          pendingRevealFrameIds.delete(counterElement);
          return;
        }

        const nextFrameId = requestAnimationFrame(waitForReveal);
        pendingRevealFrameIds.set(counterElement, nextFrameId);
      };

      const frameId = requestAnimationFrame(waitForReveal);
      pendingRevealFrameIds.set(counterElement, frameId);
    };

    const kpiObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startWhenRevealed(entry.target);
            kpiObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    observerRef.current = kpiObserver;

    document.querySelectorAll('.page.active [data-target]').forEach((counter) => {
      delete counter.dataset.counted;
      const suffix = counter.dataset.suffix || '';
      counter.textContent = `0${suffix}`;
      kpiObserver.observe(counter);
    });

    return () => {
      pendingRevealFrameIds.forEach((frameId) => cancelAnimationFrame(frameId));
      pendingRevealFrameIds.clear();
      kpiObserver.disconnect();
    };
  }, [currentPage]);
}

export function useReducedMotionMarquee() {
  useEffect(() => {
    const marqueeTrackElement = document.getElementById('marqueeTrack');
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');

    const syncMarqueeAnimationState = () => {
      if (marqueeTrackElement) {
        marqueeTrackElement.style.animationPlayState = motionPreference.matches ? 'paused' : 'running';
      }
    };

    motionPreference.addEventListener('change', syncMarqueeAnimationState);
    syncMarqueeAnimationState();

    return () => {
      motionPreference.removeEventListener('change', syncMarqueeAnimationState);
    };
  }, []);
}
