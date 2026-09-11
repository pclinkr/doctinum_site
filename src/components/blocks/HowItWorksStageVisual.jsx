/**
 * Maquettes produit de la section « Comment ça marche »: ce que le patient voit
 * à l'écran étape après étape, puis la consultation elle-même.
 *
 * Tout est construit en HTML/CSS, aucune capture figée: les libellés viennent
 * des locales et se traduisent, et la maquette suit la palette du site sans
 * qu'on ait à réexporter une image.
 */

function Frame({ children, className = '' }) {
  return (
    <div
      className={`relative h-full w-full overflow-hidden rounded-[18px] bg-[var(--color-white)] ${className}`.trim()}
    >
      {children}
    </div>
  );
}

function SiteChrome({ site }) {
  return (
    <div className="flex items-center gap-4 border-b border-[var(--color-border)] bg-[var(--color-white)] px-5 py-3">
      <span className="font-serif text-[13px] font-[600] tracking-[0.08em] text-[var(--color-text)]">
        {site?.brand}
      </span>
      <span className="ml-auto hidden gap-4 text-[10px] text-[var(--color-subtle)] min-[520px]:flex">
        {(site?.nav || []).map((item) => (
          <span key={item}>{item}</span>
        ))}
      </span>
    </div>
  );
}

/* 01 — le site du cabinet, l'assistante posée en bas de page. */
function StageWebsite({ site, copy }) {
  return (
    <Frame>
      <SiteChrome site={site} />
      <div className="relative h-[calc(100%-45px)]">
        <img
          src="/assets/images/aesthetic_patient_liposuccion.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(34,30,26,0.1)_0%,rgba(34,30,26,0.42)_100%)]"
        />

        <div className="absolute inset-x-4 bottom-4 rounded-[16px] border border-[var(--white-40)] bg-[color-mix(in_srgb,var(--color-white)_88%,transparent)] p-4 backdrop-blur-md">
          <div className="mb-3 flex items-center gap-2.5">
            <span className="h-7 w-7 overflow-hidden rounded-full">
              <img
                src="/assets/home-story/orbAvatar.webp"
                alt=""
                aria-hidden="true"
                className="h-full w-full object-cover"
              />
            </span>
            <span className="text-[10px] font-[var(--w500)] uppercase tracking-[0.1em] text-[var(--color-action)]">
              {copy?.agent}
            </span>
          </div>

          <p className="mb-3 font-serif text-[15px] leading-[1.4] text-[var(--color-text)]">
            {copy?.greeting}
          </p>

          <div className="mb-3 flex flex-wrap gap-1.5">
            {(copy?.chips || []).map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-[var(--color-border-strong)] px-2.5 py-1 text-[10px] text-[var(--color-muted)]"
              >
                {chip}
              </span>
            ))}
          </div>

          <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-action)] px-3.5 py-2 text-[10.5px] font-[var(--w500)] text-[var(--color-white)]">
            <span className="flex h-3 items-end gap-[2px]" aria-hidden="true">
              {[6, 10, 7, 11].map((height, index) => (
                <span
                  key={index}
                  className="voice-bar w-[2px] rounded-full bg-current"
                  style={{
                    height: `${height}px`,
                    animationDelay: `${index * 120}ms`,
                  }}
                />
              ))}
            </span>
            {copy?.cta}
          </span>
        </div>
      </div>
    </Frame>
  );
}

/* 02 — la conversation: la question du patient, la réponse sourcée. */
function StageConversation({ site, copy }) {
  return (
    <Frame>
      <SiteChrome site={site} />
      <div className="flex h-[calc(100%-45px)] flex-col justify-center gap-3 bg-[var(--color-surface)] p-5">
        <div className="ml-auto max-w-[78%] rounded-[14px] rounded-br-[4px] bg-[var(--color-action)] px-4 py-3">
          <p className="text-[12.5px] leading-[1.5] text-[var(--color-white)]">
            {copy?.question}
          </p>
        </div>

        <div className="max-w-[86%] rounded-[14px] rounded-bl-[4px] border border-[var(--color-border)] bg-[var(--color-white)] px-4 py-3">
          <p className="mb-2.5 text-[12.5px] leading-[1.55] text-[var(--color-text)]">
            {copy?.answer}
          </p>
          {/* La provenance de la réponse est affichée: c'est ce qui distingue
              une réponse de la base du cabinet d'une improvisation. */}
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border-strong)] px-2.5 py-1 text-[9.5px] uppercase tracking-[0.08em] text-[var(--color-action)]">
            <span
              aria-hidden="true"
              className="h-[5px] w-[5px] rounded-full bg-[var(--color-accent-1)]"
            />
            {copy?.source}
          </span>
        </div>
      </div>
    </Frame>
  );
}

/* 03 — le dossier de pré-consultation qui se remplit. */
function StageFile({ copy }) {
  const photoSources = [
    '/assets/images/aesthetic_patient.png',
    '/assets/images/aesthetic_patient_injection.jpg',
    '/assets/images/consultation.png',
  ];
  const fields = copy?.fields || [];
  const photos = copy?.photos || [];

  return (
    <Frame>
      <div className="flex h-full flex-col p-5">
        <div className="mb-4 flex items-baseline justify-between gap-3 border-b border-[var(--color-border)] pb-3">
          <p className="text-[10.5px] font-[var(--w500)] uppercase tracking-[0.11em] text-[var(--color-action)]">
            {copy?.title}
          </p>
          <p className="text-[10px] text-[var(--color-subtle)]">
            {copy?.progress}
          </p>
        </div>

        <div className="flex flex-col gap-2.5">
          {fields.map((field) => (
            <div
              key={field.label}
              className="flex items-center justify-between gap-3 rounded-[10px] bg-[var(--color-surface)] px-3 py-2.5"
            >
              <span className="text-[11.5px] text-[var(--color-muted)]">
                {field.label}
              </span>
              <span className="flex items-center gap-2 text-[12px] font-[var(--w500)] text-[var(--color-text)]">
                {field.value}
                <span
                  aria-hidden="true"
                  className="grid h-4 w-4 place-items-center rounded-full bg-[color-mix(in_srgb,var(--color-success)_16%,transparent)] text-[9px] text-[var(--color-success)]"
                >
                  ✓
                </span>
              </span>
            </div>
          ))}
        </div>

        <p className="mb-2 mt-5 text-[10px] font-[var(--w500)] uppercase tracking-[0.1em] text-[var(--color-action)]">
          {copy?.photosLabel}
        </p>
        <div className="grid grid-cols-3 gap-2">
          {photos.map((label, index) => (
            <figure
              key={label}
              className="overflow-hidden rounded-[8px] border border-[var(--color-border)]"
            >
              <img
                src={photoSources[index] || photoSources[0]}
                alt=""
                aria-hidden="true"
                className="h-[52px] w-full object-cover"
              />
              <figcaption className="bg-[var(--color-white)] px-1.5 py-1 text-center text-[9px] text-[var(--color-muted)]">
                {label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </Frame>
  );
}

/* 04 — la consultation. Une photographie, pas une maquette: les trois temps
   précédents montrent le produit, celui-ci montre ce à quoi il sert. */
function StageConsultation({ copy }) {
  return (
    <Frame>
      <figure className="relative h-full w-full">
        <img
          src="/assets/home-story/doctorFull.webp"
          alt=""
          aria-hidden="true"
          width="2000"
          height="1091"
          className="h-full w-full object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(180deg,transparent_0%,color-mix(in_srgb,var(--color-primary)_74%,transparent)_100%)]"
        />
        <figcaption className="absolute inset-x-0 bottom-0 p-5 font-serif text-[17px] font-[600] leading-[1.25] text-[var(--color-white)]">
          {copy?.caption}
        </figcaption>
      </figure>
    </Frame>
  );
}

export default function HowItWorksStageVisual({ stepIndex, stage }) {
  const site = stage?.site;

  switch (stepIndex) {
    case 0:
      return <StageWebsite site={site} copy={stage?.step1} />;
    case 1:
      return <StageConversation site={site} copy={stage?.step2} />;
    case 2:
      return <StageFile copy={stage?.step3} />;
    default:
      return <StageConsultation copy={stage?.step5} />;
  }
}
