import { useTranslation } from 'react-i18next';
import Container from '../../layout/Container';

export default function HomeMarqueeSection() {
  const { t } = useTranslation();
  const items = t('sections.slidingBanner.items', { returnObjects: true });

  // Create enough duplicates for seamless loop
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <Container
      className="rollup-banner-container relative overflow-hidden py-[17px] isolate rev flex justify-center px-0"
      style={{
        '--rollup-banner-edge-fade': 'clamp(140px,22vw,340px)',
        backgroundImage:
          'var(--gradient-rollup-banner-rail),var(--gradient-rollup-banner-rail)',
        backgroundPosition: 'top,bottom',
        backgroundRepeat: 'no-repeat,no-repeat',
        backgroundSize: '100% 1px,100% 1px',
      }}
    >
      <div
        className="flex gap-14 animate-rollup-banner-seamless"
        id="marqueeTrack"
        style={{
          animationPlayState: 'running',
          width: 'fit-content',
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.animationPlayState = 'paused')
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.animationPlayState = 'running')
        }
      >
        {duplicatedItems.map((item, index) => (
          <span
            key={`item-${index}`}
            className="text-[15px] font-[var(--w500)] tracking-[var(--track-tight)] text-[var(--subtle)] whitespace-nowrap flex items-center gap-5 rollup-banner-item"
          >
            {item}
          </span>
        ))}
      </div>

      {/* Pseudo-elements for fade effects */}
      <style jsx>{`
        /* Apply fade effects to the rollup-banner container */
        .rollup-banner-container::before,
        .rollup-banner-container::after {
          content: '';
          @apply absolute top-0 bottom-0 w-[200px] pointer-events-none z-[3];
        }

        .rollup-banner-container::before {
          @apply left-0;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 1) 0%,
            rgba(255, 255, 255, 0) 100%
          );
        }

        .rollup-banner-container::after {
          @apply right-0;
          background: linear-gradient(
            270deg,
            rgba(255, 255, 255, 1) 0%,
            rgba(255, 255, 255, 0) 100%
          );
        }

        @keyframes rollup-banner {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-rollup-banner {
          animation: rollup-banner linear infinite;
          animation-duration: 30s;
        }

        /* Alternative animation for seamless loop */
        @keyframes marqueeSeamless {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-25%);
          }
        }

        .animate-rollup-banner-seamless {
          animation: marqueeSeamless linear infinite;
          animation-duration: 30s;
        }
      `}</style>
    </Container>
  );
}
