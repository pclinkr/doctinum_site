import Script from 'next/script';
import { Inter, Noto_Serif } from 'next/font/google';
import { notFound } from 'next/navigation';
import LocaleShell from '../../src/components/layout/LocaleShell';
import {
  isSupportedLocale,
  normalizeLocale,
  SUPPORTED_LOCALES,
} from '../../src/constants/locales';
import '../../src/theme/tokens.css';
import '../../src/theme/semantic.css';
import '../../src/theme/gradients.css';
import '../../src/theme/components.css';
import '../../src/styles/main.css';
import '../../src/styles/home-story.css';
import '../../src/theme/typography.css';

/**
 * Layout RACINE. Il vit sous `[locale]` — et non dans `app/` — pour une seule
 * raison, décisive au référencement: c'est le seul endroit d'où `<html lang>`
 * peut être écrit avec la vraie langue au moment du rendu serveur. Placé plus
 * haut, il ne connaît pas la locale et servait un `lang="en"` figé aux deux
 * langues, corrigé après coup côté client — donc faux dans le HTML livré.
 *
 * Toutes les URL passent par le préfixe de locale (le middleware y redirige),
 * ce segment est donc bien le sommet réel de l'arborescence.
 */

/* Polices auto-hébergées plutôt que chargées depuis Google. Trois gains, tous
   mesurables: plus de résolution DNS ni de poignée de main TLS vers un tiers,
   plus de feuille de style bloquante avant le premier rendu, et surtout un
   repli aux MÉTRIQUES AJUSTÉES — c'est lui qui permet de peindre le titre
   immédiatement sans attendre le fichier de police. */
const interSans = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const notoSerifDisplay = Noto_Serif({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-noto-serif',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://www.doctinum.com'),
};

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((localeValue) => ({ locale: localeValue }));
}

export default async function LocalizedRootLayout({ children, params }) {
  const resolvedParams = await params;
  const localeCode = normalizeLocale(resolvedParams.locale);
  if (!isSupportedLocale(resolvedParams.locale)) {
    notFound();
  }

  return (
    <html
      lang={localeCode}
      className={`${interSans.variable} ${notoSerifDisplay.variable}`}
    >
      <body>
        <LocaleShell locale={localeCode}>{children}</LocaleShell>
        <Script
          id="crisp-chat"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.$crisp=[];
              window.CRISP_WEBSITE_ID="e0b7425b-b0ff-4e95-aa5d-a1ad24b4c596";

              // Attendre que le loader soit terminé avant d'afficher Crisp
              function initCrisp() {
                const loader = document.getElementById('ls');
                if (loader && loader.style.display !== 'none' && !loader.classList.contains('hide')) {
                  setTimeout(initCrisp, 100);
                  return;
                }

                (function(){
                  d=document;
                  s=d.createElement("script");
                  s.src="https://client.crisp.chat/l.js";
                  s.async=1;
                  d.getElementsByTagName("head")[0].appendChild(s);
                })();
              }

              initCrisp();
            `,
          }}
        />
      </body>
    </html>
  );
}
