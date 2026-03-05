import { notFound } from 'next/navigation';
import LocaleShell from '../../src/components/layout/LocaleShell';
import {
  isSupportedLocale,
  normalizeLocale,
  SUPPORTED_LOCALES,
} from '../../src/constants/locales';

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((localeValue) => ({ locale: localeValue }));
}

export default async function LocalizedLayout({ children, params }) {
  const resolvedParams = await params;
  const localeCode = normalizeLocale(resolvedParams.locale);
  if (!isSupportedLocale(localeCode)) {
    notFound();
  }

  return <LocaleShell locale={localeCode}>{children}</LocaleShell>;
}
