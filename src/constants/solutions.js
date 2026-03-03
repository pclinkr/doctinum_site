export const SOLUTIONS_SEQUENCE = [
  {
    id: 'surgery-aesthetic',
    title: 'Chirurgie & médecine esthétique',
    pageId: 'surgery-aesthetic'
  },
  {
    id: 'surgery-rhinoplasty',
    title: 'Rhinoplastie',
    pageId: 'surgery-rhinoplasty'
  },
  {
    id: 'surgery-liposuction',
    title: 'Liposuccion',
    pageId: 'surgery-liposuction'
  },
  {
    id: 'surgery-hyaluronic-injection',
    title: 'Injections acide hyaluronique',
    pageId: 'surgery-hyaluronic-injection'
  },
  {
    id: 'sports-medicine',
    title: 'Médecine du sport',
    pageId: 'sports-medicine'
  },
  {
    id: 'dermatology',
    title: 'Dermatologie',
    pageId: 'dermatology'
  },
  {
    id: 'proms',
    title: 'PROMs',
    pageId: 'proms'
  },
  {
    id: 'patient-support-programs',
    title: 'Programmes d\'accompagnement patients',
    pageId: 'patient-support-programs'
  },
  {
    id: 'prevention-workplace-health',
    title: 'Prévention santé au travail',
    pageId: 'prevention-workplace-health'
  },
  {
    id: 'coordinated-chronic-pathways',
    title: 'Parcours chroniques coordonnés',
    pageId: 'coordinated-chronic-pathways'
  },
  {
    id: 'hv-transplantation',
    title: 'Transplantation',
    pageId: 'hv-transplantation'
  },
  {
    id: 'hv-oncology',
    title: 'Oncologie',
    pageId: 'hv-oncology'
  },
  {
    id: 'hv-chronic-cardiology',
    title: 'Cardiologie chronique',
    pageId: 'hv-chronic-cardiology'
  },
  {
    id: 'hv-rare-diseases',
    title: 'Maladies rares',
    pageId: 'hv-rare-diseases'
  },
  {
    id: 'hv-mental-health',
    title: 'Santé mentale',
    pageId: 'hv-mental-health'
  }
];

export function getSolutionNavigation(solutionId) {
  const currentIndex = SOLUTIONS_SEQUENCE.findIndex(sol => sol.id === solutionId);
  
  if (currentIndex === -1) {
    return {
      currentSolution: null,
      previousSolution: null,
      nextSolution: null,
      hasPrevious: false,
      hasNext: false
    };
  }

  return {
    currentSolution: SOLUTIONS_SEQUENCE[currentIndex],
    previousSolution: currentIndex > 0 ? SOLUTIONS_SEQUENCE[currentIndex - 1] : null,
    nextSolution: currentIndex < SOLUTIONS_SEQUENCE.length - 1 ? SOLUTIONS_SEQUENCE[currentIndex + 1] : null,
    hasPrevious: currentIndex > 0,
    hasNext: currentIndex < SOLUTIONS_SEQUENCE.length - 1
  };
}
