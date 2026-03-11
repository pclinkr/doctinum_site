import Container from '../../layout/Container';

export default function PreventionRegulatorySection({ 
  title = 'Conformité et sécurité des données',
  description,
  items = [],
  certifications = []
}) {
  return (
    <Container className="py-20">
      <div className="mx-auto max-w-[900px]">
        <h2 className="mb-6 text-center text-[clamp(34px,4.2vw,50px)] leading-[1.02] tracking-[-0.045em]">
          {title}
        </h2>
        
        {description && (
          <p className="mb-12 text-center text-[18px] leading-[1.6] text-[var(--muted)]">
            {description}
          </p>
        )}

        {certifications && certifications.length > 0 && (
          <div className="mb-12 flex flex-wrap justify-center gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex flex-col items-center rounded-[16px] border-2 border-[var(--accent)] bg-[var(--color-border)] px-8 py-6 text-center"
              >
                <div className="mb-2 text-[32px] font-[var(--w600)] leading-[1] text-[var(--color-muted)]">
                  {cert.badge}
                </div>
                <div className="text-[14px] font-[var(--w500)] text-[var(--text-primary)]">
                  {cert.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {items && items.length > 0 && (
          <div className="space-y-4">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 rounded-[12px] border border-[var(--border)] bg-[var(--surface)] p-5"
              >
                <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--accent-light)] text-[var(--accent)]">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.6666 3.5L5.24992 9.91667L2.33325 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="flex-1 text-[15px] leading-[1.6] text-[var(--text-primary)]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </Container>
  );
}
