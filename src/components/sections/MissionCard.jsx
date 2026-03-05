import BrandIcon from '../ui/BrandIcon';
import { useTranslation } from 'react-i18next';
import Card from '../ui/Card';
import Badge from '../ui/Badge';

export default function MissionCard() {
  const { t } = useTranslation();

  return (
    <Card className="rev relative mx-auto max-w-[660px] rounded-[28px] bg-[var(--surface)] p-14 shadow-[0_2px_24px_var(--ink-04)]">
      <div className="absolute -right-5 -top-5 flex h-[58px] w-[58px] items-center justify-center rounded-[17px] bg-[var(--color-primary)] shadow-[0_8px_24px_var(--ink-20)]">
        <BrandIcon
          stroke="var(--color-primary-contrast)"
          width={28}
          height={28}
        />
      </div>
      <Badge className="mb-5 inline-block rounded-full bg-[var(--ink-06)] px-[13px] py-2 text-[12px] font-[var(--w500)]">
        {t('sections.mission.label')}
      </Badge>
      <h2 className="mb-6 text-[clamp(24px,3.5vw,38px)] font-[var(--w500)] leading-[1.1] tracking-[-0.055em]">
        {t('sections.mission.titlePrefix')}{' '}
        <span className="si">{t('sections.mission.titleAccent')}</span>{' '}
        {t('sections.mission.titleSuffix')}
      </h2>
      <div className="mb-9 flex flex-col gap-[13px]">
        <p className="text-[14px] leading-[1.7] text-[var(--muted)]">
          {t('sections.mission.body.0')}
        </p>
        <p className="text-[14px] leading-[1.7] text-[var(--muted)]">
          {t('sections.mission.body.1')}
        </p>
        <p className="text-[14px] leading-[1.7] text-[var(--muted)]">
          {t('sections.mission.body.2')}
        </p>
        <p className="text-[14px] leading-[1.7] text-[var(--muted)]">
          {t('sections.mission.body.3')}
        </p>
        <p className="text-[14px] leading-[1.7] text-[var(--muted)]">
          {t('sections.mission.body.4')}
        </p>
      </div>
      <div className="flex items-center gap-[7px]">
        <div className="flex h-[22px] w-[22px] items-center justify-center rounded-[6px] bg-[var(--color-primary)]">
          <BrandIcon
            stroke="var(--color-primary-contrast)"
            width={12}
            height={12}
          />
        </div>
        <span className="text-[16px] font-[var(--w500)] tracking-[var(--track-tight)]">
          DOCTINUM
        </span>
      </div>
    </Card>
  );
}
