import { Component, OnInit, DoCheck } from '@angular/core';
import { RoomList } from '../rooms';
import { RoomsService } from '../services/rooms.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'hinv-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.scss']
})
export class RoomsAddComponent implements OnInit{

  room : RoomList = {
    roomType: "",
    roomNumber: "",
    amenities: "",
    price: 0,
    photos : '',
    checkInTime: new Date(),
    checkOutTime : new Date(),
    rating : 0
  }
  successmessage: string = ""

  addRoom(roomsform : NgForm){
    this.roomservice.addroom(this.room).subscribe((data)=>this.successmessage="Room added successfully")
    roomsform.reset()
  }

  constructor(private roomservice: RoomsService){
  }

  ngOnInit(): void {

  }

}
