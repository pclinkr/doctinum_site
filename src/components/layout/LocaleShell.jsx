'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import ThemeProvider from '../../theme/ThemeProvider';
import '../../i18n';
import LoaderScreen from './LoaderScreen';
import Navigation from './Navigation';
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
import { buildLocalizedPath, pageIdFromPathname } from '../../constants/routes';
import { normalizeLocale } from '../../constants/locales';
import i18n from '../../i18n';
import { SiteAppProvider } from '../../context/SiteAppContext';

function forceScrollTop() {
  const rootElement = document.documentElement;
  const previousInlineBehavior = rootElement.style.scrollBehavior;
  rootElement.style.scrollBehavior = 'auto';
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  rootElement.style.scrollBehavior = previousInlineBehavior;
}

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
  const currentPage = pageIdFromPathname(pathname, normalizedLocale);
  const isTransitioning = pageTransitionPhase !== 'idle';

  const loaderStage = useLoader();
  const isLoaderDone = loaderStage === 'done';
  const { isNavScrolled, isFloatingCtaVisible, navBlurProgress } =
    useScrollState();

  useRevealAnimation(currentPage);
  useKpiAnimation(currentPage);
  useReducedMotionMarquee();

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const syncPreference = () => setPrefersReducedMotion(mediaQuery.matches);
    syncPreference();
    mediaQuery.addEventListener('change', syncPreference);
    return () => mediaQuery.removeEventListener('change', syncPreference);
  }, []);

  useEffect(() => {
    i18n.changeLanguage(normalizedLocale);
  }, [normalizedLocale]);

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
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    forceScrollTop();
    const frameId = window.requestAnimationFrame(forceScrollTop);
    return () => {
      window.cancelAnimationFrame(frameId);
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'auto';
      }
    };
  }, [pathname]);

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

  const navigateToPage = (pageId) => {
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
  };

  const contextValue = {
    onNavigate: navigateToPage,
    storyStarted: isStorySliderStarted,
    hasLeftHomeOnce,
  };

  return (
    <ThemeProvider>
      <SiteAppProvider value={contextValue}>
        <LoaderScreen stage={loaderStage} />

        <div ref={navRef}>
          <Navigation
            currentPage={currentPage}
            isMenuOpen={isMobileMenuOpen}
            isScrolled={isNavScrolled}
            blurProgress={navBlurProgress}
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
        <FloatingCta
          visible={isFloatingCtaVisible && !isTransitioning}
          onNavigate={navigateToPage}
        />
        <CustomCursor />
        <CookieBanner onNavigate={navigateToPage} />
      </SiteAppProvider>
    </ThemeProvider>
  );
}
