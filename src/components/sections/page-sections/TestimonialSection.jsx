import { useTranslation } from 'react-i18next';

export default function TestimonialSection({
  quote,
  quotePrefix = '',
  quoteAccent = '',
  author,
  role,
  avatarUrl,
  initials,
  visualStyle,
  visualText,
  visualImageUrl,
  visualClassName = 'testi-vis-bg',
  className = '',
  showQuote = true,
  showAuthor = true,
  showVisual = true,
}) {
  const { t } = useTranslation();

  return (
    <section
      className={`rev mx-auto w-full max-w-[1200px] px-16 py-24 max-[1024px]:px-8 max-[768px]:px-5 ${className}`}
    >
      <div className="grid grid-cols-[1fr_220px] items-center gap-11 rounded-[28px] bg-[var(--surface)] p-14 max-[809px]:grid-cols-1 max-[809px]:px-7">
        <div>
          {showQuote && (
            <>
              <div className="font-serif text-[60px] leading-none text-[var(--border-mid)]">
                &ldquo;
              </div>
              <p className="mb-5 text-[clamp(17px,2.5vw,22px)] font-[var(--w500)] leading-[1.45] tracking-[-0.04em]">
                {quotePrefix && `${quotePrefix} `}
                {quoteAccent && <em>{quoteAccent}</em>}
                {quote && ` ${quote}`}
              </p>
            </>
          )}

          {showAuthor && (author || role) && (
            <div className="flex items-center gap-3">
              <div className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-[var(--border-mid)] text-[12px] font-[var(--w500)] text-[var(--muted)] overflow-hidden">
                {avatarUrl ? (
                  <img
                    src={avatarUrl}
                    alt={author || t('common.avatar')}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  initials || t('common.authorInitials')
                )}
              </div>
              <div>
                {author && (
                  <div className="text-[14px] font-[var(--w500)] tracking-[var(--track)]">
                    {author}
                  </div>
                )}
                {role && (
                  <div className="text-[12px] text-[var(--muted)]">{role}</div>
                )}
              </div>
            </div>
          )}
        </div>

        {showVisual && (
          <div
            className="relative aspect-[3/4] overflow-hidden rounded-[var(--r-md)]"
            style={{
              ...visualStyle,
              ...(visualImageUrl && {
                backgroundImage: `url(${visualImageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }),
            }}
          >
            {visualText ? (
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--serif)',
                  fontStyle: 'italic',
                  fontSize: '28px',
                  color: '#fff',
                  textShadow: '0 2px 8px rgba(0,0,0,.3)',
                }}
              >
                {visualText}
              </div>
            ) : (
              !visualImageUrl && <div className={visualClassName} />
            )}
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-[1] h-[30%] bg-gradient-to-t from-white/90 via-white/70 to-transparent" />
          </div>
        )}
      </div>
    </section>
  );
}
