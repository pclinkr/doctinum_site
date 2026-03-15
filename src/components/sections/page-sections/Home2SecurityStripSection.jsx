import { useTranslation } from 'react-i18next';
import RollingWordsBanner from '../../blocks/RollingWordsBanner.jsx';
import Button from '@/components/ui/Button';

export default function Home2SecurityStripSection({ onNavigate }) {
  const { t } = useTranslation();
  const badges = t('sections.home2.securityStrip.badges', {
    returnObjects: true,
  });

  return (
    <section className="border-b border-t border-[var(--color-border)] px-5 py-16 min-[810px]:px-8 min-[1200px]:px-12">
      <div className="mb-6 mx-auto flex w-full max-w-[1100px] flex-wrap items-start justify-between gap-6">
        <p className="rev text-[12px] font-[var(--w500)] uppercase tracking-[0.1em] text-[var(--color-muted)]">
          {t('sections.home2.securityStrip.label')}
        </p>
        <Button
          onClick={() => onNavigate('security')}
          className="rev d2 text-[var(--color-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-border)]"
          variant="outline"
        >
          {t('sections.home2.securityStrip.link')}
        </Button>
      </div>
      <RollingWordsBanner className="rev d2" words={badges} bgColor="var(--color-bg)" />
    </section>
  );
}
