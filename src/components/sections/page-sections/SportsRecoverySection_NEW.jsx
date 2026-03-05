import { useTranslation } from 'react-i18next';
import Container from '../../layout/Container';
import Card from '../../ui/Card';

function BulletList({ items }) {
  return (
    <ul className="grid gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-2 text-[14px] leading-[1.68] text-[var(--color-primary)]"
        >
          <span className="mt-[8px] inline-block h-[5px] w-[5px] rounded-full bg-[var(--ink-30)]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function SportsRecoverySection() {
  const { t } = useTranslation();
  const copy = t('sections.sportsProtocol', { returnObjects: true });

  const leftTitle = copy.leftTitle;
  const rightTitle = copy.rightTitle;
  const leftItems = copy.leftList;
  const chips = copy.leftBottom;
  const rightItems = copy.rightList;
  const note = copy.rightBottom;

  return (
    <Container className="py-8">
      <section className="grid gap-4 lg:grid-cols-2">
        <Card className="rev border border-[var(--border)] bg-white p-7 max-[809px]:p-5">
          <h3 className="text-[clamp(27px,3.4vw,40px)] leading-[1.05] tracking-[-0.05em]">
            {leftTitle}
          </h3>
          <div className="mt-5">
            <BulletList items={leftItems} />
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {chips.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-[12px] text-[var(--color-primary)]"
              >
                {item}
              </span>
            ))}
          </div>
        </Card>

        <Card className="rev d1 border border-[var(--border)] bg-[var(--surface)] p-7 max-[809px]:p-5">
          <h3 className="text-[clamp(27px,3.4vw,40px)] leading-[1.05] tracking-[-0.05em]">
            {rightTitle}
          </h3>
          <div className="mt-5">
            <BulletList items={rightItems} />
          </div>
          <p className="mt-6 text-[14px] leading-[1.7] text-[var(--muted)]">
            {note}
          </p>
        </Card>
      </section>
    </Container>
  );
}
