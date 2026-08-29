# Portfolio — Djimouna Bacary Badji

Site personnel construit avec Angular 21 et prérendu en statique, déployé sur
[bacary.gt.tc](https://bacary.gt.tc).

Élève Ingénieur en 1ᵉʳᵉ année à l'ISI Dakar. Applications métier Java, C et C++,
administration réseaux, systèmes et bases de données.

---

## Choix techniques

**Prérendu statique plutôt que SSR.** L'hébergement cible est un Apache
mutualisé, sans Node. L'option `outputMode: "static"` génère un fichier HTML par
route au moment du build, ce qui donne un vrai contenu aux moteurs de recherche
et aux aperçus de liens sans exiger de serveur applicatif.

**Contenu séparé du code.** Tout le contenu éditable — identité, parcours,
compétences, projets — est regroupé dans `src/app/core/profile.data.ts`. Ajouter
un projet consiste à ajouter un objet à un tableau, sans ouvrir un seul
composant.

**Intégration d'une API REST existante.** La route `/demo` consomme en direct
l'API PHP du projet Gestion de Projets, hébergée sur le même domaine. La page
d'accueil interroge cette même API pour afficher un indicateur d'état, côté
navigateur uniquement afin de ne pas figer la valeur au prérendu.

## Pile

- Angular 21, composants standalone, signaux, flux de contrôle `@if` / `@for`
- Prérendu statique via `@angular/ssr`
- CSS natif avec système de tokens dans `src/styles.css`
- Déploiement Apache, réécriture des routes par `.htaccess`

## Structure

```
src/
├── app/
│   ├── core/           modèles, données du profil, service API
│   ├── layout/         en-tête, pied de page
│   ├── pages/          accueil, projets, démo
│   └── shared/         carte projet réutilisable
├── styles.css          tokens de l'identité visuelle
└── index.html          métadonnées, Open Graph
public/
└── .htaccess           réécriture des routes vers index.html
```

## Démarrer

```bash
npm install
npm start
```

Le proxy défini dans `proxy.conf.json` redirige `/php/...` vers le domaine de
production, ce qui permet de développer la page `/demo` sans base MySQL locale.

## Builder

```bash
npm run build
```

La sortie se trouve dans `dist/portfolio/browser/`, avec un `index.html` par
route. Le build nécessite un accès réseau : les polices Google sont téléchargées
à la compilation pour être intégrées au CSS.

## Déployer

Envoyer le contenu de `dist/portfolio/browser/` à la racine du dossier web.
Le `.htaccess` est copié automatiquement depuis `public/`, mais la plupart des
clients FTP masquent les fichiers commençant par un point — vérifier qu'il est
bien transféré, sans lui toutes les routes renvoient une 404.

## Licence

Le code est libre de consultation et de réutilisation. Le contenu textuel, les
descriptions de projets et l'identité visuelle restent la propriété de l'auteur.