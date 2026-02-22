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
    light: 'ds-btn--light'
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
