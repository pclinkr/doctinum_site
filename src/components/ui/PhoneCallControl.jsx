import { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

const ACTIVE_CALL_STATES = new Set(['connecting', 'live', 'fallback']);
const SLIDE_TRIGGER_THRESHOLD = 0.84;
const SLIDER_KNOB_WIDTH = 48;
const SLIDER_HORIZONTAL_PADDING = 6;

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
      const maxOffset = Math.max(1, trackRect.width - SLIDER_KNOB_WIDTH - SLIDER_HORIZONTAL_PADDING * 2);
      const deltaX = event.clientX - dragStartXRef.current;
      if (Math.abs(deltaX) > 4) {
        dragMovedRef.current = true;
      }
      const rawProgress = clamp(dragStartProgressRef.current + deltaX / maxOffset);
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
      <div className="phone-call-control">
        <button type="button" className="phone-call-hangup phone-call-hangup-icon-only" onClick={onHangupCall} aria-label="Hang up call">
          <span className="phone-call-hangup-icon" aria-hidden="true">
            <PhoneHandsetIcon className="phone-call-icon phone-call-icon-hangup" />
          </span>
        </button>
      </div>
    );
  }

  return (
    <div className="phone-call-control">
      <div
        ref={sliderTrackRef}
        className={`phone-call-slider ${isDragging ? 'dragging' : 'idle'}`.trim()}
        style={{ '--slide-progress': sliderProgress }}
        role="button"
        tabIndex={0}
        aria-label={t('sections.medicalVoice.controls.slideToCall')}
        onKeyDown={handleSliderKeyboard}
      >
        <p className="phone-call-slider-label">{t('sections.medicalVoice.controls.slideToCall')}</p>
        <div className="phone-call-slider-hint" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div
          className="phone-call-slider-knob"
          role="button"
          tabIndex={-1}
          aria-hidden="true"
          onPointerDown={beginDrag}
        >
          <span className="phone-call-slider-knob-icon" aria-hidden="true">
            <PhoneHandsetIcon className="phone-call-icon phone-call-icon-answer" />
          </span>
        </div>
      </div>
    </div>
  );
}
