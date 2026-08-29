# Portfolio — Djimouna Bacary Badji

Site personnel construit avec Angular 21 et prérendu en statique.
Déployé sur Netlify à chaque push.

Élève Ingénieur en 1ᵉʳᵉ année à l'ISI Dakar. Applications métier Java, C et C++,
administration réseaux, systèmes et bases de données.

---

## Choix techniques

**Prérendu statique plutôt que SSR.** L'option `outputMode: "static"` génère un
fichier HTML par route au moment du build. Le site sert donc du vrai contenu aux
moteurs de recherche et aux aperçus de liens, sans exiger de serveur applicatif.

**Contenu séparé du code.** Tout le contenu éditable — identité, parcours,
compétences, projets — est regroupé dans `src/app/core/profile.data.ts`. Ajouter
un projet consiste à ajouter un objet à un tableau, sans ouvrir un composant.

**Pas de dépendance à un backend.** Le portfolio est entièrement statique. Le
projet Gestion de Projets, qui repose sur une API PHP, est hébergé séparément et
accessible par un lien externe.

## Pile

- Angular 21, composants standalone, signaux, flux de contrôle `@if` / `@for`
- Prérendu statique via `@angular/ssr`
- CSS natif avec système de tokens dans `src/styles.css`
- Déploiement continu sur Netlify

## Structure

```
src/
├── app/
│   ├── core/           modèles et données du profil
│   ├── layout/         en-tête, pied de page
│   ├── pages/          accueil, projets
│   └── shared/         carte projet réutilisable
├── styles.css          tokens de l'identité visuelle
└── index.html          métadonnées, Open Graph
public/                 photo, favicons, image de partage, _redirects
netlify.toml            commande de build et en-têtes
```

## Démarrer

```bash
npm install
npm start
```

## Builder

```bash
npm run build
```

La sortie se trouve dans `dist/portfolio/browser/`, avec un `index.html` par
route. Le build nécessite un accès réseau : les polices Google sont téléchargées
à la compilation pour être intégrées au CSS.

## Déployer

Netlify lit `netlify.toml` et construit automatiquement à chaque push sur la
branche principale. Aucune action manuelle.

Le fichier `public/_redirects` renvoie les URL inconnues vers `index.html`, ce
qui laisse le routeur Angular prendre le relais.
