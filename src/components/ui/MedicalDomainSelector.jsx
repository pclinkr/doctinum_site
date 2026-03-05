export default function MedicalDomainSelector({
  options,
  selectedId,
  onSelect,
}) {
  return (
    <div
      className="relative z-[2] flex flex-wrap gap-[10px] mb-1 justify-center transition-all duration-200 ease-linear"
      role="tablist"
      aria-label="Medical domains"
    >
      {options.map((option) => {
        const isSelected = option.id === selectedId;
        return (
          <button
            key={option.id}
            type="button"
            role="tab"
            aria-selected={isSelected}
            className={`px-5 py-3 rounded-full border-2 text-[13px] font-[var(--w500)] tracking-[var(--track)] transition-all duration-200 ease-out hover:scale-[1.02] ${isSelected ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)] shadow-lg scale-[1.05]' : 'border-[var(--ink-16)] bg-white/50 text-[var(--color-primary)] hover:bg-[var(--ink-05)] hover:border-[var(--ink-24)]'}`.trim()}
            onClick={() => onSelect(option.id)}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
