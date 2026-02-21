import Button from '../ui/Button';
import { useTranslation } from 'react-i18next';

export default function FloatingCta({ visible, onNavigate }) {
  const { t } = useTranslation();

  return (
    <div className={`float-cta ${visible ? 'vis' : ''}`.trim()} id="floatCta">
      <Button onClick={() => onNavigate('contact')}>{t('nav.cta')}</Button>
    </div>
  );
}
