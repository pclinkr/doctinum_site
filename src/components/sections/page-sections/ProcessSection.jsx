import SectionHeading from '../SectionHeading';
import { useTranslation } from 'react-i18next';

export default function ProcessSection() {
  const { t } = useTranslation();

  return (
    <section className="sec" style={{ textAlign: 'center' }}>
      <SectionHeading className="rev" title={<>{t('sections.process.titlePrefix')} <span className="si">{t('sections.process.titleAccent')}</span> {t('sections.process.titleSuffix')}</>} style={{ marginBottom: '56px' }} />
      <div className="rev grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-px overflow-hidden rounded-[var(--r-md)] border border-[var(--border)] bg-[var(--border)] max-[1200px]:grid-cols-2 max-[1000px]:grid-cols-2 max-[809px]:grid-cols-1">
        <div className="flex flex-col gap-[14px] bg-[var(--bg)] px-8 py-11 text-left transition-all duration-150 ease-out hover:bg-[var(--white-55)] max-[809px]:flex-row max-[809px]:items-center max-[809px]:gap-[var(--space-5)] max-[809px]:p-[var(--space-6)]">
          <div className="mb-2 flex justify-center max-[1400px]:mb-3 max-[809px]:mb-0 max-[809px]:mr-0 max-[809px]:shrink-0">
            <div className="flex h-[72px] w-[72px] items-center justify-center rounded-[var(--radius-sm)] bg-transparent max-[1400px]:h-[42px] max-[1400px]:w-[42px] max-[809px]:h-[56px] max-[809px]:w-[56px]"><svg className="h-[36px] w-[36px] fill-none stroke-white stroke-[2px] [stroke-linecap:round] [stroke-linejoin:round] max-[1400px]:h-[21px] max-[1400px]:w-[21px] max-[809px]:h-[28px] max-[809px]:w-[28px]" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg></div>
          </div>
          <div className="flex-1">
            <h3 className="text-[20px] font-semibold">{t('sections.process.cards.0.title')}</h3>
            <p className="text-[16px]">{t('sections.process.cards.0.body')}</p>
          </div>
        </div>
        <div className="flex flex-col gap-[14px] bg-[var(--bg)] px-8 py-11 text-left transition-all duration-150 ease-out hover:bg-[var(--white-55)] max-[809px]:flex-row max-[809px]:items-center max-[809px]:gap-[var(--space-5)] max-[809px]:p-[var(--space-6)]">
          <div className="mb-2 flex justify-center max-[1400px]:mb-3 max-[809px]:mb-0 max-[809px]:mr-0 max-[809px]:shrink-0">
            <div className="flex h-[72px] w-[72px] items-center justify-center rounded-[var(--radius-sm)] bg-transparent max-[1400px]:h-[42px] max-[1400px]:w-[42px] max-[809px]:h-[56px] max-[809px]:w-[56px]"><svg className="h-[36px] w-[36px] fill-none stroke-white stroke-[2px] [stroke-linecap:round] [stroke-linejoin:round] max-[1400px]:h-[21px] max-[1400px]:w-[21px] max-[809px]:h-[28px] max-[809px]:w-[28px]" viewBox="0 0 24 24"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4Z" /></svg></div>
          </div>
          <div className="flex-1">
            <h3 className="text-[20px] font-semibold">{t('sections.process.cards.1.title')}</h3>
            <p className="text-[16px]">{t('sections.process.cards.1.body')}</p>
          </div>
        </div>
        <div className="flex flex-col gap-[14px] bg-[var(--bg)] px-8 py-11 text-left transition-all duration-150 ease-out hover:bg-[var(--white-55)] max-[809px]:flex-row max-[809px]:items-center max-[809px]:gap-[var(--space-5)] max-[809px]:p-[var(--space-6)]">
          <div className="mb-2 flex justify-center max-[1400px]:mb-3 max-[809px]:mb-0 max-[809px]:mr-0 max-[809px]:shrink-0">
            <div className="flex h-[72px] w-[72px] items-center justify-center rounded-[var(--radius-sm)] bg-transparent max-[1400px]:h-[42px] max-[1400px]:w-[42px] max-[809px]:h-[56px] max-[809px]:w-[56px]"><svg className="h-[36px] w-[36px] fill-none stroke-white stroke-[2px] [stroke-linecap:round] [stroke-linejoin:round] max-[1400px]:h-[21px] max-[1400px]:w-[21px] max-[809px]:h-[28px] max-[809px]:w-[28px]" viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg></div>
          </div>
          <div className="flex-1">
            <h3 className="text-[20px] font-semibold">{t('sections.process.cards.2.title')}</h3>
            <p className="text-[16px]">{t('sections.process.cards.2.body')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
