import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  logged : boolean = false

  constructor() { }

  login(email: string, password: string){
    if(email=="admin@gmail.com" && password=="Admin"){
      alert("Login successful")
      this.logged=true
    }
    else{
      this.logged=false
    }
    return this.logged
  }
}
