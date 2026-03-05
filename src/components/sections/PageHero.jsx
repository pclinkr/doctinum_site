import SocialProofRow from './SocialProofRow';
import Badge from '../ui/Badge';
import Container from '../layout/Container';

export default function PageHero({
  badge,
  title,
  description,
  className = '',
  showReveal = true,
  showProof = false,
  proofInitials,
  proofText,
}) {
  const revealClass = showReveal ? 'rev' : '';

  return (
    <Container
      className={`pb-16 pt-[calc(var(--nav-h)+56px)] ${className}`.trim()}
    >
      <Badge
        className={`mb-6 inline-block rounded-full border border-[var(--border-mid)] bg-[var(--surface)] px-[14px] py-2 text-[13px] font-[var(--w500)] tracking-[var(--track)] ${revealClass}`.trim()}
      >
        {badge}
      </Badge>
      <h1 className={`mb-5 ${revealClass}`.trim()}>{title}</h1>
      {description ? (
        <p
          className={`mb-7 max-w-[520px] text-[var(--muted)] ${revealClass}`.trim()}
        >
          {description}
        </p>
      ) : null}
      {showProof ? (
        <SocialProofRow
          className={revealClass}
          initials={proofInitials}
          text={proofText}
        />
      ) : null}
    </Container>
  );
}
