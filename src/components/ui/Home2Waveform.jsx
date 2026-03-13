const WAVE_HEIGHTS = [
  8, 14, 22, 34, 28, 42, 56, 48, 62, 54, 66, 56, 48, 40, 50, 38, 30, 22, 14, 8,
];

export default function Home2Waveform({ className = '' }) {
  return (
    <div
      className={`flex h-8 items-center justify-center gap-[2px] ${className}`.trim()}
    >
      {WAVE_HEIGHTS.map((heightValue, index) => {
        const durationSeconds = (0.7 + (index % 6) * 0.18).toFixed(2);
        const delaySeconds = (index % 7) * 0.12;

        return (
          <span
            key={`${heightValue}-${index}`}
            className="home2-wave-bar"
            style={{
              height: `${heightValue}px`,
              '--d': `${durationSeconds}s`,
              animationDelay: `${delaySeconds}s`,
            }}
          />
        );
      })}
    </div>
  );
}
