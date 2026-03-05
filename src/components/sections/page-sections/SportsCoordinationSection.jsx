import Container from '../../layout/Container';
import Card from '../../ui/Card';

export default function SportsCoordinationSection({ locale = 'fr' }) {
  const isFr = locale === 'fr';

  const title = isFr
    ? '2. Une couche de coordination, pas un remplacement'
    : '2. A coordination layer, not a replacement';
  const intro = isFr
    ? 'Le dispositif ne remplace ni le médecin ni le kinésithérapeute. La rééducation reste centrale. Le dispositif structure l’information autour d’elle.'
    : 'The system replaces neither physician nor physiotherapist. Rehabilitation remains central, and the system structures information around it.';

  const cards = isFr
    ? [
        'Un outil de structuration longitudinale',
        'Un support organisationnel',
        'Un système d’objectivation des indicateurs déclaratifs',
        'Un point de visibilité pour le médecin référent',
      ]
    : [
        'A longitudinal structuring tool',
        'An organizational support layer',
        'A declarative-indicator objectivation system',
        'A visibility point for the lead physician',
      ];

  return (
    <Container className="py-8">
      <section className="rev rounded-[22px] border border-[var(--border)] bg-[var(--surface)] p-7 max-[809px]:p-5">
        <p className="mb-3 text-[12px] font-[var(--w500)] uppercase tracking-[0.08em] text-[var(--muted)]">
          Coordination
        </p>
        <h2 className="max-w-[20ch] text-[clamp(30px,4vw,46px)] leading-[1.03] tracking-[-0.05em]">
          {title}
        </h2>
        <p className="mt-4 max-w-[880px] text-[14px] leading-[1.72] text-[var(--muted)]">
          {intro}
        </p>

        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {cards.map((item) => (
            <Card
              key={item}
              className="border border-[var(--border)] bg-white px-4 py-4"
            >
              <div className="flex items-start gap-2">
                <span className="mt-[8px] inline-block h-[5px] w-[5px] rounded-full bg-[var(--ink-30)]" />
                <p className="text-[14px] leading-[1.65] text-[var(--color-primary)]">
                  {item}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </Container>
  );
}
