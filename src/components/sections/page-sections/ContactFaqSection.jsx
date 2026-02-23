import BrandIcon from '../../ui/BrandIcon';
import FaqAccordion from '../../ui/FaqAccordion';
import Card from '../../ui/Card';
import Badge from '../../ui/Badge';
import { useTranslation } from 'react-i18next';
import Container from '../../layout/Container';

export default function ContactFaqSection({ items }) {
  const { t } = useTranslation();

  return (
    <Container className="grid grid-cols-2 items-start gap-16 pb-20 max-[809px]:grid-cols-1">
      <div />
      <Card className="rev relative p-12">
        <div className="rounded-[16px] absolute -top-6 left-6 flex h-[52px] w-[52px] items-center justify-center bg-[var(--ink-08)]"><BrandIcon stroke="var(--text-primary)" width={24} height={24} /></div>
        <Badge className="mb-4 inline-block rounded-full bg-[var(--ink-06)] px-3 py-1 ds-text-label">{t('sections.faq.label')}</Badge>
        <h2 className="mb-6">{t('sections.faq.title')}</h2>
        <FaqAccordion items={items} />
      </Card>
    </Container>
  );
}
