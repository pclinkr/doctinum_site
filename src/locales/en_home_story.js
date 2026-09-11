/* =========================================================================
   Textes anglais de la scène d'accueil animée.

   Écrits, pas traduits mot à mot: c'est la page qui porte le référencement de
   la version anglaise, et un calque du français y perdrait les tournures que
   les praticiens emploient réellement.
   ========================================================================= */
const enHomeStory = {
  hero: {
    titleBefore: 'The AI assistant that turns patient contact into ',
    titleAccent: 'reputation',
    lede: 'It greets patients, screens their reasons for calling, gathers the information and prepares the file before the consultation even begins — including when the practice is closed.',
    cta: 'Book a demo',
    cue: 'Scroll',
  },

  rail: {
    label: 'Story chapters',
    steps: [
      'Front desk',
      'Overload',
      'No-shows',
      'Paperwork',
      'Clara',
      'Consultation',
      'Front desk at ease',
      'Your turn',
    ],
  },

  titles: [
    'Is your front desk overwhelmed?',
    'No-shows that cost you',
    'Time spent filling in the consultation file for every new patient',
    'Meet Clara, your AI assistant',
    'Better care during the consultation',
    'A front desk that is available and at ease',
  ],

  blocks: {
    call1: { t1: 'Ms Rivière', t2: '09:12 · reschedule' },
    call2: { t1: 'Léa Marchand', t2: '09:13 · first visit' },
    call3: { t1: 'Missed call', t2: '09:15 · unknown number' },
    call4: { t1: 'Verdier practice', t2: '09:16 · colleague' },
    inf1: { t1: 'Booking online has become effortless' },
    inf2: { t1: 'Appointments are easily forgotten' },
    inf3: { t1: 'Reminder texts go unread' },
    adm1: { t1: 'A file to open and fill in' },
    adm2: { t1: 'Medical history to collect during the consultation' },
    adm3: { t1: 'Minutes taken away from the conversation' },
    ctx1: { t1: 'On your website and over the phone' },
    ctx2: { t1: 'Available seven days a week' },
    ctx3: { t1: 'Around the clock' },
    cap1: { t1: 'Greets and informs' },
    cap2: { t1: 'Screens and directs to the right appointment' },
    cap3: { t1: 'Collects the information' },
    cap4: { t1: 'Prepares the consultation file' },
    cap5: { t1: 'Calls ahead to confirm the appointment' },
    r1: { t1: 'Better informed patients' },
    r2: { t1: 'More engaged' },
    r3: { t1: 'Fewer no-shows' },
    r4: { t1: 'More qualified appointments' },
    r5: { t1: 'A happier practice' },
    r6: { t1: 'Better care for patients' },
  },

  stat: { value: 10, caption: 'minutes saved on every consultation' },

  finale: {
    title: 'So how does it go in your practice?',
    lede: 'Twenty minutes to watch Clara handle a real call, with your own consultation types and your own calendar.',
    cta: 'Book a demo',
    play: 'Listen to Clara',
    stop: 'Stop',
    playHint: 'the introduction plays with sound',
    badges: [
      'GDPR compliant',
      'HDS-secured health data',
      'AI Act · AI fit for healthcare',
    ],
  },

  scenes: {
    office: 'A practice receptionist on the phone at the front desk',
    waiting: 'An empty waiting room',
    admin:
      'A practitioner focused on their screen, filling in a consultation file',
    consult:
      'A smiling practitioner listening to a patient during a consultation',
    serene: 'A smiling receptionist welcoming a patient at the front desk',
    orb: 'Clara, the Doctinum assistant',
  },
};

export default enHomeStory;
