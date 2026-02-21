export default function MedicalDomainSelector({ options, selectedId, onSelect }) {
  return (
    <div className="medical-domain-selector" role="tablist" aria-label="Medical domains">
      {options.map((option) => {
        const isSelected = option.id === selectedId;
        return (
          <button
            key={option.id}
            type="button"
            role="tab"
            aria-selected={isSelected}
            className={`medical-domain-chip ${isSelected ? 'active' : ''}`.trim()}
            onClick={() => onSelect(option.id)}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
