'use client';

import { createContext, useContext } from 'react';

const SolutionNavigationContext = createContext(null);

export function SolutionNavigationProvider({ children, currentSolution, solutions = [] }) {
  // Trouver l'index de la solution actuelle
  const currentIndex = solutions.findIndex(sol => sol.id === currentSolution);
  
  // Calculer les solutions précédente et suivante
  const previousSolution = currentIndex > 0 ? solutions[currentIndex - 1] : null;
  const nextSolution = currentIndex < solutions.length - 1 ? solutions[currentIndex + 1] : null;

  const value = {
    currentSolution,
    currentIndex,
    previousSolution,
    nextSolution,
    hasPrevious: !!previousSolution,
    hasNext: !!nextSolution,
    solutions,
    isFirst: currentIndex === 0,
    isLast: currentIndex === solutions.length - 1
  };

  return (
    <SolutionNavigationContext.Provider value={value}>
      {children}
    </SolutionNavigationContext.Provider>
  );
}

export function useSolutionNavigation() {
  const context = useContext(SolutionNavigationContext);
  if (!context) {
    throw new Error('useSolutionNavigation must be used inside SolutionNavigationProvider');
  }
  return context;
}
