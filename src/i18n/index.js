import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../locales/en';
import fr from '../locales/fr';
import { home2En, home2Fr } from '../locales/home2';

const enTranslation = {
  ...en,
  sections: {
    ...(en.sections || {}),
    home2: home2En,
  },
};

const frTranslation = {
  ...fr,
  sections: {
    ...(fr.sections || {}),
    home2: home2Fr,
  },
};

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    fr: { translation: frTranslation },
  },
  lng: 'en',
  fallbackLng: 'en',
  supportedLngs: ['en', 'fr'],
  nonExplicitSupportedLngs: true,
  initImmediate: false,
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
    bindI18n: 'languageChanged loaded',
    bindI18nStore: 'added removed',
    transEmptyNodeValue: '',
    transSupportBasicHtmlNodes: true,
    transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
  },
});

i18n.on('languageChanged', (languageCode) => {
  if (typeof document === 'undefined') return;
  document.documentElement.lang = languageCode?.startsWith('fr') ? 'fr' : 'en';
});

export default i18n;
