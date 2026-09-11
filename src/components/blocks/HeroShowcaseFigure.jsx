const VOICE_BAR_HEIGHTS = [10, 16, 12, 18, 9];

// Deux bandes verticales qui bouclent sans fin, en sens inverse l'une de
// l'autre. Chaque liste est dupliquée et l'animation translate de -50%,
// donc la reprise est invisible.
const MARQUEE_COLUMNS = [
  {
    id: 'left',
    duration: '42s',
    reverse: false,
    photos: [
      '/assets/images/aesthetic_patient.png',
      '/assets/images/consultation.png',
    ],
  },
  {
    id: 'right',
    duration: '54s',
    reverse: true,
    photos: [
      '/assets/images/aesthetic_patient_injection.jpg',
      '/assets/images/aesthetic_patient_liposuccion.jpg',
    ],
  },
];

export default function HeroShowcaseFigure({
  content,
  instant = false,
  playReveal = false,
  onJumpToSimulation,
}) {
  return (
    <figure
      className={`hero-figure relative m-0 w-full max-w-[540px] overflow-hidden rounded-[30px] shadow-[0_40px_80px_-40px_rgba(34,30,26,0.5)] ${playReveal ? 'is-shown' : ''} ${instant ? 'is-instant' : ''}`.trim()}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-[var(--color-surface)]">
        <div className="hero-figure-media absolute inset-0 grid grid-cols-2 gap-2">
          {MARQUEE_COLUMNS.map((column, columnIndex) => (
            <div key={column.id} className="relative overflow-hidden">
              <div
                className={`hero-marquee-track absolute inset-x-0 top-0 flex flex-col ${column.reverse ? 'is-reverse' : ''}`.trim()}
                style={{ '--hero-marquee-duration': column.duration }}
              >
                {[...column.photos, ...column.photos].map((photoSrc, index) => (
                  <div
                    key={`${column.id}-${photoSrc}-${index}`}
                    className="relative mb-2 w-full shrink-0 aspect-[3/4] overflow-hidden rounded-[10px]"
                  >
                    <img
                      src={photoSrc}
                      alt={
                        columnIndex === 0 && index === 0
                          ? content?.alt || ''
                          : ''
                      }
                      aria-hidden={
                        columnIndex === 0 && index === 0 ? undefined : 'true'
                      }
                      className="absolute inset-0 h-full w-full object-cover"
                      loading={index === 0 ? 'eager' : 'lazy'}
                      decoding="async"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(34,30,26,0.16)_0%,rgba(34,30,26,0)_34%,rgba(34,30,26,0.06)_58%,rgba(34,30,26,0.52)_100%)]"
        />

        <div className="absolute left-5 top-5 inline-flex items-center gap-3 rounded-full border border-[var(--white-40)] bg-[color-mix(in_srgb,var(--color-white)_72%,transparent)] px-4 py-2 backdrop-blur-md">
          <span className="flex h-4 items-end gap-[3px]" aria-hidden="true">
            {VOICE_BAR_HEIGHTS.map((barHeight, index) => (
              <span
                key={barHeight + '-' + index}
                className="voice-bar w-[2px] rounded-full bg-[var(--color-action)]"
                style={{
                  height: `${barHeight}px`,
                  animationDelay: `${index * 130}ms`,
                }}
              />
            ))}
          </span>
          <span className="text-[10.5px] font-[var(--w500)] uppercase tracking-[0.12em] text-[var(--color-text)]">
            {content?.status}
          </span>
        </div>

        <figcaption className="absolute inset-x-4 bottom-4 flex items-center gap-4 rounded-[20px] border border-[var(--white-40)] bg-[color-mix(in_srgb,var(--color-white)_82%,transparent)] px-6 py-5 backdrop-blur-lg">
          <div className="min-w-0">
            <p className="mb-2 text-[10px] font-[var(--w500)] uppercase tracking-[0.16em] text-[var(--color-action)]">
              {content?.eyebrow}
            </p>
            <p className="font-serif text-[19px] font-[600] leading-[1.3] text-[var(--color-text)]">
              {content?.line}
            </p>
          </div>

          <button
            type="button"
            onClick={onJumpToSimulation}
            aria-label={content?.cta}
            title={content?.cta}
            className="group ml-auto grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[var(--color-action)] text-[var(--color-white)] transition-[background-color,transform] duration-300 ease-out hover:bg-[var(--color-action-hover)] hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-action)] focus-visible:ring-offset-2 motion-reduce:hover:scale-100"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </button>
        </figcaption>
      </div>
    </figure>
  );
}
