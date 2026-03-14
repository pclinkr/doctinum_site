import { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

const ACTIVE_CALL_STATES = new Set(['connecting', 'live', 'fallback']);
const SLIDE_TRIGGER_THRESHOLD = 0.84;
const SLIDER_KNOB_WIDTH = 48;
const SLIDER_HORIZONTAL_PADDING = 6;

// Variables CSS pour les tailles adaptatives
const BUTTON_SIZE_RATIO = 0.15; // 15% de la largeur du téléphone
const SLIDER_HEIGHT_RATIO = 0.125; // 12.5% de la largeur du téléphone
const HANGUP_BUTTON_RATIO = 0.18; // 18% pour le bouton raccrocher (plus grand)

function clamp(value, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

function PhoneHandsetIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
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
      const maxOffset = Math.max(
        1,
        trackRect.width - SLIDER_KNOB_WIDTH - SLIDER_HORIZONTAL_PADDING * 2
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
  }, [isDragging, isCallActive, triggerStartCall]);

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
    return (
      <div 
        className="mx-auto mb-3 flex justify-center"
        style={{
          width: 'calc(var(--medical-phone-frame-width) * 0.9)',
        }}
      >
        <button
          type="button"
          className="flex items-center justify-center rounded-full border border-[#be3232] bg-[#dc4343] p-0 text-white shadow-[0_12px_24px_rgba(178,43,43,.3)] transition-all duration-150 ease-out hover:translate-y-px hover:scale-[1.03] hover:shadow-[0_14px_30px_rgba(178,43,43,.35)]"
          style={{
            width: 'calc(var(--medical-phone-frame-width) * ' + HANGUP_BUTTON_RATIO + ')',
            height: 'calc(var(--medical-phone-frame-width) * ' + HANGUP_BUTTON_RATIO + ')',
          }}
          onClick={onHangupCall}
          aria-label="Hang up call"
        >
          <span
            className="inline-flex items-center justify-center text-white"
            style={{
              width: 'calc(var(--medical-phone-frame-width) * ' + HANGUP_BUTTON_RATIO + ' * 0.625)',
              height: 'calc(var(--medical-phone-frame-width) * ' + HANGUP_BUTTON_RATIO + ' * 0.625)',
            }}
            aria-hidden="true"
          >
            <PhoneHandsetIcon 
              className="block origin-center rotate-[135deg]" 
              style={{
                width: 'calc(var(--medical-phone-frame-width) * ' + HANGUP_BUTTON_RATIO + ' * 0.417)',
                height: 'calc(var(--medical-phone-frame-width) * ' + HANGUP_BUTTON_RATIO + ' * 0.417)',
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
        width: 'calc(var(--medical-phone-frame-width) * 0.9)',
      }}
    >
      <div
        ref={sliderTrackRef}
        className={`relative flex touch-none select-none items-center overflow-hidden rounded-full border border-[rgba(31,39,61,.12)] px-[6px] py-[6px] ${isDragging ? 'cursor-grabbing' : ''}`.trim()}
        style={{
          '--slide-progress': sliderProgress,
          background: 'var(--gradient-surface-soft)',
          height: 'calc(var(--medical-phone-frame-width) * ' + SLIDER_HEIGHT_RATIO + ')',
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
            paddingRight: 'calc(var(--medical-phone-frame-width) * 0.35)',
            maxWidth: 'calc(var(--medical-phone-frame-width) * 0.5)',
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
          className={`absolute top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full border border-[#12854a] bg-[#19a85f] text-white shadow-[0_10px_20px_rgba(20,95,58,.28)] transition-all duration-150 ease-out ${isDragging ? 'cursor-grabbing transition-none' : 'cursor-grab'}`.trim()}
          style={{
            width: 'calc(var(--medical-phone-frame-width) * ' + BUTTON_SIZE_RATIO + ')',
            height: 'calc(var(--medical-phone-frame-width) * ' + BUTTON_SIZE_RATIO + ')',
            left: 'calc(6px + var(--slide-progress) * (100% - calc(var(--medical-phone-frame-width) * ' + BUTTON_SIZE_RATIO + ') - 12px))',
          }}
          role="button"
          tabIndex={-1}
          aria-hidden="true"
          onPointerDown={beginDrag}
        >
          <span
            className="inline-flex items-center justify-center text-white"
            style={{
              width: 'calc(var(--medical-phone-frame-width) * ' + BUTTON_SIZE_RATIO + ' * 0.417)',
              height: 'calc(var(--medical-phone-frame-width) * ' + BUTTON_SIZE_RATIO + ' * 0.417)',
            }}
            aria-hidden="true"
          >
            <PhoneHandsetIcon 
              className="block origin-center rotate-0" 
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
