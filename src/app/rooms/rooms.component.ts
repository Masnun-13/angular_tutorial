import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  hotelName = "Hilton Hotel";

  numberOfRooms = 10;

  hideRooms = false

  rooms : Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms : 5,
  };

  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: "Deluxe Room",
      amenities: "Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen",
      price: 500,
      photos:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixl",
      checkInTime: new Date('11-Nov-2021'),
      checkOutTime: new Date('12-Nov-2021'),
      rating: 4.5,
    },
    {
      roomNumber: 2,
      roomType: "Deluxe Room",
      amenities: "Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen",
      price: 1000,
      photos:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixl",
      checkInTime: new Date('11-Nov-2021'),
      checkOutTime: new Date('12-Nov-2021'),
      rating: 3.45654,
    },
    {
      roomNumber: 3,
      roomType: "Private Suite",
      amenities: "Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen",
      price: 15000,
      photos:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixl",
      checkInTime: new Date('11-Nov-2021'),
      checkOutTime: new Date('12-Nov-2021'),
      rating: 2.6,
    }
  ]

  toggle(){
    this.hideRooms = !this.hideRooms
  }

  constructor(){

  }

  ngOnInit(): void {

  }

}
