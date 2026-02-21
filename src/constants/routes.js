import { DEFAULT_LOCALE, normalizeLocale } from './locales';

const PAGE_PATH_SEGMENTS = {
  home: '',
  about: 'about',
  'case-studies': 'case-studies',
  'case-detail': 'case-studies/glowhaus',
  blog: 'blog',
  'blog-post': 'blog/organic-growth-blueprint',
  styleguide: 'styleguide',
  contact: 'contact',
  privacy: 'privacy',
  '404': '404'
};

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
  if (normalizedPath.startsWith('/about')) return 'about';
  if (normalizedPath.startsWith('/case-studies/glowhaus')) return 'case-detail';
  if (normalizedPath.startsWith('/case-studies')) return 'case-studies';
  if (normalizedPath.startsWith('/blog/')) return 'blog-post';
  if (normalizedPath.startsWith('/blog')) return 'blog';
  if (normalizedPath.startsWith('/styleguide')) return 'styleguide';
  if (normalizedPath.startsWith('/contact')) return 'contact';
  if (normalizedPath.startsWith('/privacy')) return 'privacy';
  if (normalizedPath.startsWith('/404')) return '404';

  return '404';
}

export function switchLocaleInPath(pathname, nextLocale) {
  const targetLocale = normalizeLocale(nextLocale);
  const sourcePath = String(pathname || '/');
  const parts = sourcePath.split('/').filter(Boolean);
  if (parts.length === 0) return `/${targetLocale}`;

  const maybeLocale = normalizeLocale(parts[0]);
  if (parts[0] === 'en' || parts[0] === 'fr') {
    parts[0] = targetLocale;
  } else {
    parts.unshift(targetLocale);
  }

  return `/${parts.join('/')}`;
}
