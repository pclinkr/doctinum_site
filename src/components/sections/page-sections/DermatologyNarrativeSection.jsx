import Container from '../../layout/Container';
import Card from '../../ui/Card';
import Badge from '../../ui/Badge';
import { useTranslation } from 'react-i18next';

function BulletList({ items = [] }) {
  return (
    <ul className="mt-4 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-[14px] leading-[1.72] text-[var(--color-primary)]">
          <span className="mt-[9px] inline-block h-[5px] w-[5px] rounded-full bg-[var(--ink-30)]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function DermatologyNarrativeSection() {
  const { t } = useTranslation();
  const copy = t('sections.dermatologyNarrative', { returnObjects: true });
  const title = copy.title;
  const intro = copy.intro;
  const firstList = copy.firstList;
  const mid = copy.betweenIntro;
  const secondList = copy.secondList;
  const conclusion = copy.conclusion;
  const lastList = copy.lastList;

  return (
    <Container className="py-16">
      <Card className="rev rounded-[26px] border border-[var(--border)] bg-[var(--surface)] p-10 max-[809px]:p-6">
        <Badge className="mb-5 inline-flex rounded-full border border-[var(--border-mid)] bg-[var(--bg-page)] px-3 py-1 text-[11px] font-[var(--w500)] uppercase tracking-[0.07em] text-[var(--muted)]">
          {copy.badge}
        </Badge>
        <h2 className="max-w-[24ch] text-[clamp(30px,4.2vw,54px)] leading-[1.03] tracking-[-0.05em]">{title}</h2>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div>
            <p className="text-[14px] leading-[1.75] text-[var(--muted)]">{intro}</p>
            <BulletList items={firstList} />
          </div>
          <div>
            <p className="text-[14px] leading-[1.75] text-[var(--muted)]">{mid}</p>
            <BulletList items={secondList} />
          </div>
        </div>

        <div className="mt-8 border-t border-[var(--border)] pt-7">
          <p className="text-[14px] leading-[1.75] text-[var(--muted)]">{conclusion}</p>
          <BulletList items={lastList} />
        </div>
      </Card>
    </Container>
  );
}
