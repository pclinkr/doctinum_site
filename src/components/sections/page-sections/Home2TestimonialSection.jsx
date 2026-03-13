import { useTranslation } from 'react-i18next';
import Container from '../../layout/Container';

export default function Home2TestimonialSection() {
  const { t } = useTranslation();

  return (
    <section className="border-y border-[var(--color-border)] bg-[var(--color-white)] py-24">
      <Container className="max-w-[760px] text-center">
        <p className="rev ds-text-label mb-5 text-[var(--color-info)]">
          {t('sections.home2.testimonial.label')}
        </p>

        <blockquote className="rev d1 mb-8 font-serif text-[clamp(1.7rem,2.8vw,2.3rem)] italic leading-[1.48] text-[var(--color-primary)]">
          “{t('sections.home2.testimonial.quote')}”
        </blockquote>

        <p className="rev d2 text-[12px] font-[var(--w500)] uppercase tracking-[0.1em] text-[var(--color-muted)]">
          {t('sections.home2.testimonial.author')} ·{' '}
          <span className="text-[var(--color-subtle)]">
            {t('sections.home2.testimonial.role')}
          </span>
        </p>
      </Container>
    </section>
  );
}
