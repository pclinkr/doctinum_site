const fr = {
  common: {
    close: 'Fermer',
    avatar: 'Avatar',
    authorInitials: 'AA',
  },
  language: {
    title: 'Langue',
    currentFlag: '🇫🇷',
    options: [
      { code: 'en', label: 'English', flag: '🇬🇧' },
      { code: 'fr', label: 'Français', flag: '🇫🇷' },
    ],
  },
  nav: {
    cta: 'Discuter de votre projet',
    home: 'Accueil',
    solutions: 'Solutions',
    functioning: 'Fonctionnement',
    editorsApi: 'Éditeurs & API',
    pharmaResearch: 'Pharma & Recherche',
    security: 'Sécurité',
    enterprise: 'Entreprise',
    mainMenu: 'Menu',
    quickAccess: 'Accès rapides',
    try: 'Essayer',
    demo: 'Démo',
    bookDemo: 'Réserver une démo',
    contactUs: 'Nous contacter',
    mobileMenu: 'Menu',
  },
  megaMenu: {
    soon: 'Bientôt',
    grouped: {
      sectionEntry: 'Accéder à cette section',
      goHome: "Retourner à l'accueil",
    },
    main: {
      title: 'Accéder rapidement aux rubriques clés',
      body: 'Retrouvez en un seul mega menu les solutions, ressources et parcours entreprise.',
    },
    solutions: {
      eyebrow: 'Solutions',
      title: 'Parcours de suivi adaptés à chaque contexte clinique',
      body: 'Structurez vos parcours par spécialité, niveau de coordination et niveau de vigilance.',
      groups: [
        {
          title: 'Suivi pré et post intervention',
          links: [
            {
              label: 'Chirurgie & médecine esthétique',
              description: 'Parcours guidés avant et après acte.',
              page: 'surgery-aesthetic',
            },
            {
              label: 'Médecine du sport',
              description: 'Suivi des symptômes et reprise progressive.',
              page: 'sports-medicine',
            },
            {
              label: 'Dermatologie',
              description: 'Suivi régulier des évolutions et tolérance.',
              page: 'dermatology',
            },
            {
              label: 'PROMS / questionnaires post-acte',
              description: 'Collecte structurée des retours patients.',
              page: 'proms',
            },
          ],
        },
        {
          title: 'Suivi chronique & coordination',
          links: [
            {
              label: 'Programmes d’accompagnement patient',
              description: 'Cadence de suivi avec scripts cliniques.',
              page: 'patient-support-programs',
            },
            {
              label: 'Prévention & santé au travail',
              description: 'Actions de prévention et suivi de population.',
              page: 'prevention-workplace-health',
            },
            {
              label: 'Parcours chroniques coordonnés',
              description: 'Vision partagée entre intervenants.',
              page: 'case-studies',
            },
          ],
        },
        // {
        //   title: 'Parcours spécialisés à haute vigilance',
        //   links: [
        //     { label: 'Transplantation', description: 'Points critiques et signaux précoces.', page: 'blog' },
        //     { label: 'Oncologie', description: 'Suivi des effets et points de vigilance.', page: 'contact' },
        //     { label: 'Cardiologie chronique', description: 'Suivi longitudinal des indicateurs.', page: 'privacy' },
        //     { label: 'Maladies rares', description: 'Coordination sur parcours complexes.', page: 'case-studies' },
        //     { label: 'Santé mentale', description: 'Suivi conversationnel et escalade encadrée.', page: 'about' }
        //   ]
        // }
      ],
      cta: { label: 'Discuter d’un projet pilote', page: 'contact' },
    },
    functioning: {
      eyebrow: 'Fonctionnement',
      title: 'Comprendre la mise en oeuvre',
      body: 'Explorez la démo produit, les fonctionnalités et les ressources agents.',
      groups: [
        {
          title: 'Démo',
          links: [
            {
              label: 'Démo',
              description: 'Voir le flux de suivi en conditions réelles.',
              page: 'blog',
            },
          ],
        },
        {
          title: 'Produit',
          links: [
            {
              label: 'Fonctionnalités',
              description: 'Capacités coeur et options de configuration.',
              page: 'about',
            },
          ],
        },
        {
          title: 'Ressources',
          links: [
            {
              label: 'Modèles d’agents',
              description: 'Exemples d’agents prêts à adapter.',
              page: 'case-studies',
            },
            {
              label: 'Modèles PROMS',
              description: 'Modèles orientés questionnaires post-acte.',
              page: 'proms',
            },
          ],
        },
      ],
      cta: { label: 'Réserver une démo', page: 'contact' },
    },
    enterprise: {
      eyebrow: 'Entreprise',
      title: 'Donner une voix au suivi patient',
      body: 'Nous concevons des solutions pour des environnements exigeants',
      groups: [
        {
          title: 'Vision & équipe',
          links: [
            {
              label: 'Vision',
              description: 'Cap produit et logique de déploiement.',
              page: 'vision',
            },
            // { label: 'Nous rejoindre', description: 'Opportunités et culture produit.', page: 'about' },
            // { label: 'Blog', description: 'Articles et points de vue.', page: 'blog' },
            {
              label: 'Styleguide',
              description: 'Référentiel UI interne.',
              page: 'styleguide',
              devOnly: true,
            },
          ],
        },
        // {
        //   title: 'Partenariats',
        //   links: [
        //     { label: 'Expérimentation & partenariats', description: 'Pilotes, protocoles et collaborations.', page: 'case-studies' },
        //     { label: 'Investisseurs', description: 'Échanges stratégiques et informations.', page: 'case-studies' }
        //   ]
        // }
      ],
      cta: { label: 'Nous contacter', page: 'contact' },
    },
  },
  site: {
    socialProofText: 'Plus de 50+ établissements et praticiens accompagnés',
    ctaSubtitleFull:
      'Réservez un appel stratégique gratuit de 30 min et construisons ensemble un protocole de suivi adapté à votre contexte.',
    ctaSubtitleShort: 'Réservez un appel stratégique gratuit de 30 min.',
    storyDurationMs: 3000,
  },
  sections: {
    hero: {
      ariaLabel: 'Héros',
      titlePrefix: 'Le suivi patient',
      titleMiddle: 'ne doit pas rester',
      titleAccent: 'silencieux',
      subtitle:
        'L’infrastructure d’IA vocale qui applique des protocoles de suivi et structure les retours patients dans le temps — sous supervision médicale.',
      cta: 'Evaluez un projet pilote',
      cta2: 'Planifier un échange confidentiel',
    },
    services: {
      titlePrefix: 'Comment nous pouvons vous aider à',
      titleAccent: 'croître',
    },
    faq: {
      label: 'Questions',
      title: 'Questions fréquentes',
    },
    process: {
      titlePrefix: 'Nous aimons garder les choses',
      titleAccent: 'simples',
      titleSuffix: 'et efficaces',
      cards: [
        {
          title: 'La stratégie d’abord',
          body: 'Nous auditons votre marque, audience et concurrents puis construisons une stratégie claire, précise et orientée résultats.',
        },
        {
          title: 'Créer & gérer',
          body: 'Nous créons, planifions et gérons votre contenu pour que vous restiez focalisé sur votre business.',
        },
        {
          title: 'Analyser & optimiser',
          body: 'Revues mensuelles et reporting clair. Nous renforçons ce qui fonctionne et supprimons le reste.',
        },
      ],
    },
    mission: {
      label: 'Notre mission',
      titlePrefix: 'Transformer le chaos contenu en croissance',
      titleAccent: 'régulière',
      titleSuffix: '',
      body: [
        'Nous accompagnons des marques prêtes à prendre leur présence social media au sérieux.',
        'Pas pour remplir un feed, mais pour construire une présence utile et durable.',
        'Pour nous, le contenu n’est que le point de départ.',
        'Notre approche combine stratégie, exécution et constance. Nous gérons planification, publication et plateformes.',
        'Si vous voulez grandir avec intention, nous pouvons vous aider.',
      ],
    },
    homeCases: {
      label: 'Résultats clients',
      titlePrefix: 'Un travail qui parle',
      titleAccent: 'de lui-même',
      viewAll: 'Voir tous les cas',
      case1: {
        tag: 'Résultats · Beauté',
        titlePrefix: 'Scaler une marque beauté avec des',
        titleAccent: 'Reels',
        body: 'Nous avons repensé leur approche contenu, des tutoriels longs aux Reels courts, couplés à du paid ciblé sur Meta.',
        kpi1: 'Vues Reels',
        kpi2: 'Engagement',
      },
      case2: {
        tag: 'Résultats · Mode',
        titlePrefix: 'Développer une marque mode avec la',
        titleAccent: 'vidéo',
        body: 'Passage d’un flux statique à un contenu vidéo-first montrant le produit en usage réel.',
        kpi1: 'Abonnés',
        kpi2: 'Engagement',
      },
    },
    whyChoose: {
      titlePrefix: 'Pourquoi choisir Doctinum',
      titleMiddle: 'plutôt que',
      titleAccent: 'les autres',
      titleSuffix: '?',
      otherTitle: 'Autres solutions',
      brandTitle: 'Notre différence',
      otherItems: [
        'Contrats longue durée contraignants',
        'Contenu générique non adapté',
        'Délais de production lents',
        'Reporting flou sans insights',
      ],
      brandItems: [
        'Plans flexibles sans engagement',
        'Stratégie contenu spécifique à votre marque',
        'Garantie de turnaround en 48h',
        'KPIs clairs liés aux objectifs business',
      ],
    },
    testimonial: {
      quotePrefix:
        'Ils ont complètement repris la gestion de nos réseaux, et notre audience n’a jamais été',
      quoteAccent: 'aussi engagée.',
      author: 'Elena Chen',
      role: 'Fondatrice · Bloom Skincare',
    },
    finalCta: {
      label: 'Démarrer',
      titlePrefix: 'Votre suivi vocal commence',
      titleAccent: 'ici.',
    },
    medicalVoice: {
      headLabel:
        'Explorer un exemple de suivi vocal - démonstration non clinique',
      headTitlePrefix: "Simulation interactive d'un appel par",
      headTitleAccent: 'un agent IA médical',
      domains: [
        { id: 'orthopedie', label: 'Orthopédie (chirurgie)' },
        { id: 'cancer', label: 'Cancer' },
        { id: 'transplantation-hepatique', label: 'Transplantation hépatique' },
        { id: 'chirurgie-esthetique', label: 'Chirurgie esthétique' },
      ],
      controls: {
        slideToCall: 'Glisser',
      },
      transcript: {
        agent: 'Agent',
        patient: 'Patient',
      },
      status: {
        ready: 'Prêt',
        creating: 'Création du web call sécurisé...',
        connectingRetell: 'Connexion à Retell...',
        liveRunning: 'Appel en direct',
        callFinished: 'Appel terminé',
        fallbackCompleted: 'Démo fallback terminée',
        liveUnavailable: 'Live indisponible. Lancement de la démo fallback...',
      },
      results: {
        default: {
          header: "Synthese structuree de l'appel",
          title: 'Donnees cliniques collectees pendant la simulation',
          metricsTitle: 'Indicateurs captures',
          metrics: [
            { label: 'Motif principal', value: 'Signal symptomatique declare' },
            { label: 'Intensite percue', value: 'Niveau modere a surveiller' },
            { label: 'Adhesion protocole', value: 'Partielle' },
            { label: 'Statut protocole', value: 'Seuils a verifier' },
          ],
          alert: {
            badge: 'Alerte seuil protocolaire',
            title: 'Seuil protocolaire franchi',
            body: 'Combinaison de reponses au-dessus des seuils definis dans le protocole.',
          },
        },
        orthopedie: {
          header: "Synthese structuree de l'appel",
          title: 'Suivi post-operatoire J+7 (orthopedie)',
          metricsTitle: 'Indicateurs captures',
          metrics: [
            { label: 'Douleur declaree', value: '6/10 (majoration nocturne)' },
            {
              label: 'Prise des antalgiques',
              value: 'Conforme a la prescription',
            },
            { label: 'Signes locaux', value: 'Pas de rougeur ni ecoulement' },
            { label: 'Reeducation', value: 'Reprise partielle' },
          ],
          alert: {
            badge: 'Alerte seuil protocolaire',
            title: 'Seuil douleur franchi',
            body: "Douleur >= 6/10 et gene nocturne: seuil d'alerte orthopedie declenche.",
          },
        },
        cancer: {
          header: "Synthese structuree de l'appel",
          title: 'Suivi inter-cure (oncologie)',
          metricsTitle: 'Indicateurs captures',
          metrics: [
            {
              label: 'Nausees',
              value: 'Presentes en debut de cycle puis en baisse',
            },
            { label: 'Adhesion anti-emetique', value: 'Oui' },
            { label: 'Appetit', value: 'Reprise progressive' },
            { label: 'Fievre > 38C', value: 'Non declaree' },
          ],
          alert: {
            badge: 'Alerte seuil protocolaire',
            title: 'Seuil infectieux franchi',
            body: "Fievre > 38C ou frissons: seuil d'alerte oncologie declenche.",
          },
        },
        'transplantation-hepatique': {
          header: "Synthese structuree de l'appel",
          title: 'Suivi post-greffe (transplantation hepatique)',
          metricsTitle: 'Indicateurs captures',
          metrics: [
            {
              label: 'Observance immunosuppresseur',
              value: 'Declaree conforme',
            },
            { label: "Signes d'alerte", value: 'Absents' },
            { label: 'Bilan biologique', value: 'Realise, resultats attendus' },
            { label: "Consignes d'hygiene", value: 'Respectees' },
          ],
          alert: {
            badge: 'Alerte seuil protocolaire',
            title: 'Seuil post-greffe franchi',
            body: "Fievre, douleur abdominale ou ictere: seuil d'alerte transplantation declenche.",
          },
        },
        'chirurgie-esthetique': {
          header: "Synthese structuree de l'appel",
          title: 'Suivi post-intervention (chirurgie esthetique)',
          metricsTitle: 'Indicateurs captures',
          metrics: [
            { label: 'Oedeme / ecchymoses', value: 'Regression progressive' },
            { label: 'Application des soins', value: 'Conforme' },
            { label: 'Sommeil en position adaptee', value: 'Oui' },
            { label: 'Saignements importants', value: 'Non declares' },
          ],
          alert: {
            badge: 'Alerte seuil protocolaire',
            title: 'Seuil hemorragique franchi',
            body: "Saignement important ou douleur inhabituelle: seuil d'alerte chirurgie esthetique declenche.",
          },
        },
      },
      fallbackTranscripts: {
        orthopedie: [
          {
            role: 'agent',
            text: "Bonjour, je suis Clara l'assistant de suivi de votre médecin. Êtes-vous disponible pour votre suivi post-opératoire ?",
            delayMs: 0,
          },
          {
            role: 'patient',
            text: 'Oui, je suis disponible.',
            delayMs: 1500,
          },
          {
            role: 'agent',
            text: 'Parfait. Nous sommes à J+7 après votre arthroscopie du genou. Comment évaluez-vous votre douleur sur 10 ?',
            delayMs: 3000,
          },
          {
            role: 'patient',
            text: 'Environ 4 sur 10, surtout la nuit.',
            delayMs: 5500,
          },
          {
            role: 'agent',
            text: "D'accord. Prenez-vous bien vos antalgiques selon la prescription ? Paracétamol 1g toutes les 6h ?",
            delayMs: 8500,
          },
          {
            role: 'patient',
            text: 'Oui, je les prends régulièrement. La douleur diminue progressivement.',
            delayMs: 11500,
          },
          {
            role: 'agent',
            text: 'Très bien. Avez-vous constaté un gonflement, une rougeur ou un écoulement au niveau de la cicatrice ?',
            delayMs: 14500,
          },
          {
            role: 'patient',
            text: 'Non, la cicatrice est propre. Un peu de gonflement mais ça diminue.',
            delayMs: 17500,
          },
          {
            role: 'agent',
            text: 'Parfait. Avez-vous commencé les exercices de rééducation prescrits par le kinésithérapeute ?',
            delayMs: 20500,
          },
        ],
        cancer: [
          {
            role: 'agent',
            text: "Bonjour, je suis Clara l'assistant de suivi de votre médecin. Êtes-vous disponible pour votre suivi entre deux cures de chimiothérapie ?",
            delayMs: 0,
          },
          {
            role: 'patient',
            text: 'Oui, bonjour. Je suis disponible.',
            delayMs: 1500,
          },
          {
            role: 'agent',
            text: 'Nous sommes à J+10 après votre 3ème cure. Avez-vous eu des nausées ou vomissements cette semaine ?',
            delayMs: 3000,
          },
          {
            role: 'patient',
            text: 'Oui, des nausées les 3 premiers jours, mais ça va mieux maintenant.',
            delayMs: 5500,
          },
          {
            role: 'agent',
            text: "D'accord. Avez-vous pris les anti-émétiques prescrits ? Ondansétron si besoin ?",
            delayMs: 8500,
          },
          {
            role: 'patient',
            text: "Oui, j'ai pris 2 comprimés les premiers jours. Ça m'a bien aidé.",
            delayMs: 11500,
          },
          {
            role: 'agent',
            text: 'Très bien. Comment est votre appétit ? Arrivez-vous à maintenir une alimentation suffisante ?',
            delayMs: 14500,
          },
          {
            role: 'patient',
            text: 'Ça revient progressivement. Je mange des petites portions plusieurs fois par jour.',
            delayMs: 17500,
          },
          {
            role: 'agent',
            text: 'Parfait. Avez-vous constaté de la fièvre supérieure à 38°C ou des frissons ?',
            delayMs: 20500,
          },
        ],
        'transplantation-hepatique': [
          {
            role: 'agent',
            text: "Bonjour, je suis Clara l'assistant de suivi du service de transplantation. Je vous appelle concernant votre suivi hebdomadaire post-greffe.",
            delayMs: 0,
          },
          {
            role: 'patient',
            text: 'Oui, bonjour. Je suis disponible.',
            delayMs: 1500,
          },
          {
            role: 'agent',
            text: 'Nous sommes à M+2 après votre transplantation. Prenez-vous bien votre traitement immunosuppresseur aux heures fixes ?',
            delayMs: 3000,
          },
          {
            role: 'patient',
            text: 'Oui, tacrolimus à 8h et 20h tous les jours, sans oubli.',
            delayMs: 5500,
          },
          {
            role: 'agent',
            text: 'Excellent. Avez-vous constaté de la fièvre, des douleurs abdominales ou une jaunisse ?',
            delayMs: 8500,
          },
          {
            role: 'patient',
            text: 'Non, aucun de ces symptômes. Je me sens bien.',
            delayMs: 11500,
          },
          {
            role: 'agent',
            text: 'Parfait. Avez-vous fait votre prise de sang de contrôle cette semaine ? Bilan hépatique et taux de tacrolimus ?',
            delayMs: 14500,
          },
          {
            role: 'patient',
            text: "Oui, hier matin à jeun. J'attends les résultats.",
            delayMs: 17500,
          },
          {
            role: 'agent',
            text: "Très bien. Respectez-vous les consignes d'hygiène ? Lavage des mains, éviter les contacts avec personnes malades ?",
            delayMs: 20500,
          },
        ],
        'chirurgie-esthetique': [
          {
            role: 'agent',
            text: "Bonjour, je suis Clara l'assistant de suivi de votre médecin. Je vous appelle concernant votre suivi post-rhinoplastie. Êtes-vous disponible quelques minutes ?",
            delayMs: 0,
          },
          {
            role: 'patient',
            text: 'Oui, bonjour. Je suis disponible.',
            delayMs: 1500,
          },
          {
            role: 'agent',
            text: "Nous sommes à J+5 après votre intervention. Comment évaluez-vous les ecchymoses et l'œdème ?",
            delayMs: 3000,
          },
          {
            role: 'patient',
            text: "Les bleus commencent à diminuer. Le gonflement est encore présent mais moins qu'avant.",
            delayMs: 5500,
          },
          {
            role: 'agent',
            text: "C'est normal à ce stade. Appliquez-vous bien les compresses froides 3 fois par jour comme prescrit ?",
            delayMs: 8500,
          },
          {
            role: 'patient',
            text: "Oui, je fais attention. J'applique les compresses régulièrement.",
            delayMs: 11500,
          },
          {
            role: 'agent',
            text: "Parfait. Dormez-vous bien en position semi-assise avec 2 oreillers pour limiter l'œdème ?",
            delayMs: 14500,
          },
          {
            role: 'patient',
            text: "Oui, je dors avec la tête surélevée. C'est un peu inconfortable mais je m'habitue.",
            delayMs: 17500,
          },
          {
            role: 'agent',
            text: 'Très bien. Avez-vous des saignements de nez importants ou des douleurs inhabituelles ?',
            delayMs: 20500,
          },
        ],
      },
    },
    problemCard: {
      badge: 'Constat terrain',
      titlePrefix: 'Le suivi repose encore largement sur la',
      titleAccent: 'réactivité',
      titleSuffix: 'du patient',
      intro:
        "Dans de nombreux parcours ambulatoires, chroniques ou spécialisés, le suivi repose sur des relances manuelles et des outils hétérogènes, souvent dépendants de l'initiative du patient ou de la disponibilité des équipes.",
      problems: [
        {
          title: 'Questionnaires peu complétés',
          description:
            "Les PROMS et ePRO sont fréquemment sous-remplis, limitant la visibilité continue sur l'évolution clinique.",
        },
        {
          title: 'Temps soignant mobilisé',
          description:
            'Infirmiers coordinateurs, ARC et équipes médicales consacrent une part importante de leur temps à relancer et documenter manuellement les échanges.',
        },
        {
          title: 'Retours non structurés',
          description:
            'Les informations remontent par des canaux variés (appels spontanés, emails, SMS), difficiles à consolider et à tracer de manière homogène.',
        },
        {
          title: 'Engagement numérique hétérogène',
          description:
            'Les applications et portails patients nécessitent une disponibilité et une aisance numérique qui ne sont pas toujours compatibles avec certains parcours de soins, notamment chez les patients fragilisés.',
        },
      ],
      outroLine1: 'Certains signaux précoces restent silencieux.',
      outroLine2: "Et c'est souvent là que le risque apparaît.",
    },
    homeOurSolution: {
      eyebrow: 'Notre approche',
      title: 'Un suivi actif, déclenché par vos équipes.',
      statementLine1: 'Vous définissez le protocole.',
      statementLine2: "L'IA vocale exécute le suivi.",
      statementBody:
        "Chaque échange est structuré et restitué sous forme de compte-rendu utile à l'équipe.",
      impactTitle: 'Ce que ça change',
      impactItems: [
        'un suivi régulier, non dépendant du "patient qui pense à appeler"',
        'une information homogène, comparable dans le temps',
        'une remontée des situations à risque selon vos critères',
      ],
      workflow: {
        eyebrow: 'Fonctionnement',
        title: 'Comment ça marche',
        chip: 'Cadre structuré et supervision clinique',
        steps: [
          {
            title: 'Vos protocoles',
            body: "Vous définissez les questions, la fréquence, les seuils d'alerte, et les règles d'escalade.",
          },
          {
            title: 'Consentement patient',
            body: 'Le patient accepte explicitement le suivi et le canal vocal.',
          },
          {
            title: 'Appels vocaux structurés',
            body: 'Appels programmés, guidés, avec un entretien court et cadré.',
          },
          {
            title: 'Structuration et synthèse',
            body: 'Les réponses sont organisées et résumées en informations exploitables.',
          },
          {
            title: 'Alertes sous supervision',
            body: "Les alertes suivent vos critères. L'équipe reste décisionnaire.",
          },
        ],
      },
      visual: {
        alertTitle: 'Signalement clinique',
        alertBody:
          "Les alertes sont priorisées selon vos seuils, puis transmises de façon lisible à l'équipe.",
        chartTitle: 'Visualisation simplifiée',
        chartLineLabel: 'Évolution symptômes (J+1 à J+7)',
        chartBarsLabel: 'Indicateurs déclaratifs',
        badges: {
          lowAlert: 'Alerte faible',
          stable: 'Stable',
          monitoring: 'Surveillance',
        },
      },
      reassurance:
        "Aucune décision médicale autonome. L'IA organise, l'équipe arbitre.",
    },
    voiceChannel: {
      eyebrow: 'Canal vocal',
      title: 'Pourquoi le canal vocal fonctionne en santé',
      coreEyebrow: 'Usage réel',
      coreText:
        'Le canal vocal s’intègre au quotidien du patient sans complexifier le parcours.',
      items: [
        {
          title: 'Universel',
          body: 'Pas d’application à télécharger, pas de compte à créer, pas de friction.',
        },
        {
          title: 'Naturel',
          body: 'Le patient répond comme il parlerait à une équipe soignante.',
        },
        {
          title: 'Régulier',
          body: 'Un appel programmé installe un rythme et sécurise le parcours.',
        },
        {
          title: 'Inclusif',
          body: 'Particulièrement adapté aux patients fragilisés ou peu “digital”.',
        },
      ],
      closing:
        'Un protocole n’est efficace que si le canal est réellement utilisé.',
    },
    homeUseCases: {
      eyebrow: 'Cas d’usage',
      title: 'Des cas d’usage adaptés à différents contextes',
      explore: 'Explorer les cas d’usage',
      imagePlaceholder: 'Visuel à venir',
      items: [
        {
          title: 'Suivi pré et post-intervention',
          body: 'Ambulatoire, chirurgie, dermatologie, médecine esthétique, médecine du sport.',
          contexts: [
            'Ambulatoire',
            'Chirurgie',
            'Dermatologie',
            'Médecine esthétique',
            'Médecine du sport',
          ],
          cta: 'Voir la page dédiée',
        },
        {
          title: 'Suivi chronique',
          body: 'Suivi régulier, observance, qualité de vie, coordination.',
          contexts: [
            'Suivi régulier',
            'Observance',
            'Qualité de vie',
            'Coordination',
          ],
          cta: 'Voir la page dédiée',
        },
        {
          title: 'Parcours à haute vigilance',
          body: 'Oncologie, transplantation, cardiologie, santé mentale : suivi rapproché, signaux faibles, escalade maîtrisée.',
          contexts: [
            'Oncologie',
            'Transplantation',
            'Cardiologie',
            'Santé mentale',
          ],
          cta: 'Voir la page dédiée',
        },
      ],
    },
    homeSecurityFrame: {
      eyebrow: 'Sécurité & cadre',
      title: 'Conçu pour des environnements médicaux exigeants.',
      subtitle:
        'Un socle opérationnel pensé pour la continuité des parcours, la supervision clinique et la conformité des usages.',
      tableHeaderLeft: 'Pilier',
      tableHeaderRight: 'Ce que cela garantit',
      rows: [
        {
          title: 'Protection des données',
          body: 'Consentement explicite et journalisation complète.',
        },
        {
          title: 'Hébergement sécurisé',
          body: 'Infrastructure compatible exigences applicables en santé.',
        },
        {
          title: 'Traçabilité',
          body: 'Historique structuré et exportable.',
        },
        {
          title: 'Positionnement réglementaire clair',
          body: 'Outil organisationnel supervisé, sans décision médicale autonome.',
        },
      ],
      cta: 'En savoir plus sur la sécurité',
    },
    logosStrip: {
      title: 'Marques accompagnées',
    },
    structureSupervise: {
      title: 'Structurer. Superviser. Différencier.',
      items: [
        {
          title: 'Protocoles personnalisés',
          body: 'Définition de scénarios personnalisés\nParamétrage des jalons (J-7, J-1, J+1, J+7, J+30…)\nParamétrés selon chaque acte.',
        },
        {
          title: 'Suivi longitudinal',
          body: 'Historisation des retours dans le temps.\nGraphiques de suivi',
        },
        {
          title: 'Supervision médicale',
          body: 'Aucune décision automatisée.\nSeuils de vigilance définis par la clinique\nTraçabilité de tous les retours',
        },
      ],
    },
    imagineProtocol: {
      heading: 'Imaginer votre propre protocole de suivi',
      left: {
        label: "Avant l'intervention",
        prepTitle: 'Préparation structurée:',
        prepItems: [
          'Vérification des consignes médicales',
          'Confirmation logistique',
          "Recueil d'inquiétudes",
          'Évaluation anxiété (0–10)',
          'Réponses aux questions du patient',
          'Documentation des échanges',
        ],
        benefitsTitle: 'Bénéfices:',
        benefitsItems: [
          'Réduction annulations',
          'Consentement mieux documenté',
          'Préparation optimisée',
        ],
      },
      right: {
        brand: 'DOCTINUM',
        label: "Après l'intervention",
        monitorTitle: 'Surveillance méthodique:',
        monitorLead: "Selon l'acte à des moments définis (J+1, J+7 ...)",
        monitorItems: [
          'Douleur (0–10)',
          'Signes déclaratifs sensibles',
          'Respect des consignes',
          'Évolution œdème',
          'Satisfaction progressive',
        ],
        responsesTitle: 'Les réponses sont:',
        responsesItems: ['Structurées', 'Historisées', 'Priorisées'],
      },
    },
    sportsStructure: {
      title: 'COORDONNER LE PARCOURS AVEC PLUSIEURS ACTEURS',
      subtitle:
        'Le dispositif ne remplace ni le médecin ni le kinésithérapeute.',
      items: [
        { title: 'Un outil de structuration longitudinale' },
        { title: 'Un support organisationnel' },
        { title: 'Un système d’objectivation des indicateurs déclaratifs' },
        { title: 'Un point de visibilité pour le médecin référent' },
      ],
      closing:
        'La rééducation reste centrale. Le dispositif structure l’information autour d’elle.',
    },
    sportsProtocol: {
      heading: 'Imaginer votre propre protocole de suivi',
      leftTitle: 'OBJECTIVER LA RÉCUPÉRATION DANS LE TEMPS',
      leftIntro: 'Le protocole peut inclure :',
      leftList: [
        'Douleur (0-10)',
        'Perception de mobilité',
        'Sensation d’instabilité',
        'Fatigue musculaire',
        'Adhésion aux séances de kinésithérapie',
        'Reprise progressive d’activité',
      ],
      leftBottomIntro: 'Ces indicateurs sont :',
      leftBottom: [
        'Historisés',
        'Visualisés longitudinalement',
        'Priorisés selon des seuils définis par l’équipe',
      ],
      rightTitle: 'DÉTECTER LES DÉCROCHAGES ET LES REPRISES PRÉMATURÉES',
      rightIntro: 'En pratique, le dispositif permet d’identifier :',
      rightList: [
        'Une augmentation brutale de douleur',
        'Une baisse d’adhésion aux séances',
        'Une reprise d’activité non planifiée',
        'Une dégradation perçue de la mobilité',
      ],
      rightBottom:
        'Le système ne prend aucune décision. Il structure et priorise l’information.',
      brand: 'DOCTINUM',
    },
    sportsCases: {
      case1: {
        title: 'COORDINATION AVEC LA RÉÉDUCATION',
        body: 'Dans un centre structuré :',
        listItems: [
          'Le médecin définit le protocole',
          'Les indicateurs peuvent être partagés',
          'La récupération devient objectivée',
          'Les décisions restent humaines',
          'Le dispositif agit comme une couche transversale, facilitant la cohérence du parcours.',
        ],
        brand: 'Rééducation',
      },
      case2: {
        title: 'ADAPTÉ AUX CENTRES INTÉGRÉS',
        listItems: [
          'Centres de médecine du sport',
          'Cliniques orthopédiques privées',
          'Structures avec kinésithérapie interne',
          'Instituts de performance',
        ],
        brand: 'Centres',
        buttonLabel: 'En savoir plus',
      },
    },
    notCallbot: {
      title: 'Une',
      titleAccent: 'infrastructure clinique',
      titleSuffix: ', pas un simple agent vocal.',
      items: [
        {
          title: 'Protocoles paramétrables et sécurisés',
          body: 'Le suivi repose sur un protocole appliqué de manière rigoureuse par vos agents dans une conversation fluide avec le patient.',
        },
        {
          title: 'Suivi longitudinal',
          body: 'Les données sont organisées dans le temps, pas traitées comme des échanges isolés.',
        },
        {
          title: 'Supervision médicale constante',
          body: "Aucune décision médicale autonome. Les alertes sont définies par l'équipe.",
        },
      ],
    },
    slidingBanner: {
      items: [
        'Sans application à installer',
        'Consentement explicite',
        'Traçabilité complète',
      ],
    },
    dermatologyNarrative: {
      badge: 'Parcours dermatologiques',
      title: 'Le traitement ne s’arrête pas à la prescription.',
      intro:
        'En dermatologie, de nombreux parcours reposent sur des traitements longs et évolutifs :',
      firstList: [
        'Acné sévère sous isotrétinoïne',
        'Psoriasis sous biothérapie',
        'Eczéma chronique',
        'Suites post-laser ou peelings',
      ],
      betweenIntro: 'Entre deux consultations, le suivi repose souvent sur :',
      secondList: [
        'La réactivité du patient',
        'Des échanges informels',
        'Une auto-évaluation non structurée',
        'Des retours hétérogènes',
      ],
      conclusion: 'Or, les traitements dermatologiques impliquent :',
      lastList: [
        'Une observance rigoureuse',
        'Une surveillance des effets secondaires',
        'Une évaluation progressive de l’efficacité',
        'Une documentation régulière',
      ],
    },
    dermatologyFragile: {
      title: 'Traitements longs, suivi fragile',
      items: {
        effects: {
          title: 'Effets secondaires',
          body: 'Certains traitements nécessitent un suivi régulier des effets indésirables déclaratifs.',
        },
        adherence: {
          title: 'Observance variable',
          body: 'L’adhésion au traitement peut fluctuer dans le temps.',
        },
        subjective: {
          title: 'Perception subjective',
          body: 'L’évolution des symptômes est souvent décrite sans structuration ni comparaison temporelle.',
        },
      },
    },
    dermatologyTrajectory: {
      weeksChip: 'Semaines 1 → 12',
      severityChip: 'Sévérité (0-10)',
      drynessChip: 'Sécheresse',
      adherenceChip: 'Adhésion',
      title: 'Transformer les retours isolés en trajectoire structurée.',
      intro: 'Le dispositif permet :',
      items: [
        'Recueil hebdomadaire ou mensuel des symptômes',
        'Structuration déclarative standardisée',
        'Historisation automatique',
        'Visualisation des tendances',
        'Définition de seuils de vigilance',
      ],
      closing:
        'Les réponses ne sont plus des échanges ponctuels. Elles deviennent une évolution documentée.',
    },
    dermatologyConfigurations: {
      heading: 'Imaginer votre propre protocole de suivi',
      intro: 'Exemples de configurations possibles',
      warning:
        'Scénarios illustratifs. Protocoles définis par l’équipe médicale.',
      cards: [
        {
          title: 'Acné sévère - Isotrétinoïne',
          items: [
            'Sécheresse cutanée (0-10)',
            'Irritation',
            'Humeur déclarative',
            'Adhésion traitement',
            'Évolution perçue',
          ],
        },
        {
          title: 'Psoriasis sous biothérapie',
          items: [
            'Intensité plaques',
            'Démangeaisons',
            'Fatigue associée',
            'Impact qualité de vie',
            'Tolérance traitement',
          ],
        },
        {
          title: 'Post-laser dermatologique',
          items: [
            'Douleur',
            'Rougeur',
            'Œdème',
            'Croûtes anormales',
            'Satisfaction à J+7',
          ],
        },
      ],
    },
    dermatologyOrganization: {
      title: 'Adapter le niveau de suivi à votre pratique.',
      systemIntro: 'Le dispositif permet :',
      systemList: [
        'Intensité variable selon pathologie',
        'Fréquence adaptable',
        'Protocoles distincts par indication',
        'Activation sélective selon patient',
      ],
      clinicIntro: 'Chaque cabinet définit :',
      clinicList: ['Ses jalons', 'Ses seuils', 'Son niveau de granularité'],
      schema: {
        pathology: 'Pathologie',
        protocol: 'Protocole',
        frequency: 'Fréquence',
        milestones: 'Jalons',
        alerts: 'Alertes',
      },
    },
  },
  content: {
    helpItems: [
      {
        title: 'Création de contenu',
        body: 'Des visuels et messages conçus pour arrêter le scroll, alignés à votre marque et votre audience.',
        emoji: '🎬',
        gradient: 'linear-gradient(135deg,#1a1a2e,#16213e)',
        delayClass: 'd1',
      },
      {
        title: 'Gestion social media',
        body: 'Gestion complète multi-plateformes : publication, planification et communauté.',
        emoji: '📱',
        gradient: 'linear-gradient(135deg,#0f3460,#533483)',
        delayClass: 'd2',
      },
      {
        title: 'Paid media',
        body: 'Campagnes data-driven qui trouvent votre audience et transforment l’attention en revenu.',
        emoji: '💰',
        gradient: 'linear-gradient(135deg,#f7971e,#ffd200)',
        delayClass: 'd3',
      },
    ],
    homeFaqItems: [
      {
        question: 'Y a-t-il une durée d’engagement minimum ?',
        answer:
          'Non. Nous travaillons au mois. Vous pouvez mettre en pause ou arrêter avec 30 jours de préavis.',
      },
      {
        question: 'Pouvez-vous respecter notre charte de marque ?',
        answer:
          'Oui. Nous travaillons avec vos guidelines. Si vous n’en avez pas, nous pouvons les créer pendant l’onboarding.',
      },
      {
        question: 'Quelles plateformes gérez-vous ?',
        answer:
          'Instagram, TikTok, LinkedIn, Facebook, Pinterest et Threads. La plupart des clients démarrent sur 2–3 plateformes.',
      },
      {
        question: 'Quand voit-on les premiers résultats ?',
        answer:
          'La croissance organique devient visible sous 60–90 jours. Le paid peut générer un ROI en 2–4 semaines selon le budget.',
      },
    ],
    storyVideos: ['/assets/videos/doctinum_hero.mp4'],
    aboutTeamMembers: [
      {
        name: 'Sofia Little',
        role: 'Lead créative',
        gradient: 'linear-gradient(160deg,#f0c5a8,#d4a090,#c08878)',
        delayClass: 'd1',
      },
      {
        name: 'James Cohen',
        role: 'Fondateur & CEO',
        gradient: 'linear-gradient(160deg,#c8d4e0,#a8b8d0,#90a8c0)',
        delayClass: 'd2',
      },
      {
        name: 'Maya Rodriguez',
        role: 'Spécialiste growth',
        gradient: 'linear-gradient(160deg,#d0c8e0,#b0a0c8,#9890b8)',
        delayClass: 'd3',
      },
    ],
    aboutAwards: [
      [
        'Agence Social Media de l’année',
        'Récompensée pour des campagnes créatives et des résultats mesurables sur plusieurs secteurs.',
        '2024',
      ],
      [
        'Meilleure campagne de stratégie de contenu',
        'Récompensée pour notre approche innovante du contenu UGC à fort potentiel viral.',
        '2023',
      ],
      [
        'Prix Innovation Marketing Digital',
        'Distinguée pour des méthodes qui améliorent engagement et conversion.',
        '2024',
      ],
      [
        'Excellence agence émergente',
        'Reconnaissance parmi les agences social media à plus forte croissance.',
        '2023',
      ],
    ],
    caseStudyCards: [
      {
        name: 'Glowhaus',
        category: 'Beauté',
        brand: 'Glowhaus',
        gradient: 'linear-gradient(135deg,#f5c5a8,#e8a090,#c87060)',
        delayClass: 'd1',
      },
      {
        name: 'Border',
        category: 'Technologie',
        brand: '◆ Border',
        gradient: 'linear-gradient(135deg,#e0c8b0,#c8a890,#b08870)',
        delayClass: 'd2',
      },
      {
        name: 'Then',
        category: 'Mode',
        brand: 'then',
        gradient: 'linear-gradient(135deg,#f0e0d0,#e0c8b8,#c8a898)',
        delayClass: 'd3',
        serif: true,
      },
      {
        name: 'SnapShot',
        category: 'Photographie',
        brand: '⚡ SnapShot',
        gradient: 'linear-gradient(135deg,#d8e0d0,#c0c8b8,#a8b0a0)',
        delayClass: 'd4',
      },
    ],
    blogCards: [
      [
        'Créer du contenu qui convertit vraiment',
        'Arrêtez le contenu qui fait des likes sans ventes. Voici ce qui fonctionne vraiment.',
        '17 oct. 2025',
        'linear-gradient(160deg,#f0e8d8,#d8c8a8,#c0a878)',
        'd1',
      ],
      [
        'Comment nous avons scalé une marque beauté à 100K',
        'Décryptage complet de la stratégie, du contenu et des tactiques de croissance.',
        '28 sept. 2025',
        'linear-gradient(160deg,#e8c8b8,#d4a898,#c09080)',
        'd2',
      ],
      [
        'Les KPI à suivre au-delà des vanity metrics',
        'Les likes et abonnés ne paient pas les factures. Voici quoi mesurer vraiment.',
        '10 sept. 2025',
        'linear-gradient(160deg,#e8e0d8,#c8c0b0,#a8a090)',
        'd3',
      ],
      [
        'Pourquoi vos Reels ne font pas de vues',
        'Erreurs fréquentes qui cassent votre portée et ajustements simples pour performer.',
        '22 août 2025',
        'linear-gradient(160deg,#c0b8d0,#a098c0,#8880a8)',
        'd4',
      ],
    ],
    contactFaqItems: [
      {
        question: "Quel est le délai de mise en place d'un pilote ?",
        answer:
          "Un projet pilote peut être déployé en 3 à 6 semaines : définition du protocole (1-2 semaines), configuration de l'agent (1-2 semaines), phase de test (1 semaine), puis démarrage progressif.",
      },
      {
        question:
          'Comment garantissez-vous la conformité RGPD et sécurité des données ?',
        answer:
          "Toutes les données sont hébergées en Europe sur infrastructure certifiée. Nous appliquons les principes RGPD (consentement explicite, minimisation des données, droit d'accès et d'effacement). Les échanges vocaux sont chiffrés et tracés.",
      },
      {
        question: 'Quels types de parcours sont compatibles ?',
        answer:
          "Suivi pré/post-opératoire, parcours chroniques, PROMS, dermatologie, médecine du sport, programmes d'accompagnement patient. Tout parcours nécessitant un suivi régulier et structuré peut être adapté.",
      },
      {
        question:
          "Le système s'intègre-t-il avec notre DPI ou logiciel métier ?",
        answer:
          "Nous proposons des exports structurés (PDF, JSON, HL7 FHIR) et pouvons étudier des intégrations API selon votre infrastructure. L'objectif est de faciliter la consolidation dans vos outils existants.",
      },
      {
        question: 'Quel accompagnement proposez-vous ?',
        answer:
          'Formation des équipes, co-construction du protocole clinique, support technique continu et revues régulières pour ajuster le suivi selon vos retours terrain.',
      },
    ],
    contactForm: {
      title: 'Formulaire de contact',
      fields: [
        { label: 'Nom', type: 'text' },
        { label: 'Email', type: 'email' },
        { label: 'Téléphone', type: 'tel' },
        { label: 'Message', type: 'textarea' },
      ],
      submitLabel: 'Envoyer',
    },
    contactServices: {
      title: 'Nos services',
      items: [
        {
          title: 'Développement de protocoles de suivi',
          body: 'Nous aidons à créer des protocoles de suivi personnalisés pour vos patients.',
        },
        {
          title: 'Formation et accompagnement',
          body: 'Nous proposons une formation et un accompagnement pour vous aider à utiliser notre système.',
        },
        {
          title: 'Intégration avec vos outils existants',
          body: 'Nous pouvons intégrer notre système avec vos outils existants pour faciliter la consolidation.',
        },
      ],
    },
    contactBudget: {
      title: 'Budget',
      items: [
        {
          title: 'Coût de mise en place',
          body: 'Le coût de mise en place est de 500€.',
        },
        { title: 'Coût mensuel', body: 'Le coût mensuel est de 200€.' },
      ],
    },
  },
  pages: {
    about: {
      badge: 'À propos',
      title: 'Qui nous sommes',
      description:
        'Nous sommes des stratèges, créateurs et experts growth convaincus que les réseaux sociaux doivent générer de vrais résultats business.',
    },
    caseStudies: {
      badge: 'Cas clients',
      title: 'Nos meilleurs projets',
      description:
        'Découvrez comment nous transformons les réseaux sociaux en moteur de croissance mesurable.',
    },
    blog: {
      badge: 'Blog',
      title: 'Derniers insights',
      description:
        'Des stratégies actionnables et des tendances pour transformer votre présence social en croissance business.',
    },
    solutionsList: [
      { id: 'surgery-aesthetic', title: 'Chirurgie & médecine esthétique' },
      { id: 'surgery-rhinoplasty', title: 'Rhinoplastie' },
      { id: 'surgery-liposuction', title: 'Liposuccion' },
      {
        id: 'surgery-hyaluronic-injection',
        title: 'Injections acide hyaluronique',
      },
      { id: 'sports-medicine', title: 'Médecine du sport' },
      {
        id: 'sports-integrated-centers',
        title: 'Centres Intégrés Médecine du Sport',
      },
      { id: 'dermatology', title: 'Dermatologie' },
      { id: 'proms', title: 'PROMs' },
      {
        id: 'patient-support-programs',
        title: "Programmes d'accompagnement patients",
      },
      {
        id: 'prevention-workplace-health',
        title: 'Prévention santé au travail',
      },
      {
        id: 'coordinated-chronic-pathways',
        title: 'Parcours chroniques coordonnés',
      },
      { id: 'hv-transplantation', title: 'Transplantation' },
      { id: 'hv-oncology', title: 'Oncologie' },
      { id: 'hv-chronic-cardiology', title: 'Cardiologie chronique' },
      { id: 'hv-rare-diseases', title: 'Maladies rares' },
      { id: 'hv-mental-health', title: 'Santé mentale' },
    ],
    solutions: {
      surgery: {
        hero: {
          badge: 'Suivi pré & post intervention',
          title: 'Chirurgie & médecine esthétique',
        },
        testimonial:
          'En chirurgie et médecine esthétique, la qualité perçue repose autant sur le suivi que sur l’acte lui-même.',
        challengeItems: [
          {
            label: 'Constat',
            title:
              'Entre la préparation et la récupération, le suivi peut devenir :',
            listItems: [
              'Fragmenté',
              'Réactif',
              "Dépendant d'appels manuels",
              'Peu traçable',
            ],
          },
          {
            label: 'Challenge',
            title:
              'Un positionnement haut de gamme exige une continuité structurée.',
          },
        ],
        examples: {
          badge: 'Situations cliniques',
          title: 'Exemples de configuration de suivi',
          description:
            'Chaque structure définit son propre modèle de suivi. Voici quelques illustrations',
          cards: [
            {
              title: 'Rhinoplastie',
              imageUrl: '/assets/images/rhinoplastie.png',
              overlayGradient: 'var(--gradient-accent-warm-overlay)',
              description:
                'Créer un suivi pré et post-opératoire clair, rassurant et traçable.',
              page: 'surgery-rhinoplasty',
            },
            {
              title: 'Liposuccion',
              imageUrl: '/assets/images/liposuccion.png',
              overlayGradient: 'var(--gradient-accent-warm-terra-overlay)',
              description:
                'Structurer les jalons de récupération et prioriser les signaux utiles.',
              page: 'surgery-liposuction',
            },
            {
              title: 'Injection',
              imageUrl: '/assets/images/injection.png',
              overlayGradient: 'var(--gradient-accent-cool-overlay)',
              description:
                'Assurer un accompagnement homogène, de la préparation au contrôle tardif.',
              page: 'surgery-hyaluronic-injection',
            },
          ],
        },
      },
      sports: {
        hero: {
          badge: 'Coordination & récupération',
          title: 'Médecine du sport',
          subtitle:
            'Structurer la récupération et coordonner les acteurs du parcours',
        },
        testimonial:
          'Structurer la récupération et coordonner les acteurs du parcours',
        challengeItems: [
          {
            label: 'Parcours',
            title:
              'En médecine du sport, le parcours est rarement linéaire. Le patient peut être suivi par :',
            description: '',
            listItems: [
              'Un médecin du sport',
              'Un chirurgien orthopédiste',
              'Un kinésithérapeute',
              'Parfois un préparateur physique',
            ],
          },
          {
            label: 'Enjeu',
            title:
              'Le problème n’est pas l’absence de rééducation. Le problème est souvent :',
            description: '',
            listItems: [
              'La fragmentation du suivi',
              'Le manque de visibilité longitudinale',
              'La reprise prématurée',
              'L’adhésion irrégulière',
              'Entre deux consultations médicales, la récupération reste peu objectivée.',
            ],
          },
        ],
      },
      dermatology: {
        hero: {
          badge: 'Suivi dermatologique longitudinal',
          title: 'Dermatologie',
          subtitle: 'Structurer les traitements dermatologiques dans la durée',
        },
        testimonial:
          "Structurer les traitements dermatologiques dans la durée et objectiver l'évolution.",
        intro: {
          title: 'Structurer les traitements dermatologiques dans la durée.',
          description:
            "Une infrastructure d'intelligence artificielle vocale qui applique vos protocoles de suivi, contacte les patients à intervalles définis et structure les retours déclaratifs dans le temps — sous supervision médicale.",
          primaryCta: 'Évaluer un projet pilote',
          secondaryCta: 'Échanger avec notre équipe',
        },
        statement: "Le traitement ne s'arrête pas à la prescription.",
        challengeItems: [
          {
            label: 'Constat',
            title:
              'En dermatologie, de nombreux parcours reposent sur des traitements longs et évolutifs :',
            listItems: [
              'Acné sévère sous isotrétinoïne',
              'Psoriasis sous biothérapie',
              'Eczéma chronique',
              'Suites post-laser ou peelings',
            ],
          },
          {
            label: 'Suivi actuel',
            title: 'Entre deux consultations, le suivi repose souvent sur :',
            listItems: [
              'La réactivité du patient',
              'Des échanges informels',
              'Une auto-évaluation non structurée',
              'Des retours hétérogènes',
            ],
          },
          {
            label: 'Challenge',
            title: 'Or, les traitements dermatologiques impliquent :',
            listItems: [
              'Une observance rigoureuse',
              'Une surveillance des effets secondaires',
              "Une évaluation progressive de l'efficacité",
              'Une documentation régulière',
            ],
          },
        ],
        organizationTool: {
          title: "Un outil d'organisation, pas un substitut clinique.",
          items: [
            {
              title: 'Priorisation des consultations',
              body: 'Identification des situations nécessitant un rendez-vous anticipé.',
            },
            {
              title: 'Documentation structurée',
              body: 'Historique exportable des retours déclaratifs.',
            },
            {
              title: 'Vision globale',
              body: 'Lecture longitudinale facilitée entre deux consultations.',
            },
            {
              title: 'Supervision constante',
              body: "Aucune décision automatisée. Les critères d'alerte sont définis par le praticien.",
            },
          ],
        },
      },
      rhinoplasty: {
        hero: {
          badge: 'Scénario illustratif',
          title: 'Exemple de parcours configuré — Rhinoplastie',
        },
        statement:
          'Un protocole structuré avant et après intervention, permettant de sécuriser les suites opératoires et de proposer une expérience patient premium.',
        challengeItems: [
          {
            label: 'Constat',
            title: 'La rhinoplastie est :',
            listItems: [
              'Un acte chirurgical ambulatoire',
              'Avec œdème et ecchymoses fréquents',
              "Risque d'hématome ou saignement",
              'Forte charge émotionnelle pour le patient',
            ],
          },
          {
            label: 'Challenge',
            title:
              'Le suivi repose souvent sur des appels manuels ou la réactivité du patient.',
          },
        ],
        protocolConfiguration: {
          badge: 'Configuration possible',
          title: 'Configuration possible du protocole',
          disclaimer:
            "Scénario illustratif. Les protocoles sont définis par l'équipe médicale.",
          phases: [
            {
              title: 'Phase pré-opératoire',
              milestones: [
                {
                  timing: 'J-7',
                  items: [
                    'Vérification arrêt tabac',
                    'Vérification anticoagulants',
                    'Confirmation compréhension des suites',
                    "Recueil niveau d'anxiété (0–10)",
                  ],
                },
                {
                  timing: 'J-1',
                  items: [
                    'Confirmation horaire',
                    'Organisation retour domicile',
                    'Rappel consignes',
                  ],
                },
              ],
            },
            {
              title: 'Phase post-opératoire',
              milestones: [
                {
                  timing: 'J+1',
                  items: [
                    'Douleur (0–10)',
                    'Saignement inhabituel ?',
                    'Température',
                  ],
                },
                {
                  timing: 'J+7',
                  items: ['Intensité œdème', 'Écoulement', 'Ressenti global'],
                },
                {
                  timing: 'J+30',
                  items: [
                    'Perception du résultat',
                    'Satisfaction (0–10)',
                    'Recommandation du cabinet',
                  ],
                },
              ],
            },
          ],
        },
        premiumExperience: {
          title: 'Expérience patient premium',
          description:
            'Un accompagnement structuré qui renforce la confiance et la satisfaction.',
          patientPerception: {
            label: 'Le patient perçoit',
            items: [
              'Un accompagnement continu',
              'Une présence rassurante',
              'Une attention structurée',
              'Un suivi personnalisé',
            ],
          },
          clinicBenefits: {
            label: 'Cela renforce',
            items: [
              'La confiance',
              'La satisfaction',
              'La réputation du cabinet',
            ],
          },
        },
        clinicalBenefits: {
          title: 'Solution et bénéfices',
          subtitle:
            'Une infrastructure qui structure le suivi et valorise votre pratique.',
          items: [
            {
              title: 'Structuration et traçabilité',
              body: 'Tous les échanges sont documentés, horodatés et structurés pour une visibilité complète du parcours patient.',
            },
            {
              title: 'Priorisation des situations sensibles',
              body: "Les signaux faibles sont détectés selon vos critères et remontés à l'équipe médicale pour action.",
            },
            {
              title: 'Réduction des appels imprévisibles',
              body: 'Le suivi proactif diminue les appels spontanés et permet une meilleure organisation du temps soignant.',
            },
            {
              title: 'Image premium différenciante',
              body: 'Un accompagnement structuré qui renforce la perception de qualité et la réputation de votre pratique.',
            },
          ],
        },
      },
      liposuction: {
        hero: {
          badge: 'Scénario illustratif',
          title: 'Exemple de parcours configuré — Liposuccion',
        },
        statement:
          'Suivi intensif et vigilance prolongée pour sécuriser la récupération et optimiser les résultats.',
        challengeItems: [
          {
            label: 'Constat',
            title: 'La liposuccion entraîne :',
            listItems: [
              'Douleur variable',
              'Risque hématome',
              'Surveillance mobilité',
              'Récupération progressive',
            ],
          },
          {
            label: 'Challenge',
            title:
              'Un suivi structuré et prolongé pour accompagner la récupération.',
          },
        ],
        protocolConfiguration: {
          title: 'Configuration possible du protocole',
          disclaimer:
            "Scénario illustratif. Les protocoles sont définis par l'équipe médicale.",
          phases: [
            {
              title: 'Phase pré-opératoire',
              milestones: [
                {
                  timing: 'Pré-op',
                  items: [
                    'Vérification aide à domicile',
                    'Rappel consignes mobilité',
                  ],
                },
              ],
            },
            {
              title: 'Phase post-opératoire',
              milestones: [
                {
                  timing: 'J+1 / J+3 / J+7',
                  items: [
                    'Douleur',
                    'Tension excessive',
                    'Rougeur',
                    'Mobilisation',
                  ],
                },
                {
                  timing: 'J+30',
                  items: [
                    'Satisfaction',
                    'Perception silhouette',
                    "Suivi possible prolongé jusqu'à J+60",
                  ],
                },
              ],
            },
          ],
        },
        clinicalBenefits: {
          title: 'Solution et bénéfices',
          subtitle:
            'Une infrastructure qui structure le suivi et valorise votre pratique.',
          items: [
            {
              title: 'Structuration et traçabilité',
              body: 'Tous les échanges sont documentés, horodatés et structurés pour une visibilité complète du parcours patient.',
            },
            {
              title: 'Priorisation des situations sensibles',
              body: "Les signaux faibles sont détectés selon vos critères et remontés à l'équipe médicale pour action.",
            },
            {
              title: 'Réduction des appels imprévisibles',
              body: 'Le suivi proactif diminue les appels spontanés et permet une meilleure organisation du temps soignant.',
            },
            {
              title: 'Image premium différenciante',
              body: 'Un accompagnement structuré qui renforce la perception de qualité et la réputation de votre pratique.',
            },
          ],
        },
        premiumExperience: {
          title: 'Dimension premium',
          description:
            "Possibilité d'enrichir l'expérience patient avec des éléments personnalisés.",
          label: "Possibilité d'ajouter",
          items: [
            'Message personnalisé du chirurgien',
            'Rappel des étapes de récupération',
            'Suivi satisfaction progressif',
          ],
        },
      },
      hyaluronicInjection: {
        hero: {
          badge: 'Scénario illustratif',
          title: 'Exemple de parcours configuré — Injection acide hyaluronique',
        },
        statement:
          "Suivi léger et valorisation de l'expérience pour renforcer la fidélisation et l'image premium.",
        challengeItems: [
          {
            label: 'Contexte',
            title: 'Acte non chirurgical, mais :',
            listItems: [
              'Œdème possible',
              'Ecchymoses',
              'Attentes élevées',
              'Demandes de retouches',
            ],
          },
          {
            label: 'Challenge',
            title: "En médecine esthétique, le suivi devient un outil d'image.",
          },
        ],
        protocolConfiguration: {
          title: 'Configuration possible du protocole',
          disclaimer:
            "Scénario illustratif. Les protocoles sont définis par l'équipe médicale.",
          phases: [
            {
              title: 'Phase pré-injection',
              milestones: [
                {
                  timing: 'J-1',
                  items: [
                    'Rappel contre-indications',
                    'Vérification absence infection active',
                  ],
                },
              ],
            },
            {
              title: 'Phase post-injection',
              milestones: [
                {
                  timing: 'J+1',
                  items: [
                    'Œdème inhabituel ?',
                    'Douleur',
                    'Ecchymose importante ?',
                  ],
                },
                {
                  timing: 'J+7',
                  items: ['Satisfaction', 'Souhait de retouche ?'],
                },
              ],
            },
          ],
        },
        clinicalBenefits: {
          title: 'Solution et bénéfices',
          subtitle:
            'Une infrastructure qui structure le suivi et valorise votre pratique.',
          items: [
            {
              title: 'Structuration et traçabilité',
              body: 'Tous les échanges sont documentés, horodatés et structurés pour une visibilité complète du parcours patient.',
            },
            {
              title: 'Priorisation des situations sensibles',
              body: "Les signaux faibles sont détectés selon vos critères et remontés à l'équipe médicale pour action.",
            },
            {
              title: 'Réduction des appels imprévisibles',
              body: 'Le suivi proactif diminue les appels spontanés et permet une meilleure organisation du temps soignant.',
            },
            {
              title: 'Image premium différenciante',
              body: 'Un accompagnement structuré qui renforce la perception de qualité et la réputation de votre pratique.',
            },
          ],
        },
        premiumExperience: {
          title: 'Dimension premium très forte ici',
          description:
            'Le suivi devient un levier de différenciation et de fidélisation.',
          label: 'Impact',
          items: [
            'Suivi perçu comme haut de gamme',
            'Augmentation du taux de retour',
            'Meilleure fidélisation',
            'Différenciation marketing',
          ],
        },
      },
      integratedCenters: {
        hero: {
          badge: 'Centres pluridisciplinaires',
          title: 'Centres Intégrés Médecine du Sport',
        },
        statement:
          'Une infrastructure transversale pour centres pluridisciplinaires',
        centerChallenge: {
          label: 'Dans les centres intégrés réunissant',
          title: '',
          actors: [
            'Médecins',
            'Chirurgiens',
            'Kinésithérapeutes',
            'Préparateurs physiques',
          ],
          challenge: 'Le défi est la cohérence.',
        },
        deviceCapabilities: {
          title: 'Le dispositif permet',
          items: [
            'Une visibilité partagée des indicateurs déclaratifs',
            'Une structuration commune du parcours',
            'Une harmonisation des jalons',
            'Une priorisation centralisée des signaux sensibles',
          ],
        },
        centerBenefits: {
          title: 'Bénéfices pour le centre',
          items: [
            'Coordination améliorée',
            'Objectivation de la récupération',
            'Image innovante et structurée',
            'Différenciation sur le marché',
            'Optimisation organisationnelle',
          ],
        },
        useCases: {
          title: "Cas d'usage typiques",
          cases: [
            'Reconstruction LCA',
            'Réparation coiffe des rotateurs',
            'Tendinopathie chronique',
            'Retour au sport progressif',
          ],
        },
        deploymentPathway: {
          title: 'Déploiement possible',
          steps: [
            {
              title: 'Paramétrage spécifique centre',
              description:
                'Configuration adaptée aux protocoles et acteurs du centre',
            },
            {
              title: 'Configuration multi-acteurs',
              description:
                'Définition des rôles et visibilités pour chaque intervenant',
            },
            {
              title: 'Intégration progressive',
              description: 'Déploiement par étapes avec accompagnement continu',
            },
            {
              title: "Phase d'expérimentation encadrée",
              description: 'Test sur cas pilotes avec ajustements itératifs',
            },
          ],
        },
      },
      proms: {
        hero: {
          badge: 'PROMS & Questionnaires',
          title: 'PROMS & Questionnaires post-acte',
        },
        intro: {
          title:
            'Transformer vos questionnaires en suivi vocal structuré et longitudinal.',
          description:
            "Appliquez vos PROMS existants via une infrastructure d'IA vocale spécialisée, augmentez la complétion et structurez les données dans le temps — sous supervision médicale.",
          primaryCta: 'Évaluer un projet pilote',
          secondaryCta: 'Transformer un questionnaire existant',
        },
        statement:
          'Les PROMS sont essentiels. Leur mise en œuvre reste fragile.',
        challengeItems: [
          {
            label: 'Taux de complétion hétérogènes',
            title:
              'Les questionnaires post-acte sont souvent partiellement remplis ou ignorés.',
          },
          {
            label: 'Dépendance au numérique',
            title:
              'Portails patients et applications nécessitent disponibilité et aisance digitale.',
          },
          {
            label: 'Données isolées',
            title:
              'Les réponses sont collectées ponctuellement, sans structuration longitudinale.',
          },
          {
            label: 'Charge organisationnelle',
            title:
              'Les équipes relancent manuellement ou abandonnent le suivi.',
          },
        ],
        approach: {
          title: 'Appliquer vos questionnaires autrement.',
          description: 'Le dispositif permet :',
          items: [
            "D'importer vos PROMS existants",
            'De les transformer en protocole vocal structuré',
            'De planifier automatiquement les jalons (J+7, J+30…)',
            'De structurer les réponses dans le temps',
            'De prioriser selon des seuils définis par votre équipe',
          ],
          disclaimer:
            'Aucune modification du contenu clinique. Aucun algorithme décisionnel autonome.',
        },
        beforeAfter: {
          heading: 'Du questionnaire ponctuel au suivi longitudinal.',
          left: {
            label: 'Approche classique',
            items: [
              'Envoi email',
              'Formulaire isolé',
              'Donnée ponctuelle',
              'Relance manuelle',
              'Priorisation humaine tardive',
            ],
          },
          right: {
            label: 'Approche structurée',
            items: [
              'Appel planifié',
              'Dialogue structuré',
              'Historique longitudinal',
              'Planification automatique',
              'Seuils paramétrés',
            ],
          },
        },
        conversion: {
          title: "Comment fonctionne la conversion d'un PROMS ?",
          steps: [
            {
              title: 'Import',
              description: 'Import de vos PROMS en PDF / Excel / JSON.',
            },
            {
              title: 'Transformation intelligente',
              items: [
                'Logique conditionnelle des questions',
                'Ordre des questions',
                "Seuils d'alerte",
                'Adaptation conversationnelle',
              ],
            },
            {
              title: 'Planification',
              description: 'Définition des jalons temporels.',
            },
            {
              title: 'Restitution',
              items: [
                'Visualisation des réponses',
                'Graphique de suivi',
                'Export',
              ],
            },
          ],
        },
        useCases: {
          title: "Cas d'usage concrets",
          cases: [
            {
              title: 'Chirurgie ambulatoire',
              description: 'PROMS douleur + satisfaction.',
            },
            {
              title: 'Orthopédie',
              description: 'Mobilité + récupération fonctionnelle.',
            },
            {
              title: 'Oncologie',
              description: 'Symptômes inter-cycle.',
            },
            {
              title: 'Dermatologie',
              description: 'Effets secondaires traitement long.',
            },
          ],
        },
        benefits: {
          title: 'Bénéfices organisationnels',
          items: [
            {
              title: 'Amélioration de la complétion',
              body: 'Canal vocal universel.',
            },
            {
              title: 'Données longitudinales exploitables',
              body: 'Vision évolution patient dans le temps.',
            },
            {
              title: 'Intégration sans rupture',
              body: 'Compatible avec vos outils existants.',
            },
          ],
        },
        hospitals: {
          title: 'Structurer les indicateurs qualité.',
          items: [
            'Meilleure traçabilité',
            'Documentation exportable',
            'Historisation complète',
            'Vision cohérente des parcours',
          ],
        },
        editors: {
          title: 'Intégrer une brique vocale à vos PROMS numériques.',
          items: [
            'API simple',
            'Webhooks structurés',
            'Conversion automatisée',
            "Facturation à l'usage",
          ],
          cta: 'Voir la documentation API',
        },
      },
      patientSupport: {
        hero: {
          title: "Programmes d'accompagnement patient",
          subtitle:
            "Un système hybride qui libère du temps à vos équipes d'accompagnement en automatisant les appels de routine, tout en gardant les décisions critiques et l'empathie sous contrôle humain.",
          cta1: 'Évaluer un projet pilote',
          cta2: 'Explorer une intégration',
        },
        challenge: {
          title:
            "L'accompagnement patient repose sur une continuité difficile à maintenir.",
          items: [
            {
              title: "Dans de nombreux programmes d'accompagnement :",
              listItems: [
                'les patients sont suivis sur plusieurs semaines ou plusieurs mois',
                'les équipes doivent maintenir un contact régulier',
                'les indicateurs sont collectés à intervalles définis',
              ],
            },
            {
              title: 'Mais en pratique :',
              listItems: [
                'les relances manuelles sont chronophages',
                "l'engagement diminue avec le temps",
                'les données sont hétérogènes',
                'les interactions sont peu structurées',
              ],
            },
            {
              title: 'Impact sur les équipes :',
              listItems: [
                'temps considérable passé sur des appels de routine répétitifs',
                'moins de disponibilité pour les cas complexes nécessitant expertise et empathie',
                "difficulté à prioriser les patients qui ont vraiment besoin d'attention",
              ],
            },
          ],
        },
        protocol: {
          title: "Appliquer vos protocoles d'accompagnement à grande échelle.",
          subtitle:
            "Le dispositif permet d'organiser un suivi structuré en appliquant les protocoles définis par votre programme. Chaque programme peut définir :",
          items: [
            {
              title: 'la fréquence des appels',
              description: 'Rythme adapté au protocole',
            },
            {
              title: 'les indicateurs déclaratifs à suivre',
              description: 'Données structurées',
            },
            {
              title: "les seuils d'alerte",
              description: 'Critères de vigilance',
            },
            {
              title: 'la durée du programme',
              description: 'Période de suivi définie',
            },
          ],
          footer:
            'Le système applique ce protocole automatiquement sur les appels de routine, libérant vos équipes pour se concentrer sur les patients qui nécessitent une attention particulière.',
        },
        engagement: {
          sectionTitle: "Maintenir l'engagement dans la durée",
          title: 'Le canal vocal : un lien simple et universel',
          description:
            'Les outils numériques (applications, portails, questionnaires web) supposent disponibilité, motivation et familiarité numérique. Le téléphone reste accessible à tous les profils patients.',
          items: [
            'Aucune application à installer',
            'Interaction simple et naturelle',
            'Accessible quel que soit le niveau numérique',
          ],
          description2: 'Pour vos équipes :',
          items2: [
            'Gain de temps sur les appels de routine',
            'Focus sur les cas nécessitant empathie et expertise',
            'Supervision des alertes prioritaires uniquement',
          ],
        },
        structuredReturns: {
          title:
            'Transformer les échanges en données longitudinales exploitables.',
          description: 'Chaque interaction permet de recueillir :',
          items: [
            'symptômes déclaratifs',
            'perception du traitement',
            'adhérence au protocole',
            'effets indésirables déclaratifs',
            'indicateurs qualité de vie',
          ],
          description2: 'Les réponses sont :',
          items2: ['structurées', 'historisées', 'analysables dans le temps'],
        },
        useCases: {
          title: "Cas d'usage typiques",
          cards: [
            {
              title: "Programmes d'observance thérapeutique",
              description:
                "Suivi de l'adhérence aux traitements dans des pathologies chroniques.",
              gradient: 'var(--gradient-accent-warm)',
            },
            {
              title: 'Accompagnement post-hospitalisation',
              description: 'Suivi après retour à domicile.',
              gradient: 'var(--gradient-accent-cool)',
            },
            {
              title: 'Éducation thérapeutique',
              description: 'Suivi des indicateurs entre les séances.',
              gradient: 'var(--gradient-accent-warm-terra)',
            },
            {
              title: "Programmes d'accompagnement pharma",
              description:
                'Maintien du lien avec les patients dans les programmes PSP.',
              gradient: 'var(--gradient-accent-cool-overlay)',
            },
          ],
        },
        teams: {
          sectionTitle: "Pour les équipes d'accompagnement",
          title: 'Un système hybride humain-IA',
          description:
            "L'IA gère les appels de routine standardisés. Les équipes restent essentielles pour l'empathie, les décisions critiques et les situations complexes.",
          items: [
            'Appels de routine automatisés (J+7, J+14, J+30...)',
            'Collecte et structuration des indicateurs',
            "Détection des signaux d'alerte selon vos critères",
          ],
          description2: 'Les équipes se concentrent sur :',
          items2: [
            'Patients déclenchant des alertes',
            'Situations nécessitant empathie et expertise',
            'Décisions médicales et ajustements de protocole',
          ],
          footer:
            "L'IA automatise les tâches répétitives, les humains gardent le contrôle sur ce qui compte.",
        },
        platforms: {
          sectionTitle: 'Pour les plateformes et opérateurs',
          title: 'Infrastructure intégrable à vos dispositifs',
          description:
            'Solution autonome, brique intégrable ou canal complémentaire aux applications existantes.',
          items: [
            'API sécurisée et export de données structurées',
            'Intégration dashboards et planification protocole',
            'Supervision humaine paramétrable',
          ],
        },
      },
      prevention: {
        hero: {
          title:
            "Multipliez par 5 l'engagement dans vos programmes de prévention",
          subtitle:
            "Transformez vos initiatives de santé au travail en programmes structurés avec un suivi vocal automatisé avec un taux d'engagement supérieur à 75%. Collectez des données longitudinales fiables sans surcharger vos équipes.",
          cta1: 'Demander une démo',
          cta2: 'Échanger sur votre contexte',
        },
        metrics: [
          {
            value: '75%',
            label: 'Taux de participation',
            description: 'au lieu de 15% pour les applications classiques',
          },
          {
            value: '5x',
            label: "Plus d'engagement",
            description: 'Maintenu dans le temps',
          },
          {
            value: '-40%',
            label: 'Arrêts de travail TMS',
            description: 'Après 6 mois de suivi',
          },
        ],
        fieldObservation: {
          title:
            "Les programmes de prévention échouent par manque d'engagement",
          intro:
            'Vous investissez dans des programmes de prévention, mais les résultats ne suivent pas. 85% des collaborateurs abandonnent les applications de santé après 3 semaines. Le suivi manuel est chronophage et irrégulier.',
          blocks: [
            {
              title: "15% de taux d'engagement moyen",
              description:
                'Les applications de prévention perdent 85% de leurs utilisateurs après 3 semaines. Impossible de collecter des données longitudinales fiables.',
            },
            {
              title: 'Données fragmentées et inexploitables',
              description:
                "Les questionnaires ponctuels ne permettent pas de suivre l'évolution dans le temps. Impossible d'identifier les tendances ou d'adapter les programmes.",
            },
            {
              title: 'Charge administrative importante',
              description:
                'Les équipes RH et SST passent des heures à relancer les participants et compiler manuellement les données. Le ROI du programme devient négatif.',
            },
            {
              title: 'Exclusion des populations fragiles',
              description:
                "Les collaborateurs peu à l'aise avec le numérique ou sans smartphone sont exclus des programmes. Vous perdez 30% de votre cible.",
            },
          ],
          footer:
            'Sans engagement régulier et données structurées, vos programmes de prévention ne génèrent aucun impact mesurable.',
        },
        approach: {
          title: 'Un suivi automatisé qui génère 75% de participation',
          intro:
            'Le téléphone est universel, familier et ne nécessite aucune installation. Les appels vocaux programmés permettent un suivi régulier sans effort pour vos équipes.',
          steps: [
            {
              title: 'Co-construction du programme (1 semaine)',
              description:
                "Nous définissons ensemble les indicateurs de suivi, la fréquence des appels et les critères d'alerte selon vos objectifs métier.",
            },
            {
              title: 'Enrôlement des participants (2 jours)',
              description:
                'Information claire sur le dispositif, consentement éclairé et inscription par simple numéro de téléphone. Aucune app à télécharger.',
            },
            {
              title: 'Appels vocaux automatisés',
              description:
                'Des appels réguliers (hebdomadaires, bi-mensuels...) collectent les indicateurs définis. Durée moyenne : 3-5 minutes. Taux de réponse : 75%.',
            },
            {
              title: 'Structuration et analyse en temps réel',
              description:
                'Les réponses sont automatiquement transcrites, structurées et analysées selon vos critères. Alertes automatiques si seuils dépassés.',
            },
            {
              title: 'Tableaux de bord et exports',
              description:
                'Accès en temps réel aux données agrégées et individuelles. Exports CSV pour vos analyses. Rapports mensuels automatiques.',
            },
          ],
        },
        whyVoice: {
          title: "Pourquoi la voix génère 5x plus d'engagement que les apps",
          blocks: [
            {
              title: "100% d'accessibilité",
              description:
                "Tous vos collaborateurs ont un téléphone. Pas de smartphone requis, pas d'installation, pas de mot de passe oublié.",
            },
            {
              title: 'Zéro friction',
              description:
                "Le collaborateur reçoit un appel, décroche et répond. 3 minutes chrono. Pas de connexion, pas de navigation, pas d'abandon.",
            },
            {
              title: 'Expression naturelle et riche',
              description:
                "La voix permet de nuancer les réponses et d'exprimer des ressentis qu'un questionnaire à choix multiples ne capte pas.",
            },
            {
              title: 'Rappels automatiques intégrés',
              description:
                "L'appel programmé agit comme un rappel. Pas besoin de relancer manuellement. Taux de réponse maintenu dans le temps.",
            },
          ],
          footer:
            'Résultat : 75% de taux de participation vs 15% pour les applications de prévention classiques.',
        },
        useCases: {
          title: "Cas d'usage avec résultats attendus",
          cards: [
            {
              title: 'Prévention des TMS (industrie, logistique)',
              description:
                'Recueil hebdomadaire des douleurs et gênes. Identification précoce des situations à risque. Réduction de 40% des arrêts de travail liés aux TMS après 6 mois.',
            },
            {
              title: 'Programmes de gestion du stress (tertiaire)',
              description:
                'Auto-évaluation bi-mensuelle du stress, fatigue et charge mentale. Alertes automatiques si dégradation. Taux de participation : 78% sur 12 mois.',
            },
            {
              title: "Programmes d'activité physique (tous secteurs)",
              description:
                "Suivi déclaratif de l'activité, motivation et obstacles. Coaching vocal personnalisé. Maintien de l'engagement 3x supérieur aux apps.",
            },
            {
              title: 'Retour au travail post-arrêt (RH/SST)',
              description:
                'Accompagnement progressif du retour. Détection précoce des difficultés. Réduction de 30% des rechutes et arrêts prolongés.',
            },
            {
              title: 'Programmes de bien-être global (QVT)',
              description:
                "Indicateurs de santé perçue, sommeil, alimentation. Vision longitudinale de l'impact des actions QVT. ROI mesurable des programmes.",
            },
          ],
        },
        beyondAgent: {
          title:
            "Des données exploitables qui prouvent l'impact de vos programmes",
          description:
            'Contrairement aux questionnaires ponctuels, le suivi vocal régulier génère des données longitudinales structurées. Vous pouvez enfin :',
          items: [
            "mesurer l'évolution réelle des indicateurs dans le temps (avant/après)",
            'identifier les populations à risque et les tendances par service/site',
            'prouver le ROI de vos programmes de prévention avec des données chiffrées',
            'adapter vos actions en temps réel selon les remontées terrain',
            'produire des rapports automatiques pour la direction et les IRP',
          ],
        },
        organizations: {
          title: 'Qui déploie ces programmes de suivi vocal',
          cards: [
            {
              title: 'Entreprises (RH, QVT, HSE)',
              description:
                "Programmes de prévention TMS, stress, bien-être. Suivi post-arrêt. Mesure de l'impact des actions QVT. Reporting IRP et direction.",
            },
            {
              title: 'Services de santé au travail (SST, SSTI)',
              description:
                'Suivi de cohortes de salariés exposés. Études longitudinales. Détection précoce des risques. Optimisation des visites médicales.',
            },
            {
              title: 'Assureurs et mutuelles',
              description:
                'Programmes de prévention pour assurés. Réduction de la sinistralité. Engagement dans les parcours santé. Différenciation concurrentielle.',
            },
            {
              title: 'Prestataires santé et bien-être',
              description:
                "Enrichissement de l'offre avec un suivi vocal. Différenciation vs concurrence. Données d'impact pour vos clients. Scalabilité sans recruter.",
            },
          ],
        },
        regulatory: {
          title: 'Conformité et sécurité des données',
          description:
            'Un outil organisationnel conforme aux exigences RGPD et santé au travail',
          certifications: [
            {
              badge: 'HDS',
              label: 'Hébergeur certifié',
            },
            {
              badge: 'RGPD',
              label: 'Conforme',
            },
            {
              badge: 'Hipaa',
              label: 'Conforme',
            },
            // {
            //   badge: 'ISO 27001',
            //   label: 'Sécurité',
            // },
          ],
          items: [
            'Hébergement de données de santé certifié HDS (Hébergeur de Données de Santé)',
            "Conformité RGPD : consentement éclairé, droit d'accès, de rectification et d'effacement",
            'Respect du Code du travail : anonymisation des données agrégées, confidentialité',
            "Outil organisationnel (non dispositif médical) : collecte d'informations déclaratives",
            'Pas de diagnostic médical : les données sont des indicateurs de prévention',
            'Complémentaire aux professionnels de santé : ne remplace pas le suivi médical',
          ],
        },
        pilot: {
          title: "Pilote de 3 mois pour mesurer l'impact sur votre population",
          description:
            "Nous déployons un pilote sur un échantillon de collaborateurs (50-200 personnes) pour mesurer l'engagement, la qualité des données et le ROI avant un déploiement à grande échelle.",
          steps: [
            'Co-construction du programme et des indicateurs (1 semaine)',
            'Paramétrage technique et enrôlement des participants (1 semaine)',
            "Phase d'expérimentation avec suivi vocal régulier (3 mois)",
            'Analyse des résultats et recommandations de déploiement (1 semaine)',
          ],
          objectives: 'Objectifs mesurés :',
          objectiveItems: [
            "Taux de participation et d'engagement dans le temps",
            'Qualité et exploitabilité des données collectées',
            'Satisfaction des participants et des équipes RH/SST',
            "ROI estimé d'un déploiement à grande échelle",
          ],
        },
        finalCta: {
          title: 'Déployez un pilote de 3 mois dans votre organisation',
          subtitle:
            'Échangeons 30 minutes sur votre contexte et vos enjeux de prévention. Nous vous proposerons un pilote adapté avec objectifs mesurables et ROI projeté.',
          primaryCta: 'Planifier un échange confidentiel',
          secondaryCta: 'Recevoir une documentation',
        },
      },
    },
    editorsApi: {
      hero: {
        title: 'Ajoutez un agent vocal médical à votre plateforme',
        subtitle:
          "Intégrez facilement et de manière sécurisée via API un canal vocal structuré sans vous soucier des problématiques d'appels, de conversation ou d'extraction de données",
        description:
          "L'infrastructure s'intègre via API et permet d'ajouter un canal vocal structuré sans développer votre propre système d'appels.",
        cta1: "Explorer l'intégration",
        cta2: 'Demander un accès sandbox',
      },
      problem: {
        title:
          'Les plateformes de suivi patient rencontrent toutes la même limite',
        intro:
          "Les solutions numériques permettent aujourd'hui de suivre les patients via applications ou questionnaires. Mais l'engagement patient reste difficile à maintenir dans le temps.",
        blocks: [
          {
            title: 'Questionnaires incomplets',
            description:
              'Les questionnaires numériques restent fréquemment non complétés.',
          },
          {
            title: 'Relances humaines',
            description:
              'Les équipes doivent relancer manuellement les patients.',
          },
          {
            title: 'Fragmentation des interactions',
            description: 'Les informations remontent par différents canaux.',
          },
          {
            title: 'Engagement numérique variable',
            description:
              'Certains patients utilisent peu les applications ou portails.',
          },
        ],
        footer:
          "Un protocole de suivi n'est efficace que si les patients répondent réellement.",
      },
      infrastructure: {
        title: 'Une infrastructure vocale conçue pour les plateformes de santé',
        blocks: [
          {
            title: 'Protocoles configurables',
            description:
              "Les scénarios d'appel sont définis à partir de protocoles ou questionnaires existants.",
          },
          {
            title: 'Suivi longitudinal',
            description:
              'Chaque interaction est historisée et structurée dans le temps.',
          },
          {
            title: 'Supervision médicale',
            description:
              'Le système agit comme un outil organisationnel supervisé par les équipes.',
          },
        ],
      },
      transform: {
        title: 'Transformez vos questionnaires patients en appels vocaux',
        description:
          "Si votre plateforme utilise déjà des questionnaires patients (PROMS, ePRO, auto-évaluations, questionnaires de suivi), ils peuvent être transformés en protocoles d'appels vocaux structurés. Les réponses sont ensuite renvoyées vers votre système sous forme de données structurées.",
        items: ['PROMS', 'ePRO', 'Auto-évaluation', 'Questionnaire de suivi'],
      },
      architecture: {
        title: "Architecture d'intégration",
        steps: [
          'Votre plateforme',
          'API',
          'Infrastructure vocale',
          'Appel patient',
          'Analyse',
          'Webhook données',
          'Votre système',
        ],
        description:
          "L'infrastructure peut être intégrée via API et webhooks. Votre plateforme conserve la logique produit et reçoit les données structurées.",
      },
      apiExample: {
        title: 'Exemple de logique API',
        examples: [
          {
            title: 'Créer un patient dans un workspace',
            method: 'POST',
            endpoint: 'api/public/v1/patients',
            body: '{\n  "workspace_id": "ws_123",\n  "first_name": "Marie",\n  "last_name": "Dupont",\n  "phone": "+33612345678"\n}',
          },
          {
            title: 'Lancer un suivi',
            method: 'POST',
            endpoint: 'api/public/v1/follow-up',
            body: '{\n  "patient_id": "pat_456",\n  "agent_id": "agent_789"\n}',
          },
          {
            title: 'Recevoir les données',
            method: 'WEBHOOK',
            endpoint: 'Webhook JSON',
            response:
              '{\n  "call_id": "call_abc",\n  "patient_id": "pat_456",\n  "responses": [\n    {\n      "question": "Douleur (0-10)",\n      "answer": "3"\n    }\n  ]\n}',
          },
        ],
      },
      integrationCases: {
        title: 'Plateformes pouvant intégrer la brique vocale',
        cards: [
          {
            title: 'Télésuivi',
            description: 'suivi patient à distance.',
            gradient: 'var(--gradient-accent-warm)',
          },
          {
            title: 'Coordination de parcours',
            description: 'suivi post-hospitalisation.',
            gradient: 'var(--gradient-accent-cool)',
          },
          {
            title: 'Plateformes RWE',
            description: 'collecte longitudinale de données patients.',
            gradient: 'var(--gradient-accent-warm-terra)',
          },
          {
            title: 'Logiciels de dossiers patients',
            description: 'compléter les interactions numériques.',
            gradient: 'var(--gradient-accent-cool-overlay)',
          },
          {
            title: 'Programmes de prévention',
            description: 'engagement régulier des patients.',
            gradient: 'var(--gradient-accent-warm)',
          },
        ],
      },
      questionnaireCreation: {
        title: "Création d'un appel à partir d'un questionnaire",
        description:
          'Vous avez déjà un questionnaire ? Votre formulaire devient un appel vocal structuré.',
        items: [
          'Import JSON',
          'Mapping simple',
          'Définition logique conditionnelle',
          'Planification automatique',
        ],
      },
      pricing: {
        title: 'Tarification',
        leftTitle: 'Nous contacter pour :',
        leftItems: [
          'Forfait mensuel plateforme',
          'Facturation au temps de conversation',
          'Packs crédits',
        ],
        rightTitle: 'Plans',
        rightItems: ['Starter', 'Growth', 'Enterprise : Volume négocié'],
      },
      collaborationModels: {
        title: "Différents modèles d'intégration",
        models: [
          {
            title: 'API complète',
            description: 'Intégration produit native.',
          },
          {
            title: 'Projet pilote',
            description: 'expérimentation limitée.',
          },
          {
            title: 'Partenariat produit',
            description: 'co-développement.',
          },
        ],
      },
      finalCta: {
        title: 'Ajoutez une couche vocale à votre plateforme',
        subtitle:
          "Échangeons sur les possibilités d'intégration avec votre solution.",
        primaryCta: 'Demander un accès sandbox',
        secondaryCta: 'Planifier un échange technique',
      },
    },
    vision: {
      hero: {
        eyebrow: 'Infrastructure vocale clinique',
        title: 'Le canal qui manquait au suivi patient.',
        subtitle:
          "Entre deux consultations, les patients vivent. Leurs symptômes évoluent, leurs questions s'accumulent. Ces données critiques restent invisibles — non par manque de volonté, mais parce que le canal disponible était le mauvais.",
        stats: [
          {
            value: '40–50%',
            label: 'de patients perdus de vue\nen études cliniques',
          },
          {
            value: '4',
            label: "moteurs d'infrastructure\nclinique construits",
          },
        ],
      },
      problem: {
        label: 'Le problème réel',
        title: 'Une incompatibilité structurelle',
        intro:
          "Ce n'est pas un problème d'engagement. Les patients ne sont pas démotivés. C'est une <strong>incompatibilité structurelle entre le canal et la contrainte clinique.</strong>",
        body: "Les applications supposent une capacité d'action que l'état post-chimio, post-opératoire ou simplement la fragilité rendent impossible. Le suivi fiable ne peut pas reposer sur la motivation du patient.",
        statPill: {
          value: '40–50%',
          label: 'de lost-to-follow-up moyen · Kyte et al., 2016',
        },
        barriers: [
          {
            title: 'État clinique',
            text: "Ouvrir une app, naviguer, cocher — la charge cognitive est incompatible avec l'état post-chimio ou post-opératoire.",
          },
          {
            title: 'Digital literacy',
            text: 'Les populations âgées, peu digitales, fragilisées sont structurellement exclues du canal application.',
          },
          {
            title: 'Engagement passif requis',
            text: "L'app attend que le patient vienne. Le suivi fiable nécessite un canal qui va vers lui.",
          },
        ],
      },
      thesis: {
        label: 'Notre thèse',
        title:
          "La voix résout le canal. Mais la rendre cliniquement fiable est un problème d'ingénierie.",
        body: "Intégrer un assistant vocal est trivial. Construire une infrastructure vocale qui résiste aux contraintes cliniques réelles — identité, protocole, données structurées, continuité longitudinale — est un problème d'ingénierie spécialisée. C'est cette barrière que nous avons franchie.",
        pillars: [
          {
            title: 'Identité & consentement',
            text: 'Vérification patient avant collecte, anti-usurpation, traçabilité RGPD native.',
          },
          {
            title: 'Orchestration des appels',
            text: 'Absents, répondeurs, tiers en ligne, escalade humaine — journal auditable complet.',
          },
          {
            title: 'Fidélité protocolaire',
            text: 'Maintien de la logique clinique sous déviation conversationnelle, base de connaissances paramétrée par le clinicien.',
          },
          {
            title: 'Données structurées',
            text: 'Extraction clinique propre, alertes sur seuils, export HL7 FHIR — pas de la transcription.',
          },
        ],
      },
      founders: {
        label: "À l'origine",
        title: 'Deux trajectoires, une même conviction',
        intro:
          "Doctinum est né de la convergence d'une frustration terrain et d'une expertise technique. Non d'une hypothèse — d'une observation vécue.",
        founders: [
          {
            role: 'CEO & Co-fondateur',
            name: 'Michael Ramassamy',
            story: [
              "Entrepreneur dans la santé numérique, Michael a travaillé sur la réputation des établissements et l'expérience patient. Là, il a observé un paradoxe récurrent : <strong>les questionnaires ne revenaient pas, les données manquaient — non par indifférence, mais parce que le canal imposait trop d'effort.</strong>",
              "L'expérience est devenue personnelle. Face aux problèmes de santé de son père — peu à l'aise avec le numérique — il a mesuré la réalité du vide entre deux consultations : pas d'outil, pas de remontée, pas de suivi structuré possible.",
            ],
            insight:
              "Ce n'est pas un problème de motivation. C'est un problème de canal. Et la voix est le seul canal qui va vers le patient.",
          },
          {
            role: 'CTO & Co-fondateur',
            name: 'Régis Anclades',
            story: [
              'Ingénieur et entrepreneur technologique, Régis a conçu et déployé plusieurs infrastructures vocales automatisées à grande échelle — notamment pour des systèmes de support client en production.',
              "Cette expérience lui a appris ce que les voice bots génériques ignorent : <strong>la fiabilité à grande échelle est un problème d'architecture, pas d'interface.</strong> Gérer les absents, les tiers en ligne, les refus, les plages horaires, les données propres — c'est l'infrastructure, pas le LLM.",
            ],
            insight:
              "La fiabilité vocale à grande échelle est un problème d'architecture, pas d'interface. C'est précisément ce que nous avons construit.",
          },
        ],
      },
      conviction: {
        label: 'Nos convictions',
        title: 'Ce en quoi nous croyons profondément',
        cards: [
          {
            label: 'Sur le canal',
            text: "La voix est le seul canal universel. Elle ne requiert ni compte, ni app, ni maîtrise numérique. C'est le seul canal qui va vers le patient — et non l'inverse.",
          },
          {
            label: 'Sur la barrière technique',
            text: "La voix cliniquement fiable n'est pas un problème de design. C'est un problème d'ingénierie. La barrière est là — c'est notre avantage.",
          },
          {
            label: 'Sur le positionnement',
            text: "Nous ne remplaçons pas les plateformes. Nous sommes la couche vocale qu'elles n'ont pas — et que construire en interne leur coûterait 12 mois de R&D.",
          },
          {
            label: 'Sur le timing',
            text: "Les LLM vocaux multimodaux ont atteint un niveau de maturité et un coût qui rendent enfin possible une infrastructure vocale clinique fiable. La fenêtre s'ouvre maintenant.",
          },
        ],
      },
      roadmap: {
        label: 'Notre ambition',
        title: "Devenir l'infrastructure de référence du suivi clinique vocal",
        timeline: [
          {
            year: "Aujourd'hui",
            title: 'Validation en conditions réelles',
            text: "Infrastructure fonctionnelle déployée avec des praticiens partenaires. Validation des quatre moteurs cliniques sur des cas d'usage concrets : suivi post-opératoire, esthétique médicale, études cliniques.",
            tags: ['Beta fonctionnelle', 'Pilotes cliniques actifs'],
          },
          {
            year: 'Demain',
            title: 'Infrastructure pour les plateformes',
            text: 'Devenir la couche vocale que les éditeurs de suivi patient intègrent par API — plutôt que de la reconstruire. Interopérabilité native avec les standards du secteur.',
            tags: ['API-first', 'Interopérabilité HL7 FHIR'],
          },
          {
            year: 'Vision',
            title: 'Standard du suivi vocal en santé',
            text: "Une infrastructure vocale clinique certifiée, déployée à l'échelle — de la médecine de ville aux essais cliniques internationaux. Le suivi patient accessible à tous, partout, sans friction.",
            tags: ['Certification réglementaire', 'Expansion internationale'],
          },
        ],
      },
      cta: {
        title: 'Une conversation, pas un pitch.',
        subtitle:
          "Si notre raisonnement vous intéresse — ou si vous pensez qu'il est faux — nous voulons l'entendre. 60 minutes pour vérifier notre thèse ensemble.",
        primaryCta: 'Demander une démo',
        secondaryCta: 'Voir le deck investisseur',
      },
    },
    security: {
      hero: {
        eyebrow: 'Sécurité & Réglementation',
        title: 'Une infrastructure conçue pour les environnements de santé.',
        subtitle:
          "La protection des données patient, la traçabilité des interactions et la supervision humaine ne sont pas des options dans Doctinum — elles sont constitutives de l'architecture.",
        badges: [
          'Hébergement HDS · France',
          'RGPD natif',
          'Hors classification DM',
          'Traçabilité complète',
        ],
      },
      guarantees: {
        label: "Ce que nous garantissons aujourd'hui",
        title: "Des fondations vérifiables, pas des déclarations d'intention.",
        intro:
          "Voici ce qui est en place, opérationnel, et vérifiable — sans sur-vente de certifications que nous n'avons pas encore.",
        items: [
          {
            icon: '🏥',
            title: 'Hébergement HDS certifié',
            text: "Les données de santé sont hébergées en France auprès d'un prestataire certifié Hébergeur de Données de Santé (HDS), conformément aux exigences de la réglementation française.",
            tag: 'France · Données de santé',
          },
          {
            icon: '🔒',
            title: 'Chiffrement des données',
            text: 'Les données sont chiffrées en transit et au repos. Aucune donnée patient ne circule en clair à aucune étape du traitement.',
            tag: 'Chiffrement en transit · Au repos',
          },
          {
            icon: '✅',
            title: 'Consentement tracé & auditable',
            text: 'Le consentement du patient est recueilli en ligne avant toute collecte, horodaté et conservé. Chaque interaction est journalisée avec une traçabilité complète exportable.',
            tag: 'RGPD · Journal auditable',
          },
          {
            icon: '👤',
            title: 'Contrôle des accès',
            text: "L'accès aux données est strictement limité aux utilisateurs autorisés. Les accès sont enregistrés et traçables. Aucun accès non authentifié n'est possible aux données patient.",
            tag: 'Authentification · Journalisation',
          },
          {
            icon: '🌍',
            title: 'Localisation des données · UE',
            text: "L'intégralité des données est hébergée sur des infrastructures localisées en France et dans l'Union Européenne. Les transferts éventuels hors UE sont encadrés contractuellement et documentés.",
            tag: 'France · Union Européenne',
          },
          {
            icon: '🔍',
            title: "Vérification d'identité patient",
            text: "L'identité du patient est vérifiée avant toute collecte de données. Le système intègre des mécanismes anti-usurpation pour garantir que les données collectées correspondent bien à la bonne personne.",
            tag: 'Anti-usurpation · Identité vérifiée',
          },
        ],
      },
      posture: {
        label: 'Posture réglementaire',
        title: 'Ce que nous sommes. Ce que nous ne sommes pas encore.',
        intro:
          'La transparence sur notre statut réglementaire actuel est un principe, pas une contrainte. Voici un état exact de notre situation.',
        activeItems: [
          "Hors classification Dispositif Médical — outil d'organisation et de collecte déclarative, sans diagnostic ni décision clinique autonome",
          'Conformité RGPD native — base légale documentée, droits des personnes exercés',
          'Hébergement HDS certifié en France',
          'Conventions de pilote encadrant chaque déploiement',
          'Politique de confidentialité et mentions légales à jour',
        ],
        pendingItems: [
          'Analyse de trajectoire CE MDR en cours — périmètre à définir selon les usages retenus',
          'Engagement avec un cabinet réglementaire spécialisé santé numérique en cours de structuration',
          'Clause de revue sécurité disponible pour les partenaires institutionnels qui en font la demande',
          'Certification ISO 27001 envisagée pour les déploiements institutionnels à grande échelle',
        ],
        note: "nous ne revendiquons pas de certifications que nous n'avons pas. Si votre contexte requiert un niveau de certification spécifique, nous vous l'indiquerons clairement — et si la trajectoire est compatible, nous la construirons ensemble.",
      },
      supervision: {
        label: 'Supervision humaine & gouvernance',
        title: 'Le clinicien reste décisionnaire. Toujours.',
        intro:
          'Doctinum collecte et structure des données déclaratives. Elle ne diagnostique pas, ne prescrit pas, et ne remplace aucune décision médicale. Voici comment la gouvernance est architecturée.',
        items: [
          {
            title: 'Aucune décision autonome',
            text: "Le système ne prend aucune décision médicale de manière autonome. Il collecte, structure et alerte — le professionnel de santé reste le seul décisionnaire sur l'interprétation et l'action clinique.",
          },
          {
            title: 'Escalade humaine intégrée',
            text: 'Les protocoles prévoient une escalade humaine systématique pour les situations qui dépassent le périmètre de collecte défini. Le praticien est notifié en temps réel sur les alertes définies par lui-même.',
          },
          {
            title: 'Accès praticien en temps réel',
            text: "Le professionnel de santé a accès à l'intégralité des données collectées, aux transcriptions et aux journaux d'appels à tout moment. Rien n'est opaque entre le système et le clinicien superviseur.",
          },
          {
            title: 'Protocole paramétré par le clinicien',
            text: 'La base de connaissances et les questions de suivi sont définies et validées par le professionnel de santé responsable du protocole. Doctinum exécute — le clinicien conçoit et supervise.',
          },
        ],
      },
      roadmap: {
        label: 'Trajectoire',
        title: 'Un cadre réglementaire qui évolue avec nos usages.',
        intro:
          "Nous construisons la trajectoire réglementaire en fonction des déploiements réels — pas d'une liste de certifications abstraites. Voici l'état actuel.",
        items: [
          {
            status: 'actif',
            title: 'Hébergement HDS & conformité RGPD',
            text: "Infrastructure opérationnelle, hébergement certifié HDS en France, conformité RGPD documentée. Applicable dès aujourd'hui pour tous les déploiements.",
          },
          {
            status: 'actif',
            title: 'Convention de pilote & cadre contractuel',
            text: "Chaque déploiement est encadré par une convention de pilote définissant le périmètre d'usage, les responsabilités et les conditions de traitement des données. Ce cadre contractuel est disponible pour examen avant tout engagement.",
          },
          {
            status: 'engage',
            title: 'Analyse CE MDR & engagement réglementaire',
            text: "L'analyse de la trajectoire Dispositif Médical est en cours. Le périmètre de certification dépendra des usages retenus. Un cabinet réglementaire spécialisé santé numérique sera engagé prochainement pour définir la trajectoire précise.",
          },
          {
            status: 'horizon',
            title: 'Certification CE MDR & certifications complémentaires',
            text: "La certification CE MDR sera engagée selon le périmètre d'usage retenu. Des certifications complémentaires (ISO 27001, etc.) seront envisagées en fonction des exigences des partenaires institutionnels. Ces certifications ne conditionnent pas les déploiements actuels.",
          },
        ],
      },
    },
  },

  contactForm: {
    badge: 'Évaluation projet pilote',
    titleLine1: 'Discutons de votre',
    titleLine2: "cas d'usage",
    subtitle:
      "Échangeons sur votre contexte clinique et évaluons ensemble la pertinence d'un projet pilote de suivi vocal patient.",
    nameLabel: 'Nom',
    namePlaceholder: 'Dr. Martin Dupont',
    roleLabel: 'Fonction',
    rolePlaceholder: 'Chirurgien esthétique',
    emailLabel: 'Email professionnel',
    emailPlaceholder: 'votre@email.com',
    servicesLabel: 'Type de parcours envisagé',
    services: {
      surgery: 'Chirurgie & médecine esthétique',
      sportsMedicine: 'Médecine du sport',
      dermatology: 'Dermatologie',
      proms: 'PROMS / Questionnaires post-acte',
      chronic: 'Parcours chroniques (diabète, insuffisance cardiaque...)',
      oncology: 'Oncologie / Suivi post-traitement',
      rehabilitation: 'Rééducation / Kinésithérapie',
      preventive: 'Médecine préventive / Dépistage',
      patientSoftware: 'Logiciel de suivi patient',
      promsSoftware: 'Logiciel PROMS',
      clinicalStudies: 'Études cliniques (pharma)',
      croStudies: 'Études CRO',
      followUpPrograms: 'Programmes de suivi patient',
      other: 'Autre parcours',
    },
    budgetLabel: 'Type de structure',
    budgets: {
      solo: 'Cabinet individuel',
      group: 'Groupe médical (2-10 praticiens)',
      clinic: 'Établissement de santé',
      network: 'Réseau coordonné / Multi-sites',
      software: 'Éditeur de logiciel / CRO',
      pharma: 'Laboratoire pharmaceutique',
      researcher: 'Médecin chercheur / Universitaire',
      patientProgram: 'Programme de suivi patient (entreprise)',
      association: 'Association de patients / Fondation',
      other: 'Autre',
    },
    businessLabel: 'Contexte et objectifs',
    businessPlaceholder:
      'Décrivez votre parcours de soins actuel, vos enjeux de suivi patient et ce que vous souhaitez améliorer...',
    submit: 'Planifier un échange confidentiel',
  },
  notFound: {
    title: '404',
    message: "Oups, cette page n'existe pas",
    goHome: "Retour à l'accueil",
  },
  footer: {
    tagline: 'Donner une voix au suivi patient',
    subtitle: 'Infrastructure vocale clinique IA pour le suivi patient.',
    solutionsTitle: 'Solutions',
    resourcesTitle: 'Ressources',
    companyTitle: 'Entreprise',
    contact: 'Contact',
    legalNotice: 'Mentions légales',
    privacyPolicy: 'Politique de confidentialité',
    cookies: 'Gestion des cookies',
    copyright: '© 2026 Doctinum',
    manageCookies: 'Modifier mes préférences cookies',
  },
  cookies: {
    banner: {
      title: 'Bandeau cookies',
      description:
        "Ce site utilise des cookies afin de mesurer l'audience et améliorer votre expérience de navigation.",
      choices:
        "Vous pouvez accepter, refuser ou personnaliser l'utilisation des cookies.",
      accept: 'Accepter',
      reject: 'Refuser',
      customize: 'Personnaliser',
      learnMore: 'En savoir plus',
      policyLink: 'Politique de cookies',
    },
    preferences: {
      title: 'Personnaliser les cookies',
      description:
        'Gérez vos préférences en matière de cookies. Les cookies nécessaires sont toujours actifs car ils sont essentiels au fonctionnement du site.',
      necessary: 'Cookies nécessaires',
      alwaysActive: 'Toujours actifs',
      necessaryDesc:
        'Ces cookies sont indispensables au bon fonctionnement du site et ne peuvent pas être désactivés.',
      analytics: "Cookies de mesure d'audience",
      analyticsDesc:
        "Les cookies analytiques nous permettent de comprendre l'utilisation du site afin d'en améliorer le contenu.",
      analyticsExample: 'Ex: Google Analytics',
      acceptAll: 'Tout accepter',
      save: 'Enregistrer mes préférences',
      cancel: 'Annuler',
      learnMore: 'En savoir plus',
      policyLink: 'Politique de cookies',
    },
  },
};

export default fr;
