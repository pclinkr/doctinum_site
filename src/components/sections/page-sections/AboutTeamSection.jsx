export default function AboutTeamSection({ members }) {
  return (
    <section className="sec" style={{ paddingTop: 0 }}>
      <div className="mt-12 grid grid-cols-3 gap-6 max-[1199px]:grid-cols-2 max-[809px]:grid-cols-2">
        {members.map((member) => (
          <div key={member.name} className={`rev flex flex-col gap-[10px] ${member.delayClass}`.trim()}><div className="relative aspect-[3/4] overflow-hidden rounded-[var(--r-md)]"><div className="h-full w-full" style={{ background: member.gradient }} /><div className="absolute inset-0 bg-gradient-to-t from-[var(--ink-20)] to-transparent" /></div><div className="text-[16px] font-[var(--w500)] tracking-[var(--track)]">{member.name}</div><div className="text-[13px] text-[var(--muted)]">{member.role}</div></div>
        ))}
      </div>
    </section>
  );
}
