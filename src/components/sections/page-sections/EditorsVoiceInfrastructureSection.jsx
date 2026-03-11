import Container from '../../layout/Container';

export default function EditorsVoiceInfrastructureSection({
  title = '',
  blocks = [],
  className = '',
  containerClassName = '',
}) {
  const icons = [
    <path key="settings" d="M12 15a3 3 0 100-6 3 3 0 000 6z M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />,
    <path key="timeline" d="M3 3v18h18 M7 16l4-4 4 4 6-6" />,
    <path key="users" d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2 M9 11a4 4 0 100-8 4 4 0 000 8z M23 21v-2a4 4 0 00-3-3.87 M16 3.13a4 4 0 010 7.75" />,
  ];

  return (
    <Container className={`py-20 ${containerClassName}`}>
      <section className={`rev text-center ${className}`}>
        <h2 className="mb-12 text-[clamp(34px,4.2vw,50px)] leading-[1.02] tracking-[-0.045em]">
          {title}
        </h2>

        <div className="relative grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Animated curved line connecting icons */}
          <svg
            className="pointer-events-none absolute left-0 top-[36px] hidden h-[72px] w-full md:block"
            viewBox="0 0 100 10"
            preserveAspectRatio="none"
          >
            <path
              d="M 8 5 Q 25 0, 50 5 T 92 5"
              fill="none"
              stroke="var(--border-mid)"
              strokeWidth="0.3"
              strokeDasharray="2 2"
              opacity="0.6"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="4"
                to="0"
                dur="2s"
                repeatCount="indefinite"
              />
            </path>
          </svg>

          {blocks.map((block, index) => (
            <article
              key={index}
              className="rev relative z-10 flex flex-col items-center px-7 py-8 text-center"
            >
              <div className="mb-6 flex h-[72px] w-[72px] items-center justify-center rounded-[18px] bg-[var(--color-primary)]">
                <svg
                  className="h-[26px] w-[26px] fill-none stroke-[2] stroke-[var(--text-inverse)] [stroke-linecap:round] [stroke-linejoin:round]"
                  viewBox="0 0 24 24"
                >
                  {icons[index]}
                </svg>
              </div>
              <h3 className="mb-3 text-[23px] font-[var(--w500)] leading-[1.08] tracking-[-0.04em] text-[var(--color-primary)]">
                {block.title}
              </h3>
              <p className="text-[15px] leading-[1.68] text-[var(--muted)]">
                {block.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </Container>
  );
}
