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
    <div className="rev mb-12 grid grid-cols-2 items-center gap-10 border-b border-[var(--border)] pb-12 last:mb-0 last:border-b-0 max-[809px]:flex max-[809px]:flex-col">
      <div className={`relative aspect-[4/3] cursor-pointer overflow-hidden rounded-[var(--r-md)] transition-transform duration-300 ease-spring hover:scale-[1.02] ${isImageRight ? 'min-[810px]:order-2' : 'min-[810px]:order-1'}`.trim()} data-cursor="video" onClick={() => onNavigate(navigateTo)} style={{ cursor: 'pointer' }}>
        <div className="h-full w-full" style={{ background: imageGradient }} />
        <div className="absolute bottom-4 right-6 rounded-[var(--r-sm)] bg-[var(--white-90)] px-3 py-2 text-[13px] font-[var(--w500)] backdrop-blur-[8px]">{brand}</div>
      </div>
      <div className={`flex flex-col gap-4 ${isImageRight ? 'min-[810px]:order-1' : 'min-[810px]:order-2'}`.trim()}>
        <p className="text-[11px] font-[var(--w500)] uppercase tracking-[0.07em] text-[var(--muted)]">{tag}</p>
        <h3 className="text-[clamp(22px,3vw,32px)] font-[var(--w500)] leading-[var(--lh-head)] tracking-[-0.055em]">
          {titlePrefix} <span className="si">{titleAccent}</span>
        </h3>
        <p className="text-[14px] leading-[1.7] text-[var(--muted)]">{body}</p>
        <div className="flex flex-wrap gap-7">
          {kpis.map((kpi) => (
            <div key={kpi.label}>
              <div className="text-[28px] leading-none tracking-[-0.06em] tabular-nums font-[var(--w500)]" data-target={kpi.target} data-suffix={kpi.suffix}>
                0{kpi.suffix}
              </div>
              <div className="mt-1 text-[11px] font-[var(--w500)] uppercase tracking-[0.06em] text-[var(--muted)]">{kpi.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
