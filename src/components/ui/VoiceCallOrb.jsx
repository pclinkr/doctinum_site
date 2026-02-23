import { Orb } from './orb';

const ORB_COLORS = ['#f4edff', '#d6b7ff', '#aa7eff'];

export default function VoiceCallOrb({ mode = 'listening', isActive = false }) {
  const normalizedMode = mode === 'speaking' ? 'speaking' : 'listening';
  const agentState = isActive ? (normalizedMode === 'speaking' ? 'talking' : 'listening') : null;

  return (
    <div className={`relative flex h-full w-full items-center justify-center overflow-hidden rounded-full transition-all duration-240 ease-out ${normalizedMode === 'speaking' ? 'scale-[1.01]' : 'scale-[0.996]'}`.trim()} aria-hidden="true">
      <Orb
        className="relative h-full w-full overflow-hidden rounded-full [&_canvas]:!block [&_canvas]:!h-full [&_canvas]:!w-full [&_canvas]:!rounded-[9999px] [&_canvas]:!transform-none"
        colors={ORB_COLORS}
        agentState={agentState}
      />
    </div>
  );
}
