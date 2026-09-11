'use client';

import { useEffect } from 'react';

/**
 * Propriétaire UNIQUE de la position de défilement au chargement.
 *
 * Deux mécanismes distincts se disputaient ce rôle auparavant — un effet dans
 * LocaleShell et une garde interne à la page animée — et le nettoyage du
 * premier reposait `scrollRestoration` à 'auto' à chaque changement de route,
 * annulant frontalement le second. Tout est regroupé ici.
 *
 * Deux régimes, parce que les attentes ne sont pas les mêmes :
 *
 *   Page-récit (l'accueil) — toute la narration est pilotée par le défilement.
 *   Rouvrir au milieu d'un acte, intro déjà passée, n'a aucun sens : on coupe
 *   la restauration native et on retient le haut de page.
 *
 *   Pages classiques — on ne touche à rien. Next remet en haut sur une
 *   navigation neuve, et le navigateur restaure la position au retour arrière,
 *   ce que tout le monde attend d'une page de contenu.
 */

const HOLD_POLL_MS = 100;
const HOLD_MAX_MS = 6000;
const LOAD_GRACE_MS = 4000;
const RELEASE_EVENTS = ['wheel', 'touchstart', 'keydown', 'pointerdown'];

/**
 * Le saut doit être INSTANTANÉ. Un `scroll-behavior:smooth` en vigueur — la
 * feuille de style n'en pose plus, mais une bibliothèque tierce peut le faire —
 * transforme la remise à zéro en animation : la position ne change pas dans la
 * foulée et le retour en haut échoue silencieusement.
 */
/**
 * On LIT la position par où on l'ÉCRIT. `window.scrollY` peut rester à zéro
 * alors que l'élément défilant a bel et bien bougé — c'est le cas sous un
 * viewport émulé, et la garde se croyait alors en haut de page: elle ne
 * corrigeait plus rien, silencieusement.
 */
function getScrollTop() {
  return (document.scrollingElement || document.documentElement).scrollTop;
}

function forceScrollTop() {
  const rootElement = document.documentElement;
  const previousInlineBehavior = rootElement.style.scrollBehavior;
  rootElement.style.scrollBehavior = 'auto';
  const scrollingElement = document.scrollingElement || rootElement;
  scrollingElement.scrollTop = 0;
  window.scrollTo(0, 0);
  rootElement.style.scrollBehavior = previousInlineBehavior;
}

export default function useScrollRestorationGuard({
  pathname,
  isNarrativePage,
}) {
  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    if (!('scrollRestoration' in window.history)) return undefined;

    if (!isNarrativePage) {
      window.history.scrollRestoration = 'auto';
      return undefined;
    }

    // Deep-link de revue (?p=0.62) : il vise délibérément une progression
    // précise, la garde le ramènerait en haut aussitôt.
    const isReviewDeepLink = new URL(window.location.href).searchParams.has(
      'p'
    );
    if (isReviewDeepLink) return undefined;

    /* ScrollTrigger repose lui-même `scrollRestoration` à la valeur qu'il a
       relevée au chargement de son script — c'est-à-dire avant nous, donc
       'auto' — à la fin de CHAQUE rafraîchissement. On réaffirme donc le
       réglage au lieu de le poser une fois pour toutes. */
    const keepManual = () => {
      window.history.scrollRestoration = 'manual';
    };

    const abortController = new AbortController();
    const listenerOptions = {
      signal: abortController.signal,
      passive: true,
    };

    let isHolding = true;
    let holdIntervalId = 0;
    let releaseTimerId = 0;
    let loadGraceTimerId = 0;

    /* La restauration native n'arrive pas à un instant unique et n'émet aucun
       événement `scroll` : le navigateur repositionne la page plusieurs
       centaines de millisecondes après le `load`. On surveille donc le haut de
       page pendant une courte fenêtre. */
    const holdTop = () => {
      if (!isHolding) return;
      keepManual();
      if (getScrollTop()) forceScrollTop();
    };

    const release = () => {
      if (!isHolding) return;
      isHolding = false;
      window.clearInterval(holdIntervalId);
      window.clearTimeout(releaseTimerId);
      window.clearTimeout(loadGraceTimerId);
    };

    // Le geste précède toujours le défilement qu'il provoque : on rend la main
    // à l'usager dès le premier, sans jamais lui reprendre.
    RELEASE_EVENTS.forEach((eventName) =>
      window.addEventListener(eventName, release, {
        ...listenerOptions,
        once: true,
      })
    );
    window.addEventListener('scroll', holdTop, listenerOptions);
    window.addEventListener(
      'load',
      () => {
        holdTop();
        loadGraceTimerId = window.setTimeout(release, LOAD_GRACE_MS);
      },
      listenerOptions
    );
    // Retour depuis le cache de navigation : aucun `load` n'est émis.
    window.addEventListener(
      'pageshow',
      (event) => {
        if (event.persisted) forceScrollTop();
      },
      listenerOptions
    );

    keepManual();
    forceScrollTop();
    holdIntervalId = window.setInterval(holdTop, HOLD_POLL_MS);
    releaseTimerId = window.setTimeout(release, HOLD_MAX_MS);

    return () => {
      release();
      abortController.abort();
    };
  }, [pathname, isNarrativePage]);
}
