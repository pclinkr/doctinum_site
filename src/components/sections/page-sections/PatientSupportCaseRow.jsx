import Container from '../../layout/Container';

export default function PatientSupportCaseRow({
  sectionTitle = '',
  imagePosition = 'right',
  imageUrl = '',
  title = '',
  description = '',
  items = [],
  description2 = '',
  items2 = [],
  description3 = '',
  items3 = [],
  footer = '',
  className = '',
  containerClassName = '',
}) {
  const isImageRight = imagePosition === 'right';

  return (
    <Container className={`py-16 ${containerClassName}`}>
      <section className={`rev ${className}`}>
        {sectionTitle && (
          <h2 className="mb-12 text-[clamp(34px,4.2vw,50px)] leading-[1.02] tracking-[-0.045em]">
            {sectionTitle}
          </h2>
        )}
        
        <div className="grid grid-cols-2 items-center gap-12 max-[809px]:grid-cols-1">
          <div
            className={`relative aspect-[4/3] overflow-hidden rounded-[var(--r-lg)] bg-cover bg-center ${isImageRight ? 'min-[810px]:order-2' : 'min-[810px]:order-1'}`}
            style={{
              backgroundImage: imageUrl ? `url(${imageUrl})` : 'none',
              background: imageUrl ? undefined : 'var(--gradient-accent-cool)',
            }}
          >
            {imageUrl && (
              <div
                className="absolute inset-0"
                style={{ background: 'var(--gradient-overlay-top)' }}
              />
            )}
          </div>

          <div className={`flex flex-col gap-6 ${isImageRight ? 'min-[810px]:order-1' : 'min-[810px]:order-2'}`}>
            <h3 className="text-[clamp(26px,3.2vw,36px)] font-[var(--w500)] leading-[1.12] tracking-[-0.045em]">
              {title}
            </h3>
            
            {description && (
              <p className="text-[16px] leading-[1.7] text-[var(--muted)]">
                {description}
              </p>
            )}
            
            {items && items.length > 0 && (
              <ul className="space-y-3">
                {items.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-[15px] leading-[1.7] text-[var(--muted)]"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-primary)]"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {description2 && (
              <p className="text-[16px] leading-[1.7] text-[var(--muted)]">
                {description2}
              </p>
            )}
            
            {items2 && items2.length > 0 && (
              <ul className="space-y-3">
                {items2.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-[15px] leading-[1.7] text-[var(--muted)]"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-primary)]"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {description3 && (
              <p className="text-[16px] leading-[1.7] text-[var(--muted)]">
                {description3}
              </p>
            )}
            
            {items3 && items3.length > 0 && (
              <ul className="space-y-3">
                {items3.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-[15px] leading-[1.7] text-[var(--muted)]"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-primary)]"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {footer && (
              <p className="text-[16px] font-[var(--w500)] leading-[1.7] text-[var(--foreground)]">
                {footer}
              </p>
            )}
          </div>
        </div>
      </section>
    </Container>
  );
}
