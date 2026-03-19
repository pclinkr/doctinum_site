const frHome2 = {
  hero: {
    kicker: 'Infrastructure vocale clinique',
    titleLine1: 'Le suivi patient',
    titleLine2: 'ne doit pas rester',
    titleAccent: 'silencieux.',
    subtitle:
      "L'IA vocale qui applique vos protocoles, déclenche un suivi structuré et remonte les signaux exploitables — sous supervision médicale.",
    primaryCta: 'Écouter une simulation',
    secondaryCta: 'Définir un protocole pilote',
    trustItems: [
      // { value: '4', label: 'moteurs cliniques opérationnels' },
      { value: 'HDS', label: 'hébergement certifié France' },
      { value: 'Aucune', label: 'action requise du patient' },
    ],
    preview: {
      label: 'Appel en cours · Suivi J+7 post-opératoire',
      avatar: 'M',
      patientName: 'Marie D. · 68 ans',
      patientMeta: 'Chirurgie orthopédique · Protocole Dr. Leroy',
      status: 'En cours',
      bubbles: [
        {
          role: 'agent',
          roleLabel: 'Agent Doctinum',
          text: "Bonjour Marie, je vous appelle pour votre suivi de la semaine. Comment évaluez-vous votre douleur aujourd'hui, de 0 à 10 ?",
        },
        {
          role: 'patient',
          roleLabel: 'Patient',
          text: "Je dirais 6, peut-être 7. C'est surtout la nuit que c'est difficile.",
        },
        {
          role: 'agent',
          roleLabel: 'Agent Doctinum',
          text: 'Je note. Avez-vous pu reprendre une activité légère comme prévu dans votre protocole ?',
        },
      ],
      metrics: [
        { value: '7/10', label: 'Douleur déclarée' },
        { value: '↗', label: 'vs J+3' },
        { value: '⚑', label: 'Alerte seuil' },
      ],
      cta: 'Simuler un appel complet →',
    },
  },
  tension: {
    label: 'Observation terrain',
    statementPrefix: "Certains signaux d'alerte restent",
    statementAccent: 'silencieux.',
    statementSuffix: "C'est souvent là que le risque apparaît.",
    cards: [
      {
        number: '01',
        title: 'Complétion insuffisante',
        body: 'Les PROMS et ePRO numériques sont sous-complétés. La visibilité sur l’évolution clinique entre les visites reste fragmentaire.',
      },
      {
        number: '02',
        title: 'Charge de relance',
        body: 'Coordinateurs, CRAs et équipes médicales consacrent un temps croissant aux relances manuelles et à la documentation des échanges.',
      },
      {
        number: '03',
        title: 'Données non structurées',
        body: "Appels entrants, SMS, emails : l'information arrive en silo, sans traçabilité homogène ni structuration exploitable par les équipes.",
      },
      {
        number: '04',
        title: 'Exclusion numérique',
        body: 'Les apps et portails patients excluent les populations fragiles, âgées ou peu connectées : précisément celles qui nécessitent le plus de vigilance.',
      },
    ],
    footerPrefix:
      '40–50% de lost-to-follow-up moyen dans les études cliniques longitudinales',
    footerAccent: 'Le canal était le problème.',
  },
  approach: {
    label: 'Notre approche',
    titlePrefix: 'Un suivi actif,',
    titleAccent: 'déclenché par vos équipes.',
    body: 'Vous définissez le protocole. L’IA vocale exécute le suivi. Chaque échange est structuré et restitué sous forme de signal exploitable par l’équipe médicale.',
    stepsTitle: 'Comment ça fonctionne',
    steps: [
      {
        number: '01',
        title: 'Vous définissez le protocole',
        body: "Questions, cadence, seuils d'alerte, règles d'escalade : paramétrés par l'équipe médicale.",
      },
      {
        number: '02',
        title: 'Consentement patient recueilli',
        body: 'Le patient consent explicitement au suivi et au canal vocal avant le premier appel. Tracé, horodaté.',
      },
      {
        number: '03',
        title: 'Appels structurés déclenchés',
        body: 'Le système appelle selon la cadence définie, gère les absents, les reports, les tiers en ligne.',
      },
      {
        number: '04',
        title: 'Données structurées restituées',
        body: 'Les réponses sont extraites, normalisées et restituées en données propres, pas de la transcription brute.',
      },
      {
        number: '05',
        title: "Alertes supervisées par l'équipe",
        body: "Les alertes suivent vos seuils. L'équipe médicale reste le seul décisionnaire.",
      },
    ],
    outputTitle: 'Ce que reçoit le praticien',
    outputHeader: 'Synthèse · Marie D. · J+7',
    outputRows: [
      {
        label: 'Douleur déclarée',
        value: '7/10',
        tagLabel: '↗ Seuil',
        tagTone: 'alert',
      },
      {
        label: 'Activité physique',
        value: 'Reprise partielle',
        tagLabel: 'Retard',
        tagTone: 'warn',
      },
      {
        label: 'Traitement',
        value: 'Conforme',
        tagLabel: 'OK',
        tagTone: 'green',
      },
      {
        label: 'Qualité du sommeil',
        value: 'Perturbée',
        tagLabel: 'Signal',
        tagTone: 'alert',
      },
      {
        label: 'Appel suivant',
        value: 'J+10 · Programmé',
      },
    ],
    footerLeft: 'Aucune décision médicale autonome.',
    footerRight: "L'équipe arbitre.",
  },
  testimonial: {
    label: 'Retour terrain',
    quote:
      "Ce qui m'a convaincu, c'est que le système appelle le patient, pas l'inverse. Pour mes patients post-opératoires de 70 ans, c'est la seule solution qui fonctionne vraiment.",
    author: 'Dr.',
    role: 'Chirurgien orthopédiste · Pilote Doctinum',
  },
  infrastructure: {
    label: 'Infrastructure clinique',
    titlePrefix: 'Quatre moteurs.',
    titleAccent: 'Pas un simple agent vocal.',
    body: "La différence entre un voice bot générique et une infrastructure clinique fiable tient à quatre problèmes d'ingénierie que la majorité des solutions n'ont pas résolus.",
    cards: [
      {
        icon: 'check-badge',
        title: 'Identité & consentement',
        body: 'Vérification patient avant collecte, anti-usurpation, consentement en ligne, traçabilité RGPD native à chaque interaction.',
        tag: 'RGPD natif',
      },
      {
        icon: 'phone-arrow-up',
        title: 'Orchestration des appels',
        body: 'Gestion des absents, répondeurs, tiers en ligne, refus, reports et plages horaires. Journal horodaté et auditable.',
        tag: 'Audit trail',
      },
      {
        icon: 'clipboard-document-list',
        title: 'Fidélité protocolaire',
        body: 'Maintien de la logique clinique sous déviation conversationnelle. Base de connaissances paramétrée par le clinicien.',
        tag: 'Protocole clinicien',
      },
      {
        icon: 'circle-stack',
        title: 'Structuration des données',
        body: 'Extraction de données cliniques propres. Alertes sur seuils praticien. Export structuré HL7 FHIR.',
        tag: 'HL7 FHIR',
      },
      {
        icon: 'presentation-chart-line',
        title: 'Continuité longitudinale',
        body: 'Mémoire clinique entre les appels. Détection des évolutions sur la durée du parcours.',
        tag: 'Suivi longitudinal',
      },
      {
        icon: 'server-stack',
        title: 'Hébergement HDS · France',
        body: "Données hébergées en France auprès d'un prestataire certifié HDS. Conformité RGPD documentée. Outil d'organisation et de collecte supervisé.",
        tag: 'En savoir plus →',
        highlight: true,
      },
    ],
  },
  useCases: {
    label: "Cas d'usage",
    titlePrefix: 'Adaptés à différents',
    titleAccent: 'contextes cliniques.',
    tabs: [
      { id: 'postop', label: 'Suivi pré & post-intervention' },
      { id: 'chronique', label: 'Parcours chroniques' },
      { id: 'pharma', label: 'Pharma & Recherche' },
    ],
    panels: {
      postop: {
        context: 'Chirurgie · Médecine esthétique · Médecine du sport',
        title: 'Suivi pré et post-intervention',
        body: "Entre la consultation et l'intervention, puis dans les semaines suivantes, le suivi vocal structure ce que le patient vit sans que l'équipe ait à gérer chaque relance individuellement.",
        items: [
          "Suivi de la douleur, de la cicatrisation et de l'adhésion au protocole de rééducation",
          'Détection précoce des signaux de complication déclarative',
          'PROMS structurés collectés automatiquement',
          'Rapport synthétique avant chaque consultation de suivi',
        ],
        scenarioLabel: "Exemple d'échange · J+5 post-arthroplastie",
        messages: [
          {
            role: 'agent',
            roleLabel: 'Doctinum',
            text: "Bonjour, c'est votre suivi du jour. Comment évaluez-vous votre douleur sur 10 ?",
          },
          {
            role: 'patient',
            roleLabel: 'Patient',
            text: "Environ 6. La nuit c'est plus difficile.",
          },
          {
            role: 'agent',
            roleLabel: 'Doctinum',
            text: "Avez-vous pu faire vos exercices de kinésithérapie aujourd'hui ?",
          },
          {
            role: 'patient',
            roleLabel: 'Patient',
            text: "Non, j'avais trop mal ce matin.",
          },
        ],
        signal: {
          text: "Signal transmis · Douleur ≥ 6 + arrêt kinésithérapie · Seuil d'alerte Dr. Martin",
          tone: 'alert',
        },
      },
      chronique: {
        context:
          'Insuffisance cardiaque · Diabète · BPCO · Maladies inflammatoires',
        title: 'Parcours chroniques coordonnés',
        body: "Dans les maladies chroniques, le suivi se joue entre les consultations. Doctinum maintient la visibilité sur l'évolution déclarative du patient dans l'intervalle, sans dépendre de son initiative.",
        items: [
          "Suivi longitudinal des symptômes et de l'adhésion thérapeutique",
          'Visibilité partagée entre les acteurs du parcours coordonné',
          'Détection des évolutions intercurrentes avant la consultation',
          "Compatible avec les dispositifs d'appui à la coordination (DAC)",
        ],
        scenarioLabel: "Exemple d'échange · Suivi IC · Semaine 6",
        messages: [
          {
            role: 'agent',
            roleLabel: 'Doctinum',
            text: 'Bonjour, votre suivi hebdomadaire. Avez-vous remarqué un essoufflement inhabituel cette semaine ?',
          },
          {
            role: 'patient',
            roleLabel: 'Patient',
            text: "Oui, surtout en montant les escaliers. Et j'ai pris 1,5 kg depuis lundi.",
          },
          {
            role: 'agent',
            roleLabel: 'Doctinum',
            text: 'Je note. Avez-vous pris votre diurétique tous les jours cette semaine ?',
          },
        ],
        signal: {
          text: "Signal transmis · Prise de poids + dyspnée d'effort · Protocole Dr. Nguyen",
          tone: 'alert',
        },
      },
      pharma: {
        context: 'Laboratoires · CRO · Recherche académique · CHU',
        title: 'Pharma & Recherche clinique',
        body: 'Les ePRO numériques excluent structurellement les populations les plus fragiles. Doctinum collecte des PRO endpoints par voix avec un audit trail conforme aux exigences des études.',
        items: [
          'Collecte ePRO vocale sur populations non-digitales',
          'Réduction du lost-to-follow-up et du site burden',
          'Données structurées exportables (HL7 FHIR, API, EDC)',
          'Audit trail horodaté compatible ICH E6',
        ],
        scenarioLabel: "Exemple d'échange · Étude CRO · Visite inter-J28",
        messages: [
          {
            role: 'agent',
            roleLabel: 'Doctinum',
            text: "Bonjour, appel de suivi de l'étude. Avez-vous ressenti des effets indésirables depuis notre dernier contact ?",
          },
          {
            role: 'patient',
            roleLabel: 'Participant',
            text: "Oui, des nausées les trois premiers jours. Ça s'est amélioré depuis.",
          },
          {
            role: 'agent',
            roleLabel: 'Doctinum',
            text: 'Sur une échelle de 0 à 10, comment évaluez-vous votre qualité de vie cette semaine ?',
          },
        ],
        signal: {
          text: 'EI consigné · Nausées grade 1 · J+3 à J+6 · Structuré pour eCRF',
          tone: 'warn',
        },
      },
    },
  },
  simulation: {
    label: 'Simulation interactive',
    titlePrefix: 'Écoutez ce que vos patients',
    titleAccent: 'vivent entre deux consultations.',
    body: "Sélectionnez un contexte clinique et déclenchez une simulation d'appel réel par un agent Doctinum. En 3 minutes, vous entendez ce que le patient entend et ce que vous recevez en retour.",
    note: 'Simulation non clinique à titre démonstratif. Les protocoles réels sont définis et validés par les équipes médicales.',
    agentName: 'Clara, assistante de suivi médical',
    agentRole: 'Simulation · Choisir un contexte',
    specialties: [
      { id: 'ortho', label: 'Orthopédie' },
      { id: 'oncology', label: 'Oncologie' },
      { id: 'cardiac', label: 'Chirurgie cardiaque' },
      { id: 'aesthetic', label: 'Médecine esthétique' },
    ],
    buttonCta: '▶ Lancer la simulation',
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
    titlePrefix: 'Définissez votre premier protocole',
    titleAccent: 'en 20 minutes.',
    subtitle:
      "Un appel pour calibrer le cas d'usage, le protocole et les conditions d'un pilote adapté à votre contexte clinique.",
    primaryCta: 'Réserver un créneau',
    secondaryCta: "Voir une simulation d'abord",
  },
};

export default frHome2;
