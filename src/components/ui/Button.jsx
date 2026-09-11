export default function Button({
  children,
  variant = 'primary',
  size,
  fullWidth = false,
  className = '',
  style,
  onClick,
  type = 'button',
}) {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 px-[26px] py-[13px] rounded-full border font-sans text-[13.5px] leading-none font-medium tracking-[var(--track)] cursor-pointer whitespace-nowrap transition-[transform,background-color,border-color,box-shadow,color] duration-300 ease-out hover:-translate-y-[2px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-action)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)] motion-reduce:hover:translate-y-0';

  const variantClasses = {
    primary:
      'bg-[var(--color-action)] text-[var(--color-white)] border-transparent shadow-[0_10px_24px_-12px_rgba(34,30,26,0.55)] hover:bg-[var(--color-action-hover)] hover:shadow-[0_16px_32px_-14px_rgba(34,30,26,0.6)]',
    outline:
      'bg-transparent text-[var(--color-text)] border-[var(--color-border-strong)] hover:border-[var(--color-action)] hover:text-[var(--color-action)]',
    light:
      'bg-[var(--color-white)] text-[var(--color-text)] border-transparent',
    heroPrimary:
      'bg-[var(--color-action)] text-[var(--color-white)] border-transparent shadow-[0_12px_28px_-12px_rgba(34,30,26,0.55)] hover:bg-[var(--color-action-hover)] hover:shadow-[0_18px_36px_-14px_rgba(34,30,26,0.62)]',
    heroSecondary:
      'bg-transparent text-[var(--color-text)] border-[var(--color-border-strong)] hover:border-[var(--color-action)] hover:text-[var(--color-action)]',
    darkPrimary:
      'border-transparent bg-[var(--color-white)] px-7 py-[14px] text-[13px] text-[var(--color-primary)] shadow-[0_14px_30px_-16px_rgba(0,0,0,0.8)] hover:bg-[var(--color-surface)]',
    darkSecondary:
      'bg-transparent border-[var(--white-38)] px-7 py-[14px] text-[13px] text-[var(--color-white)] hover:border-[var(--color-white)] hover:bg-[var(--white-10)]',
  };

  const sizeClasses = size === 'lg' ? 'px-[30px] py-4 text-[15px]' : '';
  // Pas de rayon ici: `rounded-md` entrait en conflit avec le `rounded-full`
  // de la base, et le bouton du formulaire de contact comme celui du menu
  // mobile finissaient avec des angles que n'a aucun autre bouton du site.
  const fullWidthClasses = fullWidth ? 'w-full' : '';

  const classes = [
    baseClasses,
    variantClasses[variant] ?? variantClasses.primary,
    sizeClasses,
    fullWidthClasses,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button type={type} className={classes} style={style} onClick={onClick}>
      {children}
    </button>
  );
}
