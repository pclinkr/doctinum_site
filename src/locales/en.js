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
    soon: 'Soon',
    grouped: {
      sectionEntry: 'Open this section',
      goHome: 'Go back to home',
    },
    main: {
      title: 'Reach key sections quickly',
      body: 'Use a single mega menu to access solutions, resources, and enterprise pathways.',
    },
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
    hero: {
      ariaLabel: 'Hero',
      titlePrefix: 'Patient follow-up',
      titleMiddle: 'should not remain',
      titleAccent: 'silent',
      subtitle:
        'The voice AI infrastructure that applies your protocols, triggers structured follow-up, and surfaces actionable signals — under medical supervision.',
      cta: 'Evaluate a pilot project',
      cta2: 'Schedule a confidential discussion',
    },
    services: {
      titlePrefix: 'How we can help you',
      titleAccent: 'grow',
    },
    faq: {
      label: 'Questions',
      title: 'Frequently Asked Questions',
    },
    process: {
      titlePrefix: 'We like to keep things',
      titleAccent: 'simple',
      titleSuffix: 'and effective',
      cards: [
        {
          title: 'Strategy first',
          body: 'We audit your brand, audience, and competitors, then build a clear, precise, results-oriented strategy.',
        },
        {
          title: 'Create & manage',
          body: 'We create, schedule, and manage your content so you can stay focused on your business.',
        },
        {
          title: 'Analyze & optimize',
          body: 'Monthly reviews and clear reporting. We strengthen what works and eliminate the rest.',
        },
      ],
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
    homeCases: {
      label: 'Client results',
      titlePrefix: 'Work that speaks',
      titleAccent: 'for itself',
      viewAll: 'View all cases',
      case1: {
        tag: 'Results · Beauty',
        titlePrefix: 'Scaling a beauty brand with',
        titleAccent: 'Reels',
        body: 'We redesigned their content approach, from long tutorials to short Reels, paired with targeted paid ads on Meta.',
        kpi1: 'Reel Views',
        kpi2: 'Engagement',
      },
      case2: {
        tag: 'Results · Fashion',
        titlePrefix: 'Growing a fashion brand with',
        titleAccent: 'video',
        body: 'Shift from a static feed to video-first content showing the product in real use.',
        kpi1: 'Followers',
        kpi2: 'Engagement',
      },
    },
    whyChoose: {
      titlePrefix: 'Why choose Doctinum',
      titleMiddle: 'over',
      titleAccent: 'others',
      titleSuffix: '?',
      otherTitle: 'Other solutions',
      brandTitle: 'Our difference',
      otherItems: [
        'Binding long-term contracts',
        'Generic non-tailored content',
        'Slow production timelines',
        'Vague reporting without insights',
      ],
      brandItems: [
        'Flexible plans without commitment',
        'Brand-specific content strategy',
        '48-hour turnaround guarantee',
        'Clear KPIs tied to business objectives',
      ],
    },
    testimonial: {
      quotePrefix:
        'They completely took over managing our social media, and our audience has never been',
      quoteAccent: 'so engaged.',
      author: 'Elena Chen',
      role: 'Founder · Bloom Skincare',
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
        { id: 'oncology', label: 'Cancer' },
        { id: 'cardiac', label: 'Liver transplant' },
        { id: 'aesthetic', label: 'Cosmetic surgery' },
      ],
      controls: {
        slideToCall: 'Slide',
      },
      conversion: {
        title: 'Discover our platform',
        message: 'You have tested our live calls multiple times. It\'s time to discover the full power of our platform in a real demo.',
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
        disclaimer: 'Example of structured data that can be extracted from a conversation',
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
        oncology: {
          header: 'Structured call summary',
          title: 'Between-cycle follow-up (oncology)',
          metricsTitle: 'Captured indicators',
          metrics: [
            {
              label: 'Nausea',
              value: 'Present early in cycle, then decreased',
            },
            { label: 'Anti-emetic adherence', value: 'Yes' },
            { label: 'Appetite', value: 'Progressive recovery' },
            { label: 'Fever > 38°C', value: 'Not reported' },
          ],
          alert: {
            badge: 'Protocol threshold alert',
            title: 'Infectious threshold crossed',
            body: 'Fever > 38°C or chills: oncology alert threshold triggered.',
          },
        },
        cardiac: {
          header: 'Structured call summary',
          title: 'Post-op day 10 follow-up (cardiac surgery)',
          metricsTitle: 'Captured indicators',
          metrics: [
            {
              label: 'Medication adherence',
              value: 'Reported compliant',
            },
            { label: 'Warning signs', value: 'Not reported' },
            { label: 'Physical activity', value: 'Progressive restart' },
            { label: 'Lab work', value: 'Done, results pending' },
            { label: 'Hygiene instructions', value: 'Respected' },
          ],
          alert: {
            badge: 'Protocol threshold alert',
            title: 'Post-cardiac surgery threshold crossed',
            body: 'Chest pain, shortness of breath or palpitations: cardiac alert threshold triggered.',
          },
        },
        aesthetic: {
          header: 'Structured call summary',
          title: 'Post-procedure follow-up (cosmetic surgery)',
          metricsTitle: 'Captured indicators',
          metrics: [
            { label: 'Edema / bruising', value: 'Progressive decrease' },
            { label: 'Care protocol adherence', value: 'Compliant' },
            { label: 'Sleep position', value: 'Adapted position respected' },
            { label: 'Major bleeding', value: 'Not reported' },
          ],
          alert: {
            badge: 'Protocol threshold alert',
            title: 'Bleeding threshold crossed',
            body: 'Heavy bleeding or unusual pain: cosmetic surgery alert threshold triggered.',
          },
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
        oncology: [
          {
            role: 'agent',
            text: "Hello, I'm the oncology agent. I'll help you organize your information.",
            delayMs: 600,
          },
          {
            role: 'patient',
            text: 'I got my results yesterday and want to understand the next steps.',
            delayMs: 2300,
          },
          {
            role: 'agent',
            text: "Perfect. We'll review symptoms, ongoing treatments, and exams.",
            delayMs: 4100,
          },
          {
            role: 'patient',
            text: "Great, I'd also like to prepare my questions for the consultation.",
            delayMs: 6000,
          },
          {
            role: 'agent',
            text: "Excellent, I'll prepare a clear summary to share with your doctor.",
            delayMs: 8100,
          },
        ],
        cardiac: [
          {
            role: 'agent',
            text: "Hello, I'm the cardiac surgery follow-up agent. I'm calling about your post-operative care.",
            delayMs: 0,
          },
          {
            role: 'patient',
            text: 'Yes, hello. I\'m available.',
            delayMs: 1500,
          },
          {
            role: 'agent',
            text: 'We\'re at day 10 after your coronary bypass surgery. How are you feeling today?',
            delayMs: 3000,
          },
          {
            role: 'patient',
            text: 'I feel better, but I still get short of breath when climbing stairs.',
            delayMs: 5500,
          },
          {
            role: 'agent',
            text: 'Are you taking your medications properly? Beta-blockers and antiplatelet agents?',
            delayMs: 8500,
          },
          {
            role: 'patient',
            text: 'Yes, I follow the prescription exactly. No notable side effects.',
            delayMs: 11500,
          },
          {
            role: 'agent',
            text: 'Perfect. Do you have any chest pain, palpitations, or unusual shortness of breath?',
            delayMs: 14500,
          },
          {
            role: 'patient',
            text: 'No, none of that. Just some normal fatigue.',
            delayMs: 17500,
          },
          {
            role: 'agent',
            text: 'Very good. Are you following the rehabilitation guidelines and activity limits?',
            delayMs: 20500,
          },
        ],
        aesthetic: [
          {
            role: 'agent',
            text: "Hello, I'm the cosmetic surgery agent. What's your primary goal?",
            delayMs: 600,
          },
          {
            role: 'patient',
            text: 'I want to understand options and recovery time after surgery.',
            delayMs: 2300,
          },
          {
            role: 'agent',
            text: 'I can compare options, benefits, risks, and recovery time.',
            delayMs: 4200,
          },
          {
            role: 'patient',
            text: "Great, I'd like to schedule an initial consultation next.",
            delayMs: 6100,
          },
          {
            role: 'agent',
            text: "Perfect, I'll prepare a summary and available slots.",
            delayMs: 8100,
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
    structureSupervise: {
      title: 'Structure. Supervise. Differentiate.',
      items: [
        {
          title: 'Custom protocols',
          body: 'Personalized scenarios\nMilestone setup (D-7, D-1, D+1, D+7, D+30…)\nConfigured by procedure type.',
        },
        {
          title: 'Longitudinal follow-up',
          body: 'Historized feedback over time.\nTrend views',
        },
        {
          title: 'Medical supervision',
          body: 'No automated decision.\nClinic-defined vigilance thresholds\nFull traceability of feedback',
        },
      ],
    },
    imagineProtocol: {
      heading: 'Build your own follow-up protocol',
      left: {
        label: 'Before intervention',
        prepTitle: 'Structured preparation:',
        prepItems: [
          'Medical instruction check',
          'Logistics confirmation',
          'Concern collection',
          'Anxiety self-rating (0–10)',
          'Patient question handling',
          'Exchange documentation',
        ],
        benefitsTitle: 'Benefits:',
        benefitsItems: [
          'Fewer cancellations',
          'Better-documented consent',
          'Optimized preparation',
        ],
      },
      right: {
        brand: 'DOCTINUM',
        label: 'After intervention',
        monitorTitle: 'Methodical monitoring:',
        monitorLead: 'By procedure at defined checkpoints (D+1, D+7 ...)',
        monitorItems: [
          'Pain (0–10)',
          'Sensitive declarative signs',
          'Instruction adherence',
          'Edema evolution',
          'Progressive satisfaction',
        ],
        responsesTitle: 'Responses are:',
        responsesItems: ['Structured', 'Historized', 'Prioritized'],
      },
    },
    sportsStructure: {
      title: 'COORDINATING THE PATHWAY WITH MULTIPLE ACTORS',
      subtitle: 'The system does not replace doctors or physiotherapists.',
      items: [
        { title: 'A longitudinal structuring tool' },
        { title: 'An organizational support layer' },
        { title: 'A declarative-indicator objectivation system' },
        { title: 'A visibility point for the lead physician' },
      ],
      closing:
        'Rehabilitation remains central. The system structures information around it.',
    },
    sportsProtocol: {
      heading: 'Build your own follow-up protocol',
      leftTitle: 'OBJECTIFY RECOVERY OVER TIME',
      leftIntro: 'The protocol can include:',
      leftList: [
        'Pain (0-10)',
        'Perceived mobility',
        'Instability sensation',
        'Muscle fatigue',
        'Physiotherapy adherence',
        'Progressive return to activity',
      ],
      leftBottomIntro: 'These indicators are:',
      leftBottom: [
        'Historized',
        'Visualized longitudinally',
        'Prioritized with team-defined thresholds',
      ],
      rightTitle: 'DETECT DROPOFFS AND PREMATURE RETURNS',
      rightIntro: 'In practice, the system helps identify:',
      rightList: [
        'Sudden pain increase',
        'Reduced adherence to sessions',
        'Unplanned return to activity',
        'Perceived mobility deterioration',
      ],
      rightBottom:
        'The system makes no decisions. It structures and prioritizes information.',
      brand: 'DOCTINUM',
    },
    sportsCases: {
      case1: {
        title: 'COORDINATION WITH REHABILITATION',
        body: 'In a structured center:',
        listItems: [
          'The physician defines the protocol',
          'Indicators can be shared',
          'Recovery becomes objective',
          'Decisions remain human',
          'The system acts as a transversal layer improving pathway coherence.',
        ],
        brand: 'Rehab',
      },
      case2: {
        title: 'ADAPTED TO INTEGRATED CENTERS',
        listItems: [
          'Sports medicine centers',
          'Private orthopedic clinics',
          'Centers with in-house physiotherapy',
          'Performance institutes',
        ],
        brand: 'Centers',
        buttonLabel: 'Learn more',
      },
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
    dermatologyNarrative: {
      badge: 'Dermatology pathways',
      title: 'Treatment does not end with the prescription.',
      intro:
        'In dermatology, many pathways rely on long and evolving treatments:',
      firstList: [
        'Severe acne under isotretinoin',
        'Psoriasis under biologic therapy',
        'Chronic eczema',
        'Post-laser or peel recovery',
      ],
      betweenIntro: 'Between two consultations, follow-up often depends on:',
      secondList: [
        'Patient reactivity',
        'Informal exchanges',
        'Unstructured self-evaluation',
        'Heterogeneous feedback',
      ],
      conclusion: 'Yet dermatology treatments require:',
      lastList: [
        'Rigorous adherence',
        'Side-effect monitoring',
        'Progressive efficacy evaluation',
        'Regular documentation',
      ],
    },
    dermatologyFragile: {
      title: 'Long treatments, fragile follow-up',
      items: {
        effects: {
          title: 'Side effects',
          body: 'Some treatments require regular follow-up of declarative side effects.',
        },
        adherence: {
          title: 'Variable adherence',
          body: 'Treatment adherence can fluctuate over time.',
        },
        subjective: {
          title: 'Subjective perception',
          body: 'Symptom evolution is often described without structure or temporal comparison.',
        },
      },
    },
    dermatologyTrajectory: {
      weeksChip: 'Weeks 1 → 12',
      severityChip: 'Severity (0-10)',
      drynessChip: 'Dryness',
      adherenceChip: 'Adherence',
      title: 'Turn isolated feedback into a structured trajectory.',
      intro: 'The system enables:',
      items: [
        'Weekly or monthly symptom collection',
        'Standardized declarative structuring',
        'Automatic historization',
        'Trend visualization',
        'Vigilance threshold definition',
      ],
      closing:
        'Responses are no longer isolated exchanges. They become a documented evolution.',
    },
    dermatologyConfigurations: {
      heading: 'Build your own follow-up protocol',
      intro: 'Examples of possible configurations',
      warning:
        'Illustrative scenarios. Protocols are defined by the medical team.',
      cards: [
        {
          title: 'Severe acne - Isotretinoin',
          items: [
            'Skin dryness (0-10)',
            'Irritation',
            'Mood self-report',
            'Treatment adherence',
            'Perceived evolution',
          ],
        },
        {
          title: 'Psoriasis with biologics',
          items: [
            'Plaque intensity',
            'Itching',
            'Associated fatigue',
            'Quality-of-life impact',
            'Treatment tolerance',
          ],
        },
        {
          title: 'Post-laser dermatology',
          items: [
            'Pain',
            'Redness',
            'Edema',
            'Abnormal crusting',
            'Satisfaction at D+7',
          ],
        },
      ],
    },
    dermatologyOrganization: {
      title: 'Adapt follow-up intensity to your practice.',
      systemIntro: 'The system enables:',
      systemList: [
        'Variable intensity by pathology',
        'Adaptable frequency',
        'Distinct protocols per indication',
        'Selective activation by patient',
      ],
      clinicIntro: 'Each clinic defines:',
      clinicList: ['Its milestones', 'Its thresholds', 'Its granularity level'],
      schema: {
        pathology: 'Pathology',
        protocol: 'Protocol',
        frequency: 'Frequency',
        milestones: 'Milestones',
        alerts: 'Alerts',
      },
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
    solutionsList: [
      { id: 'surgery-aesthetic', title: 'Surgery & aesthetic medicine' },
      { id: 'surgery-rhinoplasty', title: 'Rhinoplasty' },
      { id: 'surgery-liposuction', title: 'Liposuction' },
      {
        id: 'surgery-hyaluronic-injection',
        title: 'Hyaluronic acid injections',
      },
      { id: 'sports-medicine', title: 'Sports medicine' },
      {
        id: 'sports-integrated-centers',
        title: 'Integrated Sports Medicine Centers',
      },
      { id: 'dermatology', title: 'Dermatology' },
      { id: 'proms', title: 'PROMs' },
      { id: 'patient-support-programs', title: 'Patient support programs' },
      {
        id: 'prevention-workplace-health',
        title: 'Prevention & workplace health',
      },
      {
        id: 'coordinated-chronic-pathways',
        title: 'Coordinated chronic pathways',
      },
      { id: 'hv-transplantation', title: 'Transplantation' },
      { id: 'hv-oncology', title: 'Oncology' },
      { id: 'hv-chronic-cardiology', title: 'Chronic cardiology' },
      { id: 'hv-rare-diseases', title: 'Rare diseases' },
      { id: 'hv-mental-health', title: 'Mental health' },
    ],
    solutions: {
      surgery: {
        hero: {
          badge: 'Pre & post intervention follow-up',
          title: 'Surgery & aesthetic medicine',
        },
        testimonial:
          'In surgery and aesthetic medicine, perceived quality relies as much on follow-up as on the procedure itself.',
        challengeItems: [
          {
            label: 'Observation',
            title: 'Between preparation and recovery, follow-up can become:',
            listItems: [
              'Fragmented',
              'Reactive',
              'Dependent on manual calls',
              'Poorly traceable',
            ],
          },
          {
            label: 'Challenge',
            title: 'A premium positioning requires structured continuity.',
          },
        ],
        examples: {
          badge: 'Clinical situations',
          title: 'Follow-up configuration examples',
          description:
            'Each organization defines its own follow-up model. Here are a few illustrations',
          cards: [
            {
              title: 'Rhinoplasty',
              imageUrl: '/assets/images/rhinoplastie.png',
              overlayGradient: 'var(--gradient-accent-warm-overlay)',
              description:
                'Create a clear, reassuring, and traceable pre/post-operative follow-up.',
              page: 'surgery-rhinoplasty',
            },
            {
              title: 'Liposuction',
              imageUrl: '/assets/images/liposuccion.png',
              overlayGradient: 'var(--gradient-accent-warm-terra-overlay)',
              description:
                'Structure recovery milestones and prioritize meaningful reported signals.',
              page: 'surgery-liposuction',
            },
            {
              title: 'Injection',
              imageUrl: '/assets/images/injection.png',
              overlayGradient: 'var(--gradient-accent-cool-overlay)',
              description:
                'Ensure consistent support from preparation to delayed check-ins.',
              page: 'surgery-hyaluronic-injection',
            },
          ],
        },
      },
      sports: {
        hero: {
          badge: 'Coordination & recovery',
          title: 'Sports medicine',
          subtitle: 'Structure recovery and coordinate care stakeholders',
        },
        testimonial: 'Structure recovery and coordinate pathway stakeholders',
        challengeItems: [
          {
            label: 'Pathway',
            title: 'In sports medicine, the pathway is rarely linear.',
            description: 'The patient may be followed by:',
            listItems: [
              'A sports physician',
              'An orthopedic surgeon',
              'A physiotherapist',
              'Sometimes a performance coach',
            ],
          },
          {
            label: 'Challenge',
            title: 'The issue is not the absence of rehabilitation.',
            description: 'The issue is often:',
            listItems: [
              'Fragmented follow-up',
              'Lack of longitudinal visibility',
              'Premature return to activity',
              'Irregular adherence',
              'Between consultations, recovery remains weakly objectified.',
            ],
          },
        ],
      },
      dermatology: {
        hero: {
          badge: 'Longitudinal dermatological follow-up',
          title: 'Dermatology',
          subtitle: 'Structure dermatology treatments over time',
        },
        testimonial:
          'Structure dermatology treatments over time and objectify progression.',
        intro: {
          title: 'Structure dermatology treatments over time.',
          description:
            'A voice AI infrastructure that applies your follow-up protocols, contacts patients at defined intervals, and structures declarative feedback over time — under medical supervision.',
          primaryCta: 'Evaluate a pilot project',
          secondaryCta: 'Talk with our team',
        },
        statement: "Treatment doesn't stop at prescription.",
        challengeItems: [
          {
            label: 'Context',
            title:
              'In dermatology, many pathways rely on long and evolving treatments:',
            listItems: [
              'Severe acne under isotretinoin',
              'Psoriasis under biotherapy',
              'Chronic eczema',
              'Post-laser or peeling follow-up',
            ],
          },
          {
            label: 'Current follow-up',
            title: 'Between consultations, follow-up often relies on:',
            listItems: [
              'Patient reactivity',
              'Informal exchanges',
              'Unstructured self-assessment',
              'Heterogeneous feedback',
            ],
          },
          {
            label: 'Challenge',
            title: 'Yet, dermatological treatments require:',
            listItems: [
              'Rigorous adherence',
              'Side effects monitoring',
              'Progressive efficacy evaluation',
              'Regular documentation',
            ],
          },
        ],
        organizationTool: {
          title: 'An organizational tool, not a clinical substitute.',
          items: [
            {
              title: 'Consultation prioritization',
              body: 'Identification of situations requiring early appointment.',
            },
            {
              title: 'Structured documentation',
              body: 'Exportable history of declarative feedback.',
            },
            {
              title: 'Global vision',
              body: 'Facilitated longitudinal reading between consultations.',
            },
            {
              title: 'Constant supervision',
              body: 'No automated decisions. Alert criteria are defined by the practitioner.',
            },
          ],
        },
      },
      rhinoplasty: {
        hero: {
          badge: 'Illustrative scenario',
          title: 'Configured pathway example — Rhinoplasty',
        },
        statement:
          'A structured protocol before and after the procedure, ensuring safe post-operative recovery and delivering a premium patient experience.',
        challengeItems: [
          {
            label: 'Context',
            title: 'Rhinoplasty is:',
            listItems: [
              'An outpatient surgical procedure',
              'With frequent edema and bruising',
              'Risk of hematoma or bleeding',
              'High emotional burden for the patient',
            ],
          },
          {
            label: 'Challenge',
            title:
              'Follow-up often relies on manual calls or patient reactivity.',
          },
        ],
        protocolConfiguration: {
          badge: 'Possible configuration',
          title: 'Possible protocol configuration',
          disclaimer:
            'Illustrative scenario. Protocols are defined by the medical team.',
          phases: [
            {
              title: 'Pre-operative phase',
              milestones: [
                {
                  timing: 'D-7',
                  items: [
                    'Smoking cessation verification',
                    'Anticoagulant verification',
                    'Confirmation of post-op understanding',
                    'Anxiety level assessment (0–10)',
                  ],
                },
                {
                  timing: 'D-1',
                  items: [
                    'Time confirmation',
                    'Home return organization',
                    'Instruction reminder',
                  ],
                },
              ],
            },
            {
              title: 'Post-operative phase',
              milestones: [
                {
                  timing: 'D+1',
                  items: ['Pain (0–10)', 'Unusual bleeding?', 'Temperature'],
                },
                {
                  timing: 'D+7',
                  items: ['Edema intensity', 'Discharge', 'Overall feeling'],
                },
                {
                  timing: 'D+30',
                  items: [
                    'Result perception',
                    'Satisfaction (0–10)',
                    'Practice recommendation',
                  ],
                },
              ],
            },
          ],
        },
        premiumExperience: {
          title: 'Premium patient experience',
          description:
            'Structured support that strengthens trust and satisfaction.',
          patientPerception: {
            label: 'Patient perceives',
            items: [
              'Continuous support',
              'Reassuring presence',
              'Structured attention',
              'Personalized follow-up',
            ],
          },
          clinicBenefits: {
            label: 'This strengthens',
            items: ['Trust', 'Satisfaction', 'Practice reputation'],
          },
        },
        clinicalBenefits: {
          title: 'Solution and benefits',
          subtitle:
            'An infrastructure that structures follow-up and enhances your practice.',
          items: [
            {
              title: 'Structure and traceability',
              body: 'All interactions are documented, timestamped, and structured for complete visibility of the patient journey.',
            },
            {
              title: 'Prioritization of sensitive situations',
              body: 'Weak signals are detected according to your criteria and escalated to the medical team for action.',
            },
            {
              title: 'Reduction of unpredictable calls',
              body: 'Proactive follow-up reduces spontaneous calls and enables better organization of care team time.',
            },
            {
              title: 'Differentiating premium image',
              body: 'Structured support that strengthens quality perception and your practice reputation.',
            },
          ],
        },
      },
      liposuction: {
        hero: {
          badge: 'Illustrative scenario',
          title: 'Configured pathway example — Liposuction',
        },
        statement:
          'Intensive follow-up and extended vigilance to ensure safe recovery and optimize results.',
        challengeItems: [
          {
            label: 'Context',
            title: 'Liposuction involves:',
            listItems: [
              'Variable pain',
              'Hematoma risk',
              'Mobility monitoring',
              'Progressive recovery',
            ],
          },
          {
            label: 'Challenge',
            title: 'Structured and extended follow-up to support recovery.',
          },
        ],
        protocolConfiguration: {
          title: 'Possible protocol configuration',
          disclaimer:
            'Illustrative scenario. Protocols are defined by the medical team.',
          phases: [
            {
              title: 'Pre-operative phase',
              milestones: [
                {
                  timing: 'Pre-op',
                  items: [
                    'Home care assistance verification',
                    'Mobility instructions reminder',
                  ],
                },
              ],
            },
            {
              title: 'Post-operative phase',
              milestones: [
                {
                  timing: 'D+1 / D+3 / D+7',
                  items: [
                    'Pain',
                    'Excessive tension',
                    'Redness',
                    'Mobilization',
                  ],
                },
                {
                  timing: 'D+30',
                  items: [
                    'Satisfaction',
                    'Silhouette perception',
                    'Possible extended follow-up until D+60',
                  ],
                },
              ],
            },
          ],
        },
        clinicalBenefits: {
          title: 'Solution and benefits',
          subtitle:
            'An infrastructure that structures follow-up and enhances your practice.',
          items: [
            {
              title: 'Structure and traceability',
              body: 'All interactions are documented, timestamped, and structured for complete visibility of the patient journey.',
            },
            {
              title: 'Prioritization of sensitive situations',
              body: 'Weak signals are detected according to your criteria and escalated to the medical team for action.',
            },
            {
              title: 'Reduction of unpredictable calls',
              body: 'Proactive follow-up reduces spontaneous calls and enables better organization of care team time.',
            },
            {
              title: 'Differentiating premium image',
              body: 'Structured support that strengthens quality perception and your practice reputation.',
            },
          ],
        },
        premiumExperience: {
          title: 'Premium dimension',
          description:
            'Possibility to enrich patient experience with personalized elements.',
          label: 'Possibility to add',
          items: [
            'Personalized message from surgeon',
            'Recovery stages reminder',
            'Progressive satisfaction tracking',
          ],
        },
      },
      hyaluronicInjection: {
        hero: {
          badge: 'Illustrative scenario',
          title: 'Configured pathway example — Hyaluronic acid injection',
        },
        statement:
          'Light follow-up and experience enhancement to strengthen loyalty and premium image.',
        challengeItems: [
          {
            label: 'Context',
            title: 'Non-surgical procedure, but:',
            listItems: [
              'Possible edema',
              'Bruising',
              'High expectations',
              'Touch-up requests',
            ],
          },
          {
            label: 'Challenge',
            title: 'In aesthetic medicine, follow-up becomes an image tool.',
          },
        ],
        protocolConfiguration: {
          title: 'Possible protocol configuration',
          disclaimer:
            'Illustrative scenario. Protocols are defined by the medical team.',
          phases: [
            {
              title: 'Pre-injection phase',
              milestones: [
                {
                  timing: 'D-1',
                  items: [
                    'Contraindications reminder',
                    'Active infection absence verification',
                  ],
                },
              ],
            },
            {
              title: 'Post-injection phase',
              milestones: [
                {
                  timing: 'D+1',
                  items: ['Unusual edema?', 'Pain', 'Significant bruising?'],
                },
                {
                  timing: 'D+7',
                  items: ['Satisfaction', 'Touch-up request?'],
                },
              ],
            },
          ],
        },
        clinicalBenefits: {
          title: 'Solution and benefits',
          subtitle:
            'An infrastructure that structures follow-up and enhances your practice.',
          items: [
            {
              title: 'Structure and traceability',
              body: 'All interactions are documented, timestamped, and structured for complete visibility of the patient journey.',
            },
            {
              title: 'Prioritization of sensitive situations',
              body: 'Weak signals are detected according to your criteria and escalated to the medical team for action.',
            },
            {
              title: 'Reduction of unpredictable calls',
              body: 'Proactive follow-up reduces spontaneous calls and enables better organization of care team time.',
            },
            {
              title: 'Differentiating premium image',
              body: 'Structured support that strengthens quality perception and your practice reputation.',
            },
          ],
        },
        premiumExperience: {
          title: 'Very strong premium dimension here',
          description: 'Follow-up becomes a differentiation and loyalty lever.',
          label: 'Impact',
          items: [
            'Follow-up perceived as high-end',
            'Increased return rate',
            'Better loyalty',
            'Marketing differentiation',
          ],
        },
      },
      integratedCenters: {
        hero: {
          badge: 'Multidisciplinary centers',
          title: 'Integrated Sports Medicine Centers',
        },
        statement:
          'A cross-functional infrastructure for multidisciplinary centers',
        centerChallenge: {
          label: 'In integrated centers bringing together',
          title: '',
          actors: [
            'Physicians',
            'Surgeons',
            'Physiotherapists',
            'Physical trainers',
          ],
          challenge: 'The challenge is coherence.',
        },
        deviceCapabilities: {
          title: 'The system enables',
          items: [
            'Shared visibility of declarative indicators',
            'Common pathway structuring',
            'Milestone harmonization',
            'Centralized prioritization of sensitive signals',
          ],
        },
        centerBenefits: {
          title: 'Benefits for the center',
          items: [
            'Improved coordination',
            'Recovery objectification',
            'Innovative and structured image',
            'Market differentiation',
            'Organizational optimization',
          ],
        },
        useCases: {
          title: 'Typical use cases',
          cases: [
            'ACL reconstruction',
            'Rotator cuff repair',
            'Chronic tendinopathy',
            'Progressive return to sport',
          ],
        },
        deploymentPathway: {
          title: 'Possible deployment',
          steps: [
            {
              title: 'Center-specific configuration',
              description:
                'Configuration adapted to center protocols and stakeholders',
            },
            {
              title: 'Multi-stakeholder setup',
              description:
                'Definition of roles and visibility for each participant',
            },
            {
              title: 'Progressive integration',
              description: 'Step-by-step deployment with continuous support',
            },
            {
              title: 'Supervised pilot phase',
              description: 'Testing on pilot cases with iterative adjustments',
            },
          ],
        },
      },
      proms: {
        hero: {
          badge: 'PROMS & Questionnaires',
          title: 'PROMS & Post-procedure questionnaires',
        },
        intro: {
          title:
            'Transform your questionnaires into structured and longitudinal voice follow-up.',
          description:
            'Apply your existing PROMS via a specialized voice AI infrastructure, increase completion rates and structure data over time — under medical supervision.',
          primaryCta: 'Evaluate a pilot project',
          secondaryCta: 'Transform an existing questionnaire',
        },
        statement: 'PROMS are essential. Their implementation remains fragile.',
        challengeItems: [
          {
            label: 'Heterogeneous completion rates',
            title:
              'Post-procedure questionnaires are often partially completed or ignored.',
          },
          {
            label: 'Digital dependency',
            title:
              'Patient portals and applications require availability and digital proficiency.',
          },
          {
            label: 'Isolated data',
            title:
              'Responses are collected punctually, without longitudinal structuring.',
          },
          {
            label: 'Organizational burden',
            title: 'Teams manually follow up or abandon tracking.',
          },
        ],
        approach: {
          title: 'Apply your questionnaires differently.',
          description: 'The system enables:',
          items: [
            'Import your existing PROMS',
            'Transform them into structured voice protocol',
            'Automatically schedule milestones (D+7, D+30…)',
            'Structure responses over time',
            'Prioritize according to thresholds defined by your team',
          ],
          disclaimer:
            'No modification of clinical content. No autonomous decision-making algorithm.',
        },
        beforeAfter: {
          heading: 'From punctual questionnaire to longitudinal follow-up.',
          left: {
            label: 'Classic approach',
            items: [
              'Email sending',
              'Isolated form',
              'Punctual data',
              'Manual follow-up',
              'Late human prioritization',
            ],
          },
          right: {
            label: 'Structured approach',
            items: [
              'Scheduled call',
              'Structured dialogue',
              'Longitudinal history',
              'Automatic scheduling',
              'Parameterized thresholds',
            ],
          },
        },
        conversion: {
          title: 'How does PROMS conversion work?',
          steps: [
            {
              title: 'Import',
              description: 'Import your PROMS in PDF / Excel / JSON.',
            },
            {
              title: 'Intelligent transformation',
              items: [
                'Conditional question logic',
                'Question order',
                'Alert thresholds',
                'Conversational adaptation',
              ],
            },
            {
              title: 'Scheduling',
              description: 'Definition of temporal milestones.',
            },
            {
              title: 'Restitution',
              items: ['Response visualization', 'Follow-up graph', 'Export'],
            },
          ],
        },
        useCases: {
          title: 'Concrete use cases',
          cases: [
            {
              title: 'Ambulatory surgery',
              description: 'Pain + satisfaction PROMS.',
            },
            {
              title: 'Orthopedics',
              description: 'Mobility + functional recovery.',
            },
            {
              title: 'Oncology',
              description: 'Inter-cycle symptoms.',
            },
            {
              title: 'Dermatology',
              description: 'Long treatment side effects.',
            },
          ],
        },
        benefits: {
          title: 'Organizational benefits',
          items: [
            {
              title: 'Improved completion',
              body: 'Universal voice channel.',
            },
            {
              title: 'Exploitable longitudinal data',
              body: 'Patient evolution vision over time.',
            },
            {
              title: 'Seamless integration',
              body: 'Compatible with your existing tools.',
            },
          ],
        },
        hospitals: {
          title: 'Structure quality indicators.',
          items: [
            'Better traceability',
            'Exportable documentation',
            'Complete historization',
            'Coherent pathway vision',
          ],
        },
        editors: {
          title: 'Integrate a voice module into your digital PROMS.',
          items: [
            'Simple API',
            'Structured webhooks',
            'Automated conversion',
            'Usage-based billing',
          ],
          cta: 'View API documentation',
        },
      },
      patientSupport: {
        hero: {
          title: 'Patient Support Programs',
          subtitle:
            'A hybrid system that frees up time for your support teams by automating routine calls, while keeping critical decisions and empathy under human control.',
          cta1: 'Evaluate a pilot project',
          cta2: 'Explore an integration',
        },
        challenge: {
          title:
            'Patient support relies on continuity that is difficult to maintain.',
          items: [
            {
              title: 'In many support programs:',
              listItems: [
                'patients are followed for several weeks or months',
                'teams must maintain regular contact',
                'indicators are collected at defined intervals',
              ],
            },
            {
              title: 'But in practice:',
              listItems: [
                'manual follow-ups are time-consuming',
                'engagement decreases over time',
                'data is heterogeneous',
                'interactions are poorly structured',
              ],
            },
            {
              title: 'Impact on teams:',
              listItems: [
                'considerable time spent on repetitive routine calls',
                'less availability for complex cases requiring expertise and empathy',
                'difficulty prioritizing patients who truly need attention',
              ],
            },
          ],
        },
        protocol: {
          title: 'Apply your support protocols at scale.',
          subtitle:
            'The system enables structured follow-up by applying protocols defined by your program. Each program can define:',
          items: [
            {
              title: 'call frequency',
              description: 'Rhythm adapted to protocol',
            },
            {
              title: 'declarative indicators to track',
              description: 'Structured data',
            },
            {
              title: 'alert thresholds',
              description: 'Vigilance criteria',
            },
            {
              title: 'program duration',
              description: 'Defined follow-up period',
            },
          ],
          footer:
            'The system automatically applies this protocol to routine calls, freeing your teams to focus on patients requiring special attention.',
        },
        engagement: {
          sectionTitle: 'Maintain engagement over time',
          title: 'The voice channel: a simple and universal link',
          description:
            'Digital tools (apps, portals, web questionnaires) assume availability, motivation, and digital familiarity. The phone remains accessible to all patient profiles.',
          items: [
            'No app to install',
            'Simple and natural interaction',
            'Accessible regardless of digital literacy',
          ],
          description2: 'For your teams:',
          items2: [
            'Time saved on routine calls',
            'Focus on cases requiring empathy and expertise',
            'Supervision of priority alerts only',
          ],
        },
        structuredReturns: {
          title:
            'Transform exchanges into exploitable longitudinal data.',
          description: 'Each interaction collects:',
          items: [
            'declarative symptoms',
            'treatment perception',
            'protocol adherence',
            'declarative side effects',
            'quality of life indicators',
          ],
          description2: 'Responses are:',
          items2: ['structured', 'historized', 'analyzable over time'],
        },
        useCases: {
          title: 'Typical use cases',
          cards: [
            {
              title: 'Therapeutic adherence programs',
              description:
                'Treatment adherence monitoring in chronic pathologies.',
              gradient: 'var(--gradient-accent-warm)',
            },
            {
              title: 'Post-hospitalization support',
              description: 'Follow-up after home return.',
              gradient: 'var(--gradient-accent-cool)',
            },
            {
              title: 'Therapeutic education',
              description: 'Indicator tracking between sessions.',
              gradient: 'var(--gradient-accent-warm-terra)',
            },
            {
              title: 'Pharma support programs',
              description:
                'Maintaining patient connection in PSP programs.',
              gradient: 'var(--gradient-accent-cool-overlay)',
            },
          ],
        },
        teams: {
          sectionTitle: 'For support teams',
          title: 'A hybrid human-AI system',
          description:
            'AI handles standardized routine calls. Teams remain essential for empathy, critical decisions, and complex situations.',
          items: [
            'Automated routine calls (D+7, D+14, D+30...)',
            'Indicator collection and structuring',
            'Alert signal detection according to your criteria',
          ],
          description2: 'Teams focus on:',
          items2: [
            'Patients triggering alerts',
            'Situations requiring empathy and expertise',
            'Medical decisions and protocol adjustments',
          ],
          footer:
            'AI automates repetitive tasks, humans keep control over what matters.',
        },
        platforms: {
          sectionTitle: 'For platforms and operators',
          title: 'Infrastructure integrable into your systems',
          description:
            'Standalone solution, integrable module, or complementary channel to existing applications.',
          items: [
            'Secure API and structured data export',
            'Dashboard integration and protocol planning',
            'Configurable human supervision',
          ],
        },
      },
      prevention: {
        hero: {
          title:
            'Multiply engagement in your prevention programs by 5',
          subtitle:
            'Transform your workplace health initiatives into structured programs with automated voice follow-up achieving over 75% engagement rate. Collect reliable longitudinal data without overloading your teams.',
          cta1: 'Request a demo',
          cta2: 'Discuss your context',
        },
        metrics: [
          {
            value: '75%',
            label: 'Participation rate',
            description: 'instead of 15% for classic apps',
          },
          {
            value: '5x',
            label: 'More engagement',
            description: 'Maintained over time',
          },
          {
            value: '-40%',
            label: 'MSDs sick leave',
            description: 'After 6 months of follow-up',
          },
        ],
        fieldObservation: {
          title:
            'Prevention programs fail due to lack of engagement',
          intro:
            'You invest in prevention programs, but results don\'t follow. 85% of employees abandon health apps after 3 weeks. Manual follow-up is time-consuming and irregular.',
          blocks: [
            {
              title: '15% average engagement rate',
              description:
                'Prevention apps lose 85% of users after 3 weeks. Impossible to collect reliable longitudinal data.',
            },
            {
              title: 'Fragmented and unusable data',
              description:
                'Punctual questionnaires don\'t allow tracking evolution over time. Impossible to identify trends or adapt programs.',
            },
            {
              title: 'Significant administrative burden',
              description:
                'HR and OSH teams spend hours following up with participants and manually compiling data. Program ROI becomes negative.',
            },
            {
              title: 'Exclusion of vulnerable populations',
              description:
                'Employees uncomfortable with digital or without smartphones are excluded from programs. You lose 30% of your target.',
            },
          ],
          footer:
            'Without regular engagement and structured data, your prevention programs generate no measurable impact.',
        },
        approach: {
          title: 'Automated follow-up generating 75% participation',
          intro:
            'The phone is universal, familiar, and requires no installation. Scheduled voice calls enable regular follow-up without effort for your teams.',
          steps: [
            {
              title: 'Program co-construction (1 week)',
              description:
                'We define together follow-up indicators, call frequency, and alert criteria according to your business objectives.',
            },
            {
              title: 'Participant enrollment (2 days)',
              description:
                'Clear information about the system, informed consent, and registration with just a phone number. No app to download.',
            },
            {
              title: 'Automated voice calls',
              description:
                'Regular calls (weekly, bi-monthly...) collect defined indicators. Average duration: 3-5 minutes. Response rate: 75%.',
            },
            {
              title: 'Real-time structuring and analysis',
              description:
                'Responses are automatically transcribed, structured, and analyzed according to your criteria. Automatic alerts if thresholds exceeded.',
            },
            {
              title: 'Dashboards and exports',
              description:
                'Real-time access to aggregated and individual data. CSV exports for your analyses. Automatic monthly reports.',
            },
          ],
        },
        whyVoice: {
          title: 'Why voice generates 5x more engagement than apps',
          blocks: [
            {
              title: '100% accessibility',
              description:
                'All your employees have a phone. No smartphone required, no installation, no forgotten password.',
            },
            {
              title: 'Zero friction',
              description:
                'The employee receives a call, picks up, and answers. 3 minutes flat. No login, no navigation, no abandonment.',
            },
            {
              title: 'Natural and rich expression',
              description:
                'Voice allows nuancing responses and expressing feelings that a multiple-choice questionnaire cannot capture.',
            },
            {
              title: 'Integrated automatic reminders',
              description:
                'The scheduled call acts as a reminder. No need to manually follow up. Response rate maintained over time.',
            },
          ],
          footer:
            'Result: 75% participation rate vs 15% for classic prevention apps.',
        },
        useCases: {
          title: 'Use cases with expected results',
          cards: [
            {
              title: 'MSD prevention (industry, logistics)',
              description:
                'Weekly collection of pain and discomfort. Early identification of at-risk situations. 40% reduction in MSD-related sick leave after 6 months.',
            },
            {
              title: 'Stress management programs (tertiary)',
              description:
                'Bi-monthly self-assessment of stress, fatigue, and mental workload. Automatic alerts if deterioration. Participation rate: 78% over 12 months.',
            },
            {
              title: 'Physical activity programs (all sectors)',
              description:
                'Declarative tracking of activity, motivation, and obstacles. Personalized voice coaching. Engagement maintained 3x higher than apps.',
            },
            {
              title: 'Return to work post-leave (HR/OSH)',
              description:
                'Progressive return support. Early detection of difficulties. 30% reduction in relapses and prolonged leaves.',
            },
            {
              title: 'Global wellness programs (QWL)',
              description:
                'Perceived health, sleep, nutrition indicators. Longitudinal vision of QWL action impact. Measurable program ROI.',
            },
          ],
        },
        beyondAgent: {
          title:
            'Exploitable data that proves your program impact',
          description:
            'Unlike punctual questionnaires, regular voice follow-up generates structured longitudinal data. You can finally:',
          items: [
            'measure real indicator evolution over time (before/after)',
            'identify at-risk populations and trends by department/site',
            'prove your prevention program ROI with quantified data',
            'adapt your actions in real-time based on field feedback',
            'produce automatic reports for management and employee representatives',
          ],
        },
        organizations: {
          title: 'Who deploys these voice follow-up programs',
          cards: [
            {
              title: 'Companies (HR, QWL, HSE)',
              description:
                'MSD, stress, wellness prevention programs. Post-leave follow-up. QWL action impact measurement. Employee representative and management reporting.',
            },
            {
              title: 'Occupational health services (OHS)',
              description:
                'Exposed employee cohort follow-up. Longitudinal studies. Early risk detection. Medical visit optimization.',
            },
            {
              title: 'Insurers and mutuals',
              description:
                'Prevention programs for insured. Claims reduction. Health pathway engagement. Competitive differentiation.',
            },
            {
              title: 'Health and wellness providers',
              description:
                'Offer enrichment with voice follow-up. Competitive differentiation. Impact data for your clients. Scalability without hiring.',
            },
          ],
        },
        regulatory: {
          title: 'Compliance and data security',
          description:
            'An organizational tool compliant with GDPR and occupational health requirements',
          certifications: [
            {
              badge: 'HDS',
              label: 'Certified host',
            },
            {
              badge: 'GDPR',
              label: 'Compliant',
            },
            {
              badge: 'HIPAA',
              label: 'Compliant',
            },
          ],
          items: [
            'HDS-certified health data hosting (Health Data Host)',
            'GDPR compliance: informed consent, right of access, rectification, and erasure',
            'Labor Code compliance: aggregated data anonymization, confidentiality',
            'Organizational tool (not medical device): declarative information collection',
            'No medical diagnosis: data are prevention indicators',
            'Complementary to health professionals: does not replace medical follow-up',
          ],
        },
        pilot: {
          title: '3-month pilot to measure impact on your population',
          description:
            'We deploy a pilot on a sample of employees (50-200 people) to measure engagement, data quality, and ROI before large-scale deployment.',
          steps: [
            'Program and indicator co-construction (1 week)',
            'Technical setup and participant enrollment (1 week)',
            'Experimentation phase with regular voice follow-up (3 months)',
            'Results analysis and deployment recommendations (1 week)',
          ],
          objectives: 'Measured objectives:',
          objectiveItems: [
            'Participation and engagement rate over time',
            'Quality and usability of collected data',
            'Participant and HR/OSH team satisfaction',
            'Estimated ROI of large-scale deployment',
          ],
        },
        finalCta: {
          title: 'Deploy a 3-month pilot in your organization',
          subtitle:
            'Let\'s discuss your context and prevention challenges for 30 minutes. We\'ll propose an adapted pilot with measurable objectives and projected ROI.',
          primaryCta: 'Schedule a confidential discussion',
          secondaryCta: 'Receive documentation',
        },
      },
    },
    editorsApi: {
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
        title:
          'Patient follow-up platforms all encounter the same limitation',
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
            description:
              'Teams must manually follow up with patients.',
          },
          {
            title: 'Fragmented interactions',
            description: 'Information comes through different channels.',
          },
          {
            title: 'Variable digital engagement',
            description:
              'Some patients use apps or portals infrequently.',
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
        subtitle:
          'Let\'s discuss integration possibilities with your solution.',
        primaryCta: 'Request sandbox access',
        secondaryCta: 'Schedule a technical discussion',
      },
    },
    vision: {
      hero: {
        eyebrow: 'Clinical voice infrastructure',
        title: 'The missing channel for patient follow-up.',
        subtitle:
          'Between consultations, patients live. Their symptoms evolve, their questions accumulate. This critical data remains invisible — not from lack of will, but because the available channel was wrong.',
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
            text: 'Opening an app, navigating, checking — the cognitive load is incompatible with post-chemo or post-operative state.',
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
        label: 'Our thesis',
        title:
          'Voice solves the channel. But making it clinically reliable is an engineering problem.',
        body: 'Integrating a voice assistant is trivial. Building a voice infrastructure that withstands real clinical constraints — identity, protocol, structured data, longitudinal continuity — is a specialized engineering problem. This is the barrier we have crossed.',
        pillars: [
          {
            title: 'Identity & consent',
            text: 'Patient verification before collection, anti-impersonation, native GDPR traceability.',
          },
          {
            title: 'Call orchestration',
            text: 'No-answers, voicemails, third parties online, human escalation — complete auditable log.',
          },
          {
            title: 'Protocol fidelity',
            text: 'Maintaining clinical logic under conversational deviation, knowledge base configured by clinician.',
          },
          {
            title: 'Structured data',
            text: 'Clean clinical extraction, threshold alerts, HL7 FHIR export — not transcription.',
          },
        ],
      },
      founders: {
        label: 'At the origin',
        title: 'Two trajectories, one conviction',
        intro:
          'Doctinum was born from the convergence of field frustration and technical expertise. Not from a hypothesis — from a lived observation.',
        founders: [
          {
            role: 'CEO & Co-founder',
            name: 'Michael Ramassamy',
            story: [
              'Entrepreneur in digital health, Michael worked on facility reputation and patient experience. There, he observed a recurring paradox: <strong>questionnaires didn\'t come back, data was missing — not from indifference, but because the channel imposed too much effort.</strong>',
              'The experience became personal. Facing his father\'s health problems — uncomfortable with digital — he measured the reality of the void between consultations: no tool, no feedback, no structured follow-up possible.',
            ],
            insight:
              'This is not a motivation problem. It is a channel problem. And voice is the only channel that goes to the patient.',
          },
          {
            role: 'CTO & Co-founder',
            name: 'Régis Anclades',
            story: [
              'Engineer and technology entrepreneur, Régis designed and deployed several large-scale automated voice infrastructures — notably for customer support systems in production.',
              'This experience taught him what generic voice bots ignore: <strong>large-scale reliability is an architecture problem, not an interface one.</strong> Handling no-answers, third parties online, refusals, time windows, clean data — it\'s infrastructure, not LLM.',
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
            text: 'Voice is the only universal channel. It requires no account, no app, no digital mastery. It is the only channel that goes to the patient — not the reverse.',
          },
          {
            label: 'On the technical barrier',
            text: 'Clinically reliable voice is not a design problem. It is an engineering problem. The barrier is there — it is our advantage.',
          },
          {
            label: 'On positioning',
            text: 'We do not replace platforms. We are the voice layer they don\'t have — and building it in-house would cost them 12 months of R&D.',
          },
          {
            label: 'On timing',
            text: 'Multimodal voice LLMs have reached a maturity level and cost that finally make reliable clinical voice infrastructure possible. The window opens now.',
          },
        ],
      },
      roadmap: {
        label: 'Our ambition',
        title: 'Become the reference infrastructure for clinical voice follow-up',
        timeline: [
          {
            year: 'Today',
            title: 'Validation in real conditions',
            text: 'Functional infrastructure deployed with partner practitioners. Validation of four clinical engines on concrete use cases: post-operative follow-up, medical aesthetics, clinical studies.',
            tags: ['Functional beta', 'Active clinical pilots'],
          },
          {
            year: 'Tomorrow',
            title: 'Infrastructure for platforms',
            text: 'Become the voice layer that patient follow-up publishers integrate via API — rather than rebuild. Native interoperability with industry standards.',
            tags: ['API-first', 'HL7 FHIR interoperability'],
          },
          {
            year: 'Vision',
            title: 'Standard for voice follow-up in healthcare',
            text: 'A certified clinical voice infrastructure, deployed at scale — from primary care to international clinical trials. Patient follow-up accessible to all, everywhere, without friction.',
            tags: ['Regulatory certification', 'International expansion'],
          },
        ],
      },
      cta: {
        title: 'A conversation, not a pitch.',
        subtitle:
          'If our reasoning interests you — or if you think it is wrong — we want to hear it. 60 minutes to verify our thesis together.',
        primaryCta: 'Request a demo',
        secondaryCta: 'View investor deck',
      },
    },
    security: {
      hero: {
        eyebrow: 'Security & Regulation',
        title: 'An infrastructure designed for healthcare environments.',
        subtitle:
          'Patient data protection, interaction traceability, and human supervision are not options in Doctinum — they are constitutive of the architecture.',
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
          'Here is what is in place, operational, and verifiable — without overselling certifications we don\'t yet have.',
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
          'Outside Medical Device classification — organizational and declarative collection tool, without diagnosis or autonomous clinical decision',
          'Native GDPR compliance — documented legal basis, exercised individual rights',
          'HDS-certified hosting in France',
          'Pilot agreements framing each deployment',
          'Up-to-date privacy policy and legal notices',
        ],
        pendingItems: [
          'CE MDR trajectory analysis in progress — scope to be defined according to retained uses',
          'Engagement with specialized digital health regulatory firm in structuring process',
          'Security review clause available for institutional partners upon request',
          'ISO 27001 certification considered for large-scale institutional deployments',
        ],
        note: 'we do not claim certifications we don\'t have. If your context requires a specific certification level, we will clearly indicate it — and if the trajectory is compatible, we will build it together.',
      },
      supervision: {
        label: 'Human supervision & governance',
        title: 'The clinician remains the decision-maker. Always.',
        intro:
          'Doctinum collects and structures declarative data. It does not diagnose, does not prescribe, and does not replace any medical decision. Here is how governance is architected.',
        items: [
          {
            title: 'No autonomous decision',
            text: 'The system makes no medical decision autonomously. It collects, structures, and alerts — the healthcare professional remains the sole decision-maker on clinical interpretation and action.',
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
            text: 'The knowledge base and follow-up questions are defined and validated by the healthcare professional responsible for the protocol. Doctinum executes — the clinician designs and supervises.',
          },
        ],
      },
      roadmap: {
        label: 'Trajectory',
        title: 'A regulatory framework that evolves with our uses.',
        intro:
          'We build the regulatory trajectory based on real deployments — not from an abstract list of certifications. Here is the current state.',
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
    subtitle: 'Schedule a personalized demonstration and discover how our solution can transform your patient follow-up.',
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
    messagePlaceholder: 'Describe your specific needs, use cases you wish to explore...',
    required: '* Required fields',
    submit: 'Book the demo',
  },
  contactForm: {
    badge: 'Pilot project evaluation',
    titleLine1: 'Let\'s discuss your',
    titleLine2: 'use case',
    subtitle:
      'Let\'s discuss your clinical context and evaluate together the relevance of a patient voice follow-up pilot project.',
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
  footer: {
    tagline: 'Giving voice to patient follow-up',
    subtitle: 'AI clinical voice infrastructure for patient follow-up.',
    solutionsTitle: 'Solutions',
    resourcesTitle: 'Resources',
    companyTitle: 'Company',
    contact: 'Contact',
    legalNotice: 'Legal notice',
    privacyPolicy: 'Privacy policy',
    cookies: 'Cookie management',
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
