import SectionHeading from '../SectionHeading';

export default function AwardsSection({ awards }) {
  return (
    <section className="sec rev">
      <SectionHeading label="Recognition" title={<>Awards that reflect<br />our <span className="si">commitment</span></>} style={{ textAlign: 'center', marginBottom: '44px' }} />
      <table className="mt-2 w-full border-collapse">
        <thead><tr><th className="border-b border-[var(--border)] pb-3 text-left text-[11px] font-[var(--w500)] uppercase tracking-[0.07em] text-[var(--muted)]">Award</th><th className="border-b border-[var(--border)] pb-3 text-left text-[11px] font-[var(--w500)] uppercase tracking-[0.07em] text-[var(--muted)]">Description</th><th className="border-b border-[var(--border)] pb-3 text-left text-[11px] font-[var(--w500)] uppercase tracking-[0.07em] text-[var(--muted)]">Year</th></tr></thead>
        <tbody>{awards.map((awardRow, index) => <tr key={awardRow[0]}><td className={`whitespace-nowrap py-5 pr-6 align-top text-[14px] font-[var(--w500)] text-[var(--color-primary)] leading-[1.6] ${index < awards.length - 1 ? 'border-b border-[var(--border)]' : ''}`.trim()}>{awardRow[0]}</td><td className={`py-5 pr-6 align-top text-[14px] text-[var(--muted)] leading-[1.6] ${index < awards.length - 1 ? 'border-b border-[var(--border)]' : ''}`.trim()}>{awardRow[1]}</td><td className={`whitespace-nowrap py-5 text-right align-top text-[14px] text-[var(--muted)] leading-[1.6] ${index < awards.length - 1 ? 'border-b border-[var(--border)]' : ''}`.trim()}>{awardRow[2]}</td></tr>)}</tbody>
      </table>
    </section>
  );
}
