import { notFound } from 'next/navigation';
import PageRenderer from '../../../../src/components/layout/PageRenderer';
import { getSeoForPage } from '../../../../src/constants/seo';
import { normalizeLocale } from '../../../../src/constants/locales';
import { HIGH_VIGILANCE_SLUG_TO_PAGE_ID } from '../../../../src/constants/routes';

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const localeCode = normalizeLocale(resolvedParams.locale);
  const pageId = HIGH_VIGILANCE_SLUG_TO_PAGE_ID[resolvedParams.slug];
  const seoValue = getSeoForPage(pageId || '404', localeCode);
  return {
    title: seoValue.title,
    description: seoValue.description,
  };
}

export function generateStaticParams() {
  return Object.keys(HIGH_VIGILANCE_SLUG_TO_PAGE_ID).map((slug) => ({ slug }));
}

export default async function HighVigilanceRoute({ params }) {
  const resolvedParams = await params;
  const pageId = HIGH_VIGILANCE_SLUG_TO_PAGE_ID[resolvedParams.slug];
  if (!pageId) notFound();
  return <PageRenderer pageId={pageId} />;
}
