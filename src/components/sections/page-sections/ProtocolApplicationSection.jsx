import Container from '../../layout/Container';

export default function ProtocolApplicationSection({
  title = '',
  subtitle = '',
  items = [],
  footer = '',
  className = '',
  containerClassName = '',
}) {
  const icons = [
    <path key="calendar" d="M8 2v4m8-4v4M3 10h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" />,
    <path key="activity" d="M22 12h-4l-3 9L9 3l-3 9H2" />,
    <path key="alert" d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4m0 4h.01" />,
    <path key="clock" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z M12 6v6l4 2" />,
  ];

  return (
    <Container className={`py-20 ${containerClassName}`}>
      <section className={`rev text-center ${className}`}>
        <h2 className="mb-4 text-[clamp(34px,4.2vw,50px)] leading-[1.02] tracking-[-0.045em]">
          {title}
        </h2>
        <p className="mx-auto mb-12 max-w-[720px] text-[16px] leading-[1.7] text-[var(--muted)]">
          {subtitle}
        </p>

        <div className="relative mx-auto max-w-[1080px]">
          <div className="relative mb-8 h-[86px] max-[809px]:hidden">
            <div className="pointer-events-none absolute inset-0 z-0">
              <svg
                className="absolute left-0 top-1/2 h-[74px] w-full -translate-y-1/2"
                viewBox="0 0 1080 140"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M90 70 C220 100, 340 100, 540 60 C740 20, 860 20, 990 50"
                  fill="none"
                  stroke="var(--border-mid)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  className="protocol-flow-path"
                  d="M90 70 C220 100, 340 100, 540 60 C740 20, 860 20, 990 50"
                  fill="none"
                  stroke="var(--action-primary-bg)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="220 2000"
                />
              </svg>
            </div>

            <div className="relative z-[1] grid grid-cols-4">
              {items.map((item, index) => (
                <div
                  key={item.title}
                  className={`rev ${index === 0 ? 'd1' : index === 1 ? 'd2' : index === 2 ? 'd3' : 'd4'} mx-auto flex h-[92px] w-[92px] items-center justify-center rounded-[22px] bg-[var(--color-primary)]`}
                >
                  <svg
                    className="h-[22px] w-[22px] fill-none stroke-[2] stroke-[var(--text-inverse)] [stroke-linecap:round] [stroke-linejoin:round]"
                    viewBox="0 0 24 24"
                  >
                    {icons[index]}
                  </svg>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-4 gap-8 max-[809px]:grid-cols-1">
            {items.map((item, index) => (
              <article
                key={item.title}
                className={`rev ${index === 0 ? 'd1' : index === 1 ? 'd2' : index === 2 ? 'd3' : 'd4'} flex flex-col items-center px-7 py-8 text-center`}
              >
                <div className="mb-4 hidden h-[56px] w-[56px] items-center justify-center rounded-[16px] border border-[var(--border)] bg-[var(--bg-page)] max-[809px]:flex">
                  <svg
                    className="h-[19px] w-[19px] fill-none stroke-[2] stroke-[var(--color-primary)] [stroke-linecap:round] [stroke-linejoin:round]"
                    viewBox="0 0 24 24"
                  >
                    {icons[index]}
                  </svg>
                </div>
                <h3 className="mb-2 flex h-[100px] items-center justify-center text-[23px] font-[var(--w500)] leading-[1.08] tracking-[-0.04em] text-[var(--color-primary)] max-[1024px]:h-[90px] max-[1024px]:text-[20px]">
                  <span>{item.title}</span>
                </h3>
                <p className="w-full text-[15px] leading-[1.68] text-[var(--muted)]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        {footer && (
          <p className="mt-12 text-[16px] font-[var(--w500)] text-[var(--foreground)]">
            {footer}
          </p>
        )}

        <style>{`
          .protocol-flow-path {
            animation: protocol-flow 2.8s cubic-bezier(0.4, 0, 0.2, 1) infinite alternate;
          }
          @keyframes protocol-flow {
            from {
              stroke-dashoffset: 360;
              opacity: 0.95;
            }
            to {
              stroke-dashoffset: -720;
              opacity: 0.7;
            }
          }
        `}</style>
      </section>
    </Container>
  );
}
