import enSeo from '../locales/seo/en';
import frSeo from '../locales/seo/fr';

const SEO_BY_LOCALE = {
  en: enSeo,
  fr: frSeo,
};

export function getSeoForPage(pageId, locale) {
  const localeSeo = SEO_BY_LOCALE[locale] || SEO_BY_LOCALE.en;
  return localeSeo[pageId] || localeSeo.home;
}
