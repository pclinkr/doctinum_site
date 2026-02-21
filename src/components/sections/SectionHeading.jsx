export default function SectionHeading({ label, title, className = '', style }) {
  return (
    <div className={className} style={style}>
      {label ? <p className="sec-label ds-text-label">{label}</p> : null}
      <h2 className="sec-h ds-text-h2">{title}</h2>
    </div>
  );
}
