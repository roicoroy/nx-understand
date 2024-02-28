import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'details',
    loadComponent: () => import('./details-page/details-page.component').then((m) => m.DetailsPageComponent),
  },
  {
    path: 'lax',
    loadChildren: () => import('./lax/lax.module').then( m => m.LaxPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
