import Card from '../../ui/Card';

export default function BlogGridSection({ cards, onNavigate }) {
  return (
    <section className="mx-auto w-full max-w-[1200px] px-16 pb-24 pt-0 max-[1024px]:px-8 max-[768px]:px-5">
      <div className="grid grid-cols-2 gap-5 max-[809px]:grid-cols-1">
        {cards.map(([title, subtitle, date, gradient, delayClass]) => (
          <Card
            key={title}
            className={`group rev cursor-pointer overflow-hidden rounded-[var(--r-md)] bg-[var(--surface)] transition-transform duration-300 ease-spring transition-shadow duration-300 ease-out hover:translate-y-px hover:shadow-[0_16px_48px_var(--ink-10)] ${delayClass}`.trim()}
            onClick={() => onNavigate('blog-post')}
          >
            <div className="aspect-[16/9] overflow-hidden">
              <div
                className="h-full w-full transition-transform duration-300 ease-out group-hover:scale-[1.04]"
                style={{ background: gradient }}
              />
            </div>
            <div className="flex flex-col gap-2 px-6 py-6">
              <h3 className="text-[16px] font-[var(--w500)] leading-[1.35] tracking-[-0.04em]">
                {title}
              </h3>
              <p className="text-[13px] font-[var(--w500)] leading-[1.6] tracking-[var(--track)] text-[var(--muted)]">
                {subtitle}
              </p>
              <div className="mt-1 flex items-center justify-between">
                <span className="text-[12px] text-[var(--muted)]">{date}</span>
                <div className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-[var(--color-primary)]">
                  <svg
                    className="h-[10px] w-[10px] fill-none stroke-2 stroke-white [stroke-linecap:round]"
                    viewBox="0 0 10 10"
                  >
                    <path d="M2 5h6M5 2l3 3-3 3" />
                  </svg>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
