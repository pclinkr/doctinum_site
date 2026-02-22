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
          className="w-[26px] h-auto block grayscale-[16%] saturate-[86%] opacity-[0.90] radius-sm border border-[var(--ink-16)] shadow-[0_0_0_var(--ink-00)] transition-interactive"
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

      <div className={`absolute top-[calc(100%+10px)] right-0 min-w-[168px] p-2 bg-[var(--bg-overlay-95)] backdrop-blur-[10px] border border-[var(--border)] radius-lg shadow-lg flex flex-col gap-[3px] opacity-0 translate-y-px scale-[0.98] pointer-events-none transition-opacity-quick transition-transform-quick ${isOpen ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' : ''}`.trim()}>
        {orderedOptions.map((option) => {
          const isCurrent = normalizeLanguageCode(option.code) === currentCode;
          return (
            <button
              key={option.code}
              type="button"
              className={`flex items-center gap-[10px] p-2 radius-md transition-interactive transition-colors-quick text-left ${isCurrent ? 'bg-[var(--ink-08)]' : 'hover:bg-[var(--ink-05)]'}`.trim()}
              onClick={() => handleSelect(option.code)}
            >
              <img
                className="w-[22px] h-auto block opacity-100 radius-sm border border-[var(--ink-14)] transition-transform-quick transition-interactive"
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
