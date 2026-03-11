import Container from '../../layout/Container';

export default function SecurityGuaranteesSection({ 
  label,
  title,
  intro,
  guarantees = []
}) {
  const icons = [
    // Shield Check (HDS)
    <path key="shield-check" strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />,
    // Lock Closed (Encryption)
    <path key="lock" strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />,
    // Document Check (Consent)
    <path key="document-check" strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12.75" />,
    // User Circle (Access Control)
    <path key="user-circle" strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />,
    // Globe Europe Africa (Location)
    <path key="globe" strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />,
    // Magnifying Glass (Verification)
    <path key="magnifying-glass" strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />,
  ];

  return (
    <section className="bg-color-primary py-28">
      <Container>
        <div className="mx-auto max-w-[860px]">
          <p className="rev mb-5 text-[11px] font-medium uppercase tracking-[0.18em] text-color-white">
            {label}
          </p>
          <h2 className="rev mb-5 text-[clamp(1.6rem,2.5vw,2.2rem)] text-color-white font-[var(--w400)] leading-[1.25] tracking-[-0.02em]">
            {title}
          </h2>
          <p className="rev mb-10 max-w-[680px] text-[1rem] font-light leading-[1.8] text-color-white">
            {intro}
          </p>
          
          <div className="grid grid-cols-1 gap-px border border-color-border bg-color-border md:grid-cols-2">
            {guarantees.map((item, index) => (
              <div
                key={index}
                className="rev grid grid-cols-[3rem_1fr] gap-5 bg-white p-8"
              >
                <svg
                  className="h-8 w-8 flex-shrink-0 stroke-[1.5] stroke-color-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  {icons[index]}
                </svg>
                <div>
                  <div className="mb-2 text-[0.85rem] font-medium uppercase tracking-[0.06em]">
                    {item.title}
                  </div>
                  <div className="mb-3 text-[0.88rem] font-light leading-[1.7] text-ink-65">
                    {item.text}
                  </div>
                  {item.tag && (
                    <span className="inline-block border border-color-border bg-color-surface px-[0.6rem] py-[0.2rem] text-[0.7rem] font-medium uppercase tracking-[0.08em] text-color-primary">
                      {item.tag}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
