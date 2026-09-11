/* =========================================================================
   Textes des quatre blocs, repris de la maquette de référence.

   ⚠ À VÉRIFIER AVANT MISE EN LIGNE. Les chiffres et le témoignage viennent de
   la maquette, pas d'une source ni d'un praticien réel. Ils ont été repris sur
   demande explicite pour juger la mise en page. Le témoignage attribué au
   « Dr. Marc Blanchard » est fictif: à remplacer par un avis réel et signé
   avant publication, ou à retirer.

   Les LOGOS de la maquette nomment des groupes de santé réels. Ils ne sont pas
   repris: les afficher leur prêterait une relation commerciale qui n'existe
   pas, et c'est une affirmation sur des tiers, pas sur Doctinum.
   ========================================================================= */
const enShowcase = {
  howItWorks: {
    label: 'How it works',
    titlePrefix: 'A conversation',
    titleAccent: 'before the consultation.',
    body: 'On your website, at any hour, the assistant leads the exchange: by voice, in writing or on screen, as the patient prefers.',
    stage: {
      site: {
        brand: 'Harmonie Clinic',
        nav: ['Procedures', 'The practice', 'Reviews', 'Contact'],
      },
      step1: {
        agent: 'Practice assistant',
        greeting:
          'Hello, I am the practice assistant. What brings you in today?',
        chips: [
          'Ask my questions',
          'Explore the procedures',
          'Prepare my consultation',
        ],
        cta: 'Talk now',
      },
      step2: {
        question: 'How long does recovery take?',
        answer:
          'Expect seven to ten days before returning to social life, and three weeks before sport. Dr. Leroy will confirm for your case.',
        source: 'Answer drawn from the practice knowledge base',
      },
      step3: {
        title: 'Pre-consultation file',
        progress: 'Being completed',
        fields: [
          { label: 'Reason', value: 'Rhinoplasty' },
          { label: 'ENT history', value: 'None' },
          { label: 'Since', value: 'Adolescence' },
        ],
        photosLabel: 'Guided photos',
        photos: ['Front', 'Profile', 'Three-quarter'],
      },
      step4: {
        header: 'Summary · Sophie L.',
        rows: [
          { label: 'Reason', value: 'Rhinoplasty', tag: 'Qualified' },
          { label: 'Expectations', value: 'Documented' },
          { label: 'Questions', value: '3 to address' },
        ],
        note: 'Received before the appointment',
      },
      step5: {
        caption: 'The consultation starts where it matters',
      },
    },
    steps: [
      {
        number: '01',
        text: 'A patient visits the website or calls the practice outside opening hours.',
      },
      {
        number: '02',
        text: 'The virtual assistant greets them, answers their questions, understands the need, directs them to the right appointment and fills in the pre-consultation file.',
      },
      {
        number: '03',
        text: 'Doctinum generates the follow-up tasks and the file-ready notifications for the practice.',
      },
      {
        number: '04',
        text: 'The practice welcomes the patient on the day: they are prepared and their file is ready.',
      },
    ],
  },

  solution: {
    label: 'The Doctinum solution',
    title: 'AI at the service of your patients and your teams.',
    body: 'Doctinum automates, assists and smooths patient reception on your website and over the phone.',
    link: 'See how it works',
    orbAlt: 'Clara, the Doctinum assistant',
    capabilities: [
      {
        side: 'left',
        icon: 'phoneIn',
        title: 'Inbound calls',
        sub: 'handled intelligently',
      },
      {
        side: 'left',
        icon: 'clipboard',
        title: 'Pre-consultation',
        sub: 'assisted',
      },
      {
        side: 'left',
        icon: 'bell',
        title: 'Reminders & confirmations',
        sub: 'automated',
      },
      {
        side: 'right',
        icon: 'calendar',
        title: 'Appointments',
        sub: 'optimised',
      },
      { side: 'right', icon: 'folder', title: 'Patient file summary' },
      {
        side: 'right',
        icon: 'users',
        title: 'Patient follow-up',
        sub: 'personalised',
      },
    ],
  },

  results: {
    label: 'Concrete results',
    title: 'More time for what matters.',
    stats: [
      { icon: 'clock', value: '−70%', label: 'administrative time' },
      { icon: 'calendar', value: '−35%', label: 'missed appointments' },
      { icon: 'spark', value: '+25%', label: 'appointment capacity' },
      { icon: 'heart', value: '+30%', label: 'patient satisfaction' },
    ],
    trustLabel: 'Trusted by practitioners',
    trustPlaceholder: 'Client logos to be provided',
  },

  invite: {
    title: 'See how Doctinum can make your work easier',
    lede: 'Twenty minutes to watch Clara handle a real call, with your own consultation types and your own calendar.',
    cta: 'Book a demo',
  },

  inAction: {
    label: 'In action',
    title: 'An experience designed for your patients.',
    points: [
      { icon: 'chat', text: 'Natural conversation' },
      { icon: 'spark', text: 'Instant answers' },
      { icon: 'clock', text: 'Available 24/7' },
    ],
    /* Témoignage FICTIF, repris de la maquette. À remplacer par un avis réel
       et signé avant publication. */
    quote: {
      text: 'Doctinum changed how we work. Our teams are freed up and our patients are better supported.',
      author: 'Dr. Marc Blanchard',
      role: 'Cardiologist',
    },
  },
};

export default enShowcase;
