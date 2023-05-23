import { Component, OnInit, DoCheck, AfterViewInit } from '@angular/core';
import { RoomsComponent } from '../rooms/rooms.component';

@Component({
  selector: 'hinv-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  title :string = ""

  constructor(){

  }

  ngOnInit(): void {

  }

}
