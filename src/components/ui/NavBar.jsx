import { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from './Button';
import BrandWordmark from './BrandWordmark';
import LanguageSelector from './LanguageSelector';
import NavMegaMenu from './NavMegaMenu';
import { getNavItems } from '../../constants/navigation';

function getNavDensity(viewportWidth) {
  if (viewportWidth >= 1320) return 'compact1';
  if (viewportWidth >= 1180) return 'compact2';
  if (viewportWidth >= 1020) return 'compact3';
  return 'single';
}

export default function NavBar({ currentPage, isMenuOpen, isScrolled, blurProgress = 0, onToggleMenu, onCloseMenu, onNavigate }) {
  const { t, i18n } = useTranslation();
  const isDev = process.env.NODE_ENV !== 'production';
  const navRef = useRef(null);
  const [openMegaId, setOpenMegaId] = useState('');
  const [openMobileMegaId, setOpenMobileMegaId] = useState('');
  const [viewportWidth, setViewportWidth] = useState(1440);

  useEffect(() => {
    const syncViewport = () => setViewportWidth(window.innerWidth || 1440);
    syncViewport();
    window.addEventListener('resize', syncViewport);
    return () => window.removeEventListener('resize', syncViewport);
  }, []);

  const navDensity = useMemo(() => getNavDensity(viewportWidth), [viewportWidth]);
  const isDesktopNav = viewportWidth >= 810;
  const isDrawerMode = !isDesktopNav || navDensity === 'single';
  const navItems = useMemo(
    () => getNavItems(t, { density: navDensity }),
    [t, navDensity, i18n.resolvedLanguage, i18n.language]
  );

  const openMegaMenu = useMemo(
    () => navItems.find((item) => item.id === openMegaId && item.megaMenu)?.megaMenu,
    [openMegaId, navItems]
  );
  const mobileSections = useMemo(() => {
    if (navItems.length === 1 && navItems[0]?.id === 'mainMenu' && navItems[0]?.megaMenu) {
      const fullNavItems = getNavItems(t, { density: 'full' });
      return fullNavItems.map((item) => ({
        id: item.id,
        label: item.label,
        page: item.page,
        groups: item.megaMenu?.groups || [],
        links: [],
        hasMega: Boolean(item.megaMenu)
      }));
    }

    return navItems.map((item) => ({
      id: item.id,
      label: item.label,
      page: item.page,
      groups: item.megaMenu?.groups || [],
      links: [],
      hasMega: Boolean(item.megaMenu)
    }));
  }, [navItems]);

  useEffect(() => {
    if (isDesktopNav) return;
    setOpenMegaId('');
  }, [isDesktopNav]);

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
  }, [currentPage, navDensity]);

  useEffect(() => {
    const closeMegaOnScroll = () => setOpenMegaId('');
    window.addEventListener('scroll', closeMegaOnScroll, { passive: true });
    return () => window.removeEventListener('scroll', closeMegaOnScroll);
  }, []);

  useEffect(() => {
    if (!isDrawerMode || !isMenuOpen) {
      document.body.style.overflow = '';
      return undefined;
    }

    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isDrawerMode, isMenuOpen]);

  useEffect(() => {
    if (isDrawerMode) return;
    if (!isMenuOpen) return;
    onCloseMenu();
  }, [isDrawerMode, isMenuOpen, onCloseMenu]);

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
    if (!isDesktopNav || navDensity === 'single') return;
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
      {isDrawerMode ? (
        <div className="relative z-[3] flex h-[var(--nav-h)] w-full max-w-none items-center justify-between px-5">
          <div className="flex cursor-pointer items-center gap-[6px] shrink-0" onClick={() => handleNavigate('home')}>
            <BrandWordmark className="block h-6 w-auto" color="var(--logo-normal)" symbolColor="var(--logo-normal)" alt="Darkteam" />
          </div>
          <div className="ml-auto flex h-full items-center gap-3">
            <LanguageSelector
              key={`drawer-lang-${isMenuOpen}-${isDesktopNav ? 'desktop' : 'mobile'}`}
              variant={isDesktopNav ? 'dropdown' : 'mobile-panel'}
              onOpenChange={(isOpen) => {
                if (!isOpen) return;
                if (isDesktopNav) return;
                onCloseMenu();
              }}
            />
            <Button onClick={() => handleNavigate('contact')}>{t('nav.demo')}</Button>
            <button className="relative h-[44px] w-[44px] shrink-0 items-center justify-center flex" id="navBurger" aria-label={t('nav.mobileMenu')} aria-expanded={isMenuOpen} onClick={onToggleMenu} type="button">
              <span className={`absolute right-[12px] h-[2px] rounded-[2px] bg-[var(--color-primary)] transition-all duration-150 ease-out ${isMenuOpen ? 'top-[calc(50%-1px)] w-[20px] rotate-45' : 'top-[calc(40%-1px)] w-[14px]'}`.trim()} />
              <span className={`absolute right-[12px] h-[2px] rounded-[2px] bg-[var(--color-primary)] transition-all duration-150 ease-out ${isMenuOpen ? 'top-[calc(50%-1px)] w-[20px] -rotate-45' : 'top-[calc(58%-1px)] w-[20px]'}`.trim()} />
            </button>
          </div>
        </div>
      ) : (
        <div className="relative z-[3] mx-auto flex h-[var(--nav-h)] w-full max-w-[1280px] items-center px-6 min-[1100px]:px-10">
          <div className="flex cursor-pointer items-center gap-[6px] shrink-0 pr-3" onClick={() => handleNavigate('home')}>
            <BrandWordmark className="block h-6 w-auto" color="var(--logo-normal)" symbolColor="var(--logo-normal)" alt="Darkteam" />
          </div>
          <div className="flex h-full min-w-0 flex-1 items-center justify-center gap-3 px-2 min-[1000px]:gap-4 min-[1240px]:gap-5 min-[1000px]:px-4" id="navLinks">
            {navItems.map((item) => {
              const isActive = item.page === currentPage;
              const isOpen = item.id === openMegaId;
              return (
                <button
                  key={item.id}
                  className={`inline-flex items-center gap-[6px] whitespace-nowrap text-[13px] min-[1240px]:text-sm font-medium leading-[21px] tracking-[-0.04em] text-[var(--color-primary)] transition-colors duration-150 ease-out cursor-pointer ${isActive ? 'text-[var(--color-primary)]' : ''}`.trim()}
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
          </div>
          <div className="flex h-full shrink-0 items-center gap-2 min-[1240px]:gap-3">
            <div onMouseEnter={() => setOpenMegaId('')}>
              <LanguageSelector />
            </div>
            <div onMouseEnter={() => setOpenMegaId('')}>
              <Button variant="outline" onClick={() => handleNavigate('blog')}>
                {t('nav.try')}
              </Button>
            </div>
            <div onMouseEnter={() => setOpenMegaId('')}>
              <Button onClick={() => handleNavigate('contact')}>{t('nav.bookDemo')}</Button>
            </div>
          </div>
        </div>
      )}

      <div className={`${isDrawerMode ? 'flex' : 'hidden'} fixed inset-x-0 top-[var(--nav-h)] bottom-0 z-[55] w-full max-w-none flex-col border-t border-[var(--border)] bg-[var(--bg-overlay-95)] px-5 shadow-[0_18px_40px_var(--ink-16)] backdrop-blur-[12px] transition-all duration-300 ease-out ${isMenuOpen ? 'overflow-hidden opacity-100' : 'pointer-events-none overflow-hidden opacity-0'}`.trim()} id="navDrawer">
        <div className="sticky top-0 z-[2] -mx-5 border-b border-[var(--ink-08)] bg-[var(--bg-overlay-95)] px-5 py-3 backdrop-blur-[10px]">
          <p className="text-[12px] font-[var(--w500)] uppercase tracking-[0.08em] text-[var(--muted)]">{t('nav.mobileMenu')}</p>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain pt-2">
        <div className="flex flex-col">
        {mobileSections.map((section) => {
          const isOpen = openMobileMegaId === section.id;
          const hasNestedContent = Boolean(
            section.hasMega && (((section.groups || []).length > 0) || ((section.links || []).length > 0))
          );

          return (
            <div key={section.id} className="flex flex-col border-b border-[var(--ink-08)] py-1 last:border-b-0">
              <button
                className="flex w-full items-center justify-between gap-[10px] rounded-[12px] px-2 py-3 text-[15px] font-[var(--w500)] tracking-[var(--track)] text-[var(--color-primary)] transition-all duration-150 ease-out cursor-pointer hover:bg-[var(--ink-05)] hover:shadow-[inset_0_0_0_1px_var(--ink-08)]"
                type="button"
                onClick={() => {
                  if (!hasNestedContent && section.page) {
                    handleNavigate(section.page);
                    return;
                  }
                  setOpenMobileMegaId((currentId) => (currentId === section.id ? '' : section.id));
                }}
              >
                <span>{section.label}</span>
                {hasNestedContent && <span className={`text-[11px] leading-none transition-all duration-150 ease-out ${isOpen ? 'rotate-180 opacity-100' : 'opacity-[0.62]'}`.trim()}>▾</span>}
              </button>

              {hasNestedContent && (
                <div className={`grid transition-all duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] pb-2' : 'grid-rows-[0fr]'}`.trim()}>
                  <div className="overflow-hidden">
                    <div className="ml-3 border-l border-[var(--ink-08)] pl-3">
                      {(section.groups || []).map((group, groupIndex) => (
                        <div
                          key={group.title}
                          className={`${groupIndex > 0 ? 'mt-2 border-t border-[var(--ink-08)] pt-2' : ''}`.trim()}
                          style={isOpen ? { transitionDelay: `${groupIndex * 45}ms` } : undefined}
                        >
                          <p className="mb-1 text-[11px] font-[var(--w500)] tracking-[var(--track)] text-[var(--muted)]">{group.title}</p>
                          {group.links.map((link, linkIndex) => {
                            if (link.devOnly && !isDev) return null;
                            return (
                              <button
                                key={`${group.title}-${link.label}`}
                                className={`flex min-h-[44px] w-full items-center justify-between rounded-[10px] px-2 py-[10px] pr-2 text-left text-[13px] font-[var(--w500)] tracking-[var(--track)] text-[var(--color-primary)] transition-all duration-200 ease-out ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-1 opacity-0'} hover:bg-[var(--ink-05)] hover:shadow-[inset_0_0_0_1px_var(--ink-08)] ${link.isSoon ? 'cursor-not-allowed text-[var(--muted)]' : ''}`.trim()}
                                type="button"
                                onClick={() => link.page && handleNavigate(link.page)}
                                disabled={link.isSoon || !link.page}
                              >
                                <span>{link.label}</span>
                                {link.isSoon && <span className="text-[10px] uppercase tracking-[0.04em] text-[var(--muted)]">{t('megaMenu.soon')}</span>}
                              </button>
                            );
                          })}
                        </div>
                      ))}
                      {(section.links || []).map((link) => {
                        if (link.devOnly && !isDev) return null;
                        return (
                          <button
                            key={`${section.id}-${link.label}`}
                            className={`flex min-h-[44px] w-full items-center justify-between rounded-[10px] px-2 py-[10px] pr-2 text-left text-[13px] font-[var(--w500)] tracking-[var(--track)] text-[var(--color-primary)] transition-all duration-200 ease-out ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-1 opacity-0'} hover:bg-[var(--ink-05)] hover:shadow-[inset_0_0_0_1px_var(--ink-08)] ${link.isSoon ? 'cursor-not-allowed text-[var(--muted)]' : ''}`.trim()}
                            type="button"
                            onClick={() => link.page && handleNavigate(link.page)}
                            disabled={link.isSoon || !link.page}
                          >
                            <span>{link.label}</span>
                            {link.isSoon && <span className="text-[10px] uppercase tracking-[0.04em] text-[var(--muted)]">{t('megaMenu.soon')}</span>}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
        </div>
        </div>

        <div className="pointer-events-none z-[3] -mx-5 border-t border-[var(--ink-08)] bg-[var(--bg-overlay-95)] px-5 pb-4 pt-3 shadow-[0_-8px_20px_var(--ink-10)] backdrop-blur-[10px]">
          <div className="pointer-events-auto grid grid-cols-2 gap-2">
            <Button variant="outline" onClick={() => handleNavigate('blog')}>
              {t('nav.try')}
            </Button>
            <Button onClick={() => handleNavigate('contact')}>
              {t('nav.bookDemo')}
            </Button>
          </div>
        </div>
      </div>

      <div className={`absolute left-1/2 top-full z-[25] w-screen -translate-x-1/2 pt-0 transition-opacity duration-200 ease-out ${!isDrawerMode && openMegaMenu ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`.trim()} onMouseLeave={() => setOpenMegaId('')}>
        <NavMegaMenu menu={openMegaMenu} onNavigate={handleNavigate} isDev={isDev} />
      </div>
      {isMenuOpen && <button type="button" aria-label="Close menu" onClick={onCloseMenu} style={{ display: 'none' }} />}
    </nav>
  );
}
