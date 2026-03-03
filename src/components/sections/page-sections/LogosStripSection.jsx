import { useTranslation } from 'react-i18next';

export default function LogosStripSection() {
  const { t } = useTranslation();

  return (
    <section className="mx-auto w-full max-w-[1200px] px-16 py-14">
      <p className="rev mb-5 text-center text-[11px] font-[var(--w500)] uppercase tracking-[0.07em] text-[var(--muted)]">{t('sections.logosStrip.title')}</p>
      <div className="flex flex-wrap items-center justify-center gap-10 border-y border-[var(--border)] py-8 max-[809px]:gap-6">
        <span className="logo-item rev d1" style={{ '--logo-x': '-16px', '--logo-dur': '.78s' }}>amsterdam</span>
        <span className="logo-item rev d2" style={{ '--logo-x': '12px', '--logo-dur': '.92s' }}>venice.</span>
        <span className="logo-item rev d3" style={{ '--logo-x': '-10px', '--logo-dur': '.86s' }}>BORDER</span>
        <span className="logo-item rev d4" style={{ '--logo-x': '18px', '--logo-dur': '1.02s' }}>SnapShot</span>
        <span className="logo-item rev d2" style={{ '--logo-x': '-14px', '--logo-dur': '.82s', fontSize: '14px', letterSpacing: '.06em' }}>AMSTERDAM</span>
        <span className="logo-item rev d3" style={{ '--logo-x': '10px', '--logo-dur': '.9s' }}>Athena</span>
      </div>
    </section>
  );
}
