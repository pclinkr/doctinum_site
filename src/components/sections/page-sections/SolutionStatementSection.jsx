export default function SolutionStatementSection({ 
  statementTitle,
  statementBody,
  impactTitle,
  impactItems,
  numberColor = "text-[rgba(164,126,70,0.5)]",
  textColor = "text-[rgba(46,39,30,0.94)]",
  haloGradient = "var(--gradient-impact-warm-halo)",
  dividerGradient = "var(--gradient-impact-warm-divider)",
  borderColor = "border-[rgba(164,126,70,0.2)]",
  titleColor = "text-[var(--color-primary)]",
  listWidth = "max-[980px]:grid-cols-1",
  numberSize = "text-[34px]",
  textSize = "text-[15px]",
  className = ""
}) {
  return (
    <div className={`rev mb-10 ${className}`}>
      <div className={`grid grid-cols-[1.1fr_.9fr] gap-8 ${listWidth}`}>
        <div className="flex flex-col gap-4">
          <h3 className={`text-[clamp(24px,3.2vw,36px)] font-[var(--w500)] leading-[1.08] tracking-[-0.045em] ${titleColor}`}>
            {statementTitle && (
              <>
                <span className="block">{statementTitle.line1}</span>
                <span className="block">{statementTitle.line2}</span>
              </>
            )}
          </h3>
          {statementBody && (
            <p className={`max-w-[65ch] ${textSize} leading-[1.72] text-[var(--muted)]`}>
              {statementBody}
            </p>
          )}
        </div>

        <div className="relative pt-2 pl-5 max-[980px]:pl-0">
          <div className="pointer-events-none absolute inset-0" style={{ background: haloGradient }} />
          <div className="pointer-events-none absolute left-0 top-0 h-full w-px max-[980px]:hidden" style={{ background: dividerGradient }} />
          {impactTitle && (
            <p className="relative mb-5 text-[11px] font-[var(--w500)] uppercase tracking-[0.1em] text-[rgba(126,93,45,0.78)]">
              {impactTitle}
            </p>
          )}
          <div className="flex flex-col">
            {impactItems.map((itemText, index) => (
              <div key={index} className={`rev relative grid grid-cols-[60px_1fr] items-start gap-3 py-4 ${index < impactItems.length - 1 ? borderColor : ''} ${index === 0 ? 'd1' : index === 1 ? 'd2' : 'd3'}`.trim()}>
                <span className={`pt-[1px] ${numberSize} font-[var(--w500)] leading-none tracking-[-0.04em] ${numberColor}`}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className={`max-w-[36ch] pt-[5px] font-[var(--w500)] leading-[1.14] tracking-[-0.028em] ${textColor}`}>
                  {itemText}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
