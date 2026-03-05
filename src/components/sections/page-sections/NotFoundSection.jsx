import { useTranslation } from 'react-i18next';
import Button from '../../ui/Button';

export default function NotFoundSection({ onNavigate }) {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
      <div className="rev mb-4 text-[clamp(100px,20vw,200px)] font-[var(--w500)] leading-none tracking-[-0.08em] text-[var(--color-primary)] max-[809px]:text-[clamp(80px,18vw,160px)]">
        {t('notFound.title')}
      </div>
      <p className="rev mb-8 text-[clamp(18px,2.5vw,24px)] font-[var(--w500)] tracking-[-0.04em]">
        {t('notFound.message')}
      </p>
      <Button className="rev" size="lg" onClick={() => onNavigate('home')}>
        {t('notFound.goHome')}
      </Button>
    </div>
  );
}
