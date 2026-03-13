import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Container from '../../layout/Container';
import Home2UseCasePanel from '../../blocks/Home2UseCasePanel';

export default function Home2UseCasesSection() {
  const { t } = useTranslation();
  const tabs = t('sections.home2.useCases.tabs', { returnObjects: true }) || [];
  const panels =
    t('sections.home2.useCases.panels', { returnObjects: true }) || {};

  const defaultTabId = tabs[0]?.id || '';
  const [activeTabId, setActiveTabId] = useState(defaultTabId);

  useEffect(() => {
    if (!tabs.some((tab) => tab.id === activeTabId)) {
      setActiveTabId(defaultTabId);
    }
  }, [tabs, activeTabId, defaultTabId]);

  const activePanel = useMemo(
    () => panels?.[activeTabId],
    [panels, activeTabId]
  );

  return (
    <section
      id="usecases"
      className="bg-[var(--color-primary)] py-24 text-[var(--color-white)]"
    >
      <Container>
        <p className="rev ds-text-label mb-5 text-[var(--color-accent-1)]">
          {t('sections.home2.useCases.label')}
        </p>

        <h2 className="rev d1 mb-9 max-w-[20ch] text-[clamp(2rem,3.4vw,2.9rem)] leading-[1.18]">
          {t('sections.home2.useCases.titlePrefix')}{' '}
          <em className="text-[var(--color-accent-1)] si">
            {t('sections.home2.useCases.titleAccent')}
          </em>
        </h2>

        <div className="rev d2 flex flex-wrap border-b border-[var(--white-14)]">
          {tabs.map((tab) => {
            const isActive = tab.id === activeTabId;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTabId(tab.id)}
                className={`border-b-2 px-6 py-4 text-[11px] font-[var(--w500)] uppercase tracking-[0.1em] transition-colors duration-200 ease-out ${isActive ? 'border-[var(--color-accent-1)] text-[var(--color-white)]' : 'border-transparent text-[var(--white-40)] hover:text-[var(--white-70)]'}`.trim()}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <Home2UseCasePanel panel={activePanel} />
      </Container>
    </section>
  );
}
