/* Jeu de pictogrammes des quatre blocs. Tracés seuls: le <svg> est écrit par
   les composants, avec leurs propres attributs de style. */
export const SHOWCASE_ICONS = {
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="3" />
      <path d="M8 3v4M16 3v4M3 10h18" />
    </>
  ),
  trendDown: (
    <>
      <path d="M3 7l6 6 4-4 7 8" />
      <path d="M20 17h-6v-6" />
    </>
  ),
  mind: (
    <>
      <path d="M12 4a4 4 0 0 0-4 4 3 3 0 0 0-1 5.8V16a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3v-2.2A3 3 0 0 0 16 8a4 4 0 0 0-4-4z" />
      <path d="M12 9v4" />
    </>
  ),
  phoneIn: (
    <>
      <path d="M15 3h6v6" />
      <path d="M21 3l-7 7" />
      <path d="M5 4h3l2 5-2 1a12 12 0 0 0 6 6l1-2 5 2v3a2 2 0 0 1-2 2A17 17 0 0 1 3 6a2 2 0 0 1 2-2z" />
    </>
  ),
  clipboard: (
    <>
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 4V3h6v1" />
      <path d="M9 11h6M9 15h4" />
    </>
  ),
  bell: (
    <>
      <path d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6z" />
      <path d="M10 20a2 2 0 0 0 4 0" />
    </>
  ),
  folder: (
    <path d="M3 7a2 2 0 0 1 2-2h4l2 2.4h6a2 2 0 0 1 2 2V17a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.4" />
      <path d="M3 20a6 6 0 0 1 12 0" />
      <path d="M16 5.5a3.4 3.4 0 0 1 0 5M17.5 20a6 6 0 0 0-2-4" />
    </>
  ),
  spark: <path d="M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2z" />,
  heart: (
    <path d="M12 20s-7-4.4-7-9.4A4 4 0 0 1 12 8a4 4 0 0 1 7 2.6c0 5-7 9.4-7 9.4z" />
  ),
  chat: (
    <path d="M21 12a8 8 0 0 1-8 8H7l-4 3v-6a8 8 0 0 1 8-8h2a8 8 0 0 1 8 3z" />
  ),
};

export function ShowcaseIcon({ name, className = '' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {SHOWCASE_ICONS[name]}
    </svg>
  );
}

/** Pastille circulaire à flèche, le repère de lien de la maquette. */
export function ArrowPill({ className = '' }) {
  return (
    <span
      aria-hidden="true"
      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border border-current transition-transform duration-300 ease-out group-hover:translate-x-[2px] ${className}`.trim()}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-3.5 w-3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h13M13 6l6 6-6 6" />
      </svg>
    </span>
  );
}
