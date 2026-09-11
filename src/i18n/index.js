import { createInstance } from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../locales/en';
import fr from '../locales/fr';
import enHome2 from '../locales/en_home2';
import frHome2 from '../locales/fr_home2';
import enHomeStory from '../locales/en_home_story';
import enShowcase from '../locales/en_showcase';
import frHomeStory from '../locales/fr_home_story';
import frShowcase from '../locales/fr_showcase';
import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from '../constants/locales';

/* =========================================================================
   UNE INSTANCE PAR LOCALE, PAS UN SINGLETON.

   L'instance unique était initialisée en `lng: 'en'` et la langue réelle
   n'arrivait que par un `changeLanguage` dans un effet — donc côté client,
   après l'hydratation. Conséquence mesurée: TOUTES les pages `/fr` étaient
   servies en HTML anglais et ne devenaient françaises qu'une fois le
   JavaScript exécuté. Pour un moteur de recherche, la version française
   n'existait pas dans le document livré.

   Sur le serveur, muter un singleton partagé au moment du rendu ne suffit pas
   non plus: deux pages de langues différentes générées en parallèle se
   marcheraient dessus. Chaque locale a donc son instance, fournie par
   contexte.
   ========================================================================= */

const RESOURCES = {
  en: {
    translation: {
      ...en,
      sections: {
        ...(en.sections || {}),
        home2: enHome2,
        homeStory: enHomeStory,
        showcase: enShowcase,
      },
    },
  },
  fr: {
    translation: {
      ...fr,
      sections: {
        ...(fr.sections || {}),
        home2: frHome2,
        homeStory: frHomeStory,
        showcase: frShowcase,
      },
    },
  },
};

const instancesByLocale = new Map();

export function getI18nInstance(localeValue) {
  const localeCode = SUPPORTED_LOCALES.includes(localeValue)
    ? localeValue
    : DEFAULT_LOCALE;

  const existing = instancesByLocale.get(localeCode);
  if (existing) return existing;

  const instance = createInstance();
  instance.use(initReactI18next).init({
    resources: RESOURCES,
    lng: localeCode,
    fallbackLng: DEFAULT_LOCALE,
    supportedLngs: SUPPORTED_LOCALES,
    nonExplicitSupportedLngs: true,
    // Indispensable au rendu serveur: sans cela l'initialisation est différée
    // d'un tick et le premier rendu ne voit aucune traduction.
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

  instancesByLocale.set(localeCode, instance);
  return instance;
}

export default getI18nInstance;
