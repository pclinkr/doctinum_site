import { useTranslation } from 'react-i18next';
import { ShowcaseIcon } from './ShowcaseIcons';

/**
 * Bloc « La solution »: l'énoncé à gauche, la sphère au centre, et six
 * pastilles de capacité réparties de part et d'autre.
 *
 * ÉCART ASSUMÉ avec la maquette: elle relie chaque pastille à la sphère par un
 * trait courbe. Des courbes tracées entre des boîtes dont la position dépend
 * du texte demandent de mesurer le rendu, et se décrochent dès qu'un libellé
 * passe à la ligne ou que la langue change. À rajouter si le rendu sans elles
 * ne suffit pas.
 */
function CapabilityChip({ item, align }) {
  return (
    <li
      className={`flex items-center gap-3 rounded-[16px] border border-[var(--color-border)] bg-[var(--color-white)] px-4 py-3 shadow-[0_18px_38px_-30px_var(--ink-40)] ${
        align === 'right'
          ? 'min-[1080px]:flex-row-reverse min-[1080px]:text-right'
          : ''
      }`}
    >
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[var(--color-surface)] text-[var(--color-action)]">
        <ShowcaseIcon name={item.icon} className="h-[17px] w-[17px]" />
      </span>
      <span>
        <span className="block text-[13.5px] font-[var(--w500)] leading-[1.3] text-[var(--color-text)]">
          {item.title}
        </span>
        {/* Toutes les pastilles n'ont pas de seconde ligne: rendre un span vide
            laisserait une ligne de blanc sous le libellé. */}
        {item.sub ? (
          <span className="block text-[12.5px] leading-[1.4] text-[var(--color-muted)]">
            {item.sub}
          </span>
        ) : null}
      </span>
    </li>
  );
}

export default function ShowcaseSolutionSection() {
  const { t } = useTranslation();
  const capabilities = t('sections.showcase.solution.capabilities', {
    returnObjects: true,
  });
  const list = Array.isArray(capabilities) ? capabilities : [];
  const leftItems = list.filter((item) => item.side === 'left');
  const rightItems = list.filter((item) => item.side !== 'left');

  return (
    <section
      className="px-[clamp(14px,3vw,34px)] pb-[clamp(56px,7vw,120px)] pt-[clamp(12px,1.6vw,28px)]"
      aria-labelledby="showcase-solution-title"
    >
      <div className="mx-auto grid w-full max-w-[1320px] items-center gap-10 min-[1080px]:grid-cols-[minmax(0,0.95fr)_minmax(0,1.5fr)] min-[1080px]:gap-10">
        <div className="mx-auto w-full max-w-[560px] min-[1080px]:mx-0 min-[1080px]:max-w-none">
          <p className="mb-5 text-[10.5px] font-[var(--w500)] uppercase tracking-[0.16em] text-[var(--color-accent-1)]">
            {t('sections.showcase.solution.label')}
          </p>
          <h2
            id="showcase-solution-title"
            className="mb-6 max-w-[18ch] font-serif text-[clamp(1.9rem,3.2vw,2.8rem)] font-[600] leading-[1.16] text-[var(--color-text)]"
          >
            {t('sections.showcase.solution.title')}
          </h2>
          <p className="mb-8 max-w-[38ch] text-[14.5px] leading-[1.75] text-[var(--color-muted)]">
            {t('sections.showcase.solution.body')}
          </p>
        </div>

        <div className="relative mx-auto grid w-full max-w-[560px] items-center gap-4 min-[1080px]:max-w-none min-[1080px]:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] min-[1080px]:gap-5">
          <ul className="flex flex-col gap-4">
            {leftItems.map((item) => (
              <CapabilityChip key={item.title} item={item} align="left" />
            ))}
          </ul>

          <figure className="relative mx-auto my-2 grid place-items-center max-[1079px]:order-first">
            <span
              aria-hidden="true"
              className="absolute h-[min(56vw,250px)] w-[min(56vw,250px)] rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--color-accent-1)_20%,transparent)_0%,transparent_68%)] min-[1080px]:h-[300px] min-[1080px]:w-[300px]"
            />
            <img
              src="/assets/home-story/orbAvatar.webp"
              alt={t('sections.showcase.solution.orbAlt')}
              width="1100"
              height="1100"
              loading="lazy"
              decoding="async"
              className="relative h-[min(42vw,190px)] w-[min(42vw,190px)] rounded-full object-cover shadow-[0_40px_80px_-40px_var(--ink-40)] min-[1080px]:h-[230px] min-[1080px]:w-[230px]"
            />
          </figure>

          <ul className="flex flex-col gap-4">
            {rightItems.map((item) => (
              <CapabilityChip key={item.title} item={item} align="right" />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
