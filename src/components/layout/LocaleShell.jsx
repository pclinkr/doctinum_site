'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import { usePathname, useRouter } from 'next/navigation';
import ThemeProvider from '../../theme/ThemeProvider';
import LoaderScreen from './LoaderScreen';
import MainNav from './MainNav';
import SiteFooter from './SiteFooter';
import FloatingCta from './FloatingCta';
import CustomCursor from './CustomCursor';
import CookieBanner from '../ui/CookieBanner';
import {
  useKpiAnimation,
  useLoader,
  useReducedMotionMarquee,
  useRevealAnimation,
  useScrollState,
} from '../../hooks/useSiteEffects';
import useScrollRestorationGuard from '../../hooks/useScrollRestorationGuard';
import { buildLocalizedPath, pageIdFromPathname } from '../../constants/routes';
import { normalizeLocale } from '../../constants/locales';
import { getI18nInstance } from '../../i18n';
import { SiteAppProvider } from '../../context/SiteAppContext';

const PAGE_TRANSITION_EXIT_MS = 520;
const PAGE_TRANSITION_ENTER_MS = 620;

export default function LocaleShell({ locale, children }) {
  const router = useRouter();
  const pathname = usePathname();
  const navRef = useRef(null);
  const transitionTimerRef = useRef(null);
  const pendingPathRef = useRef(pathname);
  const previousPathRef = useRef(pathname);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isStorySliderStarted, setIsStorySliderStarted] = useState(false);
  const [hasLeftHomeOnce, setHasLeftHomeOnce] = useState(false);
  const [pageTransitionPhase, setPageTransitionPhase] = useState('idle');
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const normalizedLocale = normalizeLocale(locale);
  /* L'instance est choisie PENDANT le rendu, serveur compris: c'est ce qui
     fait que le HTML livré porte enfin la bonne langue. */
  const i18nInstance = useMemo(
    () => getI18nInstance(normalizedLocale),
    [normalizedLocale]
  );
  const currentPage = pageIdFromPathname(pathname, normalizedLocale);
  const isTransitioning = pageTransitionPhase !== 'idle';

  const loaderStage = useLoader();
  const isLoaderDone = loaderStage === 'done';
  const { isNavScrolled, isFloatingCtaVisible } = useScrollState();

  useRevealAnimation(currentPage);
  useKpiAnimation(currentPage);
  useReducedMotionMarquee();
  // L'accueil porte la narration au défilement: il est le seul à couper la
  // restauration native. Ailleurs, le retour arrière doit rendre sa position.
  useScrollRestorationGuard({
    pathname,
    isNarrativePage: currentPage === 'home',
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const syncPreference = () => setPrefersReducedMotion(mediaQuery.matches);
    syncPreference();
    mediaQuery.addEventListener('change', syncPreference);
    return () => mediaQuery.removeEventListener('change', syncPreference);
  }, []);

  useEffect(() => {
    if (!isLoaderDone) return undefined;
    const startTimerId = window.setTimeout(
      () => setIsStorySliderStarted(true),
      0
    );
    return () => window.clearTimeout(startTimerId);
  }, [isLoaderDone]);

  useEffect(() => {
    if (!isLoaderDone) return;
    if (currentPage !== 'home') {
      setHasLeftHomeOnce(true);
    }
  }, [currentPage, isLoaderDone]);

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (
        isMobileMenuOpen &&
        navRef.current &&
        !navRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleDocumentClick);
    return () => document.removeEventListener('click', handleDocumentClick);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (pageTransitionPhase !== 'exiting') return undefined;

    window.clearTimeout(transitionTimerRef.current);
    transitionTimerRef.current = window.setTimeout(() => {
      router.push(pendingPathRef.current);
    }, PAGE_TRANSITION_EXIT_MS);

    return () => window.clearTimeout(transitionTimerRef.current);
  }, [pageTransitionPhase, router]);

  useEffect(() => {
    if (pageTransitionPhase !== 'entering') return undefined;

    window.clearTimeout(transitionTimerRef.current);
    transitionTimerRef.current = window.setTimeout(() => {
      setPageTransitionPhase('idle');
    }, PAGE_TRANSITION_ENTER_MS);

    return () => window.clearTimeout(transitionTimerRef.current);
  }, [pageTransitionPhase]);

  useEffect(() => {
    const previousPath = previousPathRef.current;
    previousPathRef.current = pathname;
    if (previousPath === pathname) return;
    pendingPathRef.current = pathname;
    if (prefersReducedMotion) {
      setPageTransitionPhase('idle');
      return;
    }
    setPageTransitionPhase('entering');
  }, [pathname, prefersReducedMotion]);

  useEffect(() => {
    return () => window.clearTimeout(transitionTimerRef.current);
  }, []);

  /* Mémoïsé: recréée à chaque rendu, cette fonction changeait d'identité au
     moindre défilement et remontait tous les effets qui en dépendent. */
  const navigateToPage = useCallback(
    (pageId) => {
      setIsMobileMenuOpen(false);
      const targetPath = buildLocalizedPath(pageId, normalizedLocale);
      if (pathname === targetPath && pageTransitionPhase === 'idle') return;

      if (prefersReducedMotion) {
        pendingPathRef.current = targetPath;
        router.push(targetPath);
        return;
      }

      pendingPathRef.current = targetPath;
      if (pageTransitionPhase === 'idle') {
        setPageTransitionPhase('exiting');
      }
    },
    [
      normalizedLocale,
      pathname,
      pageTransitionPhase,
      prefersReducedMotion,
      router,
    ]
  );

  const contextValue = {
    onNavigate: navigateToPage,
    storyStarted: isStorySliderStarted,
    hasLeftHomeOnce,
    locale: normalizedLocale,
  };

  return (
    <I18nextProvider i18n={i18nInstance}>
      <ThemeProvider>
        <SiteAppProvider value={contextValue}>
          <LoaderScreen stage={loaderStage} />

          <div ref={navRef}>
            <MainNav
              currentPage={currentPage}
              isMenuOpen={isMobileMenuOpen}
              isScrolled={isNavScrolled}
              onToggleMenu={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
              onCloseMenu={() => setIsMobileMenuOpen(false)}
              onNavigate={navigateToPage}
            />
          </div>

          <div
            className={[
              'page-transition-layer',
              loaderStage === 'curtain' ? 'is-loader-reveal' : '',
              pageTransitionPhase === 'exiting' ? 'is-exiting' : '',
              pageTransitionPhase === 'entering' ? 'is-entering' : '',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            {children}
            <SiteFooter onNavigate={navigateToPage} />
          </div>
          {/* <FloatingCta
          visible={isFloatingCtaVisible && !isTransitioning}
          onNavigate={navigateToPage}
        /> */}
          <CustomCursor />
          <CookieBanner onNavigate={navigateToPage} />
        </SiteAppProvider>
      </ThemeProvider>
    </I18nextProvider>
  );
}
