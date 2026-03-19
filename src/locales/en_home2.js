const enHome2 = {
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
      // { value: '4', label: 'operational clinical engines' },
      { value: 'HDS', label: 'certified hosting in France' },
      { value: 'No', label: 'patient action required' },
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
        icon: 'check-badge',
        title: 'Identity & consent',
        body: 'Patient verification before collection, anti-impersonation, in-call consent capture, and native GDPR traceability.',
        tag: 'Native GDPR',
      },
      {
        icon: 'phone-arrow-up',
        title: 'Call orchestration',
        body: 'Handles no-answers, voicemails, third parties, refusals, rescheduling, and time windows with full auditability.',
        tag: 'Audit trail',
      },
      {
        icon: 'clipboard-document-list',
        title: 'Protocol fidelity',
        body: 'Maintains clinical logic through conversational deviation. Knowledge base configured by clinicians.',
        tag: 'Clinician protocol',
      },
      {
        icon: 'circle-stack',
        title: 'Data structuring',
        body: 'Extracts clean clinical data, routes threshold alerts, and exports structured HL7 FHIR payloads.',
        tag: 'HL7 FHIR',
      },
      {
        icon: 'presentation-chart-line',
        title: 'Longitudinal continuity',
        body: 'Clinical memory across calls and trend detection over time to keep a usable trajectory.',
        tag: 'Longitudinal follow-up',
      },
      {
        icon: 'server-stack',
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

export default enHome2;
