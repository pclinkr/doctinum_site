import { useTranslation } from 'react-i18next';
import Container from '../../layout/Container';
import Card from '../../ui/Card';

export default function SportsCoordinationSection() {
  const { t } = useTranslation();
  const copy = t('sections.sportsStructure', { returnObjects: true });

  const title = copy.title;
  const intro = copy.subtitle + ' ' + copy.closing;
  const cards = copy.items.map(item => item.title);

  return (
    <Container className="py-8">
      <section className="rev rounded-[22px] border border-[var(--border)] bg-[var(--surface)] p-7 max-[809px]:p-5">
        <p className="mb-3 text-[12px] font-[var(--w500)] uppercase tracking-[0.08em] text-[var(--muted)]">Coordination</p>
        <h2 className="max-w-[20ch] text-[clamp(30px,4vw,46px)] leading-[1.03] tracking-[-0.05em]">{title}</h2>
        <p className="mt-4 max-w-[880px] text-[14px] leading-[1.72] text-[var(--muted)]">{intro}</p>

        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {cards.map((item) => (
            <Card key={item} className="border border-[var(--border)] bg-white px-4 py-4">
              <div className="flex items-start gap-2">
                <span className="mt-[8px] inline-block h-[5px] w-[5px] rounded-full bg-[var(--ink-30)]" />
                <p className="text-[14px] leading-[1.65] text-[var(--color-primary)]">{item}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </Container>
  );
}
