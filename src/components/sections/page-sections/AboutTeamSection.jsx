export default function AboutTeamSection({ members }) {
  return (
    <section className="sec" style={{ paddingTop: 0 }}>
      <div className="about-team-grid">
        {members.map((member) => (
          <div key={member.name} className={`about-team-card rev ${member.delayClass}`.trim()}><div className="about-photo"><div className="about-photo-bg" style={{ background: member.gradient }} /><div className="about-photo-overlay" /></div><div className="about-card-name">{member.name}</div><div className="about-card-role">{member.role}</div></div>
        ))}
      </div>
    </section>
  );
}
