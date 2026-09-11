const en = {
  common: {
    close: 'Close',
    avatar: 'Avatar',
    authorInitials: 'AA',
  },
  language: {
    title: 'Language',
    currentFlag: '🇬🇧',
    options: [
      { code: 'en', label: 'English', flag: '🇬🇧' },
      { code: 'fr', label: 'Français', flag: '🇫🇷' },
    ],
  },
  nav: {
    cta: 'Discuss your project',
    home: 'Home',
    solutions: 'Solutions',
    functioning: 'How it works',
    editorsApi: 'Editors & API',
    pharmaResearch: 'Pharma & Research',
    security: 'Security',
    enterprise: 'Enterprise',
    mainMenu: 'Menu',
    quickAccess: 'Quick access',
    try: 'Try',
    demo: 'Demo',
    bookDemo: 'Book a demo',
    contactUs: 'Contact us',
    mobileMenu: 'Menu',
  },
  megaMenu: {
    solutions: {
      eyebrow: 'Solutions',
      title: 'Follow-up paths adapted to each clinical context',
      body: 'Structure care journeys by specialty, coordination needs, and vigilance level.',
      groups: [
        {
          title: 'Pre and post intervention follow-up',
          links: [
            {
              label: 'Surgery & aesthetic medicine',
              description: 'Guided pathways before and after procedures.',
              page: 'surgery-aesthetic',
            },
            {
              label: 'Sports medicine',
              description:
                'Symptom monitoring and return-to-activity tracking.',
              page: 'sports-medicine',
            },
            {
              label: 'Dermatology',
              description: 'Regular follow-up for progression and tolerance.',
              page: 'dermatology',
            },
            {
              label: 'PROMS / post-procedure questionnaires',
              description: 'Structured patient feedback collection.',
              page: 'proms',
            },
          ],
        },
        {
          title: 'Chronic follow-up & coordination',
          links: [
            {
              label: 'Patient support programs',
              description: 'Cadenced follow-up with clinical scripts.',
              page: 'patient-support-programs',
            },
            {
              label: 'Prevention & workplace health',
              description: 'Population-level prevention and engagement.',
              page: 'prevention-workplace-health',
            },
            {
              label: 'Coordinated chronic pathways',
              description: 'Shared visibility across care teams.',
              page: 'case-studies',
            },
          ],
        },
        // {
        //   title: 'Specialized high-vigilance pathways',
        //   links: [
        //     {
        //       label: 'Transplantation',
        //       description: 'Critical checkpoints and early warning signals.',
        //       page: 'blog',
        //     },
        //     {
        //       label: 'Oncology',
        //       description: 'Follow-up on side effects and red flags.',
        //       page: 'contact',
        //     },
        //     {
        //       label: 'Chronic cardiology',
        //       description: 'Longitudinal monitoring of key indicators.',
        //       page: 'privacy',
        //     },
        //     {
        //       label: 'Rare diseases',
        //       description: 'Coordination across complex care journeys.',
        //       page: 'case-studies',
        //     },
        //     {
        //       label: 'Mental health',
        //       description:
        //         'Conversational follow-up with supervised escalation.',
        //       page: 'about',
        //     },
        //   ],
        // },
      ],
      cta: { label: 'Discuss a pilot project', page: 'contact' },
    },
    soon: 'Soon',
    grouped: {
      sectionEntry: 'Open this section',
      goHome: 'Go back to home',
    },
    main: {
      title: 'Reach key sections quickly',
      body: 'Use a single mega menu to access solutions, resources, and enterprise pathways.',
    },
    functioning: {
      eyebrow: 'How it works',
      title: 'Understand implementation end to end',
      body: 'Explore the product demo, core features, and agent resources.',
      groups: [
        {
          title: 'Demo',
          links: [
            {
              label: 'Demo',
              description: 'See follow-up workflows in realistic conditions.',
              page: 'blog',
            },
          ],
        },
        {
          title: 'Product',
          links: [
            {
              label: 'Features',
              description: 'Core capabilities and configuration options.',
              page: 'about',
            },
          ],
        },
        {
          title: 'Resources',
          links: [
            {
              label: 'Model agents',
              description: 'Ready-to-adapt agent examples.',
              page: 'case-studies',
            },
            {
              label: 'PROMS models',
              description: 'Post-procedure questionnaire templates.',
              page: 'proms',
            },
          ],
        },
      ],
      cta: { label: 'Book a demo', page: 'contact' },
    },
    enterprise: {
      eyebrow: 'Enterprise',
      title: 'Build deployments for high-stakes environments',
      body: 'Work with us on product vision, experimentation, and strategic partnerships.',
      groups: [
        {
          title: 'Vision & team',
          links: [
            {
              label: 'Vision',
              description: 'Product direction and deployment principles.',
              page: 'vision',
            },
            {
              label: 'Security',
              description: 'Compliance, regulation and governance.',
              page: 'security',
            },
            // {
            //   label: 'Careers',
            //   description: 'Roles and product culture.',
            //   page: 'about',
            // },
            // {
            //   label: 'Blog',
            //   description: 'Articles and perspectives.',
            //   page: 'blog',
            // },
            {
              label: 'Styleguide',
              description: 'Internal UI reference.',
              page: 'styleguide',
              devOnly: true,
            },
          ],
        },
        // {
        //   title: 'Partnerships',
        //   links: [
        //     {
        //       label: 'Experimentation & partnerships',
        //       description: 'Pilots, protocols, and collaborations.',
        //       page: 'case-studies',
        //     },
        //     {
        //       label: 'Investors',
        //       description: 'Strategic discussions and information.',
        //       page: 'case-studies',
        //     },
        //   ],
        // },
      ],
      cta: { label: 'Contact us', page: 'contact' },
    },
  },
  site: {
    socialProofText: 'Supporting over 176+ healthcare professionals',
    ctaSubtitleFull:
      "Book a free 30-minute strategic call and let's build a follow-up protocol tailored to your clinical context.",
    ctaSubtitleShort: 'Book a free 30-minute strategic call.',
    storyDurationMs: 3000,
  },
  sections: {
    whyDifferent: {
      label: 'Why it is different',
      titlePrefix: 'One conversation, two surfaces.',
      titleAccent: 'And an engine that keeps the AI in check.',
      body: '',
      cards: [
        {
          icon: 'phone',
          title: 'Voice + screen',
          body: 'Voice and screen form a single conversation: patients answer aloud or with a tap, and precise data (dates, contact details, photos) flows through the screen. Each patient chooses their own mode.',
          tag: 'Multimodal',
        },
        {
          icon: 'check-badge',
          title: 'AI kept in check',
          body: 'The AI model decides nothing on its own: an orchestration engine frames every exchange. Every conversation is traceable and replayable: compliance lives in the architecture, not in a promise.',
          tag: 'Traceable & replayable',
        },
        {
          icon: 'server-stack',
          title: 'Built for French aesthetic medicine',
          body: 'Journeys, vocabulary, and regulatory framework tailored to the French aesthetic medicine sector. HDS-certified health hosting, data hosted in France.',
          tag: 'HDS hosting · France',
          highlight: true,
        },
      ],
    },
    hero: {
      ariaLabel: 'Hero',
      titlePrefix: 'Patient follow-up',
      titleMiddle: 'should not remain',
      titleAccent: 'silent',
      subtitle:
        'The voice AI infrastructure that applies your protocols, triggers structured follow-up, and surfaces actionable signals, under medical supervision.',
      cta: 'Evaluate a pilot project',
      cta2: 'Schedule a confidential discussion',
      liveCallBadge: 'Live test',
    },
    faq: {
      label: 'Questions',
      title: 'Frequently Asked Questions',
    },
    mission: {
      label: 'Our mission',
      titlePrefix: 'Transforming content chaos into',
      titleAccent: 'consistent',
      titleSuffix: 'growth',
      body: [
        'We support brands ready to take their social media presence seriously.',
        'Not to fill a feed, but to build a useful and sustainable presence.',
        'For us, content is just the starting point.',
        'Our approach combines strategy, execution, and consistency. We handle planning, publishing, and platforms.',
        'If you want to grow with intention, we can help.',
      ],
    },
    finalCta: {
      label: 'Get started',
      titlePrefix: 'Your voice follow-up starts',
      titleAccent: 'here.',
    },
    medicalVoice: {
      headLabel:
        'Explore a voice follow-up example – non-clinical demonstration',
      headTitlePrefix: 'Interactive simulation of a call by an',
      headTitleAccent: 'AI medical agent',
      domains: [
        { id: 'ortho', label: 'Orthopedics (surgery)' },
        { id: 'aesthetic', label: 'Cosmetic surgery' },
      ],
      controls: {
        slideToCall: 'Slide',
      },
      conversion: {
        title: 'Discover our platform',
        message:
          "You have tested our live calls multiple times. It's time to discover the full power of our platform in a real demo.",
        demoButton: 'Book a demo',
        cancelButton: 'Cancel',
      },
      transcript: {
        agent: 'Agent',
        patient: 'Patient',
      },
      status: {
        ready: 'Ready',
        creating: 'Creating secure web call...',
        connectingRetell: 'Connecting to Retell...',
        liveRunning: 'Live call running',
        callFinished: 'Call finished',
        fallbackCompleted: 'Fallback demo completed',
        liveUnavailable: 'Live unavailable. Running fallback demo...',
        rateLimitExceeded: 'Running demo...',
      },
      results: {
        disclaimer:
          'Example of information that can be collected during a pre-consultation:',
        default: {
          header: 'Structured call summary',
          title: 'Clinical data collected during simulation',
          metricsTitle: 'Captured indicators',
          metrics: [
            { label: 'Primary reason', value: 'Declared symptom signal' },
            {
              label: 'Perceived intensity',
              value: 'Moderate, requires monitoring',
            },
            { label: 'Protocol adherence', value: 'Partial' },
            { label: 'Protocol status', value: 'Thresholds to verify' },
          ],
          alert: {
            badge: 'Protocol threshold alert',
            title: 'Protocol threshold crossed',
            body: 'Combination of responses exceeded thresholds defined in the protocol.',
          },
        },
        ortho: {
          header: 'Structured call summary',
          title: 'Post-op day 7 follow-up (orthopedics)',
          metricsTitle: 'Captured indicators',
          metrics: [
            { label: 'Reported pain', value: '6/10 (higher at night)' },
            {
              label: 'Analgesic adherence',
              value: 'Compliant with prescription',
            },
            { label: 'Local signs', value: 'No redness or discharge' },
            { label: 'Rehabilitation', value: 'Partial restart' },
          ],
          alert: {
            badge: 'Protocol threshold alert',
            title: 'Pain threshold crossed',
            body: 'Pain >= 6/10 with night discomfort: orthopedics alert threshold triggered.',
          },
        },
        aesthetic: {
          header: 'Pre-consultation summary',
          title: 'File ready for the first consultation (aesthetic medicine)',
          metricsTitle: 'Information collected',
          metrics: [
            { label: 'Reason expressed', value: 'Rhinoplasty (nasal bump)' },
            {
              label: 'How long it has been a concern',
              value: 'Since adolescence',
            },
            { label: 'ENT history', value: 'None reported' },
            { label: 'Photos', value: 'Link sent to patient' },
            {
              label: 'Medical decision',
              value: 'Reserved for the practitioner',
            },
          ],
        },
      },
      fallbackTranscripts: {
        ortho: [
          {
            role: 'agent',
            text: "Hello, I'm the orthopedic agent. What are you feeling today?",
            delayMs: 600,
          },
          {
            role: 'patient',
            text: 'I have pain in my right knee after running.',
            delayMs: 2100,
          },
          {
            role: 'agent',
            text: 'Thanks. How long have you had this pain?',
            delayMs: 3800,
          },
          {
            role: 'patient',
            text: 'For about ten days, especially when going downstairs.',
            delayMs: 5600,
          },
          {
            role: 'agent',
            text: 'Great, I can provide an initial triage and schedule an appointment.',
            delayMs: 7600,
          },
        ],
        aesthetic: [
          {
            role: 'agent',
            text: "Hello, I'm Clara, the practice's front-desk assistant. I'm here to understand your project and prepare your visit. What brings you in today?",
            delayMs: 0,
          },
          {
            role: 'patient',
            text: "Hi. I'm looking into a rhinoplasty, I've had a complex about the bump on my nose since I was a teenager.",
            delayMs: 1500,
          },
          {
            role: 'agent',
            text: 'I understand. Dr. Leroy performs this procedure regularly at the practice. Have you already consulted a surgeon about this?',
            delayMs: 3500,
          },
          {
            role: 'patient',
            text: "No, never. I'm not really sure what to expect.",
            delayMs: 6000,
          },
          {
            role: 'agent',
            text: "That's completely normal, the consultation is exactly where those questions get answered. May I ask how long this has been bothering you?",
            delayMs: 8500,
          },
          {
            role: 'patient',
            text: 'Since my teenage years, but I finally decided to look into it seriously this year.',
            delayMs: 11500,
          },
          {
            role: 'agent',
            text: 'Thank you. Do you have any medical history or previous ENT procedures on your nose?',
            delayMs: 14500,
          },
          {
            role: 'patient',
            text: 'No, no particular history.',
            delayMs: 17000,
          },
          {
            role: 'agent',
            text: "Perfect, noted. I'll send you a link to add a few photos, they'll help Dr. Leroy prepare for your consultation. Any other questions before then?",
            delayMs: 19000,
          },
        ],
      },
    },
    problemCard: {
      badge: 'Field insight',
      titlePrefix: 'Follow-up still depends heavily on patient',
      titleAccent: 'responsiveness',
      titleSuffix: '',
      intro:
        'In many ambulatory, chronic, and specialized care pathways, follow-up still relies on manual outreach and fragmented tools, often dependent on patient initiative or team availability.',
      problems: [
        {
          title: 'Low questionnaire completion',
          description:
            'PROMS and ePROs are often under-completed, limiting continuous visibility into clinical evolution.',
        },
        {
          title: 'Clinical team time consumed',
          description:
            'Care coordinators, CRAs, and medical teams spend a significant part of their time relaunching and documenting exchanges manually.',
        },
        {
          title: 'Unstructured feedback',
          description:
            'Information comes through varied channels (spontaneous calls, emails, SMS), making consolidation and consistent traceability difficult.',
        },
        {
          title: 'Uneven digital engagement',
          description:
            'Apps and patient portals require availability and digital confidence that are not always compatible with every care journey, especially for vulnerable patients.',
        },
      ],
      outroLine1: 'Some early warning signals stay silent.',
      outroLine2: 'And that is often where risk appears.',
    },
    homeOurSolution: {
      eyebrow: 'Our approach',
      title: 'Active follow-up, triggered by your teams.',
      statementLine1: 'You define the protocol.',
      statementLine2: 'Voice AI executes the follow-up.',
      statementBody:
        'Each exchange is structured and returned as a concise report useful to the care team.',
      impactTitle: 'What this changes',
      impactItems: [
        'regular follow-up, not dependent on patients remembering to call',
        'homogeneous information, comparable over time',
        'escalation of at-risk situations based on your criteria',
      ],
      workflow: {
        eyebrow: 'Workflow',
        title: 'How it works',
        chip: 'Structured framework and clinical supervision',
        steps: [
          {
            title: 'Your protocols',
            body: 'You define questions, cadence, alert thresholds, and escalation rules.',
          },
          {
            title: 'Patient consent',
            body: 'The patient explicitly agrees to follow-up and the voice channel.',
          },
          {
            title: 'Structured voice calls',
            body: 'Scheduled, guided calls with a short, framed conversation.',
          },
          {
            title: 'Structuring and synthesis',
            body: 'Responses are organized and summarized into actionable information.',
          },
          {
            title: 'Supervised alerts',
            body: 'Alerts follow your criteria. The team remains the decision-maker.',
          },
        ],
      },
      visual: {
        alertTitle: 'Clinical signaling',
        alertBody:
          'Alerts are prioritized by your thresholds and delivered to the team in a readable format.',
        chartTitle: 'Simplified visualization',
        chartLineLabel: 'Symptom trend (Day 1 to Day 7)',
        chartBarsLabel: 'Self-reported indicators',
        badges: {
          lowAlert: 'Low alert',
          stable: 'Stable',
          monitoring: 'Monitoring',
        },
      },
      reassurance:
        'No autonomous medical decision. AI organizes, the team arbitrates.',
    },
    voiceChannel: {
      eyebrow: 'Voice channel',
      title: 'Why the voice channel works in healthcare',
      coreEyebrow: 'Real-world adoption',
      coreText:
        'The voice channel fits naturally into patient routines without adding friction.',
      items: [
        {
          title: 'Universal',
          body: 'No app to download, no account to create, no friction.',
        },
        {
          title: 'Natural',
          body: 'Patients answer as they would speak with a care team.',
        },
        {
          title: 'Regular',
          body: 'A scheduled call creates rhythm and secures the care pathway.',
        },
        {
          title: 'Inclusive',
          body: 'Especially suited for fragile or low-digital-literacy patients.',
        },
      ],
      closing: 'A protocol is only effective if the channel is truly used.',
    },
    homeUseCases: {
      eyebrow: 'Use cases',
      title: 'Use cases tailored to different clinical contexts',
      explore: 'Explore use cases',
      imagePlaceholder: 'Visual coming soon',
      items: [
        {
          title: 'Pre and post-intervention follow-up',
          body: 'Ambulatory care, surgery, dermatology, aesthetic medicine, sports medicine.',
          contexts: [
            'Ambulatory care',
            'Surgery',
            'Dermatology',
            'Aesthetic medicine',
            'Sports medicine',
          ],
          cta: 'View dedicated page',
        },
        {
          title: 'Chronic follow-up',
          body: 'Regular monitoring, adherence, quality of life, coordination.',
          contexts: [
            'Regular monitoring',
            'Adherence',
            'Quality of life',
            'Coordination',
          ],
          cta: 'View dedicated page',
        },
        {
          title: 'High-vigilance pathways',
          body: 'Oncology, transplantation, cardiology, mental health: close monitoring, weak-signal detection, controlled escalation.',
          contexts: [
            'Oncology',
            'Transplantation',
            'Cardiology',
            'Mental health',
          ],
          cta: 'View dedicated page',
        },
      ],
    },
    homeSecurityFrame: {
      eyebrow: 'Security & framework',
      title: 'Built for demanding medical environments.',
      subtitle:
        'An operational foundation designed for pathway continuity, clinical supervision, and compliant usage.',
      tableHeaderLeft: 'Pillar',
      tableHeaderRight: 'What it ensures',
      rows: [
        {
          title: 'Data protection',
          body: 'Explicit consent and full logging.',
        },
        {
          title: 'Secure hosting',
          body: 'Infrastructure aligned with applicable healthcare requirements.',
        },
        {
          title: 'Traceability',
          body: 'Structured and exportable history.',
        },
        {
          title: 'Clear regulatory positioning',
          body: 'A supervised organizational tool, with no autonomous medical decision-making.',
        },
      ],
      cta: 'Learn more about security',
    },
    logosStrip: {
      title: 'Supported brands',
    },
    notCallbot: {
      title: 'A',
      titleAccent: 'clinical infrastructure',
      titleSuffix: ', not a simple voice agent.',
      items: [
        {
          title: 'Configurable and secure protocols',
          body: 'Follow-up relies on a protocol rigorously applied by your agents in a fluid conversation with the patient.',
        },
        {
          title: 'Longitudinal follow-up',
          body: 'Data is organized over time, not treated as isolated exchanges.',
        },
        {
          title: 'Constant medical supervision',
          body: 'No autonomous medical decision. Alerts are defined by the team.',
        },
      ],
    },
    slidingBanner: {
      items: ['No app to install', 'Explicit consent', 'Full traceability'],
    },
  },
  content: {
    helpItems: [
      {
        title: 'Content creation',
        body: 'Visuals and messaging designed to stop the scroll, aligned with your brand and audience.',
        emoji: '🎬',
        gradient: 'linear-gradient(135deg,#1a1a2e,#16213e)',
        delayClass: 'd1',
      },
      {
        title: 'Social media management',
        body: 'Full multi-platform management: publishing, scheduling, and community.',
        emoji: '📱',
        gradient: 'linear-gradient(135deg,#0f3460,#533483)',
        delayClass: 'd2',
      },
      {
        title: 'Paid media',
        body: 'Data-driven campaigns that find your audience and turn attention into revenue.',
        emoji: '💰',
        gradient: 'linear-gradient(135deg,#f7971e,#ffd200)',
        delayClass: 'd3',
      },
    ],
    homeFaqItems: [
      {
        question: 'Is there a minimum commitment period?',
        answer:
          "No. We work on a monthly basis. You can pause or cancel with 30 days' notice.",
      },
      {
        question: 'Can you respect our brand guidelines?',
        answer:
          "Yes. We work with your guidelines. If you don't have any, we can create them during onboarding.",
      },
      {
        question: 'Which platforms do you manage?',
        answer:
          'Instagram, TikTok, LinkedIn, Facebook, Pinterest, and Threads. Most clients start with 2–3 platforms.',
      },
      {
        question: 'When do we see the first results?',
        answer:
          'Organic growth becomes visible within 60–90 days. Paid can generate ROI within 2–4 weeks depending on budget.',
      },
    ],
    storyVideos: ['/assets/videos/doctinum_hero.mp4'],
    aboutTeamMembers: [
      {
        name: 'Sofia Little',
        role: 'Creative lead',
        gradient: 'linear-gradient(160deg,#f0c5a8,#d4a090,#c08878)',
        delayClass: 'd1',
      },
      {
        name: 'James Cohen',
        role: 'Founder & CEO',
        gradient: 'linear-gradient(160deg,#c8d4e0,#a8b8d0,#90a8c0)',
        delayClass: 'd2',
      },
      {
        name: 'Maya Rodriguez',
        role: 'Growth specialist',
        gradient: 'linear-gradient(160deg,#d0c8e0,#b0a0c8,#9890b8)',
        delayClass: 'd3',
      },
    ],
    aboutAwards: [
      [
        'Social Media Agency of the Year',
        'Awarded for creative campaigns and measurable results across multiple sectors.',
        '2024',
      ],
      [
        'Best Content Strategy Campaign',
        'Awarded for our innovative approach to high-viral-potential UGC content.',
        '2023',
      ],
      [
        'Digital Marketing Innovation Award',
        'Recognized for methods that improve engagement and conversion.',
        '2024',
      ],
      [
        'Emerging Agency Excellence',
        'Recognition among the fastest-growing social media agencies.',
        '2023',
      ],
    ],
    caseStudyCards: [
      {
        name: 'Glowhaus',
        category: 'Beauty',
        brand: 'Glowhaus',
        gradient: 'linear-gradient(135deg,#f5c5a8,#e8a090,#c87060)',
        delayClass: 'd1',
      },
      {
        name: 'Border',
        category: 'Technology',
        brand: '◆ Border',
        gradient: 'linear-gradient(135deg,#e0c8b0,#c8a890,#b08870)',
        delayClass: 'd2',
      },
      {
        name: 'Then',
        category: 'Fashion',
        brand: 'then',
        gradient: 'linear-gradient(135deg,#f0e0d0,#e0c8b8,#c8a898)',
        delayClass: 'd3',
        serif: true,
      },
      {
        name: 'SnapShot',
        category: 'Photography',
        brand: '⚡ SnapShot',
        gradient: 'linear-gradient(135deg,#d8e0d0,#c0c8b8,#a8b0a0)',
        delayClass: 'd4',
      },
    ],
    blogCards: [
      [
        'Creating content that truly converts',
        "Stop content that gets likes without sales. Here's what really works.",
        'Oct 17, 2025',
        'linear-gradient(160deg,#f0e8d8,#d8c8a8,#c0a878)',
        'd1',
      ],
      [
        'How we scaled a beauty brand to 100K',
        'Complete breakdown of strategy, content, and growth tactics.',
        'Sep 28, 2025',
        'linear-gradient(160deg,#e8c8b8,#d4a898,#c09080)',
        'd2',
      ],
      [
        'KPIs to track beyond vanity metrics',
        "Likes and followers don't pay the bills. Here's what to really measure.",
        'Sep 10, 2025',
        'linear-gradient(160deg,#e8e0d8,#c8c0b0,#a8a090)',
        'd3',
      ],
      [
        "Why your Reels aren't getting views",
        'Common mistakes that kill your reach and simple adjustments to perform.',
        'Aug 22, 2025',
        'linear-gradient(160deg,#c0b8d0,#a098c0,#8880a8)',
        'd4',
      ],
    ],
    contactFaqItems: [
      {
        question: 'When will we see results?',
        answer:
          'Paid can show ROI within 2–4 weeks. Organic takes 60–90 days of consistent execution.',
      },
      {
        question: 'Which platforms do you manage?',
        answer:
          'Instagram, TikTok, LinkedIn, Facebook, Pinterest, and Threads. We recommend starting with 2–3 platforms.',
      },
      {
        question: 'Do you work with our industry?',
        answer:
          'We work with e-commerce, SaaS, DTC, service businesses, and personal brands.',
      },
      {
        question: 'What if we want to cancel?',
        answer:
          "Cancel anytime with 30 days' notice. No penalties, no lock-ins.",
      },
      {
        question: 'How involved do we need to be?',
        answer:
          'As much or as little as you want. Generally a 30-minute monthly check-in is enough.',
      },
    ],
  },
  pages: {
    about: {
      badge: 'About',
      title: 'Who we are',
      description:
        'We are strategists, creators, and growth experts convinced that social media must generate real business results.',
    },
    caseStudies: {
      badge: 'Case studies',
      title: 'Our best projects',
      description:
        'Discover how we transform social media into a measurable growth engine.',
    },
    blog: {
      badge: 'Blog',
      title: 'Latest insights',
      description:
        'Actionable strategies and trends to transform your social presence into business growth.',
    },
    editorsApi: {
      preparationNotice: 'Offering in preparation, open to pilot partnerships.',
      hero: {
        title: 'Add a medical voice agent to your platform',
        subtitle:
          'Easily and securely integrate a structured voice channel via API without worrying about call, conversation, or data extraction issues',
        description:
          'The infrastructure integrates via API and enables adding a structured voice channel without developing your own call system.',
        cta1: 'Explore integration',
        cta2: 'Request sandbox access',
      },
      problem: {
        title: 'Patient follow-up platforms all encounter the same limitation',
        intro:
          'Digital solutions today enable patient follow-up via apps or questionnaires. But patient engagement remains difficult to maintain over time.',
        blocks: [
          {
            title: 'Incomplete questionnaires',
            description:
              'Digital questionnaires frequently remain uncompleted.',
          },
          {
            title: 'Human follow-ups',
            description: 'Teams must manually follow up with patients.',
          },
          {
            title: 'Fragmented interactions',
            description: 'Information comes through different channels.',
          },
          {
            title: 'Variable digital engagement',
            description: 'Some patients use apps or portals infrequently.',
          },
        ],
        footer:
          'A follow-up protocol is only effective if patients actually respond.',
      },
      infrastructure: {
        title: 'A voice infrastructure designed for health platforms',
        blocks: [
          {
            title: 'Configurable protocols',
            description:
              'Call scenarios are defined from existing protocols or questionnaires.',
          },
          {
            title: 'Longitudinal follow-up',
            description:
              'Each interaction is historized and structured over time.',
          },
          {
            title: 'Medical supervision',
            description:
              'The system acts as an organizational tool supervised by teams.',
          },
        ],
      },
      transform: {
        title: 'Transform your patient questionnaires into voice calls',
        description:
          'If your platform already uses patient questionnaires (PROMS, ePRO, self-assessments, follow-up questionnaires), they can be transformed into structured voice call protocols. Responses are then sent back to your system as structured data.',
        items: ['PROMS', 'ePRO', 'Self-assessment', 'Follow-up questionnaire'],
      },
      architecture: {
        title: 'Integration architecture',
        steps: [
          'Your platform',
          'API',
          'Voice infrastructure',
          'Patient call',
          'Analysis',
          'Data webhook',
          'Your system',
        ],
        description:
          'The infrastructure can be integrated via API and webhooks. Your platform retains product logic and receives structured data.',
      },
      apiExample: {
        title: 'API logic example',
        examples: [
          {
            title: 'Create a patient in a workspace',
            method: 'POST',
            endpoint: 'api/public/v1/patients',
            body: '{\n  "workspace_id": "ws_123",\n  "first_name": "Marie",\n  "last_name": "Dupont",\n  "phone": "+33612345678"\n}',
          },
          {
            title: 'Start a follow-up',
            method: 'POST',
            endpoint: 'api/public/v1/follow-up',
            body: '{\n  "patient_id": "pat_456",\n  "agent_id": "agent_789"\n}',
          },
          {
            title: 'Receive data',
            method: 'WEBHOOK',
            endpoint: 'Webhook JSON',
            response:
              '{\n  "call_id": "call_abc",\n  "patient_id": "pat_456",\n  "responses": [\n    {\n      "question": "Pain (0-10)",\n      "answer": "3"\n    }\n  ]\n}',
          },
        ],
      },
      integrationCases: {
        title: 'Platforms that can integrate the voice module',
        cards: [
          {
            title: 'Remote monitoring',
            description: 'Remote patient follow-up.',
            gradient: 'var(--gradient-accent-warm)',
          },
          {
            title: 'Pathway coordination',
            description: 'Post-hospitalization follow-up.',
            gradient: 'var(--gradient-accent-cool)',
          },
          {
            title: 'RWE platforms',
            description: 'Longitudinal patient data collection.',
            gradient: 'var(--gradient-accent-warm-terra)',
          },
          {
            title: 'Patient record software',
            description: 'Complement digital interactions.',
            gradient: 'var(--gradient-accent-cool-overlay)',
          },
          {
            title: 'Prevention programs',
            description: 'Regular patient engagement.',
            gradient: 'var(--gradient-accent-warm)',
          },
        ],
      },
      questionnaireCreation: {
        title: 'Creating a call from a questionnaire',
        description:
          'Already have a questionnaire? Your form becomes a structured voice call.',
        items: [
          'JSON import',
          'Simple mapping',
          'Conditional logic definition',
          'Automatic scheduling',
        ],
      },
      pricing: {
        title: 'Pricing',
        leftTitle: 'Contact us for:',
        leftItems: [
          'Monthly platform package',
          'Conversation time billing',
          'Credit packs',
        ],
        rightTitle: 'Plans',
        rightItems: ['Starter', 'Growth', 'Enterprise: Negotiated volume'],
      },
      collaborationModels: {
        title: 'Different integration models',
        models: [
          {
            title: 'Full API',
            description: 'Native product integration.',
          },
          {
            title: 'Pilot project',
            description: 'Limited experimentation.',
          },
          {
            title: 'Product partnership',
            description: 'Co-development.',
          },
        ],
      },
      finalCta: {
        title: 'Add a voice layer to your platform',
        subtitle: "Let's discuss integration possibilities with your solution.",
        primaryCta: 'Request sandbox access',
        secondaryCta: 'Schedule a technical discussion',
      },
    },
    vision: {
      hero: {
        eyebrow: 'Our vision',
        title: 'Giving a voice to the entire patient journey.',
        subtitle:
          'Doctinum is building the conversational trust layer of the care journey. We start where the pain is sharpest and deployment fastest, the front desk and pre-consultation of private practices, then extend the same technology across the whole journey.',
        stats: [
          {
            value: '40–50%',
            label: 'patients lost to follow-up\nin clinical studies',
          },
          {
            value: '4',
            label: 'clinical infrastructure\nengines built',
          },
        ],
      },
      problem: {
        label: 'The real problem',
        title: 'A structural incompatibility',
        intro:
          'This is not an engagement problem. Patients are not unmotivated. It is a <strong>structural incompatibility between the channel and the clinical constraint.</strong>',
        body: 'Apps assume an action capacity that post-chemo, post-operative state, or simply fragility makes impossible. Reliable follow-up cannot rely on patient motivation.',
        statPill: {
          value: '40–50%',
          label: 'average lost-to-follow-up · Kyte et al., 2016',
        },
        barriers: [
          {
            title: 'Clinical state',
            text: 'Opening an app, navigating, checking, the cognitive load is incompatible with post-chemo or post-operative state.',
          },
          {
            title: 'Digital literacy',
            text: 'Elderly, low-digital, fragile populations are structurally excluded from the app channel.',
          },
          {
            title: 'Passive engagement required',
            text: 'The app waits for the patient to come. Reliable follow-up requires a channel that goes to them.',
          },
        ],
      },
      thesis: {
        label: 'Under the hood',
        title: 'Four engines. Not just a voice bot.',
        body: 'Integrating a conversational assistant is trivial. Building an infrastructure that withstands real clinical constraints, identity, protocol, structured data, longitudinal continuity, is a specialized engineering problem. This is the barrier we have crossed.',
        pillars: [
          {
            title: 'Identity & consent',
            text: 'Patient verification before collection, anti-impersonation, native GDPR traceability.',
          },
          {
            title: 'Call orchestration',
            text: 'No-answers, voicemails, third parties online, human escalation, complete auditable log.',
          },
          {
            title: 'Protocol fidelity',
            text: 'Maintaining clinical logic under conversational deviation, knowledge base configured by clinician.',
          },
          {
            title: 'Structured data',
            text: 'Clean clinical extraction, threshold alerts, HL7 FHIR export, not transcription.',
          },
        ],
      },
      founders: {
        label: 'At the origin',
        title: 'Two trajectories, one conviction',
        intro:
          'Doctinum was born from the convergence of field frustration and technical expertise. Not from a hypothesis, from a lived observation.',
        founders: [
          {
            role: 'CEO & Co-founder',
            name: 'Michael Ramassamy',
            story: [
              "Entrepreneur in digital health, Michael worked on facility reputation and patient experience. There, he observed a recurring paradox: <strong>questionnaires didn't come back, data was missing, not from indifference, but because the channel imposed too much effort.</strong>",
              "The experience became personal. Facing his father's health problems, uncomfortable with digital, he measured the reality of the void between consultations: no tool, no feedback, no structured follow-up possible.",
            ],
            insight:
              'This is not a motivation problem. It is a channel problem. And voice is the only channel that goes to the patient.',
          },
          {
            role: 'CTO & Co-founder',
            name: 'Régis Anclades',
            story: [
              'Engineer and technology entrepreneur, Régis designed and deployed several large-scale automated voice infrastructures, notably for customer support systems in production.',
              "This experience taught him what generic voice bots ignore: <strong>large-scale reliability is an architecture problem, not an interface one.</strong> Handling no-answers, third parties online, refusals, time windows, clean data, it's infrastructure, not LLM.",
            ],
            insight:
              'Large-scale voice reliability is an architecture problem, not an interface one. This is precisely what we built.',
          },
        ],
      },
      conviction: {
        label: 'Our convictions',
        title: 'What we deeply believe',
        cards: [
          {
            label: 'On the channel',
            text: 'Voice is the only universal channel. It requires no account, no app, no digital mastery. It is the only channel that goes to the patient, not the reverse.',
          },
          {
            label: 'On the technical barrier',
            text: 'Clinically reliable voice is not a design problem. It is an engineering problem. The barrier is there, it is our advantage.',
          },
          {
            label: 'On positioning',
            text: "We do not replace platforms. We are the voice layer they don't have, and building it in-house would cost them 12 months of R&D.",
          },
          {
            label: 'On timing',
            text: 'Multimodal voice LLMs have reached a maturity level and cost that finally make reliable clinical voice infrastructure possible. The window opens now.',
          },
        ],
      },
      roadmap: {
        label: 'Our trajectory',
        title: 'Three horizons.',
        timeline: [
          {
            year: 'Today',
            title: 'The front desk and pre-consultation',
            text: 'The multimodal assistant for aesthetic surgery and medicine practices. Outside the medical device framework by design: it understands, collects, and reports back. The practitioner decides.',
            tags: ['Not a medical device', 'Aesthetic practices'],
          },
          {
            year: 'Tomorrow',
            title: 'The full journey, across every channel',
            text: 'Booking, pre-procedure, post-operative follow-up. Web, phone, SMS, app. Voice and telephone bring back into the journey the patients that apps leave behind: older, less connected, precisely those who need the most vigilance. Protocols defined by the team, structured calls, data returned, supervised alerts.',
            tags: ['Web, phone, SMS', 'Supervised alerts'],
          },
          {
            year: 'Next',
            title: 'Certified clinical follow-up',
            text: 'Our architecture is designed for medical device certification. It will activate the clinical module, pre-triage, post-operative monitoring, warning signal detection, and open up integration with clinics, hospitals, and existing patient follow-up applications, along with access to the reimbursed remote medical monitoring framework.',
            tags: ['MD certification', 'Reimbursed remote monitoring'],
          },
        ],
      },
      cta: {
        title: 'A conversation, not a pitch.',
        subtitle:
          'If our reasoning interests you, or if you think it is wrong, we want to hear it.',
        primaryCta: 'Request a demo',
        secondaryCta: 'Publishers & API',
      },
    },
    security: {
      hero: {
        eyebrow: 'Security & Regulation',
        title: 'An infrastructure designed for healthcare environments.',
        subtitle:
          'Patient data protection, interaction traceability, and human supervision are not options in Doctinum, they are constitutive of the architecture.',
        badges: [
          'HDS hosting · France',
          'Native GDPR',
          'Outside MD classification',
          'Complete traceability',
        ],
      },
      guarantees: {
        label: 'What we guarantee today',
        title: 'Verifiable foundations, not statements of intent.',
        intro:
          "Here is what is in place, operational, and verifiable, without overselling certifications we don't yet have.",
        items: [
          {
            icon: '🏥',
            title: 'HDS-certified hosting',
            text: 'Health data is hosted in France with a certified Health Data Host (HDS) provider, in accordance with French regulatory requirements.',
            tag: 'France · Health data',
          },
          {
            icon: '🔒',
            title: 'Data encryption',
            text: 'Data is encrypted in transit and at rest. No patient data circulates in clear text at any processing stage.',
            tag: 'In-transit encryption · At rest',
          },
          {
            icon: '✅',
            title: 'Logged & auditable consent',
            text: 'Patient consent is collected online before any collection, timestamped and retained. Each interaction is logged with complete exportable traceability.',
            tag: 'GDPR · Auditable log',
          },
          {
            icon: '👤',
            title: 'Access control',
            text: 'Data access is strictly limited to authorized users. Access is recorded and traceable. No unauthenticated access to patient data is possible.',
            tag: 'Authentication · Logging',
          },
          {
            icon: '🌍',
            title: 'Data location · EU',
            text: 'All data is hosted on infrastructures located in France and the European Union. Any transfers outside the EU are contractually framed and documented.',
            tag: 'France · European Union',
          },
          {
            icon: '🔍',
            title: 'Patient identity verification',
            text: 'Patient identity is verified before any data collection. The system integrates anti-impersonation mechanisms to ensure collected data corresponds to the right person.',
            tag: 'Anti-impersonation · Verified identity',
          },
        ],
      },
      posture: {
        label: 'Regulatory posture',
        title: 'What we are. What we are not yet.',
        intro:
          'Transparency about our current regulatory status is a principle, not a constraint. Here is an exact statement of our situation.',
        activeItems: [
          'Outside Medical Device classification, organizational and declarative collection tool, without diagnosis or autonomous clinical decision',
          'Native GDPR compliance, documented legal basis, exercised individual rights',
          'HDS-certified hosting in France',
          'Pilot agreements framing each deployment',
          'Up-to-date privacy policy and legal notices',
        ],
        pendingItems: [
          'CE MDR trajectory analysis in progress, scope to be defined according to retained uses',
          'Engagement with specialized digital health regulatory firm in structuring process',
          'Security review clause available for institutional partners upon request',
          'ISO 27001 certification considered for large-scale institutional deployments',
        ],
        note: "we do not claim certifications we don't have. If your context requires a specific certification level, we will clearly indicate it, and if the trajectory is compatible, we will build it together.",
      },
      supervision: {
        label: 'Human supervision & governance',
        title: 'The clinician remains the decision-maker. Always.',
        intro:
          'Doctinum collects and structures declarative data. It does not diagnose, does not prescribe, and does not replace any medical decision. Here is how governance is architected.',
        items: [
          {
            title: 'No autonomous decision',
            text: 'The system makes no medical decision autonomously. It collects, structures, and alerts, the healthcare professional remains the sole decision-maker on clinical interpretation and action.',
          },
          {
            title: 'Integrated human escalation',
            text: 'Protocols provide systematic human escalation for situations exceeding the defined collection scope. The practitioner is notified in real-time on alerts defined by themselves.',
          },
          {
            title: 'Real-time practitioner access',
            text: 'The healthcare professional has access to all collected data, transcriptions, and call logs at any time. Nothing is opaque between the system and the supervising clinician.',
          },
          {
            title: 'Protocol configured by clinician',
            text: 'The knowledge base and follow-up questions are defined and validated by the healthcare professional responsible for the protocol. Doctinum executes, the clinician designs and supervises.',
          },
        ],
      },
      roadmap: {
        label: 'Trajectory',
        title: 'A regulatory framework that evolves with our uses.',
        intro:
          'We build the regulatory trajectory based on real deployments, not from an abstract list of certifications. Here is the current state.',
        items: [
          {
            status: 'active',
            title: 'HDS hosting & GDPR compliance',
            text: 'Operational infrastructure, HDS-certified hosting in France, documented GDPR compliance. Applicable today for all deployments.',
          },
          {
            status: 'active',
            title: 'Pilot agreement & contractual framework',
            text: 'Each deployment is framed by a pilot agreement defining usage scope, responsibilities, and data processing conditions. This contractual framework is available for review before any commitment.',
          },
          {
            status: 'engaged',
            title: 'CE MDR analysis & regulatory engagement',
            text: 'Medical Device trajectory analysis is in progress. Certification scope will depend on retained uses. A specialized digital health regulatory firm will be engaged soon to define the precise trajectory.',
          },
          {
            status: 'horizon',
            title: 'CE MDR certification & complementary certifications',
            text: 'CE MDR certification will be engaged according to retained usage scope. Complementary certifications (ISO 27001, etc.) will be considered based on institutional partner requirements. These certifications do not condition current deployments.',
          },
        ],
      },
    },
  },
  demoPage: {
    badge: 'Book a demo',
    title: 'Discover Doctinum in action',
    subtitle:
      'Schedule a personalized demonstration and discover how our solution can transform your patient follow-up.',
  },
  demoForm: {
    firstName: 'First name',
    lastName: 'Last name',
    email: 'Professional email',
    phone: 'Phone',
    organization: 'Organization',
    service: 'Interested pathway type',
    services: {
      surgery: 'Surgery & aesthetic medicine',
      sportsMedicine: 'Sports medicine',
      dermatology: 'Dermatology',
      proms: 'PROMS / Post-procedure questionnaires',
      chronic: 'Chronic pathways (diabetes, heart failure...)',
      oncology: 'Oncology / Post-treatment follow-up',
      rehabilitation: 'Rehabilitation / Physiotherapy',
      preventive: 'Preventive medicine / Screening',
      patientSoftware: 'Patient follow-up software',
      promsSoftware: 'PROMS software',
      clinicalStudies: 'Clinical studies (pharma)',
      croStudies: 'CRO studies',
      followUpPrograms: 'Patient follow-up programs',
      other: 'Other pathway',
    },
    structure: 'Structure type',
    structures: {
      solo: 'Individual practice',
      group: 'Medical group (2-10 practitioners)',
      clinic: 'Healthcare facility',
      network: 'Coordinated network / Multi-site',
      software: 'Software publisher / CRO',
      other: 'Other',
    },
    preferredDate: 'Preferred date',
    timeSlot: 'Preferred time slot',
    timeSlots: {
      morning: 'Morning (9am-12pm)',
      midday: 'Midday (12pm-2pm)',
      afternoon: 'Afternoon (2pm-6pm)',
      evening: 'Evening (6pm-8pm)',
    },
    duration: 'Desired duration',
    durations: {
      '30min': '30 minutes',
      '45min': '45 minutes',
      '60min': '1 hour',
      '90min': '1 hour 30',
    },
    message: 'Additional message',
    messagePlaceholder:
      'Describe your specific needs, use cases you wish to explore...',
    required: '* Required fields',
    submit: 'Book the demo',
  },
  contactForm: {
    titleLine1: "Let's discuss your",
    titleLine2: 'use case',
    subtitle:
      "Let's discuss your clinical context and evaluate together the relevance of a conversational AI assistant: voice, chat, interactive interface.",
    nameLabel: 'Name',
    namePlaceholder: 'Dr. Martin Dupont',
    roleLabel: 'Role',
    rolePlaceholder: 'Aesthetic surgeon',
    emailLabel: 'Professional email',
    emailPlaceholder: 'your@email.com',
    servicesLabel: 'Envisioned pathway type',
    services: {
      surgery: 'Surgery & aesthetic medicine',
      sportsMedicine: 'Sports medicine',
      dermatology: 'Dermatology',
      proms: 'PROMS / Post-procedure questionnaires',
      chronic: 'Chronic pathways (diabetes, heart failure...)',
      oncology: 'Oncology / Post-treatment follow-up',
      rehabilitation: 'Rehabilitation / Physiotherapy',
      preventive: 'Preventive medicine / Screening',
      patientSoftware: 'Patient follow-up software',
      promsSoftware: 'PROMS software',
      clinicalStudies: 'Clinical studies (pharma)',
      croStudies: 'CRO studies',
      followUpPrograms: 'Patient follow-up programs',
      other: 'Other pathway',
    },
    budgetLabel: 'Structure type',
    budgets: {
      solo: 'Individual practice',
      group: 'Medical group (2-10 practitioners)',
      clinic: 'Healthcare facility',
      network: 'Coordinated network / Multi-site',
      software: 'Software publisher / CRO',
      pharma: 'Pharmaceutical laboratory',
      researcher: 'Physician researcher / Academic',
      patientProgram: 'Patient follow-up program (company)',
      association: 'Patient association / Foundation',
      other: 'Other',
    },
    businessLabel: 'Context and objectives',
    businessPlaceholder:
      'Describe your current care pathway, patient follow-up challenges, and what you wish to improve...',
    submit: 'Schedule a confidential discussion',
  },
  notFound: {
    title: '404',
    message: "Whoops, that page doesn't exist",
    goHome: 'Go home',
  },
  mainNav: {
    solution: 'Solution',
    howItWorks: 'How it works',
    security: 'Security',
    vision: 'Vision',
    contact: 'Contact',
  },
  footer: {
    tagline: 'Your first patient contact, turned into reputation.',
    subtitle:
      'The AI front-desk and pre-consultation assistant for aesthetic surgery and medicine practices.',
    solutionsTitle: 'Solution',
    resourcesTitle: 'Resources',
    companyTitle: 'Company',
    legalTitle: 'Legal',
    aesthetics: 'Aesthetic surgery & medicine',
    contact: 'Contact',
    legalNotice: 'Legal notice',
    privacyPolicy: 'Privacy policy',
    cookies: 'Cookie management',
    soonTitle: 'Coming next',
    soonItems: [
      'Sports medicine',
      'Dermatology',
      'PROMS & post-procedure questionnaires',
      'Chronic pathways',
      'Prevention & workplace health',
      'Pharma & research',
    ],
    copyright: '© 2026 Doctinum',
    manageCookies: 'Manage cookie preferences',
  },
  cookies: {
    banner: {
      title: 'Cookie banner',
      description:
        'This site uses cookies to measure audience and improve your browsing experience.',
      choices: 'You can accept, refuse or customize the use of cookies.',
      accept: 'Accept',
      reject: 'Refuse',
      customize: 'Customize',
      learnMore: 'Learn more',
      policyLink: 'Cookie policy',
    },
    preferences: {
      title: 'Customize cookies',
      description:
        'Manage your cookie preferences. Necessary cookies are always active as they are essential for the site to function.',
      necessary: 'Necessary cookies',
      alwaysActive: 'Always active',
      necessaryDesc:
        'These cookies are essential for the proper functioning of the site and cannot be disabled.',
      analytics: 'Analytics cookies',
      analyticsDesc:
        'Analytics cookies allow us to understand site usage in order to improve content.',
      analyticsExample: 'E.g.: Google Analytics',
      acceptAll: 'Accept all',
      save: 'Save my preferences',
      cancel: 'Cancel',
      learnMore: 'Learn more',
      policyLink: 'Cookie policy',
    },
  },
};

export default en;
