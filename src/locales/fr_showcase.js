/* =========================================================================
   Textes des quatre blocs, repris de la maquette de référence.

   ⚠ À VÉRIFIER AVANT MISE EN LIGNE. Les chiffres et le témoignage viennent de
   la maquette, pas d'une source ni d'un praticien réel. Ils ont été repris sur
   demande explicite pour juger la mise en page. Le témoignage attribué au
   « Dr. Marc Blanchard » est fictif: à remplacer par un avis réel et signé
   avant publication, ou à retirer.

   Les LOGOS de la maquette nomment des groupes de santé réels. Ils ne sont pas
   repris: les afficher leur prêterait une relation commerciale qui n'existe
   pas, et c'est une affirmation sur des tiers, pas sur Doctinum.
   ========================================================================= */
const frShowcase = {
  howItWorks: {
    label: 'Comment ça marche',
    titlePrefix: 'Une conversation',
    titleAccent: 'avant la consultation.',
    body: "Sur votre site, à toute heure, l'assistante mène l'échange : à la voix, par écrit ou à l'écran, au choix du patient.",
    stage: {
      site: {
        brand: 'Clinique Harmonie',
        nav: ['Interventions', 'Le centre', 'Avis', 'Contact'],
      },
      step1: {
        agent: 'Assistante du cabinet',
        greeting:
          'Bonjour, je suis l’assistante du cabinet. Qu’est-ce qui vous amène aujourd’hui ?',
        chips: [
          'Poser mes questions',
          'Découvrir les interventions',
          'Préparer ma consultation',
        ],
        cta: 'Parler maintenant',
      },
      step2: {
        question: 'Combien de temps dure la convalescence ?',
        answer:
          'Comptez sept à dix jours avant la reprise sociale, et trois semaines avant le sport. Le Dr. Leroy précisera selon votre cas.',
        source: 'Réponse issue de la base du cabinet',
      },
      step3: {
        title: 'Dossier de pré-consultation',
        progress: 'En cours de constitution',
        fields: [
          { label: 'Motif', value: 'Rhinoplastie' },
          { label: 'Antécédents ORL', value: 'Aucun' },
          { label: 'Depuis', value: 'L’adolescence' },
        ],
        photosLabel: 'Photos guidées',
        photos: ['Face', 'Profil', 'Trois quarts'],
      },
      step4: {
        header: 'Synthèse · Sophie L.',
        rows: [
          { label: 'Motif', value: 'Rhinoplastie', tag: 'Qualifié' },
          { label: 'Attentes', value: 'Documentées' },
          { label: 'Questions', value: '3 à aborder' },
        ],
        note: 'Reçue avant le rendez-vous',
      },
      step5: {
        caption: 'La consultation commence là où elle compte',
      },
    },
    steps: [
      {
        number: '01',
        text: "Un patient visite le site web ou appelle le cabinet en dehors des heures d'ouverture.",
      },
      {
        number: '02',
        text: "L'assistante virtuelle accueille, répond aux questions, comprend le besoin, oriente vers le rendez-vous puis remplit le dossier de pré-consultation.",
      },
      {
        number: '03',
        text: 'Doctinum génère les tâches de rappel ou les notifications de dossier prêt pour le cabinet.',
      },
      {
        number: '04',
        text: 'Le cabinet accueille le patient le jour du rendez-vous, le patient est préparé et son dossier est prêt.',
      },
    ],
  },

  solution: {
    label: 'La solution Doctinum',
    title: 'Une IA au service de vos patients et de vos équipes.',
    body: "Doctinum automatise, assiste et fluidifie l'accueil des patients sur votre site web et au téléphone.",
    link: 'Voir comment ça marche',
    orbAlt: "Clara, l'assistante Doctinum",
    capabilities: [
      {
        side: 'left',
        icon: 'phoneIn',
        title: 'Appels entrants',
        sub: 'intelligents',
      },
      {
        side: 'left',
        icon: 'clipboard',
        title: 'Pré-consultation',
        sub: 'assistée',
      },
      {
        side: 'left',
        icon: 'bell',
        title: 'Rappels & confirmations',
        sub: 'automatisés',
      },
      {
        side: 'right',
        icon: 'calendar',
        title: 'Rendez-vous',
        sub: 'optimisés',
      },
      { side: 'right', icon: 'folder', title: 'Synthèse du dossier patient' },
      {
        side: 'right',
        icon: 'users',
        title: 'Suivi patient',
        sub: 'personnalisé',
      },
    ],
  },

  results: {
    label: 'Des résultats concrets',
    title: "Plus de temps pour l'essentiel.",
    stats: [
      { icon: 'clock', value: '−70 %', label: 'de temps administratif' },
      { icon: 'calendar', value: '−35 %', label: 'de rendez-vous non honorés' },
      { icon: 'spark', value: '+25 %', label: 'de capacité de rendez-vous' },
      { icon: 'heart', value: '+30 %', label: 'de satisfaction patient' },
    ],
    trustLabel: 'Les praticiens nous font confiance',
    trustPlaceholder: 'Logos clients à fournir',
  },

  invite: {
    title: 'Découvrez comment Doctinum peut vous faciliter le travail',
    lede: 'Vingt minutes pour voir Clara répondre à un vrai appel, avec vos motifs de consultation et votre agenda.',
    cta: 'Réservez une démo',
  },

  inAction: {
    label: 'En action',
    title: 'Une expérience pensée pour vos patients.',
    points: [
      { icon: 'chat', text: 'Conversation naturelle' },
      { icon: 'spark', text: 'Réponses instantanées' },
      { icon: 'clock', text: 'Disponibilité 24/7' },
    ],
    /* Témoignage FICTIF, repris de la maquette. À remplacer par un avis réel
       et signé avant publication. */
    quote: {
      text: 'Doctinum a changé notre quotidien. Nos équipes sont libérées et nos patients sont mieux accompagnés.',
      author: 'Dr. Marc Blanchard',
      role: 'Cardiologue',
    },
  },
};

export default frShowcase;
