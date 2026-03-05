import { useTranslation } from 'react-i18next';
import SectionHeading from '../SectionHeading';
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

export default function ImagineProtocolSection() {
  const { t } = useTranslation();
  const copy = t('sections.imagineProtocol', { returnObjects: true });

  return (
    <section className="mx-auto w-full max-w-[1200px] px-16 py-24 text-center max-[1024px]:px-8 max-[768px]:px-5">
      <SectionHeading
        className="rev"
        title={<>{copy.heading}</>}
        style={{ marginBottom: '48px' }}
      />

      <div className="rev grid grid-cols-2 gap-5 text-left max-[809px]:grid-cols-1">
        <div className="relative rounded-[var(--r-md)] bg-[var(--surface)] p-8">
          <div className="mb-4 border-b border-[var(--border)] pb-3 text-[12px] font-[var(--w500)] uppercase tracking-[0.07em] text-[var(--muted)]">
            {copy.left.label}
          </div>

          <div className="mb-6">
            <h4 className="mb-3 text-[16px] font-[var(--w500)] text-[var(--foreground)]">
              {copy.left.prepTitle}
            </h4>
            <div className="space-y-2">
              {copy.left.prepItems.map((item) => (
                <Bullet key={item} item={item} />
              ))}
            </div>
          </div>

          <div className="border-t border-[var(--border)] pt-4">
            <h4 className="mb-3 text-[16px] font-[var(--w500)] text-[var(--foreground)]">
              {copy.left.benefitsTitle}
            </h4>
            <div className="space-y-2">
              {copy.left.benefitsItems.map((item) => (
                <Bullet key={item} item={item} positive />
              ))}
            </div>
          </div>
        </div>

        <div className="relative rounded-[var(--r-md)] bg-[var(--surface)] p-8">
          <Badge className="absolute -top-3 right-5 rounded-full bg-[var(--color-primary)] px-[13px] py-1 text-[12px] font-[var(--w500)] text-[var(--cta-text)]">
            {copy.right.brand}
          </Badge>
          <div className="mb-4 border-b border-[var(--border)] pb-3 text-[12px] font-[var(--w500)] uppercase tracking-[0.07em] text-[var(--muted)]">
            {copy.right.label}
          </div>

          <div className="mb-6">
            <h4 className="mb-3 text-[16px] font-[var(--w500)] text-[var(--foreground)]">
              {copy.right.monitorTitle}
            </h4>
            <div className="mb-3 py-2 text-[14px] text-[var(--muted)]">
              {copy.right.monitorLead}
            </div>
            <div className="space-y-2">
              {copy.right.monitorItems.map((item) => (
                <Bullet key={item} item={item} />
              ))}
            </div>
          </div>

          <div className="border-t border-[var(--border)] pt-4">
            <h4 className="mb-3 text-[16px] font-[var(--w500)] text-[var(--foreground)]">
              {copy.right.responsesTitle}
            </h4>
            <div className="space-y-2">
              {copy.right.responsesItems.map((item) => (
                <Bullet key={item} item={item} positive />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
