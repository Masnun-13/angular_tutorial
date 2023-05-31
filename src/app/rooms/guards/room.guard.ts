import { inject } from '@angular/core';
import { CanActivateChildFn } from '@angular/router';
import { LoginService } from 'src/app/guards/login.service';

export const roomGuard: CanActivateChildFn = (childRoute, state) => {
  let x = inject(LoginService).isAdmin
  if(!x){
    alert('Not logged in as admin, guarded by RoomGuard')
  }
  return x
};
