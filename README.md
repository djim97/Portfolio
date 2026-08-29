# Portfolio — Djimouna Bacary Badji

Site personnel en Angular 21, prérendu en statique, déployé sur `bacary.gt.tc`
(Apache mutualisé, sans Node).

## Développer

```bash
npm install
npm start
```

Le proxy (`proxy.conf.json`) redirige `/php/...` vers `bacary.gt.tc`, donc la
page `/demo` fonctionne en local sans base MySQL.

## Builder et déployer

```bash
npm run build
```

Le build génère `dist/portfolio/browser/` avec un fichier HTML prérendu par
route (`/`, `/projets`, `/demo`). Envoie **le contenu** de ce dossier — pas le
dossier lui-même — à la racine de `htdocs` par FTP.

Conserve `htdocs/php/` tel quel : c'est l'API que consomme la page `/demo`.
Le `.htaccess` livré exclut ce dossier de la réécriture.

Le build a besoin d'un accès réseau : Angular télécharge les polices Google au
moment de la compilation pour les intégrer au CSS. Sans réseau, la compilation
échoue avec une erreur d'inlining.

## Mettre à jour le contenu

Tout est dans `src/app/core/profile.data.ts` :

- `IDENTITY` — nom, formation, email, liens, chemin du CV
- `ABOUT` — paragraphes de la section « à propos »
- `SKILLS` — compétences groupées par domaine
- `PROJECTS` — projets ; `featured: true` les fait remonter sur l'accueil

Aucun composant à ouvrir pour ajouter un projet.

## Reste à faire

- Renseigner `IDENTITY.linkedin` (le bouton ne s'affiche pas tant qu'il est vide)
- Déposer `cv-djimouna-badji.pdf` à la racine de `htdocs`
- Créer `og-image.png` (1200 × 630) à la racine, pour l'aperçu des liens partagés
- Ajouter les `repoUrl` des projets dont le code est public
- Relire les descriptions de projets et les reformuler avec tes mots

## Sécurité — avant de publier

1. `php/db.php` contient les identifiants MySQL en dur. Ajoute-le au
   `.gitignore` et versionne un `db.example.php` sans les valeurs.
2. `php/db.php` envoie `Access-Control-Allow-Origin: *` et les endpoints
   `create.php`, `update.php` et `delete.php` n'exigent aucune authentification.
   La page `/demo` ne fait que de la lecture : retire ces trois fichiers du
   serveur, ou protège l'écriture par un jeton.
