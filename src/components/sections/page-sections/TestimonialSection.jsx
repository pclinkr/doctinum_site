import { useTranslation } from 'react-i18next';

export default function TestimonialSection({ initials = 'EK', visualStyle, visualText, visualClassName = 'testi-vis-bg' }) {
  const { t } = useTranslation();

  return (
    <section className="sec rev">
      <div className="testi-inner">
        <div>
          <div className="testi-mark">&ldquo;</div>
          <p className="testi-q">&quot;{t('sections.testimonial.quotePrefix')} <em>{t('sections.testimonial.quoteAccent')}</em>&quot;</p>
          <div className="testi-author"><div className="testi-av">{initials}</div><div><div className="testi-name">{t('sections.testimonial.author')}</div><div className="testi-role">{t('sections.testimonial.role')}</div></div></div>
        </div>
        <div className="testi-visual" style={visualStyle}>{visualText ? <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '28px', color: '#fff', textShadow: '0 2px 8px rgba(0,0,0,.3)' }}>{visualText}</div> : <div className={visualClassName} />}</div>
      </div>
    </section>
  );
}
