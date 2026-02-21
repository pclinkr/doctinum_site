import { useTranslation } from 'react-i18next';
import ContactFaqSection from '../components/sections/page-sections/ContactFaqSection';
import ContactFormSection from '../components/sections/page-sections/ContactFormSection';
import NotFoundSection from '../components/sections/page-sections/NotFoundSection';
import PrivacyContentSection from '../components/sections/page-sections/PrivacyContentSection';
import { getContactFaqItems } from '../constants/content';
import { getSocialProofText } from '../constants/site';

export function ContactPage({ active }) {
  const { t } = useTranslation();
  const contactFaqItems = getContactFaqItems(t);
  const socialProofText = getSocialProofText(t);

  return (
    <div id="page-contact" className={`page ${active ? 'active' : ''}`.trim()}>
      <ContactFormSection socialProofText={socialProofText} />
      <ContactFaqSection items={contactFaqItems} />
    </div>
  );
}

export function PrivacyPage({ active }) {
  return (
    <div id="page-privacy" className={`page ${active ? 'active' : ''}`.trim()}>
      <PrivacyContentSection />
    </div>
  );
}

export function NotFoundPage({ active, onNavigate }) {
  return (
    <div id="page-404" className={`page ${active ? 'active' : ''}`.trim()}>
      <NotFoundSection onNavigate={onNavigate} />
    </div>
  );
}
