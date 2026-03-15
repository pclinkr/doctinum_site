import Container from '../../layout/Container';
import { useTranslation } from 'react-i18next';

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
          <h3 className="text-[clamp(27px,3.2vw,42px)] font-[var(--w500)] leading-[1.07] tracking-[-0.05em]">
            {title}
          </h3>
          <p className="mt-4 text-[14px] leading-[1.72] text-[var(--muted)]">
            {copy.systemIntro}
          </p>
          <ul className="mt-4 grid gap-2">
            {systemList.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-[14px] leading-[1.7] text-[var(--color-primary)]"
              >
                <span className="mt-[8px] inline-block h-[5px] w-[5px] rounded-full bg-[var(--ink-30)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[14px] leading-[1.72] text-[var(--muted)]">
            {copy.clinicIntro}
          </p>
          <ul className="mt-3 grid gap-2">
            {clinicList.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-[14px] leading-[1.7] text-[var(--color-primary)]"
              >
                <span className="mt-[8px] inline-block h-[5px] w-[5px] rounded-full bg-[var(--ink-30)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="min-[810px]:order-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--r-md)]">
            <img
              src="/assets/images/dermatology_act.png"
              alt="Dermatology practice"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
      </div>
    </Container>
  );
}
