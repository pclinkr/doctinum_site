import { useTranslation } from 'react-i18next';
import Button from './Button';

export default function NavMegaMenu({ menu, onNavigate, isDev = false }) {
  const { t } = useTranslation();
  if (!menu) return null;

  const visibleGroups = (menu.groups || [])
    .map((group) => ({
      ...group,
      links: (group.links || []).filter((link) => !link.devOnly || isDev)
    }))
    .filter((group) => group.links.length > 0);

  return (
    <div className="relative border-y border-[var(--border)] bg-[var(--bg-overlay-94)] shadow-[0_26px_72px_var(--ink-14),0_42px_110px_var(--ink-08)] backdrop-blur-[12px]" role="group" aria-label={menu.eyebrow}>
      <div className="mx-auto grid max-w-[1200px] grid-cols-[320px_1fr] gap-10 px-16 py-[34px]">
        <div className="flex flex-col gap-[14px]">
          <p className="text-[11px] font-[var(--w500)] uppercase tracking-[0.07em] text-[var(--muted)]">{menu.eyebrow}</p>
          <h3 className="text-[30px] font-[var(--w500)] leading-[1.08] tracking-[-0.05em]">{menu.title}</h3>
          <p className="max-w-[30ch] text-[14px] leading-[1.6] text-[var(--muted)]">{menu.body}</p>
          {menu.cta?.page && (
            <Button className="w-fit self-start" variant="light" onClick={() => onNavigate(menu.cta.page)}>
              {menu.cta.label}
            </Button>
          )}
        </div>

        <div className="grid grid-cols-3 gap-4">
          {visibleGroups.map((group) => (
            <div key={group.title} className="rounded-[16px] border border-[var(--ink-05)] bg-[var(--white-54)] p-4">
              <p className="px-1 pb-3 text-[11px] font-[var(--w500)] uppercase tracking-[0.07em] text-[var(--muted)]">{group.title}</p>
              <div className="flex flex-col gap-[6px]">
                {group.links.map((link) => (
                  <button
                    key={link.label}
                    className={`flex w-full flex-col items-start gap-1 rounded-[10px] p-2 text-left transition-all duration-150 ease-out hover:translate-y-px hover:bg-[var(--ink-04)] ${link.isSoon ? 'cursor-not-allowed opacity-60' : ''}`.trim()}
                    type="button"
                    onClick={() => link.page && onNavigate(link.page)}
                    disabled={link.isSoon || !link.page}
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-[14px] font-[var(--w500)] tracking-[var(--track)]">{link.label}</span>
                      {link.isSoon && <span className="text-[10px] uppercase tracking-[0.05em] text-[var(--muted)]">{t('megaMenu.soon')}</span>}
                    </span>
                    {/* {link.description ? <span className="text-[12px] leading-[1.5] text-[var(--muted)]">{link.description}</span> : null} */}
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
