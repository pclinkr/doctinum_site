import { useTranslation } from 'react-i18next';
import { Heart } from 'lucide-react';
import BrandWordmark from '../ui/BrandWordmark';

export default function SiteFooter({ onNavigate }) {
  const { t } = useTranslation();

  return (
    <footer id="siteFooter" style={{ display: 'flex' }}>
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-main">
            <div className="footer-logo" onClick={() => onNavigate('home')}>
              <BrandWordmark className="footer-logo-wordmark" color="var(--logo-normal)" symbolColor="var(--logo-normal)" alt="Darkteam" />
            </div>
            <div>
              <p className="footer-tagline">{t('footer.tagline')}</p>
              <p className="footer-tagline-sub">{t('footer.subtitle')}</p>
            </div>
            <div className="footer-socials">
              <div className="footer-soc-btn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.836L2.25 2.25H8.08l4.259 5.633L18.244 2.25z" /></svg></div>
              <div className="footer-soc-btn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /></svg></div>
            </div>
          </div>
          <div className="footer-links-group">
            <div className="footer-col"><p className="footer-col-title">{t('footer.navTitle')}</p><div className="footer-col-links"><span className="footer-col-link" onClick={() => onNavigate('home')}>{t('footer.home')}</span><span className="footer-col-link" onClick={() => onNavigate('about')}>{t('footer.about')}</span><span className="footer-col-link" onClick={() => onNavigate('case-studies')}>{t('footer.caseStudies')}</span><span className="footer-col-link" onClick={() => onNavigate('blog')}>{t('footer.blog')}</span></div></div>
            <div className="footer-col"><p className="footer-col-title">{t('footer.connectTitle')}</p><div className="footer-col-links"><span className="footer-col-link" onClick={() => onNavigate('contact')}>{t('footer.bookCall')}</span><span className="footer-col-link">{t('footer.instagram')}</span><span className="footer-col-link">{t('footer.linkedin')}</span><span className="footer-col-link">{t('footer.twitter')}</span></div></div>
            <div className="footer-col"><p className="footer-col-title">{t('footer.legalTitle')}</p><div className="footer-col-links"><span className="footer-col-link" onClick={() => onNavigate('privacy')}>{t('footer.privacy')}</span><span className="footer-col-link">{t('footer.terms')}</span><span className="footer-col-link">{t('footer.contact')}</span><span className="footer-col-link" onClick={() => onNavigate('404')}>404</span></div></div>
          </div>
        </div>
        <div className="footer-bottom"><p className="footer-copy">{t('footer.copyright')}</p><p className="footer-built">{t('footer.copyPrefix')} <a href="https://cosmike.com">{t('footer.copyAuthor')}</a> {t('footer.copySuffix')} <Heart size={12} color="none" fill="currentColor" style={{ display: 'inline-block', verticalAlign: 'middle', marginTop: '-3px' }} /></p></div>
      </div>
    </footer>
  );
}
