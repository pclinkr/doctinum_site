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
  404: '404',

  'surgery-aesthetic': 'solutions/chirurgie-medecine-esthetique',
  'surgery-rhinoplasty': 'solutions/rhinoplastie',
  'surgery-liposuction': 'solutions/liposuccion',
  'surgery-hyaluronic-injection': 'solutions/injection-acide-hyaluronique',
  'sports-medicine': 'solutions/medecine-du-sport',
  dermatology: 'solutions/dermatologie',
  proms: 'solutions/proms-questionnaires-post-acte',
  'patient-support-programs': 'solutions/programmes-accompagnement-patient',
  'prevention-workplace-health': 'solutions/prevention-sante-travail',
  'coordinated-chronic-pathways': 'solutions/parcours-chroniques-coordonnes',

  'hv-transplantation': 'haute-vigilance/transplantation',
  'hv-oncology': 'haute-vigilance/oncologie',
  'hv-chronic-cardiology': 'haute-vigilance/cardiologie-chronique',
  'hv-rare-diseases': 'haute-vigilance/maladies-rares',
  'hv-mental-health': 'haute-vigilance/sante-mentale',

  demo: 'fonctionnement/demo',
  features: 'fonctionnement/fonctionnalites',
  'editors-api': 'editeurs-api',
  'pharma-research': 'pharma-recherche',
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

export const SOLUTION_SLUG_TO_PAGE_ID = {
  'chirurgie-medecine-esthetique': 'surgery-aesthetic',
  rhinoplastie: 'surgery-rhinoplasty',
  liposuccion: 'surgery-liposuction',
  'injection-acide-hyaluronique': 'surgery-hyaluronic-injection',
  'medecine-du-sport': 'sports-medicine',
  dermatologie: 'dermatology',
  'proms-questionnaires-post-acte': 'proms',
  'programmes-accompagnement-patient': 'patient-support-programs',
  'prevention-sante-travail': 'prevention-workplace-health',
  'parcours-chroniques-coordonnes': 'coordinated-chronic-pathways',
};

export const HIGH_VIGILANCE_SLUG_TO_PAGE_ID = {
  transplantation: 'hv-transplantation',
  oncologie: 'hv-oncology',
  'cardiologie-chronique': 'hv-chronic-cardiology',
  'maladies-rares': 'hv-rare-diseases',
  'sante-mentale': 'hv-mental-health',
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
