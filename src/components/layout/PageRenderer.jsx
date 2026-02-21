'use client';

import { BlogPage, BlogPostPage } from '../../site-pages/BlogPages';
import HomePage from '../../site-pages/HomePage';
import AboutPage from '../../site-pages/AboutPage';
import CaseStudiesPage from '../../site-pages/CaseStudiesPage';
import CaseDetailPage from '../../site-pages/CaseDetailPage';
import { ContactPage, NotFoundPage, PrivacyPage } from '../../site-pages/ContactPrivacy404Pages';
import { useSiteAppContext } from '../../context/SiteAppContext';

export default function PageRenderer({ pageId }) {
  const { onNavigate, storyStarted, hasLeftHomeOnce } = useSiteAppContext();

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
