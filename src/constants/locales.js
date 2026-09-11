export const SUPPORTED_LOCALES = ['en', 'fr'];
export const DEFAULT_LOCALE = 'en';

export function normalizeLocale(rawLocale) {
  const localeValue = String(rawLocale || DEFAULT_LOCALE).toLowerCase();
  return localeValue.startsWith('fr') ? 'fr' : 'en';
}

/**
 * Test STRICT, sur la valeur brute. Passer par normalizeLocale rendait cette
 * fonction toujours vraie — elle ramène n'importe quoi à 'en' ou 'fr' — et le
 * segment [locale] acceptait donc tout: `/foo.txt` était servi en 200 avec
 * l'accueil anglais. Autant d'URL indexables pointant sur le même contenu.
 */
export function isSupportedLocale(rawLocale) {
  return SUPPORTED_LOCALES.includes(String(rawLocale || '').toLowerCase());
}
