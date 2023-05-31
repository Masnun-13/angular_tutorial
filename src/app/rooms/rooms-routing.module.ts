import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsAddComponent } from './rooms-add/rooms-add.component';
import { RoomsBookingComponent } from './rooms-booking/rooms-booking.component';
import { RoomsComponent } from './rooms.component';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { roomGuard } from './guards/room.guard';
import { loginGuard } from '../guards/login.guard';


const routes: Routes = [
  {path: '',
  component: RoomsComponent,
  canActivate: [loginGuard],
  canActivateChild: [roomGuard],
  children: [
    {path: 'add', component: RoomsAddComponent},
    {path: ':roomid', component: RoomsBookingComponent},
  ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
