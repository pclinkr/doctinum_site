import Container from '../../layout/Container';

export default function CookiesPolicyContentSection() {
  return (
    <Container className="grid grid-cols-1 gap-0 pb-20 pt-[calc(var(--nav-h)+48px)]">
      <h1 className="mb-10 animate-fadeUp">Politique de gestion des cookies</h1>
      <div className="flex max-w-[660px] flex-col gap-[18px] animate-[fadeUp_0.5s_ease-out_0.15s_both] [&_a]:border-b [&_a]:border-[var(--border-mid)] [&_a]:text-[var(--color-primary)] [&_a]:transition-colors [&_a]:duration-150 [&_a]:ease-out hover:[&_a]:border-[var(--color-primary)] [&_p]:text-[var(--font-size-body)] [&_p]:leading-[1.8] [&_p]:tracking-[var(--letter-spacing-body)] [&_p]:text-[var(--muted)]">
        
        <h2 className="mt-6 text-[20px] font-semibold leading-[1.4] text-[var(--color-text)]">
          1. Qu'est-ce qu'un cookie ?
        </h2>
        <p>
          Un cookie est un petit fichier texte déposé sur votre appareil lorsque vous consultez un site internet.
        </p>
        <p>Il permet notamment :</p>
        <ul className="ml-6 list-disc space-y-2 text-[var(--font-size-body)] leading-[1.8] tracking-[var(--letter-spacing-body)] text-[var(--muted)]">
          <li>de mesurer l'audience</li>
          <li>d'analyser la navigation</li>
          <li>d'améliorer l'expérience utilisateur.</li>
        </ul>

        <h2 className="mt-6 text-[20px] font-semibold leading-[1.4] text-[var(--color-text)]">
          2. Cookies utilisés sur ce site
        </h2>
        <p>Le site utilise uniquement des cookies de mesure d'audience.</p>

        <h3 className="mt-4 text-[18px] font-semibold leading-[1.4] text-[var(--color-text)]">
          Google Analytics
        </h3>
        <p>Ces cookies permettent :</p>
        <ul className="ml-6 list-disc space-y-2 text-[var(--font-size-body)] leading-[1.8] tracking-[var(--letter-spacing-body)] text-[var(--muted)]">
          <li>d'analyser la fréquentation du site</li>
          <li>de mesurer l'utilisation des pages</li>
          <li>d'améliorer le contenu du site.</li>
        </ul>
        <p>
          Les données collectées sont anonymisées et utilisées uniquement à des fins statistiques.
        </p>

        <h2 className="mt-6 text-[20px] font-semibold leading-[1.4] text-[var(--color-text)]">
          3. Consentement
        </h2>
        <p>
          Conformément aux recommandations de la CNIL, les cookies analytiques sont déposés uniquement après consentement de l'utilisateur.
        </p>
        <p>Lors de votre première visite, vous pouvez :</p>
        <ul className="ml-6 list-disc space-y-2 text-[var(--font-size-body)] leading-[1.8] tracking-[var(--letter-spacing-body)] text-[var(--muted)]">
          <li>accepter les cookies</li>
          <li>refuser les cookies</li>
          <li>personnaliser vos préférences.</li>
        </ul>

        <h2 className="mt-6 text-[20px] font-semibold leading-[1.4] text-[var(--color-text)]">
          4. Durée de conservation
        </h2>
        <p>
          Les cookies analytiques sont conservés pour une durée maximale conforme aux recommandations de la CNIL.
        </p>

        <h2 className="mt-6 text-[20px] font-semibold leading-[1.4] text-[var(--color-text)]">
          5. Gestion des cookies
        </h2>
        <p>Vous pouvez à tout moment :</p>
        <ul className="ml-6 list-disc space-y-2 text-[var(--font-size-body)] leading-[1.8] tracking-[var(--letter-spacing-body)] text-[var(--muted)]">
          <li>modifier votre consentement</li>
          <li>retirer votre accord.</li>
        </ul>
        <p>Une interface de gestion des cookies est accessible sur le site.</p>
      </div>
    </Container>
  );
}
