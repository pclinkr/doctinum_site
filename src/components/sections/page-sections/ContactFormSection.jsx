import Button from '../../ui/Button';
import SocialProofRow from '../SocialProofRow';
import { useTranslation } from 'react-i18next';
import TextInput from '../../ui/TextInput';
import TextArea from '../../ui/TextArea';
import Badge from '../../ui/Badge';

export default function ContactFormSection({ socialProofText }) {
  const { t } = useTranslation();

  return (
    <div className="contact-grid">
      <div className="contact-left rev"><Badge className="page-badge">{t('contactForm.badge')}</Badge><h1 className="contact-h ds-text-h1">{t('contactForm.titleLine1')}<br />{t('contactForm.titleLine2')}</h1><p className="contact-sub">{t('contactForm.subtitle')}</p><SocialProofRow style={{ marginTop: '24px' }} initials={['S', 'J', 'M', 'A', '+']} text={socialProofText} /></div>
      <div className="contact-form rev">
        <div className="form-group"><label className="form-label">{t('contactForm.nameLabel')} <sup>*</sup></label><TextInput placeholder={t('contactForm.namePlaceholder')} /></div>
        <div className="form-group"><label className="form-label">{t('contactForm.emailLabel')} <sup>*</sup></label><TextInput type="email" placeholder={t('contactForm.emailPlaceholder')} /></div>
        <div className="form-group"><label className="form-label">{t('contactForm.servicesLabel')}</label><div className="form-radio-group"><label className="form-radio"><input type="radio" name="service" className="form-radio-input" defaultChecked /> <span className="form-radio-label">{t('contactForm.services.contentCreation')}</span></label><label className="form-radio"><input type="radio" name="service" className="form-radio-input" /> <span className="form-radio-label">{t('contactForm.services.socialManagement')}</span></label><label className="form-radio"><input type="radio" name="service" className="form-radio-input" /> <span className="form-radio-label">{t('contactForm.services.paidMedia')}</span></label><label className="form-radio"><input type="radio" name="service" className="form-radio-input" /> <span className="form-radio-label">{t('contactForm.services.all')}</span></label></div></div>
        <div className="form-group"><label className="form-label">{t('contactForm.budgetLabel')}</label><div className="form-radio-group"><label className="form-radio"><input type="radio" name="budget" className="form-radio-input" defaultChecked /> <span className="form-radio-label">{t('contactForm.budgets.under2k')}</span></label><label className="form-radio"><input type="radio" name="budget" className="form-radio-input" /> <span className="form-radio-label">{t('contactForm.budgets.between2k5k')}</span></label><label className="form-radio"><input type="radio" name="budget" className="form-radio-input" /> <span className="form-radio-label">{t('contactForm.budgets.between5k10k')}</span></label><label className="form-radio"><input type="radio" name="budget" className="form-radio-input" /> <span className="form-radio-label">{t('contactForm.budgets.over10k')}</span></label></div></div>
        <div className="form-group"><label className="form-label">{t('contactForm.businessLabel')} <sup>*</sup></label><TextArea placeholder={t('contactForm.businessPlaceholder')} /></div>
        <Button fullWidth size="lg" style={{ fontSize: '15px' }} type="button">{t('contactForm.submit')}</Button>
      </div>
    </div>
  );
}
