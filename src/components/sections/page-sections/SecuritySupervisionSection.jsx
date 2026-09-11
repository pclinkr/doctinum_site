import Container from '../../layout/Container';

export default function SecuritySupervisionSection({
  label,
  title,
  intro,
  items = [],
}) {
  return (
    <section className="bg-color-primary py-[clamp(56px,7vw,110px)] text-white">
      <Container>
        <div className="mx-auto max-w-[860px]">
          <p className="rev mb-5 text-[12px] font-[var(--w500)] uppercase tracking-[0.16em] text-color-accent-1">
            {label}
          </p>
          <h2 className="rev mb-5 font-serif text-[clamp(1.9rem,3.2vw,2.8rem)] font-[600] leading-[1.16] tracking-[-0.02em] text-white">
            {title}
          </h2>
          <p className="rev mb-8 max-w-[680px] text-[17px] font-light leading-[1.8] text-white-60">
            {intro}
          </p>

          <div className="flex flex-col gap-0 overflow-hidden rounded-[20px] border border-white-10">
            {items.map((item, index) => (
              <div
                key={index}
                className={`rev grid grid-cols-[4rem_1fr] gap-8 border-white-08 px-8 py-7 ${
                  index < items.length - 1 ? 'border-b' : ''
                }`}
              >
                <div className="pt-[0.1rem] font-serif text-[1.5rem] font-[var(--w400)] text-color-accent-1">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div>
                  <div className="mb-2 text-[14px] font-[var(--w500)] uppercase tracking-[0.06em] text-white">
                    {item.title}
                  </div>
                  <div className="text-[15px] leading-[1.7] text-white-60">
                    {item.text}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
