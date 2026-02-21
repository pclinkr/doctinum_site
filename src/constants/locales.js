export const SUPPORTED_LOCALES = ['en', 'fr'];
export const DEFAULT_LOCALE = 'en';

export function normalizeLocale(rawLocale) {
  const localeValue = String(rawLocale || DEFAULT_LOCALE).toLowerCase();
  return localeValue.startsWith('fr') ? 'fr' : 'en';
}

export function isSupportedLocale(localeValue) {
  return SUPPORTED_LOCALES.includes(normalizeLocale(localeValue));
}
