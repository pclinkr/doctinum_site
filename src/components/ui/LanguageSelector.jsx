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
    <div className={`lang-selector ${isOpen ? 'open' : ''}`.trim()} ref={rootRef}>
      <button
        type="button"
        className="lang-trigger"
        aria-expanded={isOpen}
        aria-label="Select language"
        onClick={() => setIsOpen((currentValue) => !currentValue)}
      >
        <img
          className="lang-trigger-flag"
          src={getFlagAssetPath(currentCode)}
          alt={currentLanguage?.label || 'Language'}
          loading="lazy"
        />
      </button>

      <div className={`lang-menu ${isOpen ? 'open' : ''}`.trim()}>
        {orderedOptions.map((option) => {
          const isCurrent = normalizeLanguageCode(option.code) === currentCode;
          return (
            <button
              key={option.code}
              type="button"
              className={`lang-option ${isCurrent ? 'active' : ''}`.trim()}
              onClick={() => handleSelect(option.code)}
            >
              <img
                className="lang-option-flag"
                src={getFlagAssetPath(normalizeLanguageCode(option.code))}
                alt=""
                aria-hidden="true"
                loading="lazy"
              />
              <span className="lang-option-label">{option.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
