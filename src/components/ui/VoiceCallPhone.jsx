import PhoneCallControl from './PhoneCallControl';
import VoiceCallOrb from './VoiceCallOrb';

const CALL_STATE_LABELS = {
  idle: 'Ready',
  connecting: 'Connecting',
  live: 'In call',
  fallback: 'Fallback mode',
  ended: 'Completed',
  error: 'Retry required'
};

export default function VoiceCallPhone({ domainLabel, state, orbMode, onStartCall, onHangupCall, avatarUrl }) {
  const stateLabel = CALL_STATE_LABELS[state] || CALL_STATE_LABELS.idle;
  const isActive = state === 'live' || state === 'connecting' || state === 'fallback';
  const showPreCallAvatarWaves = state === 'idle';
  const avatarStyle = avatarUrl
    ? { '--medical-avatar-image': `url("${avatarUrl}")` }
    : undefined;

  return (
    <div className="voice-phone-wrap medical-phone-wrap">
      <div className="voice-phone-glow" />
      <div className="voice-phone-frame medical-phone-frame">
        <div className="voice-phone-notch" />
        <div className="voice-phone-content">
          <div className="medical-phone-visual-stack">
            <div className={`medical-phone-avatar-layer ${isActive ? 'is-hidden' : 'is-visible'}`.trim()}>
              <div className={`medical-phone-avatar-shell ${showPreCallAvatarWaves ? 'pre-call' : ''}`.trim()}>
                <span className="medical-phone-avatar-wave wave-1" />
                <span className="medical-phone-avatar-wave wave-2" />
                <span className="medical-phone-avatar-wave wave-3" />
                <div className="voice-avatar medical-phone-avatar" style={avatarStyle} />
              </div>
            </div>

            <div className={`medical-phone-orb-layer ${isActive ? 'is-visible' : 'is-hidden'}`.trim()}>
              <VoiceCallOrb mode={orbMode} isActive={isActive} />
            </div>
          </div>
          <div className="voice-agent-name">Clara</div>
          <div className="voice-agent-role">{domainLabel}</div>
        </div>

        <PhoneCallControl
          state={state}
          onStartCall={onStartCall}
          onHangupCall={onHangupCall}
        />

        {/* <p className="medical-phone-state">{stateLabel}</p> */}
      </div>
    </div>
  );
}
