import SectionHeading from '../SectionHeading';
import { useTranslation } from 'react-i18next';
import Badge from '../../ui/Badge';

export default function WhyChooseSection() {
  const { t } = useTranslation();

  return (
    <section className="sec" style={{ textAlign: 'center' }}>
      <SectionHeading className="rev" title={<>{t('sections.whyChoose.titlePrefix')}<br />{t('sections.whyChoose.titleMiddle')} <span className="si">{t('sections.whyChoose.titleAccent')}</span> {t('sections.whyChoose.titleSuffix')}</>} style={{ marginBottom: '48px' }} />
      <div className="rev grid grid-cols-2 gap-5 text-left max-[809px]:grid-cols-1">
        <div className="relative rounded-[var(--r-md)] bg-[var(--surface)] p-8">
          <div className="border-b border-[var(--border)] pb-3 text-[12px] font-[var(--w500)] uppercase tracking-[0.07em] text-[var(--muted)]">{t('sections.whyChoose.otherTitle')}</div>
          <div className="flex items-center gap-[10px] border-b border-[var(--border)] py-3 text-[14px] text-[var(--muted)]"><span className="flex h-[19px] w-[19px] shrink-0 items-center justify-center rounded-full bg-[var(--ink-06)]"><svg className="h-[10px] w-[10px]" viewBox="0 0 10 10" stroke="currentColor" strokeWidth="2" fill="none"><line x1="2" y1="2" x2="8" y2="8" /><line x1="8" y1="2" x2="2" y2="8" /></svg></span>{t('sections.whyChoose.otherItems.0')}</div>
          <div className="flex items-center gap-[10px] border-b border-[var(--border)] py-3 text-[14px] text-[var(--muted)]"><span className="flex h-[19px] w-[19px] shrink-0 items-center justify-center rounded-full bg-[var(--ink-06)]"><svg className="h-[10px] w-[10px]" viewBox="0 0 10 10" stroke="currentColor" strokeWidth="2" fill="none"><line x1="2" y1="2" x2="8" y2="8" /><line x1="8" y1="2" x2="2" y2="8" /></svg></span>{t('sections.whyChoose.otherItems.1')}</div>
          <div className="flex items-center gap-[10px] border-b border-[var(--border)] py-3 text-[14px] text-[var(--muted)]"><span className="flex h-[19px] w-[19px] shrink-0 items-center justify-center rounded-full bg-[var(--ink-06)]"><svg className="h-[10px] w-[10px]" viewBox="0 0 10 10" stroke="currentColor" strokeWidth="2" fill="none"><line x1="2" y1="2" x2="8" y2="8" /><line x1="8" y1="2" x2="2" y2="8" /></svg></span>{t('sections.whyChoose.otherItems.2')}</div>
          <div className="flex items-center gap-[10px] py-3 text-[14px] text-[var(--muted)]"><span className="flex h-[19px] w-[19px] shrink-0 items-center justify-center rounded-full bg-[var(--ink-06)]"><svg className="h-[10px] w-[10px]" viewBox="0 0 10 10" stroke="currentColor" strokeWidth="2" fill="none"><line x1="2" y1="2" x2="8" y2="8" /><line x1="8" y1="2" x2="2" y2="8" /></svg></span>{t('sections.whyChoose.otherItems.3')}</div>
        </div>
        <div className="relative rounded-[var(--r-md)] bg-[var(--surface)] p-8">
          <Badge className="absolute -top-3 right-5 rounded-full bg-[var(--color-primary)] px-[13px] py-1 text-[12px] font-[var(--w500)] text-[var(--cta-text)]">DOCTINUM</Badge>
          <div className="border-b border-[var(--border)] pb-3 text-[12px] font-[var(--w500)] uppercase tracking-[0.07em] text-[var(--muted)]">{t('sections.whyChoose.brandTitle')}</div>
          <div className="flex items-center gap-[10px] border-b border-[var(--border)] py-3 text-[14px] text-[var(--color-primary)]"><span className="flex h-[19px] w-[19px] shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)]"><svg className="h-[10px] w-[10px]" viewBox="0 0 10 10" stroke="#fff" strokeWidth="2.5" fill="none"><polyline points="2,5 4.5,7.5 8,2.5" /></svg></span>{t('sections.whyChoose.brandItems.0')}</div>
          <div className="flex items-center gap-[10px] border-b border-[var(--border)] py-3 text-[14px] text-[var(--color-primary)]"><span className="flex h-[19px] w-[19px] shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)]"><svg className="h-[10px] w-[10px]" viewBox="0 0 10 10" stroke="#fff" strokeWidth="2.5" fill="none"><polyline points="2,5 4.5,7.5 8,2.5" /></svg></span>{t('sections.whyChoose.brandItems.1')}</div>
          <div className="flex items-center gap-[10px] border-b border-[var(--border)] py-3 text-[14px] text-[var(--color-primary)]"><span className="flex h-[19px] w-[19px] shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)]"><svg className="h-[10px] w-[10px]" viewBox="0 0 10 10" stroke="#fff" strokeWidth="2.5" fill="none"><polyline points="2,5 4.5,7.5 8,2.5" /></svg></span>{t('sections.whyChoose.brandItems.2')}</div>
          <div className="flex items-center gap-[10px] py-3 text-[14px] text-[var(--color-primary)]"><span className="flex h-[19px] w-[19px] shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)]"><svg className="h-[10px] w-[10px]" viewBox="0 0 10 10" stroke="#fff" strokeWidth="2.5" fill="none"><polyline points="2,5 4.5,7.5 8,2.5" /></svg></span>{t('sections.whyChoose.brandItems.3')}</div>
        </div>
      </div>
    </section>
  );
}
