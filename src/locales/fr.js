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
    solutions: 'Parcours de soin',
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
    solutions: {
      eyebrow: 'Parcours de soin',
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
            // {
            //   label: 'Parcours chroniques coordonnés',
            //   description: 'Vision partagée entre intervenants.',
            //   page: 'case-studies',
            // },
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
    soon: 'Bientôt',
    grouped: {
      sectionEntry: 'Accéder à cette section',
      goHome: "Retourner à l'accueil",
    },
    main: {
      title: 'Accéder rapidement aux rubriques clés',
      body: 'Retrouvez en un seul mega menu les parcours de soin, ressources et parcours entreprise.',
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
      body: 'Nous concevons des parcours de soin pour des environnements exigeants',
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
    whyDifferent: {
      label: 'Pourquoi c’est différent',
      titlePrefix: 'Une conversation, deux surfaces.',
      titleAccent: 'Et un moteur qui encadre l’IA.',
      body: '',
      cards: [
        {
          icon: 'phone',
          title: 'Voix + écran',
          body: 'La voix et l’écran ne font qu’une conversation : on répond à l’oral ou d’un clic, les données précises (dates, coordonnées, photos) passent par l’écran. Chaque patient choisit sa modalité.',
          tag: 'Multimodal',
        },
        {
          icon: 'check-badge',
          title: 'L’IA sous contrôle',
          body: 'Le modèle d’IA ne décide de rien : un moteur d’orchestration encadre chaque échange. Toute conversation est traçable et rejouable : la conformité est dans l’architecture, pas dans une promesse.',
          tag: 'Traçable & rejouable',
        },
        {
          icon: 'server-stack',
          title: 'Conçu pour l’esthétique française',
          body: 'Parcours, vocabulaire et cadre réglementaire du secteur esthétique français. Hébergement de santé certifié HDS, données en France.',
          tag: 'Hébergement HDS · France',
          highlight: true,
        },
      ],
    },
    hero: {
      ariaLabel: 'Héros',
      titlePrefix: 'Le suivi patient',
      titleMiddle: 'ne doit pas rester',
      titleAccent: 'silencieux',
      subtitle:
        "L'infrastructure d'IA vocale qui applique vos protocoles, déclenche un suivi structuré et remonte les signaux utiles, sous supervision médicale.",
      cta: 'Evaluez un projet pilote',
      cta2: 'Planifier un échange confidentiel',
      liveCallBadge: 'Essai live',
    },
    faq: {
      label: 'Questions',
      title: 'Questions fréquentes',
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
        { id: 'ortho', label: 'Orthopédie (chirurgie)' },
        { id: 'aesthetic', label: 'Chirurgie esthétique' },
      ],
      controls: {
        slideToCall: 'Glisser',
      },
      conversion: {
        title: 'Découvrez notre plateforme',
        message:
          'Vous avez testé plusieurs fois nos appels live. Il est temps de découvrir toute la puissance de notre plateforme dans une vraie démo.',
        demoButton: 'Réserver une démo',
        cancelButton: 'Annuler',
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
        rateLimitExceeded: 'Lancement de la démo...',
      },
      results: {
        disclaimer:
          "Voici un exemple d'informations pouvant être collectées lors d'une pré-consultation : ",
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
            badge: 'Alerte selon le seuil défini dans votre protocole',
            title: 'Seuil protocolaire franchi',
            body: 'Combinaison de reponses au-dessus des seuils definis dans le protocole.',
          },
        },
        ortho: {
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
        aesthetic: {
          header: 'Synthese pre-consultation',
          title:
            'Dossier pret pour la premiere consultation (medecine esthetique)',
          metricsTitle: 'Elements collectes',
          metrics: [
            { label: 'Motif exprime', value: 'Rhinoplastie (bosse nasale)' },
            {
              label: 'Anciennete de la demande',
              value: "Depuis l'adolescence",
            },
            { label: 'Antecedents ORL', value: 'Aucun declare' },
            { label: 'Photos', value: 'Lien transmis a la patiente' },
            { label: 'Decision medicale', value: 'Reservee au praticien' },
          ],
        },
      },
      fallbackTranscripts: {
        ortho: [
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
        aesthetic: [
          {
            role: 'agent',
            text: "Bonjour, je suis Clara, l'assistante d'accueil du cabinet. Je suis là pour comprendre votre projet et préparer votre venue. Qu'est-ce qui vous amène aujourd'hui ?",
            delayMs: 0,
          },
          {
            role: 'patient',
            text: "Bonjour. Je me renseigne sur la rhinoplastie, j'ai un complexe sur la bosse de mon nez depuis l'adolescence.",
            delayMs: 1500,
          },
          {
            role: 'agent',
            text: 'Je comprends. Le Dr. Leroy pratique cet acte régulièrement au cabinet. Avez-vous déjà consulté un chirurgien pour ce projet ?',
            delayMs: 3500,
          },
          {
            role: 'patient',
            text: "Non, jamais. Je ne sais pas trop à quoi m'attendre.",
            delayMs: 6000,
          },
          {
            role: 'agent',
            text: "C'est tout à fait normal, la consultation sert justement à répondre à ces questions. Puis-je vous demander depuis quand cette gêne vous préoccupe ?",
            delayMs: 8500,
          },
          {
            role: 'patient',
            text: "Depuis l'adolescence, mais j'ai enfin décidé de me renseigner sérieusement cette année.",
            delayMs: 11500,
          },
          {
            role: 'agent',
            text: 'Merci. Avez-vous des antécédents médicaux ou des interventions ORL déjà réalisées sur le nez ?',
            delayMs: 14500,
          },
          {
            role: 'patient',
            text: 'Non, aucun antécédent particulier.',
            delayMs: 17000,
          },
          {
            role: 'agent',
            text: 'Parfait, je note. Je vais vous transmettre un lien pour ajouter quelques photos, elles aideront le Dr. Leroy à préparer votre consultation. Avez-vous d’autres questions d’ici là ?',
            delayMs: 19000,
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
    editorsApi: {
      preparationNotice:
        'Offre en préparation, ouverte aux partenariats pilotes.',
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
            description: 'Suivi patient à distance.',
            gradient: 'var(--gradient-accent-warm)',
          },
          {
            title: 'Coordination de parcours',
            description: 'Suivi post-hospitalisation.',
            gradient: 'var(--gradient-accent-cool)',
          },
          {
            title: 'Plateformes RWE',
            description: 'Collecte longitudinale de données patients.',
            gradient: 'var(--gradient-accent-warm-terra)',
          },
          {
            title: 'Logiciels de dossiers patients',
            description: 'Compléter les interactions numériques.',
            gradient: 'var(--gradient-accent-cool-overlay)',
          },
          {
            title: 'Programmes de prévention',
            description: 'Engagement régulier des patients.',
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
        eyebrow: 'Notre vision',
        title: 'Donner une voix au suivi patient.',
        subtitle:
          "Doctinum construit la couche conversationnelle de confiance du parcours de soin. Nous commençons là où la douleur est la plus vive et le déploiement le plus rapide, l'accueil et la pré-consultation des cabinets, puis nous étendons la même technologie à tout le parcours.",
        stats: [
          {
            value: '+40%',
            label: 'de patients perdus de vue\nen études cliniques',
          },
          {
            value: '47%',
            label:
              'patients avec pathologie chronique sans modalité de suivi à distance',
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
          value: '47%',
          label:
            "des patients avec pathologie chronique n'ont accès à aucune modalité de suivi à distance (Lenfant et al., JAMA 2026)",
        },
        // statPill: {
        //   value: '40-50%',
        //   label: 'de lost-to-follow-up moyen · Kyte et al., 2016',
        // },
        barriers: [
          {
            title: 'État clinique',
            text: "Ouvrir une app, naviguer, cocher, la charge cognitive est incompatible avec l'état post-chimio ou post-opératoire.",
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
        label: 'Sous le capot',
        title: 'Quatre moteurs. Pas un simple agent vocal.',
        body: "Intégrer un assistant conversationnel est trivial. Construire une infrastructure qui résiste aux contraintes cliniques réelles, identité, protocole, données structurées, continuité longitudinale, est un problème d'ingénierie spécialisée. C'est cette barrière que nous avons franchie.",
        pillars: [
          {
            title: 'Identité & consentement',
            text: 'Vérification patient avant collecte, anti-usurpation, traçabilité RGPD native.',
          },
          {
            title: 'Orchestration des appels',
            text: 'Absents, répondeurs, tiers en ligne, escalade humaine, journal auditable complet.',
          },
          {
            title: 'Fidélité protocolaire',
            text: 'Maintien de la logique clinique sous déviation conversationnelle, base de connaissances paramétrée par le clinicien.',
          },
          {
            title: 'Données structurées',
            text: 'Extraction clinique propre, alertes sur seuils, export HL7 FHIR, pas de la transcription.',
          },
        ],
      },
      founders: {
        label: "À l'origine",
        title: 'Deux trajectoires, une même conviction',
        intro:
          "Doctinum est né de la convergence d'une frustration terrain et d'une expertise technique. Non d'une hypothèse, d'une observation vécue.",
        founders: [
          {
            role: 'CEO & Co-fondateur',
            name: 'Michael Ramassamy',
            story: [
              "Entrepreneur dans la santé numérique, Michael a travaillé sur la réputation des établissements et l'expérience patient. Là, il a observé un paradoxe récurrent : <strong>les questionnaires ne revenaient pas, les données manquaient, non par indifférence, mais parce que le canal imposait trop d'effort.</strong>",
              "L'expérience est devenue personnelle. Face aux problèmes de santé de son père, peu à l'aise avec le numérique, il a mesuré la réalité du vide entre deux consultations : pas d'outil, pas de remontée, pas de suivi structuré possible.",
            ],
            insight:
              "Ce n'est pas un problème de motivation. C'est un problème de canal. Et la voix est le seul canal qui va vers le patient.",
          },
          {
            role: 'CTO & Co-fondateur',
            name: 'Régis Anclades',
            story: [
              'Ingénieur et entrepreneur technologique, Régis a conçu et déployé plusieurs infrastructures vocales automatisées à grande échelle, notamment pour des systèmes de support client en production.',
              "Cette expérience lui a appris ce que les voice bots génériques ignorent : <strong>la fiabilité à grande échelle est un problème d'architecture, pas d'interface.</strong> Gérer les absents, les tiers en ligne, les refus, les plages horaires, les données propres, c'est l'infrastructure, pas le LLM.",
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
            text: "La voix est le seul canal universel. Elle ne requiert ni compte, ni app, ni maîtrise numérique. C'est le seul canal qui va vers le patient, et non l'inverse.",
          },
          {
            label: 'Sur la barrière technique',
            text: "La voix cliniquement fiable n'est pas un problème de design. C'est un problème d'ingénierie. La barrière est là, c'est notre avantage.",
          },
          {
            label: 'Sur le positionnement',
            text: "Nous ne remplaçons pas les plateformes. Nous sommes la couche vocale qu'elles n'ont pas, et que construire en interne leur coûterait 12 mois de R&D.",
          },
          {
            label: 'Sur le timing',
            text: "Les LLM vocaux multimodaux ont atteint un niveau de maturité et un coût qui rendent enfin possible une infrastructure vocale clinique fiable. La fenêtre s'ouvre maintenant.",
          },
        ],
      },
      roadmap: {
        label: 'Notre trajectoire',
        title: 'Trois horizons.',
        timeline: [
          {
            year: "Aujourd'hui",
            title: "L'accueil et la pré-consultation",
            text: "L'assistante multimodale des cabinets de chirurgie et médecine esthétiques. Hors dispositif médical par construction : elle comprend, collecte et restitue. Le praticien décide.",
            tags: ['Hors dispositif médical', 'Cabinets esthétiques'],
          },
          {
            year: 'Demain',
            title: 'Le parcours complet, sur tous les canaux',
            text: "Réservation, pré-intervention, suivi post-opératoire. Web, téléphone, SMS, application. La voix et le téléphone ramènent dans le parcours les patients que les applications laissent de côté : âgés, peu connectés, précisément ceux qui demandent le plus de vigilance. Protocoles définis par l'équipe, appels structurés, données restituées, alertes supervisées.",
            tags: ['Web, téléphone, SMS', 'Alertes supervisées'],
          },
          {
            year: 'Ensuite',
            title: 'Le suivi clinique certifié',
            text: "Notre architecture est conçue pour la certification dispositif médical. Elle activera le module clinique, pré-tri, surveillance post-opératoire, détection de signaux d'alerte, et ouvrira l'intégration aux cliniques, hôpitaux et applications de suivi patient existantes, ainsi que l'accès au cadre de la télésurveillance médicale remboursée.",
            tags: ['Certification DM', 'Télésurveillance remboursée'],
          },
        ],
      },
      cta: {
        title: 'Une conversation, pas un pitch.',
        subtitle:
          "Si notre raisonnement vous intéresse, ou si vous pensez qu'il est faux, nous voulons l'entendre.",
        primaryCta: 'Demander une démo',
        secondaryCta: 'Éditeurs & API',
      },
    },
    security: {
      hero: {
        eyebrow: 'Sécurité & Réglementation',
        title: 'Une infrastructure conçue pour les environnements de santé.',
        subtitle:
          "La protection des données patient, la traçabilité des interactions et la supervision humaine ne sont pas des options dans Doctinum, elles sont constitutives de l'architecture.",
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
          "Voici ce qui est en place, opérationnel, et vérifiable, sans sur-vente de certifications que nous n'avons pas encore.",
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
          "Hors classification Dispositif Médical, outil d'organisation et de collecte déclarative, sans diagnostic ni décision clinique autonome",
          'Conformité RGPD native, base légale documentée, droits des personnes exercés',
          'Hébergement HDS certifié en France',
          'Conventions de pilote encadrant chaque déploiement',
          'Politique de confidentialité et mentions légales à jour',
        ],
        pendingItems: [
          'Analyse de trajectoire CE MDR en cours, périmètre à définir selon les usages retenus',
          'Engagement avec un cabinet réglementaire spécialisé santé numérique en cours de structuration',
          'Clause de revue sécurité disponible pour les partenaires institutionnels qui en font la demande',
          'Certification ISO 27001 envisagée pour les déploiements institutionnels à grande échelle',
        ],
        note: "nous ne revendiquons pas de certifications que nous n'avons pas. Si votre contexte requiert un niveau de certification spécifique, nous vous l'indiquerons clairement, et si la trajectoire est compatible, nous la construirons ensemble.",
      },
      supervision: {
        label: 'Supervision humaine & gouvernance',
        title: 'Le clinicien reste décisionnaire. Toujours.',
        intro:
          'Doctinum collecte et structure des données déclaratives. Elle ne diagnostique pas, ne prescrit pas, et ne remplace aucune décision médicale. Voici comment la gouvernance est architecturée.',
        items: [
          {
            title: 'Aucune décision autonome',
            text: "Le système ne prend aucune décision médicale de manière autonome. Il collecte, structure et alerte, le professionnel de santé reste le seul décisionnaire sur l'interprétation et l'action clinique.",
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
            text: 'La base de connaissances et les questions de suivi sont définies et validées par le professionnel de santé responsable du protocole. Doctinum exécute, le clinicien conçoit et supervise.',
          },
        ],
      },
      roadmap: {
        label: 'Trajectoire',
        title: 'Un cadre réglementaire qui évolue avec nos usages.',
        intro:
          "Nous construisons la trajectoire réglementaire en fonction des déploiements réels, pas d'une liste de certifications abstraites. Voici l'état actuel.",
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
    titleLine1: 'Discutons de votre',
    titleLine2: "cas d'usage",
    subtitle:
      "Échangeons sur votre contexte clinique et évaluons ensemble la pertinence d'un assistant IA conversationnel voix, chat, interface interactive.",
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
  demoPage: {
    badge: 'Réserver une démo',
    title: 'Découvrez Doctinum en action',
    subtitle:
      'Planifiez une démonstration personnalisée et découvrez comment notre solution peut transformer votre suivi patient.',
  },
  demoForm: {
    firstName: 'Prénom',
    lastName: 'Nom',
    email: 'Email professionnel',
    phone: 'Téléphone',
    organization: 'Organisation',
    service: 'Type de parcours intéressé',
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
    structure: 'Type de structure',
    structures: {
      solo: 'Cabinet individuel',
      group: 'Groupe médical (2-10 praticiens)',
      clinic: 'Établissement de santé',
      network: 'Réseau coordonné / Multi-sites',
      software: 'Éditeur de logiciel / CRO',
      other: 'Autre',
    },
    preferredDate: 'Date souhaitée',
    timeSlot: 'Créneau horaire préféré',
    timeSlots: {
      morning: 'Matin (9h-12h)',
      midday: 'Midi (12h-14h)',
      afternoon: 'Après-midi (14h-18h)',
      evening: 'Soir (18h-20h)',
    },
    duration: 'Durée souhaitée',
    durations: {
      '30min': '30 minutes',
      '45min': '45 minutes',
      '60min': '1 heure',
      '90min': '1 heure 30',
    },
    message: 'Message supplémentaire',
    messagePlaceholder:
      "Décrivez vos besoins spécifiques, les cas d'usage que vous souhaitez explorer...",
    required: '* Champs obligatoires',
    submit: 'Réserver la démo',
  },
  notFound: {
    title: '404',
    message: "Oups, cette page n'existe pas",
    goHome: "Retour à l'accueil",
  },
  mainNav: {
    solution: 'Solution',
    howItWorks: 'Comment ça marche',
    security: 'Sécurité',
    vision: 'Vision',
    contact: 'Contact',
  },
  footer: {
    tagline: 'Votre premier contact patient, transformé en réputation.',
    subtitle:
      "L'assistante IA d'accueil et de pré-consultation des cabinets de chirurgie et médecine esthétiques.",
    solutionsTitle: 'Solution',
    resourcesTitle: 'Ressources',
    companyTitle: 'Entreprise',
    legalTitle: 'Informations légales',
    aesthetics: 'Chirurgie & médecine esthétique',
    contact: 'Contact',
    legalNotice: 'Mentions légales',
    privacyPolicy: 'Politique de confidentialité',
    cookies: 'Gestion des cookies',
    soonTitle: 'Prochainement',
    soonItems: [
      'Médecine du sport',
      'Dermatologie',
      'PROMS & questionnaires post-acte',
      'Parcours chroniques',
      'Prévention & santé au travail',
      'Pharma & recherche',
    ],
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
