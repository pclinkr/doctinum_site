export default function Card({ children, className = '', style, as = 'div', onClick }) {
  const Component = as;
  return (
    <Component className={`bg-[var(--surface)] rounded-[var(--r-md)] ${className}`.trim()} style={style} onClick={onClick}>
      {children}
    </Component>
  );
}
