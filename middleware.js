import { NextResponse } from 'next/server';
import { DEFAULT_LOCALE, SUPPORTED_LOCALES, normalizeLocale } from './src/constants/locales';

function detectPreferredLocale(request) {
  const acceptLanguage = request.headers.get('accept-language') || '';
  const firstLocale = acceptLanguage.split(',')[0]?.trim();
  return normalizeLocale(firstLocale || DEFAULT_LOCALE);
}

export function middleware(request) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/_not-found') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') ||
    pathname.startsWith('/assets')
  ) {
    return NextResponse.next();
  }

  const hasLocalePrefix = SUPPORTED_LOCALES.some((localeValue) => pathname === `/${localeValue}` || pathname.startsWith(`/${localeValue}/`));
  if (hasLocalePrefix) {
    return NextResponse.next();
  }

  const localeCode = detectPreferredLocale(request);
  const normalizedPath = pathname === '/' ? '' : pathname;
  const targetPath = `/${localeCode}${normalizedPath}`;
  return NextResponse.redirect(new URL(targetPath, request.url));
}

export const config = {
  matcher: ['/((?!_next|favicon.ico).*)']
};
