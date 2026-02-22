import { useTranslation } from 'react-i18next';

export default function TestimonialSection({ initials = 'EK', visualStyle, visualText, visualClassName = 'testi-vis-bg' }) {
  const { t } = useTranslation();

  return (
    <section className="sec rev">
      <div className="grid grid-cols-[1fr_220px] items-center gap-11 rounded-[28px] bg-[var(--surface)] p-14 max-[809px]:grid-cols-1 max-[809px]:px-7">
        <div>
          <div className="font-serif text-[60px] leading-none text-[var(--border-mid)]">&ldquo;</div>
          <p className="mb-5 text-[clamp(17px,2.5vw,22px)] font-[var(--w500)] leading-[1.45] tracking-[-0.04em]">&quot;{t('sections.testimonial.quotePrefix')} <em>{t('sections.testimonial.quoteAccent')}</em>&quot;</p>
          <div className="flex items-center gap-3"><div className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-[var(--border-mid)] text-[12px] font-[var(--w500)] text-[var(--muted)]">{initials}</div><div><div className="text-[14px] font-[var(--w500)] tracking-[var(--track)]">{t('sections.testimonial.author')}</div><div className="text-[12px] text-[var(--muted)]">{t('sections.testimonial.role')}</div></div></div>
        </div>
        <div className="relative aspect-[3/4] overflow-hidden rounded-[var(--r-md)]" style={visualStyle}>{visualText ? <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '28px', color: '#fff', textShadow: '0 2px 8px rgba(0,0,0,.3)' }}>{visualText}</div> : <div className={visualClassName} />}<div className="pointer-events-none absolute bottom-0 left-0 right-0 z-[1] h-[30%] bg-gradient-to-t from-white/90 via-white/70 to-transparent" /></div>
      </div>
    </section>
  );
}
