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

/** Reponse de php/dashboard/stats.php */
export interface DemoStats {
  totalProjets: number;
  projetsByStatus: { statut: string; count: number }[];
  affectationsList: { nom: string; prenom: string; nomp: string; role: string }[];
  totalBudget: number;
  totalAgents: number;
  totalTypes: number;
  totalAffectations: number;
}
