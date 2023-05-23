import { Component, ViewChild, ViewContainerRef, OnInit, AfterViewInit, ElementRef, Optional } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { LoggerService } from './logger.service';

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

  ngOnInit(): void {
    this.name.nativeElement.innerText="Hilton Hotel"
    this.loggerService?.Log('AppComponent.ngOnInit()')
  }

  constructor(@Optional() private loggerService : LoggerService){}

  ngAfterViewInit(): void {
    // const componentRef = this.vcr.createComponent(RoomsComponent)
    // componentRef.instance.numberOfRooms=100

  }


}
