export interface Project {
  slug: string;
  name: string;
  status: string;          // affiche en vert lagune sur la carte
  summary: string;
  stack: string[];
  repoUrl?: string;
  liveUrl?: string;
  featured: boolean;       // remonte sur la page d'accueil
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface TimelineEntry {
  period?: string;         // 'oct. 2025 – oct. 2028'; masque si absent
  title: string;           // diplome, poste ou certification
  org?: string;            // ecole, entreprise ou organisme
  kind: 'formation' | 'expérience' | 'certification';
  details?: string;
  current?: boolean;       // pastille qui pulse sur l'etape en cours
}
