import { useState } from 'react';

export default function DropdownAccordion({ items, className = '' }) {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <div className={`faq-list ${className}`.trim()}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.question}
            className={`faq-item ${isOpen ? 'open' : ''}`.trim()}
          >
            <button
              className="faq-trigger"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              type="button"
            >
              <span>{item.question}</span>
              <span className="faq-icon">
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {isOpen ? (
                    <polyline points="4,10 8,6 12,10" />
                  ) : (
                    <polyline points="4,6 8,10 12,6" />
                  )}
                </svg>
              </span>
            </button>
            <div className="faq-body">
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
