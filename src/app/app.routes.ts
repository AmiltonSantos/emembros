import { Routes } from '@angular/router';
import { Login } from './auth/login/login';

export const routes: Routes = [

  {
    path: 'authentication',
    children: [
      {
        path: 'login',
        component: Login
      }
    ]
  },

  {
    path: '',
    redirectTo: 'authentication/login',
    pathMatch: 'full'
  }

];