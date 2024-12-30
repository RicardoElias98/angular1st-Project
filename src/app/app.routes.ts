import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'leadersboard',
        loadComponent: () => import('./pages/leadersboard/leadersboard.component').then(m => m.LeadersboardComponent)
    }
];
