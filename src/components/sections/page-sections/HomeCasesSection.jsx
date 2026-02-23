import Button from '../../ui/Button';
import CaseRow from '../CaseRow';
import { useTranslation } from 'react-i18next';

export default function HomeCasesSection({ onNavigate }) {
  const { t } = useTranslation();

  return (
    <section className="mx-auto w-full max-w-[1200px] px-16 py-24 max-[1024px]:px-8 max-[768px]:px-5" id="homeCase">
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '24px', marginBottom: '44px', flexWrap: 'wrap' }} className="rev">
        <div><p className="ds-text-label mb-3">{t('sections.homeCases.label')}</p><h2 className="text-[var(--color-primary)]">{t('sections.homeCases.titlePrefix')} <span className="si">{t('sections.homeCases.titleAccent')}</span></h2></div>
        <Button variant="outline" onClick={() => onNavigate('case-studies')} style={{ flexShrink: 0 }}>{t('sections.homeCases.viewAll')}</Button>
      </div>
      <CaseRow
        onNavigate={onNavigate}
        navigateTo="case-detail"
        imagePosition="right"
        imageGradient="var(--gradient-accent-warm-terra)"
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
        imageGradient="var(--gradient-accent-warm)"
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
