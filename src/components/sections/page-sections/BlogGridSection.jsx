import Card from '../../ui/Card';

export default function BlogGridSection({ cards, onNavigate }) {
  return (
    <section className="sec" style={{ paddingTop: 0 }}>
      <div className="blog-grid">
        {cards.map(([title, subtitle, date, gradient, delayClass]) => (
          <Card key={title} className={`blog-card rev ${delayClass}`.trim()} onClick={() => onNavigate('blog-post')}><div className="blog-thumb"><div className="blog-thumb-bg" style={{ background: gradient }} /></div><div className="blog-card-body"><h3 className="blog-card-title">{title}</h3><p className="blog-card-sub">{subtitle}</p><div className="blog-card-footer"><span className="blog-card-date">{date}</span><div className="blog-card-arrow"><svg viewBox="0 0 10 10"><path d="M2 5h6M5 2l3 3-3 3" /></svg></div></div></div></Card>
        ))}
      </div>
    </section>
  );
}
