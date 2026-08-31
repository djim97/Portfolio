# Portfolio · Djimouna Bacary Badji

Site personnel construit avec Angular 21 et prérendu en statique.
Déployé sur Netlify à chaque push.

Élève ingénieur en 1ᵉʳᵉ année à l'ISI Dakar. Applications métier Java, C et C++,
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

**Deux thèmes, un seul jeu de tokens.** Les palettes claire et sombre définissent
les mêmes variables CSS, donc aucun composant ne connaît le thème courant. Le
thème est posé sur `<html data-theme>` par un script inline dans `index.html`,
avant le premier rendu : pas de flash au chargement. Le choix est mémorisé dans
`localStorage`, à défaut la préférence système s'applique.

**Animations sans librairie.** Tout passe par quatre directives et du CSS natif.
Les entrées au défilement animent `translate` et `scale`, pas `transform` : ce
sont des propriétés distinctes, qui se composent avec le `transform` des effets
de survol au lieu de l'écraser. Les cartes gardent donc leur relief pendant et
après leur apparition. Un seul `IntersectionObserver` sert toute la page, et une
seule mesure de défilement par frame est partagée par les composants.

**Mouvement réduit respecté.** Sous `prefers-reduced-motion: reduce`, les
révélations s'affichent d'emblée et les animations en boucle sont coupées. Sans
JavaScript, rien n'est masqué : les styles d'entrée ne s'appliquent que sous
`html.js`, classe posée par le script inline.

## Pile

- Angular 21, composants standalone, signaux, flux de contrôle `@if` / `@for`
- Zoneless : aucune dépendance à `zone.js`
- Prérendu statique via `@angular/ssr`
- CSS natif avec système de tokens dans `src/styles.css`
- Aucune dépendance d'exécution ajoutée : icônes SVG inline, animations en CSS
- Déploiement continu sur Netlify

## Structure

```
src/
├── app/
│   ├── core/           modèles, données du profil, thème, état de défilement
│   ├── layout/         en-tête, pied de page
│   ├── pages/          accueil, projets
│   └── shared/
│       ├── motion/     directives reveal, parallax, spotlight, scroll-progress
│       ├── icon/       icônes SVG inline
│       ├── timeline/   frise du parcours
│       ├── theme-toggle/
│       ├── back-to-top/
│       └── project-card/
├── styles.css          tokens des deux thèmes, utilitaires, animations
└── index.html          métadonnées, Open Graph, amorçage du thème
public/                 photo, favicons, image de partage, _redirects
netlify.toml            commande de build et en-têtes
```

## Directives de mouvement

| Directive            | Rôle                                                        |
| -------------------- | ----------------------------------------------------------- |
| `appReveal`          | Révèle un élément à l'entrée dans l'écran, et rejoue l'effet à chaque nouveau passage. `appReveal="left \| right \| zoom \| blur"` et `[revealDelay]` pour échelonner. |
| `appParallax`        | Décale l'élément à contre-courant du défilement. Expose `--parallax`. |
| `appSpotlight`       | Suit le curseur : expose `--mx`, `--my`, `--rx`, `--ry` et la classe `is-lit`. Inactif au toucher. |
| `appScrollProgress`  | Expose `--through`, de 0 à 1, selon la traversée de l'écran. Dessine le rail du parcours. |

## Mettre le contenu à jour

Tout est dans `src/app/core/profile.data.ts` :

- `IDENTITY` — nom, accroche, liens, CV, photo
- `ABOUT` — paragraphes de présentation
- `PARCOURS` — frise du parcours ; `period` est optionnel
- `SKILLS` — groupes de compétences, aussi utilisés par le bandeau défilant
- `PROJECTS` — cartes projets ; `featured: true` les remonte sur l'accueil

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
