import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  logged : boolean = false
  isAdmin : boolean = false

  constructor() { }

  login(email: string, password: string){
    if(email=="admin@gmail.com" && password=="Admin"){
      this.logged=true
      this.isAdmin=true
    }
    else{
      this.isAdmin=false
      this.logged=true
    }
    return this.logged
  }
}
