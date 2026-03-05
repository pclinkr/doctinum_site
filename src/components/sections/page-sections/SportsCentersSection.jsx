import { useTranslation } from 'react-i18next';
import Container from '../../layout/Container';
import Card from '../../ui/Card';

export default function SportsCentersSection() {
  const { t } = useTranslation();
  const copy = t('sections.sportsCases', { returnObjects: true });

  const title = copy.case1.title;
  const points = copy.case1.listItems.slice(0, 4);
  const desc = copy.case1.listItems[4];

  const targetTitle = copy.case2.title;
  const targets = copy.case2.listItems;

  return (
    <Container className="py-8">
      <section className="grid gap-4 lg:grid-cols-[1.05fr_.95fr]">
        <Card className="rev border border-[var(--border)] bg-white p-7 max-[809px]:p-5">
          <h3 className="text-[clamp(26px,3.3vw,38px)] leading-[1.06] tracking-[-0.045em]">
            {title}
          </h3>
          <ul className="mt-5 grid gap-2">
            {points.map((point) => (
              <li
                key={point}
                className="flex items-start gap-2 text-[14px] leading-[1.68] text-[var(--color-primary)]"
              >
                <span className="mt-[8px] inline-block h-[5px] w-[5px] rounded-full bg-[var(--ink-30)]" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[14px] leading-[1.72] text-[var(--muted)]">
            {desc}
          </p>
        </Card>

        <Card className="rev d1 border border-[var(--border)] bg-[var(--surface)] p-7 max-[809px]:p-5">
          <h3 className="text-[clamp(26px,3.3vw,38px)] leading-[1.06] tracking-[-0.045em]">
            {targetTitle}
          </h3>
          <div className="mt-5 grid gap-2">
            {targets.map((target) => (
              <div
                key={target}
                className="rounded-[12px] border border-[var(--border)] bg-white px-4 py-3 text-[14px] text-[var(--color-primary)]"
              >
                {target}
              </div>
            ))}
          </div>
        </Card>
      </section>
    </Container>
  );
}
