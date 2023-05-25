import { ChangeDetectionStrategy, OnDestroy, SkipSelf, Component, Input, Output, ViewChild, ViewChildren, QueryList, DoCheck, AfterViewInit } from '@angular/core';
import { OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';
import { AppConfig } from '../AppConfig/appconfig.interface';
import { APP_CONFIG } from '../AppConfig/appconfig.service';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Observable, Subscription, Subject, catchError, of, map } from 'rxjs';


@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss',],
  // changeDetection : ChangeDetectionStrategy.OnPush
})
export class RoomsComponent implements OnInit ,DoCheck, AfterViewInit{

  hotelName = "Hilton Hotel";

  numberOfRooms = 10;

  hideRooms = true

  rooms : Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms : 5,
  };

  @ViewChild(HeaderComponent, {static:true}) headerComponent!: HeaderComponent

  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>

  roomList: RoomList[] = []

  stream = new Observable(observer =>
    {
      observer.next("user1");
      observer.next("user2");
      observer.next("user3");
      observer.complete()
      observer.error("err")
    })

  title = "Room List"

  toggle(){
    this.hideRooms = !this.hideRooms
    this.title = "Rooms List"
    localStorage.setItem("name", "Hilton Hotel");
  }

  selectedRoom!: RoomList

  selectRoom(room: RoomList){
    console.log(room)
    this.selectedRoom=room
  }

  addRoom(){
    const room: RoomList = {
      // roomNumber: "4",
      roomType: "Deluxe Room",
      amenities: "Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen",
      price: 500,
      photos:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixl",
      checkInTime: new Date('11-Nov-2021'),
      checkOutTime: new Date('12-Nov-2021'),
      rating: 4.5,
    };
    this.roomService.addroom(room).subscribe(data =>
      this.roomList=data)
  }

  editroom(){
    const room: RoomList = {
      roomNumber: "3",
      roomType: "Deluxe Room",
      amenities: "Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen",
      price: 500,
      photos:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixl",
      checkInTime: new Date('11-Nov-2021'),
      checkOutTime: new Date('12-Nov-2021'),
      rating: 4.5,
    };

    this.roomService.editroom(room).subscribe(data =>
      this.roomList=data)

  }

  deleteroom(){
    this.roomService.deleteroom('3').subscribe(data=>
      this.roomList=data)
  }

  constructor(@SkipSelf() private roomService : RoomsService){

  }


  totalBytes=0


  error$ = new Subject<string>

  subscription !: Subscription

  getError$ = this.error$.asObservable

  room$ = this.roomService.getrooms$.pipe(
    catchError((err) => {
      console.log(err)
      this.error$.next(err.message)
      return of([])
    })
  )

  roomCount$ = this.roomService.getrooms$.pipe(
    map((rooms) => rooms.length)
  )



  ngOnInit(): void {

    this.subscription = this.roomService.getrooms$.subscribe(rooms => {
      this.roomList=rooms
    })
    console.log(this.roomService.getrooms())
    this.stream.subscribe({
      next: data => console.log(data),
      complete: () => console.log("complete"),
      error : (err) => console.log(err)

    })
    this.roomService.getPhotos().subscribe(event =>{
      console.log(event)
      switch(event.type){
        case HttpEventType.Sent:
          {
            console.log("Request has been made");
            break;
          }
        case HttpEventType.ResponseHeader:
          {
            console.log("Request success");
            break;
          }
        case HttpEventType.DownloadProgress:
          {
            this.totalBytes+=event.loaded;
            break;
          }
        case HttpEventType.Response:
          {
            console.log(event.body);
            break;
          }
      }
    })
  }

  ngDoCheck(): void {
      console.log("on changes is called")
  }

  ngAfterViewInit(): void {
      console.log(this.headerComponent)
      this.headerComponent.title="Rooms View"
      this.headerChildrenComponent.last.title = "Last Title"
  }

  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe()
    }
  }

}
