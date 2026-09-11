'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import BentoPanel from '../../layout/BentoPanel';
import HowItWorksStageVisual from '../../blocks/HowItWorksStageVisual';

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
 * demandaient de faire défiler pour relier un texte à son image. En mouvement
 * réduit, rien n'est épinglé et les quatre étapes sont toutes lisibles.
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
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (stepCount === 0) return undefined;

    const reducedMotionQuery = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    );
    // Même condition que le CSS: seul le mouvement réduit désépingle.
    const isPinned = () => !reducedMotionQuery.matches;

    let frameId = 0;

    const readProgress = () => {
      frameId = 0;
      const element = trackRef.current;
      if (!element) return;
      if (!isPinned()) {
        setActiveIndex(0);
        return;
      }

      const bounds = element.getBoundingClientRect();
      const scrollable = bounds.height - window.innerHeight;
      if (scrollable <= 0) return;

      const progress = Math.min(1, Math.max(0, -bounds.top / scrollable));
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

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      reducedMotionQuery.removeEventListener('change', schedule);
    };
  }, [stepCount]);

  return (
    <div
      ref={trackRef}
      className="steps-track"
      // Une hauteur de fenêtre pour le premier temps, puis 70 % par étape
      // suivante: assez pour que chacune se lise sans que la piste s'éternise.
      style={{ '--steps-extra': `${Math.max(0, stepCount - 1) * 70}vh` }}
    >
      <div className="steps-sticky">
        <BentoPanel
          tone="dark"
          className="w-full py-[clamp(56px,8vw,124px)]"
          innerClassName="px-[clamp(22px,3.4vw,54px)] py-[clamp(34px,4vw,54px)]"
          aria-labelledby="showcase-howitworks-title"
        >
          <div className="relative grid items-center gap-10 min-[1080px]:grid-cols-[minmax(0,0.9fr)_minmax(0,1.15fr)_minmax(0,1fr)] min-[1080px]:gap-9">
            <div>
              <p className="mb-5 text-[10.5px] font-[var(--w500)] uppercase tracking-[0.16em] text-[var(--white-54)]">
                {t('sections.showcase.howItWorks.label')}
              </p>
              <h2
                id="showcase-howitworks-title"
                className="mb-6 max-w-[14ch] font-serif text-[clamp(1.9rem,3.1vw,2.7rem)] font-[600] leading-[1.14]"
              >
                {t('sections.showcase.howItWorks.titlePrefix')}{' '}
                <em className="not-italic text-[var(--color-accent-1)]">
                  {t('sections.showcase.howItWorks.titleAccent')}
                </em>
              </h2>
              <p className="max-w-[36ch] text-[14.5px] leading-[1.75] text-[var(--white-72)]">
                {t('sections.showcase.howItWorks.body')}
              </p>
            </div>

            {/* Les quatre maquettes sont empilées et se fondent l'une dans
                l'autre: les monter et démonter au changement d'étape
                relancerait le rendu — et le chargement des visuels — à chaque
                passage. */}
            <div className="relative mx-auto aspect-[4/3] w-full max-w-[520px] max-[1079px]:order-3 min-[1080px]:max-w-none">
              {list.map((step, index) => (
                <div
                  key={step.number}
                  aria-hidden={index === activeIndex ? undefined : 'true'}
                  className="absolute inset-0 transition-opacity duration-700 ease-out motion-reduce:transition-none"
                  style={{
                    opacity: index === activeIndex ? 1 : 0,
                    pointerEvents: index === activeIndex ? undefined : 'none',
                  }}
                >
                  <HowItWorksStageVisual stepIndex={index} stage={stage} />
                </div>
              ))}
            </div>

            <ol className="mx-auto flex w-full max-w-[520px] flex-col gap-2.5 max-[1079px]:order-2 min-[1080px]:max-w-none">
              {list.map((step, index) => {
                const isActive = index === activeIndex;
                return (
                  <li
                    key={step.number}
                    aria-current={isActive ? 'step' : undefined}
                    className={`items-start gap-4 rounded-[16px] px-4 py-4 transition-colors duration-500 ease-out motion-reduce:transition-none ${
                      isActive
                        ? 'flex bg-[var(--color-white)] text-[var(--color-text)]'
                        : 'hidden text-[var(--white-60)] min-[1080px]:flex'
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
    </div>
  );
}
