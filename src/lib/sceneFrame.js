/* =========================================================================
   Mise à l'échelle du repère de scène.

   Le décor vit dans un repère fixe de 1920x1080 contenu dans la fenêtre puis
   recentré: les valeurs en pixels de la chorégraphie restent donc valables de
   l'écran de téléphone au grand écran, et rien n'est jamais rogné.

   La couche d'interface a son PROPRE repère — le même en paysage, mais
   1080x1920 en portrait — sans quoi ses textes subiraient l'échelle du décor
   et seraient réduits d'un facteur cinq sur un téléphone.

   Extrait ici parce que DEUX scènes s'en servent: le récit de l'accueil et la
   section d'invitation qui le rappelle en fin de page. Dupliqué, ce calcul
   aurait divergé au premier réglage.
   ========================================================================= */

export const SCENE_WIDTH = 1920;
export const SCENE_HEIGHT = 1080;

/* Compensation d'échelle du corps de texte: sous le palier, `--tk` grandit
   exactement de ce que l'échelle perd, et la taille RÉELLE du texte cesse de
   diminuer. Plafonné, sinon une fenêtre très étroite gonflerait les blocs au
   point de ne plus rien laisser au décor. */
const TEXT_SCALE_FROM = 0.74;
const TEXT_SCALE_MAX = 1.45;

/** Bascule en repère portrait sous ce rapport largeur/hauteur. */
export const PORTRAIT_RATIO = 0.95;

/**
 * Pose les variables de cadrage sur `stage` et `uiLayer`.
 * Retourne les mesures utiles à l'appelant, ou `null` si la scène n'a pas
 * encore de dimensions (montage, onglet masqué).
 */
export function applySceneFrame({ viewport, stage, uiLayer }) {
  if (!viewport || !stage || !uiLayer) return null;

  const width = viewport.clientWidth;
  const height = viewport.clientHeight;
  if (!width || !height) return null;

  const contain = Math.min(width / SCENE_WIDTH, height / SCENE_HEIGHT);
  const cover = Math.max(width / SCENE_WIDTH, height / SCENE_HEIGHT);
  stage.style.setProperty('--fit', contain);
  stage.style.setProperty('--ox', `${(width - SCENE_WIDTH * contain) / 2}px`);
  stage.style.setProperty('--oy', `${(height - SCENE_HEIGHT * contain) / 2}px`);
  // Le décor n'est PAS plafonné: il doit remplir la fenêtre quel que soit son
  // format, quitte à déborder largement du repère.
  stage.style.setProperty('--cover', cover / contain);

  const isPortrait = width / height < PORTRAIT_RATIO;

  /* La couche d'interface prend la HAUTEUR de la fenêtre. Enfermée dans un
     cadre 16:9 centré, elle laissait jusqu'à un quart de la hauteur mort en
     haut et en bas pendant que son contenu se tassait au milieu. */
  const uiWidth = isPortrait ? 1080 : SCENE_WIDTH;
  const uiHeight = isPortrait
    ? 1920
    : Math.max(SCENE_HEIGHT, Math.round((SCENE_WIDTH * height) / width));
  const uiFit = Math.min(width / uiWidth, height / uiHeight);
  const uiOffsetY = (height - uiHeight * uiFit) / 2;

  uiLayer.style.setProperty('--uiw', `${uiWidth}px`);
  uiLayer.style.setProperty('--uih', `${uiHeight}px`);
  uiLayer.style.setProperty('--ufit', uiFit);
  uiLayer.style.setProperty('--uox', `${(width - uiWidth * uiFit) / 2}px`);
  uiLayer.style.setProperty('--uoy', `${uiOffsetY}px`);
  uiLayer.style.setProperty(
    '--tk',
    isPortrait
      ? 1
      : Math.min(TEXT_SCALE_MAX, Math.max(1, TEXT_SCALE_FROM / uiFit)).toFixed(
          3
        )
  );

  /* Les titres s'ancrent à la FENÊTRE, pas au repère. Le repère est centré
     verticalement: quand la fenêtre rétrécit, son décalage haut croît deux
     fois plus vite que sa hauteur ne diminue, et les titres descendaient. On
     vise donc une distance en pixels réels, plancher sous la barre. */
  const wantTop = Math.max(118, 212 * uiFit);
  uiLayer.style.setProperty(
    '--top-anchor',
    `${(wantTop - uiOffsetY) / uiFit}px`
  );

  return { contain, cover, isPortrait, uiHeight, uiFit };
}

/* =========================================================================
   Voiles de soie. Le tracé dépend du temps: il est redessiné à chaque frame
   par l'appelant, qui possède son propre ticker.
   ========================================================================= */
export function drawSilkPaths(paths, bands, time, spread) {
  const W = SCENE_WIDTH;
  const H = SCENE_HEIGHT;
  const SEGMENTS = 30;

  bands.forEach((band, index) => {
    const path = paths[index];
    if (!path) return;
    const amplitude = band.amp * spread;
    const top = [];
    const bottom = [];
    for (let i = 0; i <= SEGMENTS; i += 1) {
      const u = i / SEGMENTS;
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
      top.push(`${x.toFixed(1)} ${(y - H * band.th * taper * 0.5).toFixed(1)}`);
      bottom.push(
        `${x.toFixed(1)} ${(y + H * band.th * taper * 0.5).toFixed(1)}`
      );
    }
    path.setAttribute('d', `M${top.join('L')}L${bottom.reverse().join('L')}Z`);
  });
}
