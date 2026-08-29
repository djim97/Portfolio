import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Djimouna Bacary Badji — Élève ingénieur en informatique, Dakar',
    loadComponent: () => import('./pages/home/home').then(m => m.Home),
  },
  {
    path: 'projets',
    title: 'Projets — Djimouna Bacary Badji',
    loadComponent: () => import('./pages/projects/projects').then(m => m.Projects),
  },
  {
    path: 'demo',
    title: 'Démo — Gestion de Projets',
    loadComponent: () => import('./pages/demo/demo').then(m => m.Demo),
  },
  { path: '**', redirectTo: '' },
];
