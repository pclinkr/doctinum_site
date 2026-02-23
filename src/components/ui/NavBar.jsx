import { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from './Button';
import BrandWordmark from './BrandWordmark';
import LanguageSelector from './LanguageSelector';
import NavMegaMenu from './NavMegaMenu';
import { getNavItems } from '../../constants/navigation';

export default function NavBar({ currentPage, isMenuOpen, isScrolled, blurProgress = 0, onToggleMenu, onCloseMenu, onNavigate }) {
  const { t, i18n } = useTranslation();
  const isDev = process.env.NODE_ENV !== 'production';
  const navRef = useRef(null);
  const [openMegaId, setOpenMegaId] = useState('');
  const [isDesktopNav, setIsDesktopNav] = useState(false);
  const [openMobileMegaId, setOpenMobileMegaId] = useState('');
  const navItems = useMemo(() => getNavItems(t), [t, i18n.resolvedLanguage, i18n.language]);

  const openMegaMenu = useMemo(
    () => navItems.find((item) => item.id === openMegaId && item.megaMenu)?.megaMenu,
    [openMegaId, navItems]
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 810px)');

    const syncNavMode = () => {
      const desktopMode = mediaQuery.matches;
      setIsDesktopNav(desktopMode);
      if (!desktopMode) {
        setOpenMegaId('');
      }
    };

    syncNavMode();
    mediaQuery.addEventListener('change', syncNavMode);
    return () => mediaQuery.removeEventListener('change', syncNavMode);
  }, []);

  useEffect(() => {
    const closeOnOutsidePointer = (event) => {
      if (!navRef.current || navRef.current.contains(event.target)) return;
      setOpenMegaId('');
    };

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setOpenMegaId('');
    };

    document.addEventListener('pointerdown', closeOnOutsidePointer);
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.removeEventListener('pointerdown', closeOnOutsidePointer);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, []);

  useEffect(() => {
    setOpenMegaId('');
    setOpenMobileMegaId('');
  }, [currentPage]);

  useEffect(() => {
    const closeMegaOnScroll = () => {
      setOpenMegaId('');
    };

    window.addEventListener('scroll', closeMegaOnScroll, { passive: true });
    return () => window.removeEventListener('scroll', closeMegaOnScroll);
  }, []);

  const handleNavigate = (pageName) => {
    setOpenMegaId('');
    setOpenMobileMegaId('');
    onNavigate(pageName);
  };

  const handleDesktopItemClick = (item) => {
    if (item.megaMenu) {
      setOpenMegaId((currentId) => (currentId === item.id ? '' : item.id));
      return;
    }

    if (item.page) handleNavigate(item.page);
  };

  const handleDesktopItemHover = (item) => {
    if (!isDesktopNav) return;
    setOpenMegaId(item.megaMenu ? item.id : '');
  };

  const handleMobileItemClick = (item) => {
    if (item.megaMenu) {
      setOpenMobileMegaId((currentId) => (currentId === item.id ? '' : item.id));
      return;
    }

    if (item.page) handleNavigate(item.page);
  };

  return (
    <nav
      ref={navRef}
      className={`nav ${isMenuOpen ? 'open' : ''} ${isScrolled ? 'scrolled' : ''}`.trim()}
      id="mainNav"
      style={{ '--nav-scroll-progress': Math.min(1, Math.max(0, blurProgress)) }}
    >
      <div className="relative z-[3] mx-auto flex h-[var(--nav-h)] w-full max-w-[1200px] items-center px-16 max-[809px]:h-16 max-[809px]:max-w-none max-[809px]:justify-between max-[809px]:px-5">
        <div className="flex cursor-pointer items-center gap-[6px] shrink-0" onClick={() => handleNavigate('home')}>
          <BrandWordmark className="block h-6 w-auto" color="var(--logo-normal)" symbolColor="var(--logo-normal)" alt="Darkteam" />
        </div>
        <div className="flex h-full flex-1 items-center justify-end gap-5 max-[809px]:hidden" id="navLinks">
          {isDev ? (
            <button
              className={`inline-flex items-center gap-[6px] whitespace-nowrap text-sm font-medium leading-[21px] tracking-[-0.56px] text-[var(--color-primary)] transition-colors duration-150 ease-out cursor-pointer ${currentPage === 'styleguide' ? 'text-[var(--color-primary)]' : ''}`.trim()}
              type="button"
              onClick={() => handleNavigate('styleguide')}
              title="Open design system style guide"
            >
              Styleguide
            </button>
          ) : null}
          {navItems.map((item) => {
            const isActive = item.page === currentPage;
            const isOpen = item.id === openMegaId;
            return (
              <button
                key={item.id}
                className={`inline-flex items-center gap-[6px] whitespace-nowrap text-sm font-medium leading-[21px] tracking-[-0.56px] text-[var(--color-primary)] transition-colors duration-150 ease-out cursor-pointer ${isActive ? 'text-[var(--color-primary)]' : ''}`.trim()}
                type="button"
                aria-expanded={item.megaMenu ? isOpen : undefined}
                onMouseEnter={() => handleDesktopItemHover(item)}
                onClick={() => handleDesktopItemClick(item)}
              >
                {item.label}
                {item.megaMenu && (
                  <span className={`text-[10px] leading-none translate-y-px transition-all duration-150 ease-out ${isOpen ? 'rotate-180 opacity-100' : 'opacity-[0.62]'}`.trim()}>▾</span>
                )}
              </button>
            );
          })}
          <div onMouseEnter={() => setOpenMegaId('')}>
            <LanguageSelector />
          </div>
          <div onMouseEnter={() => setOpenMegaId('')}>
            <Button onClick={() => handleNavigate('contact')}>{t('nav.cta')}</Button>
          </div>
        </div>
        <button className="relative hidden h-[44px] w-[44px] shrink-0 items-center justify-center max-[809px]:flex" id="navBurger" aria-label={t('nav.mobileMenu')} aria-expanded={isMenuOpen} onClick={onToggleMenu} type="button">
          <span className={`absolute h-[2px] w-[20px] rounded-[2px] bg-[var(--color-primary)] transition-all duration-150 ease-out ${isMenuOpen ? 'top-[calc(50%-1px)] rotate-45' : 'top-[calc(42%-1px)]'}`.trim()} />
          <span className={`absolute h-[2px] w-[20px] rounded-[2px] bg-[var(--color-primary)] transition-all duration-150 ease-out ${isMenuOpen ? 'top-[calc(50%-1px)] -rotate-45' : 'top-[calc(58%-1px)]'}`.trim()} />
        </button>
      </div>
      <div className={`hidden w-full flex-col gap-[10px] overflow-hidden pb-6 transition-all duration-300 ease-out max-[809px]:flex ${isMenuOpen ? 'max-h-[620px] opacity-100' : 'max-h-0 opacity-0'}`.trim()} id="navDrawer">
        {isDev ? (
          <button className="flex w-full items-center justify-between gap-[10px] py-2 text-[15px] font-[var(--w500)] tracking-[var(--track)] text-[var(--color-primary)] transition-colors duration-150 ease-out cursor-pointer hover:text-[var(--subtle)]" type="button" onClick={() => handleNavigate('styleguide')}>
            <span>Styleguide</span>
          </button>
        ) : null}
        {navItems.map((item) => {
          const isOpen = openMobileMegaId === item.id;

          return (
            <div key={item.id} className="flex flex-col">
              <button className="flex w-full items-center justify-between gap-[10px] py-2 text-[15px] font-[var(--w500)] tracking-[var(--track)] text-[var(--color-primary)] transition-colors duration-150 ease-out cursor-pointer hover:text-[var(--subtle)]" type="button" onClick={() => handleMobileItemClick(item)}>
                <span>{item.label}</span>
                {item.megaMenu && <span className={`text-[11px] leading-none transition-all duration-150 ease-out ${isOpen ? 'rotate-180 opacity-100' : 'opacity-[0.62]'}`.trim()}>▾</span>}
              </button>

              {item.megaMenu && (
                <div className={`grid transition-all duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`.trim()}>
                  <div className="overflow-hidden">
                  {item.megaMenu.groups.map((group) => (
                    <div key={group.title} className="py-2 pl-3">
                      <p className="my-2 text-[11px] font-[var(--w500)] uppercase tracking-[0.07em] text-[var(--muted)]">{group.title}</p>
                      {group.links.map((link) => (
                        <button
                          key={link.label}
                          className={`flex w-full items-center justify-between py-2 text-left text-[13px] font-[var(--w500)] tracking-[var(--track)] text-[var(--color-primary)] ${link.isSoon ? 'cursor-not-allowed text-[var(--muted)]' : ''}`.trim()}
                          type="button"
                          onClick={() => link.page && handleNavigate(link.page)}
                          disabled={link.isSoon || !link.page}
                        >
                          <span>{link.label}</span>
                          {link.isSoon && <span className="text-[10px] uppercase tracking-[0.04em] text-[var(--muted)]">{t('megaMenu.soon')}</span>}
                        </button>
                      ))}
                    </div>
                  ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
        <div style={{ marginTop: '8px', marginBottom: '4px' }}>
          <LanguageSelector />
        </div>
        <Button onClick={() => handleNavigate('contact')} style={{ marginTop: '8px' }}>{t('nav.cta')}</Button>
      </div>
      <div className={`absolute left-1/2 top-full z-[25] w-screen -translate-x-1/2 pt-0 transition-opacity duration-200 ease-out max-[809px]:hidden ${openMegaMenu ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`.trim()} onMouseLeave={() => setOpenMegaId('')}>
        <NavMegaMenu menu={openMegaMenu} onNavigate={handleNavigate} />
      </div>
      {isMenuOpen && <button type="button" aria-label="Close menu" onClick={onCloseMenu} style={{ display: 'none' }} />}
    </nav>
  );
}
