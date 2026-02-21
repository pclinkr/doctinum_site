import Button from '../../ui/Button';
import StorySliderPhone from '../../ui/StorySliderPhone';
import { useTranslation } from 'react-i18next';

export default function HomeHeroSection({ onNavigate, storyStarted, storyGradients, storyDurationMs, instant = false }) {
  const { t } = useTranslation();

  return (
    <section className={`hero ${instant ? 'hero-instant' : ''}`.trim()} aria-label={t('sections.hero.ariaLabel')}>
      <div className="hero-left">
        {/* <div className="platforms">
          <span className="plat-fade">&lsaquo;</span>
          <div className="plat-badge" title="Pinterest"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.08 3.14 9.46 7.62 11.28-.1-.93-.2-2.36.04-3.38.23-.9 1.55-6.1 1.55-6.1s-.4-.79-.4-1.95c0-1.84 1.07-3.21 2.39-3.21 1.12 0 1.67.84 1.67 1.85 0 1.13-.72 2.82-1.1 4.4-.31 1.31.66 2.37 1.95 2.37 2.34 0 4.14-2.47 4.14-6.03 0-3.15-2.27-5.35-5.51-5.35-3.75 0-5.95 2.81-5.95 5.71 0 1.13.44 2.34 1 3 .1.12.11.23.08.35-.1.41-.32 1.3-.37 1.48-.06.24-.2.29-.46.18-1.72-.8-2.79-3.32-2.79-5.34 0-4.33 3.15-8.3 9.07-8.3 4.76 0 8.47 3.4 8.47 7.93 0 4.73-2.98 8.54-7.11 8.54-1.39 0-2.7-.72-3.15-1.57l-.85 3.18c-.31 1.18-1.14 2.66-1.7 3.56.78.24 1.58.37 2.42.37 6.63 0 12-5.37 12-12S18.63 0 12 0z" /></svg></div>
          <div className="plat-badge" title="Threads"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.2 2c-5.6 0-9 3.4-9 8.8v.4c0 5.4 3.4 8.8 9 8.8 1.6 0 3-.3 4.1-.9l.8 1.6-2 .4C13.8 22 12.9 22 12 22c-6 0-10-4.1-10-10.8v-.4C2 4.1 6 0 12.2 0c2.8 0 5 .8 6.7 2.1l-1.2 1.3C16.2 2.5 14.3 2 12.2 2zm4 6.4c-.8-.5-1.8-.7-3.1-.7l-.1.1c-.8 0-1.6.1-2.2.3-.6.2-1 .5-1.3.9-.3.4-.5.8-.5 1.3v.2c0 .9.4 1.6 1 2.1.6.4 1.4.6 2.4.6h.3c1.1 0 2-.2 2.6-.7.7-.5 1-1.2 1-2 0-.8-.3-1.5-1-2l.2 1.1c0 .3-.1.5-.1.5z" /></svg></div>
          <div className="plat-badge" title="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.27V1.73C24 .77 23.2 0 22.22 0z" /></svg></div>
          <div className="plat-badge" title="Facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.07C24 5.45 18.63 0 12 0S0 5.45 0 12.07c0 5.99 4.39 10.95 10.13 11.85v-8.38H7.08v-3.47h3.05V9.43c0-3.01 1.79-4.67 4.53-4.67 1.31 0 2.69.23 2.69.23v2.95h-1.51c-1.49 0-1.96.93-1.96 1.87v2.25h3.33l-.53 3.47h-2.8v8.38C19.62 23.02 24 18.06 24 12.07z" /></svg></div>
          <span className="plat-fade">&rsaquo;</span>
        </div> */}
        <h1 className="hero-h">{t('sections.hero.titlePrefix')}<br />{t('sections.hero.titleMiddle')} <span className="si">{t('sections.hero.titleAccent')}</span></h1>
        <p className="hero-sub">{t('sections.hero.subtitle')}</p>
        <div className="hero-cta"><Button size="lg" onClick={() => onNavigate('contact')}>{t('sections.hero.cta')}</Button></div>
      </div>

      <StorySliderPhone
        start={storyStarted}
        videos={storyGradients}
        storyDurationMs={storyDurationMs}
        phoneSize={{ width: '380px', height: '640px' }}
      />
    </section>
  );
}
