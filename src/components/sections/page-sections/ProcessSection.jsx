import SectionHeading from '../SectionHeading';
import { useTranslation } from 'react-i18next';

export default function ProcessSection() {
  const { t } = useTranslation();

  return (
    <section className="mx-auto w-full max-w-[1200px] px-16 py-24 text-center max-[1024px]:px-8 max-[768px]:px-5">
      <SectionHeading className="rev" title={<>{t('sections.process.titlePrefix')} <span className="si">{t('sections.process.titleAccent')}</span> {t('sections.process.titleSuffix')}</>} style={{ marginBottom: '56px' }} />
      <div className="rev grid grid-cols-3 gap-px overflow-hidden rounded-[var(--r-md)] border border-[var(--border)] bg-[var(--border)] max-[809px]:grid-cols-1">
        <div className="flex flex-col gap-[14px] bg-[var(--bg)] px-8 py-[44px] text-left transition-colors duration-200 ease-out hover:bg-[var(--white-55)]">
          <div>
            <div className="flex h-[34px] w-[34px] items-center justify-center rounded-[var(--r-sm)] bg-[var(--black)]"><svg className="h-[17px] w-[17px] fill-none stroke-2 stroke-white [stroke-linecap:round] [stroke-linejoin:round]" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg></div>
          </div>
          <div>
            <h3 className="text-[17px] font-[var(--w500)] tracking-[var(--track)]">{t('sections.process.cards.0.title')}</h3>
            <p className="text-[14px] leading-[1.65] text-[var(--muted)]">{t('sections.process.cards.0.body')}</p>
          </div>
        </div>
        <div className="flex flex-col gap-[14px] bg-[var(--bg)] px-8 py-[44px] text-left transition-colors duration-200 ease-out hover:bg-[var(--white-55)]">
          <div>
            <div className="flex h-[34px] w-[34px] items-center justify-center rounded-[var(--r-sm)] bg-[var(--black)]"><svg className="h-[17px] w-[17px] fill-none stroke-2 stroke-white [stroke-linecap:round] [stroke-linejoin:round]" viewBox="0 0 24 24"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4Z" /></svg></div>
          </div>
          <div>
            <h3 className="text-[17px] font-[var(--w500)] tracking-[var(--track)]">{t('sections.process.cards.1.title')}</h3>
            <p className="text-[14px] leading-[1.65] text-[var(--muted)]">{t('sections.process.cards.1.body')}</p>
          </div>
        </div>
        <div className="flex flex-col gap-[14px] bg-[var(--bg)] px-8 py-[44px] text-left transition-colors duration-200 ease-out hover:bg-[var(--white-55)]">
          <div>
            <div className="flex h-[34px] w-[34px] items-center justify-center rounded-[var(--r-sm)] bg-[var(--black)]"><svg className="h-[17px] w-[17px] fill-none stroke-2 stroke-white [stroke-linecap:round] [stroke-linejoin:round]" viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg></div>
          </div>
          <div>
            <h3 className="text-[17px] font-[var(--w500)] tracking-[var(--track)]">{t('sections.process.cards.2.title')}</h3>
            <p className="text-[14px] leading-[1.65] text-[var(--muted)]">{t('sections.process.cards.2.body')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
