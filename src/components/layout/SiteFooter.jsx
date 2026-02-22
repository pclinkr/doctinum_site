import { useTranslation } from 'react-i18next';
import { Heart } from 'lucide-react';
import BrandWordmark from '../ui/BrandWordmark';

export default function SiteFooter({ onNavigate }) {
  const { t } = useTranslation();

  return (
    <footer id="siteFooter" style={{ display: 'flex' }}>
      <div className="flex w-full max-w-[var(--max)] flex-col gap-14">
        <div className="grid grid-cols-6 gap-6 max-[700px]:grid-cols-1">
          <div className="col-span-2 flex self-start flex-col gap-[22px] max-[700px]:col-span-1">
            <div className="flex cursor-pointer items-center gap-[7px]" onClick={() => onNavigate('home')}>
              <BrandWordmark className="block h-[22px] w-auto" color="var(--logo-normal)" symbolColor="var(--logo-normal)" alt="Darkteam" />
            </div>
            <div>
              <p className="text-[22px] font-[var(--w500)] leading-[1.2] tracking-[var(--track-tight)]">{t('footer.tagline')}</p>
              <p className="mt-2 text-[13px] text-[var(--muted)]">{t('footer.subtitle')}</p>
            </div>
            <div className="flex gap-2">
              <div className="flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-[var(--r-sm)] border border-[var(--border)] transition-all duration-150 ease-out hover:translate-y-px hover:bg-[var(--ink-06)]"><svg className="h-[13px] w-[13px]" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.836L2.25 2.25H8.08l4.259 5.633L18.244 2.25z" /></svg></div>
              <div className="flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-[var(--r-sm)] border border-[var(--border)] transition-all duration-150 ease-out hover:translate-y-px hover:bg-[var(--ink-06)]"><svg className="h-[13px] w-[13px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /></svg></div>
            </div>
          </div>
          <div className="col-span-4 grid grid-cols-3 gap-[22px] self-start max-[700px]:col-span-1 max-[700px]:grid-cols-2">
            <div className="flex flex-col gap-[14px]"><p className="border-b border-[var(--border)] pb-2 text-[13px] font-[var(--w500)] tracking-[var(--track)]">{t('footer.navTitle')}</p><div className="flex flex-col gap-[10px]"><span className="cursor-pointer text-[13px] text-[var(--muted)] transition-colors duration-150 ease-out hover:text-[var(--color-primary)]" onClick={() => onNavigate('home')}>{t('footer.home')}</span><span className="cursor-pointer text-[13px] text-[var(--muted)] transition-colors duration-150 ease-out hover:text-[var(--color-primary)]" onClick={() => onNavigate('about')}>{t('footer.about')}</span><span className="cursor-pointer text-[13px] text-[var(--muted)] transition-colors duration-150 ease-out hover:text-[var(--color-primary)]" onClick={() => onNavigate('case-studies')}>{t('footer.caseStudies')}</span><span className="cursor-pointer text-[13px] text-[var(--muted)] transition-colors duration-150 ease-out hover:text-[var(--color-primary)]" onClick={() => onNavigate('blog')}>{t('footer.blog')}</span></div></div>
            <div className="flex flex-col gap-[14px]"><p className="border-b border-[var(--border)] pb-2 text-[13px] font-[var(--w500)] tracking-[var(--track)]">{t('footer.connectTitle')}</p><div className="flex flex-col gap-[10px]"><span className="cursor-pointer text-[13px] text-[var(--muted)] transition-colors duration-150 ease-out hover:text-[var(--color-primary)]" onClick={() => onNavigate('contact')}>{t('footer.bookCall')}</span><span className="cursor-pointer text-[13px] text-[var(--muted)] transition-colors duration-150 ease-out hover:text-[var(--color-primary)]">{t('footer.instagram')}</span><span className="cursor-pointer text-[13px] text-[var(--muted)] transition-colors duration-150 ease-out hover:text-[var(--color-primary)]">{t('footer.linkedin')}</span><span className="cursor-pointer text-[13px] text-[var(--muted)] transition-colors duration-150 ease-out hover:text-[var(--color-primary)]">{t('footer.twitter')}</span></div></div>
            <div className="flex flex-col gap-[14px]"><p className="border-b border-[var(--border)] pb-2 text-[13px] font-[var(--w500)] tracking-[var(--track)]">{t('footer.legalTitle')}</p><div className="flex flex-col gap-[10px]"><span className="cursor-pointer text-[13px] text-[var(--muted)] transition-colors duration-150 ease-out hover:text-[var(--color-primary)]" onClick={() => onNavigate('privacy')}>{t('footer.privacy')}</span><span className="cursor-pointer text-[13px] text-[var(--muted)] transition-colors duration-150 ease-out hover:text-[var(--color-primary)]">{t('footer.terms')}</span><span className="cursor-pointer text-[13px] text-[var(--muted)] transition-colors duration-150 ease-out hover:text-[var(--color-primary)]">{t('footer.contact')}</span><span className="cursor-pointer text-[13px] text-[var(--muted)] transition-colors duration-150 ease-out hover:text-[var(--color-primary)]" onClick={() => onNavigate('404')}>404</span></div></div>
          </div>
        </div>
        <div className="flex flex-wrap items-end justify-between gap-2 border-t border-[var(--border)] pt-5 max-[700px]:flex-col max-[700px]:items-start"><p className="text-[12px] text-[var(--muted)]">{t('footer.copyright')}</p><p className="text-[12px] text-[var(--muted)]">{t('footer.copyPrefix')} <a className="border-b border-transparent text-inherit transition-all duration-150 ease-out hover:border-current" href="https://cosmike.com">{t('footer.copyAuthor')}</a> {t('footer.copySuffix')} <Heart size={12} color="none" fill="currentColor" style={{ display: 'inline-block', verticalAlign: 'middle', marginTop: '-3px' }} /></p></div>
      </div>
    </footer>
  );
}
