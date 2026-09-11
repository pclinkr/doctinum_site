/** @type {import('next').NextConfig} */

// Verticales retirées de l'offre: leurs pages n'existent plus, les anciennes
// URL sont redirigées vers l'accueil plutôt que de renvoyer une 404.
const RETIRED_ROUTES = [
  'solutions/chirurgie-medecine-esthetique',
  'solutions/rhinoplastie',
  'solutions/liposuccion',
  'solutions/injection-acide-hyaluronique',
  'solutions/medecine-du-sport',
  'solutions/dermatologie',
  'solutions/proms-questionnaires-post-acte',
  'solutions/programmes-accompagnement-patient',
  'solutions/prevention-sante-travail',
  'solutions/parcours-chroniques-coordonnes',
  'pharma-recherche',
];

const nextConfig = {
  reactStrictMode: true,
  /* Répertoire de build paramétrable. Deux processus Next qui partagent le
     même `.next` — un `next build` lancé pendant qu'un serveur de dev tourne,
     ou deux serveurs de dev sur le même dossier — se corrompent mutuellement
     le cache webpack, et l'erreur qui remonte (`JSON.parse` sur un fichier
     tronqué) ne dit rien de sa cause. */
  distDir: process.env.NEXT_DIST_DIR || '.next',
  async redirects() {
    return [
      ...RETIRED_ROUTES.map((route) => ({
        source: `/:locale(en|fr)/${route}`,
        destination: '/:locale',
        permanent: true,
      })),
      {
        source: '/:locale(en|fr)/solutions/:slug*',
        destination: '/:locale',
        permanent: true,
      },
      {
        source: '/:locale(en|fr)/haute-vigilance/:slug*',
        destination: '/:locale',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
