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
  const baseClasses = 'inline-flex items-center justify-center gap-2 px-[22px] py-3 rounded-full border font-sans text-[14px] leading-none font-medium tracking-[var(--track)] cursor-pointer whitespace-nowrap transition-all duration-200 ease-out hover:scale-[0.98] hover:opacity-90';
  
  const variantClasses = {
    primary: 'bg-[var(--action-primary-bg)] text-[var(--action-primary-fg)] border-none',
    outline: 'bg-[var(--action-secondary-bg)] text-[var(--action-secondary-fg)] border-[var(--border-strong)] hover:bg-[var(--color-border)]',
    light: 'bg-[var(--text-inverse)] text-[var(--text-primary)]',
    heroPrimary: 'bg-[var(--action-primary-bg)] text-[var(--action-primary-fg)] uppercase',
    heroSecondary: 'bg-[var(--action-secondary-bg)] text-[var(--action-secondary-fg)] border-[var(--border-strong)] hover:bg-[var(--color-border)] uppercase',
    darkPrimary:
      'border border-[var(--color-white)] bg-[var(--white-90)] px-7 py-[14px] text-[12px] uppercase tracking-[0.08em] text-[var(--color-primary)] hover:bg-[var(--white-90)]',
    darkSecondary:
      'border-[var(--white-55)] px-7 py-[14px] text-[12px] uppercase tracking-[0.08em] text-[var(--color-white)] hover:border-[var(--white-90)] hover:bg-[var(--white-20)]',
  };
  
  const sizeClasses = size === 'lg' ? 'px-[30px] py-4 text-[15px]' : '';
  const fullWidthClasses = fullWidth ? 'w-full rounded-md' : '';

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
