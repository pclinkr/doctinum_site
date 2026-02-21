export default function CaseRow({
  onNavigate,
  navigateTo = 'case-detail',
  imagePosition = 'right',
  imageGradient,
  brand,
  tag,
  titlePrefix,
  titleAccent,
  body,
  kpis = []
}) {
  const isImageRight = imagePosition === 'right';

  return (
    <div className={`case-row rev ${isImageRight ? 'case-row--image-right' : ''}`.trim()}>
      <div className="case-thumb" data-cursor="video" onClick={() => onNavigate(navigateTo)} style={{ cursor: 'pointer' }}>
        <div className="case-thumb-bg" style={{ background: imageGradient }} />
        <div className="case-brand">{brand}</div>
      </div>
      <div className="case-content">
        <p className="case-tag">{tag}</p>
        <h3 className="case-h">
          {titlePrefix} <span className="si">{titleAccent}</span>
        </h3>
        <p className="case-body">{body}</p>
        <div className="case-kpis">
          {kpis.map((kpi) => (
            <div key={kpi.label}>
              <div className="kpi-num" data-target={kpi.target} data-suffix={kpi.suffix}>
                0{kpi.suffix}
              </div>
              <div className="kpi-lbl">{kpi.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
