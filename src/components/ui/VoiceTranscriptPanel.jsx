import { useTranslation } from 'react-i18next';

export default function VoiceTranscriptPanel({
  transcriptEntries,
  transcriptViewportRef,
}) {
  const { t } = useTranslation();

  return (
    <div className="flex h-full min-h-0 flex-col gap-2">
      <div
        className="flex flex-1 flex-col items-start justify-start gap-[10px] overflow-auto pr-2 max-h-none [scrollbar-width:thin]"
        ref={transcriptViewportRef}
      >
        {transcriptEntries.length === 0 ? (
          <p
            className="m-0 text-[13px] leading-[1.6] text-[var(--muted)]"
            aria-hidden="true"
          />
        ) : (
          transcriptEntries.map((entry, entryIndex) => (
            <div
              key={entry.id}
              className={`max-w-[94%] flex flex-col gap-1 opacity-0 translate-y-[10px] animate-[medicalLineIn_.42s_var(--ease-out)_forwards] ${entry.role === 'agent' ? 'self-start' : 'self-start text-left'}`.trim()}
              style={{ animationDelay: `${Math.min(entryIndex, 10) * 28}ms` }}
            >
              <p className="text-[10px] font-[var(--w500)] uppercase tracking-[0.12em] text-[rgba(29,37,56,.44)]">
                {entry.role === 'agent'
                  ? t('sections.medicalVoice.transcript.agent')
                  : t('sections.medicalVoice.transcript.patient')}
              </p>
              <p className="text-[clamp(13px,1.08vw,16px)] font-[var(--w500)] leading-[1.56] tracking-[-0.012em] text-[#35405b]">
                {entry.text || '...'}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
