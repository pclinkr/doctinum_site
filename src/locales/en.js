const en = {
  common: {
    close: 'Close',
    avatar: 'Avatar',
    authorInitials: 'AA'
  },
  language: {
    title: 'Language',
    currentFlag: '🇬🇧',
    options: [
      { code: 'en', label: 'English', flag: '🇬🇧' },
      { code: 'fr', label: 'Français', flag: '🇫🇷' }
    ]
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
    mobileMenu: 'Menu'
  },
  megaMenu: {
    soon: 'Soon',
    grouped: {
      sectionEntry: 'Open this section',
      goHome: 'Go back to home'
    },
    main: {
      title: 'Reach key sections quickly',
      body: 'Use a single mega menu to access solutions, resources, and enterprise pathways.'
    },
    solutions: {
      eyebrow: 'Solutions',
      title: 'Follow-up paths adapted to each clinical context',
      body: 'Structure care journeys by specialty, coordination needs, and vigilance level.',
      groups: [
        {
          title: 'Pre and post intervention follow-up',
          links: [
            { label: 'Surgery & aesthetic medicine', description: 'Guided pathways before and after procedures.', page: 'surgery-aesthetic' },
            { label: 'Sports medicine', description: 'Symptom monitoring and return-to-activity tracking.', page: 'sports-medicine' },
            { label: 'Dermatology', description: 'Regular follow-up for progression and tolerance.', page: 'dermatology' },
            { label: 'PROMS / post-procedure questionnaires', description: 'Structured collection of patient feedback.', page: 'blog-post' }
          ]
        },
        {
          title: 'Chronic follow-up & coordination',
          links: [
            { label: 'Patient support programs', description: 'Cadenced follow-up with clinical scripts.', page: 'contact' },
            { label: 'Prevention & workplace health', description: 'Population-level prevention and engagement.', page: 'about' },
            { label: 'Coordinated chronic pathways', description: 'Shared visibility across care teams.', page: 'case-studies' }
          ]
        },
        {
          title: 'Specialized high-vigilance pathways',
          links: [
            { label: 'Transplantation', description: 'Critical checkpoints and early warning signals.', page: 'blog' },
            { label: 'Oncology', description: 'Follow-up on side effects and red flags.', page: 'contact' },
            { label: 'Chronic cardiology', description: 'Longitudinal monitoring of key indicators.', page: 'privacy' },
            { label: 'Rare diseases', description: 'Coordination across complex care journeys.', page: 'case-studies' },
            { label: 'Mental health', description: 'Conversational follow-up with supervised escalation.', page: 'about' }
          ]
        }
      ],
      cta: { label: 'Discuss a pilot project', page: 'contact' }
    },
    functioning: {
      eyebrow: 'How it works',
      title: 'Understand implementation end to end',
      body: 'Explore the product demo, core features, and agent resources.',
      groups: [
        {
          title: 'Demo',
          links: [
            { label: 'Demo', description: 'See follow-up workflows in realistic conditions.', page: 'blog' }
          ]
        },
        {
          title: 'Product',
          links: [
            { label: 'Features', description: 'Core capabilities and configuration options.', page: 'about' }
          ]
        },
        {
          title: 'Resources',
          links: [
            { label: 'Model agents', description: 'Ready-to-adapt agent examples.', page: 'case-studies' },
            { label: 'PROMS agents', description: 'Templates for post-procedure questionnaires.', page: 'blog-post' }
          ]
        }
      ],
      cta: { label: 'Book a demo', page: 'contact' }
    },
    enterprise: {
      eyebrow: 'Enterprise',
      title: 'Build deployments for high-stakes environments',
      body: 'Work with us on product vision, experimentation, and strategic partnerships.',
      groups: [
        {
          title: 'Vision & team',
          links: [
            { label: 'Vision', description: 'Product direction and deployment principles.', page: 'about' },
            { label: 'Careers', description: 'Roles and product culture.', page: 'about' },
            { label: 'Blog', description: 'Articles and perspectives.', page: 'blog' },
            { label: 'Styleguide', description: 'Internal UI reference.', page: 'styleguide', devOnly: true }
          ]
        },
        {
          title: 'Partnerships',
          links: [
            { label: 'Experimentation & partnerships', description: 'Pilots, protocols, and collaborations.', page: 'case-studies' },
            { label: 'Investors', description: 'Strategic discussions and information.', page: 'case-studies' }
          ]
        }
      ],
      cta: { label: 'Contact us', page: 'contact' }
    }
  },
  site: {
    socialProofText: 'Supporting over 176+ healthcare professionals',
    ctaSubtitleFull: 'Book a free 30-minute strategic call and let\'s build a follow-up protocol tailored to your clinical context.',
    ctaSubtitleShort: 'Book a free 30-minute strategic call.',
    storyDurationMs: 3000
  },
  sections: {
    hero: {
      ariaLabel: 'Hero',
      titlePrefix: 'Patient follow-up',
      titleMiddle: 'should not remain',
      titleAccent: 'silent',
      subtitle: 'The voice AI infrastructure that applies your protocols, triggers structured follow-up, and surfaces actionable signals — under medical supervision.',
      cta: 'Evaluate a pilot project',
      cta2: 'Schedule a confidential discussion'
    },
    services: {
      titlePrefix: 'How we can help you',
      titleAccent: 'grow'
    },
    faq: {
      label: 'Questions',
      title: 'Frequently Asked Questions'
    },
    process: {
      titlePrefix: 'We like to keep things',
      titleAccent: 'simple',
      titleSuffix: 'and effective',
      cards: [
        {
          title: 'Strategy first',
          body: 'We audit your brand, audience, and competitors, then build a clear, precise, results-oriented strategy.'
        },
        {
          title: 'Create & manage',
          body: 'We create, schedule, and manage your content so you can stay focused on your business.'
        },
        {
          title: 'Analyze & optimize',
          body: 'Monthly reviews and clear reporting. We strengthen what works and eliminate the rest.'
        }
      ]
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
        'If you want to grow with intention, we can help.'
      ]
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
        kpi2: 'Engagement'
      },
      case2: {
        tag: 'Results · Fashion',
        titlePrefix: 'Growing a fashion brand with',
        titleAccent: 'video',
        body: 'Shift from a static feed to video-first content showing the product in real use.',
        kpi1: 'Followers',
        kpi2: 'Engagement'
      }
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
        'Vague reporting without insights'
      ],
      brandItems: [
        'Flexible plans without commitment',
        'Brand-specific content strategy',
        '48-hour turnaround guarantee',
        'Clear KPIs tied to business objectives'
      ]
    },
    testimonial: {
      quotePrefix: 'They completely took over managing our social media, and our audience has never been',
      quoteAccent: 'so engaged.',
      author: 'Elena Chen',
      role: 'Founder · Bloom Skincare'
    },
    finalCta: {
      label: 'Get started',
      titlePrefix: 'Your voice follow-up starts',
      titleAccent: 'here.'
    },
    medicalVoice: {
      headLabel: 'Live voice test',
      headTitlePrefix: 'Call an',
      headTitleAccent: 'AI medical agent',
      domains: [
        { id: 'orthopedie', label: 'Orthopedics (surgery)' },
        { id: 'cancer', label: 'Cancer' },
        { id: 'transplantation-hepatique', label: 'Liver transplant' },
        { id: 'chirurgie-esthetique', label: 'Cosmetic surgery' }
      ],
      controls: {
        slideToCall: 'Slide to call agent'
      },
      transcript: {
        agent: 'Agent',
        patient: 'Patient'
      },
      status: {
        ready: 'Ready',
        creating: 'Creating secure web call...',
        connectingRetell: 'Connecting to Retell...',
        liveRunning: 'Live call running',
        callFinished: 'Call finished',
        fallbackCompleted: 'Fallback demo completed',
        liveUnavailable: 'Live unavailable. Running fallback demo...'
      },
      fallbackTranscripts: {
        orthopedie: [
          { role: 'agent', text: "Hello, I'm the orthopedic agent. What are you feeling today?", delayMs: 600 },
          { role: 'patient', text: "I have pain in my right knee after running.", delayMs: 2100 },
          { role: 'agent', text: 'Thanks. How long have you had this pain?', delayMs: 3800 },
          { role: 'patient', text: "For about ten days, especially when going downstairs.", delayMs: 5600 },
          { role: 'agent', text: 'Great, I can provide an initial triage and schedule an appointment.', delayMs: 7600 }
        ],
        cancer: [
          { role: 'agent', text: "Hello, I'm the oncology agent. I'll help you organize your information.", delayMs: 600 },
          { role: 'patient', text: "I got my results yesterday and want to understand the next steps.", delayMs: 2300 },
          { role: 'agent', text: "Perfect. We'll review symptoms, ongoing treatments, and exams.", delayMs: 4100 },
          { role: 'patient', text: "Great, I'd also like to prepare my questions for the consultation.", delayMs: 6000 },
          { role: 'agent', text: "Excellent, I'll prepare a clear summary to share with your doctor.", delayMs: 8100 }
        ],
        'transplantation-hepatique': [
          { role: 'agent', text: "Hello, I'm the liver transplant agent. Let's review your situation together.", delayMs: 600 },
          { role: 'patient', text: 'I need to know which documents to prepare before evaluation.', delayMs: 2400 },
          { role: 'agent', text: "I'll guide you step by step: history, blood work, and imaging.", delayMs: 4300 },
          { role: 'patient', text: "Great, I'd also like to understand typical timelines.", delayMs: 6200 },
          { role: 'agent', text: "Perfect, I'll outline priorities and the recommended order.", delayMs: 8200 }
        ],
        'chirurgie-esthetique': [
          { role: 'agent', text: "Hello, I'm the cosmetic surgery agent. What's your primary goal?", delayMs: 600 },
          { role: 'patient', text: 'I want to understand options and recovery time after surgery.', delayMs: 2300 },
          { role: 'agent', text: 'I can compare options, benefits, risks, and recovery time.', delayMs: 4200 },
          { role: 'patient', text: "Great, I'd like to schedule an initial consultation next.", delayMs: 6100 },
          { role: 'agent', text: "Perfect, I'll prepare a summary and available slots.", delayMs: 8100 }
        ]
      }
    },
    problemCard: {
      badge: 'Field insight',
      titlePrefix: 'Follow-up still depends heavily on patient',
      titleAccent: 'responsiveness',
      titleSuffix: '',
      intro: 'In many ambulatory, chronic, and specialized care pathways, follow-up still relies on manual outreach and fragmented tools, often dependent on patient initiative or team availability.',
      problems: [
        {
          title: 'Low questionnaire completion',
          description: 'PROMS and ePROs are often under-completed, limiting continuous visibility into clinical evolution.'
        },
        {
          title: 'Clinical team time consumed',
          description: 'Care coordinators, CRAs, and medical teams spend a significant part of their time relaunching and documenting exchanges manually.'
        },
        {
          title: 'Unstructured feedback',
          description: 'Information comes through varied channels (spontaneous calls, emails, SMS), making consolidation and consistent traceability difficult.'
        },
        {
          title: 'Uneven digital engagement',
          description: 'Apps and patient portals require availability and digital confidence that are not always compatible with every care journey, especially for vulnerable patients.'
        }
      ],
      outroLine1: 'Some early warning signals stay silent.',
      outroLine2: 'And that is often where risk appears.'
    },
    homeOurSolution: {
      eyebrow: 'Our approach',
      title: 'Active follow-up, triggered by your teams.',
      statementLine1: 'You define the protocol.',
      statementLine2: 'Voice AI executes the follow-up.',
      statementBody: 'Each exchange is structured and returned as a concise report useful to the care team.',
      impactTitle: 'What this changes',
      impactItems: [
        'regular follow-up, not dependent on patients remembering to call',
        'homogeneous information, comparable over time',
        'escalation of at-risk situations based on your criteria'
      ],
      workflow: {
        eyebrow: 'Workflow',
        title: 'How it works',
        chip: 'Structured framework and clinical supervision',
        steps: [
          {
            title: 'Your protocols',
            body: 'You define questions, cadence, alert thresholds, and escalation rules.'
          },
          {
            title: 'Patient consent',
            body: 'The patient explicitly agrees to follow-up and the voice channel.'
          },
          {
            title: 'Structured voice calls',
            body: 'Scheduled, guided calls with a short, framed conversation.'
          },
          {
            title: 'Structuring and synthesis',
            body: 'Responses are organized and summarized into actionable information.'
          },
          {
            title: 'Supervised alerts',
            body: 'Alerts follow your criteria. The team remains the decision-maker.'
          }
        ]
      },
      visual: {
        alertTitle: 'Clinical signaling',
        alertBody: 'Alerts are prioritized by your thresholds and delivered to the team in a readable format.',
        chartTitle: 'Simplified visualization',
        chartLineLabel: 'Symptom trend (Day 1 to Day 7)',
        chartBarsLabel: 'Self-reported indicators',
        badges: {
          lowAlert: 'Low alert',
          stable: 'Stable',
          monitoring: 'Monitoring'
        }
      },
      reassurance: 'No autonomous medical decision. AI organizes, the team arbitrates.'
    },
    voiceChannel: {
      eyebrow: 'Voice channel',
      title: 'Why the voice channel works in healthcare',
      coreEyebrow: 'Real-world adoption',
      coreText: 'The voice channel fits naturally into patient routines without adding friction.',
      items: [
        {
          title: 'Universal',
          body: 'No app to download, no account to create, no friction.'
        },
        {
          title: 'Natural',
          body: 'Patients answer as they would speak with a care team.'
        },
        {
          title: 'Regular',
          body: 'A scheduled call creates rhythm and secures the care pathway.'
        },
        {
          title: 'Inclusive',
          body: 'Especially suited for fragile or low-digital-literacy patients.'
        }
      ],
      closing: 'A protocol is only effective if the channel is truly used.'
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
          contexts: ['Ambulatory care', 'Surgery', 'Dermatology', 'Aesthetic medicine', 'Sports medicine'],
          cta: 'View dedicated page'
        },
        {
          title: 'Chronic follow-up',
          body: 'Regular monitoring, adherence, quality of life, coordination.',
          contexts: ['Regular monitoring', 'Adherence', 'Quality of life', 'Coordination'],
          cta: 'View dedicated page'
        },
        {
          title: 'High-vigilance pathways',
          body: 'Oncology, transplantation, cardiology, mental health: close monitoring, weak-signal detection, controlled escalation.',
          contexts: ['Oncology', 'Transplantation', 'Cardiology', 'Mental health'],
          cta: 'View dedicated page'
        }
      ]
    },
    homeSecurityFrame: {
      eyebrow: 'Security & framework',
      title: 'Built for demanding medical environments.',
      subtitle: 'An operational foundation designed for pathway continuity, clinical supervision, and compliant usage.',
      tableHeaderLeft: 'Pillar',
      tableHeaderRight: 'What it ensures',
      rows: [
        {
          title: 'Data protection',
          body: 'Explicit consent and full logging.'
        },
        {
          title: 'Secure hosting',
          body: 'Infrastructure aligned with applicable healthcare requirements.'
        },
        {
          title: 'Traceability',
          body: 'Structured and exportable history.'
        },
        {
          title: 'Clear regulatory positioning',
          body: 'A supervised organizational tool, with no autonomous medical decision-making.'
        }
      ],
      cta: 'Learn more about security'
    },
    logosStrip: {
      title: 'Supported brands'
    },
    structureSupervise: {
      title: 'Structure. Supervise. Differentiate.',
      items: [
        {
          title: 'Custom protocols',
          body: 'Personalized scenarios\nMilestone setup (D-7, D-1, D+1, D+7, D+30…)\nConfigured by procedure type.'
        },
        {
          title: 'Longitudinal follow-up',
          body: 'Historized feedback over time.\nTrend views'
        },
        {
          title: 'Medical supervision',
          body: 'No automated decision.\nClinic-defined vigilance thresholds\nFull traceability of feedback'
        }
      ]
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
          'Exchange documentation'
        ],
        benefitsTitle: 'Benefits:',
        benefitsItems: ['Fewer cancellations', 'Better-documented consent', 'Optimized preparation']
      },
      right: {
        brand: 'DOCTINUM',
        label: 'After intervention',
        monitorTitle: 'Methodical monitoring:',
        monitorLead: 'By procedure at defined checkpoints (D+1, D+7 ...)',
        monitorItems: ['Pain (0–10)', 'Sensitive declarative signs', 'Instruction adherence', 'Edema evolution', 'Progressive satisfaction'],
        responsesTitle: 'Responses are:',
        responsesItems: ['Structured', 'Historized', 'Prioritized']
      }
    },
    sportsStructure: {
      title: 'A COORDINATION LAYER, NOT A REPLACEMENT',
      subtitle: 'The system does not replace doctors or physiotherapists.',
      items: [
        { title: 'A longitudinal structuring tool' },
        { title: 'An organizational support layer' },
        { title: 'A declarative-indicator objectivation system' },
        { title: 'A visibility point for the lead physician' }
      ],
      closing: 'Rehabilitation remains central. The system structures information around it.'
    },
    sportsProtocol: {
      heading: 'Build your own follow-up protocol',
      leftTitle: 'OBJECTIFY RECOVERY OVER TIME',
      leftIntro: 'The protocol can include:',
      leftList: ['Pain (0-10)', 'Perceived mobility', 'Instability sensation', 'Muscle fatigue', 'Physiotherapy adherence', 'Progressive return to activity'],
      leftBottomIntro: 'These indicators are:',
      leftBottom: ['Historized', 'Visualized longitudinally', 'Prioritized with team-defined thresholds'],
      rightTitle: 'DETECT DROPOFFS AND PREMATURE RETURNS',
      rightIntro: 'In practice, the system helps identify:',
      rightList: ['Sudden pain increase', 'Reduced adherence to sessions', 'Unplanned return to activity', 'Perceived mobility deterioration'],
      rightBottom: 'The system makes no decisions. It structures and prioritizes information.',
      brand: 'DOCTINUM'
    },
    sportsCases: {
      case1: {
        title: 'COORDINATION WITH REHABILITATION',
        body: 'In a structured center:',
        listItems: ['The physician defines the protocol', 'Indicators can be shared', 'Recovery becomes objective', 'Decisions remain human', 'The system acts as a transversal layer improving pathway coherence.'],
        brand: 'Rehab'
      },
      case2: {
        title: 'ADAPTED TO INTEGRATED CENTERS',
        listItems: ['Sports medicine centers', 'Private orthopedic clinics', 'Centers with in-house physiotherapy', 'Performance institutes'],
        brand: 'Centers'
      }
    },
    notCallbot: {
      title: 'A',
      titleAccent: 'clinical infrastructure',
      titleSuffix: ', not a simple voice agent.',
      items: [
        {
          title: 'Configurable and secure protocols',
          body: 'Follow-up relies on a protocol rigorously applied by your agents in a fluid conversation with the patient.'
        },
        {
          title: 'Longitudinal follow-up',
          body: 'Data is organized over time, not treated as isolated exchanges.'
        },
        {
          title: 'Constant medical supervision',
          body: 'No autonomous medical decision. Alerts are defined by the team.'
        }
      ]
    },
    slidingBanner: {
      items: [
        'No app to install',
        'Explicit consent',
        'Full traceability'
      ]
    },
    dermatologyNarrative: {
      badge: 'Dermatology pathways',
      title: 'Treatment does not end with the prescription.',
      intro: 'In dermatology, many pathways rely on long and evolving treatments:',
      firstList: ['Severe acne under isotretinoin', 'Psoriasis under biologic therapy', 'Chronic eczema', 'Post-laser or peel recovery'],
      betweenIntro: 'Between two consultations, follow-up often depends on:',
      secondList: ['Patient reactivity', 'Informal exchanges', 'Unstructured self-evaluation', 'Heterogeneous feedback'],
      conclusion: 'Yet dermatology treatments require:',
      lastList: ['Rigorous adherence', 'Side-effect monitoring', 'Progressive efficacy evaluation', 'Regular documentation']
    },
    dermatologyFragile: {
      title: 'Long treatments, fragile follow-up',
      items: {
        effects: {
          title: 'Side effects',
          body: 'Some treatments require regular follow-up of declarative side effects.'
        },
        adherence: {
          title: 'Variable adherence',
          body: 'Treatment adherence can fluctuate over time.'
        },
        subjective: {
          title: 'Subjective perception',
          body: 'Symptom evolution is often described without structure or temporal comparison.'
        }
      }
    },
    dermatologyTrajectory: {
      weeksChip: 'Weeks 1 → 12',
      severityChip: 'Severity (0-10)',
      drynessChip: 'Dryness',
      adherenceChip: 'Adherence',
      title: 'Turn isolated feedback into a structured trajectory.',
      intro: 'The system enables:',
      items: ['Weekly or monthly symptom collection', 'Standardized declarative structuring', 'Automatic historization', 'Trend visualization', 'Vigilance threshold definition'],
      closing: 'Responses are no longer isolated exchanges. They become a documented evolution.'
    },
    dermatologyConfigurations: {
      heading: 'Build your own follow-up protocol',
      intro: 'Examples of possible configurations',
      warning: 'Illustrative scenarios. Protocols are defined by the medical team.',
      cards: [
        {
          title: 'Severe acne - Isotretinoin',
          items: ['Skin dryness (0-10)', 'Irritation', 'Mood self-report', 'Treatment adherence', 'Perceived evolution']
        },
        {
          title: 'Psoriasis with biologics',
          items: ['Plaque intensity', 'Itching', 'Associated fatigue', 'Quality-of-life impact', 'Treatment tolerance']
        },
        {
          title: 'Post-laser dermatology',
          items: ['Pain', 'Redness', 'Edema', 'Abnormal crusting', 'Satisfaction at D+7']
        }
      ]
    },
    dermatologyOrganization: {
      title: 'Adapt follow-up intensity to your practice.',
      systemIntro: 'The system enables:',
      systemList: ['Variable intensity by pathology', 'Adaptable frequency', 'Distinct protocols per indication', 'Selective activation by patient'],
      clinicIntro: 'Each clinic defines:',
      clinicList: ['Its milestones', 'Its thresholds', 'Its granularity level'],
      schema: {
        pathology: 'Pathology',
        protocol: 'Protocol',
        frequency: 'Frequency',
        milestones: 'Milestones',
        alerts: 'Alerts'
      }
    }
  },
  content: {
    helpItems: [
      {
        title: 'Content creation',
        body: 'Visuals and messaging designed to stop the scroll, aligned with your brand and audience.',
        emoji: '🎬',
        gradient: 'linear-gradient(135deg,#1a1a2e,#16213e)',
        delayClass: 'd1'
      },
      {
        title: 'Social media management',
        body: 'Full multi-platform management: publishing, scheduling, and community.',
        emoji: '📱',
        gradient: 'linear-gradient(135deg,#0f3460,#533483)',
        delayClass: 'd2'
      },
      {
        title: 'Paid media',
        body: 'Data-driven campaigns that find your audience and turn attention into revenue.',
        emoji: '💰',
        gradient: 'linear-gradient(135deg,#f7971e,#ffd200)',
        delayClass: 'd3'
      }
    ],
    homeFaqItems: [
      { question: 'Is there a minimum commitment period?', answer: 'No. We work on a monthly basis. You can pause or cancel with 30 days\' notice.' },
      { question: 'Can you respect our brand guidelines?', answer: 'Yes. We work with your guidelines. If you don\'t have any, we can create them during onboarding.' },
      { question: 'Which platforms do you manage?', answer: 'Instagram, TikTok, LinkedIn, Facebook, Pinterest, and Threads. Most clients start with 2–3 platforms.' },
      { question: 'When do we see the first results?', answer: 'Organic growth becomes visible within 60–90 days. Paid can generate ROI within 2–4 weeks depending on budget.' }
    ],
    storyVideos: [
      '/assets/videos/doctinum_hero.mp4',
    ],
    aboutTeamMembers: [
      { name: 'Sofia Little', role: 'Creative lead', gradient: 'linear-gradient(160deg,#f0c5a8,#d4a090,#c08878)', delayClass: 'd1' },
      { name: 'James Cohen', role: 'Founder & CEO', gradient: 'linear-gradient(160deg,#c8d4e0,#a8b8d0,#90a8c0)', delayClass: 'd2' },
      { name: 'Maya Rodriguez', role: 'Growth specialist', gradient: 'linear-gradient(160deg,#d0c8e0,#b0a0c8,#9890b8)', delayClass: 'd3' }
    ],
    aboutAwards: [
      ['Social Media Agency of the Year', 'Awarded for creative campaigns and measurable results across multiple sectors.', '2024'],
      ['Best Content Strategy Campaign', 'Awarded for our innovative approach to high-viral-potential UGC content.', '2023'],
      ['Digital Marketing Innovation Award', 'Recognized for methods that improve engagement and conversion.', '2024'],
      ['Emerging Agency Excellence', 'Recognition among the fastest-growing social media agencies.', '2023']
    ],
    caseStudyCards: [
      { name: 'Glowhaus', category: 'Beauty', brand: 'Glowhaus', gradient: 'linear-gradient(135deg,#f5c5a8,#e8a090,#c87060)', delayClass: 'd1' },
      { name: 'Border', category: 'Technology', brand: '◆ Border', gradient: 'linear-gradient(135deg,#e0c8b0,#c8a890,#b08870)', delayClass: 'd2' },
      { name: 'Then', category: 'Fashion', brand: 'then', gradient: 'linear-gradient(135deg,#f0e0d0,#e0c8b8,#c8a898)', delayClass: 'd3', serif: true },
      { name: 'SnapShot', category: 'Photography', brand: '⚡ SnapShot', gradient: 'linear-gradient(135deg,#d8e0d0,#c0c8b8,#a8b0a0)', delayClass: 'd4' }
    ],
    blogCards: [
      ['Creating content that truly converts', 'Stop content that gets likes without sales. Here\'s what really works.', 'Oct 17, 2025', 'linear-gradient(160deg,#f0e8d8,#d8c8a8,#c0a878)', 'd1'],
      ['How we scaled a beauty brand to 100K', 'Complete breakdown of strategy, content, and growth tactics.', 'Sep 28, 2025', 'linear-gradient(160deg,#e8c8b8,#d4a898,#c09080)', 'd2'],
      ['KPIs to track beyond vanity metrics', 'Likes and followers don\'t pay the bills. Here\'s what to really measure.', 'Sep 10, 2025', 'linear-gradient(160deg,#e8e0d8,#c8c0b0,#a8a090)', 'd3'],
      ['Why your Reels aren\'t getting views', 'Common mistakes that kill your reach and simple adjustments to perform.', 'Aug 22, 2025', 'linear-gradient(160deg,#c0b8d0,#a098c0,#8880a8)', 'd4']
    ],
    contactFaqItems: [
      { question: 'When will we see results?', answer: 'Paid can show ROI within 2–4 weeks. Organic takes 60–90 days of consistent execution.' },
      { question: 'Which platforms do you manage?', answer: 'Instagram, TikTok, LinkedIn, Facebook, Pinterest, and Threads. We recommend starting with 2–3 platforms.' },
      { question: 'Do you work with our industry?', answer: 'We work with e-commerce, SaaS, DTC, service businesses, and personal brands.' },
      { question: 'What if we want to cancel?', answer: 'Cancel anytime with 30 days\' notice. No penalties, no lock-ins.' },
      { question: 'How involved do we need to be?', answer: 'As much or as little as you want. Generally a 30-minute monthly check-in is enough.' }
    ]
  },
  pages: {
    about: {
      badge: 'About',
      title: 'Who we are',
      description: 'We are strategists, creators, and growth experts convinced that social media must generate real business results.'
    },
    caseStudies: {
      badge: 'Case studies',
      title: 'Our best projects',
      description: 'Discover how we transform social media into a measurable growth engine.'
    },
    blog: {
      badge: 'Blog',
      title: 'Latest insights',
      description: 'Actionable strategies and trends to transform your social presence into business growth.'
    },
    solutions: {
      surgery: {
        hero: {
          badge: 'Pre & post intervention follow-up',
          title: 'Surgery & aesthetic medicine'
        },
        testimonial: 'In surgery and aesthetic medicine, perceived quality relies as much on follow-up as on the procedure itself.',
        challengeItems: [
          {
            label: 'Observation',
            title: 'Between preparation and recovery, follow-up can become:',
            listItems: ['Fragmented', 'Reactive', 'Dependent on manual calls', 'Poorly traceable']
          },
          {
            label: 'Challenge',
            title: 'A premium positioning requires structured continuity.'
          }
        ],
        examples: {
          badge: 'Clinical situations',
          title: 'Follow-up configuration examples',
          description: 'Each organization defines its own follow-up model. Here are a few illustrations',
          cards: [
            {
              title: 'Rhinoplasty',
              imageUrl: '/assets/images/rhinoplastie.png',
              overlayGradient: 'var(--gradient-accent-warm-overlay)',
              description: 'Create a clear, reassuring, and traceable pre/post-operative follow-up.'
            },
            {
              title: 'Liposuction',
              imageUrl: '/assets/images/liposuccion.png',
              overlayGradient: 'var(--gradient-accent-warm-terra-overlay)',
              description: 'Structure recovery milestones and prioritize meaningful reported signals.'
            },
            {
              title: 'Injection',
              imageUrl: '/assets/images/injection.png',
              overlayGradient: 'var(--gradient-accent-cool-overlay)',
              description: 'Ensure consistent support from preparation to delayed check-ins.'
            }
          ]
        }
      },
      sports: {
        hero: {
          badge: 'Coordination & recovery',
          title: 'Sports medicine',
          subtitle: 'Structure recovery and coordinate care stakeholders'
        },
        testimonial: 'Structure recovery and coordinate pathway stakeholders',
        challengeItems: [
          {
            label: 'Pathway',
            title: 'In sports medicine, the pathway is rarely linear.',
            description: 'The patient may be followed by:',
            listItems: ['A sports physician', 'An orthopedic surgeon', 'A physiotherapist', 'Sometimes a performance coach']
          },
          {
            label: 'Challenge',
            title: 'The issue is not the absence of rehabilitation.',
            description: 'The issue is often:',
            listItems: ['Fragmented follow-up', 'Lack of longitudinal visibility', 'Premature return to activity', 'Irregular adherence', 'Between consultations, recovery remains weakly objectified.']
          }
        ]
      },
      dermatology: {
        hero: {
          badge: 'Longitudinal dermatology follow-up',
          title: 'Dermatology',
          subtitle: 'Structure dermatological treatments over time'
        },
        testimonial: 'Structure dermatological treatments over time'
      }
    }
  },
  contactForm: {
    badge: 'Book a call',
    titleLine1: "Let's get",
    titleLine2: 'started',
    subtitle: "Ready to transform your social media? Get in touch and we'll show you what's possible for your brand.",
    nameLabel: 'Name',
    namePlaceholder: 'Your name',
    emailLabel: 'Email',
    emailPlaceholder: 'your@email.com',
    servicesLabel: 'What services are you interested in?',
    services: {
      contentCreation: 'Content Creation',
      socialManagement: 'Social Management',
      paidMedia: 'Paid Media',
      all: 'All'
    },
    budgetLabel: 'Current monthly social media budget?',
    budgets: {
      under2k: 'Under $2K',
      between2k5k: '$2K-$5K',
      between5k10k: '$5K-$10K',
      over10k: '$10K+'
    },
    businessLabel: 'Tell us about your business...',
    businessPlaceholder: 'What do you sell, who are your customers, what are your goals?',
    submit: 'Book a call ↗'
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
    copyright: '© 2025 Doctinum'
  }
};

export default en;
