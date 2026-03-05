import Container from '../../layout/Container';
import Button from '../../ui/Button';
import { useTranslation } from 'react-i18next';

function SportsCaseRow({
  title,
  body,
  listItems = [],
  imagePosition = 'right',
  imageGradient,
  brand,
  onNavigate,
  targetPage = 'case-detail',
  buttonLabel,
}) {
  const isImageRight = imagePosition === 'right';

  return (
    <div className="rev mb-12 grid grid-cols-2 items-center gap-10 border-b border-[var(--border)] pb-12 last:mb-0 last:border-b-0 max-[809px]:flex max-[809px]:flex-col">
      <div
        className={`relative aspect-[4/3] cursor-pointer overflow-hidden rounded-[var(--r-md)] transition-transform duration-300 ease-spring hover:scale-[1.02] ${isImageRight ? 'min-[810px]:order-2' : 'min-[810px]:order-1'}`.trim()}
        onClick={() => onNavigate(targetPage)}
      >
        <div className="h-full w-full" style={{ background: imageGradient }} />
        <div className="absolute bottom-4 right-6 rounded-[var(--r-sm)] bg-[var(--white-90)] px-3 py-2 text-[13px] font-[var(--w500)] backdrop-blur-[8px]">
          {brand}
        </div>
      </div>

      <div
        className={`flex flex-col gap-4 ${isImageRight ? 'min-[810px]:order-1' : 'min-[810px]:order-2'}`.trim()}
      >
        <h3 className="text-[clamp(26px,3vw,38px)] font-[var(--w500)] leading-[1.08] tracking-[-0.05em]">
          {title}
        </h3>
        {body ? (
          <p className="text-[14px] leading-[1.7] text-[var(--muted)]">
            {body}
          </p>
        ) : null}
        {listItems.length > 0 ? (
          <ul className="grid gap-2">
            {listItems.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-[14px] leading-[1.68] text-[var(--color-primary)]"
              >
                <span className="mt-[8px] inline-block h-[5px] w-[5px] rounded-full bg-[var(--ink-30)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : null}
        {buttonLabel && (
          <div className="mt-2">
            <Button variant="light" onClick={() => onNavigate(targetPage)}>
              {buttonLabel}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function SportsCasesSection({ onNavigate }) {
  const { t } = useTranslation();
  const copy = t('sections.sportsCases', { returnObjects: true });

  const case1 = {
    title: copy.case1.title,
    body: copy.case1.body,
    listItems: copy.case1.listItems,
    imageGradient: 'var(--gradient-accent-warm-terra)',
    brand: copy.case1.brand,
    imagePosition: 'right',
  };

  const case2 = {
    title: copy.case2.title,
    listItems: copy.case2.listItems,
    imageGradient: 'var(--gradient-accent-warm)',
    brand: copy.case2.brand,
    imagePosition: 'left',
    targetPage: 'sports-integrated-centers',
    buttonLabel: copy.case2.buttonLabel,
  };

  return (
    <Container className="py-10">
      <SportsCaseRow {...case1} onNavigate={onNavigate} />
      <SportsCaseRow {...case2} onNavigate={onNavigate} />
    </Container>
  );
}
