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
  const baseClasses = 'ds-btn';
  const variantClasses = {
    primary: 'ds-btn--primary',
    outline: 'ds-btn--outline',
    light: 'ds-btn--light',
    heroPrimary: 'px-6 py-3 rounded-full font-medium text-[15px] transition-all duration-150 ease-out bg-white text-black hover:bg-gray-100',
    heroSecondary: 'px-6 py-3 rounded-full font-medium text-[15px] transition-all duration-150 ease-out bg-white/10 text-white border border-white/20 hover:bg-white/20'
  };
  const sizeClasses = size === 'lg' ? 'ds-btn--lg' : '';
  const fullWidthClasses = fullWidth ? 'ds-btn--full' : '';

  const classes = [
    baseClasses,
    variantClasses[variant] ?? variantClasses.primary,
    sizeClasses,
    fullWidthClasses,
    className
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button type={type} className={classes} style={style} onClick={onClick}>
      {children}
    </button>
  );
}
