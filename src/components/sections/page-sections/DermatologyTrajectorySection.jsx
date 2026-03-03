import Container from '../../layout/Container';
import { useTranslation } from 'react-i18next';

function ChartVisual({ copy }) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--r-md)] border border-[var(--border)] bg-[linear-gradient(160deg,#f6f9ff_0%,#eef4ff_46%,#f8fbff_100%)]">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 520 390" aria-hidden="true">
        <g stroke="rgba(17,36,63,0.08)" strokeWidth="1">
          <line x1="40" y1="72" x2="480" y2="72" />
          <line x1="40" y1="122" x2="480" y2="122" />
          <line x1="40" y1="172" x2="480" y2="172" />
          <line x1="40" y1="222" x2="480" y2="222" />
          <line x1="40" y1="272" x2="480" y2="272" />
          <line x1="40" y1="322" x2="480" y2="322" />
        </g>
        <path d="M52 268 C106 246, 132 210, 188 192 C238 176, 278 152, 330 136 C374 123, 424 110, 472 96" fill="none" stroke="rgba(17,36,63,0.78)" strokeWidth="3" strokeLinecap="round" />
        <path d="M52 232 C108 214, 156 206, 210 194 C266 184, 320 170, 380 154 C420 144, 450 138, 472 134" fill="none" stroke="rgba(90,130,198,0.68)" strokeWidth="2.4" strokeLinecap="round" strokeDasharray="4 6" />
        <path d="M52 182 C110 170, 164 176, 220 170 C278 164, 334 156, 392 150 C426 148, 452 146, 472 142" fill="none" stroke="rgba(131,149,178,0.8)" strokeWidth="2.2" strokeLinecap="round" />
      </svg>

      <div className="absolute left-4 top-4 rounded-[10px] bg-[var(--white-90)] px-3 py-2 text-[11px] font-[var(--w500)] text-[var(--muted)] backdrop-blur-[6px]">
        {copy.weeksChip}
      </div>
      <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
        <span className="rounded-full bg-[var(--white-90)] px-3 py-1 text-[11px] font-[var(--w500)] text-[var(--color-primary)] backdrop-blur-[5px]">
          {copy.severityChip}
        </span>
        <span className="rounded-full bg-[var(--white-90)] px-3 py-1 text-[11px] font-[var(--w500)] text-[var(--color-primary)] backdrop-blur-[5px]">
          {copy.drynessChip}
        </span>
        <span className="rounded-full bg-[var(--white-90)] px-3 py-1 text-[11px] font-[var(--w500)] text-[var(--color-primary)] backdrop-blur-[5px]">
          {copy.adherenceChip}
        </span>
      </div>
    </div>
  );
}

export default function DermatologyTrajectorySection() {
  const { t } = useTranslation();
  const copy = t('sections.dermatologyTrajectory', { returnObjects: true });
  const title = copy.title;
  const items = copy.items;
  const closing = copy.closing;

  return (
    <Container className="py-6">
      <div className="rev mb-12 grid grid-cols-2 items-center gap-10 border-b border-[var(--border)] pb-12 max-[809px]:flex max-[809px]:flex-col">
        <div className="min-[810px]:order-1">
          <ChartVisual copy={copy} />
        </div>

        <div className="min-[810px]:order-2">
          <h3 className="text-[clamp(27px,3.2vw,42px)] font-[var(--w500)] leading-[1.07] tracking-[-0.05em]">{title}</h3>
          <p className="mt-4 text-[14px] leading-[1.72] text-[var(--muted)]">{copy.intro}</p>
          <ul className="mt-4 grid gap-2">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-2 text-[14px] leading-[1.7] text-[var(--color-primary)]">
                <span className="mt-[8px] inline-block h-[5px] w-[5px] rounded-full bg-[var(--ink-30)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[14px] leading-[1.72] text-[var(--muted)]">{closing}</p>
        </div>
      </div>
    </Container>
  );
}
