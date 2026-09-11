import Container from '../../layout/Container';

export default function VisionThesisSection({
  label,
  title,
  body,
  pillars = [],
}) {
  return (
    <section className="bg-color-primary py-[clamp(56px,7vw,110px)] text-center text-white">
      <Container>
        <p className="mb-5 text-[12px] font-[var(--w500)] uppercase tracking-[0.16em] text-color-accent-1">
          {label}
        </p>

        <h2 className="rev mx-auto mb-8 max-w-[700px] font-serif text-[clamp(1.9rem,3.2vw,2.8rem)] font-[600] leading-[1.16] tracking-[-0.02em]">
          {title}
        </h2>

        <p className="rev mx-auto mb-14 max-w-[580px] text-[17px] font-light leading-[1.8] text-white-65">
          {body}
        </p>

        <div className="rev mx-auto flex max-w-[900px] flex-col overflow-hidden rounded-[20px] border border-white-12 lg:flex-row">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className={`flex-1 border-white-12 px-7 py-8 text-left ${
                index < pillars.length - 1
                  ? 'border-b lg:border-b-0 lg:border-r'
                  : ''
              }`}
            >
              <span className="mb-3 block font-serif text-[13px] text-color-accent-1">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="mb-[10px] text-[14px] font-[var(--w500)] uppercase tracking-[0.06em]">
                {pillar.title}
              </div>
              <p className="text-[15px] leading-[1.7] text-white-60">
                {pillar.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
