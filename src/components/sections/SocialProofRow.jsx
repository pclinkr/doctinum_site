export default function SocialProofRow({ initials = ['S', 'J', 'M', 'A'], text = 'Grown over 176+ creators', className = '', style }) {
  return (
    <div className={`mt-2 flex items-center gap-[10px] ${className}`.trim()} style={style}>
      <div className="flex">
        {initials.map((initial, index) => (
          <div key={`${initial}-${index}`} className={`-ml-2 flex h-[28px] w-[28px] items-center justify-center overflow-hidden rounded-full border-2 border-[var(--bg)] bg-[var(--surface2)] text-[10px] font-[var(--w500)] text-[var(--muted)] ${index === 0 ? 'ml-0' : ''}`.trim()}>{initial}</div>
        ))}
      </div>
      <div className="flex gap-[2px] text-[13px] text-[#f59e0b]">★★★★★</div>
      <span className="text-[12px] tracking-[var(--track)] text-[var(--muted)]">{text}</span>
    </div>
  );
}
