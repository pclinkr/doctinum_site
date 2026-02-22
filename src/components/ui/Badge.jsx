export default function Badge({ children, className = '', style, as = 'span' }) {
  const Component = as;
  return (
    <Component className={`inline-block bg-[var(--ink-06)] rounded-full px-3 py-1 text-[12px] font-[var(--w500)] tracking-[0.05em] uppercase text-[var(--muted)] ${className}`.trim()} style={style}>
      {children}
    </Component>
  );
}
