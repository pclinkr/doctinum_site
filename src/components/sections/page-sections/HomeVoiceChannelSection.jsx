import { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

const VIEWBOX = { width: 1040, height: 580 };
const CENTER = { x: 520, y: 290 };
const ORBIT_RADIUS = 210;
const SEQUENCE = [0, 1, 3, 2];
const THRESHOLDS = [0.30, 0.35, 0.40, 0.45];

const BASE_NODES = [
  { angleDeg: -140, side: 'left', lane: 'top' },   // Universel
  { angleDeg: -40, side: 'right', lane: 'top' },   // Naturel
  { angleDeg: 140, side: 'left', lane: 'bottom' }, // Regulier
  { angleDeg: 40, side: 'right', lane: 'bottom' }  // Inclusif
];

function clamp(value, minValue, maxValue) {
  return Math.min(maxValue, Math.max(minValue, value));
}

function polarToCartesian(centerX, centerY, radius, angleDeg) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: centerX + radius * Math.cos(rad),
    y: centerY + radius * Math.sin(rad)
  };
}

export default function HomeVoiceChannelSection() {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  const items = t('sections.voiceChannel.items', { returnObjects: true });

  useEffect(() => {
    const syncViewport = () => setIsDesktop(window.innerWidth >= 900);
    syncViewport();
    window.addEventListener('resize', syncViewport);
    return () => window.removeEventListener('resize', syncViewport);
  }, []);

  useEffect(() => {
    const updateProgress = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const viewportCenter = vh * 0.5;
      const sectionCenter = rect.top + rect.height * 0.5;
      const travel = vh * 0.9 + rect.height * 0.35;
      const raw = (viewportCenter - sectionCenter + travel * 0.5) / travel;
      setProgress(clamp(raw, 0, 1));
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  const visibleCount = THRESHOLDS.reduce((count, threshold) => (progress >= threshold ? count + 1 : count), 0);
  const visibleFlags = useMemo(() => {
    const flags = [false, false, false, false];
    SEQUENCE.forEach((itemIndex, seqIndex) => {
      flags[itemIndex] = seqIndex < visibleCount;
    });
    return flags;
  }, [visibleCount]);

  const rotationDeg = progress * 34;
  const scene = useMemo(
    () =>
      BASE_NODES.map((node, index) => {
        const angle = node.angleDeg + rotationDeg;
        const point = polarToCartesian(CENTER.x, CENTER.y, ORBIT_RADIUS, angle);

        const blockBaseX = node.side === 'left' ? 40 : 700;
        const blockWidth = 300;
        const blockBaseY = node.lane === 'top' ? 62 : 444;

        // Slight orbital drift on text blocks for cohesion with rotating points.
        const driftX = Math.cos((angle * Math.PI) / 180) * 6;
        const driftY = Math.sin((angle * Math.PI) / 180) * 6;

        const blockX = blockBaseX + driftX;
        const blockY = blockBaseY + driftY;
        const titleY = blockY + 22;
        const endX = node.side === 'left' ? blockX + 220 : blockX + 80;
        const elbowX = node.side === 'left' ? endX + 26 : endX - 26;
        const elbowY = titleY;

        return {
          index,
          point,
          blockX,
          blockY,
          titleY,
          endX,
          elbowX,
          elbowY,
          side: node.side
        };
      }),
    [rotationDeg]
  );

  return (
    <section ref={sectionRef} className="mx-auto w-full max-w-[1200px] px-16 py-24 max-[1024px]:px-8 max-[768px]:px-5" id="homeVoiceChannel">
      <div className="rev mb-10 text-center">
        <p className="mb-3 text-[11px] font-[var(--w500)] uppercase tracking-[0.07em] text-[var(--muted)]">{t('sections.voiceChannel.eyebrow')}</p>
        <h2 className="mx-auto max-w-[900px] text-[var(--color-primary)]">{t('sections.voiceChannel.title')}</h2>
      </div>

      {isDesktop ? (
        <div className="relative mx-auto h-[580px] max-w-[1040px]">
          <svg className="pointer-events-none absolute inset-0 z-[1] h-full w-full" viewBox={`0 0 ${VIEWBOX.width} ${VIEWBOX.height}`} aria-hidden="true">
            <circle cx={CENTER.x} cy={CENTER.y} r={210} fill="none" stroke="rgba(18,42,70,0.16)" />
            <circle cx={CENTER.x} cy={CENTER.y} r={260} fill="none" strokeDasharray="2 4" stroke="rgba(18,42,70,0.14)" />

            {scene.map((node) => {
              const isVisible = visibleFlags[node.index];
              return (
                <g key={`connector-${node.index}`} opacity={isVisible ? 1 : 0}>
                  <polyline
                    points={`${node.point.x},${node.point.y} ${node.elbowX},${node.elbowY} ${node.endX},${node.titleY}`}
                    fill="none"
                    stroke="rgba(18,42,70,0.24)"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              );
            })}

            {scene.map((node) => {
              const isVisible = visibleFlags[node.index];
              return (
                <g key={`node-${node.index}`} opacity={isVisible ? 1 : 0}>
                  <circle cx={node.point.x} cy={node.point.y} r="8.5" fill="rgba(12,36,60,0.08)" />
                  <circle cx={node.point.x} cy={node.point.y} r="5.4" fill="rgba(12,36,60,0.32)" />
                </g>
              );
            })}
          </svg>

          <div className="absolute left-1/2 top-1/2 z-[2] flex h-[270px] w-[270px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center overflow-hidden rounded-full border border-[rgba(18,42,70,0.14)] bg-[linear-gradient(165deg,rgba(255,255,255,0.74)_0%,rgba(251,253,255,0.66)_100%)] px-7 text-center shadow-[0_20px_50px_var(--ink-08)] backdrop-blur-[1.5px]">
            <div className="voice-core-gold pointer-events-none absolute inset-0" />
            <p className="mb-3 text-[11px] font-[var(--w500)] uppercase tracking-[0.08em] text-[var(--muted)]">{t('sections.voiceChannel.coreEyebrow')}</p>
            <p className="text-[17px] font-[var(--w500)] leading-[1.35] tracking-[-0.02em] text-[var(--color-primary)]">{t('sections.voiceChannel.coreText')}</p>
          </div>

          {scene.map((node) => {
            const item = items[node.index];
            const isVisible = visibleFlags[node.index];
            return (
              <article
                key={item.title}
                className="absolute z-[3] w-[300px] transition-all duration-500 ease-out"
                style={{
                  left: node.blockX,
                  top: node.blockY,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0px)' : 'translateY(10px)'
                }}
              >
                <h3 className={`mb-3 text-[40px] font-[var(--w500)] leading-[1.02] tracking-[-0.03em] text-[var(--color-primary)] ${node.side === 'right' ? 'text-right' : ''}`.trim()}>
                  {item.title}
                </h3>
                <p className={`text-[14px] leading-[1.62] text-[var(--muted)] ${node.side === 'right' ? 'text-right' : ''}`.trim()}>
                  {item.body}
                </p>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="grid gap-3">
          {items.map((item, index) => {
            const seqIndex = SEQUENCE.indexOf(index);
            const isVisible = seqIndex < visibleCount;
            return (
              <article
                key={item.title}
                className="rev border-b border-[var(--ink-08)] pb-3 pt-2 last:border-b-0 transition-all duration-500 ease-out"
                style={{
                  opacity: isVisible ? 1 : 0.24,
                  transform: isVisible ? 'translateX(0px)' : 'translateX(8px)'
                }}
              >
                <h3 className="mb-1 text-[19px] font-[var(--w500)] tracking-[-0.03em] text-[var(--color-primary)]">{item.title}</h3>
                <p className="text-[14px] leading-[1.62] text-[var(--muted)]">{item.body}</p>
              </article>
            );
          })}
        </div>
      )}

      <p className="rev mt-10 text-center text-[clamp(18px,2.4vw,28px)] font-[var(--w500)] leading-[1.28] tracking-[-0.04em] text-[var(--color-primary)]">
        {t('sections.voiceChannel.closing')}
      </p>

      <style>{`
        .voice-core-gold {
          background: var(--gradient-accent-warm);
          opacity: 0.42;
        }
      `}</style>
    </section>
  );
}
