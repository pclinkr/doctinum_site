import Container from '../../layout/Container';

export default function EditorsCaseRow({
  imagePosition = 'right',
  imageUrl = '',
  title = '',
  description = '',
  items = [],
  className = '',
  containerClassName = '',
}) {
  const isImageRight = imagePosition === 'right';

  return (
    <Container className={`py-16 ${containerClassName}`}>
      <section className={`rev ${className}`}>
        <div className="grid grid-cols-2 items-center gap-12 max-[809px]:grid-cols-1">
          <div
            className={`relative aspect-[4/3] overflow-hidden rounded-[var(--r-lg)] ${isImageRight ? 'min-[810px]:order-2' : 'min-[810px]:order-1'}`}
            style={{
              background: imageUrl ? undefined : 'var(--gradient-accent-cool)',
            }}
          >
            {imageUrl ? (
              <>
                <img
                  src={imageUrl}
                  alt={title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'var(--gradient-overlay-top)' }}
                />
              </>
            ) : null}
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
          </div>
        </div>
      </section>
    </Container>
  );
}
