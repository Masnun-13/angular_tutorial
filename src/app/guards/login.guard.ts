import { CanActivateFn } from '@angular/router';
import { LoginService } from './login.service';
import { LoginComponent } from '../login/login.component';
import { inject } from '@angular/core';

export const loginGuard: CanActivateFn = (route, state) => {
  let x = inject(LoginService).logged
  if(!x){
    alert('Not logged in, guarded by LoginGuard')
  }
  return x
};
