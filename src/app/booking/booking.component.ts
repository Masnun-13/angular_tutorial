import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'hinv-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit{

  bookingForm !: FormGroup

  constructor(private cfg: ConfigService,
    private fb : FormBuilder){

  }
  ngOnInit(): void {
    this.bookingForm=this.fb.group({
        bookingId: new FormControl(''),
        roomId: [''],
        guestEmail: [''],
        checkinDate: [''],
        checkoutDate: [''],
        bookingStatus: [''],
        bookingAmount: [''],
        bookingDate: [''],
        mobileNumber: [''],
        guestName: [''],
        guestAddress: [''],
        guestCity: [''],
        guestState: [''],
        guestCountry: [''],
        guestZipCode: [''],
        guestCount: [''],
      })
  }

}

// export class BookingDTO {
//   bookingId: string;
//   roomId: string;
//   guestEmail: string;
//   checkinDate: Date;
//   checkoutDate: Date;
//   bookingStatus: string;
//   bookingAmount: number;
//   bookingDate: Date;
//   mobileNumber: string;
//   guestName: string;
//   guestAddress: string;
//   guestCity: string;
//   guestState: string;
//   guestCountry: string;
//   guestZipCode: string;
//   guestCount: number;
//   guestList: []
// }
