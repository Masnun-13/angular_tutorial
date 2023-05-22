import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  hotelName = "Hilton Hotel";

  numberOfRooms = 10;

  hideRooms = false

  toggle(){
    this.hideRooms = !this.hideRooms
  }

  constructor(){

  }

  ngOnInit(): void {

  }

}
