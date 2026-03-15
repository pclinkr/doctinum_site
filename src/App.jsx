import { useEffect, useRef, useState } from 'react';
import LoaderScreen from './components/layout/LoaderScreen';
import Navigation from './components/layout/Navigation';
import SiteFooter from './components/layout/SiteFooter';
import FloatingCta from './components/layout/FloatingCta';
import CustomCursor from './components/layout/CustomCursor';
import { BlogPage, BlogPostPage } from './site-pages/BlogPages';
import HomePage from './site-pages/HomePage';
import AboutPage from './site-pages/AboutPage';
import CaseStudiesPage from './site-pages/CaseStudiesPage';
import CaseDetailPage from './site-pages/CaseDetailPage';
import {
  ContactPage,
  NotFoundPage,
  PrivacyPage,
} from './site-pages/ContactPrivacy404Pages';
import { PAGE_IDS } from './constants/pages';
import {
  useKpiAnimation,
  useLoader,
  useReducedMotionMarquee,
  useRevealAnimation,
  useScrollState,
} from './hooks/useSiteEffects';

const PAGE_TRANSITION_EXIT_MS = 520;
const PAGE_TRANSITION_ENTER_MS = 620;

function forceScrollTop() {
  const rootElement = document.documentElement;
  const previousInlineBehavior = rootElement.style.scrollBehavior;
  rootElement.style.scrollBehavior = 'auto';
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  rootElement.style.scrollBehavior = previousInlineBehavior;
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [pageTransitionPhase, setPageTransitionPhase] = useState('idle');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isStorySliderStarted, setIsStorySliderStarted] = useState(false);
  const [hasLeftHomeOnce, setHasLeftHomeOnce] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const navRef = useRef(null);
  const transitionTimerRef = useRef(null);
  const pendingPageRef = useRef('home');

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
    forceScrollTop();
    const frameId = window.requestAnimationFrame(forceScrollTop);
    return () => window.cancelAnimationFrame(frameId);
  }, [currentPage]);

  useEffect(() => {
    if (pageTransitionPhase !== 'exiting') return undefined;

    window.clearTimeout(transitionTimerRef.current);
    transitionTimerRef.current = window.setTimeout(() => {
      const nextPage = pendingPageRef.current;
      setCurrentPage(nextPage);
      setPageTransitionPhase('entering');
    }, PAGE_TRANSITION_EXIT_MS);

    return () => window.clearTimeout(transitionTimerRef.current);
  }, [pageTransitionPhase]);

  useEffect(() => {
    if (pageTransitionPhase !== 'entering') return undefined;

    window.clearTimeout(transitionTimerRef.current);
    transitionTimerRef.current = window.setTimeout(() => {
      if (pendingPageRef.current !== currentPage) {
        setPageTransitionPhase('exiting');
        return;
      }

      setPageTransitionPhase('idle');
      pendingPageRef.current = currentPage;
    }, PAGE_TRANSITION_ENTER_MS);

    return () => window.clearTimeout(transitionTimerRef.current);
  }, [pageTransitionPhase, currentPage]);

  useEffect(() => {
    return () => window.clearTimeout(transitionTimerRef.current);
  }, []);

  const navigateToPage = (pageName) => {
    const targetPage = PAGE_IDS.includes(pageName) ? pageName : '404';
    setIsMobileMenuOpen(false);

    if (targetPage === currentPage && pageTransitionPhase === 'idle') return;
    pendingPageRef.current = targetPage;

    if (prefersReducedMotion) {
      setCurrentPage(targetPage);
      setPageTransitionPhase('idle');
      return;
    }

    if (pageTransitionPhase === 'idle') {
      setPageTransitionPhase('exiting');
    }
  };

  const pageTransitionClassName = [
    'page-transition-layer',
    loaderStage === 'curtain' ? 'is-loader-reveal' : '',
    pageTransitionPhase === 'exiting' ? 'is-exiting' : '',
    pageTransitionPhase === 'entering' ? 'is-entering' : '',
  ]
    .filter(Boolean)
    .join(' ');

  const isTransitioning = pageTransitionPhase !== 'idle';

  return (
    <>
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

      <div className={pageTransitionClassName}>
        <HomePage
          active={currentPage === 'home'}
          onNavigate={navigateToPage}
          storyStarted={isStorySliderStarted}
          instantHero={hasLeftHomeOnce}
        />
        <AboutPage
          active={currentPage === 'about'}
          onNavigate={navigateToPage}
        />
        <CaseStudiesPage
          active={currentPage === 'case-studies'}
          onNavigate={navigateToPage}
        />
        <CaseDetailPage
          active={currentPage === 'case-detail'}
          onNavigate={navigateToPage}
        />
        <BlogPage active={currentPage === 'blog'} onNavigate={navigateToPage} />
        <BlogPostPage
          active={currentPage === 'blog-post'}
          onNavigate={navigateToPage}
        />
        <ContactPage
          active={currentPage === 'contact'}
          onNavigate={navigateToPage}
        />
        <PrivacyPage
          active={currentPage === 'privacy'}
          onNavigate={navigateToPage}
        />
        <NotFoundPage
          active={currentPage === '404'}
          onNavigate={navigateToPage}
        />

        <SiteFooter onNavigate={navigateToPage} />
      </div>

      {/* <FloatingCta
        visible={isFloatingCtaVisible && !isTransitioning}
        onNavigate={navigateToPage}
      /> */}
      <CustomCursor />
    </>
  );
}
