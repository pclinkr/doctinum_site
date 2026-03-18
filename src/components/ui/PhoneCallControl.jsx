import { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

const ACTIVE_CALL_STATES = new Set(['connecting', 'live', 'fallback']);
const SLIDE_TRIGGER_THRESHOLD = 0.84;
const SLIDER_HORIZONTAL_PADDING = 6;
const SLIDER_HORIZONTAL_PADDING_ENDED = 2;
const SLIDER_VERTICAL_PADDING = 6;
const SLIDER_VERTICAL_PADDING_ENDED = 10;

// Variables CSS pour les tailles adaptatives
const BUTTON_SIZE_RATIO = 0.15; // 15% de la largeur du téléphone
const BUTTON_SIZE_RATIO_ENDED = 0.18;
const SLIDER_HEIGHT_RATIO = 0.125; // 12.5% de la largeur du téléphone
const SLIDER_HEIGHT_RATIO_ENDED = 0.19;
const HANGUP_BUTTON_RATIO = 0.18; // 18% pour le bouton raccrocher (plus grand)
const CONTROL_WIDTH_RATIO = 0.86;
const CONTROL_WIDTH_RATIO_ENDED = 0.76;

function clamp(value, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

function PhoneHandsetIcon({ className, style }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      style={style}
    >
      <path
        fillRule="evenodd"
        d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function PhoneCallControl({ state, onStartCall, onHangupCall }) {
  const { t } = useTranslation();
  const sliderTrackRef = useRef(null);
  const dragStartXRef = useRef(0);
  const dragStartProgressRef = useRef(0);
  const sliderProgressRef = useRef(0);
  const dragMovedRef = useRef(false);
  const startCallTimerRef = useRef(null);
  const [sliderProgress, setSliderProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const isCallActive = ACTIVE_CALL_STATES.has(state);
  const isCallEnded = state === 'ended';
  const sliderHorizontalPadding = isCallEnded
    ? SLIDER_HORIZONTAL_PADDING_ENDED
    : SLIDER_HORIZONTAL_PADDING;
  const sliderVerticalPadding = isCallEnded
    ? SLIDER_VERTICAL_PADDING_ENDED
    : SLIDER_VERTICAL_PADDING;
  const sliderHeightRatio = isCallEnded
    ? SLIDER_HEIGHT_RATIO_ENDED
    : SLIDER_HEIGHT_RATIO;
  const sliderKnobRatio = isCallEnded
    ? BUTTON_SIZE_RATIO_ENDED
    : BUTTON_SIZE_RATIO;

  useEffect(() => {
    sliderProgressRef.current = sliderProgress;
  }, [sliderProgress]);

  useEffect(() => {
    if (startCallTimerRef.current) {
      window.clearTimeout(startCallTimerRef.current);
      startCallTimerRef.current = null;
    }

    if (isCallActive) {
      setSliderProgress(1);
      setIsDragging(false);
      return;
    }

    setSliderProgress(0);
    setIsDragging(false);
  }, [isCallActive]);

  useEffect(() => {
    return () => {
      if (!startCallTimerRef.current) return;
      window.clearTimeout(startCallTimerRef.current);
      startCallTimerRef.current = null;
    };
  }, []);

  const triggerStartCall = useCallback(() => {
    if (isCallActive) return;

    if (startCallTimerRef.current) {
      window.clearTimeout(startCallTimerRef.current);
      startCallTimerRef.current = null;
    }

    setSliderProgress(1);
    startCallTimerRef.current = window.setTimeout(() => {
      startCallTimerRef.current = null;
      onStartCall?.();
    }, 160);
  }, [isCallActive, onStartCall]);

  useEffect(() => {
    if (!isDragging || isCallActive) return undefined;

    const updateDrag = (event) => {
      if (!sliderTrackRef.current) return;

      const trackRect = sliderTrackRef.current.getBoundingClientRect();
      const sliderKnobWidth = trackRect.width * sliderKnobRatio;
      const maxOffset = Math.max(
        1,
        trackRect.width - sliderKnobWidth - sliderHorizontalPadding * 2
      );
      const deltaX = event.clientX - dragStartXRef.current;
      if (Math.abs(deltaX) > 4) {
        dragMovedRef.current = true;
      }
      const rawProgress = clamp(
        dragStartProgressRef.current + deltaX / maxOffset
      );
      const easedProgress = Math.pow(rawProgress, 0.94);
      setSliderProgress(easedProgress);
    };

    const completeDrag = () => {
      setIsDragging(false);

      if (!dragMovedRef.current) {
        triggerStartCall();
        return;
      }

      if (sliderProgressRef.current >= SLIDE_TRIGGER_THRESHOLD) {
        triggerStartCall();
        return;
      }

      setSliderProgress(0);
    };

    window.addEventListener('pointermove', updateDrag);
    window.addEventListener('pointerup', completeDrag);
    window.addEventListener('pointercancel', completeDrag);

    return () => {
      window.removeEventListener('pointermove', updateDrag);
      window.removeEventListener('pointerup', completeDrag);
      window.removeEventListener('pointercancel', completeDrag);
    };
  }, [
    isDragging,
    isCallActive,
    sliderHorizontalPadding,
    sliderKnobRatio,
    triggerStartCall,
  ]);

  const beginDrag = (event) => {
    if (isCallActive || event.button === 2 || !sliderTrackRef.current) return;

    dragStartXRef.current = event.clientX;
    dragStartProgressRef.current = sliderProgressRef.current;
    dragMovedRef.current = false;
    setIsDragging(true);
  };

  const handleSliderKeyboard = (event) => {
    if (isCallActive) return;
    if (event.key !== 'Enter' && event.key !== ' ') return;

    event.preventDefault();
    triggerStartCall();
  };

  if (isCallActive) {
    const isConnecting = state === 'connecting';
    
    return (
      <div
        className="mx-auto mb-3 flex justify-center"
        style={{
          width: 'calc(var(--medical-phone-frame-width) * 0.9)',
        }}
      >
        <button
          type="button"
          disabled={isConnecting}
          className={`flex items-center justify-center rounded-full border p-0 text-white shadow-[0_12px_24px_rgba(178,43,43,.3)] transition-all duration-150 ease-out ${
            isConnecting
              ? 'border-[#9ca3af] bg-[#d1d5db] cursor-not-allowed opacity-50'
              : 'border-[#be3232] bg-[#dc4343] hover:translate-y-px hover:scale-[1.03] hover:shadow-[0_14px_30px_rgba(178,43,43,.35)]'
          }`}
          style={{
            width:
              'calc(var(--medical-phone-frame-width) * ' +
              HANGUP_BUTTON_RATIO +
              ')',
            height:
              'calc(var(--medical-phone-frame-width) * ' +
              HANGUP_BUTTON_RATIO +
              ')',
          }}
          onClick={onHangupCall}
          aria-label="Hang up call"
        >
          <span
            className="inline-flex items-center justify-center text-white"
            style={{
              width:
                'calc(var(--medical-phone-frame-width) * ' +
                HANGUP_BUTTON_RATIO +
                ' * 0.625)',
              height:
                'calc(var(--medical-phone-frame-width) * ' +
                HANGUP_BUTTON_RATIO +
                ' * 0.625)',
            }}
            aria-hidden="true"
          >
            <PhoneHandsetIcon
              className="block h-full w-full origin-center rotate-[135deg]"
              style={{
                width:
                  'calc(var(--medical-phone-frame-width) * ' +
                  HANGUP_BUTTON_RATIO +
                  ' * 0.417)',
                height:
                  'calc(var(--medical-phone-frame-width) * ' +
                  HANGUP_BUTTON_RATIO +
                  ' * 0.417)',
              }}
            />
          </span>
        </button>
      </div>
    );
  }

  return (
    <div
      className="mx-auto mb-1"
      style={{
        width: `calc(var(--medical-phone-frame-width) * ${
          isCallEnded ? CONTROL_WIDTH_RATIO_ENDED : CONTROL_WIDTH_RATIO
        })`,
      }}
    >
      <div
        ref={sliderTrackRef}
        className={`relative flex touch-none select-none items-center overflow-hidden rounded-full border border-[rgba(31,39,61,.12)] ${isDragging ? 'cursor-grabbing' : ''}`.trim()}
        style={{
          '--slide-progress': sliderProgress,
          background: 'var(--gradient-surface-soft)',
          height:
            'calc(var(--medical-phone-frame-width) * ' +
            sliderHeightRatio +
            ')',
          paddingLeft: sliderHorizontalPadding + 'px',
          paddingRight: sliderHorizontalPadding + 'px',
          paddingTop: sliderVerticalPadding + 'px',
          paddingBottom: sliderVerticalPadding + 'px',
        }}
        onPointerDown={(event) => {
          if (event.target === sliderTrackRef.current) beginDrag(event);
        }}
        role="button"
        tabIndex={0}
        aria-label={t('sections.medicalVoice.controls.slideToCall')}
        onKeyDown={handleSliderKeyboard}
      >
        <p
          className="overflow-hidden whitespace-nowrap text-[13px] font-[var(--w500)] tracking-[var(--track)] text-[#2f3752] opacity-[calc(1-var(--slide-progress)*.84)] translate-x-[calc(var(--slide-progress)*8px)] transition-all duration-150 ease-out"
          style={{
            paddingLeft: 'calc(var(--medical-phone-frame-width) * 0.25)',
            paddingRight: isCallEnded
              ? 'calc(var(--medical-phone-frame-width) * 0.29)'
              : 'calc(var(--medical-phone-frame-width) * 0.35)',
            maxWidth: isCallEnded
              ? 'calc(var(--medical-phone-frame-width) * 0.42)'
              : 'calc(var(--medical-phone-frame-width) * 0.5)',
            fontSize: 'calc(var(--medical-phone-frame-width) * 0.04)',
          }}
        >
          {t('sections.medicalVoice.controls.slideToCall')}
        </p>
        <div
          className="absolute flex gap-[5px] opacity-[calc(1-var(--slide-progress)*1.4)] transition-opacity duration-200 ease-out"
          style={{
            right: 'calc(var(--medical-phone-frame-width) * 0.08)',
          }}
          aria-hidden="true"
        >
          <span
            className="rotate-45 border-r-[1.6px] border-t-[1.6px] border-r-[rgba(47,55,82,.34)] border-t-[rgba(47,55,82,.34)] opacity-[0.18] animate-pulse"
            style={{
              width: 'calc(var(--medical-phone-frame-width) * 0.02)',
              height: 'calc(var(--medical-phone-frame-width) * 0.02)',
            }}
          />
          <span
            className="rotate-45 border-r-[1.6px] border-t-[1.6px] border-r-[rgba(47,55,82,.34)] border-t-[rgba(47,55,82,.34)] opacity-[0.18] animate-pulse [animation-delay:.2s]"
            style={{
              width: 'calc(var(--medical-phone-frame-width) * 0.02)',
              height: 'calc(var(--medical-phone-frame-width) * 0.02)',
            }}
          />
          <span
            className="rotate-45 border-r-[1.6px] border-t-[1.6px] border-r-[rgba(47,55,82,.34)] border-t-[rgba(47,55,82,.34)] opacity-[0.18] animate-pulse [animation-delay:.4s]"
            style={{
              width: 'calc(var(--medical-phone-frame-width) * 0.02)',
              height: 'calc(var(--medical-phone-frame-width) * 0.02)',
            }}
          />
        </div>
        <div
          className={`absolute top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full border text-white transition-all duration-150 ease-out ${
            isCallEnded
              ? 'border-[#0f8d50] bg-[linear-gradient(155deg,#31d887_0%,#1ab66a_56%,#119954_100%)] shadow-[0_12px_26px_rgba(20,108,64,.34)]'
              : 'border-[#12854a] bg-[#19a85f] shadow-[0_10px_20px_rgba(20,95,58,.28)]'
          } ${isDragging ? 'cursor-grabbing transition-none' : 'cursor-grab'}`.trim()}
          style={{
            width:
              'calc(var(--medical-phone-frame-width) * ' +
              sliderKnobRatio +
              ')',
            height:
              'calc(var(--medical-phone-frame-width) * ' +
              sliderKnobRatio +
              ')',
            left:
              'calc(' +
              sliderHorizontalPadding +
              'px + var(--slide-progress) * (100% - calc(var(--medical-phone-frame-width) * ' +
              sliderKnobRatio +
              ') - ' +
              sliderHorizontalPadding * 2 +
              'px))',
          }}
          role="button"
          tabIndex={-1}
          aria-hidden="true"
          onPointerDown={beginDrag}
        >
          <span className="pointer-events-none absolute inset-[2px] rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,.28)_0%,rgba(255,255,255,0)_62%)]" />
          <span
            className="relative z-[1] inline-flex items-center justify-center text-white"
            style={{
              width:
                'calc(var(--medical-phone-frame-width) * ' +
                sliderKnobRatio +
                ' * 0.4)',
              height:
                'calc(var(--medical-phone-frame-width) * ' +
                sliderKnobRatio +
                ' * 0.4)',
            }}
            aria-hidden="true"
          >
            <PhoneHandsetIcon
              className="block h-full w-full origin-center rotate-0"
              style={{
                width: '100%',
                height: '100%',
              }}
            />
          </span>
        </div>
      </div>
    </div>
  );
}
