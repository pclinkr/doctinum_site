/* =========================================================================
   Textes de la scène d'accueil animée.

   Tout ce qui se lit à l'écran passe par ici et par le JSX: le balisage est
   rendu par le serveur, texte compris. Dans la version d'origine, les vingt-
   quatre blocs étaient créés en JavaScript et le HTML livré ne contenait rien
   d'indexable — c'est pourtant là que vivent les mots-clés de la page.
   ========================================================================= */
const frHomeStory = {
  hero: {
    titleBefore: "L'assistant IA qui transforme le contact patient en ",
    titleAccent: 'réputation',
    lede: 'Accueille les patients, filtre les motifs, collecte les informations et prépare le dossier avant même que la consultation commence, même quand le cabinet est fermé.',
    cta: 'Réserver une démo',
    cue: 'Faites défiler',
  },

  rail: {
    label: 'Étapes du récit',
    steps: [
      'Accueil',
      'Surcharge',
      'Non honorés',
      'Administratif',
      'Clara',
      'Consultation',
      'Secrétariat',
      'Et vous ?',
    ],
  },

  titles: [
    'Votre secrétariat est surchargé ?',
    'Des rendez-vous non honorés coûteux',
    'Un temps administratif à remplir le dossier de consultation à chaque nouveau patient',
    'Voici Clara, votre assistante IA',
    'Une meilleure prise en charge pendant la consultation',
    'Un secrétariat disponible et apaisé',
  ],

  blocks: {
    call1: { t1: 'Mme Rivière', t2: '09:12 · reprogrammer' },
    call2: { t1: 'Léa Marchand', t2: '09:13 · première visite' },
    call3: { t1: 'Appel manqué', t2: '09:15 · numéro inconnu' },
    call4: { t1: 'Cabinet Verdier', t2: '09:16 · confrère' },
    inf1: { t1: 'La prise de rendez-vous en ligne est devenue simple' },
    inf2: { t1: 'Les oublis sont fréquents' },
    inf3: { t1: 'Les SMS de rappel non lus' },
    adm1: { t1: 'Le dossier à ouvrir et à remplir' },
    adm2: { t1: 'Les antécédents à recueillir en consultation' },
    adm3: { t1: "Autant de minutes prises sur l'échange" },
    ctx1: { t1: 'Sur votre site web et par téléphone' },
    ctx2: { t1: 'Disponible 7 jours sur 7' },
    ctx3: { t1: '24 h sur 24' },
    cap1: { t1: 'Accueille et informe' },
    cap2: { t1: 'Filtre et oriente vers le bon rendez-vous' },
    cap3: { t1: 'Collecte les informations' },
    cap4: { t1: 'Prépare le dossier de consultation' },
    cap5: { t1: 'Appelle pour faire confirmer le rendez-vous en amont' },
    r1: { t1: 'Des patients mieux informés' },
    r2: { t1: 'Plus engagés' },
    r3: { t1: 'Moins de rendez-vous non honorés' },
    r4: { t1: 'Plus de rendez-vous qualifiés' },
    r5: { t1: 'Un cabinet heureux' },
    r6: { t1: 'Des patients mieux pris en charge' },
  },

  stat: { value: 10, caption: 'minutes gagnées à chaque consultation' },

  finale: {
    title: 'Et vous, comment ça se passe dans votre cabinet ?',
    lede: 'Vingt minutes pour voir Clara répondre à un vrai appel, avec vos motifs de consultation et votre agenda.',
    cta: 'Réservez une démo',
    play: 'Écouter Clara',
    stop: 'Arrêter',
    playHint: 'la présentation se joue avec le son',
    badges: [
      'Conforme RGPD',
      'Données sécurisées HDS',
      'AI Act · IA adaptée au secteur santé',
    ],
  },

  /* Descriptions des photographies. Une alternative textuelle se traduit au
     même titre que le reste: laissée en français sur la version anglaise,
     elle décrivait la scène à côté. */
  scenes: {
    office: "La secrétaire d'un cabinet au téléphone, à son comptoir d'accueil",
    waiting: "Une salle d'attente vide",
    admin:
      'Un praticien concentré sur son écran, remplissant un dossier de consultation',
    consult: "Un praticien souriant, à l'écoute d'une patiente en consultation",
    serene: 'Une secrétaire souriante accueillant une patiente au comptoir',
    orb: "Clara, l'assistante Doctinum",
  },
};

export default frHomeStory;
