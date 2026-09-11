import { useTranslation } from 'react-i18next';
import RollingWordsBanner from '../../blocks/RollingWordsBanner.jsx';
import Button from '@/components/ui/Button';

export default function Home2SecurityStripSection({ onNavigate }) {
  const { t } = useTranslation();
  const badges = t('sections.home2.securityStrip.badges', {
    returnObjects: true,
  });

  /* Pas de filet pleine largeur en haut ni en bas: rien ne traverse l'écran
     d'un bord à l'autre dans cette page. Le rythme vient des panneaux en
     retrait, pas de lignes de séparation. */
  return (
    <section className="bg-[var(--color-bg)] px-[clamp(14px,3vw,34px)] py-[clamp(48px,6vw,88px)]">
      <div className="mx-auto mb-8 flex w-full max-w-[1100px] flex-wrap items-center justify-between gap-6">
        <p className="rev text-[11px] font-[var(--w500)] uppercase tracking-[0.14em] text-[var(--color-action)]">
          {t('sections.home2.securityStrip.label')}
        </p>
        <Button
          onClick={() => onNavigate('security')}
          className="rev d2"
          variant="outline"
        >
          {t('sections.home2.securityStrip.link')}
        </Button>
      </div>
      <RollingWordsBanner
        className="rev d2"
        words={badges}
        bgColor="var(--color-bg)"
      />
    </section>
  );
}
