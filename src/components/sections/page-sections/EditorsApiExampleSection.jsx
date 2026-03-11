import Container from '../../layout/Container';

export default function EditorsApiExampleSection({
  title = '',
  examples = [],
  className = '',
  containerClassName = '',
}) {
  return (
    <Container className={`py-20 ${containerClassName}`}>
      <section className={`rev ${className}`}>
        <h2 className="mb-12 text-[clamp(34px,4.2vw,50px)] leading-[1.02] tracking-[-0.045em]">
          {title}
        </h2>

        <div className="space-y-8">
          {examples.map((example, index) => (
            <div
              key={index}
              className="rounded-[var(--r-lg)] border border-[var(--border)] bg-[var(--bg-page)] p-8"
            >
              <h3 className="mb-4 text-[18px] font-[var(--w500)] text-[var(--foreground)]">
                {example.title}
              </h3>
              
              <div className="rounded-[var(--r-md)] bg-[#1e1e1e] p-6">
                <div className="mb-2 flex items-center gap-3">
                  <span className="rounded bg-[#4CAF50] px-2 py-1 text-[12px] font-[var(--w500)] text-white">
                    {example.method}
                  </span>
                  <code className="text-[14px] text-[#9CDCFE]">
                    {example.endpoint}
                  </code>
                </div>
                
                {example.body && (
                  <pre className="mt-4 overflow-x-auto text-[13px] leading-[1.6] text-[#D4D4D4]">
                    <code>{example.body}</code>
                  </pre>
                )}
                
                {example.response && (
                  <div className="mt-4">
                    <p className="mb-2 text-[12px] text-[#858585]">Response:</p>
                    <pre className="overflow-x-auto text-[13px] leading-[1.6] text-[#D4D4D4]">
                      <code>{example.response}</code>
                    </pre>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}
