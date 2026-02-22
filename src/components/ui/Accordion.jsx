import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';

export default function Accordion({ items, className = '' }) {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <div className={`ds-accordion ${className}`.trim()}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question} className={`ds-accordion-item ${isOpen ? 'is-open' : ''}`.trim()}>
            <button
              className="ds-accordion-trigger"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              type="button"
            >
              <span>{item.question}</span>
              <span className="ds-accordion-icon" aria-hidden="true">
                {isOpen
                  ? <Minus size={12} strokeWidth={1.5} absoluteStrokeWidth />
                  : <Plus size={12} strokeWidth={1.5} absoluteStrokeWidth />}
              </span>
            </button>
            <div className={`ds-accordion-content ${isOpen ? 'max-h-[500px]' : ''}`}>
              <p className="pb-[18px] text-[14px] leading-[1.7] text-[var(--text-muted)]">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
