import SectionHeading from '../SectionHeading';
import { useTranslation } from 'react-i18next';
import Card from '../../ui/Card';

export default function HomeServicesSection({ items }) {
  const { t } = useTranslation();

  return (
    <section className="sec" style={{ textAlign: 'center' }}>
      <SectionHeading className="rev" title={<>{t('sections.services.titlePrefix')} <span className="si">{t('sections.services.titleAccent')}</span></>} style={{ marginBottom: '56px' }} />
      <div className="help-grid">
        {items.map((item) => (
          <Card key={item.title} className={`help-card rev ${item.delayClass}`.trim()}>
            <div className="help-thumb" style={{ background: item.gradient }}>{item.emoji}</div>
            <h3 className="help-title">{item.title}</h3>
            <p className="help-body">{item.body}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
