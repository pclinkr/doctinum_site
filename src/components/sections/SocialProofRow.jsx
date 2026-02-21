export default function SocialProofRow({ initials = ['S', 'J', 'M', 'A'], text = 'Grown over 176+ creators', className = '', style }) {
  return (
    <div className={`proof-row ${className}`.trim()} style={style}>
      <div className="proof-avatars">
        {initials.map((initial, index) => (
          <div key={`${initial}-${index}`} className="proof-avatar">{initial}</div>
        ))}
      </div>
      <div className="proof-stars">★★★★★</div>
      <span className="proof-text">{text}</span>
    </div>
  );
}
