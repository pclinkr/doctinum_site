const BASE_URL = 'https://viral.example';

const ROUTES = [
  '',
  '/about',
  '/case-studies',
  '/case-studies/glowhaus',
  '/blog',
  '/blog/organic-growth-blueprint',
  '/contact',
  '/privacy',
];

export default function sitemap() {
  const locales = ['en', 'fr'];
  const nowIso = new Date().toISOString();

  return locales.flatMap((localeValue) =>
    ROUTES.map((routeValue) => ({
      url: `${BASE_URL}/${localeValue}${routeValue}`,
      lastModified: nowIso,
      changeFrequency: routeValue === '' ? 'weekly' : 'monthly',
      priority: routeValue === '' ? 1 : 0.7,
    }))
  );
}
