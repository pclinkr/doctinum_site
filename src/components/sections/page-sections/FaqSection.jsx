import SectionHeading from '../SectionHeading';
import FaqAccordion from '../../ui/FaqAccordion';
import { useTranslation } from 'react-i18next';

export default function FaqSection({ items, label, title }) {
  const { t } = useTranslation();
  const resolvedLabel = label || t('sections.faq.label');
  const resolvedTitle = title || t('sections.faq.title');

  return (
    <section className="mx-auto w-full max-w-[1200px] px-16 py-24 text-center max-[1024px]:px-8 max-[768px]:px-5">
      <SectionHeading
        className="rev"
        label={resolvedLabel}
        title={resolvedTitle}
        style={{ marginBottom: '44px' }}
      />
      <FaqAccordion items={items} className="rev" />
    </section>
  );
}
