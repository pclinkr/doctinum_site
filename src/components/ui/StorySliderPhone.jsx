import { useEffect, useState } from 'react';
import BrandIcon from './BrandIcon';

export default function StorySliderPhone({
  start,
  videos,
  storyDurationMs,
  username,
  timeLabel = '6h',
  phoneSize = { width: '380px', height: '640px' },
  borderThickness = '0px',
  borderColor = '#fff',
  borderRadius = '10px',
  instant = false,
  reveal = true,
}) {
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
    <div
      className={`relative flex items-start justify-end pt-5 max-[809px]:justify-center ${instant ? 'animate-none opacity-100 translate-y-0' : reveal ? 'opacity-0 animate-fadeUp' : 'opacity-0'}`.trim()}
      style={!instant && reveal ? { animationDelay: '300ms' } : undefined}
    >
      <div
        className="relative overflow-hidden bg-white shadow-[0_40px_100px_var(--ink-15),0_2px_8px_var(--ink-07)]"
        id="phoneShell"
        style={{
          width: phoneSize.width,
          height: phoneSize.height,
          border: `${borderThickness} solid ${borderColor}`,
          borderRadius: borderRadius,
        }}
      >
        <div className="absolute left-3 right-3 top-4 z-[10]">
          <div className="mb-2 flex gap-1" id="hudBars">
            {videos.map((_, index) => {
              const isDone = index < activeSlideIndex;
              const isActive = index === activeSlideIndex;
              return (
                <div
                  key={`bar-${index}`}
                  className="h-[2px] flex-1 overflow-hidden rounded-[2px] bg-[var(--white-28)]"
                >
                  <div
                    className={`h-full rounded-[2px] bg-white ${isDone ? 'w-full' : 'w-0'} ${isActive ? 'animate-barProg' : ''}`.trim()}
                    style={
                      isActive ? { '--sd': `${storyDurationMs}ms` } : undefined
                    }
                  />
                </div>
              );
            })}
          </div>
          {username && (
            <div className="flex items-center gap-[7px]">
              <div className="h-[23px] w-[23px] rounded-full border-[1.5px] border-white bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888]" />
              <span className="text-[11px] font-semibold text-white shadow-[0_1px_4px_var(--ink-40)]">
                {username}
              </span>
              <span className="text-[10px] text-[var(--white-70)] shadow-[0_1px_4px_var(--ink-40)]">
                {timeLabel}
              </span>
            </div>
          )}
        </div>
        <div className="absolute inset-0" id="phoneSlides">
          {videos.map((video, index) => (
            <div
              key={`slide-${index}`}
              className={`absolute inset-0 transition-opacity duration-500 ease-out ${index === activeSlideIndex ? 'opacity-100' : 'opacity-0'}`.trim()}
            >
              <video
                className="h-full w-full"
                src={video}
                autoPlay
                muted
                loop
                playsInline
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-[2] h-[25%] bg-gradient-to-t from-white/80 via-white/60 to-transparent" />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute -bottom-2 -right-6 z-[5] flex h-[66px] w-[66px] items-center justify-center rounded-[18px] bg-[var(--action-primary-bg)] shadow-[0_8px_24px_var(--ink-28)]">
        <BrandIcon stroke="var(--action-primary-fg)" width={30} height={30} />
      </div>
    </div>
  );
}
