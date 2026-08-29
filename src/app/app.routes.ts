import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Djimouna Bacary Badji — Élève Ingénieur en informatique, Dakar',
    loadComponent: () => import('./pages/home/home').then(m => m.Home),
  },
  {
    path: 'projets',
    title: 'Projets — Djimouna Bacary Badji',
    loadComponent: () => import('./pages/projects/projects').then(m => m.Projects),
  },
  { path: '**', redirectTo: '' },
];
