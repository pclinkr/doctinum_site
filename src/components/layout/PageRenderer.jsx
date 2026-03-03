'use client';

import { BlogPage, BlogPostPage } from '../../site-pages/BlogPages';
import HomePage from '../../site-pages/HomePage';
import AboutPage from '../../site-pages/AboutPage';
import CaseStudiesPage from '../../site-pages/CaseStudiesPage';
import CaseDetailPage from '../../site-pages/CaseDetailPage';
import SurgeryAestheticPage from '../../site-pages/SurgeryAestheticPage';
import SportsMedicinePage from '../../site-pages/SportsMedicinePage';
import DermatologyPage from '../../site-pages/DermatologyPage';
import { ContactPage, NotFoundPage, PrivacyPage } from '../../site-pages/ContactPrivacy404Pages';
import { useSiteAppContext } from '../../context/SiteAppContext';
import { SolutionNavigationProvider } from '../../context/SolutionNavigationContext';
import { SOLUTIONS_SEQUENCE } from '../../constants/solutions';

// Composant wrapper pour les pages solutions
function SolutionPageWrapper({ pageId, children, onNavigate }) {
  return (
    <SolutionNavigationProvider currentSolution={pageId} solutions={SOLUTIONS_SEQUENCE}>
      {children}
    </SolutionNavigationProvider>
  );
}

export default function PageRenderer({ pageId }) {
  const { onNavigate, storyStarted, hasLeftHomeOnce } = useSiteAppContext();

  // Vérifier si c'est une page solution
  const isSolutionPage = SOLUTIONS_SEQUENCE.some(sol => sol.pageId === pageId);

  if (pageId === 'home') {
    return <HomePage active onNavigate={onNavigate} storyStarted={storyStarted} instantHero={hasLeftHomeOnce} />;
  }

  if (pageId === 'about') {
    return <AboutPage active onNavigate={onNavigate} />;
  }

  if (pageId === 'case-studies') {
    return <CaseStudiesPage active onNavigate={onNavigate} />;
  }

  if (pageId === 'case-detail') {
    return <CaseDetailPage active onNavigate={onNavigate} />;
  }

  if (pageId === 'surgery-aesthetic') {
    return (
      <SolutionPageWrapper pageId="surgery-aesthetic" onNavigate={onNavigate}>
        <SurgeryAestheticPage active onNavigate={onNavigate} />
      </SolutionPageWrapper>
    );
  }

  if (pageId === 'sports-medicine') {
    return (
      <SolutionPageWrapper pageId="sports-medicine" onNavigate={onNavigate}>
        <SportsMedicinePage active onNavigate={onNavigate} />
      </SolutionPageWrapper>
    );
  }

  if (pageId === 'dermatology') {
    return (
      <SolutionPageWrapper pageId="dermatology" onNavigate={onNavigate}>
        <DermatologyPage active onNavigate={onNavigate} />
      </SolutionPageWrapper>
    );
  }

  if (pageId === 'blog') {
    return <BlogPage active onNavigate={onNavigate} />;
  }

  if (pageId === 'blog-post') {
    return <BlogPostPage active onNavigate={onNavigate} />;
  }

  if (pageId === 'contact') {
    return <ContactPage active onNavigate={onNavigate} />;
  }

  if (pageId === 'privacy') {
    return <PrivacyPage active onNavigate={onNavigate} />;
  }

  return <NotFoundPage active onNavigate={onNavigate} />;
}
