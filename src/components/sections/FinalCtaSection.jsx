import BrandIcon from '../ui/BrandIcon';
import Button from '../ui/Button';
import { useTranslation } from 'react-i18next';

export default function FinalCtaSection({ onNavigate, subtitle, className = '', id }) {
  const { t } = useTranslation();

  return (
    <section className={`sec rev ${className}`.trim()} id={id} style={{ paddingBottom: '100px' }}>
      <div className="cta-block">
        <div className="cta-block-left">
          <div style={{ width: '52px', height: '52px', background: 'rgba(0,0,0,.08)', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
            <BrandIcon stroke="var(--text-primary)" width={24} height={24} />
          </div>
          <p className="cta-block-label" style={{ textAlign: 'center', width: '100%', justifyContent: 'center' }}>{t('sections.finalCta.label')}</p>
          <h2 className="cta-block-h" style={{ textAlign: 'center' }}>
            {t('sections.finalCta.titlePrefix')} <span className="si">{t('sections.finalCta.titleAccent')}</span>
          </h2>
          <p className="cta-block-sub" style={{ textAlign: 'center', marginInline: 'auto' }}>{subtitle}</p>
          <Button size="lg" onClick={() => onNavigate('contact')} style={{ marginInline: 'auto' }}>
            {t('nav.cta')}
          </Button>
        </div>
        <div className="cta-block-right">
          <div className="cta-phone-illo">
            <div className="cta-phone-screen" />
            <div className="cta-phone-notch" />
            <div className="cta-phone-ui">
              <div className="cta-phone-ui-dots">
                <div className="cta-phone-ui-dot" />
                <div className="cta-phone-ui-dot on" />
                <div className="cta-phone-ui-dot" />
              </div>
              <div className="cta-phone-ui-icons">
                <div className="cta-phone-ui-icon"><span>❤️</span></div>
                <div className="cta-phone-ui-icon"><span>💬</span></div>
                <div className="cta-phone-ui-icon"><span>📤</span></div>
                <div className="cta-phone-ui-icon"><span>🔖</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
