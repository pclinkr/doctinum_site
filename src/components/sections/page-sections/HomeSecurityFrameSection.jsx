import { useTranslation } from 'react-i18next';
import Button from '../../ui/Button';

export default function HomeSecurityFrameSection({ onNavigate }) {
  const { t } = useTranslation();
  const rows = t('sections.homeSecurityFrame.rows', { returnObjects: true });

  return (
    <section
      className="mx-auto w-full max-w-[1200px] px-16 py-24 max-[1024px]:px-8 max-[768px]:px-5"
      id="homeSecurityFrame"
    >
      <div className="rev mb-10 text-center">
        <p className="mb-3 text-[11px] font-[var(--w500)] uppercase tracking-[0.07em] text-[var(--muted)]">
          {t('sections.homeSecurityFrame.eyebrow')}
        </p>
        <h2 className="mx-auto max-w-[900px] text-[var(--color-primary)]">
          {t('sections.homeSecurityFrame.title')}
        </h2>
        <p className="mx-auto mt-4 max-w-[680px] text-[15px] leading-[1.7] text-[var(--muted)]">
          {t('sections.homeSecurityFrame.subtitle')}
        </p>
      </div>

      <div className="rev overflow-hidden border-t border-[var(--border)]">
        <table className="w-full border-collapse">
          <tbody>
            {rows.map((row, index) => (
              <tr key={row.title}>
                <td
                  className={`w-[34%] px-2 py-5 align-top text-[18px] font-[var(--w500)] leading-[1.2] tracking-[-0.03em] text-[var(--color-primary)] ${index < rows.length - 1 ? 'border-b border-[var(--border)]' : ''}`.trim()}
                >
                  {row.title}
                </td>
                <td
                  className={`px-2 py-5 align-top text-[15px] leading-[1.7] text-[var(--muted)] ${index < rows.length - 1 ? 'border-b border-[var(--border)]' : ''}`.trim()}
                >
                  {row.body}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="rev mt-7 flex justify-center">
        <Button variant="light" onClick={() => onNavigate('security')}>
          {t('sections.homeSecurityFrame.cta')}
        </Button>
      </div>
    </section>
  );
}
