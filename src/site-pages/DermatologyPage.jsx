import { useTranslation } from 'react-i18next';
import FinalCtaSection from '../components/sections/FinalCtaSection';
import SolutionHeroSection from '../components/sections/page-sections/SolutionHeroSection';
import TestimonialSection from '../components/sections/page-sections/TestimonialSection';
import SolutionChallengeSection from '../components/sections/page-sections/SolutionChallengeSection';
import HomeSecurityFrameSection from '../components/sections/page-sections/HomeSecurityFrameSection';
import DermatologyTrajectorySection from '../components/sections/page-sections/DermatologyTrajectorySection';
import DermatologyConfigurationsSection from '../components/sections/page-sections/DermatologyConfigurationsSection';
import DermatologyOrganizationSection from '../components/sections/page-sections/DermatologyOrganizationSection';
import Container from '../components/layout/Container';
import { getCtaSubtitleFull } from '../constants/site';

function DermatologyIntroSection({ copy, onNavigate }) {
  return (
    <Container className="py-16">
      <div className="rev grid grid-cols-2 items-center gap-10 max-[809px]:flex max-[809px]:flex-col">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--r-md)] min-[810px]:order-1">
          <img
            src="/assets/images/dermatology1.jpg"
            alt="Dermatology treatment"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        <div className="flex flex-col gap-6 min-[810px]:order-2">
          <div>
            <h2 className="mb-3 text-[clamp(26px,3.5vw,38px)] font-[var(--w500)] leading-[1.08] tracking-[-0.05em] text-[var(--color-primary)]">
              {copy.title}
            </h2>
            <p className="text-[15px] leading-[1.7] text-[var(--muted)]">
              {copy.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-6 py-3 text-[14px] font-[var(--w500)] text-[var(--cta-text)] transition-all hover:bg-[var(--color-primary-hover)]"
            >
              {copy.primaryCta}
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-6 py-3 text-[14px] font-[var(--w500)] text-[var(--color-primary)] transition-all hover:bg-[var(--bg-hover)]"
            >
              {copy.secondaryCta}
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}

function DermatologyOrganizationToolSection({ copy }) {
  const icons = [
    <path
      key="calendar"
      d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM5 8V6h14v2H5z"
    />,
    <path
      key="file-text"
      d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zM14 2v6h6M16 13H8M16 17H8M10 9H8"
    />,
    <path
      key="eye"
      d="M12 5C7 5 2.73 8.11 1 12.5 2.73 16.89 7 20 12 20s9.27-3.11 11-7.5C21.27 8.11 17 5 12 5zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
    />,
    <path
      key="shield"
      d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"
    />,
  ];

  return (
    <section className="mx-auto w-full max-w-[1200px] px-16 py-24 text-center max-[1024px]:px-8 max-[768px]:px-5">
      <h2 className="rev mb-12 text-[clamp(28px,4vw,42px)] font-[var(--w500)] leading-[1.08] tracking-[-0.05em] text-[var(--color-primary)]">
        {copy.title}
      </h2>

      <div className="relative mx-auto max-w-[1080px]">
        <div className="relative mb-8 h-[86px] max-[809px]:hidden">
          <div className="pointer-events-none absolute inset-0 z-0">
            <svg
              className="absolute left-0 top-1/2 h-[74px] w-full -translate-y-1/2"
              viewBox="0 0 1080 140"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M80 70 L340 70 L540 70 L800 70 L1000 70"
                fill="none"
                stroke="var(--border-mid)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                className="org-flow-path"
                d="M80 70 L340 70 L540 70 L800 70 L1000 70"
                fill="none"
                stroke="var(--action-primary-bg)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="220 2000"
              />
            </svg>
          </div>

          <div className="relative z-[1] grid grid-cols-4">
            {copy.items.map((item, index) => (
              <div
                key={item.title}
                className={`rev ${index === 0 ? 'd1' : index === 1 ? 'd2' : index === 2 ? 'd3' : 'd4'} mx-auto flex h-[92px] w-[92px] items-center justify-center rounded-[22px] bg-[var(--color-primary)]`}
              >
                <svg
                  className="h-[22px] w-[22px] fill-none stroke-[2] stroke-[var(--text-inverse)] [stroke-linecap:round] [stroke-linejoin:round]"
                  viewBox="0 0 24 24"
                >
                  {icons[index]}
                </svg>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-4 gap-8 max-[1024px]:grid-cols-2 max-[809px]:grid-cols-1">
          {copy.items.map((item, index) => (
            <article
              key={item.title}
              className={`rev ${index === 0 ? 'd1' : index === 1 ? 'd2' : index === 2 ? 'd3' : 'd4'} flex flex-col items-center px-7 py-8 text-center`}
            >
              <div className="mb-4 hidden h-[56px] w-[56px] items-center justify-center rounded-[16px] border border-[var(--border)] bg-[var(--bg-page)] max-[809px]:flex">
                <svg
                  className="h-[19px] w-[19px] fill-none stroke-[2] stroke-[var(--color-primary)] [stroke-linecap:round] [stroke-linejoin:round]"
                  viewBox="0 0 24 24"
                >
                  {icons[index]}
                </svg>
              </div>
              <h3 className="mb-2 flex h-[124px] items-center justify-center text-[29px] font-[var(--w500)] leading-[1.08] tracking-[-0.04em] text-[var(--color-primary)] max-[1024px]:h-[104px] max-[1024px]:text-[23px]">
                <span>{item.title}</span>
              </h3>
              <p className="w-full text-[15px] leading-[1.68] text-[var(--muted)]">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .org-flow-path {
          animation: org-flow 2.8s cubic-bezier(0.4, 0, 0.2, 1) infinite alternate;
        }
        @keyframes org-flow {
          from {
            stroke-dashoffset: 360;
            opacity: 0.95;
          }
          to {
            stroke-dashoffset: -720;
            opacity: 0.7;
          }
        }
      `}</style>
    </section>
  );
}

export default function DermatologyPage({ active, onNavigate }) {
  const { t } = useTranslation();
  const ctaSubtitleFull = getCtaSubtitleFull(t);
  const pageCopy = t('pages.solutions.dermatology', { returnObjects: true });

  return (
    <div
      id="page-dermatology"
      className={`page ${active ? 'active' : ''}`.trim()}
    >
      <SolutionHeroSection
        onNavigate={onNavigate}
        badge={{ text: pageCopy.hero.badge, variant: 'secondary' }}
        title={pageCopy.hero.title}
        subtitle={pageCopy.hero.subtitle}
        backgroundImage="/assets/images/dermatology_simple.png"
        backgroundType="image"
        showOverlayText={true}
        showOverlayImage={true}
        overlayGradientImage="var(--gradient-accent-warm-overlay)"
      />

      <DermatologyIntroSection copy={pageCopy.intro} onNavigate={onNavigate} />
      <TestimonialSection
        quote={pageCopy.statement}
        showVisual={true}
        visualImageUrl="/assets/images/testimonial_dermatology.png"
        showAuthor={false}
      />

      <SolutionChallengeSection items={pageCopy.challengeItems} />

      <DermatologyOrganizationToolSection copy={pageCopy.organizationTool} />

      <DermatologyTrajectorySection />
      <DermatologyConfigurationsSection />
      <DermatologyOrganizationSection />

      <HomeSecurityFrameSection onNavigate={onNavigate} />
      <FinalCtaSection onNavigate={onNavigate} subtitle={ctaSubtitleFull} />
    </div>
  );
}
