import { useEffect, useMemo, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { switchLocaleInPath } from '../../constants/routes';

function normalizeLanguageCode(rawCode) {
  const codeValue = String(rawCode || 'en').toLowerCase();
  return codeValue.startsWith('fr') ? 'fr' : 'en';
}

function getFlagAssetPath(languageCode) {
  return languageCode === 'fr' ? '/assets/flags/fr.svg' : '/assets/flags/en.svg';
}

export default function LanguageSelector({ variant = 'dropdown', className = '', onOpenChange }) {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef(null);
  const options = t('language.options', { returnObjects: true }) || [];
  const currentCode = normalizeLanguageCode(i18n.resolvedLanguage || i18n.language);

  const currentLanguage = useMemo(
    () => options.find((option) => normalizeLanguageCode(option.code) === currentCode) || options[0],
    [options, currentCode]
  );

  const orderedOptions = useMemo(() => {
    const currentOption = options.find((option) => normalizeLanguageCode(option.code) === currentCode);
    const remainingOptions = options.filter((option) => normalizeLanguageCode(option.code) !== currentCode);
    return currentOption ? [currentOption, ...remainingOptions] : options;
  }, [options, currentCode]);
  const currentOption = orderedOptions[0];
  const otherOptions = orderedOptions.slice(1);

  useEffect(() => {
    const closeOnOutsidePointer = (event) => {
      if (!rootRef.current || rootRef.current.contains(event.target)) return;
      setIsOpen(false);
      onOpenChange?.(false);
    };

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        onOpenChange?.(false);
      }
    };

    document.addEventListener('pointerdown', closeOnOutsidePointer);
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.removeEventListener('pointerdown', closeOnOutsidePointer);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [onOpenChange]);

  const handleSelect = (languageCode) => {
    const normalizedCode = normalizeLanguageCode(languageCode);
    i18n.changeLanguage(normalizedCode);
    router.push(switchLocaleInPath(pathname, normalizedCode));
    setIsOpen(false);
    onOpenChange?.(false);
  };

  useEffect(() => {
    if (variant !== 'mobile-panel') return undefined;
    if (!isOpen) {
      document.body.style.overflow = '';
      return undefined;
    }

    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [variant, isOpen]);

  if (variant === 'mobile-panel') {
    return (
      <div className={`relative ${className}`.trim()} ref={rootRef}>
        <button
          type="button"
          className="flex h-[44px] items-center justify-center border-none bg-transparent p-0"
          aria-expanded={isOpen}
          aria-label={t('language.title')}
          onClick={() =>
            setIsOpen((currentValue) => {
              const nextValue = !currentValue;
              onOpenChange?.(nextValue);
              return nextValue;
            })
          }
        >
          <img
            className="block h-auto w-[26px] rounded-[3px] border border-[var(--ink-16)] opacity-[0.95] grayscale-[8%] saturate-[95%]"
            src={getFlagAssetPath(currentCode)}
            alt={currentLanguage?.label || 'Language'}
            loading="lazy"
          />
        </button>

        <div className={`fixed inset-x-0 top-[var(--nav-h)] bottom-0 z-[60] border-t border-[var(--border)] bg-[var(--bg-overlay-95)] px-5 pb-5 pt-4 shadow-[0_18px_40px_var(--ink-16)] backdrop-blur-[12px] transition-all duration-200 ease-out ${isOpen ? 'pointer-events-auto overflow-y-auto overscroll-contain opacity-100' : 'pointer-events-none overflow-hidden opacity-0'}`.trim()}>
          <div className="mb-3 flex items-center justify-between">
            <p className="text-[14px] font-[var(--w500)] tracking-[var(--track)] text-[var(--color-primary)]">{t('language.title')}</p>
            <button
              type="button"
              className="flex h-[36px] w-[36px] items-center justify-center border-none bg-transparent p-0 text-[26px] leading-none text-[var(--color-primary)]"
              aria-label={t('common.close')}
              onClick={() => {
                setIsOpen(false);
                onOpenChange?.(false);
              }}
            >
              ×
            </button>
          </div>
          <div className="flex flex-col">
            {currentOption ? (
              <button
                type="button"
                className="flex w-full items-center gap-[10px] rounded-[12px] border border-[var(--ink-08)] bg-[var(--ink-08)] p-3 text-left transition-all duration-150 ease-out"
                onClick={() => handleSelect(currentOption.code)}
              >
                <img
                  className="block h-auto w-[22px] rounded-[3px] border border-[var(--ink-14)] opacity-100"
                  src={getFlagAssetPath(normalizeLanguageCode(currentOption.code))}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                />
                <span className="text-[13px] font-[var(--w500)] tracking-[var(--track)]">{currentOption.label}</span>
                <span className="ml-auto inline-flex h-[16px] w-[16px] items-center justify-center text-[var(--muted)]" aria-hidden="true">
                  <svg viewBox="0 0 16 16" className="h-[13px] w-[13px] fill-none stroke-current stroke-[1.6] [stroke-linecap:round] [stroke-linejoin:round]">
                    <path d="M3.4 8.2 6.4 11.2 12.6 5" />
                  </svg>
                </span>
              </button>
            ) : null}

            {otherOptions.length > 0 ? (
              <div className="my-3 h-px bg-[var(--ink-08)]" />
            ) : null}

            <div className="flex flex-col gap-1">
              {otherOptions.map((option) => (
                <button
                  key={option.code}
                  type="button"
                  className="flex w-full items-center gap-[10px] rounded-[12px] border border-transparent p-3 text-left transition-all duration-150 ease-out hover:bg-[var(--ink-05)]"
                  onClick={() => handleSelect(option.code)}
                >
                  <img
                    className="block h-auto w-[22px] rounded-[3px] border border-[var(--ink-14)] opacity-100"
                    src={getFlagAssetPath(normalizeLanguageCode(option.code))}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                  />
                  <span className="text-[13px] font-[var(--w500)] tracking-[var(--track)]">{option.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative flex h-[44px] items-center ${isOpen ? 'open' : ''}`.trim()} ref={rootRef}>
      <button
        type="button"
        className="flex h-[44px] items-center justify-center p-0 border-none bg-transparent"
        aria-expanded={isOpen}
        aria-label="Select language"
        onClick={() =>
          setIsOpen((currentValue) => {
            const nextValue = !currentValue;
            onOpenChange?.(nextValue);
            return nextValue;
          })
        }
      >
        <img
          className="block h-auto w-[26px] rounded-[3px] border border-[var(--ink-16)] opacity-[0.95] grayscale-[8%] saturate-[95%]"
          src={getFlagAssetPath(currentCode)}
          alt={currentLanguage?.label || 'Language'}
          loading="lazy"
        />
      </button>

      <div className={`absolute right-0 top-[calc(100%+8px)] flex min-w-[168px] flex-col gap-[3px] rounded-[14px] border border-[var(--border)] bg-[var(--bg-overlay-95)] p-2 opacity-0 shadow-lg backdrop-blur-[10px] pointer-events-none translate-y-px scale-[0.98] transition-all duration-150 ease-out ${isOpen ? 'pointer-events-auto translate-y-0 scale-100 opacity-100' : ''}`.trim()}>
        {orderedOptions.map((option) => {
          const isCurrent = normalizeLanguageCode(option.code) === currentCode;
          return (
            <button
              key={option.code}
              type="button"
              className={`flex items-center gap-[10px] rounded-[10px] p-2 text-left transition-all duration-150 ease-out ${isCurrent ? 'bg-[var(--ink-08)]' : 'hover:bg-[var(--ink-05)]'}`.trim()}
              onClick={() => handleSelect(option.code)}
            >
              <img
                className="block h-auto w-[22px] rounded-[3px] border border-[var(--ink-14)] opacity-100 transition-all duration-150 ease-out"
                src={getFlagAssetPath(normalizeLanguageCode(option.code))}
                alt=""
                aria-hidden="true"
                loading="lazy"
                style={isCurrent ? {
                  transform: 'translateY(1px)',
                  boxShadow: '0 6px 12px var(--ink-14)'
                } : undefined}
              />
              <span className="text-[13px] font-[var(--w500)] tracking-[var(--track)]">{option.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
