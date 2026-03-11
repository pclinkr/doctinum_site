'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { X } from 'lucide-react';
import {
  getCookieConsent,
  acceptAllCookies,
  rejectAllCookies,
} from '../../utils/cookieConsent';
import CookiePreferencesModal from './CookiePreferencesModal';

export default function CookieBanner({ onNavigate }) {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  useEffect(() => {
    const consent = getCookieConsent();
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const handleOpenPreferences = () => {
      setShowPreferences(true);
    };

    window.addEventListener('openCookiePreferences', handleOpenPreferences);
    return () => {
      window.removeEventListener('openCookiePreferences', handleOpenPreferences);
    };
  }, []);

  const handleAccept = () => {
    acceptAllCookies();
    setIsVisible(false);
  };

  const handleReject = () => {
    rejectAllCookies();
    setIsVisible(false);
  };

  const handlePersonalize = () => {
    setShowPreferences(true);
  };

  const handleClosePreferences = () => {
    setShowPreferences(false);
    const consent = getCookieConsent();
    if (consent) {
      setIsVisible(false);
    }
  };

  return (
    <>
      {isVisible && (
        <div
          className="fixed bottom-6 right-6 z-[9999] w-[380px] max-w-[calc(100vw-48px)] animate-[slideUp_0.4s_ease-out] rounded-[12px] bg-white p-5 shadow-[0_8px_32px_rgba(0,0,0,0.16)] dark:bg-[var(--color-bg)]"
          style={{
            border: '1px solid var(--border)',
          }}
        >
          <h3 className="mb-3 text-[15px] font-[var(--w600)] leading-[1.3] tracking-[var(--track-tight)] text-[var(--color-text)]">
            {t('cookies.banner.title', 'Gestion des cookies')}
          </h3>
          <p className="mb-3 text-[13px] leading-[1.6] text-[var(--muted)]">
            {t(
              'cookies.banner.description',
              "Ce site utilise des cookies afin de mesurer l'audience et améliorer votre expérience de navigation."
            )}
          </p>
          <p className="mb-3 text-[13px] leading-[1.6] text-[var(--muted)]">
            {t(
              'cookies.banner.choices',
              "Vous pouvez accepter, refuser ou personnaliser l'utilisation des cookies."
            )}
          </p>
          <button
            onClick={() => onNavigate('cookies-policy')}
            className="mb-4 inline-flex items-center gap-1 text-[12px] text-[var(--color-primary)] transition-opacity hover:opacity-70"
          >
            {t('cookies.banner.learnMore', 'En savoir plus')}
          </button>

          <div className="flex flex-col gap-2">
            <button
              onClick={handleAccept}
              className="rounded-[6px] bg-[var(--color-primary)] px-4 py-2.5 text-[13px] font-[var(--w500)] text-white transition-all duration-150 hover:opacity-90"
            >
              {t('cookies.banner.accept', 'Accepter')}
            </button>
            <button
              onClick={handlePersonalize}
              className="rounded-[6px] border border-[var(--border)] bg-transparent px-4 py-2 text-[13px] font-[var(--w500)] text-[var(--color-text)] transition-all duration-150 hover:bg-[var(--color-bg-subtle)]"
            >
              {t('cookies.banner.customize', 'Personnaliser')}
            </button>
          </div>
        </div>
      )}

      {showPreferences && (
        <CookiePreferencesModal
          onClose={handleClosePreferences}
          onNavigate={onNavigate}
        />
      )}
    </>
  );
}
