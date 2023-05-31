import { Component, DoCheck, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { LoginService } from '../guards/login.service';

@Component({
  selector: 'hinv-app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.scss']
})
export class AppNavComponent implements OnInit, DoCheck{
  private breakpointObserver = inject(BreakpointObserver);
  admincheck : boolean = false
  user: string = "User"
  logtext: string = "Not logged in"
  logcheck : boolean = false

  constructor(private loginservice: LoginService){

  }

  ngOnInit(): void {
    this.admincheck = this.loginservice.isAdmin
  }


  ngDoCheck(): void {
    this.admincheck=this.loginservice.isAdmin
    this.logcheck=this.loginservice.logged
    if(this.admincheck){
      this.logtext="Logged in as"
      this.user="Admin"
    }
    else if(this.logcheck){
      this.logtext="Logged in as "
      this.user="User"
    }
    else {
      this.logtext="Not logged in"
      this.user=""
    }
  }



  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
}
