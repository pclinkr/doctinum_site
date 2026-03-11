import Container from '../../layout/Container';

export default function LegalNoticeContentSection() {
  return (
    <Container className="grid grid-cols-1 gap-0 pb-20 pt-[calc(var(--nav-h)+48px)]">
      <h1 className="mb-10 animate-fadeUp">Mentions légales</h1>
      <div className="flex max-w-[660px] flex-col gap-[18px] animate-[fadeUp_0.5s_ease-out_0.15s_both] [&_a]:border-b [&_a]:border-[var(--border-mid)] [&_a]:text-[var(--color-primary)] [&_a]:transition-colors [&_a]:duration-150 [&_a]:ease-out hover:[&_a]:border-[var(--color-primary)] [&_p]:text-[var(--font-size-body)] [&_p]:leading-[1.8] [&_p]:tracking-[var(--letter-spacing-body)] [&_p]:text-[var(--muted)]">
        
        <h2 className="mt-6 text-[20px] font-semibold leading-[1.4] text-[var(--color-text)]">
          Éditeur du site
        </h2>
        <p>Le présent site est édité par :</p>
        <p>
          <strong>Doctinum SAS</strong>
          <br />
          Société par actions simplifiée
          <br />
          Immatriculée au Registre du Commerce et des Sociétés de Bayonne
        </p>
        <p>
          <strong>Siège social :</strong>
          <br />
          Bayonne
        </p>
        <p>
          <strong>Adresse email :</strong>
          <br />
          contact [at] doctinum.com
        </p>

        <h2 className="mt-6 text-[20px] font-semibold leading-[1.4] text-[var(--color-text)]">
          Directeur de la publication
        </h2>
        <p>Le directeur de la publication est :</p>
        <p>Le Président de Doctinum SAS</p>

        <h2 className="mt-6 text-[20px] font-semibold leading-[1.4] text-[var(--color-text)]">
          Hébergement
        </h2>
        <p>Le site est hébergé par :</p>
        <p>
          <strong>Vercel Inc.</strong>
          <br />
          Infrastructure d'hébergement opérée sur des serveurs situés en Europe.
        </p>
        <p>
          Site web :{' '}
          <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
            https://vercel.com
          </a>
        </p>

        <h2 className="mt-6 text-[20px] font-semibold leading-[1.4] text-[var(--color-text)]">
          Propriété intellectuelle
        </h2>
        <p>
          L'ensemble des contenus présents sur ce site, notamment :
        </p>
        <ul className="ml-6 list-disc space-y-2 text-[var(--font-size-body)] leading-[1.8] tracking-[var(--letter-spacing-body)] text-[var(--muted)]">
          <li>textes</li>
          <li>logos</li>
          <li>éléments graphiques</li>
          <li>illustrations</li>
          <li>interfaces</li>
          <li>architecture du site</li>
        </ul>
        <p>
          sont la propriété exclusive de Doctinum SAS, sauf mention contraire.
        </p>
        <p>
          Toute reproduction, représentation, modification ou exploitation, totale ou partielle, sans autorisation préalable écrite est interdite.
        </p>

        <h2 className="mt-6 text-[20px] font-semibold leading-[1.4] text-[var(--color-text)]">
          Limitation de responsabilité
        </h2>
        <p>
          Les informations présentes sur ce site sont fournies à titre informatif.
        </p>
        <p>
          Doctinum SAS s'efforce d'assurer l'exactitude et la mise à jour des informations publiées, mais ne saurait être tenue responsable :
        </p>
        <ul className="ml-6 list-disc space-y-2 text-[var(--font-size-body)] leading-[1.8] tracking-[var(--letter-spacing-body)] text-[var(--muted)]">
          <li>des erreurs ou omissions</li>
          <li>d'une mauvaise interprétation du contenu</li>
          <li>de l'utilisation des informations disponibles sur le site.</li>
        </ul>
      </div>
    </Container>
  );
}
