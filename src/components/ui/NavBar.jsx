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
      <div className="nav-logo-row">
        <div className="nav-logo" onClick={() => handleNavigate('home')}>
          <BrandWordmark className="nav-logo-wordmark" color="var(--logo-normal)" symbolColor="var(--logo-normal)" alt="Darkteam" />
        </div>
        <div className="nav-links" id="navLinks">
          {isDev ? (
            <button
              className={`nav-link ${currentPage === 'styleguide' ? 'active-link' : ''}`.trim()}
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
                className={`nav-link ${isActive ? 'active-link' : ''} ${item.megaMenu ? 'has-mega' : ''} ${isOpen ? 'open' : ''}`.trim()}
                type="button"
                aria-expanded={item.megaMenu ? isOpen : undefined}
                onMouseEnter={() => handleDesktopItemHover(item)}
                onClick={() => handleDesktopItemClick(item)}
              >
                {item.label}
                {item.megaMenu && <span className="nav-link-caret">▾</span>}
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
        <button className="nav-burger" id="navBurger" aria-label={t('nav.mobileMenu')} aria-expanded={isMenuOpen} onClick={onToggleMenu} type="button">
          <span className="nav-bar nav-bar-top" />
          <span className="nav-bar nav-bar-bot" />
        </button>
      </div>
      <div className="nav-drawer" id="navDrawer">
        {isDev ? (
          <button className="nav-drawer-link" type="button" onClick={() => handleNavigate('styleguide')}>
            <span>Styleguide</span>
          </button>
        ) : null}
        {navItems.map((item) => {
          const isOpen = openMobileMegaId === item.id;

          return (
            <div key={item.id} className={`nav-drawer-item ${isOpen ? 'open' : ''}`.trim()}>
              <button className={`nav-drawer-link ${item.megaMenu ? 'has-mega' : ''}`.trim()} type="button" onClick={() => handleMobileItemClick(item)}>
                <span>{item.label}</span>
                {item.megaMenu && <span className="nav-drawer-caret">▾</span>}
              </button>

              {item.megaMenu && (
                <div className={`nav-drawer-sub ${isOpen ? 'open' : ''}`.trim()}>
                  {item.megaMenu.groups.map((group) => (
                    <div key={group.title} className="nav-drawer-sub-group">
                      <p className="nav-drawer-sub-title">{group.title}</p>
                      {group.links.map((link) => (
                        <button
                          key={link.label}
                          className={`nav-drawer-sub-link ${link.isSoon ? 'is-soon' : ''}`.trim()}
                          type="button"
                          onClick={() => link.page && handleNavigate(link.page)}
                          disabled={link.isSoon || !link.page}
                        >
                          <span>{link.label}</span>
                          {link.isSoon && <span className="nav-drawer-sub-badge">{t('megaMenu.soon')}</span>}
                        </button>
                      ))}
                    </div>
                  ))}
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
      <div className={`mega-panel-shell ${openMegaMenu ? 'open' : ''}`.trim()} onMouseLeave={() => setOpenMegaId('')}>
        <NavMegaMenu menu={openMegaMenu} onNavigate={handleNavigate} />
      </div>
      {isMenuOpen && <button type="button" aria-label="Close menu" onClick={onCloseMenu} style={{ display: 'none' }} />}
    </nav>
  );
}
