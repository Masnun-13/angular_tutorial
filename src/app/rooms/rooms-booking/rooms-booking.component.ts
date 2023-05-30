import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'hinv-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.scss']
})
export class RoomsBookingComponent implements OnInit{
  id: string = ''

  id$ = this.router.paramMap.pipe(map((params) => params.get('roomid')))

  constructor(private router: ActivatedRoute){

  }

  ngOnInit(): void {
    // this.router.params.subscribe((params) => { console.log(params); this.id=params['roomid']; })
    console.log("sans undertale  ", this.id$)

  }

}
