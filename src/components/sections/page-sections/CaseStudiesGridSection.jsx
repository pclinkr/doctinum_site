import Card from '../../ui/Card';

export default function CaseStudiesGridSection({ cards, onNavigate }) {
  return (
    <section className="sec" style={{ paddingTop: 0 }}>
      <div className="cases-grid">
        {cards.map((caseItem) => (
          <Card key={caseItem.name} className={`cs-card rev ${caseItem.delayClass}`.trim()} onClick={() => onNavigate('case-detail')}>
            <div className="cs-card-thumb" data-cursor="video"><div className="cs-card-thumb-bg" style={{ background: caseItem.gradient }} /><div className="cs-card-brand" style={caseItem.serif ? { fontFamily: 'var(--serif)', fontStyle: 'italic' } : undefined}><span className="cs-brand-text" style={caseItem.serif ? { fontFamily: 'var(--serif)', fontStyle: 'italic' } : undefined}>{caseItem.brand}</span></div></div>
            <div className="cs-card-footer"><span className="cs-card-name">{caseItem.name}</span><span className="cs-card-cat">{caseItem.category}</span></div>
          </Card>
        ))}
      </div>
    </section>
  );
}
