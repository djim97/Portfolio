import { Project, SkillGroup } from './models';

/**
 * Point d'edition unique du portfolio.
 * Pour mettre le site a jour, il suffit de modifier ce fichier et de rebuilder.
 */

export const IDENTITY = {
  name: 'Djimouna Bacary BADJI',
  role: 'Élève ingénieur en informatique',
  eyebrow: 'Ingénierie logicielle / dakar',
  tagline:
    "1ᵉʳᵉ année du cycle ingénieur à l'ISI. Je construis des applications web Angular, " +
    'des applications métier Java, C, C++ et des infrastructures réseau. En recherche ' +
    "d'alternance à Dakar.",
  location: 'Dakar, Sénégal',
  school: "Institut Supérieur d'Informatique (ISI), Dakar",
  program: "Diplôme d'Ingénieur en Techniques Informatiques — DITI 3",
  email: 'dbadjidk@groupeisi.com',
  github: 'https://github.com/djim97',
  linkedin: 'www.linkedin.com/in/djimouna',         
  cvUrl: '/cv-djimouna-badji.pdf',
  avatar: 'photo.jpg',
};

export const ABOUT: string[] = [
  "Je suis en première année du cycle ingénieur en techniques informatiques à l'ISI, " +
    'une formation centrée sur le génie logiciel, les systèmes d’information, l’administration, ' +
    'réseaux, systèmes et bases de données.',
  "Concrètement, je passe l'essentiel de mon temps sur du développement web avec Angular " +
    'et sur des applications métier en Java, C, C++. Je travaille aussi régulièrement sur ' +
    'l’infrastructure : réseaux Cisco, serveurs Linux et Windows, conteneurs et chaînes ' +
    'de déploiement automatisées.',
  'Je cherche une alternance à Dakar où je peux contribuer à un produit réel et ' +
    'apprendre au contact d’une équipe.',
];

export const SKILLS: SkillGroup[] = [
  { label: 'Web',            items: ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS'] },
  { label: 'Applications',   items: ['Java', 'JavaFX', 'Hibernate / JPA', 'C', 'C++'] },
  { label: 'Données',        items: ['PostgreSQL', 'MySQL', 'Oracle', 'SQL'] },
  { label: 'Infrastructure', items: ['Docker', 'GitHub Actions', 'Linux Server', 'Windows Server'] },
  { label: 'Réseaux',        items: ['CCNA 1', 'VLAN', 'OSPF', 'HSRP', 'EtherChannel'] },
  { label: 'Outils',         items: ['Git', 'GitHub', 'Figma', 'VS Code', 'IntelliJ IDEA'] },
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
    repoUrl: 'https://github.com/djim97/Agregateur_GP.git',
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
    repoUrl: 'https://gitlab.com/djim97/microgest.git',
    featured: true,
  },
  {
    slug: 'gestion-projets',
    name: 'Gestion de Projets',
    status: 'démo en ligne',
    summary:
      'Application de gestion de projets et d’affectations : quatre entités, API REST en PHP avec ' +
      'requêtes préparées, tableau de bord statistique. Le front est intégré à ce portfolio.',
    stack: ['Angular', 'PHP', 'MySQL', 'REST'],
    liveUrl: '/demo',
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
    repoUrl: 'https://github.com/djim97/html5up-forty.git',
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
