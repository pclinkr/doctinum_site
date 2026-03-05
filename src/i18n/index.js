import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../locales/en';
import fr from '../locales/fr';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fr: { translation: fr },
  },
  lng: 'en',
  fallbackLng: 'en',
  supportedLngs: ['en', 'fr'],
  nonExplicitSupportedLngs: true,
  initImmediate: false,
  interpolation: {
    escapeValue: false,
  },
});

i18n.on('languageChanged', (languageCode) => {
  if (typeof document === 'undefined') return;
  document.documentElement.lang = languageCode?.startsWith('fr') ? 'fr' : 'en';
});

export default i18n;
