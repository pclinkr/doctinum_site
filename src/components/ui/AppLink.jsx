'use client';

import { useSiteAppContext } from '../../context/SiteAppContext';
import { buildLocalizedPath } from '../../constants/routes';
import { DEFAULT_LOCALE } from '../../constants/locales';

/**
 * Lien de navigation interne. Rend un vrai <a href> pour que les moteurs de
 * recherche puissent découvrir les pages, tout en laissant le routeur de
 * l'application intercepter le clic (transitions animées conservées).
 * Les clics avec modificateur (nouvel onglet, etc.) gardent le comportement
 * natif du navigateur.
 */
export default function AppLink({
  page,
  children,
  className = '',
  onNavigate,
  onClick,
  ...anchorProps
}) {
  const context = useSiteAppContext();
  const locale = context.locale || DEFAULT_LOCALE;
  const navigate = onNavigate || context.onNavigate;
  const href = buildLocalizedPath(page, locale);

  const handleClick = (event) => {
    onClick?.(event);
    if (event.defaultPrevented) return;

    const isModifiedClick =
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0;

    if (isModifiedClick || !navigate) return;

    event.preventDefault();
    navigate(page);
  };

  return (
    <a href={href} className={className} onClick={handleClick} {...anchorProps}>
      {children}
    </a>
  );
}
