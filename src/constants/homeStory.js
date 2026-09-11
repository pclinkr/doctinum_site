/* =========================================================================
   MINUTAGE ET GÉOMÉTRIE DE LA SCÈNE D'ACCUEIL.

   Données pures: aucun accès au DOM, aucun texte. Les libellés vivent dans
   les fichiers de locale (`sections.homeStory.*`), la chorégraphie dans
   useHomeStoryMotion, le balisage dans HomeStorySection.

   Les valeurs de TIMING sont des SECONDES SYMBOLIQUES sur une timeline de 0 à
   `total`, étalée par ScrollTrigger sur la hauteur de piste: une position dans
   le défilement, pas une durée. Pour accélérer ou ralentir l'ensemble sans
   toucher à la chorégraphie, il suffit de changer `trackVh`.
   ========================================================================= */

export const TIMING = {
  total: 136,
  /* Retard du scrub : la timeline rejoint la position de défilement en ce
     temps-là. Au-delà d'une demi-seconde, un élément CHIFFRÉ continue de
     tourner après l'arrêt du geste et paraît jouer tout seul. */
  scrub: 0.4,
  trackVh: 3400, // à répercuter dans page.template.html (le build le vérifie)

  acts: [
    { t: 0, end: 6 }, // 00 accueil
    { t: 6, end: 24 }, // 01 secrétariat surchargé
    { t: 24, end: 42 }, // 02 rendez-vous non honorés
    { t: 42, end: 60 }, // 03 temps administratif
    { t: 60, end: 84 }, // 04 Clara
    { t: 84, end: 106 }, // 05 consultation
    { t: 106, end: 130 }, // 06 secrétariat apaisé
    { t: 130, end: 136 }, // 07 et vous ?
  ],

  /* Ouverture au CHARGEMENT : la pièce entière apparaît seule, l'overlay monte,
     les titres se posent dessus. La photo entière reste. */
  intro: {
    roomIn: 0.0,
    roomInDur: 1.5,
    scrimIn: 1.6,
    scrimInDur: 1.5,
    scrimValue: 0.86,
    title: 2.1,
    titleStagger: 0.1,
    lede: 3.0,
    cta: 3.3,
    cue: 3.6,
    camFrom: 1.1,
    camTo: 1.05,
    camDur: 5.2,
  },

  /* Au premier scroll : la photo entière se dissout SANS que rien ne bouge —
     le détourage doit rester parfaitement stable. Le mouvement ne vient
     qu'après, et caméra et découpe partent ensemble pour ne faire qu'un seul
     geste au lieu de deux mouvements concurrents. */
  heroDissolve: { at: 5.6, dur: 3.4, move: 9.4, moveDur: 5.2, shiftX: 104 },

  camera: { act1: 9.4, act1Dur: 5.2, last: 129.4, lastDur: 3.4 },

  /* `zoomFrom` : échelle de départ de la pièce entrante. Plus la valeur est
     grande, plus le recul est prononcé — on part serré et on s'éloigne. */
  rooms: [
    { at: 22.6, zoomFrom: 1.95, inDur: 5.4, dissolve: 28.8 }, // salle d'attente
    { at: 42.0, zoomFrom: 1.3, inDur: 4.6, dissolve: 48.4 }, // cabinet, dossier à remplir
    { at: 60.0, zoomFrom: 1.2, inDur: 3.0 }, // vers l'ivoire, pas de pièce
    { at: 83.8, zoomFrom: 1.45, inDur: 4.2, dissolve: 89.0 }, // consultation
    { at: 106.6, zoomFrom: 1.35, inDur: 4.6, dissolve: 112.6, out: 128.6 }, // accueil apaisé
  ],
  roomOutDur: 2.4,
  dissolveDur: 3.6,
  camMoveDur: 4.4,

  titles: [10.4, 32.4, 46.8, 65.0, 90.8, 111.0],
  titleInDur: 1.9,
  titleOutDur: 1.0,
  /* Marge de repos ajoutée au repère du rail : le scrub poursuit la position
     de défilement avec un retard, et une entrée « expo » finit à peine floue.
     Sans cette marge on atterrit sur le dernier bloc encore en mouvement. */
  cueSettle: 1.4,
  // Sortie propre à chaque acte : le titre part avant ses blocs, sauf à l'acte
  // 02 où il part après eux et où la salle d'attente s'efface en dernier.
  titleOut: [21.6, 41.2, 58.6, 83.0, 105.8, 128.0],

  actOut: { 1: 21.4, 2: 40.4, 3: 58.8, 4: 83.4, 5: 105.2, 6: 126.6 },
  blockInDur: 1.35,
  blockOutDur: 1.0,

  blocks: {
    call1: { at: 12.6 },
    call2: { at: 14.4 },
    call3: { at: 16.2 },
    call4: { at: 18.0 },
    inf1: { at: 34.0, out: 40.4 },
    inf2: { at: 35.4, out: 40.7 },
    inf3: { at: 36.8, out: 41.0 },
    adm1: { at: 49.6 },
    adm2: { at: 51.0 },
    adm3: { at: 52.4 },
    ctx1: { at: 66.6, out: 73.4 },
    ctx2: { at: 67.4, out: 73.7 },
    ctx3: { at: 68.2, out: 74.0 },
    cap1: { at: 74.6 },
    cap2: { at: 75.5 },
    cap3: { at: 76.4 },
    cap4: { at: 77.3 },
    cap5: { at: 78.2 },
    // Les résultats arrivent en deux temps. La première série sort, puis le
    // compteur ; la seconde n'entre qu'ensuite, en cascade rapprochée, et
    // reste cinq secondes en lecture avant de partir.
    // Première série : elle attend que le compteur ait fini de tourner. Entre
    // son entrée (73,4) et la sienne, cinq secondes de timeline où rien
    // n'arrive — la pause de lecture. `dur` allonge son apparition.
    r1: { at: 96.6, dur: 2.2, out: 104.6 },
    r2: { at: 98.0, dur: 2.2, out: 104.9 },
    r3: { at: 99.4, dur: 2.2, out: 105.2 },
    // Acte 06 : la scène d'accueil apaisée a son propre titre, la cascade peut
    // donc respirer davantage que celle qui partageait l'écran avec le compteur.
    r4: { at: 117.6, out: 126.6 },
    r5: { at: 118.6, out: 126.6 },
    r6: { at: 119.6, out: 126.6 },
  },

  orb: {
    in: 61.6,
    inDur: 3.4,
    lid: 63.6,
    rings: 64.4,
    glow: 64.4,
    out: 83.8,
    back: 129.4,
    backDur: 3.4,
  },

  /* Le voile remonte quand une photo PLEIN CADRE porte un titre, et redescend
     dès qu'elle s'est dissoute sur l'ivoire. */
  scrim: [
    { at: 25.0, v: 0.26 },
    { at: 43.6, v: 0.7 },
    /* Le voile ne redescend PAS après la dissolution de la scène 03 :
             la chevelure sombre de la patiente passe derrière le titre et le
             rend illisible. Le dégradé étant opaque à gauche, c'est justement
             là qu'il faut le garder. Il ne s'allège qu'à l'arrivée de
             l'ivoire, où plus aucune photo ne porte de texte. */
    { at: 50.0, v: 0.6 },
    { at: 60.6, v: 0.26 },
    { at: 87.0, v: 0.82 },
    { at: 106.8, v: 0.68 },
    /* Le voile reste haut pendant tout l'accueil apaisé : le titre passe
             sur le comptoir et l'écran, très clairs, et s'y perdait. */
    { at: 114.6, v: 0.58 },
    { at: 129.0, v: 0 },
  ],
  /* Le compteur doit se lire comme une conséquence du défilement : `countDur`
     est sa part de timeline (donc de scroll), et l'ease reste linéaire — une
     courbe « out » consommerait presque tout le compte dans les premiers
     pixels et le chiffre semblerait sauter directement à sa valeur finale. */
  /* Le compteur est un composant autonome : `in` et `out` sont des repères de
     défilement, mais `runSeconds` est en SECONDES RÉELLES — une fois franchi
     `count`, les dix minutes défilent d'elles-mêmes, que l'on continue de
     faire défiler ou non. */
  stat: {
    act: 5,
    in: 91.2,
    count: 91.4,
    runSeconds: 1.8,
    runEase: 'power2.out',
    out: 105.6,
  },
  finale: { in: 131.0, stagger: 0.22, first: 131.4 },
};

/* Chemin des médias. Ils étaient inlinés en data: URI parce que la CSP des
   Artifacts bloque tout média externe; servis par le site, ils redeviennent
   des fichiers — et 5,3 Mo de page redeviennent 3,9 Mo de médias mis en
   cache, chargés à la demande. */
export const ASSETS_BASE = '/assets/home-story';

/* =========================================================================
   MISE EN PAGE DES BLOCS.

   Ce tableau ne porte QUE la géométrie et l'illustration. Les minutages sont
   dans TIMING.blocks, les textes dans les locales.

   `x, y, w` sont les coordonnées paysage dans le repère 1920x1080; `p` les
   coordonnées portrait [x, y, w] dans le repère 1080x1920. `g` désigne le
   groupe d'empilement en portrait.
   ========================================================================= */
export const BLOCKS = [
  // 01 — colonne de gauche, volontairement désalignée et pivotée: c'est le
  // désordre que la surcharge provoque, pas une liste.
  {
    k: 'call1',
    act: 1,
    sm: 1,
    tilt: -1.6,
    x: 749,
    y: 523,
    w: 392,
    face: 'p1',
    g: 'call',
  },
  {
    k: 'call2',
    act: 1,
    sm: 1,
    tilt: 1.3,
    x: 850,
    y: 642,
    w: 420,
    face: 'p2',
    g: 'call',
  },
  {
    k: 'call3',
    act: 1,
    sm: 1,
    tilt: -2.4,
    x: 706,
    y: 756,
    w: 372,
    tone: 'warn',
    ico: 'phoneOff',
    g: 'call',
  },
  {
    k: 'call4',
    act: 1,
    sm: 1,
    tilt: 0.9,
    x: 825,
    y: 870,
    w: 400,
    face: 'p3',
    g: 'call',
  },
  // 02
  { k: 'inf1', act: 2, x: 541, y: 498, w: 560, ico: 'calendar', g: 'inf' },
  {
    k: 'inf2',
    act: 2,
    x: 1417,
    y: 612,
    w: 420,
    tone: 'warn',
    ico: 'bell',
    g: 'inf',
  },
  {
    k: 'inf3',
    act: 2,
    x: 770,
    y: 793,
    w: 520,
    tone: 'warn',
    ico: 'chat',
    g: 'inf',
  },
  // 03 — le temps administratif: bande basse, le praticien est à droite
  {
    k: 'adm1',
    act: 3,
    sm: 1,
    x: 0,
    y: 845,
    w: 470,
    tone: 'warn',
    ico: 'clipboard',
    g: 'adm',
  },
  {
    k: 'adm2',
    act: 3,
    sm: 1,
    x: 0,
    y: 845,
    w: 560,
    tone: 'warn',
    ico: 'folder',
    g: 'adm',
  },
  {
    k: 'adm3',
    act: 3,
    sm: 1,
    x: 0,
    y: 845,
    w: 520,
    tone: 'warn',
    ico: 'clock',
    g: 'adm',
  },
  // 04a — le contexte, avant ce qu'elle fait
  { k: 'ctx1', act: 4, sm: 1, x: 560, y: 829, w: 350, ico: 'globe', g: 'ctx' },
  {
    k: 'ctx2',
    act: 4,
    sm: 1,
    x: 960,
    y: 829,
    w: 420,
    ico: 'calendar',
    g: 'ctx',
  },
  { k: 'ctx3', act: 4, sm: 1, x: 1330, y: 829, w: 250, ico: 'clock', g: 'ctx' },
  // 04b — les cinq missions, sous la sphère et centrées
  { k: 'cap1', act: 4, sm: 1, x: 500, y: 829, w: 430, ico: 'chat', g: 'cap' },
  { k: 'cap2', act: 4, sm: 1, x: 960, y: 829, w: 460, ico: 'filter', g: 'cap' },
  {
    k: 'cap3',
    act: 4,
    sm: 1,
    x: 1420,
    y: 829,
    w: 430,
    ico: 'clipboard',
    g: 'cap',
  },
  { k: 'cap4', act: 4, sm: 1, x: 660, y: 958, w: 460, ico: 'folder', g: 'cap' },
  {
    k: 'cap5',
    act: 4,
    sm: 1,
    x: 1240,
    y: 958,
    w: 640,
    ico: 'phoneIn',
    g: 'cap',
  },
  // 05 et 06 — bande basse: le plan du bureau est neutre, aucun visage couvert
  {
    k: 'r1',
    act: 5,
    sm: 1,
    x: 450,
    y: 861,
    w: 430,
    tone: 'good',
    ico: 'info',
    g: 'rA',
  },
  {
    k: 'r2',
    act: 5,
    sm: 1,
    x: 903,
    y: 861,
    w: 300,
    tone: 'good',
    ico: 'spark',
    g: 'rA',
  },
  {
    k: 'r3',
    act: 5,
    sm: 1,
    x: 1309,
    y: 861,
    w: 470,
    tone: 'good',
    ico: 'check',
    g: 'rA',
  },
  {
    k: 'r4',
    act: 6,
    sm: 1,
    x: 450,
    y: 861,
    w: 440,
    tone: 'good',
    ico: 'trend',
    g: 'rB',
  },
  {
    k: 'r5',
    act: 6,
    sm: 1,
    x: 903,
    y: 861,
    w: 330,
    tone: 'good',
    ico: 'heart',
    g: 'rB',
  },
  {
    k: 'r6',
    act: 6,
    sm: 1,
    x: 1309,
    y: 861,
    w: 490,
    tone: 'good',
    ico: 'users',
    g: 'rB',
  },
];

/* Coordonnées portrait, tenues à part pour que le tableau ci-dessus reste
   lisible. [x, y, w] dans le repère 1080x1920. */
const PORTRAIT_POSITIONS = {
  call1: [500, 932, 880],
  call2: [586, 1104, 880],
  call3: [492, 1276, 880],
  call4: [572, 1448, 880],
  inf1: [540, 1004, 940],
  inf2: [540, 1246, 940],
  inf3: [540, 1488, 940],
  adm1: [540, 1214, 920],
  adm2: [540, 1372, 920],
  adm3: [540, 1530, 920],
  ctx1: [540, 1214, 920],
  ctx2: [540, 1372, 920],
  ctx3: [540, 1530, 920],
  cap1: [540, 1058, 920],
  cap2: [540, 1206, 920],
  cap3: [540, 1354, 920],
  cap4: [540, 1502, 920],
  cap5: [540, 1650, 920],
  r1: [540, 1206, 920],
  r2: [540, 1364, 920],
  r3: [540, 1522, 920],
  r4: [540, 1206, 920],
  r5: [540, 1364, 920],
  r6: [540, 1522, 920],
};

BLOCKS.forEach((block) => {
  block.p = PORTRAIT_POSITIONS[block.k];
  const schedule = TIMING.blocks[block.k] || {};
  block.at = schedule.at;
  block.out = schedule.out;
  block.dur = schedule.dur;
});

/* Piles portrait: point d'ancrage du groupe et écart entre deux blocs, en
   unités du repère 1080x1920. La hauteur d'un bloc dépend du nombre de lignes
   de son texte — donc de la langue: on la MESURE, on ne la suppose pas. */
export const STACKS = [
  { g: 'call', cy: 1240, gap: 34 },
  { g: 'adm', cy: 1400, gap: 34 },
  { g: 'inf', cy: 1250, gap: 40 },
  { g: 'ctx', cy: 1430, gap: 34 },
  { g: 'cap', cy: 1400, gap: 30 },
  { g: 'rA', cy: 1420, gap: 34 },
  { g: 'rB', cy: 1420, gap: 34 },
];

/* Rangées paysage. `k` est la hauteur du groupe en FRACTION du repère, dont la
   hauteur suit celle de la fenêtre: une valeur absolue héritée d'un repère de
   1080 se retrouverait plaquée en haut dès que la fenêtre s'allonge. */
export const ROWS = [
  { keys: ['adm1', 'adm2', 'adm3'], k: 0.782, gap: 36 },
  { keys: ['ctx1', 'ctx2', 'ctx3'], k: 0.768, gap: 36 },
  /* Les cinq missions étaient deux groupes calés sur deux hauteurs fixes: dès
     que l'un se repliait, il descendait dans l'autre. Un seul flux, et le
     repli s'en charge — sur grand écran il retrouve la répartition 3 + 2. */
  { keys: ['cap1', 'cap2', 'cap3', 'cap4', 'cap5'], k: 0.83, gap: 36 },
  { keys: ['r1', 'r2', 'r3'], k: 0.797, gap: 36 },
  { keys: ['r4', 'r5', 'r6'], k: 0.797, gap: 36 },
];

/* Biais de cadrage, en % de la largeur de la PHOTO — pas de l'écran. En
   portrait la fenêtre n'en montre qu'un quart environ: un point de biais y
   déplace le décor d'à peu près 4 % de la largeur visible. Positif = le décor
   glisse à droite, donc le sujet s'écarte du titre, qui occupe la moitié
   gauche. Nul en paysage, où rien n'est rogné. */
export const FRAMING = [
  { at: 0, bias: -9 }, // accueil: la secrétaire dégagée du titre
  { at: 22.6, bias: -4 }, // salle d'attente: le canapé est centré
  { at: 42.0, bias: -23 }, // cabinet: le praticien décalé vers la droite
  { at: 60.0, bias: -4 }, // ivoire, plus de photo
  { at: 83.8, bias: -29 }, // consultation: le praticien entier dans le cadre
  { at: 106.6, bias: -12 }, // accueil apaisé: la secrétaire dégagée
];

/* Entrées des blocs: chaque bloc arrive depuis une direction propre, avec une
   légère rotation qui se résorbe — plus vivant qu'une montée uniforme. */
export const ENTER_FROM = {
  left: { x: -104, rotation: -3 },
  right: { x: 104, rotation: 3 },
  up: { y: 62, rotation: 1.2 },
  down: { y: -62, rotation: -1.2 },
};

/* Voiles de soie derrière les sujets. */
export const SILK = [
  { cy: 0.46, amp: 0.085, f: 1.15, ph: 0.0, sp: 0.55, th: 0.115 },
  { cy: 0.52, amp: 0.07, f: 1.45, ph: 1.9, sp: 0.72, th: 0.075 },
  { cy: 0.41, amp: 0.1, f: 0.95, ph: 3.4, sp: 0.44, th: 0.055 },
  { cy: 0.58, amp: 0.06, f: 1.75, ph: 5.1, sp: 0.86, th: 0.04 },
  { cy: 0.36, amp: 0.055, f: 2.1, ph: 2.4, sp: 0.63, th: 0.028 },
];


/* Décors: chaque scène a sa photo complète et son détourage. Les DEUX couches
   partagent la même boîte 1920x1080 en `object-fit:cover`, c'est ce qui donne
   le recalage au pixel près — mais leurs tailles SOURCES diffèrent sur deux
   paires (2200x1200 contre 2000x1091). Les rapports ne s'écartent que de
   0,008 %, soit 0,18 px de source: invisible. On déclare néanmoins les
   dimensions RÉELLES de chaque fichier, un attribut qui ment sur son image
   n'ayant jamais rendu service à personne.

   `alt` renvoie à une clé de locale: une description d'image se traduit. */
export const SCENES = [
  {
    id: 'office',
    full: 'secretaryFull',
    fullSize: [2000, 1091],
    cut: 'secretary',
    cutSize: [2200, 1200],
  },
  {
    id: 'waiting',
    full: 'waitingFull',
    fullSize: [2000, 1091],
    cut: 'waiting',
    cutSize: [2200, 1200],
  },
  {
    id: 'admin',
    full: 'adminFull',
    fullSize: [2000, 1091],
    cut: 'admin',
    cutSize: [2000, 1091],
  },
  {
    id: 'consult',
    full: 'doctorFull',
    fullSize: [2000, 1091],
    cut: 'doctor',
    cutSize: [2000, 1091],
  },
  {
    id: 'serene',
    full: 'sereneFull',
    fullSize: [2000, 1091],
    cut: 'serene',
    cutSize: [2000, 1091],
  },
];
