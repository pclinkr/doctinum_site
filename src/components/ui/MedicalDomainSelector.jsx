export default function MedicalDomainSelector({ options, selectedId, onSelect }) {
  return (
    <div className="relative z-[2] flex flex-wrap gap-[10px] mb-1 justify-center transition-transform duration-200 ease-linear transition-opacity duration-200 ease-linear" role="tablist" aria-label="Medical domains">
      {options.map((option) => {
        const isSelected = option.id === selectedId;
        return (
          <button
            key={option.id}
            type="button"
            role="tab"
            aria-selected={isSelected}
            className={`p-2 p-4 rounded-full border border-[var(--ink-16)] bg-transparent text-[var(--color-primary)] text-[13px] font-[var(--w500)] tracking-[var(--track)] transition-all duration-150 ease-out transition-all duration-150 ease-out transition-transform duration-150 ease-spring hover:bg-[var(--ink-05)] hover:translate-y-px ${isSelected ? 'bg-[var(--action-primary-bg)] text-[var(--action-primary-fg)] border-[var(--action-primary-bg)]' : ''}`.trim()}
            onClick={() => onSelect(option.id)}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
