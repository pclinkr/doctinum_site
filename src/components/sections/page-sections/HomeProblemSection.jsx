import SectionHeading from '../SectionHeading';
import { useTranslation } from 'react-i18next';

export default function HomeProblemSection() {
  const { t } = useTranslation();

  return (
    <section className="sec problem-section">
      <div className="container-sm">
        <SectionHeading
          className="text-center"
          title="Le suivi repose encore largement sur la réactivité du patient."
        />
        
        <p className="problem-intro">
          Dans de nombreux parcours ambulatoires, chroniques ou spécialisés, le suivi repose sur des relances manuelles et des outils hétérogènes, souvent dépendants de l'initiative du patient ou de la disponibilité des équipes.
        </p>

        <div className="problem-grid">
          <div className="problem-card">
            <h3 className="problem-title">Questionnaires peu complétés</h3>
            <p className="problem-body">Les PROMS et ePRO sont fréquemment sous-remplis, limitant la visibilité continue sur l'évolution clinique.</p>
          </div>
          <div className="problem-card">
            <h3 className="problem-title">Temps soignant mobilisé</h3>
            <p className="problem-body">Infirmières coordinatrices, ARC et équipes médicales consacrent une part importante de leur temps à relancer et documenter manuellement les échanges.</p>
          </div>
          <div className="problem-card">
            <h3 className="problem-title">Retours non structurés</h3>
            <p className="problem-body">Les informations remontent par des canaux variés (appels spontanés, emails, SMS), difficiles à consolider et à tracer de manière homogène.</p>
          </div>
          <div className="problem-card">
            <h3 className="problem-title">Engagement numérique hétérogène</h3>
            <p className="problem-body">Les applications et portails patients nécessitent une disponibilité et une aisance numérique qui ne sont pas toujours compatibles avec certains parcours de soins, notamment chez les patients fragilisés.</p>
          </div>
        </div>

        <div className="problem-quote">
          <p className="quote-text">
            Certains signaux précoces restent silencieux.<br/>
            Et c'est souvent là que le risque apparaît.
          </p>
        </div>
      </div>
    </section>
  );
}
