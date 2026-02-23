import Card from '../../ui/Card';

export default function CaseStudiesGridSection({ cards, onNavigate }) {
  return (
    <section className="mx-auto w-full max-w-[1200px] px-16 pb-24 pt-0 max-[1024px]:px-8 max-[768px]:px-5">
      <div className="grid grid-cols-2 gap-5 max-[809px]:grid-cols-1">
        {cards.map((caseItem) => (
          <Card key={caseItem.name} className={`group rev cursor-pointer overflow-hidden rounded-[var(--r-md)] bg-[var(--surface)] transition-transform duration-300 ease-spring transition-shadow duration-300 ease-out hover:translate-y-px hover:shadow-[0_16px_48px_var(--ink-10)] ${caseItem.delayClass}`.trim()} onClick={() => onNavigate('case-detail')}>
            <div className="relative aspect-[16/10] overflow-hidden" data-cursor="video"><div className="h-full w-full transition-transform duration-300 ease-out group-hover:scale-[1.03]" style={{ background: caseItem.gradient }} /><div className="absolute left-6 top-1/2 flex -translate-y-1/2 items-center gap-2" style={caseItem.serif ? { fontFamily: 'var(--serif)', fontStyle: 'italic' } : undefined}><span className="text-[22px] font-[var(--w500)] tracking-[-0.04em] text-white shadow-[0_2px_12px_var(--ink-30)]" style={caseItem.serif ? { fontFamily: 'var(--serif)', fontStyle: 'italic' } : undefined}>{caseItem.brand}</span></div></div>
            <div className="flex items-center justify-between px-5 py-4"><span className="text-[15px] font-[var(--w500)] tracking-[var(--track)]">{caseItem.name}</span><span className="text-[13px] text-[var(--muted)]">{caseItem.category}</span></div>
          </Card>
        ))}
      </div>
    </section>
  );
}
