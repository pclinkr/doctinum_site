import Button from '../../ui/Button';
import SocialProofRow from '../SocialProofRow';
import { useTranslation } from 'react-i18next';
import TextInput from '../../ui/TextInput';
import TextArea from '../../ui/TextArea';
import Select from '../../ui/Select';
import Badge from '../../ui/Badge';
import Container from '../../layout/Container';

export default function ContactFormSection({ socialProofText }) {
  const { t } = useTranslation();

  const serviceOptions = [
    { value: 'surgery', label: t('contactForm.services.surgery') },
    {
      value: 'sportsMedicine',
      label: t('contactForm.services.sportsMedicine'),
    },
    { value: 'dermatology', label: t('contactForm.services.dermatology') },
    { value: 'proms', label: t('contactForm.services.proms') },
    { value: 'chronic', label: t('contactForm.services.chronic') },
    { value: 'oncology', label: t('contactForm.services.oncology') },
    {
      value: 'rehabilitation',
      label: t('contactForm.services.rehabilitation'),
    },
    { value: 'preventive', label: t('contactForm.services.preventive') },
    {
      value: 'patientSoftware',
      label: t('contactForm.services.patientSoftware'),
    },
    { value: 'promsSoftware', label: t('contactForm.services.promsSoftware') },
    {
      value: 'clinicalStudies',
      label: t('contactForm.services.clinicalStudies'),
    },
    { value: 'croStudies', label: t('contactForm.services.croStudies') },
    {
      value: 'followUpPrograms',
      label: t('contactForm.services.followUpPrograms'),
    },
    { value: 'other', label: t('contactForm.services.other') },
  ];

  const structureOptions = [
    { value: 'solo', label: t('contactForm.budgets.solo') },
    { value: 'group', label: t('contactForm.budgets.group') },
    { value: 'clinic', label: t('contactForm.budgets.clinic') },
    { value: 'network', label: t('contactForm.budgets.network') },
    { value: 'software', label: t('contactForm.budgets.software') },
    { value: 'pharma', label: t('contactForm.budgets.pharma') },
    { value: 'researcher', label: t('contactForm.budgets.researcher') },
    { value: 'patientProgram', label: t('contactForm.budgets.patientProgram') },
    { value: 'association', label: t('contactForm.budgets.association') },
    { value: 'other', label: t('contactForm.budgets.other') },
  ];

  return (
    <Container className="grid grid-cols-2 items-start gap-20 pb-20 pt-[calc(var(--nav-h)+40px)] max-[1199px]:gap-12 max-[809px]:grid-cols-1 max-[809px]:gap-9">
      <div className="rev">
        <Badge className="mb-6 inline-block rounded-full border border-[var(--border-mid)] bg-[var(--surface)] px-[14px] py-2 text-[13px] font-[var(--w500)] tracking-[var(--track)]">
          {t('contactForm.badge')}
        </Badge>
        <h1 className="mb-5">
          {t('contactForm.titleLine1')}
          <br />
          <span className="si">{t('contactForm.titleLine2')}</span>
        </h1>
        <p className="max-w-[380px] text-[var(--muted)]">
          {t('contactForm.subtitle')}
        </p>
        <SocialProofRow
          className="mt-6"
          initials={['S', 'J', 'M', 'A', '+']}
          text={socialProofText}
        />
      </div>
      <div className="rev flex flex-col gap-5">
        <div className="flex flex-col gap-[6px]">
          <label className="text-[13px] font-[var(--w500)] tracking-[var(--track)] text-[var(--color-primary)]">
            {t('contactForm.nameLabel')}{' '}
            <sup className="text-[var(--muted)]">*</sup>
          </label>
          <TextInput placeholder={t('contactForm.namePlaceholder')} />
        </div>
        <div className="flex flex-col gap-[6px]">
          <label className="text-[13px] font-[var(--w500)] tracking-[var(--track)] text-[var(--color-primary)]">
            {t('contactForm.roleLabel')}
          </label>
          <TextInput placeholder={t('contactForm.rolePlaceholder')} />
        </div>
        <div className="flex flex-col gap-[6px]">
          <label className="text-[13px] font-[var(--w500)] tracking-[var(--track)] text-[var(--color-primary)]">
            {t('contactForm.emailLabel')}{' '}
            <sup className="text-[var(--muted)]">*</sup>
          </label>
          <TextInput
            type="email"
            placeholder={t('contactForm.emailPlaceholder')}
          />
        </div>
        <div className="flex flex-col gap-[6px]">
          <label className="text-[13px] font-[var(--w500)] tracking-[var(--track)] text-[var(--color-primary)]">
            {t('contactForm.servicesLabel')}
          </label>
          <Select
            options={serviceOptions}
            placeholder="Sélectionnez un type de parcours"
          />
        </div>
        <div className="flex flex-col gap-[6px]">
          <label className="text-[13px] font-[var(--w500)] tracking-[var(--track)] text-[var(--color-primary)]">
            {t('contactForm.budgetLabel')}
          </label>
          <Select
            options={structureOptions}
            placeholder="Sélectionnez un type de structure"
          />
        </div>
        <div className="flex flex-col gap-[6px]">
          <label className="text-[13px] font-[var(--w500)] tracking-[var(--track)] text-[var(--color-primary)]">
            {t('contactForm.businessLabel')}{' '}
            <sup className="text-[var(--muted)]">*</sup>
          </label>
          <TextArea placeholder={t('contactForm.businessPlaceholder')} />
        </div>
        <Button fullWidth size="lg" type="button">
          {t('contactForm.submit')}
        </Button>
      </div>
    </Container>
  );
}
