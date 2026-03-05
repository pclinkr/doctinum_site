import { useTranslation } from 'react-i18next';
import FinalCtaSection from '../components/sections/FinalCtaSection';
import SolutionHeroSection from '../components/sections/page-sections/SolutionHeroSection';
import TestimonialSection from '../components/sections/page-sections/TestimonialSection';
import SolutionChallengeSection from '../components/sections/page-sections/SolutionChallengeSection';
import HomeSecurityFrameSection from '../components/sections/page-sections/HomeSecurityFrameSection';
import Container from '../components/layout/Container';
import { getCtaSubtitleFull } from '../constants/site';

function Bullet({ item, positive = false }) {
  return (
    <div
      className={`flex items-center gap-[10px] py-2 text-[14px] ${positive ? 'text-[var(--color-primary)]' : 'text-[var(--muted)]'}`}
    >
      <span
        className={`flex h-[19px] w-[19px] shrink-0 items-center justify-center rounded-full ${positive ? 'bg-[var(--color-primary)]' : 'bg-[var(--ink-06)]'}`}
      >
        <svg
          className="h-[10px] w-[10px]"
          viewBox="0 0 10 10"
          stroke={positive ? '#fff' : 'currentColor'}
          strokeWidth={positive ? '2.5' : '2'}
          fill="none"
        >
          {positive ? (
            <polyline points="2,5 4.5,7.5 8,2.5" />
          ) : (
            <circle cx="5" cy="5" r="3" />
          )}
        </svg>
      </span>
      {item}
    </div>
  );
}

function ProtocolConfigurationSection({ copy }) {
  return (
    <section className="mx-auto w-full max-w-[1200px] px-16 py-24 text-center max-[1024px]:px-8 max-[768px]:px-5">
      <h2 className="rev mb-3 text-[clamp(28px,4vw,42px)] font-[var(--w500)] leading-[1.08] tracking-[-0.05em] text-[var(--color-primary)]">
        {copy.title}
      </h2>
      {copy.disclaimer && (
        <p className="rev mb-12 text-[14px] leading-[1.6] text-[var(--muted)]">
          {copy.disclaimer}
        </p>
      )}

      <div className="rev grid grid-cols-2 gap-5 text-left max-[809px]:grid-cols-1">
        {copy.phases.map((phase, phaseIndex) => (
          <div
            key={phaseIndex}
            className="relative rounded-[var(--r-md)] bg-[var(--surface)] p-8"
          >
            {phaseIndex === 1 && (
              <div className="absolute -top-3 right-5 rounded-full bg-[var(--color-primary)] px-[13px] py-1 text-[12px] font-[var(--w500)] text-[var(--cta-text)]">
                DOCTINUM
              </div>
            )}
            <div className="mb-4 border-b border-[var(--border)] pb-3 text-[12px] font-[var(--w500)] uppercase tracking-[0.07em] text-[var(--muted)]">
              {phase.title}
            </div>

            {phase.milestones.map((milestone, milestoneIndex) => (
              <div
                key={milestoneIndex}
                className={
                  milestoneIndex > 0
                    ? 'border-t border-[var(--border)] pt-4 mt-6'
                    : 'mb-6'
                }
              >
                <h4 className="mb-3 text-[16px] font-[var(--w500)] text-[var(--foreground)]">
                  {milestone.timing}
                </h4>
                <div className="space-y-2">
                  {milestone.items.map((item) => (
                    <Bullet key={item} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

function PremiumExperienceSection({ copy }) {
  return (
    <Container className="py-16">
      <div className="rev grid grid-cols-2 items-center gap-10 max-[809px]:flex max-[809px]:flex-col">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--r-md)] min-[810px]:order-2">
          <img
            src="/assets/images/aesthetic_patient.png"
            alt="Patient experience"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        <div className="flex flex-col gap-6 min-[810px]:order-1">
          <div>
            <h2 className="mb-3 text-[clamp(26px,3.5vw,38px)] font-[var(--w500)] leading-[1.08] tracking-[-0.05em] text-[var(--color-primary)]">
              {copy.title}
            </h2>
            <p className="text-[15px] leading-[1.7] text-[var(--muted)]">
              {copy.description}
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <p className="mb-3 text-[11px] font-[var(--w500)] uppercase tracking-[0.07em] text-[var(--muted)]">
                {copy.label}
              </p>
              <ul className="space-y-2">
                {copy.items.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-[15px] leading-[1.5] text-[var(--color-primary)]"
                  >
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d8c8a8] shadow-[0_0_8px_rgba(216,200,168,0.4)]"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

function ClinicalBenefitsSection({ copy }) {
  const icons = [
    <path
      key="file-text"
      d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zM14 2v6h6M16 13H8M16 17H8M10 9H8"
    />,
    <path
      key="alert-triangle"
      d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4M12 17h.01"
    />,
    <path
      key="phone-off"
      d="M10.68 13.31a16 16 0 01-3.99-3.99M21 21l-4.35-4.35M5 5l4.35 4.35M15.65 15.65L21 21M3.59 3.59A9.95 9.95 0 013 7v2a2 2 0 002 2h2a2 2 0 002-2v-1a9.95 9.95 0 01-.59-3.41M18.41 18.41A9.95 9.95 0 0121 15v-2a2 2 0 00-2-2h-2a2 2 0 00-2 2v1c0 1.23.21 2.41.59 3.41"
    />,
    <path
      key="award"
      d="M12 15a7 7 0 100-14 7 7 0 000 14zM8.21 13.89L7 23l5-3 5 3-1.21-9.12"
    />,
  ];

  return (
    <section className="mx-auto w-full max-w-[1200px] px-16 pb-24 pt-2 text-center max-[1024px]:px-8 max-[768px]:px-5">
      <h2 className="rev mb-3 text-[clamp(28px,4vw,42px)] font-[var(--w500)] leading-[1.08] tracking-[-0.05em] text-[var(--color-primary)]">
        {copy.title}
      </h2>
      <p className="rev mb-12 text-[15px] leading-[1.7] text-[var(--muted)]">
        {copy.subtitle}
      </p>

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
                className="cb-flow-path"
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
              <p className="w-full text-[15px] leading-[1.68] text-[var(--muted)] whitespace-pre-line">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .cb-flow-path {
          animation: cb-flow 2.8s cubic-bezier(0.4, 0, 0.2, 1) infinite alternate;
        }
        @keyframes cb-flow {
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

export default function LiposuctionPage({ active, onNavigate }) {
  const { t } = useTranslation();
  const ctaSubtitleFull = getCtaSubtitleFull(t);
  const copy = t('pages.solutions.liposuction', { returnObjects: true });

  return (
    <div
      id="page-liposuction"
      className={`page ${active ? 'active' : ''}`.trim()}
    >
      <SolutionHeroSection
        onNavigate={onNavigate}
        badge={{
          text: copy.hero.badge,
          variant: 'secondary',
        }}
        title={copy.hero.title}
        backButtonText="← Rhinoplastie"
        backButtonPage="surgery-rhinoplasty"
        nextButtonText="Injection acide hyaluronique →"
        nextButtonPage="surgery-hyaluronic-injection"
        backgroundImage="/assets/images/liposuccion.png"
        backgroundType="image"
        showOverlayText={true}
        showOverlayImage={true}
        overlayGradientImage="var(--gradient-accent-warm-terra-overlay)"
      />

      <TestimonialSection
        quote={copy.statement}
        showVisual={true}
        visualImageUrl="/assets/images/liposuccion.png"
        showAuthor={false}
      />

      <SolutionChallengeSection items={copy.challengeItems} />

      <ProtocolConfigurationSection copy={copy.protocolConfiguration} />

      <ClinicalBenefitsSection copy={copy.clinicalBenefits} />

      <PremiumExperienceSection copy={copy.premiumExperience} />

      <HomeSecurityFrameSection onNavigate={onNavigate} />

      <FinalCtaSection onNavigate={onNavigate} subtitle={ctaSubtitleFull} />
    </div>
  );
}
