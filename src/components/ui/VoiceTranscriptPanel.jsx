import { useTranslation } from 'react-i18next';

export default function VoiceTranscriptPanel({ transcriptEntries, transcriptViewportRef }) {
  const { t } = useTranslation();

  return (
    <div className="medical-transcript-free">
      <div className="medical-transcript-body-free" ref={transcriptViewportRef}>
        {transcriptEntries.length === 0 ? (
          <p className="medical-transcript-empty" aria-hidden="true" />
        ) : (
          transcriptEntries.map((entry, entryIndex) => (
            <div
              key={entry.id}
              className={`medical-transcript-line ${entry.role === 'agent' ? 'agent' : 'patient'}`.trim()}
              style={{ '--entry-stagger': `${Math.min(entryIndex, 10) * 28}ms` }}
            >
              <p className="medical-transcript-speaker">{entry.role === 'agent' ? t('sections.medicalVoice.transcript.agent') : t('sections.medicalVoice.transcript.patient')}</p>
              <p className="medical-transcript-text">{entry.text || '...'}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
