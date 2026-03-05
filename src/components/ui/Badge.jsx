export default function Badge({
  children,
  className = '',
  style,
  as = 'span',
}) {
  const Component = as;
  return (
    <Component className={`ds-badge ${className}`.trim()} style={style}>
      {children}
    </Component>
  );
}
