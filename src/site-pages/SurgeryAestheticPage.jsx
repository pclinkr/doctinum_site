import { useTranslation } from 'react-i18next';
import Container from '../components/layout/Container';
import SolutionHeroSection from '../components/sections/page-sections/SolutionHeroSection';

const AUDIT_URL = 'https://audit.doctinum.com';

function CheckIcon() {
  return (
    <svg
      className="h-[14px] w-[14px] fill-none stroke-[var(--text-inverse)]"
      viewBox="0 0 24 24"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

// Section B — Vocal interactif pré-consultation
function VoiceProductSection({ copy }) {
  return (
    <section className="mx-auto w-full max-w-[1200px] px-16 py-24 max-[1024px]:px-8 max-[768px]:px-5">
      <div className="grid grid-cols-2 items-center gap-16 max-[900px]:grid-cols-1 max-[900px]:gap-10">
        <div className="rev">
          <p className="mb-4 text-[13px] font-medium uppercase tracking-[0.14em] text-[var(--color-accent-2)]">
            {copy.eyebrow}
          </p>
          <h2 className="mb-6 text-[clamp(30px,3.6vw,44px)] font-[var(--w500)] leading-[1.12] tracking-[-0.03em] text-[var(--color-primary)]">
            {copy.title}
          </h2>
          <p className="mb-9 max-w-[520px] text-[18px] leading-[1.7] text-[var(--muted)]">
            {copy.text}
          </p>
          <ul className="flex flex-col gap-4">
            {copy.benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3">
                <span className="mt-[2px] flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)]">
                  <CheckIcon />
                </span>
                <span className="text-[17px] leading-[1.5] text-[var(--text-primary)]">
                  {benefit}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="rev d1 aspect-[4/5] overflow-hidden rounded-[var(--r-lg)] bg-[var(--surface)] max-[900px]:aspect-[4/3]"
          style={{ boxShadow: 'var(--card-shadow)' }}
        >
          <img
            src="/assets/images/esthetique_vocal.png"
            alt=""
            className="h-full w-full object-cover"
            style={{ objectPosition: '60% 35%' }}
          />
        </div>
      </div>
    </section>
  );
}

// Section D — Pourquoi Doctinum
function WhyDoctinumSection({ copy }) {
  const icons = [
    // Drapeau / secteur français
    <path
      key="flag"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 21V4.5m0 0C4.5 3.5 6 3 8 3.75s3.5 1.5 5 .75 3-1.25 4.5-.5V13.5c-1.5-.75-3-.25-4.5.5s-3 .75-5 0S4.5 13 3 14V4.5Z"
    />,
    // Bouclier (HDS)
    <path
      key="shield"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
    />,
    // Cadenas (RGPD)
    <path
      key="lock"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
    />,
    // Intégration (puzzle)
    <path
      key="integration"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z"
    />,
  ];

  return (
    <section className="bg-[var(--surface)] py-24 max-[768px]:py-16">
      <Container>
        <div className="mx-auto mb-14 max-w-[720px] text-center max-[768px]:mb-10">
          <p className="rev mb-4 text-[13px] font-medium uppercase tracking-[0.14em] text-[var(--color-accent-2)]">
            {copy.eyebrow}
          </p>
          <h2 className="rev text-[clamp(28px,3.4vw,42px)] font-[var(--w500)] leading-[1.12] tracking-[-0.03em] text-[var(--color-primary)]">
            {copy.title}
          </h2>
        </div>

        <div className="grid grid-cols-4 gap-5 max-[1024px]:grid-cols-2 max-[560px]:grid-cols-1">
          {copy.items.map((item, index) => (
            <article
              key={item.title}
              className="rev flex flex-col rounded-[var(--r-md)] border border-[var(--border)] bg-[var(--surface2)] p-7"
            >
              <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-[14px] bg-[var(--color-primary)]">
                <svg
                  className="h-6 w-6 fill-none stroke-[1.6] stroke-[var(--text-inverse)]"
                  viewBox="0 0 24 24"
                >
                  {icons[index]}
                </svg>
              </span>
              <h3 className="mb-2 text-[19px] font-[var(--w500)] leading-[1.25] tracking-[-0.02em] text-[var(--color-primary)]">
                {item.title}
              </h3>
              <p className="text-[15px] leading-[1.6] text-[var(--muted)]">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

// Section E — CTA final (audit offert)
function AuditCtaSection({ copy }) {
  return (
    <section className="mx-auto w-full max-w-[1200px] px-16 py-24 pb-[100px] max-[1024px]:px-8 max-[768px]:px-5">
      <div
        className="rev mx-auto flex max-w-[880px] flex-col items-center rounded-[28px] bg-[var(--color-primary)] px-12 py-16 text-center max-[768px]:px-7 max-[768px]:py-12"
        style={{ boxShadow: 'var(--card-shadow)' }}
      >
        <h2 className="mb-4 text-[clamp(28px,3.6vw,42px)] font-[var(--w500)] leading-[1.12] tracking-[-0.04em] text-[var(--text-inverse)]">
          {copy.title}
          <span className="si mt-1 block text-[var(--color-accent-1)]">
            {copy.titleHighlight}
          </span>
        </h2>
        <p className="mb-9 max-w-[600px] text-[17px] leading-[1.7] text-[var(--white-75)]">
          {copy.subtitle}
        </p>
        <a
          href={AUDIT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-[var(--text-inverse)] px-8 py-4 text-[15px] font-medium tracking-[var(--track)] text-[var(--color-primary)] transition-all duration-200 ease-out hover:scale-[0.98] hover:opacity-90"
        >
          {copy.button}
        </a>
      </div>
    </section>
  );
}

export default function SurgeryAestheticPage({ active, onNavigate }) {
  const { t } = useTranslation();
  const copy = t('pages.solutions.surgeryAesthetic', { returnObjects: true });

  return (
    <div
      id="page-surgery-aesthetic"
      className={`page ${active ? 'active' : ''}`.trim()}
    >
      <SolutionHeroSection
        onNavigate={onNavigate}
        badge={{ text: copy.hero.eyebrow, variant: 'secondary' }}
        title={copy.hero.title}
        subtitle={copy.hero.subtitle}
        backgroundImage="/assets/images/esthetique_hero.png"
        backgroundType="image"
        showOverlayText={true}
        showOverlayImage={true}
        overlayGradientImage="var(--gradient-accent-warm-terra-overlay)"
        ctaButtons={[
          {
            text: copy.hero.cta,
            variant: 'primary',
            onClick: () => onNavigate('demo'),
          },
        ]}
      />
      <VoiceProductSection copy={copy.product} />
      <WhyDoctinumSection copy={copy.why} />
      <AuditCtaSection copy={copy.finalCta} />
    </div>
  );
}
