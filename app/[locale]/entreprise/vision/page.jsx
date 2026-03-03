import PageRenderer from '../../../../src/components/layout/PageRenderer';
import { getSeoForPage } from '../../../../src/constants/seo';
import { normalizeLocale } from '../../../../src/constants/locales';

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const localeCode = normalizeLocale(resolvedParams.locale);
  const seoValue = getSeoForPage('vision', localeCode);
  return {
    title: seoValue.title,
    description: seoValue.description
  };
}

export default function VisionRoute() {
  return <PageRenderer pageId="vision" />;
}
