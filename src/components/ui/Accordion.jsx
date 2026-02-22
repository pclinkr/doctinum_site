import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';

export default function Accordion({ items, className = '' }) {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <div className={`max-w-[660px] mx-auto ${className}`.trim()}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question} className={`border-b border-[var(--border)] ${isOpen ? 'is-open' : ''}`.trim()}>
            <button
              className="w-full flex items-center justify-between gap-4 py-5 bg-none border-none text-left font-[var(--sans)] text-[15px] font-[var(--w500)] tracking-[var(--track)] text-[var(--text-primary)] transition-colors duration-150 ease-out cursor-pointer"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              type="button"
            >
              <span>{item.question}</span>
              <span className="w-[24px] h-[24px] rounded-full bg-[var(--action-primary-bg)] flex items-center justify-center flex-shrink-0 transition-all duration-150 ease-out" aria-hidden="true">
                {isOpen
                  ? <Minus className="text-[var(--action-primary-fg)]" size={12} strokeWidth={1.5} absoluteStrokeWidth />
                  : <Plus className="text-[var(--action-primary-fg)]" size={12} strokeWidth={1.5} absoluteStrokeWidth />}
              </span>
            </button>
            <div className={`max-h-0 overflow-hidden transition-all duration-300 ease-out ${isOpen ? 'max-h-[500px]' : ''}`}>
              <p style={{ paddingBottom: '18px', fontSize: '14px', lineHeight: '1.7', color: 'var(--text-muted)' }}>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
