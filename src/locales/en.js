const en = {
  common: {
    close: 'Close'
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
    cta: 'Book a demo',
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
            { label: 'Surgery & aesthetic medicine', description: 'Guided pathways before and after procedures.', page: 'case-studies' },
            { label: 'Sports medicine', description: 'Symptom monitoring and return-to-activity tracking.', page: 'about' },
            { label: 'Dermatology', description: 'Regular follow-up for progression and tolerance.', page: 'blog' },
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
    socialProofText: 'Grown over 176+ creators',
    ctaSubtitleFull: "Book a free 30 min strategy call and we'll show you how to turn followers into customers.",
    ctaSubtitleShort: 'Book a free 30 min strategy call.',
    storyDurationMs: 3000
  },
  sections: {
    hero: {
      ariaLabel: 'Hero',
      titlePrefix: 'Short form',
      titleMiddle: 'done',
      titleAccent: 'right',
      subtitle: 'We combine content, management, and paid media to help brands grow and convert on the social platforms that matter most to you.',
      cta: 'Get in touch'
    },
    services: {
      titlePrefix: 'How we can help you',
      titleAccent: 'grooow'
    },
    faq: {
      label: 'Questions',
      title: 'Frequently Asked Questions'
    },
    process: {
      titlePrefix: 'We like to keep things',
      titleAccent: 'nice',
      titleSuffix: 'and simple',
      cards: [
        {
          title: 'Strategy First',
          body: "We audit your brand, audience, and competition then build a strategy that's clear, specific, and built for results."
        },
        {
          title: 'Create & Manage',
          body: 'We create, schedule, and manage your content so you can focus on the business while we grow your presence.'
        },
        {
          title: 'Review & Refine',
          body: "Monthly reviews with clear reporting. We double down on what works and cut what doesn't."
        }
      ]
    },
    mission: {
      label: 'Our mission',
      titlePrefix: 'Turning content chaos into',
      titleAccent: 'consistent',
      titleSuffix: 'growth',
      body: [
        'We work with brands who are ready to take their social media presence seriously.',
        'Not just to fill a feed or chase trends, but to show up with purpose and build something that actually grows.',
        'For us, content is just the starting point.',
        'Our approach combines strategy, execution, and consistency. We handle the planning, posting, and platform management so you can focus on running the business.',
        "If you're ready to grow with intention, we'd love to help."
      ]
    },
    homeCases: {
      label: 'Case results',
      titlePrefix: 'Work that speaks',
      titleAccent: 'for itself',
      viewAll: 'View all cases',
      case1: {
        tag: 'Case results · Beauty',
        titlePrefix: 'Scaling a beauty brand with',
        titleAccent: 'reds',
        body: 'We redesigned their entire content approach — from long tutorials to punchy 15-second reels — paired with targeted paid on Meta.',
        kpi1: 'Reel Views',
        kpi2: 'Engagement'
      },
      case2: {
        tag: 'Case results · Fashion',
        titlePrefix: 'Growing a clothing brand with',
        titleAccent: 'video',
        body: 'A pivot from static posts to video-first content showing the product in motion, exactly how the audience wanted to see it.',
        kpi1: 'Followers',
        kpi2: 'Engagement'
      }
    },
    whyChoose: {
      titlePrefix: 'Why choose Viral',
      titleMiddle: 'over',
      titleAccent: 'everyone',
      titleSuffix: 'else?',
      otherTitle: 'Other Agencies',
      brandTitle: 'What we do differently',
      otherItems: [
        'Locked in long-term contracts',
        'Generic one-size-fits-all content',
        'Slow turnaround times',
        'Vague reporting, no real insights'
      ],
      brandItems: [
        'Flexible, cancel-anytime plans',
        'Brand-specific content strategy',
        '48-hour turnaround guarantee',
        'Clear metrics tied to business goals'
      ]
    },
    testimonial: {
      quotePrefix: 'They took social media off our plate completely and our audience has never been',
      quoteAccent: 'more engaged.',
      author: 'Elena Chen',
      role: 'Founder · Bloom Skincare'
    },
    finalCta: {
      label: 'Get started',
      titlePrefix: 'Your viral journey starts',
      titleAccent: 'right here.'
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
    }
  },
  content: {
    helpItems: [
      {
        title: 'Content Creation',
        body: "Scroll-stopping visuals and copy crafted for your brand voice and your audience's feed.",
        emoji: '🎬',
        gradient: 'linear-gradient(135deg,#1a1a2e,#16213e)',
        delayClass: 'd1'
      },
      {
        title: 'Social Management',
        body: 'Full-service management across all platforms — posting, scheduling, and community handled.',
        emoji: '📱',
        gradient: 'linear-gradient(135deg,#0f3460,#533483)',
        delayClass: 'd2'
      },
      {
        title: 'Paid Media',
        body: 'Data-driven ad campaigns that find your audience, tell your story, and turn attention into revenue.',
        emoji: '💰',
        gradient: 'linear-gradient(135deg,#f7971e,#ffd200)',
        delayClass: 'd3'
      }
    ],
    homeFaqItems: [
      { question: 'Is there a minimum contract length?', answer: "No. We work on rolling monthly plans. Cancel or pause any time with 30 days' notice." },
      { question: 'Can you work with my existing brand guidelines?', answer: "Absolutely. We work within your brand guidelines. If you don't have any, we can help create them during onboarding." },
      { question: 'What platforms do you manage?', answer: 'Instagram, TikTok, LinkedIn, Facebook, Pinterest, and Threads. Most clients start with 2–3 platforms.' },
      { question: 'How long until I see results?', answer: 'Organic growth is visible within 60–90 days. Paid campaigns can show ROI within 2–4 weeks depending on budget.' }
    ],
    storyVideos: [
      '/assets/videos/doctor.mp4',
      '/assets/videos/nurse.mp4',
      '/assets/videos/patient1.mp4'
    ],
    aboutTeamMembers: [
      { name: 'Sofia Little', role: 'Creative Lead', gradient: 'linear-gradient(160deg,#f0c5a8,#d4a090,#c08878)', delayClass: 'd1' },
      { name: 'James Cohen', role: 'Founder & CEO', gradient: 'linear-gradient(160deg,#c8d4e0,#a8b8d0,#90a8c0)', delayClass: 'd2' },
      { name: 'Maya Rodriguez', role: 'Growth Specialist', gradient: 'linear-gradient(160deg,#d0c8e0,#b0a0c8,#9890b8)', delayClass: 'd3' }
    ],
    aboutAwards: [
      ['Social Media Agency of the Year', 'Recognised for outstanding creative campaigns and measurable client results across multiple industries.', '2024'],
      ['Best Content Strategy Campaign', 'Awarded for our innovative approach to turning user-generated content into viral marketing moments.', '2023'],
      ['Digital Marketing Innovation Award', 'Praised for developing new methodologies that consistently drive engagement and conversion rates.', '2024'],
      ['Rising Agency Excellence', 'Recognised as one of the fastest-growing social media agencies with exceptional client satisfaction scores.', '2023']
    ],
    caseStudyCards: [
      { name: 'Glowhaus', category: 'Beauty', brand: 'Glowhaus', gradient: 'linear-gradient(135deg,#f5c5a8,#e8a090,#c87060)', delayClass: 'd1' },
      { name: 'Border', category: 'Technology', brand: '◆ Border', gradient: 'linear-gradient(135deg,#e0c8b0,#c8a890,#b08870)', delayClass: 'd2' },
      { name: 'Then', category: 'Fashion', brand: 'then', gradient: 'linear-gradient(135deg,#f0e0d0,#e0c8b8,#c8a898)', delayClass: 'd3', serif: true },
      { name: 'SnapShot', category: 'Photography', brand: '⚡ SnapShot', gradient: 'linear-gradient(135deg,#d8e0d0,#c0c8b8,#a8b0a0)', delayClass: 'd4' }
    ],
    blogCards: [
      ['How to Create Content That Actually Converts', "Stop creating content that gets likes but doesn't drive sales. Here's what actually works.", 'Oct 17, 2025', 'linear-gradient(160deg,#f0e8d8,#d8c8a8,#c0a878)', 'd1'],
      ['How We Scaled a Beauty Brand to 100K', 'A detailed breakdown of the strategy, content, and tactics that drove explosive growth for our client.', 'Sep 28, 2025', 'linear-gradient(160deg,#e8c8b8,#d4a898,#c09080)', 'd2'],
      ['What to Track Beyond Vanity Metrics', "Likes and follows don't pay the bills. Here's how to measure what actually matters to your business.", 'Sep 10, 2025', 'linear-gradient(160deg,#e8e0d8,#c8c0b0,#a8a090)', 'd3'],
      ["Why Your Reels Aren't Getting Views", 'Common mistakes that kill your reach and the simple changes that can make your content go viral.', 'Aug 22, 2025', 'linear-gradient(160deg,#c0b8d0,#a098c0,#8880a8)', 'd4']
    ],
    contactFaqItems: [
      { question: 'How quickly will we see results?', answer: 'Paid campaigns can show ROI within 2–4 weeks. Organic growth takes 60–90 days of consistent execution to become visible.' },
      { question: 'What platforms do you manage?', answer: 'Instagram, TikTok, LinkedIn, Facebook, Pinterest, and Threads. We recommend starting with 2–3 platforms.' },
      { question: 'Do you work with our industry?', answer: 'We work with e-commerce, SaaS, DTC brands, service businesses, and personal brands. If you need to grow on social, we can help.' },
      { question: 'What if we want to cancel?', answer: "Cancel any time with 30 days' notice. No penalties, no lock-ins. We're confident you won't want to." },
      { question: 'How involved do we need to be?', answer: "As much or as little as you want. Most clients have a 30-minute check-in monthly and approve content in a shared doc. That's it." }
    ]
  },
  pages: {
    about: {
      badge: 'About us',
      title: 'Who we are',
      description: "We're strategists, creators, and growth experts who believe social media should drive real business results, not just look pretty. Every brand deserves a social presence that actually works."
    },
    caseStudies: {
      badge: 'Case studies',
      title: 'Our best work',
      description: "See how we've helped growing businesses transform their social media from a time drain into their most powerful growth engine. Every strategy is custom-built, every result is measurable."
    },
    blog: {
      badge: 'Blog',
      title: 'Latest insights',
      description: 'Actionable insights, proven strategies, and industry trends to help you build a social media presence that drives real business results.'
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
    tagline: 'Social media that drives real results',
    subtitle: 'Built for creators, businesses, and brands.',
    navTitle: 'Navigate',
    connectTitle: 'Connect',
    legalTitle: 'Legal',
    home: 'Home',
    about: 'About',
    caseStudies: 'Case Studies',
    blog: 'Blog',
    bookCall: 'Book a call',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    contact: 'Contact',
    instagram: 'Instagram',
    linkedin: 'LinkedIn',
    twitter: 'Twitter',
    copyPrefix: 'Created by',
    copySuffix: 'with',
    copyAuthor: 'Cosmike',
    copyright: '© 2025 Doctinum'
  }
};

export default en;
