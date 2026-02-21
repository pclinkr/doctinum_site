import SocialProofRow from './SocialProofRow';
import Badge from '../ui/Badge';

export default function PageHero({ badge, title, description, className = '', showReveal = true, showProof = false, proofInitials, proofText }) {
  const revealClass = showReveal ? 'rev' : '';

  return (
    <div className={`page-hero ${className}`.trim()}>
      <Badge className={`page-badge ${revealClass}`.trim()}>{badge}</Badge>
      <h1 className={`page-h1 ds-text-h1 ${revealClass}`.trim()}>{title}</h1>
      {description ? <p className={`page-sub ${revealClass}`.trim()}>{description}</p> : null}
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
