import SectionHeading from '../SectionHeading';
import { useTranslation } from 'react-i18next';

export default function ProcessSection() {
  const { t } = useTranslation();

  return (
    <section className="sec" style={{ textAlign: 'center' }}>
      <SectionHeading className="rev" title={<>{t('sections.process.titlePrefix')} <span className="si">{t('sections.process.titleAccent')}</span> {t('sections.process.titleSuffix')}</>} style={{ marginBottom: '56px' }} />
      <div className="proc-grid rev">
        <div className="proc-card">
          <div className="proc-icon-wrapper">
            <div className="proc-icon"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg></div>
          </div>
          <div className="proc-content">
            <h3 className="proc-title">{t('sections.process.cards.0.title')}</h3>
            <p className="proc-body">{t('sections.process.cards.0.body')}</p>
          </div>
        </div>
        <div className="proc-card">
          <div className="proc-icon-wrapper">
            <div className="proc-icon"><svg viewBox="0 0 24 24"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4Z" /></svg></div>
          </div>
          <div className="proc-content">
            <h3 className="proc-title">{t('sections.process.cards.1.title')}</h3>
            <p className="proc-body">{t('sections.process.cards.1.body')}</p>
          </div>
        </div>
        <div className="proc-card">
          <div className="proc-icon-wrapper">
            <div className="proc-icon"><svg viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg></div>
          </div>
          <div className="proc-content">
            <h3 className="proc-title">{t('sections.process.cards.2.title')}</h3>
            <p className="proc-body">{t('sections.process.cards.2.body')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
