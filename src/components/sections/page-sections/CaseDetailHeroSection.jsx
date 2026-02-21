export default function CaseDetailHeroSection({ onNavigate }) {
  return (
    <div className="case-detail-hero" style={{ paddingTop: 'calc(var(--nav-h) + 20px)' }}>
      <div className="case-detail-banner">
        <div className="case-detail-banner-bg" style={{ background: 'linear-gradient(135deg,#c87060,#e8a090,#f5c5a8)' }} />
        <button className="case-nav-btn left-btn" onClick={() => onNavigate('case-studies')}>← Back</button>
        <button className="case-nav-btn right-btn" onClick={() => onNavigate('case-studies')}>→</button>
        <div className="case-detail-title"><h1 className="case-detail-h1">Glowhaus</h1><p className="case-detail-sub">A premium beauty brand creating clean, effective skincare products for conscious consumers.</p></div>
      </div>
      <div className="case-meta">
        <div className="case-meta-item"><div className="case-meta-label">Category</div><div className="case-meta-value">Beauty</div></div>
        <div className="case-meta-item"><div className="case-meta-label">Platforms</div><div className="case-meta-value"><div className="case-meta-icons"><div className="case-meta-icon"><svg viewBox="0 0 24 24" fill="currentColor" width="10"><rect x="2" y="2" width="20" height="20" rx="5" /></svg></div><div className="case-meta-icon"><svg viewBox="0 0 24 24" fill="currentColor" width="10"><path d="M24 12.07C24 5.45 18.63 0 12 0S0 5.45 0 12.07c0 5.99 4.39 10.95 10.13 11.85v-8.38H7.08v-3.47h3.05V9.43c0-3.01 1.79-4.67 4.53-4.67 1.31 0 2.69.23 2.69.23v2.95h-1.51c-1.49 0-1.96.93-1.96 1.87v2.25h3.33l-.53 3.47h-2.8v8.38C19.62 23.02 24 18.06 24 12.07z" /></svg></div><div className="case-meta-icon"><svg viewBox="0 0 24 24" fill="currentColor" width="10"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05A6.34 6.34 0 003.15 15.3a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.69a8.26 8.26 0 004.83 1.56V6.8a4.85 4.85 0 01-1.07-.11z" /></svg></div></div></div></div>
        <div className="case-meta-item"><div className="case-meta-label">Year</div><div className="case-meta-value">2025</div></div>
      </div>
    </div>
  );
}
