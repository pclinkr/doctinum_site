const COOKIE_CONSENT_KEY = 'cookie_consent';
const COOKIE_CONSENT_EXPIRY_DAYS = 365;

export const CookieCategories = {
  NECESSARY: 'necessary',
  ANALYTICS: 'analytics',
};

export function getCookieConsent() {
  if (typeof window === 'undefined') return null;
  
  try {
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!stored) return null;
    
    const consent = JSON.parse(stored);
    if (consent.timestamp && Date.now() - consent.timestamp > COOKIE_CONSENT_EXPIRY_DAYS * 24 * 60 * 60 * 1000) {
      localStorage.removeItem(COOKIE_CONSENT_KEY);
      return null;
    }
    
    return consent;
  } catch {
    return null;
  }
}

export function saveCookieConsent(preferences) {
  if (typeof window === 'undefined') return;
  
  const consent = {
    ...preferences,
    timestamp: Date.now(),
  };
  
  localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consent));
  
  if (!preferences[CookieCategories.ANALYTICS]) {
    disableAnalytics();
  } else {
    enableAnalytics();
  }
}

export function acceptAllCookies() {
  saveCookieConsent({
    [CookieCategories.NECESSARY]: true,
    [CookieCategories.ANALYTICS]: true,
  });
}

export function rejectAllCookies() {
  saveCookieConsent({
    [CookieCategories.NECESSARY]: true,
    [CookieCategories.ANALYTICS]: false,
  });
}

export function hasConsent(category) {
  const consent = getCookieConsent();
  if (!consent) return false;
  return consent[category] === true;
}

function enableAnalytics() {
  if (typeof window === 'undefined') return;
  
  if (window.gtag) {
    window.gtag('consent', 'update', {
      analytics_storage: 'granted',
    });
  }
}

function disableAnalytics() {
  if (typeof window === 'undefined') return;
  
  if (window.gtag) {
    window.gtag('consent', 'update', {
      analytics_storage: 'denied',
    });
  }
  
  const cookiesToDelete = document.cookie.split(';');
  for (let i = 0; i < cookiesToDelete.length; i++) {
    const cookie = cookiesToDelete[i];
    const eqPos = cookie.indexOf('=');
    const name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim();
    if (name.startsWith('_ga') || name.startsWith('_gid')) {
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
    }
  }
}
