import PhoneCallControl from './PhoneCallControl';
import VoiceCallOrb from './VoiceCallOrb';

export default function VoiceCallPhone({ domainLabel, state, orbMode, onStartCall, onHangupCall, avatarUrl }) {
  const isActive = state === 'live' || state === 'connecting' || state === 'fallback';
  const showPreCallAvatarWaves = state === 'idle';
  const avatarStyle = avatarUrl
    ? { '--medical-avatar-image': `url("${avatarUrl}")` }
    : undefined;

  return (
    <div className="relative flex h-[calc(var(--medical-phone-frame-height)+var(--medical-phone-bottom-pad))] min-h-0 items-start justify-center px-3 pb-[var(--medical-phone-bottom-pad)] transition-transform duration-220 ease-linear origin-[50%_55%]">
      <div className="absolute bottom-[8%] h-[48%] w-[82%] rounded-full opacity-[0.90] blur-[9px]" style={{ background: 'var(--gradient-voice-phone-glow)' }} />
      <div className="relative flex aspect-[0.53/1] w-[var(--medical-phone-frame-width)] min-w-[168px] flex-col justify-between rounded-[40px] border border-[rgba(86,94,128,.13)] p-[14px] shadow-[0_24px_65px_rgba(26,40,85,.14),inset_0_0_0_1px_var(--white-72)]" style={{ background: 'linear-gradient(to bottom,#ffffff,#f3efff)' }}>
        <div className="mx-auto mt-1 h-[8px] w-[82px] rounded-full bg-[rgba(120,126,158,.24)]" />
        <div className="flex flex-1 flex-col items-center justify-center gap-[6px]">
          <div className="relative isolate flex aspect-square w-[66%] items-center justify-center">
            <div className={`absolute inset-0 flex items-center justify-center transition-all duration-420 ease-out ${isActive ? 'pointer-events-none scale-[0.96] opacity-0' : 'scale-100 opacity-100'}`.trim()}>
              <div className={`relative isolate flex aspect-square w-full items-center justify-center ${showPreCallAvatarWaves ? 'pre-call' : ''}`.trim()}>
                <span className={`absolute inset-0 rounded-full border border-[rgba(133,102,214,.28)] pointer-events-none ${showPreCallAvatarWaves ? 'animate-medicalWavePulse wave-1' : 'opacity-0 scale-[0.82]'}`} />
                <span className={`absolute inset-0 rounded-full border border-[rgba(133,102,214,.28)] pointer-events-none ${showPreCallAvatarWaves ? 'animate-medicalWavePulse wave-2 [animation-delay:.75s]' : 'opacity-0 scale-[0.82]'}`} />
                <span className={`absolute inset-0 rounded-full border border-[rgba(133,102,214,.28)] pointer-events-none ${showPreCallAvatarWaves ? 'animate-medicalWavePulse wave-3 [animation-delay:1.5s]' : 'opacity-0 scale-[0.82]'}`} />
                <div className="relative z-[2] aspect-square w-full rounded-full shadow-[0_22px_45px_rgba(87,56,141,.2)]" style={{ ...avatarStyle, background: 'var(--gradient-medical-avatar-composite)', backgroundSize: 'cover,auto,auto,auto', backgroundPosition: 'center,center,center,center' }} />
              </div>
            </div>

            <div className={`absolute inset-0 flex items-center justify-center transition-all duration-420 ease-out ${isActive ? 'scale-100 opacity-100' : 'pointer-events-none scale-[0.96] opacity-0'}`.trim()}>
              <VoiceCallOrb mode={orbMode} isActive={isActive} />
            </div>
          </div>
          <div className="mt-1 text-[34px] font-[var(--w500)] tracking-[-0.06em] text-[#2b3246]">Clara</div>
          <div className="text-[16px] leading-[1.2] text-[rgba(43,50,70,.46)]">{domainLabel}</div>
        </div>

        <PhoneCallControl
          state={state}
          onStartCall={onStartCall}
          onHangupCall={onHangupCall}
        />

        {/* <p className="text-center text-[12px] uppercase tracking-[0.04em] text-[rgba(34,41,63,.56)]">{stateLabel}</p> */}
      </div>
    </div>
  );
}
