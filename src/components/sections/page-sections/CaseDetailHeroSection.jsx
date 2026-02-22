import Container from '../../layout/Container';

export default function CaseDetailHeroSection({ onNavigate }) {
  return (
    <Container className="pt-[calc(var(--nav-h)+20px)]">
      <div className="relative aspect-[16/7] overflow-hidden rounded-[var(--r-lg)]">
        <div className="h-full w-full" style={{ background: 'var(--gradient-accent-warm)' }} />
        <button className="absolute left-5 top-5 flex cursor-pointer items-center gap-[6px] rounded-full bg-[var(--white-90)] px-4 py-2 text-[13px] font-[var(--w500)] backdrop-blur-[8px] transition-all duration-150 ease-out hover:bg-white" onClick={() => onNavigate('case-studies')}>← Back</button>
        <button className="absolute right-5 top-5 flex cursor-pointer items-center gap-[6px] rounded-full bg-[var(--white-90)] px-4 py-2 text-[13px] font-[var(--w500)] backdrop-blur-[8px] transition-all duration-150 ease-out hover:bg-white" onClick={() => onNavigate('case-studies')}>→</button>
        <div className="absolute bottom-0 left-0 right-0 p-12" style={{ background: 'var(--gradient-overlay-top)' }}><h1 className="mb-2 text-[88px] font-medium leading-none tracking-[-6px] text-white">Glowhaus</h1><p className="max-w-[460px] text-[16px] leading-[1.55] text-[var(--white-75)]">A premium beauty brand creating clean, effective skincare products for conscious consumers.</p></div>
      </div>
      <div className="my-6 grid grid-cols-3 gap-0 overflow-hidden rounded-[var(--r-md)] border border-[var(--border)] max-[809px]:grid-cols-1">
        <div className="border-r border-[var(--border)] p-7 max-[809px]:border-b max-[809px]:border-r-0"><div className="mb-1 text-[11px] font-[var(--w500)] uppercase tracking-[0.07em] text-[var(--muted)]">Category</div><div className="flex items-center gap-2 text-[16px] font-[var(--w500)] tracking-[var(--track)]">Beauty</div></div>
        <div className="border-r border-[var(--border)] p-7 max-[809px]:border-b max-[809px]:border-r-0"><div className="mb-1 text-[11px] font-[var(--w500)] uppercase tracking-[0.07em] text-[var(--muted)]">Platforms</div><div className="flex items-center gap-2 text-[16px] font-[var(--w500)] tracking-[var(--track)]"><div className="flex gap-[6px]"><div className="flex h-[20px] w-[20px] items-center justify-center rounded-[5px] bg-[var(--color-primary)]"><svg className="h-[10px] w-[10px] fill-white" viewBox="0 0 24 24" fill="currentColor" width="10"><rect x="2" y="2" width="20" height="20" rx="5" /></svg></div><div className="flex h-[20px] w-[20px] items-center justify-center rounded-[5px] bg-[var(--color-primary)]"><svg className="h-[10px] w-[10px] fill-white" viewBox="0 0 24 24" fill="currentColor" width="10"><path d="M24 12.07C24 5.45 18.63 0 12 0S0 5.45 0 12.07c0 5.99 4.39 10.95 10.13 11.85v-8.38H7.08v-3.47h3.05V9.43c0-3.01 1.79-4.67 4.53-4.67 1.31 0 2.69.23 2.69.23v2.95h-1.51c-1.49 0-1.96.93-1.96 1.87v2.25h3.33l-.53 3.47h-2.8v8.38C19.62 23.02 24 18.06 24 12.07z" /></svg></div><div className="flex h-[20px] w-[20px] items-center justify-center rounded-[5px] bg-[var(--color-primary)]"><svg className="h-[10px] w-[10px] fill-white" viewBox="0 0 24 24" fill="currentColor" width="10"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05A6.34 6.34 0 003.15 15.3a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.69a8.26 8.26 0 004.83 1.56V6.8a4.85 4.85 0 01-1.07-.11z" /></svg></div></div></div></div>
        <div className="p-7"><div className="mb-1 text-[11px] font-[var(--w500)] uppercase tracking-[0.07em] text-[var(--muted)]">Year</div><div className="flex items-center gap-2 text-[16px] font-[var(--w500)] tracking-[var(--track)]">2025</div></div>
      </div>
    </Container>
  );
}
