import { useEffect, useState } from 'react';
import BrandIcon from './BrandIcon';

export default function StorySliderPhone({ start, videos, storyDurationMs, username, timeLabel = '6h', phoneSize = { width: '380px', height: '640px' }, borderThickness = '0px', borderColor = '#fff', borderRadius = '10px' }) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  useEffect(() => {
    if (!start) return undefined;

    setActiveSlideIndex(0);
    const intervalId = window.setInterval(() => {
      setActiveSlideIndex((currentIndex) => (currentIndex + 1) % videos.length);
    }, storyDurationMs);

    return () => window.clearInterval(intervalId);
  }, [start, videos, storyDurationMs]);

  return (
    <div className="hero-phone">
      <div className="phone-shell" id="phoneShell" style={{
          width: phoneSize.width,
          height: phoneSize.height,
          border: `${borderThickness} solid ${borderColor}`,
          borderRadius: borderRadius,
          overflow: 'hidden',
          position: 'relative'
        }}>
        <div className="phone-hud">
          <div className="hud-bars" id="hudBars">
            {videos.map((_, index) => {
              const barClassName = index < activeSlideIndex ? 'hud-bar done' : index === activeSlideIndex ? 'hud-bar active' : 'hud-bar';
              return (
                <div key={`bar-${index}`} className={barClassName} style={index === activeSlideIndex ? { '--sd': `${storyDurationMs}ms` } : undefined}>
                  <div className="hud-bar-fill" />
                </div>
              );
            })}
          </div>
          {username && (
          <div className="hud-user"><div className="hud-av" /><span className="hud-name">{username}</span><span className="hud-time">{timeLabel}</span></div>
        )}
        </div>
        <div className="phone-slides" id="phoneSlides">
          {videos.map((video, index) => (
            <div key={`slide-${index}`} className={`phone-slide ${index === activeSlideIndex ? 'active' : ''}`.trim()}>
              <video 
                className="slide-bg" 
                src={video} 
                autoPlay 
                muted 
                loop 
                playsInline
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="phone-badge-wrap"><BrandIcon stroke="var(--action-primary-fg)" width={30} height={30} /></div>
    </div>
  );
}
