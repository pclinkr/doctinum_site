/**
 * Enveloppe « bento »: un panneau aux angles arrondis, en retrait des bords de
 * la fenêtre, jamais pleine largeur.
 *
 * Une seule enveloppe plutôt qu'un arrondi recopié dans chaque section: le
 * rayon, le retrait et la largeur maximale sont alors réglables en un endroit,
 * et deux panneaux voisins ne peuvent pas diverger d'un pixel.
 *
 * `tone` choisit le fond. Le ton sombre porte une lueur discrète en haut,
 * qui empêche l'aplat de paraître mort sur une grande surface.
 */

const TONE_CLASSES = {
  dark: 'bg-[var(--color-primary)] text-[var(--color-white)]',
  cream: 'bg-[var(--color-surface)] text-[var(--color-text)]',
  panel: 'bg-[var(--color-panel)] text-[var(--color-text)]',
  paper:
    'bg-[var(--color-white)] text-[var(--color-text)] border border-[var(--color-border)]',
};

export default function BentoPanel({
  tone = 'dark',
  as: Element = 'section',
  className = '',
  innerClassName = '',
  children,
  ...sectionProps
}) {
  return (
    <Element
      className={`px-[clamp(14px,3vw,34px)] ${className}`.trim()}
      {...sectionProps}
    >
      <div
        className={`relative mx-auto w-full max-w-[1320px] overflow-hidden rounded-[clamp(20px,2.4vw,34px)] ${TONE_CLASSES[tone] || TONE_CLASSES.dark} ${innerClassName}`.trim()}
      >
        {tone === 'dark' ? (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_82%_at_50%_-10%,color-mix(in_srgb,var(--color-accent-1)_22%,transparent)_0%,transparent_62%)]"
          />
        ) : null}
        {children}
      </div>
    </Element>
  );
}
