import { useTranslation } from 'react-i18next';
import BentoPanel from '../../layout/BentoPanel';
import { ASSETS_BASE } from '../../../constants/homeStory';
import { ShowcaseIcon } from './ShowcaseIcons';

/**
 * Bloc « En action »: le panneau EST la photographie. Le contenu se range à
 * gauche, sur la partie floue du décor; le téléphone occupe la droite du
 * visuel et reste dégagé.
 *
 * Les blocs de texte sont en verre PUR: aucune teinte de fond, seulement le
 * flou de ce qui passe dessous. C'est le voile du panneau, en dessous, qui
 * assure la lisibilité du texte blanc — pas une couche de couleur sur les
 * blocs eux-mêmes.
 *
 * Deux réglages qui font tout:
 *  — la SATURATION reste proche de 1. Poussée, elle ravive les couleurs vues
 *    à travers le verre et le bloc paraît teinté alors qu'il ne l'est pas.
 *  — l'ÉPAISSEUR ne vient pas du filet mais de deux ombres INTERNES: une ligne
 *    claire en haut, où la lumière accroche la tranche, et une plus faible en
 *    bas. Un filet uniforme donne une découpe, pas un volume.
 */

/* Le fond est posé en `background-image` et non en <img>: la couleur de repli
   reste visible tant que le fichier n'est pas là, et le panneau ne montre
   jamais d'image cassée. */
const BACKDROP = '/assets/images/fond_phone.webp';

function GlassBlock({ className = '', children }) {
  return (
    <div
      className={`rounded-[20px] border border-[var(--white-20)] shadow-[inset_0_1px_0_var(--white-46),inset_0_-1px_0_var(--white-10),0_24px_60px_-30px_rgba(0,0,0,0.5)] [-webkit-backdrop-filter:blur(18px)_saturate(1.06)] [backdrop-filter:blur(18px)_saturate(1.06)] ${className}`.trim()}
    >
      {children}
    </div>
  );
}

export default function ShowcaseInActionSection() {
  const { t } = useTranslation();
  const points = t('sections.showcase.inAction.points', {
    returnObjects: true,
  });
  const quote = t('sections.showcase.inAction.quote', { returnObjects: true });

  return (
    <BentoPanel
      tone="dark"
      className="pb-[clamp(48px,7vw,110px)]"
      innerClassName="min-h-[clamp(520px,58vw,680px)] px-[clamp(20px,3.4vw,54px)] py-[clamp(34px,4vw,58px)]"
      aria-labelledby="showcase-inaction-title"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[var(--color-primary)] bg-cover bg-[position:70%_50%] bg-no-repeat"
        style={{ backgroundImage: `url(${BACKDROP})` }}
      />
      {/* Voile: il assombrit surtout la gauche, là où le texte se pose, et
          laisse le téléphone à droite presque intact. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(96deg,color-mix(in_srgb,var(--color-primary)_48%,transparent)_0%,color-mix(in_srgb,var(--color-primary)_26%,transparent)_44%,transparent_74%)]"
      />

      <div className="relative max-w-[min(100%,540px)]">
        {/* Deux blocs de verre, pas un titre nu suivi d'un bloc: l'énoncé et
            ses trois preuves forment un seul objet posé sur la photographie. */}
        <GlassBlock className="mb-5 px-6 py-6">
          <p className="mb-4 text-[10.5px] font-[var(--w500)] uppercase tracking-[0.16em] text-[var(--white-72)]">
            {t('sections.showcase.inAction.label')}
          </p>
          <h2
            id="showcase-inaction-title"
            className="mb-6 max-w-[18ch] font-serif text-[clamp(1.5rem,2.3vw,2rem)] font-[600] leading-[1.18] text-[var(--color-white)]"
          >
            {t('sections.showcase.inAction.title')}
          </h2>

          <ul className="flex flex-col gap-3.5">
            {(Array.isArray(points) ? points : []).map((point) => (
              <li key={point.text} className="flex items-center gap-3">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-[var(--white-28)] text-[var(--color-white)]">
                  <ShowcaseIcon name={point.icon} className="h-4 w-4" />
                </span>
                <span className="text-[15.5px] text-[var(--color-white)]">
                  {point.text}
                </span>
              </li>
            ))}
          </ul>
        </GlassBlock>

        <GlassBlock className="px-6 py-6">
          <div className="mb-5 flex items-center gap-3">
            <img
              src={`${ASSETS_BASE}/p3.webp`}
              alt=""
              aria-hidden="true"
              width="220"
              height="220"
              loading="lazy"
              className="h-12 w-12 shrink-0 rounded-full border border-[var(--white-28)] object-cover"
            />
            <span>
              <span className="block text-[15.5px] font-[var(--w500)] leading-[1.35] text-[var(--color-white)]">
                {quote?.author}
              </span>
              <span className="block text-[14px] leading-[1.4] text-[var(--white-72)]">
                {quote?.role}
              </span>
            </span>
          </div>
          <blockquote className="font-serif text-[16.5px] leading-[1.55] text-[var(--color-white)]">
            « {quote?.text} »
          </blockquote>
        </GlassBlock>
      </div>
    </BentoPanel>
  );
}
