'use client';

import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import AppLink from '../ui/AppLink';
import Button from '../ui/Button';
import LanguageSelector from '../ui/LanguageSelector';

/**
 * Menu plein écran des petites largeurs.
 *
 * Un panneau modal n'est pas qu'un panneau qui recouvre l'écran: tant que le
 * focus peut en sortir, la tabulation se promène dans une page invisible
 * derrière lui et l'usager au clavier est perdu sans le savoir. D'où les
 * quatre obligations tenues ici — piège de focus, Échap, verrou du
 * défilement, et restitution du focus au bouton qui a ouvert le menu.
 */

const FOCUSABLE_SELECTOR = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(', ');

export default function MobileNavOverlay({
  navItems,
  isOpen,
  onClose,
  onNavigate,
  onItemClick,
  currentPage,
}) {
  const { t } = useTranslation();
  const panelRef = useRef(null);
  const previouslyFocusedRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    previouslyFocusedRef.current = document.activeElement;
    const previousBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const panel = panelRef.current;
    const focusables = () =>
      Array.from(panel?.querySelectorAll(FOCUSABLE_SELECTOR) || []).filter(
        (element) => element.offsetParent !== null
      );

    focusables()[0]?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }
      if (event.key !== 'Tab') return;

      const items = focusables();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];

      // Le piège se referme aux DEUX bouts: sans la branche `shift`, la
      // tabulation arrière sortait par le haut du panneau.
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousBodyOverflow;
      // Rendre le focus à son point de départ: sinon il repart du haut du
      // document et l'usager doit retraverser toute la page.
      previouslyFocusedRef.current?.focus?.();
    };
  }, [isOpen, onClose]);

  return (
    <div
      ref={panelRef}
      id="site-mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label={t('nav.mainMenu')}
      // `hidden` plutôt qu'un démontage: l'animation de sortie a le temps de
      // jouer, et le lecteur d'écran ne voit rien tant que c'est fermé.
      aria-hidden={!isOpen}
      className={`fixed inset-0 z-[95] flex flex-col bg-[var(--color-bg)] px-6 pb-8 pt-[calc(var(--nav-h)+16px)] transition-[opacity,transform] duration-300 ease-out min-[900px]:hidden ${
        isOpen
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none -translate-y-3 opacity-0'
      }`}
      inert={!isOpen || undefined}
    >
      <nav className="flex flex-col gap-1" aria-label={t('nav.mainMenu')}>
        {navItems.map((item) => {
          const isCurrent = currentPage === item.page;
          return (
            <AppLink
              key={item.id}
              page={item.page}
              className={`rounded-[14px] px-3 py-4 font-serif text-[30px] font-[600] leading-[1.15] tracking-[-0.02em] transition-colors duration-200 ease-out ${
                isCurrent
                  ? 'text-[var(--color-text)]'
                  : 'text-[var(--color-muted)] hover:text-[var(--color-text)]'
              }`}
              aria-current={isCurrent ? 'page' : undefined}
              onClick={onItemClick(item)}
            >
              {t(item.labelKey)}
            </AppLink>
          );
        })}
      </nav>

      <div className="mt-auto flex flex-col gap-6 pt-10">
        <Button
          fullWidth
          size="lg"
          onClick={() => {
            onClose();
            onNavigate('demo');
          }}
        >
          {t('nav.bookDemo')}
        </Button>

        <div className="flex items-center justify-between border-t border-[var(--color-border)] pt-6">
          <span className="text-[13px] text-[var(--color-muted)]">
            {t('language.title')}
          </span>
          <LanguageSelector variant="dropdown" />
        </div>
      </div>
    </div>
  );
}
