import { DEFAULT_LOCALE, normalizeLocale } from './locales';

export const PAGE_PATH_SEGMENTS = {
  home: '',
  about: 'about',
  'case-studies': 'case-studies',
  'case-detail': 'case-studies/glowhaus',
  blog: 'blog',
  'blog-post': 'blog/organic-growth-blueprint',
  styleguide: 'styleguide',
  contact: 'contact',
  privacy: 'privacy',
  'legal-notice': 'legal-notice',
  'privacy-policy': 'privacy-policy',
  'cookies-policy': 'cookies-policy',
  404: '404',

  demo: 'fonctionnement/demo',
  features: 'fonctionnement/fonctionnalites',
  'editors-api': 'editeurs-api',
  security: 'securite',
  vision: 'entreprise/vision',
  'experimentation-partnerships': 'entreprise/experimentations-partenariats',
};

export const SITEMAP_PAGE_IDS = Object.keys(PAGE_PATH_SEGMENTS).filter(
  (pageId) => !['404', 'styleguide'].includes(pageId)
);

const MATCHABLE_ROUTE_ENTRIES = Object.entries(PAGE_PATH_SEGMENTS)
  .filter(([, segmentValue]) => segmentValue)
  .sort((a, b) => b[1].length - a[1].length);

export function buildLocalizedPath(pageId, localeValue = DEFAULT_LOCALE) {
  const localeCode = normalizeLocale(localeValue);
  const pageSegment = PAGE_PATH_SEGMENTS[pageId] ?? PAGE_PATH_SEGMENTS['404'];
  return pageSegment ? `/${localeCode}/${pageSegment}` : `/${localeCode}`;
}

export function pageIdFromPathname(pathname, localeValue = DEFAULT_LOCALE) {
  const localeCode = normalizeLocale(localeValue);
  const pathValue = String(pathname || '');

  const normalizedPath = pathValue.startsWith(`/${localeCode}`)
    ? pathValue.slice(`/${localeCode}`.length)
    : pathValue;

  if (normalizedPath === '' || normalizedPath === '/') return 'home';

  for (const [pageId, segmentValue] of MATCHABLE_ROUTE_ENTRIES) {
    const fullSegment = `/${segmentValue}`;
    if (
      normalizedPath === fullSegment ||
      normalizedPath.startsWith(`${fullSegment}/`)
    ) {
      return pageId;
    }
  }

  return '404';
}

export function switchLocaleInPath(pathname, nextLocale) {
  const targetLocale = normalizeLocale(nextLocale);
  const sourcePath = String(pathname || '/');
  const parts = sourcePath.split('/').filter(Boolean);
  if (parts.length === 0) return `/${targetLocale}`;

  if (parts[0] === 'en' || parts[0] === 'fr') {
    parts[0] = targetLocale;
  } else {
    parts.unshift(targetLocale);
  }

  return `/${parts.join('/')}`;
}
