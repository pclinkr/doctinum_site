'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import BentoPanel from '../../layout/BentoPanel';
import HowItWorksStageVisual from '../../blocks/HowItWorksStageVisual';

/* Défilement consacré à CHAQUE passage d'une étape à la suivante, en hauteur
   de fenêtre. C'est le temps laissé au lecteur sur une étape: trop court, les
   étapes défilent sans qu'on les remarque. */
const SCROLL_PER_TRANSITION_VH = 90;

/**
 * Bloc « Comment ça marche »: panneau sombre en trois colonnes — l'énoncé à
 * gauche, l'image au centre, les quatre étapes à droite.
 *
 * La section est épinglée pendant qu'on la traverse: le défilement met en
 * évidence une étape après l'autre, et l'image du centre suit. L'épinglage
 * lui-même est décidé par le CSS (`.steps-track` / `.steps-sticky` dans
 * main.css) et non par un état React, sinon le premier rendu serveur — qui ne
 * connaît pas la largeur de la fenêtre — divergerait de l'hydratation.
 *
 * Sous 1080 px la composition passe en colonne et n'affiche QUE l'étape en
 * cours, au-dessus de sa maquette: quatre étapes empilées sur un téléphone
 * demandaient de faire défiler pour relier un texte à son image.
 *
 * Sur ces écrans le panneau est plus HAUT que la fenêtre. Épinglé par le haut,
 * il laissait l'étape et sa maquette sous le pli pendant tout le défilement:
 * on changeait d'étape sans rien en voir. Il est donc épinglé par le BAS —
 * `--steps-sticky-top` vaut la hauteur de fenêtre moins celle du panneau, et
 * l'en-tête défile hors champ avant que les étapes ne commencent à changer.
 * Quand le panneau tient dans la fenêtre, la valeur est zéro et rien ne change.
 *
 * En mouvement réduit, rien n'est épinglé et les quatre étapes sont lisibles.
 */
export default function ShowcaseHowItWorksSection() {
  const { t } = useTranslation();
  const steps = t('sections.showcase.howItWorks.steps', {
    returnObjects: true,
  });
  const stage = t('sections.showcase.howItWorks.stage', {
    returnObjects: true,
  });
  const list = Array.isArray(steps) ? steps : [];
  const stepCount = list.length;

  const trackRef = useRef(null);
  const stickyRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (stepCount === 0) return undefined;

    const reducedMotionQuery = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    );
    // Même condition que le CSS: seul le mouvement réduit désépingle.
    const isPinned = () => !reducedMotionQuery.matches;

    /* Point d'épinglage: zéro quand le panneau tient dans la fenêtre, négatif
       de ce qui dépasse sinon — le bas du panneau s'aligne alors sur le bas de
       la fenêtre. Lu par le CSS ET par le calcul de progression ci-dessous,
       qui doivent rester d'accord. */
    const pinTop = () => {
      const sticky = stickyRef.current;
      if (!sticky) return 0;
      return Math.min(0, window.innerHeight - sticky.offsetHeight);
    };

    const applyFrame = () => {
      const track = trackRef.current;
      if (!track) return;
      track.style.setProperty('--steps-sticky-top', `${pinTop()}px`);
    };

    let frameId = 0;

    const readProgress = () => {
      frameId = 0;
      const track = trackRef.current;
      const sticky = stickyRef.current;
      if (!track || !sticky) return;
      applyFrame();
      if (!isPinned()) {
        setActiveIndex(0);
        return;
      }

      /* La course épinglée va de `pinTop` (le panneau vient de se fixer) à
         `pinTop - piste d'élan` (la piste se termine, le panneau repart). */
      const bounds = track.getBoundingClientRect();
      const range = bounds.height - sticky.offsetHeight;
      if (range <= 0) return;

      const progress = Math.min(
        1,
        Math.max(0, (pinTop() - bounds.top) / range)
      );
      /* La piste se divise entre les TRANSITIONS, pas entre les étapes: la
         première est déjà à l'écran quand la section arrive, le défilement
         sert donc à passer à la deuxième, puis à la troisième, puis à la
         quatrième. Diviser par `stepCount` faisait stagner un quart de la
         piste sur une étape déjà lue. */
      setActiveIndex(
        Math.min(stepCount - 1, Math.round(progress * (stepCount - 1)))
      );
    };

    const schedule = () => {
      if (frameId) return;
      frameId = window.requestAnimationFrame(readProgress);
    };

    schedule();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    reducedMotionQuery.addEventListener('change', schedule);
    /* La hauteur du panneau bouge aussi sans redimensionnement: chargement
       des polices, textes d'une autre langue, carte d'étape plus longue. */
    const resizeObserver = new ResizeObserver(schedule);
    if (stickyRef.current) resizeObserver.observe(stickyRef.current);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      reducedMotionQuery.removeEventListener('change', schedule);
      resizeObserver.disconnect();
    };
  }, [stepCount]);

  return (
    <div ref={trackRef} className="steps-track">
      <div ref={stickyRef} className="steps-sticky">
        <BentoPanel
          tone="dark"
          className="w-full py-[clamp(28px,8vw,124px)]"
          innerClassName="px-[clamp(22px,3.4vw,54px)] py-[clamp(30px,4vw,54px)]"
          aria-labelledby="showcase-howitworks-title"
        >
          <div className="relative grid items-center gap-7 min-[1080px]:grid-cols-[minmax(0,0.9fr)_minmax(0,1.15fr)_minmax(0,1fr)] min-[1080px]:gap-9">
            {/* En colonne unique, le titre bridé à 14ch tombait sur quatre
                lignes en laissant tout le côté droit vide. Entre 640 et
                1079 px l'en-tête se pose donc sur deux colonnes — titre à
                gauche, énoncé à droite — et le titre reprend sa largeur. */}
            <div className="min-[640px]:max-[1079px]:grid min-[640px]:max-[1079px]:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] min-[640px]:max-[1079px]:items-end min-[640px]:max-[1079px]:gap-x-10">
              <p className="mb-5 text-[10.5px] font-[var(--w500)] uppercase tracking-[0.16em] text-[var(--white-54)] min-[640px]:max-[1079px]:col-span-2">
                {t('sections.showcase.howItWorks.label')}
              </p>
              <h2
                id="showcase-howitworks-title"
                className="mb-6 max-w-[14ch] font-serif text-[clamp(1.9rem,3.1vw,2.7rem)] font-[600] leading-[1.14] max-[1079px]:max-w-none max-[1079px]:[text-wrap:balance] min-[640px]:max-[1079px]:mb-0"
              >
                {t('sections.showcase.howItWorks.titlePrefix')}{' '}
                <em className="not-italic text-[var(--color-accent-1)]">
                  {t('sections.showcase.howItWorks.titleAccent')}
                </em>
              </h2>
              <p className="max-w-[36ch] text-[14.5px] leading-[1.75] text-[var(--white-72)] max-[639px]:max-w-none min-[640px]:max-[1079px]:max-w-[40ch]">
                {t('sections.showcase.howItWorks.body')}
              </p>
            </div>

            {/* Les quatre maquettes sont empilées et se fondent l'une dans
                l'autre: les monter et démonter au changement d'étape
                relancerait le rendu — et le chargement des visuels — à chaque
                passage. Le fondu est lent à dessein: c'est lui qui signale
                qu'on a changé d'étape. */}
            <div className="relative mx-auto aspect-[4/3] w-full max-w-[520px] max-[1079px]:order-3 min-[1080px]:max-w-none">
              {list.map((step, index) => (
                <div
                  key={step.number}
                  aria-hidden={index === activeIndex ? undefined : 'true'}
                  className="absolute inset-0 transition-[opacity,transform] ease-out [transition-duration:1100ms] motion-reduce:transition-none"
                  style={{
                    opacity: index === activeIndex ? 1 : 0,
                    transform:
                      index === activeIndex ? 'scale(1)' : 'scale(0.985)',
                    pointerEvents: index === activeIndex ? undefined : 'none',
                  }}
                >
                  <HowItWorksStageVisual stepIndex={index} stage={stage} />
                </div>
              ))}
            </div>

            {/* Une hauteur plancher sous 1080 px: la carte de l'étape 2 est
                plus haute que les autres, et sans elle la maquette sautait à
                chaque changement. */}
            <ol className="mx-auto flex w-full max-w-[520px] flex-col gap-2.5 max-[1079px]:order-2 max-[1079px]:min-h-[124px] min-[1080px]:max-w-none">
              {list.map((step, index) => {
                const isActive = index === activeIndex;
                return (
                  <li
                    key={step.number}
                    aria-current={isActive ? 'step' : undefined}
                    className={`items-start gap-4 rounded-[16px] px-4 py-4 transition-colors duration-700 ease-out motion-reduce:transition-none ${
                      isActive
                        ? 'flex bg-[var(--color-white)] text-[var(--color-text)] max-[1079px]:animate-[steps-step-in_0.65s_ease-out] motion-reduce:animate-none'
                        : 'hidden text-[var(--white-60)] min-[1080px]:flex motion-reduce:flex'
                    }`}
                  >
                    <span
                      className={`shrink-0 font-serif text-[19px] font-[600] leading-none [font-variant-numeric:tabular-nums] ${
                        isActive
                          ? 'text-[var(--color-accent-1)]'
                          : 'text-[var(--white-38)]'
                      }`}
                    >
                      {step.number}
                    </span>
                    <span className="text-[13.5px] leading-[1.6]">
                      {step.text}
                    </span>
                  </li>
                );
              })}
            </ol>
          </div>
        </BentoPanel>
      </div>
      {/* La piste d'élan: le défilement pendant lequel le panneau reste fixé.
          Un frère du panneau plutôt qu'une hauteur calculée sur la piste, pour
          que la course épinglée vaille EXACTEMENT cette hauteur, quelle que
          soit celle du panneau. */}
      <div
        aria-hidden="true"
        className="steps-runway"
        style={{
          height: `${Math.max(0, stepCount - 1) * SCROLL_PER_TRANSITION_VH}vh`,
        }}
      />
    </div>
  );
}
