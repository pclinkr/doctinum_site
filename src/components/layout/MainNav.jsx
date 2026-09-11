'use client';

import { useTranslation } from 'react-i18next';
import AppLink from '../ui/AppLink';
import Button from '../ui/Button';
import BrandWordmark from '../ui/BrandWordmark';
import LanguageSelector from '../ui/LanguageSelector';
import MobileNavOverlay from './MobileNavOverlay';

/**
 * Barre bento: un seul conteneur qui se resserre au défilement, logo ancré à
 * gauche et actions à droite. Le détail de la géométrie est dans main.css
 * (`.site-nav`), où la transition porte sur `max-width` et le rembourrage.
 *
 * Quatre entrées, un seul CTA. « Solutions » désigne l'accueil: la page EST
 * le récit de la solution, il n'y a pas de page séparée à lui opposer.
 */
export const NAV_ITEMS = [
  { id: 'solution', page: 'home', labelKey: 'mainNav.solution' },
  { id: 'security', page: 'security', labelKey: 'mainNav.security' },
  { id: 'vision', page: 'vision', labelKey: 'mainNav.vision' },
  { id: 'contact', page: 'contact', labelKey: 'mainNav.contact' },
];

export default function MainNav({
  currentPage,
  isMenuOpen,
  isScrolled,
  onToggleMenu,
  onCloseMenu,
  onNavigate,
}) {
  const { t } = useTranslation();

  /* Les liens ne s'effacent qu'au premier écran de la page-récit, dont la
     composition demande de l'air. Sur une page de contenu, une navigation
     qu'il faut faire défiler pour voir apparaître est une navigation
     manquante. */
  const revealsLinksOnScroll = currentPage === 'home';

  const handleItemClick = () => () => {
    onCloseMenu?.();
  };

  return (
    <>
      <header
        className={[
          'site-nav',
          isScrolled ? 'is-condensed' : '',
          revealsLinksOnScroll ? 'reveals-links-on-scroll' : '',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        <div className="site-nav-inner">
          <div className="site-nav-glass" aria-hidden="true" />

          <AppLink
            page="home"
            className="flex min-w-0 shrink items-center"
            aria-label={t('nav.home')}
            onClick={() => onCloseMenu?.()}
          >
            <BrandWordmark
              className="block h-[19px] w-auto min-[560px]:h-[26px]"
              color="var(--logo-normal)"
              symbolColor="var(--logo-normal)"
              alt="Doctinum"
            />
          </AppLink>

          <nav
            className="site-nav-links hidden min-[900px]:flex"
            aria-label={t('nav.mainMenu')}
          >
            {NAV_ITEMS.map((item) => {
              const isCurrent = currentPage === item.page;
              return (
                <AppLink
                  key={item.id}
                  page={item.page}
                  className="site-nav-link"
                  aria-current={isCurrent ? 'page' : undefined}
                  onClick={handleItemClick()}
                >
                  {t(item.labelKey)}
                </AppLink>
              );
            })}
          </nav>

          <div className="site-nav-actions">
            <LanguageSelector variant="dropdown" />

            <div className="hidden min-[560px]:block">
              <Button onClick={() => onNavigate('demo')}>
                {t('nav.bookDemo')}
              </Button>
            </div>

            <button
              type="button"
              onClick={onToggleMenu}
              aria-expanded={isMenuOpen}
              aria-controls="site-mobile-menu"
              aria-label={t('nav.mainMenu')}
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-[var(--color-text)] transition-colors duration-300 ease-out hover:bg-[var(--ink-06)] min-[900px]:hidden"
            >
              <span
                className="relative block h-[10px] w-[18px]"
                aria-hidden="true"
              >
                <span
                  className={`absolute left-0 h-[1.5px] w-full rounded-full bg-current transition-transform duration-300 ease-out ${isMenuOpen ? 'top-[4px] rotate-45' : 'top-0'}`}
                />
                <span
                  className={`absolute left-0 h-[1.5px] w-full rounded-full bg-current transition-transform duration-300 ease-out ${isMenuOpen ? 'top-[4px] -rotate-45' : 'top-[8px]'}`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <MobileNavOverlay
        navItems={NAV_ITEMS}
        isOpen={isMenuOpen}
        onClose={() => onCloseMenu?.()}
        onNavigate={onNavigate}
        onItemClick={handleItemClick}
        currentPage={currentPage}
      />
    </>
  );
}
