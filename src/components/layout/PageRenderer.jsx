'use client';

import { BlogPage, BlogPostPage } from '../../site-pages/BlogPages';
import HomePage2 from '../../site-pages/HomePage2';
import AboutPage from '../../site-pages/AboutPage';
import CaseStudiesPage from '../../site-pages/CaseStudiesPage';
import CaseDetailPage from '../../site-pages/CaseDetailPage';
import EditorsApiPage from '../../site-pages/EditorsApiPage';
import VisionPage from '../../site-pages/VisionPage';
import SecurityPage from '../../site-pages/SecurityPage';
import {
  ContactPage,
  NotFoundPage,
  PrivacyPage,
} from '../../site-pages/ContactPrivacy404Pages';
import DemoPage from '../../site-pages/DemoPage';
import {
  LegalNoticePage,
  PrivacyPolicyPage,
  CookiesPolicyPage,
} from '../../site-pages/LegalPages';
import { useSiteAppContext } from '../../context/SiteAppContext';

export default function PageRenderer({ pageId }) {
  const { onNavigate, storyStarted, hasLeftHomeOnce } = useSiteAppContext();

  if (pageId === 'home') {
    return (
      <HomePage2
        active
        onNavigate={onNavigate}
        storyStarted={storyStarted}
        instantHero={hasLeftHomeOnce}
      />
    );
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

  if (pageId === 'editors-api') {
    return <EditorsApiPage active onNavigate={onNavigate} />;
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

  if (pageId === 'demo') {
    return <DemoPage active onNavigate={onNavigate} />;
  }

  if (pageId === 'privacy') {
    return <PrivacyPage active onNavigate={onNavigate} />;
  }

  if (pageId === 'legal-notice') {
    return <LegalNoticePage active onNavigate={onNavigate} />;
  }

  if (pageId === 'privacy-policy') {
    return <PrivacyPolicyPage active onNavigate={onNavigate} />;
  }

  if (pageId === 'cookies-policy') {
    return <CookiesPolicyPage active onNavigate={onNavigate} />;
  }

  if (pageId === 'vision') {
    return <VisionPage active onNavigate={onNavigate} />;
  }

  if (pageId === 'security') {
    return <SecurityPage active onNavigate={onNavigate} />;
  }

  return <NotFoundPage active onNavigate={onNavigate} />;
}
