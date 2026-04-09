import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const noAuthGuard: CanActivateFn = () => {

  const router = inject(Router);
  const token = localStorage.getItem('token');

  // Se já estiver logado, não deixa acessar login
  if (token) {
    return router.createUrlTree(['/']);
  }

  // Se não estiver logado, pode acessar
  return true;
};