import { useTranslation } from 'react-i18next';

export default function NavMegaMenu({ menu, onNavigate }) {
  const { t } = useTranslation();
  if (!menu) return null;

  return (
    <div className="mega-panel" role="group" aria-label={menu.eyebrow}>
      <div className="mega-panel-inner">
        <div className="mega-intro">
          <p className="mega-eyebrow">{menu.eyebrow}</p>
          <h3 className="mega-title">{menu.title}</h3>
          <p className="mega-body">{menu.body}</p>
          {menu.cta?.page && (
            <button className="mega-cta" type="button" onClick={() => onNavigate(menu.cta.page)}>
              {menu.cta.label}
            </button>
          )}
        </div>

        <div className="mega-grid">
          {menu.groups.map((group) => (
            <div key={group.title} className="mega-group">
              <p className="mega-group-title">{group.title}</p>
              <div className="mega-links">
                {group.links.map((link) => (
                  <button
                    key={link.label}
                    className={`mega-link ${link.isSoon ? 'is-soon' : ''}`.trim()}
                    type="button"
                    onClick={() => link.page && onNavigate(link.page)}
                    disabled={link.isSoon || !link.page}
                  >
                    <span className="mega-link-top">
                      <span className="mega-link-label">{link.label}</span>
                      {link.isSoon && <span className="mega-link-badge">{t('megaMenu.soon')}</span>}
                    </span>
                    <span className="mega-link-desc">{link.description}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
