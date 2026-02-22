import BrandIcon from '../ui/BrandIcon';
import { useTranslation } from 'react-i18next';
import Badge from '../ui/Badge';

export default function ProblemCard() {
  const { t } = useTranslation();

  const problems = [
    {
      title: "Questionnaires peu complétés",
      description: "Les PROMS et ePRO sont fréquemment sous-remplis, limitant la visibilité continue sur l'évolution clinique."
    },
    {
      title: "Temps soignant mobilisé",
      description: "Infirmières coordinatrices, ARC et équipes médicales consacrent une part importante de leur temps à relancer et documenter manuellement les échanges."
    },
    {
      title: "Retours non structurés",
      description: "Les informations remontent par des canaux variés (appels spontanés, emails, SMS), difficiles à consolider et à tracer de manière homogène."
    },
    {
      title: "Engagement numérique hétérogène",
      description: "Les applications et portails patients nécessitent une disponibilité et une aisance numérique qui ne sont pas toujours compatibles avec certains parcours de soins, notamment chez les patients fragilisés."
    }
  ];

  return (
    <div
      className="rev relative mx-auto max-w-[980px] overflow-hidden rounded-[24px] border border-[var(--border-default)] px-8 py-12 max-[700px]:px-5 max-[700px]:py-9"
      style={{ background: 'var(--gradient-problem-surface)' }}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[var(--white-38)] to-transparent" />
      <div className="pointer-events-none absolute -left-16 top-20 h-48 w-48 rounded-full bg-[var(--white-28)] blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-8 h-56 w-56 rounded-full bg-[var(--white-20)] blur-3xl" />
      <div className="pointer-events-none absolute left-8 right-8 top-[92px] h-px bg-[var(--border-default)] max-[700px]:left-5 max-[700px]:right-5" />

      <div className="mx-auto max-w-[760px] text-center">
        <Badge className="mb-5 inline-block rounded-full bg-[var(--ink-06)] px-[13px] py-2 text-[12px] font-[var(--w500)]">Constat terrain</Badge>

        <h2 className="mb-6 text-[clamp(30px,4vw,44px)] font-[var(--w500)] leading-[1.08] tracking-[-0.05em] text-[var(--text-primary)]">
          Le suivi repose encore largement sur la réactivité du patient
        </h2>

        <p className="mx-auto mb-10 max-w-[720px] text-[17px] leading-[1.7] text-[var(--muted)]">
          Dans de nombreux parcours ambulatoires, chroniques ou spécialisés, le suivi repose sur des relances manuelles et des outils hétérogènes, souvent dépendants de l'initiative du patient ou de la disponibilité des équipes.
        </p>
      </div>

      <div className="relative mb-10 mt-8 grid grid-cols-2 gap-x-10 gap-y-9 max-[700px]:grid-cols-1">
        {problems.map((problem, index) => (
          <article key={index} className="relative pl-10 max-[700px]:pl-9">
            <span className="absolute left-0 top-1 inline-flex h-6 w-6 items-center justify-center rounded-full border border-[var(--border-default)] bg-[var(--bg-page)] text-[11px] font-[var(--w500)] text-[var(--text-primary)]">
              {index + 1}
            </span>
            <span className="absolute left-[30px] top-[13px] h-[7px] w-[7px] rounded-full bg-[var(--action-primary-bg)] opacity-80" />
            <span className="absolute left-3 top-8 bottom-[-18px] w-px bg-[var(--border-default)] max-[700px]:bottom-[-12px]" />
            <h3 className="mb-2 text-[22px] font-[var(--w500)] leading-[1.25] tracking-[-0.02em] text-[var(--text-primary)] max-[700px]:text-[20px]">
              {problem.title}
            </h3>
            <p className="text-[16px] leading-[1.65] text-[var(--text-muted)]">
              {problem.description}
            </p>
          </article>
        ))}
      </div>

      <div className="mx-auto mt-2 max-w-[760px] rounded-[18px] border border-[var(--border-default)] bg-[var(--white-20)] px-6 py-8 text-center backdrop-blur-[2px] max-[700px]:px-4">
        <p className="text-[26px] font-medium italic leading-[1.42] tracking-[-0.03em] text-[var(--text-primary)] max-[700px]:text-[22px]">
          Certains signaux précoces restent silencieux.<br />
          Et c&apos;est souvent là que le risque apparaît.
        </p>
      </div>

      <div className="mt-8 flex items-center justify-center gap-[8px]">
        <div className="flex h-[22px] w-[22px] items-center justify-center rounded-[6px] bg-[var(--action-primary-bg)]">
          <BrandIcon stroke="var(--action-primary-fg)" width={12} height={12} />
        </div>
        <span className="text-[15px] font-[var(--w500)] tracking-[var(--track-tight)] text-[var(--text-primary)]">DOCTINUM</span>
      </div>
    </div>
  );
}
