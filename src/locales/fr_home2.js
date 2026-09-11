const frHome2 = {
  hero: {
    titleLine1: 'Votre premier contact patient,',
    titleLine2: 'transformé en',
    titleAccent: 'réputation.',
    subtitle:
      "L'assistante IA vocale et visuelle qui accueille vos patients sur votre site, comprend leur besoin réel, répond à leurs questions et prépare vos consultations. Vous restez seul décideur médical.",
    primaryCta: 'Réserver une démo',
    trustItems: [
      { value: 'HDS', label: 'hébergement de santé · France' },
      { value: 'RGPD', label: 'conformité native' },
      { value: 'Hors DM', label: 'dispositif médical' },
    ],
    showcase: {
      alt: 'Praticienne accueillant une patiente en consultation de médecine esthétique',
      status: 'Assistante en ligne',
      eyebrow: 'Pré-consultation',
      line: 'Elle accueille, comprend et prépare la consultation. Vous arbitrez.',
      cta: 'Écouter une conversation',
    },
  },
  tension: {
    label: 'Observation terrain',
    statementPrefix: 'La prise de rendez-vous s’est fluidifiée.',
    statementAccent: 'Pas la qualification.',
    statementSuffix: '',
    intro:
      'Pour une médecine spécialisée et non remboursée, chaque créneau compte. Trois pertes silencieuses reviennent dans tous les cabinets :',
    cards: [
      {
        number: '01',
        title: 'Rendez-vous pour de mauvais motifs',
        body: 'Acte non pratiqué, attentes irréalistes, demande hors périmètre : la consultation le découvre trop tard, et le créneau est déjà perdu.',
      },
      {
        number: '02',
        title: 'Rendez-vous non honorés',
        body: "Un patient qui n'a investi que trois clics ne se sent pas engagé. Chez certains praticiens, jusqu'à un rendez-vous sur trois n'est pas honoré.",
      },
      {
        number: '03',
        title: 'Secrétariat submergé, consultation consumée',
        body: "Les mêmes questions au téléphone toute la journée, et une première consultation passée à collecter l'information de base au lieu de conseiller.",
      },
    ],
    studyLabel: 'Étude terrain',
    studyPrefix:
      'Notre étude lors du Congrès de la SOFCEP a indiqué : la surcharge du secrétariat et les rendez-vous non honorés arrivent en tête des irritants cités par les praticiens,',
    studyAccent: 'dans des cabinets encore très peu équipés en IA.',
  },
  gallery: {
    label: 'Le cabinet, prolongé en ligne',
    items: [
      {
        src: '/assets/images/aesthetic_patient_liposuccion.jpg',
        alt: 'Praticienne recevant une patiente en consultation de médecine esthétique',
        caption: 'Le premier échange a lieu avant même le rendez-vous.',
      },
      {
        src: '/assets/images/aesthetic_patient_injection.jpg',
        alt: 'Injection d’acide hyaluronique réalisée en cabinet',
        caption:
          'Des attentes comprises, un acte discuté en connaissance de cause.',
      },
      {
        src: '/assets/images/consultation.png',
        alt: 'Praticien recevant une patiente en consultation',
        caption: 'La consultation commence au conseil, pas à la collecte.',
      },
    ],
  },
  simulation: {
    label: 'Essayer la démo',
    titlePrefix: 'Écoutez ce que vit votre',
    titleAccent: 'future patiente, avant sa consultation.',
    body: 'Déclenchez une simulation de conversation de pré-consultation en médecine esthétique. En quelques minutes, entendez ce que la patiente exprime et ce que vous recevriez en retour.',
    note: "Simulation démonstrative et non clinique. L'assistante ne pose aucun diagnostic et n'oriente vers aucun acte.",
    agentName: 'Clara, assistante d’accueil et de pré-consultation',
    agentRole: 'Simulation · Médecine esthétique',
    specialties: [{ id: 'aesthetic', label: 'Médecine esthétique' }],
    buttonCta: 'Lancer la simulation',
  },
  securityStrip: {
    label: 'Cadre sécurité & réglementation',
    badges: [
      'Hébergement HDS · France',
      'RGPD natif',
      'Consentement tracé',
      'Hors classification DM',
      'Supervision médicale',
    ],
    link: 'En savoir plus →',
  },
  finalCta: {
    /* Textes repris de la scène finale « Et vous ? » — seul le titre diffère,
       pour ne pas répéter mot pour mot ce que le récit vient de dire. */
    titlePrefix: 'Écoutez Clara',
    titleAccent: 'sur vos propres appels.',
    subtitle:
      'Vingt minutes pour voir Clara répondre à un vrai appel, avec vos motifs de consultation et votre agenda.',
    primaryCta: 'Réservez une démo',
    badges: [
      'Conforme RGPD',
      'Données sécurisées HDS',
      'AI Act · IA adaptée au secteur santé',
    ],
  },
};

export default frHome2;
