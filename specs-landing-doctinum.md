# Specs Landing Pages Doctinum – Congrès SOFCEP (28 mai 2026)

Document de specs pour maquettage Visily puis intégration Vercel.
4 pages, traitées au même niveau de priorité.

Charte rapide (à confirmer sur Visily) : ton médical premium et sobre, beaucoup de blanc, une couleur d'accent unique (bleu confiance ou vert clinique), typo sans-serif lisible, mobile-first (90 % des scans QR se font sur téléphone debout dans un congrès).

Architecture des liens entre pages :

    special.doctinum.com  (tirage)
        |-- bouton "Tester mon organisation : audit gratuit"  --> audit.doctinum.com
        |-- bouton "Découvrir Doctinum"                        --> doctinum.com/esthetique
    audit.doctinum.com  (audit + Calendly)
        |-- bouton "Découvrir Doctinum"                        --> doctinum.com/esthetique
    doctinum.com/esthetique  (produit)
        |-- bouton "Demander une démo / un audit"             --> audit.doctinum.com
    enquetes.doctinum.com  (B2B fabricants)
        |-- bouton "En parler / prendre contact"              --> formulaire ou Calendly B2B

---

# PAGE 1 — special.doctinum.com (TIRAGE AU SORT)

Objectif unique : capter le lead vite. C'est la page du QR code des flyers. La personne est debout, pressée, sollicitée. Tout doit tenir au-dessus de la ligne de flottaison mobile. Friction minimale.

## Section A — Hero (visible immédiatement)

Bandeau / pré-titre :
> TIRAGE AU SORT SPÉCIAL CONGRÈS SOFCEP

Titre principal :
> Gagnez 1 an de Doctinum

Sous-titre :
> 3 abonnements à gagner, d'une valeur de 6 000 € chacun. Inscription en 30 secondes.

Visuel : mockup sobre de la plateforme ou pictogramme cadeau + logo Doctinum. Pas de fioritures.

## Section B — Formulaire (juste sous le hero, sans scroll si possible)

Titre de section :
> Je participe au tirage

Champs (tous obligatoires sauf mention) :
- Prénom
- Nom
- Téléphone (mobile, pour être prévenu si gagnant)
- Email professionnel
- Spécialité (menu déroulant : Chirurgie plastique / Médecine esthétique / Dermatologie / Autre)

Case à cocher RGPD (obligatoire, NON pré-cochée) :
> J'accepte que mes données soient utilisées pour la gestion du tirage au sort et la prise de contact Doctinum, conformément au règlement et à la politique de confidentialité.

Bouton CTA (large, couleur d'accent) :
> JE PARTICIPE

Micro-texte sous le bouton :
> Gratuit et sans engagement. Tirage au sort le [date]. Voir le règlement.

(lien "règlement" ouvre une modale ou une page /reglement avec le texte fourni séparément)

## Section C — Écran de confirmation (après envoi du formulaire)

Titre :
> C'est validé, vous participez au tirage.

Texte :
> Vous êtes inscrit au tirage au sort. Les 3 gagnants seront contactés par email et téléphone après le congrès.

Puis 2 boutons bien visibles (c'est ici qu'on récupère la valeur réelle de la page) :

Bouton 1 (principal, accent) :
> Profitez d'un audit d'organisation IA gratuit
> sous-texte : Pendant le congrès, on analyse gratuitement votre organisation et votre communication patients.
> --> lien vers audit.doctinum.com

Bouton 2 (secondaire, contour) :
> Découvrir Doctinum
> --> lien vers doctinum.com/esthetique

Note d'intégration : idéalement la confirmation s'affiche sans recharger la page (états React / affichage conditionnel). À défaut, page /merci dédiée avec les mêmes 2 boutons.

## Section D — Pied de page

Logo Doctinum, lien règlement du jeu, lien politique de confidentialité, mentions légales, email de contact.

---

# PAGE 2 — audit.doctinum.com (AUDIT GRATUIT + CALENDLY)

Objectif : transformer le lead curieux en RDV calé. Ici on peut être un peu plus long, la personne a déjà manifesté un intérêt.

## Section A — Hero

Pré-titre :
> OFFRE SPÉCIALE CONGRÈS SOFCEP

Titre :
> Votre audit d'organisation IA, offert

Sous-titre :
> 30 minutes pour identifier où vous perdez du temps et où l'IA peut fluidifier votre cabinet : organisation, communication patients, suivi post-opératoire.

CTA principal (ancre vers le Calendly plus bas) :
> Réserver mon audit gratuit

## Section B — Ce que vous obtenez

Titre :
> Ce que couvre l'audit

3 blocs (icône + titre + 1 phrase) :

1. Organisation du cabinet
> On cartographie vos tâches répétitives et les points de friction administratifs.

2. Communication patients
> On regarde comment vos patients sont informés, relancés et accompagnés avant et après l'intervention.

3. Suivi post-opératoire
> On identifie où un suivi automatisé sécuriserait vos patients et libérerait votre équipe.

## Section C — Comment ça se passe

Titre :
> Simple et sans engagement

3 étapes (numérotées) :
1. Vous réservez un créneau de 30 min ci-dessous.
2. On échange en visio sur votre organisation actuelle.
3. Vous repartez avec des recommandations concrètes, applicables immédiatement.

## Section D — Réservation Calendly

Titre :
> Choisissez votre créneau

Intégration : widget Calendly inline (embed). Tu me donnes l'URL Calendly, je te donne le snippet d'intégration exact.

Fallback si le widget ne charge pas : bouton lien direct vers la page Calendly.

## Section E — Rassurance + lien produit

Phrase de réassurance :
> Audit 100 % gratuit, sans engagement, mené par l'équipe Doctinum.

Bouton secondaire :
> Découvrir la plateforme Doctinum
> --> lien vers doctinum.com/esthetique

## Section F — Pied de page

Identique page 1.

---

# PAGE 3 — doctinum.com/esthetique (PAGE PRODUIT)

Objectif : présenter le produit pour celui qui veut comprendre l'offre avant de s'engager. Deux produits à mettre en avant : le vocal interactif pré-consultation, et le suivi post-op téléphonique avec traçabilité.

## Section A — Hero

Pré-titre :
> DOCTINUM POUR LA CHIRURGIE ET LA MÉDECINE ESTHÉTIQUE

Titre :
> L'IA qui accompagne vos patients, avant et après l'intervention

Sous-titre :
> Doctinum vous propose une IA vocale et visuelle pour accueillir, informer vos patients et préparer vos consultations

CTA principal :
> Demander une démo
> --> lien vers page de contact

## Section B — Produit 1 : Vocal interactif pré-consultation

Titre :
> Préparez la consultation, automatiquement

Texte :
> Un assistant vocal interactif échange avec le patient avant sa venue : recueil des informations, réponses aux questions fréquentes, préparation du dossier. Vous gagnez du temps, le patient arrive informé et serein.

Liste de bénéfices (puces) :
- Recueil structuré des informations patient
- Réponses aux questions récurrentes 24h/24
- Dossier pré-rempli avant la consultation
- Moins d'appels à gérer pour le secrétariat


## Section D — Pourquoi Doctinum

3 ou 4 arguments transverses (puces ou blocs) :
- Conçu pour le secteur médical esthétique français
- Hébergement de données de santé conforme (HDS)
- Respect du RGPD et du cadre réglementaire
- Intégration simple dans votre organisation existante

(adapter selon ce que tu veux mettre en avant / certifications réellement en place)

## Section E — CTA final

Titre :
> Envie de voir Doctinum sur votre cabinet ?
Votre audit d'organisation IA offert

Sous-titre :
> 30 minutes pour identifier où vous perdez du temps et où l'IA peut fluidifier votre cabinet : organisation, communication patients, suivi post-opératoire.

Bouton principal :
> Réserver un audit / une démo gratuite
> --> lien vers audit.doctinum.com

## Section F — Pied de page

Identique aux autres.

---

# PAGE 4 — enquetes.doctinum.com (ENQUÊTES MÉDICALES B2B)

Cible différente : les entreprises (fabricants de dispositifs, laboratoires, marques de produits) que tu prospectes au salon. Le message n'est pas patient ni praticien, il est business. À leur montrer / scanner pendant un échange sur le stand ou en marge des conférences.

## Section A — Hero

Pré-titre :
> POUR LES FABRICANTS ET LABORATOIRES

Titre :
> Recueillez des données terrain sur vos produits, directement auprès des cabinets

Sous-titre :
> Doctinum mène pour vous des enquêtes médicales auprès des praticiens et de leurs patients : satisfaction, résultats, retours d'usage, pharmacovigilance. Des données structurées, exploitables, conformes.

CTA principal :
> En discuter avec nous
> --> formulaire de contact B2B ou Calendly dédié

## Section B — Le problème

Titre :
> Vous vendez un produit. Mais que savez-vous vraiment de son usage réel ?

Texte :
> Les retours terrain sur les dispositifs et produits utilisés en cabinet sont rares, dispersés et difficiles à collecter. Les enquêtes classiques sont lentes, peu remplies et peu fiables.

## Section C — La solution Doctinum

Titre :
> Des enquêtes médicales menées pour vous, à grande échelle

3 blocs :

1. Collecte automatisée
> Doctinum interroge praticiens et patients par voie vocale ou numérique, sans charger vos équipes.

2. Données structurées
> Vous recevez des résultats consolidés, quantifiés et exploitables, pas des verbatims épars.

3. Cadre conforme
> Recueil du consentement, RGPD, traçabilité : un cadre maîtrisé pour des données de santé.

## Section D — Cas d'usage

Titre :
> Ce que vous pouvez mesurer

Puces :
- Satisfaction praticiens et patients sur un produit
- Résultats et tolérance en conditions réelles
- Retours d'usage pour améliorer ou positionner un produit
- Signaux de pharmacovigilance / matériovigilance

## Section E — CTA final

Titre :
> Parlons de votre prochaine enquête

Texte :
> Vous êtes au congrès SOFCEP ? Rencontrons-nous. Sinon, laissez-nous vos coordonnées, on revient vers vous rapidement.

Formulaire court B2B :
- Prénom / Nom
- Entreprise
- Fonction
- Email professionnel
- Téléphone
- Message (optionnel)

Bouton :
> Être recontacté

## Section F — Pied de page

Identique.

---

# CONFIG TECHNIQUE VERCEL + DNS (à faire après les maquettes)

Trois sous-domaines + une page sur le domaine principal.

Sous-domaines à créer (special, audit, enquetes) et page /esthetique sur doctinum.com.

Deux approches possibles :

OPTION A — un seul projet Vercel multi-pages
Tu déploies un seul projet contenant toutes les pages, et tu mappes chaque sous-domaine vers la bonne route. Plus simple à maintenir, un seul repo.

OPTION B — un projet Vercel par sous-domaine
Chaque landing est un mini-projet indépendant. Plus de repos à gérer mais isolation totale. Utile si tu veux itérer sur l'une sans toucher les autres.

Pour 48h, OPTION A est plus rapide.

Étapes DNS (chez ton registrar, là où doctinum.com est géré) :
1. Pour chaque sous-domaine, créer un enregistrement CNAME pointant vers cname.vercel-dns.com (Vercel te donne la valeur exacte à l'ajout du domaine).
2. Dans Vercel : projet > Settings > Domains > ajouter special.doctinum.com, audit.doctinum.com, enquetes.doctinum.com.
3. Vercel vérifie le CNAME et provisionne le certificat SSL automatiquement (quelques minutes).
4. Pour doctinum.com/esthetique : si doctinum.com est déjà sur Vercel, ajouter juste la route. Sinon il faut décider où vit le domaine racine.

Point de vigilance 48h : la propagation DNS peut prendre de quelques minutes à quelques heures. Crée les sous-domaines DÈS CE SOIR, avant même que les pages soient finies, pour que la propagation tourne pendant que tu maquettes.

---

# CHECKLIST J-2 / J-1 / JOUR J

J-2 (aujourd'hui) :
- [ ] Créer les 3 sous-domaines + config CNAME Vercel (lancer la propagation tôt)
- [ ] Configurer Calendly (cadence définie) + récupérer l'URL d'embed
- [ ] Finaliser le règlement du tirage (champs manquants : SIREN, dates, contact)
- [ ] Maquetter les 4 pages sur Visily
- [ ] Réceptionner cartes de visite + flyers, vérifier que le QR pointe bien vers special.doctinum.com

J-1 :
- [ ] Intégrer les maquettes en pages déployées sur Vercel
- [ ] Brancher le formulaire tirage à un stockage (Airtable / Google Sheet / base) pour récupérer les leads
- [ ] Brancher le formulaire enquêtes B2B
- [ ] Tester le QR code des flyers en conditions réelles (scan mobile, parcours complet jusqu'à la confirmation)
- [ ] Tester le parcours : tirage -> audit -> Calendly -> RDV calé
- [ ] Vérifier l'affichage mobile de toutes les pages

JOUR J (28 mai) :
- [ ] Distribuer les flyers à la sortie de l'auditoire
- [ ] Prospecter les fabricants avec la page enquêtes
- [ ] Vérifier en début de journée que les pages chargent et que les leads tombent bien
