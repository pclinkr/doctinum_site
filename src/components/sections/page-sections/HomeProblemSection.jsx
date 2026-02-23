import SectionHeading from '../SectionHeading';
import Container from '../../layout/Container';

export default function HomeProblemSection() {
  return (
    <Container as="section" className="py-[var(--space-10)]">
      <div className="mx-auto max-w-[900px] px-[var(--space-6)] max-[700px]:px-[var(--space-4)]">
        <SectionHeading
          className="text-center"
          title="Le suivi repose encore largement sur la réactivité du patient."
        />
        
        <p className="mx-auto my-[var(--space-8)] max-w-[720px] text-center text-[20px] leading-[1.6] text-[var(--color-muted)] max-[700px]:mb-[var(--space-6)] max-[700px]:text-[18px]">
          Dans de nombreux parcours ambulatoires, chroniques ou spécialisés, le suivi repose sur des relances manuelles et des outils hétérogènes, souvent dépendants de l'initiative du patient ou de la disponibilité des équipes.
        </p>

        <div className="my-[var(--space-10)] grid grid-cols-2 gap-[var(--space-8)] max-[700px]:mb-[var(--space-8)] max-[700px]:mt-[var(--space-8)] max-[700px]:grid-cols-1 max-[700px]:gap-[var(--space-6)]">
          <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-[var(--space-8)] transition-shadow duration-300 ease-out transition-transform duration-300 ease-out hover:translate-y-px hover:shadow-[0_12px_32px_rgba(19,47,75,0.06)] max-[700px]:p-[var(--space-6)]">
            <h3 className="mb-[var(--space-4)] text-[24px] font-semibold leading-[1.3] tracking-[-0.02em] text-[var(--color-text)] max-[700px]:text-[20px]">Questionnaires peu complétés</h3>
            <p className="text-[16px] font-normal leading-[1.6] text-[var(--color-muted)]">Les PROMS et ePRO sont fréquemment sous-remplis, limitant la visibilité continue sur l'évolution clinique.</p>
          </div>
          <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-[var(--space-8)] transition-shadow duration-300 ease-out transition-transform duration-300 ease-out hover:translate-y-px hover:shadow-[0_12px_32px_rgba(19,47,75,0.06)] max-[700px]:p-[var(--space-6)]">
            <h3 className="mb-[var(--space-4)] text-[24px] font-semibold leading-[1.3] tracking-[-0.02em] text-[var(--color-text)] max-[700px]:text-[20px]">Temps soignant mobilisé</h3>
            <p className="text-[16px] font-normal leading-[1.6] text-[var(--color-muted)]">Infirmiers coordinateurs, ARC et équipes médicales consacrent une part importante de leur temps à relancer et documenter manuellement les échanges.</p>
          </div>
          <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-[var(--space-8)] transition-shadow duration-300 ease-out transition-transform duration-300 ease-out hover:translate-y-px hover:shadow-[0_12px_32px_rgba(19,47,75,0.06)] max-[700px]:p-[var(--space-6)]">
            <h3 className="mb-[var(--space-4)] text-[24px] font-semibold leading-[1.3] tracking-[-0.02em] text-[var(--color-text)] max-[700px]:text-[20px]">Retours non structurés</h3>
            <p className="text-[16px] font-normal leading-[1.6] text-[var(--color-muted)]">Les informations remontent par des canaux variés (appels spontanés, emails, SMS), difficiles à consolider et à tracer de manière homogène.</p>
          </div>
          <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-[var(--space-8)] transition-shadow duration-300 ease-out transition-transform duration-300 ease-out hover:translate-y-px hover:shadow-[0_12px_32px_rgba(19,47,75,0.06)] max-[700px]:p-[var(--space-6)]">
            <h3 className="mb-[var(--space-4)] text-[24px] font-semibold leading-[1.3] tracking-[-0.02em] text-[var(--color-text)] max-[700px]:text-[20px]">Engagement numérique hétérogène</h3>
            <p className="text-[16px] font-normal leading-[1.6] text-[var(--color-muted)]">Les applications et portails patients nécessitent une disponibilité et une aisance numérique qui ne sont pas toujours compatibles avec certains parcours de soins, notamment chez les patients fragilisés.</p>
          </div>
        </div>

        <div className="my-[var(--space-12)] p-[var(--space-8)] text-center max-[700px]:my-[var(--space-8)] max-[700px]:p-[var(--space-6)]">
          <p className="text-[28px] font-medium italic leading-[1.4] tracking-[-0.03em] text-[var(--color-text)] max-[700px]:text-[22px] max-[700px]:leading-[1.5]">
            Certains signaux précoces restent silencieux.<br/>
            Et c'est souvent là que le risque apparaît.
          </p>
        </div>
      </div>
    </Container>
  );
}
