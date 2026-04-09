import { Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { authGuard } from './core/auth/auth-guard';
import { noAuthGuard } from './core/auth/no-auth-guard';

export const routes: Routes = [

  // LOGIN
  {
    path: 'authentication',
    children: [
      {
        path: 'login',
        canActivate: [noAuthGuard],
        component: Login
      }
    ]
  },

  // DASHBOARD (rota principal protegida)
  {
    path: '',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/dashboard/dashboard')
        .then(m => m.Dashboard),
  },

  // REDIRECT (qualquer coisa inválida)
  {
    path: '**',
    redirectTo: ''
  }

];