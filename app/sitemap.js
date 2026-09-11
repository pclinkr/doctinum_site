import { SUPPORTED_LOCALES } from '../src/constants/locales';

export const BASE_URL = 'https://www.doctinum.com';

/**
 * Routes réellement servies par l'application et alignées sur le
 * positionnement actuel (accueil et pré-consultation esthétique).
 * Les verticales dépriorisées ne sont plus déclarées ici.
 */
const ROUTES = [
  { path: '', priority: 1, changeFrequency: 'weekly' },
  { path: '/entreprise/vision', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/securite', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/fonctionnement/demo', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/editeurs-api', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/about', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/legal-notice', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/cookies-policy', priority: 0.3, changeFrequency: 'yearly' },
];

export default function sitemap() {
  const nowIso = new Date().toISOString();

  return SUPPORTED_LOCALES.flatMap((localeValue) =>
    ROUTES.map((route) => ({
      url: `${BASE_URL}/${localeValue}${route.path}`,
      lastModified: nowIso,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: Object.fromEntries(
          SUPPORTED_LOCALES.map((alternateLocale) => [
            alternateLocale,
            `${BASE_URL}/${alternateLocale}${route.path}`,
          ])
        ),
      },
    }))
  );
}
