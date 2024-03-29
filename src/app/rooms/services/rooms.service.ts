import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import { environment } from 'src/environments/environment';
import { APP_CONFIG_SERVICE } from 'src/app/AppConfig/appconfig.service';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  roomList: RoomList[] = [
    // {
    //   roomNumber: "1",
    //   roomType: 'Deluxe Room',
    //   amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
    //   price: 500,
    //   photos:
    //     'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixl',
    //   checkInTime: new Date('11-Nov-2021'),
    //   checkOutTime: new Date('12-Nov-2021'),
    //   rating: 4.5,
    // },
    // {
    //   roomNumber: "2",
    //   roomType: 'Deluxe Room',
    //   amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
    //   price: 1000,
    //   photos:
    //     'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixl',
    //   checkInTime: new Date('11-Nov-2021'),
    //   checkOutTime: new Date('12-Nov-2021'),
    //   rating: 3.45654,
    // },
    // {
    //   roomNumber: "3",
    //   roomType: 'Private Suite',
    //   amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
    //   price: 15000,
    //   photos:
    //     'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixl',
    //   checkInTime: new Date('11-Nov-2021'),
    //   checkOutTime: new Date('12-Nov-2021'),
    //   rating: 2.6,
    // },
  ];

  getrooms(){
    return this.http.get<RoomList[]>('/api/rooms')
  }

  constructor(@Inject(APP_CONFIG_SERVICE) private config : AppConfig,
  private http : HttpClient) {
    console.log("Rooms service initialized...");
    console.log(config.apiEndPoint)
  }

  addroom(room: RoomList){
    return this.http.post<RoomList[]>('/api/rooms', room)

  }

  editroom(room: RoomList){
    return this.http.put<RoomList[]>(`/api/rooms/${room.roomNumber}`, room)

  }
}
