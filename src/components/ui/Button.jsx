export default function Button({
  children,
  variant = 'primary',
  size,
  fullWidth = false,
  className = '',
  style,
  onClick,
  type = 'button'
}) {
  const baseClasses = 'inline-flex items-center justify-center px-[22px] py-3 rounded-full font-[var(--sans)] font-[var(--w500)] text-sm tracking-[var(--track)] cursor-pointer whitespace-nowrap border-none transition-interactive';
  
  let variantClasses = '';
  if (variant === 'primary') variantClasses = 'bg-[var(--cta-bg)] text-[var(--cta-text)] hover:opacity-80 hover:scale-[0.97]';
  if (variant === 'outline') variantClasses = 'bg-transparent text-[var(--color-primary)] border border-[var(--border-mid)] transition-colors-quick hover:bg-[var(--ink-05)]';
  if (variant === 'light') variantClasses = 'bg-[var(--cta-text)] text-[var(--color-primary)] hover:opacity-[0.88] hover:scale-[0.97]';
  
  const sizeClasses = size === 'lg' ? 'px-[30px] py-4 text-[15px]' : '';
  const fullWidthClasses = fullWidth ? 'w-full rounded-[var(--r-md)]' : '';
  
  const classes = [baseClasses, variantClasses, sizeClasses, fullWidthClasses, className].filter(Boolean).join(' ');

  return (
    <button type={type} className={classes} style={style} onClick={onClick}>
      {children}
    </button>
  );
}
