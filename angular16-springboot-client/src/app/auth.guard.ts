import { CanActivateFn } from '@angular/router';
import { LoginService } from './login/login.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService);
  let flag = loginService.isLoggedIn()
  alert(flag);
   return flag
};
