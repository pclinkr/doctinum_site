export default function SectionHeading({ label, title, className = '', style }) {
  return (
    <div className={className} style={style}>
      {label ? <p className="ds-text-label mb-3">{label}</p> : null}
      <h2 className="text-[var(--color-primary)]">{title}</h2>
    </div>
  );
}
