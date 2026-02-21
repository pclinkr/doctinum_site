import { Orb } from './orb';

const ORB_COLORS = ['#f4edff', '#d6b7ff', '#aa7eff'];

export default function VoiceCallOrb({ mode = 'listening', isActive = false }) {
  const normalizedMode = mode === 'speaking' ? 'speaking' : 'listening';
  const agentState = isActive ? (normalizedMode === 'speaking' ? 'talking' : 'listening') : null;

  return (
    <div className={`voice-call-orb-host ${normalizedMode} ${isActive ? 'is-active' : 'is-inactive'}`.trim()} aria-hidden="true">
      <Orb
        className="voice-call-orb-canvas"
        colors={ORB_COLORS}
        agentState={agentState}
      />
    </div>
  );
}
