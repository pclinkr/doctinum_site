import { NextResponse } from 'next/server';
import {
  DEFAULT_LOCALE,
  SUPPORTED_LOCALES,
  normalizeLocale,
} from './src/constants/locales';

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

  const hasLocalePrefix = SUPPORTED_LOCALES.some(
    (localeValue) =>
      pathname === `/${localeValue}` || pathname.startsWith(`/${localeValue}/`)
  );
  if (hasLocalePrefix) {
    // On transmet la locale de l'URL pour que la page 404 racine puisse
    // répondre dans la bonne langue au lieu de renvoyer tout le monde en anglais.
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-doctinum-locale', pathname.split('/')[1] || '');
    return NextResponse.next({ request: { headers: requestHeaders } });
  }

  const localeCode = detectPreferredLocale(request);
  const segments = pathname.split('/').filter(Boolean);

  /* Premier segment qui RESSEMBLE à un code de langue sans en être un
     (`/de/securite`, `/es/contact`): on le REMPLACE au lieu de le préfixer.
     Préfixé, il donnait `/en/de/securite` — une 404 là où l'intention était
     limpide, et un lien entrant perdu. */
  const looksLikeLocaleCode = /^[a-z]{2}(-[a-z]{2})?$/i.test(segments[0] || '');
  const remainingSegments = looksLikeLocaleCode ? segments.slice(1) : segments;
  const targetPath = `/${[localeCode, ...remainingSegments].join('/')}`;

  return NextResponse.redirect(new URL(targetPath, request.url));
}

export const config = {
  matcher: ['/((?!_next|favicon.ico).*)'],
};
