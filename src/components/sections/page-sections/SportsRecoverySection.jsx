import Container from '../../layout/Container';
import Card from '../../ui/Card';

function BulletList({ items }) {
  return (
    <ul className="grid gap-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 text-[14px] leading-[1.68] text-[var(--color-primary)]">
          <span className="mt-[8px] inline-block h-[5px] w-[5px] rounded-full bg-[var(--ink-30)]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function SportsRecoverySection({ locale = 'fr' }) {
  const isFr = locale === 'fr';

  const leftTitle = isFr ? '3. Objectiver la récupération dans le temps' : '3. Objectify recovery over time';
  const rightTitle = isFr
    ? '4. Détecter les décrochages et les reprises prématurées'
    : '4. Detect drop-offs and premature returns';

  const leftItems = isFr
    ? [
        'Douleur (0-10)',
        'Perception de mobilité',
        'Sensation d’instabilité',
        'Fatigue musculaire',
        'Adhésion aux séances de kinésithérapie',
        'Reprise progressive d’activité'
      ]
    : [
        'Pain (0-10)',
        'Perceived mobility',
        'Instability sensation',
        'Muscle fatigue',
        'Physiotherapy session adherence',
        'Progressive return to activity'
      ];

  const chips = isFr
    ? ['Historisés', 'Visualisés longitudinalement', 'Priorisés selon des seuils définis par l’équipe']
    : ['Historized', 'Visualized longitudinally', 'Prioritized with team-defined thresholds'];

  const rightItems = isFr
    ? [
        'Augmentation brutale de douleur',
        'Baisse d’adhésion aux séances',
        'Reprise d’activité non planifiée',
        'Dégradation perçue de la mobilité'
      ]
    : [
        'Sudden pain increase',
        'Session adherence decrease',
        'Unplanned return to activity',
        'Perceived mobility deterioration'
      ];

  const note = isFr
    ? 'Le système ne prend aucune décision. Il structure et priorise l’information.'
    : 'The system makes no decision. It structures and prioritizes information.';

  return (
    <Container className="py-8">
      <section className="grid gap-4 lg:grid-cols-2">
        <Card className="rev border border-[var(--border)] bg-white p-7 max-[809px]:p-5">
          <h3 className="text-[clamp(27px,3.4vw,40px)] leading-[1.05] tracking-[-0.05em]">{leftTitle}</h3>
          <div className="mt-5">
            <BulletList items={leftItems} />
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {chips.map((item) => (
              <span key={item} className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-[12px] text-[var(--color-primary)]">
                {item}
              </span>
            ))}
          </div>
        </Card>

        <Card className="rev d1 border border-[var(--border)] bg-[var(--surface)] p-7 max-[809px]:p-5">
          <h3 className="text-[clamp(27px,3.4vw,40px)] leading-[1.05] tracking-[-0.05em]">{rightTitle}</h3>
          <div className="mt-5">
            <BulletList items={rightItems} />
          </div>
          <p className="mt-6 text-[14px] leading-[1.7] text-[var(--muted)]">{note}</p>
        </Card>
      </section>
    </Container>
  );
}
