import { getSeoForPage } from '../constants/seo';
import { DEFAULT_LOCALE, normalizeLocale } from '../constants/locales';

export function buildMetadata(pageId, localeValue) {
  const localeCode = normalizeLocale(localeValue || DEFAULT_LOCALE);
  const seoValue = getSeoForPage(pageId, localeCode);
  const urlBase = 'https://viral.example';

  return {
    title: seoValue.title,
    description: seoValue.description,
    alternates: {
      languages: {
        en: `/${pageId === 'home' ? '' : pageId}`,
        fr: `/fr/${pageId === 'home' ? '' : pageId}`,
      },
    },
    openGraph: {
      title: seoValue.title,
      description: seoValue.description,
      url: urlBase,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: seoValue.title,
      description: seoValue.description,
    },
  };
}
