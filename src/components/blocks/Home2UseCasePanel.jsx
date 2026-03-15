export default function Home2UseCasePanel({ panel }) {
  if (!panel) return null;

  return (
    <div className="grid gap-12 py-10 min-[900px]:grid-cols-[1fr_1fr]">
      <div className="rev">
        <p className="mb-4 text-[11px] font-[var(--w500)] uppercase tracking-[0.14em] text-[var(--color-accent-1)]">
          {panel.context}
        </p>
        <h3 className="mb-4 max-w-[28ch] text-[clamp(1.8rem,3vw,2.1rem)] leading-[1.24] text-[var(--color-white)]">
          {panel.title}
        </h3>
        <p className="mb-7 max-w-[52ch] text-[15px] leading-[1.8] text-[var(--white-65)]">
          {panel.body}
        </p>

        <div className="flex flex-col border-y border-[var(--white-08)]">
          {(panel.items || []).map((item) => (
            <div
              key={item}
              className="flex gap-3 border-b border-[var(--white-08)] px-0 py-3 text-[14px] leading-[1.65] text-[var(--white-60)] last:border-b-0"
            >
              <span className="text-[var(--color-info)]">→</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="rev d1 border border-[var(--white-14)] bg-[var(--white-03)] p-6">
        <p className="mb-5 text-[10px] font-[var(--w500)] uppercase tracking-[0.14em] text-[var(--white-38)]">
          {panel.scenarioLabel}
        </p>

        <div className="flex flex-col gap-3">
          {(panel.messages || []).map((message, index) => {
            const isPatient = message.role === 'patient';
            return (
              <div
                key={`${message.role}-${index}`}
                className={`px-4 py-3 text-[12px] leading-[1.6] ${isPatient ? 'border-l-2 border-[var(--color-accent-2)] bg-[var(--white-04)] text-[var(--white-55)] italic' : 'border-l-2 border-[var(--color-accent-1)] bg-[var(--white-10)] text-[var(--white-84)]'}`.trim()}
              >
                <p
                  className={`mb-1 text-[9px] uppercase tracking-[0.12em] ${isPatient ? 'text-[var(--color-accent-2)]' : 'text-[var([var(--color-accent-1)]'}`.trim()}
                >
                  {message.roleLabel}
                </p>
                <p className="text-lg">{message.text}</p>
              </div>
            );
          })}
        </div>

        <div
          className={`mt-4 flex items-center gap-3 border px-4 py-3 text-[12px] leading-[1.5] ${panel.signal?.tone === 'warn' ? 'border-[color-mix(in_srgb,#fbbf24_35%,transparent)] bg-[color-mix(in_srgb,#fbbf24_8%,transparent)] text-[var(--white-70)]' : 'border-[color-mix(in_srgb,#f87171_35%,transparent)] bg-[color-mix(in_srgb,#f87171_8%,transparent)] text-[var(--white-70)]'}`.trim()}
        >
          <span
            className={`h-[6px] w-[6px] flex-none rounded-full ${panel.signal?.tone === 'warn' ? 'bg-[#fbbf24]' : 'bg-[#f87171]'}`.trim()}
          />
          <span>{panel.signal?.text}</span>
        </div>
      </div>
    </div>
  );
}
