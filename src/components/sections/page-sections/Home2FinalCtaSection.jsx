import { useTranslation } from 'react-i18next';
import Container from '../../layout/Container';
import Button from '../../ui/Button';

export default function Home2FinalCtaSection({
  onNavigate,
  onJumpToSimulation,
}) {
  const { t } = useTranslation();

  return (
    <section
      id="contact"
      className="bg-primary py-28 text-center text-[var(--color-white)]"
    >
      <Container className="max-w-[840px]">
        <h2 className="mb-6 text-[clamp(2.2rem,4vw,3.7rem)] font-[300] leading-[1.2]">
          {t('sections.home2.finalCta.titlePrefix')}{' '}
          <em className="text-[var(--color-accent-1)] si">
            {t('sections.home2.finalCta.titleAccent')}
          </em>
        </h2>

        <p className="rev d1 mx-auto mb-10 max-w-[52ch] text-[17px] font-light leading-[1.8] text-[var(--white-72)]">
          {t('sections.home2.finalCta.subtitle')}
        </p>

        <div className="rev d2 flex flex-wrap justify-center gap-4">
          <Button
            variant="darkPrimary"
            onClick={() => onNavigate('demo')}
          >
            {t('sections.home2.finalCta.primaryCta')}
          </Button>
          <Button
            variant="darkSecondary"
            onClick={onJumpToSimulation}
          >
            {t('sections.home2.finalCta.secondaryCta')}
          </Button>
        </div>
      </Container>
    </section>
  );
}
