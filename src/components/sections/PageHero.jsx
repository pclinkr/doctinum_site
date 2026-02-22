import SocialProofRow from './SocialProofRow';
import Badge from '../ui/Badge';

export default function PageHero({ badge, title, description, className = '', showReveal = true, showProof = false, proofInitials, proofText }) {
  const revealClass = showReveal ? 'rev' : '';

  return (
    <div className={`mx-auto max-w-[1200px] px-16 pb-16 pt-[calc(var(--nav-h)+56px)] max-[900px]:px-8 max-[700px]:px-5 ${className}`.trim()}>
      <Badge className={`mb-6 inline-block rounded-full border border-[var(--border-mid)] bg-[var(--surface)] px-[14px] py-2 text-[13px] font-[var(--w500)] tracking-[var(--track)] ${revealClass}`.trim()}>{badge}</Badge>
      <h1 className={`ds-text-h1 mb-5 text-[88px] font-medium leading-none tracking-[-6px] ${revealClass}`.trim()}>{title}</h1>
      {description ? <p className={`mb-7 max-w-[520px] text-[16px] leading-[1.65] text-[var(--muted)] ${revealClass}`.trim()}>{description}</p> : null}
      {showProof ? (
        <SocialProofRow
          className={revealClass}
          initials={proofInitials}
          text={proofText}
        />
      ) : null}
    </div>
  );
}
