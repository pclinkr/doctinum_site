import BrandIcon from '../ui/BrandIcon';
import Button from '../ui/Button';
import { useTranslation } from 'react-i18next';

export default function FinalCtaSection({ onNavigate, subtitle, className = '', id }) {
  const { t } = useTranslation();

  return (
    <section className={`rev mx-auto w-full max-w-[1200px] px-16 py-24 pb-[100px] max-[1024px]:px-8 max-[768px]:px-5 ${className}`.trim()} id={id}>
      <div className="grid min-h-[320px] grid-cols-[1fr_320px] overflow-hidden rounded-[28px] bg-[var(--surface)] max-[1199px]:min-h-0 max-[1199px]:grid-cols-1">
        <div className="flex flex-col items-start gap-1 p-16 max-[809px]:px-7">
          <div style={{ width: '52px', height: '52px', background: 'rgba(0,0,0,.08)', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
            <BrandIcon stroke="var(--text-primary)" width={24} height={24} />
          </div>
          <p className="mb-2 flex w-full items-center justify-center gap-2 text-[11px] font-[var(--w500)] uppercase tracking-[0.08em] text-[var(--muted)]" style={{ textAlign: 'center' }}>{t('sections.finalCta.label')}</p>
          <h2 className="mb-3 mt-2 text-[clamp(32px,4vw,48px)] font-[var(--w500)] leading-[1.05] tracking-[-0.055em] text-[var(--color-primary)]" style={{ textAlign: 'center' }}>
            {t('sections.finalCta.titlePrefix')} <span className="si">{t('sections.finalCta.titleAccent')}</span>
          </h2>
          <p className="mb-6 text-[14px] leading-[1.65] text-[var(--muted)]" style={{ textAlign: 'center', marginInline: 'auto' }}>{subtitle}</p>
          <Button size="lg" onClick={() => onNavigate('contact')} style={{ marginInline: 'auto' }}>
            {t('nav.cta')}
          </Button>
        </div>
        <div className="relative flex items-center justify-center overflow-hidden bg-[var(--surface2)] max-[1199px]:hidden">
          <div className="relative h-[380px] w-[200px] translate-y-5 rotate-[8deg] overflow-hidden rounded-[28px] bg-[#1a1a2a] shadow-[0_20px_60px_var(--ink-30)]">
            <div className="h-full w-full" style={{ background: 'var(--gradient-accent-warm)' }} />
            <div className="absolute left-6 top-3 h-[6px] w-[60px] rounded-[3px] bg-[var(--ink-50)]" />
            <div className="absolute bottom-0 left-0 right-0 p-4" style={{ background: 'var(--gradient-overlay-top)' }}>
              <div className="mb-2 flex justify-center gap-[6px]">
                <div className="h-[6px] w-[6px] rounded-full bg-[var(--white-50)]" />
                <div className="h-[6px] w-[6px] rounded-full bg-white" />
                <div className="h-[6px] w-[6px] rounded-full bg-[var(--white-50)]" />
              </div>
              <div className="flex justify-around">
                <div className="flex h-[28px] w-[28px] items-center justify-center rounded-[8px] bg-[var(--white-15)]"><span className="text-[14px]">❤️</span></div>
                <div className="flex h-[28px] w-[28px] items-center justify-center rounded-[8px] bg-[var(--white-15)]"><span className="text-[14px]">💬</span></div>
                <div className="flex h-[28px] w-[28px] items-center justify-center rounded-[8px] bg-[var(--white-15)]"><span className="text-[14px]">📤</span></div>
                <div className="flex h-[28px] w-[28px] items-center justify-center rounded-[8px] bg-[var(--white-15)]"><span className="text-[14px]">🔖</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
