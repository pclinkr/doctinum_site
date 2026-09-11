'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CustomEase } from 'gsap/CustomEase';
import { SplitText } from 'gsap/SplitText';
import {
  BLOCKS,
  ENTER_FROM,
  FRAMING,
  ROWS,
  SILK,
  STACKS,
  TIMING,
} from '../constants/homeStory';

/**
 * Chorégraphie de la scène d'accueil.
 *
 * Portée depuis un script autonome. La CHORÉGRAPHIE est reprise telle quelle —
 * elle est éprouvée, et une vingtaine de pièges documentés y sont déjà payés.
 * Ce qui a changé, c'est la PLOMBERIE: plus de globaux ni de construction de
 * DOM, tout est requêté sous la racine passée en paramètre, et tout est
 * démonté proprement à la sortie.
 *
 * Le démontage n'est pas une précaution de style: en navigation client, un
 * `gsap.ticker.add` ou un ScrollTrigger laissés derrière continuent de tourner
 * sur les pages suivantes. `gsap.context()` en tue l'essentiel d'un seul
 * appel, et restitue au passage les styles inline que GSAP a écrits.
 */
/* Aucune dépendance en dehors de la ref. `onNavigate` avait été passé ici sans
   jamais y servir — les boutons l'appellent depuis le JSX — et sa présence
   dans le tableau de dépendances suffisait à tout casser: LocaleShell le
   recrée à chaque rendu, donc l'effet se démontait et se remontait à CHAQUE
   événement de défilement, et l'intro rejouait par-dessus le récit. */
export default function useHomeStoryMotion(rootRef) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    gsap.registerPlugin(ScrollTrigger, CustomEase, SplitText);

    /* Courbes signature. Les eases « back » rebondissent et font cheap; on
       veut une décélération franche, proche d'un mouvement de caméra. */
    CustomEase.create('doct', 'M0,0 C0.14,0.02 0,1 1,1'); // entrées de contenu
    CustomEase.create('veil', 'M0,0 C0.40,0 0.10,1 1,1'); // fondus de décor
    CustomEase.create('push', 'M0,0 C0.30,0 0.12,1 1,1'); // poussées de caméra

    const sel = (selector) => root.querySelector(selector);
    const selAll = (selector) => Array.from(root.querySelectorAll(selector));

    const viewport = sel('[data-viewport]');
    const stage = sel('[data-stage]');
    const uiLayer = sel('[data-ui]');
    const cam = sel('[data-cam]');
    const statEl = sel('[data-stat]');
    const statValueEl = sel('[data-stat-value]');
    const railButtons = selAll('[data-rail-step]');
    if (!viewport || !stage || !uiLayer || !cam) return undefined;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    /* En développement, React monte, démonte puis remonte chaque effet. Les
       rappels de `document.fonts.ready` du PREMIER montage se réveillaient
       après son démontage et lançaient une seconde intro sur le DOM du second
       — deux séquences en temps réel se disputant les mêmes éléments. */
    let cancelled = false;

    /* Les nœuds ne sont plus CRÉÉS ici: ils sont rendus par le serveur et on
       se contente de les retrouver. C'est ce qui rend le contenu indexable. */
    const node = {};
    const slot = {};
    BLOCKS.forEach((block) => {
      node[block.k] = sel(`[data-block="${block.k}"]`);
      slot[block.k] = sel(`[data-slot="${block.k}"]`);
    });
    const knownBlocks = BLOCKS.filter(
      (block) => node[block.k] && slot[block.k]
    );

    const TOTAL = TIMING.total;
    const ACTS = TIMING.acts.map((act, index) => ({
      n: String(index).padStart(2, '0'),
      t: act.t,
      end: act.end,
    }));

    let isPortrait = null;
    let uiHeight = 1080;
    let currentTime = 0;
    let framedAt = null;
    const isCompact = () => root.classList.contains('is-compact');

    /* ------------------------------------------------ repères et échelle -- */
    function fit() {
      const w = viewport.clientWidth;
      const h = viewport.clientHeight;
      if (!w || !h) return;

      const contain = Math.min(w / 1920, h / 1080); // rien n'est rogné
      const cover = Math.max(w / 1920, h / 1080); // les décors atteignent les bords
      stage.style.setProperty('--fit', contain);
      stage.style.setProperty('--ox', `${(w - 1920 * contain) / 2}px`);
      stage.style.setProperty('--oy', `${(h - 1080 * contain) / 2}px`);
      stage.style.setProperty('--cover', cover / contain);

      /* Palier intermédiaire calé sur l'ÉCHELLE et non sur une largeur: c'est
         elle qui décide de la lisibilité, et elle dépend des deux dimensions.
         24 px de la maquette valent 12 px réels à une échelle de 0,52. */
      const portrait = w / h < 0.95;
      root.classList.toggle('is-compact', !portrait && contain < 0.66);

      /* La couche d'interface prend la HAUTEUR de la fenêtre. Enfermée dans un
         cadre 16:9 centré, elle laissait jusqu'à un quart de la hauteur mort
         en haut et en bas pendant que ses blocs se tassaient au milieu. */
      const uw = portrait ? 1080 : 1920;
      const uh = portrait ? 1920 : Math.max(1080, Math.round((1920 * h) / w));
      uiHeight = uh;
      const ufit = Math.min(w / uw, h / uh);
      uiLayer.style.setProperty('--uiw', `${uw}px`);
      uiLayer.style.setProperty('--uih', `${uh}px`);
      uiLayer.style.setProperty('--ufit', ufit);
      const uoy = (h - uh * ufit) / 2;
      uiLayer.style.setProperty('--uox', `${(w - uw * ufit) / 2}px`);
      uiLayer.style.setProperty('--uoy', `${uoy}px`);

      /* Le corps de texte COMPENSE l'échelle au lieu de la subir: sous le
         palier, `--tk` grandit exactement de ce que l'échelle perd, et la
         taille RÉELLE du texte des blocs ne bouge plus (~17,8 px). Sans cela
         elle décroissait avec la fenêtre et devenait illisible bien avant le
         passage en portrait. Plafond réglé sur la scène la plus dense — les
         cinq missions de Clara: au-delà, leur pile déborde la hauteur. */
      const TK_FROM = 0.74;
      const TK_MAX = 1.45;
      uiLayer.style.setProperty(
        '--tk',
        portrait ? 1 : Math.min(TK_MAX, Math.max(1, TK_FROM / ufit)).toFixed(3)
      );

      /* Les titres s'ancrent à la FENÊTRE, pas au repère. Le repère est centré
         verticalement: quand la fenêtre rétrécit, son décalage haut croît deux
         fois plus vite que sa hauteur ne diminue, et les titres descendaient.
         On vise une distance en pixels réels, plancher sous la barre. */
      const wantTop = Math.max(118, 212 * ufit);
      uiLayer.style.setProperty('--top-anchor', `${(wantTop - uoy) / ufit}px`);

      if (portrait !== isPortrait) {
        isPortrait = portrait;
        root.classList.toggle('is-portrait', portrait);
      }

      /* Reposer la mise en page à CHAQUE ajustement, pas seulement au
         basculement d'orientation: la largeur d'un bloc dépend de `--tk` et du
         palier compact, qui changent en cours de redimensionnement. Sans cela
         les positions restaient calculées sur les largeurs précédentes et les
         blocs se chevauchaient. */
      layout();
      framedAt = null;
      frame(currentTime);
    }

    /* Cadrage par scène. En portrait la fenêtre ne montre qu'une bande
       centrale étroite du décor: un sujet placé à droite en sort. */
    function frame(time) {
      let bias = 0;
      FRAMING.forEach((entry) => {
        if (time >= entry.at) bias = entry.bias;
      });
      const value = isPortrait ? `${bias}%` : '0%';
      if (value === framedAt) return;
      framedAt = value;
      stage.style.setProperty('--decor-x', value);
    }

    /* ------------------------------------------------------ mise en page -- */
    function layout() {
      // Largeurs d'abord: la mesure de hauteur en dépend.
      knownBlocks.forEach((block) => {
        const geometry =
          isPortrait && block.p ? block.p : [block.x, block.y, block.w];
        // En compact la largeur vient du contenu: on n'en impose aucune,
        // sinon le texte agrandi passerait à la ligne pour rien.
        node[block.k].style.width = isCompact() ? '' : `${geometry[2]}px`;
        if (!isPortrait) {
          slot[block.k].style.left = `${geometry[0]}px`;
          /* Rapportés à la hauteur réelle du repère, les blocs libres suivent
             l'allongement de la fenêtre au lieu de rester agglutinés sous le
             titre. Le facteur descend ET écarte. */
          slot[block.k].style.top = `${Math.round(
            uiHeight * (geometry[1] / 1080) * (isCompact() ? 1.08 : 1)
          )}px`;
        }
      });

      /* Les rangées se calculent depuis les largeurs MESURÉES: des centres
         figés à la main finissent toujours par se chevaucher quand un libellé
         s'allonge, et la longueur dépend de la langue. */
      if (!isPortrait) {
        ROWS.forEach((row) => {
          const keys = row.keys.filter((key) => node[key]);
          if (keys.length === 0) return;
          const widths = keys.map((key) => node[key].offsetWidth);
          const heights = keys.map((key) => node[key].offsetHeight);
          const gapX = isCompact() ? row.gap + 8 : row.gap;
          /* Le décalage alterné ouvre et ferme de `jitter` de part et d'autre:
             le pas entre deux lignes doit l'absorber, sinon la première de la
             ligne suivante remonte dans la précédente. */
          const jitter = isCompact() ? 26 : 0;
          const gapY = 40 + jitter;
          /* Une rangée qui ne tient pas se REPLIE au lieu de se tasser: ses
             blocs finissaient collés et le texte passait sous son voisin. */
          const wide = isCompact() ? 1620 : 1700;

          const lines = [];
          let current = [];
          let currentWidth = 0;
          keys.forEach((key, index) => {
            const added = (current.length ? gapX : 0) + widths[index];
            if (current.length && currentWidth + added > wide) {
              lines.push(current);
              current = [];
              currentWidth = 0;
            }
            current.push(index);
            currentWidth += (current.length > 1 ? gapX : 0) + widths[index];
          });
          if (current.length) lines.push(current);

          const lineHeights = lines.map((line) =>
            Math.max(...line.map((index) => heights[index]))
          );
          const totalHeight =
            lineHeights.reduce((sum, value) => sum + value, 0) +
            gapY * (lines.length - 1);
          let y = uiHeight * row.k - totalHeight / 2;

          lines.forEach((line, lineIndex) => {
            const total =
              line.reduce((sum, index) => sum + widths[index], 0) +
              gapX * (line.length - 1);
            let x = 960 - total / 2;
            line.forEach((index, position) => {
              // Rien n'oblige les blocs à s'aligner au cordeau, et la cascade
              // se lit mieux qu'une barre continue.
              const offset = position % 2 ? jitter : -jitter;
              const target = slot[keys[index]];
              target.style.left = `${Math.round(x + widths[index] / 2)}px`;
              target.style.top = `${Math.round(
                y + lineHeights[lineIndex] / 2 + offset
              )}px`;
              x += widths[index] + gapX;
            });
            y += lineHeights[lineIndex] + gapY;
          });
        });
      }

      if (isPortrait) {
        STACKS.forEach((stack) => {
          const list = knownBlocks.filter((block) => block.g === stack.g);
          if (list.length === 0) return;
          // offsetHeight est en unités du repère: la mise à l'échelle de la
          // couche par un ancêtre ne l'affecte pas.
          const heights = list.map((block) => node[block.k].offsetHeight);
          const total =
            heights.reduce((sum, value) => sum + value, 0) +
            stack.gap * (list.length - 1);
          let y = stack.cy - total / 2;
          list.forEach((block, index) => {
            slot[block.k].style.left = `${block.p[0]}px`;
            slot[block.k].style.top = `${Math.round(y + heights[index] / 2)}px`; // le bloc est centré sur son ancre
            y += heights[index] + stack.gap;
          });
        });
      }

      /* Compteur: en compact il descend sous le titre agrandi et s'aligne à
         gauche sur lui — le bloc étant centré sur son ancre, l'ancre vaut
         `bord gauche du titre + demi-largeur`. */
      if (statEl) {
        const position = isPortrait
          ? [540, 880]
          : [
              isCompact() ? 364 : 337,
              Math.round(uiHeight * (isCompact() ? 0.56 : 0.62)),
            ];
        statEl.style.left = `${position[0]}px`;
        statEl.style.top = `${position[1]}px`;
      }
    }

    /* ------------------------------------------------------------ voiles -- */
    const silkPaths = selAll('[data-silk] path');
    const env = { spread: 0.85 };
    const drawSilk = (time) => {
      const W = 1920;
      const H = 1080;
      const N = 30;
      SILK.forEach((band, index) => {
        if (!silkPaths[index]) return;
        const amplitude = band.amp * env.spread;
        const top = [];
        const bottom = [];
        for (let i = 0; i <= N; i += 1) {
          const u = i / N;
          const x = u * W;
          const taper = Math.pow(Math.sin(Math.PI * u), 0.7);
          const y =
            H * band.cy +
            H *
              amplitude *
              Math.sin(u * Math.PI * 2 * band.f + band.ph + time * band.sp) +
            H *
              amplitude *
              0.42 *
              Math.sin(
                u * Math.PI * 2 * band.f * 1.9 - time * band.sp * 1.5 + band.ph
              );
          top.push(
            `${x.toFixed(1)} ${(y - H * band.th * taper * 0.5).toFixed(1)}`
          );
          bottom.push(
            `${x.toFixed(1)} ${(y + H * band.th * taper * 0.5).toFixed(1)}`
          );
        }
        silkPaths[index].setAttribute(
          'd',
          `M${top.join('L')}L${bottom.reverse().join('L')}Z`
        );
      });
    };

    /* ============================================ montage de la timeline == */
    let timeline = null;
    let intro = null;
    let countTween = null;
    const counter = { value: 0 };
    /* La valeur vient de la locale, portée par l'élément: elle faisait partie
       des textes traduisibles et retombait ici sur un 10 codé en dur. */
    const statValue = Number(statEl?.dataset.statTarget) || 10;

    /* Le ticker est GLOBAL: il ne fait pas partie du contexte GSAP et
       survivrait à la page. Il est donc armé et désarmé à la main, hors du
       contexte — s'y référer depuis l'intérieur reviendrait à lire `context`
       avant la fin de son initialisation. */
    drawSilk(0);
    const tickSilk = () => drawSilk(gsap.ticker.time);
    if (!prefersReducedMotion) gsap.ticker.add(tickSilk);

    const context = gsap.context(() => {
      /* ------------------------------------------ boucles ambiantes ------ */
      if (!prefersReducedMotion) {
        gsap.to('[data-orb-float]', {
          y: 11,
          duration: 3.6,
          yoyo: true,
          repeat: -1,
          ease: 'sine.inOut',
        });
        gsap.to('.clara-ring', {
          scale: 1.22,
          opacity: 0,
          duration: 2.8,
          repeat: -1,
          ease: 'power1.out',
          stagger: 0.9,
          startAt: { scale: 0.92, opacity: 0.34 },
        });
      }

      /* ------------------------------------------------ états initiaux --- */
      gsap.set('.blk, .stat', {
        xPercent: -50,
        yPercent: -50,
        autoAlpha: 0,
        scale: 0.9,
        filter: 'blur(8px)',
      });
      gsap.set('[data-finale]', { autoAlpha: 0 });
      knownBlocks.forEach((block) =>
        gsap.set(node[block.k], { x: 0, y: 0, rotation: block.tilt || 0 })
      );
      gsap.set(cam, {
        scale: 1.05,
        x: 0,
        y: 34,
        z: 0,
        rotationY: 0,
        rotationX: 0,
        transformOrigin: '50% 50%',
      });
      gsap.set('[data-set="office"]', { autoAlpha: 1 });
      gsap.set(['[data-set="waiting"]', '[data-set="consult"]'], {
        autoAlpha: 0,
      });
      gsap.set('[data-scrim]', { autoAlpha: 0 });
      gsap.set('.act', { autoAlpha: 0, y: 26 });
      gsap.set('.clara-ring', { autoAlpha: 0 });
      // la sphère commence petite et haute, en retrait derrière l'accueil
      gsap.set('[data-orb-slot]', {
        x: 0,
        y: 0,
        scale: 0.55,
        autoAlpha: 0,
        transformOrigin: '50% 50%',
      });

      fit();
      // Les polices web modifient le nombre de lignes: on repose la pile une
      // fois qu'elles sont réellement chargées.
      if (document.fonts?.ready) {
        document.fonts.ready.then(() => {
          if (!cancelled) layout();
        });
      }

      timeline = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: root,
          start: 'top top',
          end: 'bottom bottom',
          scrub: prefersReducedMotion ? true : TIMING.scrub,
          onUpdate: (self) => hud(self.progress),
        },
      });

      /* --- Transitions de décor ---------------------------------------
         La photo affichée disparaît en simple fondu, sans échelle: c'est elle
         qu'on quitte, pas elle qui recule. La suivante arrive en zoom arrière,
         ses DEUX couches animées à l'identique pour rester superposées. */
      const roomChange = (room, outLayers, inLayers, near) => {
        if (outLayers) {
          timeline.to(
            outLayers,
            {
              autoAlpha: 0,
              duration: TIMING.roomOutDur,
              ease: 'veil',
            },
            room.at
          );
        }
        if (inLayers) {
          timeline.fromTo(
            inLayers,
            { autoAlpha: 0, scale: room.zoomFrom },
            { autoAlpha: 1, scale: 1, duration: room.inDur, ease: 'veil' },
            room.at + 1.0
          );
        }
        timeline.to(
          cam,
          { ...near, duration: TIMING.camMoveDur, ease: 'push' },
          room.at + 0.8
        );
      };

      /* fromTo explicite: au premier rendu la photo est encore masquée par
         l'initialisation, un `to` enregistrerait 0 comme valeur de départ et
         n'animerait rien. `immediateRender:false` l'empêche de forcer l'état
         à t=0. */
      timeline
        .fromTo(
          '[data-full="office"]',
          { autoAlpha: 1 },
          {
            autoAlpha: 0,
            duration: TIMING.heroDissolve.dur,
            ease: 'veil',
            immediateRender: false,
          },
          TIMING.heroDissolve.at
        )
        // Le glissement ne démarre qu'APRÈS la dissolution, et partage la
        // durée et la courbe du mouvement de caméra: un seul geste, pas deux.
        .to(
          '[data-set="office"]',
          {
            x: TIMING.heroDissolve.shiftX,
            duration: TIMING.heroDissolve.moveDur,
            ease: 'push',
          },
          TIMING.heroDissolve.move
        );

      /* La pièce d'accueil n'était amenée QUE par l'intro, qui joue en temps
         réel: un saut direct vers l'acte 01 posait le titre sur un fond vide.
         Ce repère rend le décor autonome sans écraser le fondu d'ouverture. */
      timeline.set(
        ['[data-full="office"]', '[data-set="office"]'],
        { autoAlpha: 1 },
        TIMING.intro.roomIn + TIMING.intro.roomInDur
      );

      // Acte 01: poussée douce vers le comptoir.
      timeline.to(
        cam,
        {
          scale: 1.12,
          x: -175,
          y: 18,
          z: 50,
          rotationY: -2,
          rotationX: -0.8,
          duration: TIMING.camera.act1Dur,
          ease: 'push',
        },
        TIMING.camera.act1
      );

      roomChange(
        TIMING.rooms[0],
        ['[data-set="office"]', '[data-full="office"]'],
        ['[data-set="waiting"]', '[data-full="waiting"]'],
        { scale: 1.05, x: 0, y: 24, z: 0, rotationY: 1.6, rotationX: 0.8 }
      );
      timeline.to(
        '[data-full="waiting"]',
        {
          autoAlpha: 0,
          duration: TIMING.dissolveDur,
          ease: 'veil',
        },
        TIMING.rooms[0].dissolve
      );

      // La salle d'attente cède au cabinet: le temps administratif.
      roomChange(
        TIMING.rooms[1],
        ['[data-set="waiting"]'],
        ['[data-set="admin"]', '[data-full="admin"]'],
        { scale: 1.09, x: -70, y: 14, z: 30, rotationY: -1.8, rotationX: 0.5 }
      );
      timeline.to(
        '[data-full="admin"]',
        {
          autoAlpha: 0,
          duration: TIMING.dissolveDur,
          ease: 'veil',
        },
        TIMING.rooms[1].dissolve
      );

      roomChange(TIMING.rooms[2], ['[data-set="admin"]'], null, {
        scale: 1.02,
        x: 0,
        y: 0,
        z: 0,
        rotationY: 0,
        rotationX: 0,
      });

      roomChange(
        TIMING.rooms[3],
        null,
        ['[data-set="consult"]', '[data-full="consult"]'],
        { scale: 1.06, x: 0, y: 20, z: 0, rotationY: -1.6, rotationX: 0 }
      );
      timeline.to(
        '[data-full="consult"]',
        {
          autoAlpha: 0,
          duration: TIMING.dissolveDur,
          ease: 'veil',
        },
        TIMING.rooms[3].dissolve
      );

      // Retour à l'accueil: le même comptoir qu'à l'acte 01, mais apaisé.
      roomChange(
        TIMING.rooms[4],
        ['[data-set="consult"]'],
        ['[data-set="serene"]', '[data-full="serene"]'],
        { scale: 1.07, x: -40, y: 16, z: 24, rotationY: 1.4, rotationX: 0.4 }
      );
      timeline
        .to(
          '[data-full="serene"]',
          { autoAlpha: 0, duration: TIMING.dissolveDur, ease: 'veil' },
          TIMING.rooms[4].dissolve
        )
        .to(
          '[data-set="serene"]',
          { autoAlpha: 0, duration: 1.4, ease: 'veil' },
          TIMING.rooms[4].out
        );

      timeline.to(
        cam,
        {
          scale: 0.88,
          x: 0,
          y: 0,
          z: 0,
          rotationY: 0,
          duration: TIMING.camera.lastDur,
          ease: 'push',
        },
        TIMING.camera.last
      );

      // Voile ivoire: lisibilité des textes sur les photos plein cadre.
      TIMING.scrim.forEach((step) =>
        timeline.to(
          '[data-scrim]',
          { autoAlpha: step.v, duration: 1.6, ease: 'veil' },
          step.at
        )
      );

      /* Le hero et le repère de défilement sont amenés à l'écran par l'INTRO,
         qui joue en temps réel; un `to` enregistre sa valeur de départ au
         premier rendu, et si ce rendu tombe avant que l'intro n'ait rien
         peint, il retient 0 et n'anime plus rien. */
      timeline
        .fromTo(
          '[data-hero]',
          { autoAlpha: 1, y: 0, filter: 'blur(0px)' },
          {
            autoAlpha: 0,
            y: -54,
            filter: 'blur(10px)',
            duration: 1.5,
            ease: 'power2.in',
            immediateRender: false,
          },
          3.6
        )
        .fromTo(
          '[data-cue]',
          { autoAlpha: 1 },
          {
            autoAlpha: 0,
            duration: 0.8,
            ease: 'power2.in',
            immediateRender: false,
          },
          3.4
        );

      // Titres: sous masque, toujours après la dissolution du décor.
      selAll('.act').forEach((actEl, index) => {
        const heading = actEl.querySelector('h2');
        if (!heading) return;
        gsap.set(actEl, { autoAlpha: 1, y: 0 });
        gsap.set(heading, { autoAlpha: 0 });
        timeline
          .fromTo(
            heading,
            { autoAlpha: 0, clipPath: 'inset(-10% -4% 104% -4%)', y: 24 },
            {
              autoAlpha: 1,
              clipPath: 'inset(-10% -4% -16% -4%)',
              y: 0,
              duration: TIMING.titleInDur,
              ease: 'doct',
            },
            TIMING.titles[index]
          )
          .to(
            heading,
            {
              autoAlpha: 0,
              y: -26,
              filter: 'blur(6px)',
              duration: TIMING.titleOutDur,
              ease: 'power2.in',
            },
            TIMING.titleOut[index]
          );
      });

      // La sphère n'existe qu'à partir de l'acte 03.
      timeline
        .to(
          '[data-orb-slot]',
          {
            y: 30,
            scale: 0.74,
            autoAlpha: 1,
            duration: TIMING.orb.inDur,
            ease: 'doct',
          },
          TIMING.orb.in
        )
        .to('.clara-ring', { autoAlpha: 1, duration: 1.3 }, TIMING.orb.rings)
        .to(
          '[data-orb-core]',
          { opacity: 0.6, duration: 1.9, ease: 'power1.out' },
          TIMING.orb.glow
        )
        .to(
          '[data-orb-halo]',
          { scale: 1.12, opacity: 1, duration: 1.9, ease: 'power1.out' },
          TIMING.orb.glow
        )
        .to(
          '[data-orb-slot]',
          { scale: 0.46, autoAlpha: 0, duration: 1.9, ease: 'veil' },
          TIMING.orb.out
        )
        .to('.clara-ring', { autoAlpha: 0, duration: 1.3 }, TIMING.orb.out)
        .to(
          '[data-orb-slot]',
          {
            y: -190,
            scale: 0.62,
            autoAlpha: 1,
            duration: TIMING.orb.backDur,
            ease: 'doct',
          },
          TIMING.orb.back
        )
        .to(
          '.clara-ring',
          { autoAlpha: 1, duration: 1.5 },
          TIMING.orb.back + 0.8
        );

      timeline
        .to(
          env,
          { spread: 1.25, duration: 9, ease: 'power1.inOut' },
          TIMING.orb.in
        )
        .to(
          env,
          { spread: 0.95, duration: 6, ease: 'power1.inOut' },
          TIMING.rooms[3].at
        );

      /* ------------------------------------------------------- blocs ----- */
      knownBlocks.forEach((block) => {
        const element = node[block.k];
        const direction = ENTER_FROM[block.from || 'up'];
        const tilt = block.tilt || 0;
        timeline.fromTo(
          element,
          {
            x: direction.x || 0,
            y: direction.y || 0,
            autoAlpha: 0,
            scale: 0.94,
            rotation: tilt + (direction.rotation || 0),
            filter: 'blur(12px)',
          },
          {
            x: 0,
            y: 0,
            autoAlpha: 1,
            scale: 1,
            rotation: tilt,
            filter: 'blur(0px)',
            duration: block.dur || TIMING.blockInDur,
            ease: 'expo.out',
          },
          block.at
        );

        const out = block.out || TIMING.actOut[block.act];
        timeline.to(
          element,
          {
            autoAlpha: 0,
            y: -22,
            scale: 0.97,
            filter: 'blur(9px)',
            duration: TIMING.blockOutDur,
            ease: 'power2.in',
          },
          out
        );

        // La dérive lente joue sur le SLOT, pas sur le bloc: elle ne se
        // dispute donc jamais les mêmes propriétés que l'entrée et la sortie.
        if (block.act === 2 && !prefersReducedMotion) {
          gsap.to(slot[block.k], {
            x: gsap.utils.random(-24, 24),
            y: gsap.utils.random(-20, 20),
            duration: gsap.utils.random(6, 9),
            yoyo: true,
            repeat: -1,
            ease: 'sine.inOut',
            delay: block.at,
          });
        }
      });

      /* Le compteur n'est PAS scrubbé: c'est un composant autonome. Le
         défilement ne commande que son entrée et sa sortie; entre les deux il
         déroule ses dix minutes en temps réel. Attaché à la timeline, il
         repartait et s'arrêtait au moindre geste — un chiffre qui hoquette au
         rythme du trackpad. */
      if (statEl) {
        timeline
          .to(
            statEl,
            {
              autoAlpha: 1,
              scale: 1,
              filter: 'blur(0px)',
              duration: 1.5,
              ease: 'doct',
            },
            TIMING.stat.in
          )
          .to(
            statEl,
            {
              autoAlpha: 0,
              scale: 0.94,
              filter: 'blur(6px)',
              duration: 0.9,
              ease: 'power2.in',
            },
            TIMING.stat.out
          );
      }

      // Le finale s'écrit élément par élément plutôt que d'apparaître d'un bloc.
      gsap.set('[data-finale]', { autoAlpha: 1, scale: 1 });
      gsap.set(
        '[data-finale] h2, [data-finale] p, [data-finale] .actions, [data-finale] .badges li',
        { autoAlpha: 0 }
      );
      const K = TIMING.finale;
      timeline
        .fromTo(
          '[data-finale] h2',
          { autoAlpha: 0, y: 34, filter: 'blur(10px)' },
          {
            autoAlpha: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 1.5,
            ease: 'expo.out',
          },
          K.first
        )
        .fromTo(
          '[data-finale] p',
          { autoAlpha: 0, y: 22 },
          { autoAlpha: 1, y: 0, duration: 1.1, ease: 'expo.out' },
          K.first + K.stagger * 2
        )
        .fromTo(
          '[data-finale] .actions',
          { autoAlpha: 0, y: 24 },
          { autoAlpha: 1, y: 0, duration: 1.1, ease: 'expo.out' },
          K.first + K.stagger * 4
        )
        .fromTo(
          '[data-finale] .badges li',
          { autoAlpha: 0, y: 18 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            stagger: K.stagger,
            ease: 'expo.out',
          },
          K.first + K.stagger * 6
        );

      /* La timeline doit durer EXACTEMENT `total`. Sa durée naturelle s'arrête
         au dernier tween (~133,6 s), or `hud` convertit la progression en
         secondes avec `TIMING.total` (136): les deux échelles divergeaient de
         1,8 %, les repères du rail tombaient tous un peu trop tôt, et les
         deux dernières secondes — la fin du finale — restaient hors d'atteinte
         du défilement. Ce repère vide cale la durée sur le minutage déclaré. */
      timeline.set({}, {}, TIMING.total);
    }, root);

    /* ================================================ HUD, rail, Clara == */
    const orbEl = sel('[data-orb]');
    const claraVideo = sel('[data-orb-video]');
    const claraButton = sel('[data-orb-play]');
    let claraLive = null;

    const claraStop = () => {
      claraVideo?.pause();
      orbEl?.classList.remove('playing');
    };
    const claraToggle = () => {
      if (!claraLive || !claraVideo) return;
      if (claraVideo.paused) {
        claraVideo.muted = false;
        claraVideo
          .play()
          .then(() => orbEl?.classList.add('playing'))
          .catch(claraStop);
      } else {
        claraStop();
      }
    };
    /* La bulle n'est cliquable que sur la scène finale: ailleurs elle traverse
       la narration et ne doit rien intercepter. */
    const claraArm = (on) => {
      if (on === claraLive) return;
      claraLive = on;
      orbEl?.classList.toggle('live', on);
      if (claraButton) claraButton.hidden = !on;
      if (!on) claraStop();
    };

    function runCount(on) {
      if (on === !!countTween) return;
      if (on) {
        countTween = gsap.to(counter, {
          value: statValue,
          duration: TIMING.stat.runSeconds,
          ease: TIMING.stat.runEase,
          onUpdate: () => {
            if (statValueEl)
              statValueEl.textContent = String(Math.round(counter.value));
          },
        });
      } else {
        // Retour en arrière avant l'entrée: on réarme pour la prochaine lecture.
        countTween.kill();
        countTween = null;
        counter.value = 0;
        if (statValueEl) statValueEl.textContent = '0';
      }
    }

    function hud(progress) {
      const time = progress * TOTAL;
      let index = 0;
      for (let i = 0; i < ACTS.length; i += 1) if (time >= ACTS[i].t) index = i;
      railButtons.forEach((button, i) =>
        button.setAttribute('aria-current', i === index ? 'true' : 'false')
      );
      // La sphère du finale n'a pas la même place que celle de l'acte 03: en
      // portrait elle doit remplir la bande libre entre la barre et le titre.
      const atFinale = time >= TIMING.orb.back - 0.5;
      root.classList.toggle('is-at-finale', atFinale);
      claraArm(atFinale);
      runCount(time >= TIMING.stat.count);
      /* Passé la portée de l'ouverture, l'intro n'a plus rien à dire: la
         laisser courir en temps réel la ferait repeindre par-dessus le
         défilement. */
      if (intro && intro.progress() < 1 && time > TIMING.intro.camDur)
        intro.progress(1);
      currentTime = time;
      frame(time);
    }

    const scrollToTime = (time, instant = false) => {
      // L'intro joue en temps réel et ses tweens l'emportent sur le scrub tant
      // qu'ils tournent: on la termine d'abord.
      if (intro && intro.progress() < 1) intro.progress(1);
      const trigger = timeline?.scrollTrigger;
      if (!trigger) return;
      window.scrollTo({
        top: trigger.start + (time / TOTAL) * (trigger.end - trigger.start),
        behavior: instant || prefersReducedMotion ? 'auto' : 'smooth',
      });
    };

    /* Repère de lecture d'une étape: l'instant où TOUT son contenu est en
       place, pas celui où elle commence. Amener le lecteur au début d'un acte
       le dépose devant un écran encore vide. */
    const K = TIMING.finale;
    ACTS.forEach((act, index) => {
      if (index === 0) {
        act.cue = 0;
        return;
      }
      const own = knownBlocks.filter((block) => block.act === index);
      let full;
      if (index === ACTS.length - 1) {
        const badgeCount = root.querySelectorAll(
          '[data-finale] .badges li'
        ).length;
        full =
          K.first +
          K.stagger * 6 +
          K.stagger * Math.max(0, badgeCount - 1) +
          0.9;
      } else {
        full = (TIMING.titles[index - 1] ?? act.t) + TIMING.titleInDur;
        own.forEach((block) => {
          full = Math.max(full, block.at + (block.dur || TIMING.blockInDur));
        });
        if (TIMING.stat.act === index)
          full = Math.max(full, TIMING.stat.in + 1.5);
      }
      /* Seul ce qui est ENCORE À L'ÉCRAN à cet instant borne l'attente. Un acte
         joué en deux temps voit sa première série partir bien avant l'arrivée
         de la seconde: la compter ramènerait le repère avant l'essentiel. */
      let exit = Math.min(
        act.end,
        TIMING.actOut[index] ?? act.end,
        TIMING.titleOut[index - 1] ?? act.end
      );
      own.forEach((block) => {
        if (block.out && block.out > full) exit = Math.min(exit, block.out);
      });
      act.cue = Math.max(
        act.t,
        Math.min(full + TIMING.cueSettle, exit - 0.5, act.end - 0.6)
      );
    });

    /* ------------------------------------------------------ écouteurs ---- */
    const abortController = new AbortController();
    const listenerOptions = { signal: abortController.signal };

    railButtons.forEach((button, index) =>
      button.addEventListener(
        'click',
        () => scrollToTime(ACTS[index].cue),
        listenerOptions
      )
    );
    orbEl?.addEventListener('click', claraToggle, listenerOptions);
    claraButton?.addEventListener(
      'click',
      (event) => {
        event.stopPropagation();
        claraToggle();
      },
      listenerOptions
    );
    claraVideo?.addEventListener(
      'ended',
      () => {
        claraStop();
        claraVideo.currentTime = 0;
      },
      listenerOptions
    );

    const resizeObserver = new ResizeObserver(() => {
      fit();
      ScrollTrigger.refresh();
    });
    resizeObserver.observe(viewport);

    /* ================================================== intro d'ouverture ==
       Jouée AU CHARGEMENT et non au défilement. On entre dans le cabinet: la
       pièce entière apparaît, se dissout, il ne reste que la secrétaire
       détourée sur l'ivoire. Les textes ne viennent qu'ensuite. */
    const revealScene = () => root.classList.add('is-ready');
    const revealTimerId = window.setTimeout(revealScene, 2600); // filet

    gsap.set(['[data-full="office"]', '[data-set="office"]'], { autoAlpha: 0 });
    gsap.set(['[data-hero] p', '[data-hero] .actions', '[data-cue]'], {
      autoAlpha: 0,
    });

    let splitInstance = null;
    function openIntro() {
      const K2 = TIMING.intro;
      let lines = null;
      try {
        splitInstance = new SplitText(sel('[data-hero] h1'), {
          type: 'lines',
          mask: 'lines',
        });
        lines = splitInstance.lines;
        gsap.set(lines, { yPercent: 114 });
      } catch {
        splitInstance = null;
        lines = null;
      }
      /* Repli INDISPENSABLE. `openIntro` est appelé soit sur
         `document.fonts.ready`, soit par un filet à 1,6 s — et dans ce second
         cas le découpage peut échouer. Sans ce repli, le titre restait à
         pleine opacité, sans animation, pendant que le reste de l'intro se
         jouait autour de lui: exactement le défaut signalé au premier écran. */
      if (!lines) gsap.set('[data-hero] h1', { autoAlpha: 0, y: 28 });
      revealScene();

      /* L'intro est créée après la timeline maîtresse: ses tweens gagnent sur
         le scrub tant qu'ils jouent. À la fin on réapplique l'état de scroll
         pour que la maîtresse reprenne la main sans attendre un mouvement. */
      intro = gsap.timeline({
        defaults: { ease: 'doct' },
        delay: 0.1,
        onComplete: () => {
          ScrollTrigger.update();
          /* Rendu FORCÉ. À instant égal GSAP ne repeint pas ses enfants, et
             l'intro laisse alors sa dernière valeur sur des éléments que la
             timeline possède — c'est ainsi que « faites défiler »
             réapparaissait par-dessus les scènes suivantes. */
          timeline?.render(timeline.time(), false, true);
        },
      });

      intro
        .fromTo(
          cam,
          { scale: K2.camFrom },
          { scale: K2.camTo, duration: K2.camDur, ease: 'push' },
          0
        )
        // 1 — la pièce ENTIÈRE, seule, sans titre ni voile.
        .to(
          ['[data-full="office"]', '[data-set="office"]'],
          { autoAlpha: 1, duration: K2.roomInDur, ease: 'veil' },
          K2.roomIn
        )
        // 2 — l'overlay monte: il ne cache pas le décor, il rend les titres lisibles.
        .to(
          '[data-scrim]',
          { autoAlpha: K2.scrimValue, duration: K2.scrimInDur, ease: 'veil' },
          K2.scrimIn
        );

      // 3 — les titres arrivent SUR la photo entière, qui reste en place.
      if (lines) {
        intro.to(
          lines,
          { yPercent: 0, duration: 1.2, stagger: K2.titleStagger },
          K2.title
        );
      } else {
        intro.to(
          '[data-hero] h1',
          { autoAlpha: 1, y: 0, duration: 1.1 },
          K2.title
        );
      }

      intro
        .fromTo(
          '[data-hero] p',
          { autoAlpha: 0, y: 18 },
          { autoAlpha: 1, y: 0, duration: 0.95 },
          K2.lede
        )
        .fromTo(
          '[data-hero] .actions',
          { autoAlpha: 0, y: 22 },
          { autoAlpha: 1, y: 0, duration: 0.95 },
          K2.cta
        )
        .fromTo(
          '[data-cue]',
          { autoAlpha: 0, y: 12 },
          { autoAlpha: 1, y: 0, duration: 0.8 },
          K2.cue
        );

      // Onglet en arrière-plan: requestAnimationFrame y est bridé, la séquence
      // n'avancerait pas et le hero resterait vide. On le montre d'emblée.
      if (document.hidden) intro.progress(1);
    }

    let introStartTimerId = 0;
    if (prefersReducedMotion) {
      revealScene();
      gsap.set(['[data-hero] p', '[data-hero] .actions', '[data-cue]'], {
        autoAlpha: 1,
      });
      gsap.set(['[data-set="office"]', '[data-full="office"]'], {
        autoAlpha: 1,
      });
      gsap.set('[data-scrim]', { autoAlpha: TIMING.intro.scrimValue });
    } else {
      let started = false;
      const go = () => {
        if (started || cancelled) return;
        started = true;
        openIntro();
      };
      if (document.fonts?.ready) document.fonts.ready.then(go, go);
      introStartTimerId = window.setTimeout(go, 1600);
    }

    /* Deep-link de revue: `?p=0.62` ouvre la page sur une progression précise.
       C'est l'outil avec lequel cette chorégraphie a été réglée; la garde de
       défilement l'exempte explicitement, sans quoi elle ramènerait en haut.
       `hud` est appelé SANS CONDITION: c'est lui qui pose le cadrage du décor,
       et réservé au seul cas où le défilement n'a pas suivi, il ouvrait sur la
       bonne scène avec le cadrage de l'accueil — un outil qui ment sur ce
       qu'il montre. */
    const requestedProgress = parseFloat(
      new URL(window.location.href).searchParams.get('p')
    );
    if (Number.isFinite(requestedProgress)) {
      const clamped = Math.min(1, Math.max(0, requestedProgress));
      // L'intro joue en temps réel et l'emporterait sur la position visée.
      intro?.progress(1);
      ScrollTrigger.refresh();
      // Saut INSTANTANÉ: un défilement animé n'aboutit pas toujours (onglet en
      // arrière-plan, mouvement réduit), et l'outil de revue afficherait alors
      // une autre scène que celle demandée.
      scrollToTime(clamped * TOTAL, true);
      requestAnimationFrame(() => {
        if (cancelled) return;
        const trigger = timeline?.scrollTrigger;
        if (trigger && Math.abs(trigger.progress - clamped) > 0.01) {
          timeline.progress(clamped);
        }
        hud(clamped);
      });
    }

    hud(timeline?.scrollTrigger ? timeline.scrollTrigger.progress : 0);

    /* ===================================================== démontage ===== */
    return () => {
      cancelled = true;
      window.clearTimeout(revealTimerId);
      window.clearTimeout(introStartTimerId);
      abortController.abort();
      resizeObserver.disconnect();
      gsap.ticker.remove(tickSilk);
      intro?.kill();
      countTween?.kill();
      splitInstance?.revert();
      claraStop();
      // `revert()` tue tweens, timelines et ScrollTriggers créés dans le
      // contexte, et rend les styles inline que GSAP a écrits.
      context.revert();
      // Les classes vivent sur la racine de la section, pas sur <html>: elles
      // partent avec elle. On nettoie tout de même le cas du remontage.
      root.classList.remove(
        'is-ready',
        'is-portrait',
        'is-compact',
        'is-at-finale'
      );
    };
  }, [rootRef]);
}
