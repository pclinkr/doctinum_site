import { useTranslation } from 'react-i18next';
import BentoPanel from '../../layout/BentoPanel';
import { ShowcaseIcon } from './ShowcaseIcons';

/**
 * Bloc « Des résultats concrets »: panneau clair, titre centré, quatre
 * cartouches chiffrés.
 *
 * La bande de confiance est masquée pour le moment (voir plus bas): elle
 * attend de vrais logos. La maquette de référence y aligne des logos de
 * groupes de santé réels, qui ne sont pas repris — les afficher leur prêterait
 * une relation commerciale qui n'existe pas.
 */
export default function ShowcaseResultsSection() {
  const { t } = useTranslation();
  const stats = t('sections.showcase.results.stats', { returnObjects: true });

  return (
    <BentoPanel
      tone="panel"
      className="pb-[clamp(48px,7vw,110px)]"
      innerClassName="px-[clamp(20px,3.2vw,54px)] py-[clamp(30px,3.6vw,52px)]"
      aria-labelledby="showcase-results-title"
    >
      <p className="mb-3 text-center text-[10.5px] font-[var(--w500)] uppercase tracking-[0.16em] text-[var(--color-accent-1)]">
        {t('sections.showcase.results.label')}
      </p>
      <h2
        id="showcase-results-title"
        className="mx-auto mb-8 max-w-[34ch] text-balance text-center font-serif text-[clamp(1.7rem,2.7vw,2.3rem)] font-[600] leading-[1.2] text-[var(--color-text)]"
      >
        {t('sections.showcase.results.title')}
      </h2>

      <ul className="grid grid-cols-1 gap-4 min-[620px]:grid-cols-2 min-[1080px]:grid-cols-4">
        {(Array.isArray(stats) ? stats : []).map((stat) => (
          <li
            key={stat.label}
            className="rounded-[16px] bg-[var(--color-panel-card)] px-6 py-6"
          >
            {/* Le pictogramme se pose à nu: plus de pastille, donc plus de
                rembourrage à compenser, et il peut prendre sa vraie taille. */}
            <ShowcaseIcon
              name={stat.icon}
              className="mb-4 h-7 w-7 text-[var(--color-accent-1)]"
            />
            <p className="mb-1.5 font-serif text-[clamp(1.7rem,2.6vw,2.2rem)] font-[600] leading-none text-[var(--color-text)] [font-variant-numeric:tabular-nums]">
              {stat.value}
            </p>
            <p className="text-[13px] leading-[1.5] text-[var(--color-muted)]">
              {stat.label}
            </p>
          </li>
        ))}
      </ul>

      {/* Bande de confiance masquée pour le moment: elle attend de vrais logos.
          Le balisage et les textes (`results.trustLabel`,
          `results.trustPlaceholder`) restent en place — remettre ce bloc en
          service suffit à la faire réapparaître.

      <p className="mb-4 text-center text-[12.5px] text-[var(--color-muted)]">
        {t('sections.showcase.results.trustLabel')}
      </p>
      <div className="flex min-h-[44px] items-center justify-center rounded-[12px] border border-dashed border-[var(--color-border-strong)] px-6 py-3">
        <p className="text-[12px] uppercase tracking-[0.12em] text-[var(--color-subtle)]">
          {t('sections.showcase.results.trustPlaceholder')}
        </p>
      </div>

      */}
    </BentoPanel>
  );
}
