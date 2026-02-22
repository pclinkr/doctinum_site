export default function SectionHeading({ label, title, className = '', style }) {
  return (
    <div className={className} style={style}>
      {label ? <p className="ds-text-label mb-3 text-[12px] font-[var(--w500)] uppercase tracking-[0.06em] text-[var(--muted)]">{label}</p> : null}
      <h2 className="ds-text-h2 text-[clamp(32px,4.5vw,52px)] font-[var(--w500)] leading-[var(--lh-head)] tracking-[-0.055em] text-[var(--color-primary)]">{title}</h2>
    </div>
  );
}
