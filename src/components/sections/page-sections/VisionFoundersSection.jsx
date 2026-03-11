import Container from '../../layout/Container';

export default function VisionFoundersSection({ 
  label,
  title,
  intro,
  founders = []
}) {
  return (
    <section className="py-28">
      <Container>
        <div className="mx-auto max-w-[1000px]">
          <p className="rev mb-5 text-[11px] font-medium uppercase tracking-[0.18em] text-color-primary">
            {label}
          </p>
          <h2 className="rev mb-6 text-[clamp(29px,3vw,42px)] font-[var(--w500)] leading-[1.2] tracking-[-0.02em]">
            {title}
          </h2>
          <p className="rev mb-20 max-w-[560px] text-[17px] font-light leading-[1.8] text-ink-68">
            {intro}
          </p>
          
          <div className="flex flex-col gap-16">
            {founders.map((founder, index) => {
              const founderImage = index === 0 ? 'michael_gravure.png' : 'regis_gravure.png';
              
              return (
                <div
                  key={index}
                  className="rev relative overflow-hidden border border-color-border bg-white p-10"
                >
                  {/* <div className="absolute left-0 right-0 top-0 h-[3px] bg-color-primary" /> */}
                  
                  <img
                    src={`/assets/images/${founderImage}`}
                    alt=""
                    className="pointer-events-none absolute bottom-0 right-0 z-0 h-auto w-[300px] opacity-[0.08]"
                    aria-hidden="true"
                  />
                  
                  <div className="relative z-10">
                    <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.15em] text-color-primary">
                      {founder.role}
                    </p>
                    <h3 className="mb-6 text-[20px] font-[var(--w600)] tracking-[-0.01em]">
                      {founder.name}
                    </h3>
                    
                    <div className="mb-6 flex flex-col gap-4">
                      {founder.story.map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-[16px] font-light leading-[1.85] text-ink-68" dangerouslySetInnerHTML={{ __html: paragraph }} />
                      ))}
                    </div>
                    
                    {founder.insight && (
                      <div className="relative z-20 mt-6 py-5 px-5 mr-[200px] font-serif italic leading-[1.6]">
                        "{founder.insight}"
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
