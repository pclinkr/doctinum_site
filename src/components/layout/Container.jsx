export default function Container({ children, className = '', style, as = 'div', ...props }) {
  const Component = as;
  return (
    <Component className={`mx-auto max-w-[1200px] px-16 max-[1199px]:px-8 max-[809px]:px-5 ${className}`.trim()} style={style} {...props}>
      {children}
    </Component>
  );
}
