import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = () => {

  const router = inject(Router);
  const token = localStorage.getItem('token');

  // Se estiver logado, permite acesso
  if (token) {
    return true;
  }

  // Se não estiver logado, redireciona
  return router.createUrlTree(['/authentication/login']);
};