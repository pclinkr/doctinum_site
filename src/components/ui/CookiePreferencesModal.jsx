'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { X } from 'lucide-react';
import {
  getCookieConsent,
  saveCookieConsent,
  CookieCategories,
} from '../../utils/cookieConsent';
import Button from './Button';

export default function CookiePreferencesModal({ onClose, onNavigate }) {
  const { t } = useTranslation();
  const [preferences, setPreferences] = useState({
    [CookieCategories.NECESSARY]: true,
    [CookieCategories.ANALYTICS]: true,
  });

  useEffect(() => {
    const consent = getCookieConsent();
    if (consent) {
      setPreferences(consent);
    }
  }, []);

  const handleToggle = (category) => {
    if (category === CookieCategories.NECESSARY) return;
    setPreferences((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const handleSave = () => {
    saveCookieConsent(preferences);
    onClose();
  };

  const handleAcceptAll = () => {
    const allAccepted = {
      [CookieCategories.NECESSARY]: true,
      [CookieCategories.ANALYTICS]: true,
    };
    saveCookieConsent(allAccepted);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/50 p-4 animate-[fadeIn_0.2s_ease-out]">
      <div className="relative w-full max-w-[600px] animate-[scaleIn_0.3s_ease-out] rounded-[12px] bg-white p-6 shadow-2xl dark:bg-[var(--color-bg)]">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1.5 text-[var(--muted)] transition-colors hover:bg-[var(--color-bg-subtle)] hover:text-[var(--color-text)]"
          aria-label="Fermer"
        >
          <X size={20} />
        </button>

        <h2 className="mb-4 pr-8 text-[20px] font-[var(--w600)] leading-[1.3] tracking-[var(--track-tight)] text-[var(--color-text)]">
          {t('cookies.preferences.title', 'Personnaliser les cookies')}
        </h2>

        <p className="mb-6 text-[14px] leading-[1.6] text-[var(--muted)]">
          {t(
            'cookies.preferences.description',
            'Gérez vos préférences en matière de cookies. Les cookies nécessaires sont toujours actifs car ils sont essentiels au fonctionnement du site.'
          )}
        </p>

        <div className="mb-6 space-y-4">
          <div className="rounded-[8px] border border-[var(--border)] p-4">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-[15px] font-[var(--w600)] text-[var(--color-text)]">
                {t('cookies.preferences.necessary', 'Cookies nécessaires')}
              </h3>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-[var(--w500)] text-[var(--muted)]">
                  {t('cookies.preferences.alwaysActive', 'Toujours actifs')}
                </span>
                <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-[var(--color-primary)] opacity-50">
                  <span className="inline-block h-4 w-4 translate-x-6 transform rounded-full bg-white transition" />
                </div>
              </div>
            </div>
            <p className="text-[13px] leading-[1.6] text-[var(--muted)]">
              {t(
                'cookies.preferences.necessaryDesc',
                'Ces cookies sont indispensables au bon fonctionnement du site et ne peuvent pas être désactivés.'
              )}
            </p>
          </div>

          <div className="rounded-[8px] border border-[var(--border)] p-4">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-[15px] font-[var(--w600)] text-[var(--color-text)]">
                {t(
                  'cookies.preferences.analytics',
                  "Cookies de mesure d'audience"
                )}
              </h3>
              <button
                onClick={() => handleToggle(CookieCategories.ANALYTICS)}
                className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200"
                style={{
                  backgroundColor: preferences[CookieCategories.ANALYTICS]
                    ? 'var(--color-primary)'
                    : 'var(--border-mid)',
                }}
              >
                <span
                  className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200"
                  style={{
                    transform: preferences[CookieCategories.ANALYTICS]
                      ? 'translateX(24px)'
                      : 'translateX(4px)',
                  }}
                />
              </button>
            </div>
            <p className="text-[13px] leading-[1.6] text-[var(--muted)]">
              {t(
                'cookies.preferences.analyticsDesc',
                "Les cookies analytiques nous permettent de comprendre l'utilisation du site afin d'en améliorer le contenu."
              )}
            </p>
            <p className="mt-2 text-[12px] text-[var(--muted)]">
              {t('cookies.preferences.analyticsExample', 'Ex: Google Analytics')}
            </p>
          </div>
        </div>

        <div className="mb-4">
          <button
            onClick={() => onNavigate('cookies-policy')}
            className="text-[13px] text-[var(--color-primary)] transition-opacity hover:opacity-70"
          >
            {t('cookies.preferences.learnMore', 'En savoir plus')}
          </button>
        </div>

        <div className="flex flex-col items-center gap-2.5">
          <Button
            onClick={handleAcceptAll}
            variant="primary"
            className="w-full max-w-[280px]"
          >
            {t('cookies.preferences.acceptAll', 'Tout accepter')}
          </Button>
          <Button
            onClick={handleSave}
            variant="outline"
            className="w-full max-w-[280px]"
          >
            {t('cookies.preferences.save', 'Enregistrer mes préférences')}
          </Button>
          <Button
            onClick={onClose}
            variant="outline"
            className="w-full max-w-[280px] opacity-60"
          >
            {t('cookies.preferences.cancel', 'Annuler')}
          </Button>
        </div>
      </div>
    </div>
  );
}
