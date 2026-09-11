import { useTranslation } from 'react-i18next';
import AppLink from '../ui/AppLink';
import BrandWordmark from '../ui/BrandWordmark';

export default function SiteFooter({ onNavigate }) {
  const { t } = useTranslation();

  const soonItems = t('footer.soonItems', { returnObjects: true });

  const columns = [
    {
      title: t('footer.solutionsTitle'),
      links: [
        // Pas d'entrée « Solution » ici: elle mènerait à l'accueil, tout comme
        // l'entrée esthétique juste en dessous. Deux libellés pour une même
        // destination dans une même colonne n'aident personne.
        { label: t('footer.aesthetics'), page: 'home' },
        { label: t('mainNav.vision'), page: 'vision' },
      ],
    },
    {
      title: t('footer.resourcesTitle'),
      links: [
        { label: t('mainNav.security'), page: 'security' },
        { label: t('nav.editorsApi'), page: 'editors-api' },
        { label: t('footer.contact'), page: 'contact' },
      ],
    },
    {
      title: t('footer.legalTitle'),
      links: [
        { label: t('footer.legalNotice'), page: 'legal-notice' },
        { label: t('footer.privacyPolicy'), page: 'privacy-policy' },
        { label: t('footer.cookies'), page: 'cookies-policy' },
      ],
    },
  ];

  const linkClassName =
    'w-fit text-[13.5px] text-[var(--color-muted)] transition-colors duration-200 ease-out hover:text-[var(--color-action)] focus-visible:outline-none focus-visible:text-[var(--color-action)]';

  return (
    <footer id="siteFooter" style={{ display: 'flex' }}>
      <div className="mx-auto flex w-full max-w-[var(--max)] flex-col gap-7">
        <div className="grid grid-cols-[minmax(220px,320px)_1fr] gap-12 max-[1080px]:grid-cols-1">
          <div className="flex flex-col gap-5 self-start">
            <AppLink page="home" className="w-fit" aria-label="Doctinum">
              <BrandWordmark
                className="block h-[22px] w-auto"
                color="var(--logo-normal)"
                symbolColor="var(--logo-normal)"
                alt="Doctinum"
              />
            </AppLink>

            <p className="max-w-[26ch] font-serif text-[24px] font-[600] leading-[1.25] text-[var(--color-text)]">
              {t('footer.tagline')}
            </p>
            <p className="max-w-[42ch] text-[13.5px] leading-[1.7] text-[var(--color-muted)]">
              {t('footer.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8 self-start max-[860px]:grid-cols-2 max-[520px]:grid-cols-1">
            {columns.map((column) => (
              <div key={column.title} className="flex flex-col gap-4">
                <p className="pb-1 text-[11px] font-[var(--w500)] uppercase tracking-[0.12em] text-[var(--color-action)]">
                  {column.title}
                </p>
                <div className="flex flex-col gap-3">
                  {column.links.map((link) => (
                    <AppLink
                      key={`${column.title}-${link.label}`}
                      page={link.page}
                      className={linkClassName}
                      onNavigate={onNavigate}
                    >
                      {link.label}
                    </AppLink>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {Array.isArray(soonItems) && soonItems.length ? (
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2">
            <p className="text-[11px] font-[var(--w500)] uppercase tracking-[0.12em] text-[var(--color-subtle)]">
              {t('footer.soonTitle')}
            </p>
            <p className="text-[13px] leading-[1.7] text-[var(--color-subtle)]">
              {soonItems.join(' · ')}
            </p>
          </div>
        ) : null}

        <div className="flex flex-wrap items-end justify-between gap-3 max-[700px]:flex-col max-[700px]:items-start">
          <p className="text-[12px] text-[var(--color-subtle)]">
            {t('footer.copyright')}
          </p>
          <button
            type="button"
            onClick={() => {
              if (typeof window !== 'undefined') {
                window.dispatchEvent(new CustomEvent('openCookiePreferences'));
              }
            }}
            className="cursor-pointer text-[12px] text-[var(--color-subtle)] transition-colors duration-200 ease-out hover:text-[var(--color-action)]"
          >
            {t('footer.manageCookies', 'Modifier mes préférences cookies')}
          </button>
        </div>
      </div>
    </footer>
  );
}
