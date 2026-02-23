import SectionHeading from '../SectionHeading';
import { useTranslation } from 'react-i18next';
import Card from '../../ui/Card';

export default function HomeServicesSection({ items }) {
  const { t } = useTranslation();

  return (
    <section className="mx-auto w-full max-w-[1200px] px-16 py-24 text-center max-[1024px]:px-8 max-[768px]:px-5">
      <SectionHeading className="rev" title={<>{t('sections.services.titlePrefix')} <span className="si">{t('sections.services.titleAccent')}</span></>} style={{ marginBottom: '56px' }} />
      <div className="grid grid-cols-3 gap-5 text-left max-[809px]:grid-cols-1">
        {items.map((item) => (
          <Card
            key={item.title}
            className={`rev flex flex-col gap-[14px] bg-[var(--surface)] p-8 transition-transform duration-300 ease-spring transition-shadow duration-300 ease-out hover:translate-y-px hover:shadow-[0_12px_40px_var(--ink-07)] ${item.delayClass}`.trim()}
          >
            <div className="mb-1 flex h-[150px] w-full items-center justify-center rounded-[var(--r-sm)] text-[42px]" style={{ background: item.gradient }}>{item.emoji}</div>
            <h3 className="text-[17px] font-[var(--w500)] tracking-[var(--track)]">{item.title}</h3>
            <p className="text-[14px] leading-[1.65] text-[var(--muted)]">{item.body}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
