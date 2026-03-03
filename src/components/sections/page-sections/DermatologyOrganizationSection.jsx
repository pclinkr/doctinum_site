import Container from '../../layout/Container';
import { useTranslation } from 'react-i18next';

function OrganizationSchema({ copy }) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--r-md)] border border-[var(--border)] bg-[linear-gradient(160deg,#f8f9fc_0%,#eef2f8_55%,#f7f9fc_100%)] p-6">
      <div className="mx-auto mt-1 w-fit rounded-full bg-[var(--white-90)] px-4 py-2 text-[12px] font-[var(--w500)] text-[var(--color-primary)] backdrop-blur-[6px]">
        {copy.pathology}
      </div>
      <div className="mx-auto mt-8 h-8 w-[2px] bg-[var(--border-mid)]" />

      <div className="mx-auto w-fit rounded-full bg-[var(--white-90)] px-4 py-2 text-[12px] font-[var(--w500)] text-[var(--color-primary)] backdrop-blur-[6px]">
        {copy.protocol}
      </div>

      <div className="relative mx-auto mt-8 h-[2px] w-[80%] bg-[var(--border-mid)]">
        <div className="absolute left-0 top-1/2 h-6 w-[2px] -translate-y-1/2 bg-[var(--border-mid)]" />
        <div className="absolute left-1/2 top-1/2 h-6 w-[2px] -translate-x-1/2 -translate-y-1/2 bg-[var(--border-mid)]" />
        <div className="absolute right-0 top-1/2 h-6 w-[2px] -translate-y-1/2 bg-[var(--border-mid)]" />
      </div>

      <div className="mt-6 grid grid-cols-3 gap-3">
        <div className="rounded-[12px] bg-[var(--white-90)] px-3 py-2 text-center text-[11px] font-[var(--w500)] text-[var(--color-primary)] backdrop-blur-[6px]">
          {copy.frequency}
        </div>
        <div className="rounded-[12px] bg-[var(--white-90)] px-3 py-2 text-center text-[11px] font-[var(--w500)] text-[var(--color-primary)] backdrop-blur-[6px]">
          {copy.milestones}
        </div>
        <div className="rounded-[12px] bg-[var(--white-90)] px-3 py-2 text-center text-[11px] font-[var(--w500)] text-[var(--color-primary)] backdrop-blur-[6px]">
          {copy.alerts}
        </div>
      </div>
    </div>
  );
}

export default function DermatologyOrganizationSection() {
  const { t } = useTranslation();
  const copy = t('sections.dermatologyOrganization', { returnObjects: true });
  const title = copy.title;
  const systemList = copy.systemList;
  const clinicList = copy.clinicList;

  return (
    <Container className="py-6">
      <div className="rev mb-12 grid grid-cols-2 items-center gap-10 border-b border-[var(--border)] pb-12 max-[809px]:flex max-[809px]:flex-col">
        <div className="min-[810px]:order-1">
          <h3 className="text-[clamp(27px,3.2vw,42px)] font-[var(--w500)] leading-[1.07] tracking-[-0.05em]">{title}</h3>
          <p className="mt-4 text-[14px] leading-[1.72] text-[var(--muted)]">{copy.systemIntro}</p>
          <ul className="mt-4 grid gap-2">
            {systemList.map((item) => (
              <li key={item} className="flex items-start gap-2 text-[14px] leading-[1.7] text-[var(--color-primary)]">
                <span className="mt-[8px] inline-block h-[5px] w-[5px] rounded-full bg-[var(--ink-30)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[14px] leading-[1.72] text-[var(--muted)]">{copy.clinicIntro}</p>
          <ul className="mt-3 grid gap-2">
            {clinicList.map((item) => (
              <li key={item} className="flex items-start gap-2 text-[14px] leading-[1.7] text-[var(--color-primary)]">
                <span className="mt-[8px] inline-block h-[5px] w-[5px] rounded-full bg-[var(--ink-30)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="min-[810px]:order-2">
          <OrganizationSchema copy={copy.schema} />
        </div>
      </div>
    </Container>
  );
}
