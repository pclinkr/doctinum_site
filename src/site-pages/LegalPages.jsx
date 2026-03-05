import LegalNoticeContentSection from '../components/sections/page-sections/LegalNoticeContentSection';
import PrivacyPolicyContentSection from '../components/sections/page-sections/PrivacyPolicyContentSection';
import CookiesPolicyContentSection from '../components/sections/page-sections/CookiesPolicyContentSection';

export function LegalNoticePage({ active }) {
  return (
    <div id="page-legal-notice" className={`page ${active ? 'active' : ''}`.trim()}>
      <LegalNoticeContentSection />
    </div>
  );
}

export function PrivacyPolicyPage({ active }) {
  return (
    <div id="page-privacy-policy" className={`page ${active ? 'active' : ''}`.trim()}>
      <PrivacyPolicyContentSection />
    </div>
  );
}

export function CookiesPolicyPage({ active }) {
  return (
    <div id="page-cookies-policy" className={`page ${active ? 'active' : ''}`.trim()}>
      <CookiesPolicyContentSection />
    </div>
  );
}
