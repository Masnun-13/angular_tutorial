import { CanActivateFn } from '@angular/router';
import { LoginService } from './login.service';
import { LoginComponent } from '../login/login.component';
import { inject } from '@angular/core';

export const loginGuard: CanActivateFn = (route, state) => {

  alert('guarded by LoginGuard')
  return inject(LoginService).logged
};
