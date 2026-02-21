import SectionHeading from '../SectionHeading';
import { useTranslation } from 'react-i18next';
import Badge from '../../ui/Badge';

export default function WhyChooseSection() {
  const { t } = useTranslation();

  return (
    <section className="sec" style={{ textAlign: 'center' }}>
      <SectionHeading className="rev" title={<>{t('sections.whyChoose.titlePrefix')}<br />{t('sections.whyChoose.titleMiddle')} <span className="si">{t('sections.whyChoose.titleAccent')}</span> {t('sections.whyChoose.titleSuffix')}</>} style={{ marginBottom: '48px' }} />
      <div className="why-grid rev">
        <div className="why-col">
          <div className="why-col-title">{t('sections.whyChoose.otherTitle')}</div>
          <div className="why-item"><span className="why-dot no-dot"><svg viewBox="0 0 10 10" stroke="currentColor" strokeWidth="2" fill="none"><line x1="2" y1="2" x2="8" y2="8" /><line x1="8" y1="2" x2="2" y2="8" /></svg></span>{t('sections.whyChoose.otherItems.0')}</div>
          <div className="why-item"><span className="why-dot no-dot"><svg viewBox="0 0 10 10" stroke="currentColor" strokeWidth="2" fill="none"><line x1="2" y1="2" x2="8" y2="8" /><line x1="8" y1="2" x2="2" y2="8" /></svg></span>{t('sections.whyChoose.otherItems.1')}</div>
          <div className="why-item"><span className="why-dot no-dot"><svg viewBox="0 0 10 10" stroke="currentColor" strokeWidth="2" fill="none"><line x1="2" y1="2" x2="8" y2="8" /><line x1="8" y1="2" x2="2" y2="8" /></svg></span>{t('sections.whyChoose.otherItems.2')}</div>
          <div className="why-item"><span className="why-dot no-dot"><svg viewBox="0 0 10 10" stroke="currentColor" strokeWidth="2" fill="none"><line x1="2" y1="2" x2="8" y2="8" /><line x1="8" y1="2" x2="2" y2="8" /></svg></span>{t('sections.whyChoose.otherItems.3')}</div>
        </div>
        <div className="why-col">
          <Badge className="why-badge">DOCTINUM</Badge>
          <div className="why-col-title">{t('sections.whyChoose.brandTitle')}</div>
          <div className="why-item yes"><span className="why-dot yes-dot"><svg viewBox="0 0 10 10" stroke="#fff" strokeWidth="2.5" fill="none"><polyline points="2,5 4.5,7.5 8,2.5" /></svg></span>{t('sections.whyChoose.brandItems.0')}</div>
          <div className="why-item yes"><span className="why-dot yes-dot"><svg viewBox="0 0 10 10" stroke="#fff" strokeWidth="2.5" fill="none"><polyline points="2,5 4.5,7.5 8,2.5" /></svg></span>{t('sections.whyChoose.brandItems.1')}</div>
          <div className="why-item yes"><span className="why-dot yes-dot"><svg viewBox="0 0 10 10" stroke="#fff" strokeWidth="2.5" fill="none"><polyline points="2,5 4.5,7.5 8,2.5" /></svg></span>{t('sections.whyChoose.brandItems.2')}</div>
          <div className="why-item yes"><span className="why-dot yes-dot"><svg viewBox="0 0 10 10" stroke="#fff" strokeWidth="2.5" fill="none"><polyline points="2,5 4.5,7.5 8,2.5" /></svg></span>{t('sections.whyChoose.brandItems.3')}</div>
        </div>
      </div>
    </section>
  );
}
