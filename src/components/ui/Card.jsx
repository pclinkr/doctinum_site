export default function Card({
  children,
  className = '',
  style,
  as = 'div',
  onClick,
}) {
  const Component = as;
  return (
    <Component
      className={`ds-card ${className}`.trim()}
      style={style}
      onClick={onClick}
    >
      {children}
    </Component>
  );
}
