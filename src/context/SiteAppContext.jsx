'use client';

import { createContext, useContext } from 'react';

const SiteAppContext = createContext(null);

export function SiteAppProvider({ value, children }) {
  return (
    <SiteAppContext.Provider value={value}>{children}</SiteAppContext.Provider>
  );
}

export function useSiteAppContext() {
  const contextValue = useContext(SiteAppContext);
  if (!contextValue) {
    return {
      onNavigate: null,
      storyStarted: false,
      hasLeftHomeOnce: false,
    };
  }
  return contextValue;
}
