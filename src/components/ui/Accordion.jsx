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
                  ? <Minus className="ds-accordion-glyph" size={12} strokeWidth={1.5} absoluteStrokeWidth />
                  : <Plus className="ds-accordion-glyph" size={12} strokeWidth={1.5} absoluteStrokeWidth />}
              </span>
            </button>
            <div className="ds-accordion-content">
              <p style={{ paddingBottom: '18px', fontSize: '14px', lineHeight: '1.7', color: 'var(--text-muted)' }}>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
