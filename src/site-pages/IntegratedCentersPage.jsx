import { useTranslation } from 'react-i18next';
import FinalCtaSection from '../components/sections/FinalCtaSection';
import SolutionHeroSection from '../components/sections/page-sections/SolutionHeroSection';
import TestimonialSection from '../components/sections/page-sections/TestimonialSection';
import HomeSecurityFrameSection from '../components/sections/page-sections/HomeSecurityFrameSection';
import Container from '../components/layout/Container';
import { getCtaSubtitleFull } from '../constants/site';

function CenterChallengeSection({ copy }) {
  return (
    <Container className="py-16">
      <div className="rev mx-auto max-w-[900px] rounded-[24px] border border-[var(--border)] bg-[var(--surface)] p-12 text-center max-[809px]:p-8">
        <p className="mb-4 text-[13px] font-[var(--w500)] uppercase tracking-[0.08em] text-[var(--muted)]">
          {copy.label}
        </p>
        <h2 className="mb-6 text-[clamp(24px,3.2vw,36px)] font-[var(--w500)] leading-[1.15] tracking-[-0.04em] text-[var(--color-primary)]">
          {copy.title}
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-4 text-[16px] leading-[1.5] text-[var(--muted)]">
          {copy.actors.map((actor, index) => (
            <div key={actor} className="flex items-center gap-4">
              <span className="font-[var(--w500)] text-[var(--color-primary)]">
                {actor}
              </span>
              {index < copy.actors.length - 1 && (
                <span className="text-[var(--border-mid)]">•</span>
              )}
            </div>
          ))}
        </div>
        <p className="mt-8 text-[18px] font-[var(--w500)] leading-[1.4] text-[var(--color-primary)]">
          {copy.challenge}
        </p>
      </div>
    </Container>
  );
}

function DeviceCapabilitiesSection({ copy }) {
  return (
    <Container className="py-16">
      <div className="rev">
        <h2 className="mb-12 text-center text-[clamp(28px,4vw,42px)] font-[var(--w500)] leading-[1.08] tracking-[-0.05em] text-[var(--color-primary)]">
          {copy.title}
        </h2>
        <div className="grid grid-cols-2 gap-6 max-[809px]:grid-cols-1">
          {copy.items.map((item, index) => (
            <div
              key={item}
              className={`rev ${index === 0 ? 'd1' : index === 1 ? 'd2' : index === 2 ? 'd3' : 'd4'} flex items-start gap-4 rounded-[16px] border border-[var(--border)] bg-[var(--surface)] p-6`}
            >
              <div className="flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)]">
                <svg
                  className="h-[12px] w-[12px]"
                  viewBox="0 0 10 10"
                  stroke="#fff"
                  strokeWidth="2.5"
                  fill="none"
                >
                  <polyline points="2,5 4.5,7.5 8,2.5" />
                </svg>
              </div>
              <p className="text-[16px] leading-[1.5] text-[var(--color-primary)]">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

function CenterBenefitsSection({ copy }) {
  return (
    <Container className="py-16">
      <div className="rev rounded-[24px] border border-[var(--border)] bg-[linear-gradient(160deg,var(--bg-white)_0%,var(--bg-surface)_100%)] p-12 max-[809px]:p-8">
        <h2 className="mb-8 text-center text-[clamp(28px,4vw,42px)] font-[var(--w500)] leading-[1.08] tracking-[-0.05em] text-[var(--color-primary)]">
          {copy.title}
        </h2>
        <div className="grid grid-cols-3 gap-6 max-[1024px]:grid-cols-2 max-[809px]:grid-cols-1">
          {copy.items.map((item, index) => (
            <div
              key={item}
              className={`rev ${index === 0 ? 'd1' : index === 1 ? 'd2' : index === 2 ? 'd3' : index === 3 ? 'd4' : 'd5'} flex items-start gap-3 text-[15px] leading-[1.5] text-[var(--color-primary)]`}
            >
              <span className="mt-0.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d8c8a8] shadow-[0_0_8px_rgba(216,200,168,0.4)]"></span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

function UseCasesSection({ copy }) {
  return (
    <Container className="py-16">
      <div className="rev">
        <h2 className="mb-12 text-center text-[clamp(28px,4vw,42px)] font-[var(--w500)] leading-[1.08] tracking-[-0.05em] text-[var(--color-primary)]">
          {copy.title}
        </h2>
        <div className="grid grid-cols-4 gap-5 max-[1024px]:grid-cols-2 max-[809px]:grid-cols-1">
          {copy.cases.map((useCase, index) => (
            <div
              key={useCase}
              className={`rev ${index === 0 ? 'd1' : index === 1 ? 'd2' : index === 2 ? 'd3' : 'd4'} rounded-[16px] border border-[var(--border)] bg-[var(--surface)] p-6 text-center`}
            >
              <p className="text-[15px] font-[var(--w500)] leading-[1.4] text-[var(--color-primary)]">
                {useCase}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

function DeploymentPathwaySection({ copy }) {
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
                className="deployment-flow-path"
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
            {copy.steps.map((step, index) => (
              <div
                key={step.title}
                className={`rev ${index === 0 ? 'd1' : index === 1 ? 'd2' : index === 2 ? 'd3' : 'd4'} mx-auto flex h-[92px] w-[92px] items-center justify-center rounded-[22px] border-4 border-[var(--bg-page)] bg-[var(--color-primary)] text-[28px] font-[var(--w600)] text-[var(--text-inverse)]`}
              >
                {index + 1}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-4 gap-8 max-[1024px]:grid-cols-2 max-[809px]:grid-cols-1">
          {copy.steps.map((step, index) => (
            <article
              key={step.title}
              className={`rev ${index === 0 ? 'd1' : index === 1 ? 'd2' : index === 2 ? 'd3' : 'd4'} flex flex-col items-center px-7 py-8 text-center`}
            >
              <div className="mb-4 hidden h-[56px] w-[56px] items-center justify-center rounded-[16px] border border-[var(--border)] bg-[var(--color-primary)] text-[20px] font-[var(--w600)] text-[var(--text-inverse)] max-[809px]:flex">
                {index + 1}
              </div>
              <h3 className="mb-2 flex h-[104px] items-center justify-center text-[18px] font-[var(--w500)] leading-[1.2] tracking-[-0.02em] text-[var(--color-primary)] max-[1024px]:h-[84px]">
                <span>{step.title}</span>
              </h3>
              <p className="w-full text-[14px] leading-[1.6] text-[var(--muted)]">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .deployment-flow-path {
          animation: deployment-flow 2.8s cubic-bezier(0.4, 0, 0.2, 1) infinite alternate;
        }
        @keyframes deployment-flow {
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

export default function IntegratedCentersPage({ active, onNavigate }) {
  const { t } = useTranslation();
  const ctaSubtitleFull = getCtaSubtitleFull(t);
  const copy = t('pages.solutions.integratedCenters', { returnObjects: true });

  return (
    <div
      id="page-integrated-centers"
      className={`page ${active ? 'active' : ''}`.trim()}
    >
      <SolutionHeroSection
        onNavigate={onNavigate}
        badge={{
          text: copy.hero.badge,
          variant: 'secondary',
        }}
        title={copy.hero.title}
        backgroundImage="/assets/images/sports_medicine.png"
        backgroundType="image"
        showOverlayText={true}
        showOverlayImage={true}
        overlayGradientImage="var(--gradient-accent-sport-overlay)"
      />

      <TestimonialSection
        quote={copy.statement}
        showVisual={true}
        visualImageUrl="/assets/images/sports_medicine.png"
        showAuthor={false}
      />

      <CenterChallengeSection copy={copy.centerChallenge} />

      <DeviceCapabilitiesSection copy={copy.deviceCapabilities} />

      <CenterBenefitsSection copy={copy.centerBenefits} />

      <UseCasesSection copy={copy.useCases} />

      <DeploymentPathwaySection copy={copy.deploymentPathway} />

      <HomeSecurityFrameSection onNavigate={onNavigate} />

      <FinalCtaSection onNavigate={onNavigate} subtitle={ctaSubtitleFull} />
    </div>
  );
}
