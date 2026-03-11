'use client';

import { useTranslation } from 'react-i18next';
import { BlogPage, BlogPostPage } from '../../site-pages/BlogPages';
import HomePage from '../../site-pages/HomePage';
import AboutPage from '../../site-pages/AboutPage';
import CaseStudiesPage from '../../site-pages/CaseStudiesPage';
import CaseDetailPage from '../../site-pages/CaseDetailPage';
import SurgeryAestheticPage from '../../site-pages/SurgeryAestheticPage';
import RhinoplastyPage from '../../site-pages/RhinoplastyPage';
import LiposuctionPage from '../../site-pages/LiposuctionPage';
import HyaluronicInjectionPage from '../../site-pages/HyaluronicInjectionPage';
import SportsMedicinePage from '../../site-pages/SportsMedicinePage';
import IntegratedCentersPage from '../../site-pages/IntegratedCentersPage';
import DermatologyPage from '../../site-pages/DermatologyPage';
import PromsPage from '../../site-pages/PromsPage';
import PatientSupportProgramsPage from '../../site-pages/PatientSupportProgramsPage';
import EditorsApiPage from '../../site-pages/EditorsApiPage';
import PreventionWorkHealthPage from '../../site-pages/PreventionWorkHealthPage';
import {
  ContactPage,
  NotFoundPage,
  PrivacyPage,
} from '../../site-pages/ContactPrivacy404Pages';
import {
  LegalNoticePage,
  PrivacyPolicyPage,
  CookiesPolicyPage,
} from '../../site-pages/LegalPages';
import { useSiteAppContext } from '../../context/SiteAppContext';

export default function PageRenderer({ pageId }) {
  const { t } = useTranslation();
  const { onNavigate, storyStarted, hasLeftHomeOnce } = useSiteAppContext();

  if (pageId === 'home') {
    return (
      <HomePage
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

  if (pageId === 'surgery-aesthetic') {
    return <SurgeryAestheticPage active onNavigate={onNavigate} />;
  }

  if (pageId === 'surgery-rhinoplasty') {
    return <RhinoplastyPage active onNavigate={onNavigate} />;
  }

  if (pageId === 'surgery-liposuction') {
    return <LiposuctionPage active onNavigate={onNavigate} />;
  }

  if (pageId === 'surgery-hyaluronic-injection') {
    return <HyaluronicInjectionPage active onNavigate={onNavigate} />;
  }

  if (pageId === 'sports-medicine') {
    return <SportsMedicinePage active onNavigate={onNavigate} />;
  }

  if (pageId === 'sports-integrated-centers') {
    return <IntegratedCentersPage active onNavigate={onNavigate} />;
  }

  if (pageId === 'dermatology') {
    return <DermatologyPage active onNavigate={onNavigate} />;
  }

  if (pageId === 'proms') {
    return <PromsPage active onNavigate={onNavigate} />;
  }

  if (pageId === 'patient-support-programs') {
    return <PatientSupportProgramsPage active onNavigate={onNavigate} />;
  }

  if (pageId === 'editors-api') {
    return <EditorsApiPage active onNavigate={onNavigate} />;
  }

  if (pageId === 'prevention-workplace-health') {
    return <PreventionWorkHealthPage active onNavigate={onNavigate} />;
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

  if (pageId === 'legal-notice') {
    return <LegalNoticePage active onNavigate={onNavigate} />;
  }

  if (pageId === 'privacy-policy') {
    return <PrivacyPolicyPage active onNavigate={onNavigate} />;
  }

  if (pageId === 'cookies-policy') {
    return <CookiesPolicyPage active onNavigate={onNavigate} />;
  }

  return <NotFoundPage active onNavigate={onNavigate} />;
}
