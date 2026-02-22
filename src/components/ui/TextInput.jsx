export default function TextInput({ className = '', ...props }) {
  return <input className={`bg-[var(--surface)] border border-[var(--border-mid)] rounded-[var(--r-md)] px-[18px] py-[14px] text-[14px] text-[var(--color-primary)] transition-interactive resize-none leading-[1.5] outline-none ${className}`.trim()} {...props} />;
}
