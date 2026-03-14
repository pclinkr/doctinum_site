export const home2Fr = {
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
      { value: '0', label: 'action requise du patient' },
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
    body: "Sélectionnez un contexte clinique et déclenchez une simulation d'appel réelle par un agent Doctinum. En 3 minutes, vous entendez ce que le patient entend et ce que vous recevez en retour.",
    note: 'Simulation non clinique à titre démonstratif. Les protocoles réels sont définis et validés par les équipes médicales.',
    agentName: 'Clara, assistante de suivi médical',
    agentRole: 'Simulation · Choisir un contexte',
    specialties: [
      { id: 'ortho', label: 'Orthopédie' },
      { id: 'oncologie', label: 'Oncologie' },
      { id: 'cardiaque', label: 'Chirurgie cardiaque' },
      { id: 'esthetique', label: 'Médecine esthétique' },
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

export const home2En = {
  hero: {
    kicker: 'Clinical voice infrastructure',
    titleLine1: 'Patient follow-up',
    titleLine2: 'should not stay',
    titleAccent: 'silent.',
    subtitle:
      'Voice AI that applies your protocols, triggers structured follow-up, and surfaces actionable signals under medical supervision.',
    primaryCta: 'Listen to a simulation',
    secondaryCta: 'Define a pilot protocol',
    trustItems: [
      { value: '4', label: 'operational clinical engines' },
      { value: 'HDS', label: 'certified hosting in France' },
      { value: '0', label: 'patient action required' },
    ],
    preview: {
      label: 'Call in progress · Day 7 post-op follow-up',
      avatar: 'M',
      patientName: 'Marie D. · 68 years old',
      patientMeta: 'Orthopedic surgery · Dr. Leroy protocol',
      status: 'In progress',
      bubbles: [
        {
          role: 'agent',
          roleLabel: 'Doctinum Agent',
          text: 'Hello Marie, this is your weekly follow-up call. How would you rate your pain today from 0 to 10?',
        },
        {
          role: 'patient',
          roleLabel: 'Patient',
          text: 'I would say 6, maybe 7. Nights are the hardest.',
        },
        {
          role: 'agent',
          roleLabel: 'Doctinum Agent',
          text: 'Got it. Were you able to resume light activity as planned in your protocol?',
        },
      ],
      metrics: [
        { value: '7/10', label: 'Reported pain' },
        { value: '↗', label: 'vs Day 3' },
        { value: '⚑', label: 'Threshold alert' },
      ],
      cta: 'Simulate full call →',
    },
  },
  tension: {
    label: 'Field insight',
    statementPrefix: 'Some warning signals remain',
    statementAccent: 'silent.',
    statementSuffix: 'That is often where risk starts.',
    cards: [
      {
        number: '01',
        title: 'Low completion rates',
        body: 'Digital PROMS and ePRO are often under-completed. Visibility on clinical evolution between visits remains fragmented.',
      },
      {
        number: '02',
        title: 'Manual outreach burden',
        body: 'Coordinators, CRAs, and medical teams spend increasing time on manual outreach and documentation.',
      },
      {
        number: '03',
        title: 'Unstructured data',
        body: 'Incoming calls, SMS, emails: information arrives in silos, without consistent traceability or usable structure.',
      },
      {
        number: '04',
        title: 'Digital exclusion',
        body: 'Apps and portals structurally exclude fragile, older, or low-connectivity populations, exactly those needing the most vigilance.',
      },
    ],
    footerPrefix:
      '40–50% average lost-to-follow-up in longitudinal clinical studies',
    footerAccent: 'The channel was the issue.',
  },
  approach: {
    label: 'Our approach',
    titlePrefix: 'Active follow-up,',
    titleAccent: 'triggered by your teams.',
    body: 'You define the protocol. Voice AI executes follow-up. Each exchange is structured and delivered as an actionable signal for the medical team.',
    stepsTitle: 'How it works',
    steps: [
      {
        number: '01',
        title: 'You define the protocol',
        body: 'Questions, cadence, alert thresholds, and escalation rules are configured by the medical team.',
      },
      {
        number: '02',
        title: 'Patient consent captured',
        body: 'Patients explicitly consent to follow-up and voice channel before the first call. Logged and timestamped.',
      },
      {
        number: '03',
        title: 'Structured calls triggered',
        body: 'The system calls on schedule, handles no-answers, rescheduling, and third-party contacts.',
      },
      {
        number: '04',
        title: 'Structured data delivered',
        body: 'Responses are extracted, normalized, and delivered as clean data, not raw transcripts.',
      },
      {
        number: '05',
        title: 'Alerts remain supervised',
        body: 'Alerts follow your thresholds. The medical team remains the sole decision-maker.',
      },
    ],
    outputTitle: 'What the clinician receives',
    outputHeader: 'Summary · Marie D. · Day 7',
    outputRows: [
      {
        label: 'Reported pain',
        value: '7/10',
        tagLabel: '↗ Threshold',
        tagTone: 'alert',
      },
      {
        label: 'Physical activity',
        value: 'Partial restart',
        tagLabel: 'Delay',
        tagTone: 'warn',
      },
      {
        label: 'Treatment',
        value: 'Compliant',
        tagLabel: 'OK',
        tagTone: 'green',
      },
      {
        label: 'Sleep quality',
        value: 'Disturbed',
        tagLabel: 'Signal',
        tagTone: 'alert',
      },
      {
        label: 'Next call',
        value: 'Day 10 · Scheduled',
      },
    ],
    footerLeft: 'No autonomous medical decisions.',
    footerRight: 'The team arbitrates.',
  },
  testimonial: {
    label: 'Field feedback',
    quote:
      'What convinced me is that the system calls the patient, not the opposite. For my 70+ post-op patients, this is the only thing that really works.',
    author: 'Dr.',
    role: 'Orthopedic surgeon · Doctinum pilot',
  },
  infrastructure: {
    label: 'Clinical infrastructure',
    titlePrefix: 'Four engines.',
    titleAccent: 'Not just a voice bot.',
    body: 'The difference between a generic voice bot and reliable clinical infrastructure comes from solving engineering problems that most solutions still leave unresolved.',
    cards: [
      {
        icon: '🔐',
        title: 'Identity & consent',
        body: 'Patient verification before collection, anti-impersonation, in-call consent capture, and native GDPR traceability.',
        tag: 'Native GDPR',
      },
      {
        icon: '📞',
        title: 'Call orchestration',
        body: 'Handles no-answers, voicemails, third parties, refusals, rescheduling, and time windows with full auditability.',
        tag: 'Audit trail',
      },
      {
        icon: '🧬',
        title: 'Protocol fidelity',
        body: 'Maintains clinical logic through conversational deviation. Knowledge base configured by clinicians.',
        tag: 'Clinician protocol',
      },
      {
        icon: '📊',
        title: 'Data structuring',
        body: 'Extracts clean clinical data, routes threshold alerts, and exports structured HL7 FHIR payloads.',
        tag: 'HL7 FHIR',
      },
      {
        icon: '📈',
        title: 'Longitudinal continuity',
        body: 'Clinical memory across calls and trend detection over time to keep a usable trajectory.',
        tag: 'Longitudinal follow-up',
      },
      {
        icon: '🏥',
        title: 'HDS hosting · France',
        body: 'Data hosted in France by HDS-certified providers. Documented GDPR compliance. Supervised organizational and collection tool.',
        tag: 'Learn more →',
        highlight: true,
      },
    ],
  },
  useCases: {
    label: 'Use cases',
    titlePrefix: 'Adapted to multiple',
    titleAccent: 'clinical contexts.',
    tabs: [
      { id: 'postop', label: 'Pre & post intervention' },
      { id: 'chronique', label: 'Chronic pathways' },
      { id: 'pharma', label: 'Pharma & research' },
    ],
    panels: {
      postop: {
        context: 'Surgery · Aesthetic medicine · Sports medicine',
        title: 'Pre and post intervention follow-up',
        body: 'Between consultation and procedure, then through following weeks, voice follow-up structures what patients report without requiring teams to manually chase every check-in.',
        items: [
          'Track pain, healing, and rehab protocol adherence',
          'Early detection of self-reported complication signals',
          'Automatically collect structured PROMS',
          'Provide concise summary before each follow-up consultation',
        ],
        scenarioLabel: 'Sample exchange · Day 5 post-arthroplasty',
        messages: [
          {
            role: 'agent',
            roleLabel: 'Doctinum',
            text: 'Hello, this is your daily follow-up. How would you rate your pain out of 10?',
          },
          {
            role: 'patient',
            roleLabel: 'Patient',
            text: 'Around 6. Nights are harder.',
          },
          {
            role: 'agent',
            roleLabel: 'Doctinum',
            text: 'Were you able to complete your physical therapy exercises today?',
          },
          {
            role: 'patient',
            roleLabel: 'Patient',
            text: 'No, the pain was too strong this morning.',
          },
        ],
        signal: {
          text: 'Signal sent · Pain ≥ 6 + stopped physical therapy · Dr. Martin threshold',
          tone: 'alert',
        },
      },
      chronique: {
        context: 'Heart failure · Diabetes · COPD · Inflammatory diseases',
        title: 'Coordinated chronic pathways',
        body: 'In chronic care, what matters happens between visits. Doctinum preserves visibility on self-reported evolution without depending on patient initiative.',
        items: [
          'Longitudinal tracking of symptoms and therapeutic adherence',
          'Shared visibility across coordinated care actors',
          'Detect intercurrent changes before consultation',
          'Compatible with coordinated support organizations',
        ],
        scenarioLabel: 'Sample exchange · HF follow-up · Week 6',
        messages: [
          {
            role: 'agent',
            roleLabel: 'Doctinum',
            text: 'Hello, this is your weekly follow-up. Did you notice unusual shortness of breath this week?',
          },
          {
            role: 'patient',
            roleLabel: 'Patient',
            text: 'Yes, mostly when climbing stairs. I also gained 1.5 kg since Monday.',
          },
          {
            role: 'agent',
            roleLabel: 'Doctinum',
            text: 'Noted. Did you take your diuretic every day this week?',
          },
        ],
        signal: {
          text: 'Signal sent · Weight gain + exertional dyspnea · Dr. Nguyen protocol',
          tone: 'alert',
        },
      },
      pharma: {
        context: 'Labs · CRO · Academic research · University hospitals',
        title: 'Pharma & clinical research',
        body: 'Digital ePRO workflows often exclude vulnerable populations. Doctinum captures PRO endpoints by voice with an audit trail aligned with study requirements.',
        items: [
          'Voice ePRO collection for low-digital populations',
          'Reduce lost-to-follow-up and site burden',
          'Export structured data (HL7 FHIR, API, EDC)',
          'Timestamped audit trail compatible with ICH E6',
        ],
        scenarioLabel: 'Sample exchange · CRO study · Inter-visit Day 28',
        messages: [
          {
            role: 'agent',
            roleLabel: 'Doctinum',
            text: 'Hello, this is your study follow-up call. Did you experience any adverse events since our last check-in?',
          },
          {
            role: 'patient',
            roleLabel: 'Participant',
            text: 'Yes, nausea for the first three days. It improved afterwards.',
          },
          {
            role: 'agent',
            roleLabel: 'Doctinum',
            text: 'On a 0 to 10 scale, how would you rate your quality of life this week?',
          },
        ],
        signal: {
          text: 'AE logged · Grade 1 nausea · Day 3 to Day 6 · Structured for eCRF',
          tone: 'warn',
        },
      },
    },
  },
  simulation: {
    label: 'Interactive simulation',
    titlePrefix: 'Listen to what your patients',
    titleAccent: 'experience between consultations.',
    body: 'Select a clinical context and trigger a realistic call simulation by a Doctinum agent. In 3 minutes, hear exactly what the patient hears and what your team receives.',
    note: 'Non-clinical simulation for demonstration only. Real protocols are defined and validated by medical teams.',
    agentName: 'Doctinum Agent',
    agentRole: 'Simulation · Choose context',
    specialties: [
      { id: 'ortho', label: 'Orthopedics' },
      { id: 'oncology', label: 'Oncology' },
      { id: 'cardiac', label: 'Cardiac surgery' },
      { id: 'aesthetic', label: 'Aesthetic medicine' },
    ],
    buttonCta: '▶ Start simulation',
  },
  securityStrip: {
    label: 'Security & regulatory framework',
    badges: [
      'HDS hosting · France',
      'Native GDPR',
      'Logged consent',
      'Outside medical-device classification',
      'Medical supervision',
    ],
    link: 'Full framework →',
  },
  finalCta: {
    titlePrefix: 'Define your first protocol',
    titleAccent: 'in 20 minutes.',
    subtitle:
      'One call to calibrate your use case, protocol, and pilot conditions according to your clinical context.',
    primaryCta: 'Book a slot',
    secondaryCta: 'See a simulation first',
  },
};
