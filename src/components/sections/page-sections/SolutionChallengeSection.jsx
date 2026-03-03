import Container from '../../layout/Container';

export default function SolutionChallengeSection({ 
  items = [],
  className = "",
  containerClassName = ""
}) {
  return (
    <Container className={`py-16 ${containerClassName}`}>
      <div className={`space-y-0 ${className}`}>
        {items.map((item, index) => (
          <div 
            key={index}
            className={`rev grid grid-cols-[180px_1fr] gap-12 py-14 max-[809px]:grid-cols-1 max-[809px]:gap-4 ${
              index < items.length - 1 ? 'border-b border-[var(--border)]' : ''
            }`}
          >
            <div className="pt-1 text-[13px] tracking-[var(--track)] text-[var(--muted)]">
              {item.label}
            </div>
            <div>
              {item.title && (
                <h3 className="mb-4 text-[clamp(22px,3vw,32px)] font-[var(--w500)] leading-[var(--lh-head)] tracking-[-0.05em]">
                  {item.title}
                </h3>
              )}
              {item.description && (
                <p className="text-[14px] leading-[1.75] text-[var(--muted)]">
                  {item.description}
                </p>
              )}
              {item.listItems && (
                <ul className="space-y-4">
                  {item.listItems.map((listItem, listIndex) => (
                    <li 
                      key={listIndex}
                      className="flex items-center gap-4 pl-8 relative group"
                    >
                      <span className="absolute left-0 w-1.5 h-1.5 rounded-full bg-[#d8c8a8] shadow-[0_0_8px_rgba(216,200,168,0.4)]"></span>
                      <span className="absolute left-0 w-0.5 h-6 bg-gradient-to-b from-[var(--accent)]/30 to-transparent -top-1"></span>
                      <span className="relative">{listItem}</span>
                    </li>
                  ))}
                </ul>
              )}
              {item.metrics && (
                <div className="flex flex-wrap gap-16 max-[809px]:gap-8">
                  {item.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex}>
                      <div 
                        className="text-[clamp(40px,6vw,72px)] font-[var(--w500)] leading-none tracking-[-0.06em] tabular-nums"
                        data-target={metric.target}
                        data-suffix={metric.suffix}
                      >
                        {metric.value || '0'}
                      </div>
                      <div className="mt-1 text-[14px] font-[var(--w500)] text-[var(--muted)]">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
