import Container from '../../layout/Container';

export default function PatientSupportChallengeSection({
  title = '',
  items = [],
  className = '',
  containerClassName = '',
}) {
  return (
    <Container className={`py-16 ${containerClassName}`}>
      <section className={`rev ${className}`}>
        <h2 className="mb-12 text-[clamp(34px,4.2vw,50px)] leading-[1.02] tracking-[-0.045em]">
          {title}
        </h2>
        
        <div className="grid grid-cols-2 gap-12 max-[809px]:grid-cols-1">
          {items.map((item, index) => (
            <div key={index} className="space-y-6">
              <div>
                <h3 className="mb-4 text-[18px] font-[var(--w500)] text-[var(--foreground)]">
                  {item.title}
                </h3>
                {item.listItems && (
                  <ul className="space-y-3">
                    {item.listItems.map((listItem, listIndex) => (
                      <li
                        key={listIndex}
                        className="flex items-start gap-3 text-[14px] leading-[1.7] text-[var(--muted)]"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--border-mid)]"></span>
                        <span>{listItem}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}
