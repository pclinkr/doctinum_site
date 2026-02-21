import { useEffect, useRef, useState } from 'react';

function resolveCursorMode(target) {
  if (!(target instanceof Element)) return 'default';

  const videoTarget = target.closest('[data-cursor="video"], video, [data-cursor-video]');
  if (videoTarget) return 'video';

  const forcedClickable = target.closest('[data-cursor="clickable"]');
  if (forcedClickable) return 'clickable';

  let element = target;
  while (element && element !== document.body) {
    const style = window.getComputedStyle(element);
    if (style.cursor === 'pointer') {
      return 'clickable';
    }
    element = element.parentElement;
  }

  return 'default';
}

export default function CursorFollower() {
  const dotRef = useRef(null);
  const animationFrameRef = useRef(0);
  const targetPositionRef = useRef({ x: 0, y: 0 });
  const currentPositionRef = useRef({ x: 0, y: 0 });
  const currentModeRef = useRef('default');
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    const supportsFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!supportsFinePointer) return undefined;

    setIsEnabled(true);

    const syncModeClass = (mode) => {
      if (!dotRef.current || currentModeRef.current === mode) return;
      currentModeRef.current = mode;
      dotRef.current.classList.toggle('is-clickable', mode === 'clickable');
      dotRef.current.classList.toggle('is-video', mode === 'video');
    };

    const handlePointerMove = (event) => {
      targetPositionRef.current = { x: event.clientX, y: event.clientY };

      if (dotRef.current && !dotRef.current.classList.contains('visible')) {
        dotRef.current.classList.add('visible');
      }

      syncModeClass(resolveCursorMode(event.target));
    };

    const handlePointerDown = () => {
      dotRef.current?.classList.add('active');
    };

    const handlePointerUp = () => {
      dotRef.current?.classList.remove('active');
    };

    const hideCursorDot = () => {
      if (!dotRef.current) return;
      dotRef.current.classList.remove('visible', 'active', 'is-clickable', 'is-video');
      currentModeRef.current = 'default';
    };

    const handlePointerLeaveWindow = (event) => {
      if (!event.relatedTarget) hideCursorDot();
    };

    const handleWindowBlur = () => hideCursorDot();

    const animate = () => {
      const easing = 0.22;
      currentPositionRef.current.x += (targetPositionRef.current.x - currentPositionRef.current.x) * easing;
      currentPositionRef.current.y += (targetPositionRef.current.y - currentPositionRef.current.y) * easing;

      if (dotRef.current) {
        dotRef.current.style.left = `${currentPositionRef.current.x}px`;
        dotRef.current.style.top = `${currentPositionRef.current.y}px`;
      }

      animationFrameRef.current = window.requestAnimationFrame(animate);
    };

    animationFrameRef.current = window.requestAnimationFrame(animate);

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointerup', handlePointerUp);
    window.addEventListener('mouseout', handlePointerLeaveWindow);
    window.addEventListener('blur', handleWindowBlur);
    document.addEventListener('visibilitychange', handleWindowBlur);

    return () => {
      window.cancelAnimationFrame(animationFrameRef.current);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('mouseout', handlePointerLeaveWindow);
      window.removeEventListener('blur', handleWindowBlur);
      document.removeEventListener('visibilitychange', handleWindowBlur);
    };
  }, []);

  if (!isEnabled) return null;

  return (
    <div ref={dotRef} className="cursor-dot" aria-hidden="true">
      <span className="cursor-dot-play" />
    </div>
  );
}
