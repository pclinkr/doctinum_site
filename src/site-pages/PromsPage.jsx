import { useTranslation } from 'react-i18next';
import FinalCtaSection from '../components/sections/FinalCtaSection';
import SolutionHeroSection from '../components/sections/page-sections/SolutionHeroSection';
import TestimonialSection from '../components/sections/page-sections/TestimonialSection';
import HomeSecurityFrameSection from '../components/sections/page-sections/HomeSecurityFrameSection';
import Container from '../components/layout/Container';
import { getCtaSubtitleFull } from '../constants/site';

function PromsConstatsSection({ items }) {
  return (
    <Container className="py-16">
      <div className="rev grid grid-cols-[240px_1fr] gap-12 max-[809px]:grid-cols-1 max-[809px]:gap-6">
        <div className="pt-2">
          <h2 className="text-[clamp(26px,3.5vw,38px)] font-[var(--w500)] leading-[1.08] tracking-[-0.05em] text-[var(--color-primary)]">
            Constats
          </h2>
        </div>

        <div className="grid gap-8">
          {items.map((item, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)]">
                <span className="h-[6px] w-[6px] rounded-full bg-[var(--cta-text)]" />
              </div>
              <div className="flex-1">
                <h3 className="mb-1 text-[18px] font-[var(--w500)] leading-[1.3] text-[var(--color-primary)]">
                  {item.label}
                </h3>
                <p className="text-[15px] leading-[1.7] text-[var(--muted)]">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

function PromsIntroSection({ copy, onNavigate }) {
  return (
    <Container className="py-16">
      <div className="rev grid grid-cols-2 items-center gap-10 max-[809px]:flex max-[809px]:flex-col">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--r-md)] min-[810px]:order-1">
          <img
            src="/assets/images/aesthetic_patient.png"
            alt="PROMS questionnaires"
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

function PromsApproachSection({ copy }) {
  return (
    <Container className="py-16">
      <div className="rev grid grid-cols-2 items-center gap-10 max-[809px]:flex max-[809px]:flex-col">
        <div className="flex flex-col gap-4 min-[810px]:order-1">
          <h2 className="mb-2 text-[clamp(26px,3.5vw,38px)] font-[var(--w500)] leading-[1.08] tracking-[-0.05em] text-[var(--color-primary)]">
            {copy.title}
          </h2>
          <p className="text-[15px] font-[var(--w500)] text-[var(--color-primary)]">
            {copy.description}
          </p>
          <ul className="grid gap-2">
            {copy.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-[14px] leading-[1.7] text-[var(--color-primary)]"
              >
                <span className="mt-[8px] inline-block h-[5px] w-[5px] rounded-full bg-[var(--ink-30)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-2 text-[13px] italic leading-[1.6] text-[var(--muted)]">
            {copy.disclaimer}
          </p>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--r-md)] min-[810px]:order-2">
          <img
            src="/assets/images/aesthetic_patient_2.png"
            alt="PROMS approach"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      </div>
    </Container>
  );
}

function PromsBeforeAfterSection({ copy }) {
  function Bullet({ item }) {
    return (
      <div className="flex items-center gap-[10px] py-2 text-[14px] text-[var(--muted)]">
        <span className="flex h-[19px] w-[19px] shrink-0 items-center justify-center rounded-full bg-[var(--ink-06)]">
          <svg
            className="h-[10px] w-[10px]"
            viewBox="0 0 10 10"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          >
            <circle cx="5" cy="5" r="3" />
          </svg>
        </span>
        {item}
      </div>
    );
  }

  return (
    <section className="mx-auto w-full max-w-[1200px] px-16 py-24 text-center max-[1024px]:px-8 max-[768px]:px-5">
      <h2 className="rev mb-12 text-[clamp(28px,4vw,42px)] font-[var(--w500)] leading-[1.08] tracking-[-0.05em] text-[var(--color-primary)]">
        {copy.heading}
      </h2>

      <div className="rev grid grid-cols-2 gap-5 text-left max-[809px]:grid-cols-1">
        <div className="rounded-[var(--r-md)] bg-[var(--surface)] p-8">
          <div className="mb-4 border-b border-[var(--border)] pb-3 text-[12px] font-[var(--w500)] uppercase tracking-[0.07em] text-[var(--muted)]">
            {copy.left.label}
          </div>
          <div className="space-y-2">
            {copy.left.items.map((item) => (
              <Bullet key={item} item={item} />
            ))}
          </div>
        </div>

        <div className="rounded-[var(--r-md)] bg-[var(--surface)] p-8">
          <div className="mb-4 border-b border-[var(--border)] pb-3 text-[12px] font-[var(--w500)] uppercase tracking-[0.07em] text-[var(--muted)]">
            {copy.right.label}
          </div>
          <div className="space-y-2">
            {copy.right.items.map((item) => (
              <Bullet key={item} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PromsConversionSection({ copy }) {
  return (
    <Container className="py-16">
      <div className="rev mx-auto max-w-[900px]">
        <h2 className="mb-16 text-center text-[clamp(28px,4vw,42px)] font-[var(--w500)] leading-[1.08] tracking-[-0.05em] text-[var(--color-primary)]">
          {copy.title}
        </h2>

        <div className="relative">
          {/* Ligne verticale centrale */}
          <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-[var(--border-mid)] max-[768px]:hidden" />

          <div className="grid gap-12">
            {copy.steps.map((step, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={step.title}
                  className={`rev relative grid grid-cols-2 items-center gap-8 max-[768px]:grid-cols-1 ${index === 0 ? 'd1' : index === 1 ? 'd2' : index === 2 ? 'd3' : 'd4'}`}
                >
                  {/* Contenu à gauche */}
                  {isLeft && (
                    <div className="text-right max-[768px]:text-left">
                      <div className="inline-block rounded-[var(--r-md)] border border-[var(--border)] bg-[var(--surface)] p-6 text-left">
                        <h3 className="mb-2 text-[20px] font-[var(--w500)] text-[var(--color-primary)]">
                          {step.title}
                        </h3>
                        {step.description && (
                          <p className="text-[14px] leading-[1.7] text-[var(--muted)]">
                            {step.description}
                          </p>
                        )}
                        {step.items && (
                          <ul className="mt-2 grid gap-2">
                            {step.items.map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-2 text-[14px] leading-[1.7] text-[var(--muted)]"
                              >
                                <span className="mt-[8px] inline-block h-[5px] w-[5px] rounded-full bg-[var(--ink-30)]" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Point central avec numéro */}
                  <div
                    className={`absolute left-1/2 top-1/2 z-10 flex h-[56px] w-[56px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-[var(--bg-page)] bg-[var(--color-primary)] text-[20px] font-[var(--w600)] text-[var(--cta-text)] max-[768px]:relative max-[768px]:left-0 max-[768px]:top-0 max-[768px]:mb-4 max-[768px]:translate-x-0 max-[768px]:translate-y-0`}
                  >
                    {index + 1}
                  </div>

                  {/* Espace vide à droite pour étapes à gauche */}
                  {isLeft && <div className="max-[768px]:hidden" />}

                  {/* Contenu à droite */}
                  {!isLeft && (
                    <>
                      <div className="max-[768px]:hidden" />
                      <div className="text-left">
                        <div className="inline-block rounded-[var(--r-md)] border border-[var(--border)] bg-[var(--surface)] p-6">
                          <h3 className="mb-2 text-[20px] font-[var(--w500)] text-[var(--color-primary)]">
                            {step.title}
                          </h3>
                          {step.description && (
                            <p className="text-[14px] leading-[1.7] text-[var(--muted)]">
                              {step.description}
                            </p>
                          )}
                          {step.items && (
                            <ul className="mt-2 grid gap-2">
                              {step.items.map((item) => (
                                <li
                                  key={item}
                                  className="flex items-start gap-2 text-[14px] leading-[1.7] text-[var(--muted)]"
                                >
                                  <span className="mt-[8px] inline-block h-[5px] w-[5px] rounded-full bg-[var(--ink-30)]" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  );
}

function PromsUseCasesSection({ copy }) {
  return (
    <Container className="py-16">
      <div className="rev">
        <h2 className="mb-8 text-center text-[clamp(28px,4vw,42px)] font-[var(--w500)] leading-[1.08] tracking-[-0.05em] text-[var(--color-primary)]">
          {copy.title}
        </h2>

        <div className="grid grid-cols-4 gap-5 max-[1024px]:grid-cols-2 max-[809px]:grid-cols-1">
          {copy.cases.map((useCase, index) => (
            <div
              key={useCase.title}
              className={`rev ${index === 0 ? 'd1' : index === 1 ? 'd2' : index === 2 ? 'd3' : 'd4'} rounded-[var(--r-md)] border border-[var(--border)] bg-[var(--surface)] p-6`}
            >
              <h3 className="mb-2 text-[18px] font-[var(--w500)] text-[var(--color-primary)]">
                {useCase.title}
              </h3>
              <p className="text-[14px] leading-[1.7] text-[var(--muted)]">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

function PromsBenefitsSection({ copy }) {
  const icons = [
    <path
      key="check"
      d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
    />,
    <path
      key="trending"
      d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z"
    />,
    <path
      key="link"
      d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"
    />,
  ];

  return (
    <section className="mx-auto w-full max-w-[1200px] px-16 pb-24 pt-2 text-center max-[1024px]:px-8 max-[768px]:px-5">
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
                d="M134 90 C290 122, 410 122, 540 72 C670 22, 790 22, 946 56"
                fill="none"
                stroke="var(--border-mid)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                className="proms-benefits-flow-path"
                d="M134 90 C290 122, 410 122, 540 72 C670 22, 790 22, 946 56"
                fill="none"
                stroke="var(--action-primary-bg)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="220 2000"
              />
            </svg>
          </div>

          <div className="relative z-[1] grid grid-cols-3">
            {copy.items.map((item, index) => (
              <div
                key={item.title}
                className={`rev ${index === 0 ? 'd1' : index === 1 ? 'd2' : 'd3'} mx-auto flex h-[92px] w-[92px] items-center justify-center rounded-[22px] bg-[var(--color-primary)]`}
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

        <div className="grid grid-cols-3 gap-8 max-[809px]:grid-cols-1">
          {copy.items.map((item, index) => (
            <article
              key={item.title}
              className={`rev ${index === 0 ? 'd1' : index === 1 ? 'd2' : 'd3'} flex flex-col items-center px-7 py-8 text-center`}
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
        .proms-benefits-flow-path {
          animation: proms-benefits-flow 2.8s cubic-bezier(0.4, 0, 0.2, 1) infinite alternate;
        }
        @keyframes proms-benefits-flow {
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

function PromsHospitalsSection({ copy }) {
  return (
    <Container className="py-16">
      <div className="rev grid grid-cols-2 items-center gap-10 max-[809px]:flex max-[809px]:flex-col">
        <div className="flex flex-col gap-4 min-[810px]:order-1">
          <h2 className="mb-2 text-[clamp(26px,3.5vw,38px)] font-[var(--w500)] leading-[1.08] tracking-[-0.05em] text-[var(--color-primary)]">
            {copy.title}
          </h2>
          <ul className="grid gap-2">
            {copy.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-[14px] leading-[1.7] text-[var(--color-primary)]"
              >
                <span className="mt-[8px] inline-block h-[5px] w-[5px] rounded-full bg-[var(--ink-30)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--r-md)] min-[810px]:order-2">
          <img
            src="/assets/images/aesthetic_patient.png"
            alt="Quality indicators"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      </div>
    </Container>
  );
}

function PromsEditorsSection({ copy, onNavigate }) {
  return (
    <Container className="py-16">
      <div className="rev grid grid-cols-2 items-center gap-10 max-[809px]:flex max-[809px]:flex-col">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--r-md)] min-[810px]:order-1">
          <img
            src="/assets/images/aesthetic_patient_2.png"
            alt="API integration"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        <div className="flex flex-col gap-4 min-[810px]:order-2">
          <h2 className="mb-2 text-[clamp(26px,3.5vw,38px)] font-[var(--w500)] leading-[1.08] tracking-[-0.05em] text-[var(--color-primary)]">
            {copy.title}
          </h2>
          <ul className="grid gap-2">
            {copy.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-[14px] leading-[1.7] text-[var(--color-primary)]"
              >
                <span className="mt-[8px] inline-block h-[5px] w-[5px] rounded-full bg-[var(--ink-30)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <button
            onClick={() => onNavigate('contact')}
            className="mt-2 w-fit text-[14px] font-[var(--w500)] text-[var(--color-primary)] underline underline-offset-4 transition-opacity hover:opacity-70"
          >
            {copy.cta}
          </button>
        </div>
      </div>
    </Container>
  );
}

export default function PromsPage({ active, onNavigate }) {
  const { t } = useTranslation();
  const ctaSubtitleFull = getCtaSubtitleFull(t);
  const pageCopy = t('pages.solutions.proms', { returnObjects: true });

  return (
    <div id="page-proms" className={`page ${active ? 'active' : ''}`.trim()}>
      <SolutionHeroSection
        onNavigate={onNavigate}
        badge={{ text: pageCopy.hero.badge, variant: 'secondary' }}
        title={pageCopy.hero.title}
        backgroundImage="/assets/images/aesthetic_patient_2.png"
        backgroundType="image"
        showOverlayText={true}
        showOverlayImage={true}
        overlayGradientImage="var(--gradient-accent-warm-overlay)"
      />

      <PromsIntroSection copy={pageCopy.intro} onNavigate={onNavigate} />

      <TestimonialSection
        quote={pageCopy.statement}
        showVisual={true}
        visualImageUrl="/assets/images/aesthetic_patient.png"
        showAuthor={false}
      />

      <PromsConstatsSection items={pageCopy.challengeItems} />

      <PromsApproachSection copy={pageCopy.approach} />

      <PromsBeforeAfterSection copy={pageCopy.beforeAfter} />

      <PromsConversionSection copy={pageCopy.conversion} />

      <PromsUseCasesSection copy={pageCopy.useCases} />

      <PromsBenefitsSection copy={pageCopy.benefits} />

      <PromsHospitalsSection copy={pageCopy.hospitals} />

      <PromsEditorsSection copy={pageCopy.editors} onNavigate={onNavigate} />

      <HomeSecurityFrameSection onNavigate={onNavigate} />
      <FinalCtaSection onNavigate={onNavigate} subtitle={ctaSubtitleFull} />
    </div>
  );
}
