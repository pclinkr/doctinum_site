import Container from '../../layout/Container';
import SectionHeading from '../SectionHeading';
import Badge from '../../ui/Badge';
import Card from '../../ui/Card';
import { useTranslation } from 'react-i18next';

export default function DermatologyConfigurationsSection() {
  const { t } = useTranslation();
  const copy = t('sections.dermatologyConfigurations', { returnObjects: true });
  const heading = copy.heading;
  const intro = copy.intro;
  const warning = copy.warning;
  const cards = copy.cards;

  return (
    <Container className="py-10">
      <section className="rev">
        <SectionHeading title={heading} style={{ marginBottom: '16px' }} />
        <p className="mb-4 text-[14px] leading-[1.7] text-[var(--muted)]">{intro}</p>
        <Badge className="mb-8 inline-flex rounded-full border border-[var(--border-mid)] bg-[var(--surface)] px-3 py-1 text-[11px] font-[var(--w500)] uppercase tracking-[0.08em] text-[var(--muted)]">
          {warning}
        </Badge>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {cards.map((card, index) => (
            <Card key={card.title} className={`rev border border-[var(--border)] bg-[var(--surface)] p-6 ${index === 0 ? 'd1' : index === 1 ? 'd2' : 'd3'}`}>
              <h3 className="mb-5 text-[clamp(23px,2.6vw,33px)] font-[var(--w500)] leading-[1.08] tracking-[-0.04em] text-[var(--color-primary)]">
                {card.title}
              </h3>
              <ul className="grid gap-2">
                {card.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[14px] leading-[1.7] text-[var(--color-primary)]">
                    <span className="mt-[8px] inline-block h-[5px] w-[5px] rounded-full bg-[var(--ink-30)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>
    </Container>
  );
}
