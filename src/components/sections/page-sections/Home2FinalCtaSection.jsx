import { useTranslation } from 'react-i18next';
import BentoPanel from '../../layout/BentoPanel';
import Button from '../../ui/Button';

/**
 * Clôture de la page. Les textes viennent de la scène finale du récit —
 * seul le titre diffère, pour ne pas répéter mot pour mot ce qui vient d'être
 * lu quelques écrans plus haut.
 */
export default function Home2FinalCtaSection({ onNavigate }) {
  const { t } = useTranslation();
  const badges = t('sections.home2.finalCta.badges', { returnObjects: true });

  return (
    <BentoPanel
      tone="dark"
      id="contact"
      className="py-[clamp(48px,7vw,96px)]"
      innerClassName="px-6 py-[clamp(64px,9vw,128px)] text-center"
    >
      <div className="relative mx-auto max-w-[760px]">
        <h2 className="rev-mask mb-8 font-serif text-[clamp(2.2rem,4.2vw,3.6rem)] font-[600] leading-[1.1]">
          <span>
            {t('sections.home2.finalCta.titlePrefix')}{' '}
            <em className="not-italic text-[var(--color-accent-1)]">
              {t('sections.home2.finalCta.titleAccent')}
            </em>
          </span>
        </h2>

        <p className="rev d1 mx-auto mb-11 max-w-[54ch] text-[16.5px] leading-[1.8] text-[var(--white-72)]">
          {t('sections.home2.finalCta.subtitle')}
        </p>

        <div className="rev d2 mb-12 flex justify-center">
          <Button
            variant="darkPrimary"
            size="lg"
            onClick={() => onNavigate('demo')}
          >
            {t('sections.home2.finalCta.primaryCta')}
          </Button>
        </div>

        <ul className="rev d3 flex flex-wrap justify-center gap-3">
          {(Array.isArray(badges) ? badges : []).map((badge) => (
            <li
              key={badge}
              className="rounded-full border border-[var(--white-20)] px-4 py-2 text-[12.5px] text-[var(--white-72)]"
            >
              {badge}
            </li>
          ))}
        </ul>
      </div>
    </BentoPanel>
  );
}
