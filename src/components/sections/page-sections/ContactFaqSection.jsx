import BrandIcon from '../../ui/BrandIcon';
import FaqAccordion from '../../ui/FaqAccordion';
import Card from '../../ui/Card';
import Badge from '../../ui/Badge';
import { useTranslation } from 'react-i18next';

export default function ContactFaqSection({ items }) {
  const { t } = useTranslation();

  return (
    <div className="contact-faq">
      <div />
      <Card className="contact-faq-card rev">
        <div className="contact-faq-badge"><BrandIcon stroke="var(--text-primary)" width={24} height={24} /></div>
        <Badge className="contact-faq-label">{t('sections.faq.label')}</Badge>
        <h2 className="contact-faq-h">{t('sections.faq.title')}</h2>
        <FaqAccordion items={items} />
      </Card>
    </div>
  );
}
