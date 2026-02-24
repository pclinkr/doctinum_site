const fr = {
  common: {
    close: 'Fermer'
  },
  language: {
    title: 'Langue',
    currentFlag: '🇫🇷',
    options: [
      { code: 'en', label: 'English', flag: '🇬🇧' },
      { code: 'fr', label: 'Français', flag: '🇫🇷' }
    ]
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
    mobileMenu: 'Menu'
  },
  megaMenu: {
    soon: 'Bientôt',
    grouped: {
      sectionEntry: 'Accéder à cette section',
      goHome: "Retourner à l'accueil"
    },
    main: {
      title: 'Accéder rapidement aux rubriques clés',
      body: 'Retrouvez en un seul mega menu les solutions, ressources et parcours entreprise.'
    },
    solutions: {
      eyebrow: 'Solutions',
      title: 'Parcours de suivi adaptés à chaque contexte clinique',
      body: 'Structurez vos parcours par spécialité, niveau de coordination et niveau de vigilance.',
      groups: [
        {
          title: 'Suivi pré et post intervention',
          links: [
            { label: 'Chirurgie & médecine esthétique', description: 'Parcours guidés avant et après acte.', page: 'case-studies' },
            { label: 'Médecine du sport', description: 'Suivi des symptômes et reprise progressive.', page: 'about' },
            { label: 'Dermatologie', description: 'Suivi régulier des évolutions et tolérance.', page: 'blog' },
            { label: 'PROMS / questionnaires post-acte', description: 'Collecte structurée des retours patients.', page: 'blog-post' }
          ]
        },
        {
          title: 'Suivi chronique & coordination',
          links: [
            { label: 'Programmes d’accompagnement patient', description: 'Cadence de suivi avec scripts cliniques.', page: 'contact' },
            { label: 'Prévention & santé au travail', description: 'Actions de prévention et suivi de population.', page: 'about' },
            { label: 'Parcours chroniques coordonnés', description: 'Vision partagée entre intervenants.', page: 'case-studies' }
          ]
        },
        {
          title: 'Parcours spécialisés à haute vigilance',
          links: [
            { label: 'Transplantation', description: 'Points critiques et signaux précoces.', page: 'blog' },
            { label: 'Oncologie', description: 'Suivi des effets et points de vigilance.', page: 'contact' },
            { label: 'Cardiologie chronique', description: 'Suivi longitudinal des indicateurs.', page: 'privacy' },
            { label: 'Maladies rares', description: 'Coordination sur parcours complexes.', page: 'case-studies' },
            { label: 'Santé mentale', description: 'Suivi conversationnel et escalade encadrée.', page: 'about' }
          ]
        }
      ],
      cta: { label: 'Discuter d’un projet pilote', page: 'contact' }
    },
    functioning: {
      eyebrow: 'Fonctionnement',
      title: 'Comprendre la mise en oeuvre',
      body: 'Explorez la démo produit, les fonctionnalités et les ressources agents.',
      groups: [
        {
          title: 'Démo',
          links: [
            { label: 'Démo', description: 'Voir le flux de suivi en conditions réelles.', page: 'blog' }
          ]
        },
        {
          title: 'Produit',
          links: [
            { label: 'Fonctionnalités', description: 'Capacités coeur et options de configuration.', page: 'about' }
          ]
        },
        {
          title: 'Ressources',
          links: [
            { label: 'Modèles d’agents', description: 'Exemples d’agents prêts à adapter.', page: 'case-studies' },
            { label: 'Modèles PROMS', description: 'Modèles orientés questionnaires post-acte.', page: 'blog-post' }
          ]
        }
      ],
      cta: { label: 'Réserver une démo', page: 'contact' }
    },
    enterprise: {
      eyebrow: 'Entreprise',
      title: 'Construire des déploiements en environnement exigeant',
      body: 'Travaillez avec nous sur la vision produit, les expérimentations et les partenariats.',
      groups: [
        {
          title: 'Vision & équipe',
          links: [
            { label: 'Vision', description: 'Cap produit et logique de déploiement.', page: 'about' },
            { label: 'Nous rejoindre', description: 'Opportunités et culture produit.', page: 'about' },
            { label: 'Blog', description: 'Articles et points de vue.', page: 'blog' },
            { label: 'Styleguide', description: 'Référentiel UI interne.', page: 'styleguide', devOnly: true }
          ]
        },
        {
          title: 'Partenariats',
          links: [
            { label: 'Expérimentation & partenariats', description: 'Pilotes, protocoles et collaborations.', page: 'case-studies' },
            { label: 'Investisseurs', description: 'Échanges stratégiques et informations.', page: 'case-studies' }
          ]
        }
      ],
      cta: { label: 'Nous contacter', page: 'contact' }
    }
  },
  site: {
    socialProofText: 'Plus de 176+ créateurs accompagnés',
    ctaSubtitleFull: 'Réservez un appel stratégique gratuit de 30 min et construisons ensemble un protocole de suivi adapté à votre contexte.',
    ctaSubtitleShort: 'Réservez un appel stratégique gratuit de 30 min.',
    storyDurationMs: 3000
  },
  sections: {
    hero: {
      ariaLabel: 'Héros',
      titlePrefix: 'Le suivi patient',
      titleMiddle: 'ne doit pas rester',
      titleAccent: 'silencieux',
      subtitle: "L’infrastructure d’IA vocale qui applique vos protocoles, déclenche un suivi structuré et remonte les signaux utiles — sous supervision médicale.",
      cta: 'Evaluez un projet pilote',
      cta2: 'Planifier un échange confidentiel'
    },
    services: {
      titlePrefix: 'Comment nous pouvons vous aider à',
      titleAccent: 'croître'
    },
    faq: {
      label: 'Questions',
      title: 'Questions fréquentes'
    },
    process: {
      titlePrefix: 'Nous aimons garder les choses',
      titleAccent: 'simples',
      titleSuffix: 'et efficaces',
      cards: [
        {
          title: 'La stratégie d’abord',
          body: 'Nous auditons votre marque, audience et concurrents puis construisons une stratégie claire, précise et orientée résultats.'
        },
        {
          title: 'Créer & gérer',
          body: 'Nous créons, planifions et gérons votre contenu pour que vous restiez focalisé sur votre business.'
        },
        {
          title: 'Analyser & optimiser',
          body: 'Revues mensuelles et reporting clair. Nous renforçons ce qui fonctionne et supprimons le reste.'
        }
      ]
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
        'Si vous voulez grandir avec intention, nous pouvons vous aider.'
      ]
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
        kpi2: 'Engagement'
      },
      case2: {
        tag: 'Résultats · Mode',
        titlePrefix: 'Développer une marque mode avec la',
        titleAccent: 'vidéo',
        body: 'Passage d’un flux statique à un contenu vidéo-first montrant le produit en usage réel.',
        kpi1: 'Abonnés',
        kpi2: 'Engagement'
      }
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
        'Reporting flou sans insights'
      ],
      brandItems: [
        'Plans flexibles sans engagement',
        'Stratégie contenu spécifique à votre marque',
        'Garantie de turnaround en 48h',
        'KPIs clairs liés aux objectifs business'
      ]
    },
    testimonial: {
      quotePrefix: 'Ils ont complètement repris la gestion de nos réseaux, et notre audience n’a jamais été',
      quoteAccent: 'aussi engagée.',
      author: 'Elena Chen',
      role: 'Fondatrice · Bloom Skincare'
    },
    finalCta: {
      label: 'Démarrer',
      titlePrefix: 'Votre suivi vocal commence',
      titleAccent: 'ici.'
    },
    medicalVoice: {
      headLabel: 'Test vocal live',
      headTitlePrefix: 'Appeler un',
      headTitleAccent: 'agent IA médical',
      domains: [
        { id: 'orthopedie', label: 'Orthopédie (chirurgie)' },
        { id: 'cancer', label: 'Cancer' },
        { id: 'transplantation-hepatique', label: 'Transplantation hépatique' },
        { id: 'chirurgie-esthetique', label: 'Chirurgie esthétique' }
      ],
      controls: {
        slideToCall: "Glisser pour appeler l'agent"
      },
      transcript: {
        agent: 'Agent',
        patient: 'Patient'
      },
      status: {
        ready: 'Prêt',
        creating: 'Création du web call sécurisé...',
        connectingRetell: 'Connexion à Retell...',
        liveRunning: 'Appel en direct',
        callFinished: 'Appel terminé',
        fallbackCompleted: 'Démo fallback terminée',
        liveUnavailable: 'Live indisponible. Lancement de la démo fallback...'
      },
      fallbackTranscripts: {
        orthopedie: [
          { role: 'agent', text: "Bonjour, je suis l'agent orthopédique. Que ressentez-vous aujourd'hui ?", delayMs: 600 },
          { role: 'patient', text: "J'ai une douleur au genou droit après la course.", delayMs: 2100 },
          { role: 'agent', text: 'Merci. Depuis combien de temps la douleur est-elle présente ?', delayMs: 3800 },
          { role: 'patient', text: 'Depuis environ dix jours, surtout en descendant les escaliers.', delayMs: 5600 },
          { role: 'agent', text: 'Parfait, je peux vous proposer un premier triage et une prise de rendez-vous.', delayMs: 7600 }
        ],
        cancer: [
          { role: 'agent', text: "Bonjour, je suis l'agent oncologie. Je vais vous aider à structurer vos informations.", delayMs: 600 },
          { role: 'patient', text: "J'ai reçu des résultats hier et je souhaite comprendre les prochaines étapes.", delayMs: 2300 },
          { role: 'agent', text: 'Très bien. Nous allons revoir vos symptômes, traitements en cours et examens.', delayMs: 4100 },
          { role: 'patient', text: "D'accord, je veux aussi préparer mes questions pour la consultation.", delayMs: 6000 },
          { role: 'agent', text: 'Excellent, je vous fournis une synthèse claire à partager avec le médecin.', delayMs: 8100 }
        ],
        'transplantation-hepatique': [
          { role: 'agent', text: "Bonjour, je suis l'agent transplantation hépatique. Vérifions ensemble votre situation.", delayMs: 600 },
          { role: 'patient', text: "J'ai besoin de savoir quels documents préparer avant l'évaluation.", delayMs: 2400 },
          { role: 'agent', text: 'Je vous guide étape par étape: antécédents, bilans sanguins et imagerie.', delayMs: 4300 },
          { role: 'patient', text: "Très bien, je veux aussi comprendre les délais habituels.", delayMs: 6200 },
          { role: 'agent', text: "Parfait, je vous indique les priorités et l'ordre recommandé.", delayMs: 8200 }
        ],
        'chirurgie-esthetique': [
          { role: 'agent', text: "Bonjour, je suis l'agent chirurgie esthétique. Quel est votre objectif principal ?", delayMs: 600 },
          { role: 'patient', text: "Je veux comprendre les options et la récupération après l'intervention.", delayMs: 2300 },
          { role: 'agent', text: 'Je peux comparer les options, bénéfices, risques et temps de récupération.', delayMs: 4200 },
          { role: 'patient', text: "Super, j'aimerais ensuite planifier un premier rendez-vous.", delayMs: 6100 },
          { role: 'agent', text: 'Très bien, je prépare un résumé et les créneaux disponibles.', delayMs: 8100 }
        ]
      }
    },
    problemCard: {
      badge: 'Constat terrain',
      titlePrefix: 'Le suivi repose encore largement sur la',
      titleAccent: 'réactivité',
      titleSuffix: 'du patient',
      intro: "Dans de nombreux parcours ambulatoires, chroniques ou spécialisés, le suivi repose sur des relances manuelles et des outils hétérogènes, souvent dépendants de l'initiative du patient ou de la disponibilité des équipes.",
      problems: [
        {
          title: 'Questionnaires peu complétés',
          description: "Les PROMS et ePRO sont fréquemment sous-remplis, limitant la visibilité continue sur l'évolution clinique."
        },
        {
          title: 'Temps soignant mobilisé',
          description: 'Infirmiers coordinateurs, ARC et équipes médicales consacrent une part importante de leur temps à relancer et documenter manuellement les échanges.'
        },
        {
          title: 'Retours non structurés',
          description: 'Les informations remontent par des canaux variés (appels spontanés, emails, SMS), difficiles à consolider et à tracer de manière homogène.'
        },
        {
          title: 'Engagement numérique hétérogène',
          description: 'Les applications et portails patients nécessitent une disponibilité et une aisance numérique qui ne sont pas toujours compatibles avec certains parcours de soins, notamment chez les patients fragilisés.'
        }
      ],
      outroLine1: 'Certains signaux précoces restent silencieux.',
      outroLine2: "Et c'est souvent là que le risque apparaît."
    },
    homeOurSolution: {
      eyebrow: 'Notre approche',
      title: 'Un suivi actif, déclenché par vos équipes.',
      statementLine1: 'Vous définissez le protocole.',
      statementLine2: "L'IA vocale exécute le suivi.",
      statementBody: "Chaque échange est structuré et restitué sous forme de compte-rendu utile à l'équipe.",
      impactTitle: 'Ce que ça change',
      impactItems: [
        'un suivi régulier, non dépendant du "patient qui pense à appeler"',
        'une information homogène, comparable dans le temps',
        'une remontée des situations à risque selon vos critères'
      ],
      workflow: {
        eyebrow: 'Fonctionnement',
        title: 'Comment ça marche',
        chip: 'Cadre structuré et supervision clinique',
        steps: [
          {
            title: 'Vos protocoles',
            body: "Vous définissez les questions, la fréquence, les seuils d'alerte, et les règles d'escalade."
          },
          {
            title: 'Consentement patient',
            body: 'Le patient accepte explicitement le suivi et le canal vocal.'
          },
          {
            title: 'Appels vocaux structurés',
            body: 'Appels programmés, guidés, avec un entretien court et cadré.'
          },
          {
            title: 'Structuration et synthèse',
            body: 'Les réponses sont organisées et résumées en informations exploitables.'
          },
          {
            title: 'Alertes sous supervision',
            body: "Les alertes suivent vos critères. L'équipe reste décisionnaire."
          }
        ]
      },
      visual: {
        alertTitle: 'Signalement clinique',
        alertBody: "Les alertes sont priorisées selon vos seuils, puis transmises de façon lisible à l'équipe.",
        chartTitle: 'Visualisation simplifiée',
        chartLineLabel: 'Évolution symptômes (J+1 à J+7)',
        chartBarsLabel: 'Indicateurs déclaratifs',
        badges: {
          lowAlert: 'Alerte faible',
          stable: 'Stable',
          monitoring: 'Surveillance'
        }
      },
      reassurance: "Aucune décision médicale autonome. L'IA organise, l'équipe arbitre."
    },
    voiceChannel: {
      eyebrow: 'Canal vocal',
      title: 'Pourquoi le canal vocal fonctionne en santé',
      coreEyebrow: 'Usage réel',
      coreText: 'Le canal vocal s’intègre au quotidien du patient sans complexifier le parcours.',
      items: [
        {
          title: 'Universel',
          body: 'Pas d’application à télécharger, pas de compte à créer, pas de friction.'
        },
        {
          title: 'Naturel',
          body: 'Le patient répond comme il parlerait à une équipe soignante.'
        },
        {
          title: 'Régulier',
          body: 'Un appel programmé installe un rythme et sécurise le parcours.'
        },
        {
          title: 'Inclusif',
          body: 'Particulièrement adapté aux patients fragilisés ou peu “digital”.'
        }
      ],
      closing: 'Un protocole n’est efficace que si le canal est réellement utilisé.'
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
          contexts: ['Ambulatoire', 'Chirurgie', 'Dermatologie', 'Médecine esthétique', 'Médecine du sport'],
          cta: 'Voir la page dédiée'
        },
        {
          title: 'Suivi chronique',
          body: 'Suivi régulier, observance, qualité de vie, coordination.',
          contexts: ['Suivi régulier', 'Observance', 'Qualité de vie', 'Coordination'],
          cta: 'Voir la page dédiée'
        },
        {
          title: 'Parcours à haute vigilance',
          body: 'Oncologie, transplantation, cardiologie, santé mentale : suivi rapproché, signaux faibles, escalade maîtrisée.',
          contexts: ['Oncologie', 'Transplantation', 'Cardiologie', 'Santé mentale'],
          cta: 'Voir la page dédiée'
        }
      ]
    },
    homeSecurityFrame: {
      eyebrow: 'Sécurité & cadre',
      title: 'Conçu pour des environnements médicaux exigeants.',
      subtitle: 'Un socle opérationnel pensé pour la continuité des parcours, la supervision clinique et la conformité des usages.',
      tableHeaderLeft: 'Pilier',
      tableHeaderRight: 'Ce que cela garantit',
      rows: [
        {
          title: 'Protection des données',
          body: 'Consentement explicite et journalisation complète.'
        },
        {
          title: 'Hébergement sécurisé',
          body: 'Infrastructure compatible exigences applicables en santé.'
        },
        {
          title: 'Traçabilité',
          body: 'Historique structuré et exportable.'
        },
        {
          title: 'Positionnement réglementaire clair',
          body: 'Outil organisationnel supervisé, sans décision médicale autonome.'
        }
      ],
      cta: 'En savoir plus sur la sécurité'
    }
  },
  content: {
    helpItems: [
      {
        title: 'Création de contenu',
        body: 'Des visuels et messages conçus pour arrêter le scroll, alignés à votre marque et votre audience.',
        emoji: '🎬',
        gradient: 'linear-gradient(135deg,#1a1a2e,#16213e)',
        delayClass: 'd1'
      },
      {
        title: 'Gestion social media',
        body: 'Gestion complète multi-plateformes : publication, planification et communauté.',
        emoji: '📱',
        gradient: 'linear-gradient(135deg,#0f3460,#533483)',
        delayClass: 'd2'
      },
      {
        title: 'Paid media',
        body: 'Campagnes data-driven qui trouvent votre audience et transforment l’attention en revenu.',
        emoji: '💰',
        gradient: 'linear-gradient(135deg,#f7971e,#ffd200)',
        delayClass: 'd3'
      }
    ],
    homeFaqItems: [
      { question: 'Y a-t-il une durée d’engagement minimum ?', answer: 'Non. Nous travaillons au mois. Vous pouvez mettre en pause ou arrêter avec 30 jours de préavis.' },
      { question: 'Pouvez-vous respecter notre charte de marque ?', answer: 'Oui. Nous travaillons avec vos guidelines. Si vous n’en avez pas, nous pouvons les créer pendant l’onboarding.' },
      { question: 'Quelles plateformes gérez-vous ?', answer: 'Instagram, TikTok, LinkedIn, Facebook, Pinterest et Threads. La plupart des clients démarrent sur 2–3 plateformes.' },
      { question: 'Quand voit-on les premiers résultats ?', answer: 'La croissance organique devient visible sous 60–90 jours. Le paid peut générer un ROI en 2–4 semaines selon le budget.' }
    ],
    storyVideos: [
      '/assets/videos/doctinum_hero.mp4',
    ],
    aboutTeamMembers: [
      { name: 'Sofia Little', role: 'Lead créative', gradient: 'linear-gradient(160deg,#f0c5a8,#d4a090,#c08878)', delayClass: 'd1' },
      { name: 'James Cohen', role: 'Fondateur & CEO', gradient: 'linear-gradient(160deg,#c8d4e0,#a8b8d0,#90a8c0)', delayClass: 'd2' },
      { name: 'Maya Rodriguez', role: 'Spécialiste growth', gradient: 'linear-gradient(160deg,#d0c8e0,#b0a0c8,#9890b8)', delayClass: 'd3' }
    ],
    aboutAwards: [
      ['Agence Social Media de l’année', 'Récompensée pour des campagnes créatives et des résultats mesurables sur plusieurs secteurs.', '2024'],
      ['Meilleure campagne de stratégie de contenu', 'Récompensée pour notre approche innovante du contenu UGC à fort potentiel viral.', '2023'],
      ['Prix Innovation Marketing Digital', 'Distinguée pour des méthodes qui améliorent engagement et conversion.', '2024'],
      ['Excellence agence émergente', 'Reconnaissance parmi les agences social media à plus forte croissance.', '2023']
    ],
    caseStudyCards: [
      { name: 'Glowhaus', category: 'Beauté', brand: 'Glowhaus', gradient: 'linear-gradient(135deg,#f5c5a8,#e8a090,#c87060)', delayClass: 'd1' },
      { name: 'Border', category: 'Technologie', brand: '◆ Border', gradient: 'linear-gradient(135deg,#e0c8b0,#c8a890,#b08870)', delayClass: 'd2' },
      { name: 'Then', category: 'Mode', brand: 'then', gradient: 'linear-gradient(135deg,#f0e0d0,#e0c8b8,#c8a898)', delayClass: 'd3', serif: true },
      { name: 'SnapShot', category: 'Photographie', brand: '⚡ SnapShot', gradient: 'linear-gradient(135deg,#d8e0d0,#c0c8b8,#a8b0a0)', delayClass: 'd4' }
    ],
    blogCards: [
      ['Créer du contenu qui convertit vraiment', 'Arrêtez le contenu qui fait des likes sans ventes. Voici ce qui fonctionne vraiment.', '17 oct. 2025', 'linear-gradient(160deg,#f0e8d8,#d8c8a8,#c0a878)', 'd1'],
      ['Comment nous avons scalé une marque beauté à 100K', 'Décryptage complet de la stratégie, du contenu et des tactiques de croissance.', '28 sept. 2025', 'linear-gradient(160deg,#e8c8b8,#d4a898,#c09080)', 'd2'],
      ['Les KPI à suivre au-delà des vanity metrics', 'Les likes et abonnés ne paient pas les factures. Voici quoi mesurer vraiment.', '10 sept. 2025', 'linear-gradient(160deg,#e8e0d8,#c8c0b0,#a8a090)', 'd3'],
      ['Pourquoi vos Reels ne font pas de vues', 'Erreurs fréquentes qui cassent votre portée et ajustements simples pour performer.', '22 août 2025', 'linear-gradient(160deg,#c0b8d0,#a098c0,#8880a8)', 'd4']
    ],
    contactFaqItems: [
      { question: 'Quand verrons-nous des résultats ?', answer: 'Le paid peut montrer un ROI en 2–4 semaines. L’organique demande 60–90 jours d’exécution régulière.' },
      { question: 'Quelles plateformes gérez-vous ?', answer: 'Instagram, TikTok, LinkedIn, Facebook, Pinterest et Threads. Nous recommandons de commencer par 2–3 plateformes.' },
      { question: 'Travaillez-vous avec notre secteur ?', answer: 'Nous accompagnons e-commerce, SaaS, DTC, services et personal brands.' },
      { question: 'Et si on veut arrêter ?', answer: 'Annulation à tout moment avec 30 jours de préavis. Aucun verrouillage.' },
      { question: 'Quel niveau d’implication côté client ?', answer: 'Autant ou aussi peu que vous voulez. En général un point mensuel de 30 minutes suffit.' }
    ]
  },
  pages: {
    about: {
      badge: 'À propos',
      title: 'Qui nous sommes',
      description: 'Nous sommes des stratèges, créateurs et experts growth convaincus que les réseaux sociaux doivent générer de vrais résultats business.'
    },
    caseStudies: {
      badge: 'Cas clients',
      title: 'Nos meilleurs projets',
      description: 'Découvrez comment nous transformons les réseaux sociaux en moteur de croissance mesurable.'
    },
    blog: {
      badge: 'Blog',
      title: 'Derniers insights',
      description: 'Des stratégies actionnables et des tendances pour transformer votre présence social en croissance business.'
    }
  },
  contactForm: {
    badge: 'Réserver un appel',
    titleLine1: 'Commençons',
    titleLine2: 'maintenant',
    subtitle: "Prêt à transformer vos réseaux sociaux ? Contactez-nous et nous vous montrerons ce qui est possible pour votre marque.",
    nameLabel: 'Nom',
    namePlaceholder: 'Votre nom',
    emailLabel: 'Email',
    emailPlaceholder: 'votre@email.com',
    servicesLabel: 'Quels services vous intéressent ?',
    services: {
      contentCreation: 'Création de contenu',
      socialManagement: 'Gestion social media',
      paidMedia: 'Paid Media',
      all: 'Tous'
    },
    budgetLabel: 'Budget social media mensuel actuel ?',
    budgets: {
      under2k: 'Moins de 2K$',
      between2k5k: '2K$-5K$',
      between5k10k: '5K$-10K$',
      over10k: '10K$+'
    },
    businessLabel: 'Parlez-nous de votre activité...',
    businessPlaceholder: 'Que vendez-vous, qui sont vos clients, quels sont vos objectifs ?',
    submit: 'Réserver un appel ↗'
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
    copyright: '© 2025 Doctinum'
  }
};

export default fr;
