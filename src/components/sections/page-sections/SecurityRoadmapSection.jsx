import Container from '../../layout/Container';

export default function SecurityRoadmapSection({ 
  label,
  title,
  intro,
  items = []
}) {
  const getStatusClass = (status) => {
    switch (status) {
      case 'actif':
        return 'bg-[rgba(26,74,58,0.08)] text-color-primary border-[rgba(26,74,58,0.2)]';
      case 'engage':
        return 'bg-[rgba(200,184,154,0.15)] text-[#7a6a50] border-[rgba(200,184,154,0.4)]';
      case 'horizon':
        return 'bg-color-surface text-color-muted border-color-border';
      default:
        return 'bg-color-surface text-color-muted border-color-border';
    }
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case 'actif':
        return 'Actif';
      case 'engage':
        return 'Engagé';
      case 'horizon':
        return 'Horizon';
      default:
        return status;
    }
  };

  return (
    <section className="bg-color-surface py-28">
      <Container>
        <div className="mx-auto max-w-[860px]">
          <p className="rev mb-5 text-[11px] font-medium uppercase tracking-[0.18em] text-color-primary">
            {label}
          </p>
          <h2 className="rev mb-5 text-[clamp(1.6rem,2.5vw,2.2rem)] font-[var(--w400)] leading-[1.25] tracking-[-0.02em]">
            {title}
          </h2>
          <p className="rev mb-8 max-w-[680px] text-[1rem] font-light leading-[1.8] text-ink-68">
            {intro}
          </p>
          
          <div className="flex flex-col gap-0">
            {items.map((item, index) => (
              <div
                key={index}
                className={`rev grid grid-cols-1 gap-3 border-b border-color-border py-8 md:grid-cols-[8rem_1fr] md:gap-10 ${
                  index === 0 ? 'border-t' : ''
                }`}
              >
                <div className="pt-[0.1rem]">
                  <span className={`inline-block border px-[0.6rem] py-1 text-[0.7rem] font-medium uppercase tracking-[0.1em] ${getStatusClass(item.status)}`}>
                    {getStatusLabel(item.status)}
                  </span>
                </div>
                <div>
                  <div className="mb-2 text-[0.88rem] font-medium uppercase tracking-[0.06em]">
                    {item.title}
                  </div>
                  <div className="text-[0.9rem] font-light leading-[1.7] text-ink-65">
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
