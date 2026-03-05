import Container from '../../layout/Container';

export default function PrivacyPolicyContentSection() {
  return (
    <Container className="grid grid-cols-1 gap-0 pb-20 pt-[calc(var(--nav-h)+48px)]">
      <h1 className="mb-10 animate-fadeUp">Politique de confidentialité</h1>
      <div className="flex max-w-[660px] flex-col gap-[18px] animate-[fadeUp_0.5s_ease-out_0.15s_both] [&_a]:border-b [&_a]:border-[var(--border-mid)] [&_a]:text-[var(--color-primary)] [&_a]:transition-colors [&_a]:duration-150 [&_a]:ease-out hover:[&_a]:border-[var(--color-primary)] [&_p]:text-[var(--font-size-body)] [&_p]:leading-[1.8] [&_p]:tracking-[var(--letter-spacing-body)] [&_p]:text-[var(--muted)]">
        
        <h2 className="mt-6 text-[20px] font-semibold leading-[1.4] text-[var(--color-text)]">
          1. Introduction
        </h2>
        <p>
          La présente politique de confidentialité décrit la manière dont Doctinum SAS collecte et traite les données personnelles dans le cadre de l'utilisation de ce site.
        </p>
        <p>Doctinum SAS s'engage à respecter :</p>
        <ul className="ml-6 list-disc space-y-2 text-[var(--font-size-body)] leading-[1.8] tracking-[var(--letter-spacing-body)] text-[var(--muted)]">
          <li>le Règlement Général sur la Protection des Données (RGPD)</li>
          <li>la loi Informatique et Libertés.</li>
        </ul>

        <h2 className="mt-6 text-[20px] font-semibold leading-[1.4] text-[var(--color-text)]">
          2. Responsable du traitement
        </h2>
        <p>Le responsable du traitement est :</p>
        <p>
          <strong>Doctinum SAS</strong>
          <br />
          RCS Paris
          <br />
          contact [at] doctinum.com
        </p>

        <h2 className="mt-6 text-[20px] font-semibold leading-[1.4] text-[var(--color-text)]">
          3. Données collectées
        </h2>
        
        <h3 className="mt-4 text-[18px] font-semibold leading-[1.4] text-[var(--color-text)]">
          Données transmises volontairement
        </h3>
        <p>
          Lorsque vous utilisez un formulaire de contact, les données suivantes peuvent être collectées :
        </p>
        <ul className="ml-6 list-disc space-y-2 text-[var(--font-size-body)] leading-[1.8] tracking-[var(--letter-spacing-body)] text-[var(--muted)]">
          <li>nom</li>
          <li>prénom</li>
          <li>adresse email</li>
          <li>organisation</li>
          <li>message</li>
        </ul>
        <p>Ces données sont fournies volontairement par l'utilisateur.</p>

        <h3 className="mt-4 text-[18px] font-semibold leading-[1.4] text-[var(--color-text)]">
          Données de navigation
        </h3>
        <p>
          Lors de la navigation sur le site, certaines informations peuvent être collectées automatiquement :
        </p>
        <ul className="ml-6 list-disc space-y-2 text-[var(--font-size-body)] leading-[1.8] tracking-[var(--letter-spacing-body)] text-[var(--muted)]">
          <li>adresse IP anonymisée</li>
          <li>pages consultées</li>
          <li>durée de navigation</li>
          <li>type de navigateur</li>
          <li>type d'appareil</li>
        </ul>
        <p>Ces données sont collectées via Google Analytics.</p>

        <h2 className="mt-6 text-[20px] font-semibold leading-[1.4] text-[var(--color-text)]">
          4. Finalités du traitement
        </h2>
        <p>Les données sont utilisées pour :</p>
        <ul className="ml-6 list-disc space-y-2 text-[var(--font-size-body)] leading-[1.8] tracking-[var(--letter-spacing-body)] text-[var(--muted)]">
          <li>répondre aux demandes envoyées via les formulaires</li>
          <li>analyser l'audience du site</li>
          <li>améliorer l'expérience utilisateur</li>
          <li>comprendre l'utilisation du site.</li>
        </ul>

        <h2 className="mt-6 text-[20px] font-semibold leading-[1.4] text-[var(--color-text)]">
          5. Base légale
        </h2>
        <p>Les traitements reposent sur :</p>
        <ul className="ml-6 list-disc space-y-2 text-[var(--font-size-body)] leading-[1.8] tracking-[var(--letter-spacing-body)] text-[var(--muted)]">
          <li>le consentement de l'utilisateur pour les cookies analytiques</li>
          <li>l'intérêt légitime pour répondre aux demandes envoyées via le formulaire de contact.</li>
        </ul>

        <h2 className="mt-6 text-[20px] font-semibold leading-[1.4] text-[var(--color-text)]">
          6. Destinataires des données
        </h2>
        <p>Les données sont destinées exclusivement :</p>
        <ul className="ml-6 list-disc space-y-2 text-[var(--font-size-body)] leading-[1.8] tracking-[var(--letter-spacing-body)] text-[var(--muted)]">
          <li>à Doctinum SAS</li>
          <li>aux prestataires techniques nécessaires au fonctionnement du site.</li>
        </ul>
        <p>
          Dans le cadre de la mesure d'audience, certaines données peuvent être traitées par :
        </p>
        <ul className="ml-6 list-disc space-y-2 text-[var(--font-size-body)] leading-[1.8] tracking-[var(--letter-spacing-body)] text-[var(--muted)]">
          <li>Google Analytics</li>
        </ul>

        <h2 className="mt-6 text-[20px] font-semibold leading-[1.4] text-[var(--color-text)]">
          7. Durée de conservation
        </h2>
        <p>Les données sont conservées pour une durée limitée :</p>
        <ul className="ml-6 list-disc space-y-2 text-[var(--font-size-body)] leading-[1.8] tracking-[var(--letter-spacing-body)] text-[var(--muted)]">
          <li>données de contact : durée nécessaire au traitement de la demande</li>
          <li>données analytiques : durée définie par Google Analytics.</li>
        </ul>

        <h2 className="mt-6 text-[20px] font-semibold leading-[1.4] text-[var(--color-text)]">
          8. Droits des utilisateurs
        </h2>
        <p>Conformément au RGPD, vous disposez des droits suivants :</p>
        <ul className="ml-6 list-disc space-y-2 text-[var(--font-size-body)] leading-[1.8] tracking-[var(--letter-spacing-body)] text-[var(--muted)]">
          <li>droit d'accès</li>
          <li>droit de rectification</li>
          <li>droit d'effacement</li>
          <li>droit d'opposition</li>
          <li>droit à la limitation du traitement</li>
          <li>droit à la portabilité des données.</li>
        </ul>
        <p>
          Pour exercer ces droits :{' '}
          <a href="mailto:contact@doctinum.com">contact [at] doctinum.com</a>
        </p>
      </div>
    </Container>
  );
}
