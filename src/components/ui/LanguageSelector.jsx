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

export default function LanguageSelector() {
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

  useEffect(() => {
    const closeOnOutsidePointer = (event) => {
      if (!rootRef.current || rootRef.current.contains(event.target)) return;
      setIsOpen(false);
    };

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('pointerdown', closeOnOutsidePointer);
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.removeEventListener('pointerdown', closeOnOutsidePointer);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, []);

  const handleSelect = (languageCode) => {
    const normalizedCode = normalizeLanguageCode(languageCode);
    i18n.changeLanguage(normalizedCode);
    router.push(switchLocaleInPath(pathname, normalizedCode));
    setIsOpen(false);
  };

  return (
    <div className={`relative flex items-center self-stretch h-full ${isOpen ? 'open' : ''}`.trim()} ref={rootRef}>
      <button
        type="button"
        className="flex items-center justify-center h-full p-0 border-none bg-transparent"
        aria-expanded={isOpen}
        aria-label="Select language"
        onClick={() => setIsOpen((currentValue) => !currentValue)}
      >
        <img
          className="block h-auto w-[26px] rounded-[3px] border border-[var(--ink-16)] opacity-[0.90] grayscale-[16%] saturate-[86%] shadow-[0_0_0_var(--ink-00)] transition-all duration-150 ease-out"
          src={getFlagAssetPath(currentCode)}
          alt={currentLanguage?.label || 'Language'}
          loading="lazy"
          style={isOpen ? {
            filter: 'grayscale(0%) saturate(105%)',
            opacity: 1,
            transform: 'translateY(-8px) scale(1.04)',
            boxShadow: '0 10px 20px var(--ink-20)'
          } : undefined}
        />
      </button>

      <div className={`absolute right-0 top-[calc(100%+10px)] flex min-w-[168px] flex-col gap-[3px] rounded-[14px] border border-[var(--border)] bg-[var(--bg-overlay-95)] p-2 opacity-0 shadow-lg backdrop-blur-[10px] pointer-events-none translate-y-px scale-[0.98] transition-all duration-150 ease-out ${isOpen ? 'pointer-events-auto translate-y-0 scale-100 opacity-100' : ''}`.trim()}>
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
