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
  const classes = ['ds-btn', 'btn'];

  if (variant === 'primary') classes.push('ds-btn--primary', 'btn-primary');
  if (variant === 'outline') classes.push('ds-btn--outline', 'btn-outline');
  if (variant === 'light') classes.push('ds-btn--light', 'btn-light');
  if (size === 'lg') classes.push('ds-btn--lg', 'btn-lg');
  if (fullWidth) classes.push('ds-btn--full', 'btn-full');
  if (className) classes.push(className);

  return (
    <button type={type} className={classes.join(' ')} style={style} onClick={onClick}>
      {children}
    </button>
  );
}
