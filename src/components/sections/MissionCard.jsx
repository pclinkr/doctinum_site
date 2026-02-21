import BrandIcon from '../ui/BrandIcon';
import { useTranslation } from 'react-i18next';
import Card from '../ui/Card';
import Badge from '../ui/Badge';

export default function MissionCard() {
  const { t } = useTranslation();

  return (
    <Card className="mission-card rev">
      <div className="mission-badge"><BrandIcon stroke="var(--color-primary-contrast)" width={28} height={28} /></div>
      <Badge className="mission-label">{t('sections.mission.label')}</Badge>
      <h2 className="mission-h">{t('sections.mission.titlePrefix')} <span className="si">{t('sections.mission.titleAccent')}</span> {t('sections.mission.titleSuffix')}</h2>
      <div className="mission-body">
        <p>{t('sections.mission.body.0')}</p>
        <p>{t('sections.mission.body.1')}</p>
        <p>{t('sections.mission.body.2')}</p>
        <p>{t('sections.mission.body.3')}</p>
        <p>{t('sections.mission.body.4')}</p>
      </div>
      <div className="mission-logo"><div className="mission-logo-icon"><BrandIcon stroke="var(--color-primary-contrast)" width={12} height={12} /></div><span className="mission-logo-text">DOCTINUM</span></div>
    </Card>
  );
}
