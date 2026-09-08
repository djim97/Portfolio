import { Project, SkillGroup, TimelineEntry } from './models';

/**
 * Point d'edition unique du portfolio.
 * Pour mettre le site a jour, il suffit de modifier ce fichier et de rebuilder.
 */

export const IDENTITY = {
  name: 'Djimouna Bacary BADJI',
  role: 'Élève ingénieur en informatique',
  eyebrow: 'ingénierie logicielle / dakar',
  tagline:
    "Je conçois des solutions numériques sur mesure pour répondre à des besoins concrets et créer des expériences efficaces et intuitives.",
  /**
   * Une seule mention de disponibilite, declinee selon la place offerte.
   * `short` omet le lieu : la ligne du hero l'affiche juste a cote.
   * `seo` est compacte pour survivre a la troncature de Google, vers
   * 155 caracteres.
   */
  availability: {
    short: 'Disponible pour une alternance',
    full: 'Je suis disponible pour une alternance à Dakar.',
    seo: 'Alternance à Dakar.',
    reply: 'Écrivez-moi, je réponds sous 48 heures.',
  },
  location: 'Dakar, Sénégal',
  school: "Institut Supérieur d'Informatique (ISI), Dakar",
  program: "Diplôme d'Ingénieur en Techniques Informatiques",
  email: 'dbadjidk@groupeisi.com',
  github: 'https://github.com/djim97',
  linkedin: 'https://www.linkedin.com/in/djimouna',         
  cvUrl: '/cv-djimouna-badji.pdf',
  avatar: '/photo.jpg',
};

/** Description des apercus sociaux : Open Graph, LinkedIn, WhatsApp. */
export const SHARE_DESCRIPTION = `${IDENTITY.tagline} ${IDENTITY.availability.full}`;

/** Description des resultats de recherche, raccourcie pour tenir dans l'extrait. */
export const SEARCH_DESCRIPTION = `${IDENTITY.tagline} ${IDENTITY.availability.seo}`;

export const ABOUT: string[] = [
  "Je suis en première année du cycle ingénieur en techniques informatiques à l'ISI, " +
    'une formation centrée sur le génie logiciel, les systèmes d’information, l’administration ' +
    'systèmes, réseaux et bases de données.',
  "Concrètement, je passe l'essentiel de mon temps sur du développement web avec Angular " +
    'et sur des applications métier en Java, C, C++. Je travaille aussi régulièrement sur ' +
    'l’infrastructure : Configuration équipements réseaux Cisco, administration de ' +
    'serveurs Linux, gestion de l\'Active Directory sur Windows server, conteneurs et chaînes ' +
    'de déploiement automatisées.',
  'Je cherche une alternance à Dakar où je peux contribuer à un produit réel et ' +
    'apprendre au contact d’une équipe.',
];

export const SKILLS: SkillGroup[] = [
  { label: 'Web',            items: ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS'] },
  { label: 'Applications',   items: ['Java', 'JavaFX', 'Hibernate / JPA', 'C', 'C++'] },
  { label: 'Données',        items: ['PostgreSQL', 'Oracle'] },
  { label: 'Infrastructure', items: ['Docker', 'GitHub Actions', 'Linux Server', 'Active Directory', 'Equipements Cisco'] },
  { label: 'Outils',         items: ['Git', 'GitHub', 'Figma', 'VS Code', 'IntelliJ IDEA'] },
];

/**
 * Parcours, du plus recent au plus ancien.
 * `period` est optionnel : sans date, la ligne affiche juste le diplome.
 * A completer : les dates de la licence et de la CPGE, et, si tu veux,
 * une entree { kind: 'certification' } pour le CCNA 1.
 */
export const PARCOURS: TimelineEntry[] = [
  {
    period: 'oct. 2025 – oct. 2028',
    title: "Diplôme d'Ingénieur en Techniques Informatiques",
    org: "Institut Supérieur d'Informatique (ISI), Dakar",
    kind: 'formation',
    details:
      "Formation d'ingénieur axée sur le développement logiciel, les réseaux " +
      'informatiques, les bases de données et les systèmes d’information.',
    current: true,
  },
  {
    period: '',
    title: 'Licence en Informatique',
    org: 'Université de Bordeaux',
    kind: 'formation',
    details:
      'Licence générale axée sur les fondamentaux : algorithmique, structures de ' +
      'données arborescentes, langage C et assembleur, architecture des ordinateurs.',
  },
  {
    period: '',
    title: 'CPGE Mathématiques, Physique, Informatique',
    org: "Institut Maristes d'Enseignement Supérieur",
    kind: 'formation',
    details: 'Programme post-bac de deux ans en mathématiques, physique et informatique.',
  },
];

export const PROJECTS: Project[] = [
  {
    slug: 'apprenticampus',
    name: 'ApprentiCampus',
    status: 'en équipe',
    summary:
      "Application web de suivi pédagogique développée à plusieurs. J'interviens sur le " +
      'tableau de bord étudiant : refonte des panneaux d’accueil et gestion de l’état des onglets.',
    stack: ['Angular', 'TypeScript', 'Docker', 'Git'],
    liveUrl: 'https://apprenti-campus.youssouphafaye.sn/auth/login',
    featured: true,
  },
  {
    slug: 'agregateur-gp',
    name: 'Agrégateur GP',
    status: 'en équipe',
    summary:
      "Plateforme d'agrégation d'offres de fret entre particuliers : modèle d'expédition, " +
      'facturation multidevise, suivi de livraison, avis bidirectionnels et gestion des réclamations. ' +
      'Conçue de zéro, des maquettes Figma jusqu’à l’application.',
    stack: ['Angular 20', 'TypeScript', 'Figma'],
    repoUrl: 'https://github.com/djim97/Agregateur_GP',
    featured: true,
  },
  {
    slug: 'microgest',
    name: 'MicroGest',
    status: 'soutenu',
    summary:
      'Application de bureau pour la gestion d’une institution de microfinance : cycle de prêt ' +
      'complet, modèle persisté via Hibernate. Projet de fin de module, livré avec documentation et diagrammes.',
    stack: ['Java', 'JavaFX', 'Hibernate', 'PostgreSQL', 'Maven'],
    repoUrl: 'https://gitlab.com/djim97/microgest',
    featured: true,
  },
  {
    slug: 'gestion-projets',
    name: 'Gestion de Projets',
    status: 'démo en ligne',
    summary:
      'Application de gestion de projets et d’affectations : quatre entités, API REST en PHP avec ' +
      'requêtes préparées, tableau de bord statistique et interface complète de création, ' +
      'modification et suppression.',
    stack: ['Angular', 'PHP', 'MySQL', 'REST'],
    liveUrl: 'https://bacary.gt.tc/html/crud.html',
    featured: true,
  },
  
  {
    slug: 'pipeline-cicd',
    name: 'Chaîne d’intégration continue',
    status: 'DevOps',
    summary:
      'Pipeline de build et de déploiement automatisé : exécution des tests sur un runner ' +
      'auto-hébergé, construction de l’image et publication sur Docker Hub à chaque push.',
    stack: ['GitHub Actions', 'Docker', 'PowerShell'],
    repoUrl: 'https://github.com/djim97/html5up-forty',
    featured: false,
  },
    {
    slug: 'joj-dakar-2026',
    name: 'JOJ Dakar 2026',
    status: 'projet web',
    summary:
      'Site consacré aux Jeux Olympiques de la Jeunesse de Dakar 2026 : présentation ' +
      'des disciplines, des sites de compétition et du programme.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    repoUrl: 'https://github.com/djim97/JOJ-Dakar-2026',
    featured: true,
  },
  {
    slug: 'quincaillerie',
    name: 'Site vitrine de quincaillerie',
    status: 'intégration web',
    summary:
      'Site vitrine pour un commerce de quincaillerie : catalogue de produits, ' +
      'mise en page responsive et pages de contact.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    repoUrl: 'https://github.com/djim97/Quincaillerie-style-website',
    featured: false,
  },
  {
    slug: 'book-management',
    name: 'Gestion de bibliothèque',
    status: 'projet de module',
    summary:
      'Application de bureau pour la gestion d’un fonds de livres : enregistrement des ' +
      'ouvrages, suivi des emprunts et recherche dans le catalogue.',
    stack: ['Java', 'JavaFX', 'Hibernate', 'PostgreSQL', 'scene builder'],
    repoUrl: 'https://github.com/djim97/book_management_JavaFx',
    featured: true,
  },
  {
    slug: 'etat-civil',
    name: 'Gestion d’état civil',
    status: 'projet de module',
    summary:
      'Application de gestion des actes d’état civil : naissances, mariages et décès, ' +
      'avec une hiérarchie de classes et de la surcharge d’opérateurs.',
    stack: ['C++'],
    repoUrl: 'https://github.com/djim97/Gestion_Etat_Civil',
    featured: false,
  },
];