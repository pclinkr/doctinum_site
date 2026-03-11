import Container from '../../layout/Container';
import Badge from '../../ui/Badge';

function Bullet({ item, positive = false }) {
  return (
    <div
      className={`flex items-center gap-[10px] py-2 text-[14px] ${positive ? 'text-[var(--color-primary)]' : 'text-[var(--muted)]'}`}
    >
      <span
        className={`flex h-[19px] w-[19px] shrink-0 items-center justify-center rounded-full ${positive ? 'bg-[var(--color-primary)]' : 'bg-[var(--ink-06)]'}`}
      >
        <svg
          className="h-[10px] w-[10px]"
          viewBox="0 0 10 10"
          stroke={positive ? '#fff' : 'currentColor'}
          strokeWidth={positive ? '2.5' : '2'}
          fill="none"
        >
          {positive ? (
            <polyline points="2,5 4.5,7.5 8,2.5" />
          ) : (
            <circle cx="5" cy="5" r="3" />
          )}
        </svg>
      </span>
      {item}
    </div>
  );
}

export default function EditorsPricingSection({
  title = '',
  leftTitle = '',
  leftItems = [],
  rightTitle = '',
  rightItems = [],
  className = '',
  containerClassName = '',
}) {
  return (
    <Container className={`py-20 ${containerClassName}`}>
      <section className={`rev text-center ${className}`}>
        <h2 className="mb-12 text-[clamp(34px,4.2vw,50px)] leading-[1.02] tracking-[-0.045em]">
          {title}
        </h2>

        <div className="rev grid grid-cols-2 gap-5 text-left max-[809px]:grid-cols-1">
          <div className="relative rounded-[var(--r-md)] bg-[var(--surface)] p-8">
            <div className="mb-4 border-b border-[var(--border)] pb-3 text-[16px] font-[var(--w500)] text-[var(--foreground)]">
              {leftTitle}
            </div>

            <div className="space-y-2">
              {leftItems.map((item, index) => (
                <Bullet key={index} item={item} />
              ))}
            </div>
          </div>

          <div className="relative rounded-[var(--r-md)] bg-[var(--surface)] p-8">
            <div className="mb-4 border-b border-[var(--border)] pb-3 text-[16px] font-[var(--w500)] text-[var(--foreground)]">
              {rightTitle}
            </div>

            <div className="space-y-2">
              {rightItems.map((item, index) => (
                <Bullet key={index} item={item} positive />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
