import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../guards/login.service';

@Component({
  selector: 'hinv-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private route: Router, private loginservice: LoginService){}

  email: string = ""
  password : string = ""

  login(){
    if(this.loginservice.login(this.email, this.password)){
      alert("Login successful")
      this.route.navigateByUrl("/employee")
    }
    else{
      alert("Login failed")
    }
  }

}
