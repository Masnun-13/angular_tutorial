import { Component, ViewChild, Inject, ViewContainerRef, OnInit, AfterViewInit, ElementRef, Optional } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { LoggerService } from './logger.service';
import { localStorageToken } from './localstorage.token';
import { InitService } from './init.service';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit{
  title = 'hotelinventoryapp';

  role = "Admin";

  // @ViewChild( 'user', {read : ViewContainerRef} ) vcr!: ViewContainerRef

  @ViewChild( "name", {static : true} ) name!: ElementRef

  constructor(@Optional() private loggerService : LoggerService,
  @Inject(localStorageToken) private localstorage : Storage,
  private initService : InitService)
  {
    console.log(initService.config)
  }



  ngOnInit(): void {
    this.name.nativeElement.innerText="Hilton Hotel"
    this.loggerService?.Log('AppComponent.ngOnInit()')
    this.localstorage.setItem('name', "Hilton Hotel")
    localStorage.setItem("name", "Hilton Hotel");
    let x = this.localstorage.getItem('name')
    console.log(x)
  }



  ngAfterViewInit(): void {
    // const componentRef = this.vcr.createComponent(RoomsComponent)
    // componentRef.instance.numberOfRooms=100

  }


}
