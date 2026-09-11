import { useTranslation } from 'react-i18next';
import { useParallax } from '../../../hooks/useParallax';

export default function Home2QuoteBandSection() {
  const { t } = useTranslation();
  const parallaxRef = useParallax(38);

  return (
    <section className="relative h-[clamp(360px,52vh,520px)] overflow-hidden">
      <div
        ref={parallaxRef}
        className="parallax-layer absolute inset-x-0 -top-[8%] h-[116%]"
      >
        <img
          src="/assets/images/fullwidth_care.png"
          alt={t('sections.home2.quoteBand.alt')}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(34,30,26,0.24)_0%,rgba(34,30,26,0.34)_52%,rgba(34,30,26,0.6)_100%)]"
      />

      <div className="relative flex h-full items-center justify-center px-6">
        <p className="rev max-w-[22ch] text-center font-serif text-[clamp(1.9rem,4vw,3.1rem)] font-[600] leading-[1.22] text-[var(--color-white)] drop-shadow-[0_2px_18px_rgba(34,30,26,0.4)]">
          {t('sections.home2.quoteBand.text')}
        </p>
      </div>
    </section>
  );
}
