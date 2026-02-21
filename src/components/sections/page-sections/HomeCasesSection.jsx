import Button from '../../ui/Button';
import CaseRow from '../CaseRow';
import { useTranslation } from 'react-i18next';

export default function HomeCasesSection({ onNavigate }) {
  const { t } = useTranslation();

  return (
    <section className="sec" id="homeCase">
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '24px', marginBottom: '44px', flexWrap: 'wrap' }} className="rev">
        <div><p className="sec-label">{t('sections.homeCases.label')}</p><h2 className="sec-h">{t('sections.homeCases.titlePrefix')} <span className="si">{t('sections.homeCases.titleAccent')}</span></h2></div>
        <Button variant="outline" onClick={() => onNavigate('case-studies')} style={{ flexShrink: 0 }}>{t('sections.homeCases.viewAll')}</Button>
      </div>
      <CaseRow
        onNavigate={onNavigate}
        navigateTo="case-detail"
        imagePosition="right"
        imageGradient="linear-gradient(135deg,#f5c5a8,#e8a090,#d48880)"
        brand="Glowhaus"
        tag={t('sections.homeCases.case1.tag')}
        titlePrefix={t('sections.homeCases.case1.titlePrefix')}
        titleAccent={t('sections.homeCases.case1.titleAccent')}
        body={t('sections.homeCases.case1.body')}
        kpis={[
          { target: 128, suffix: 'K', label: t('sections.homeCases.case1.kpi1') },
          { target: 245, suffix: '%', label: t('sections.homeCases.case1.kpi2') }
        ]}
      />
      <CaseRow
        onNavigate={onNavigate}
        navigateTo="case-detail"
        imagePosition="right"
        imageGradient="linear-gradient(135deg,#e8d0b8,#c8b090,#a89080)"
        brand="Athena"
        tag={t('sections.homeCases.case2.tag')}
        titlePrefix={t('sections.homeCases.case2.titlePrefix')}
        titleAccent={t('sections.homeCases.case2.titleAccent')}
        body={t('sections.homeCases.case2.body')}
        kpis={[
          { target: 18, suffix: 'K', label: t('sections.homeCases.case2.kpi1') },
          { target: 156, suffix: '%', label: t('sections.homeCases.case2.kpi2') }
        ]}
      />
    </section>
  );
}
