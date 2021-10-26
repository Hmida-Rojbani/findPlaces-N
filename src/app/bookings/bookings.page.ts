import { Component, OnInit } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';
import { BookingService } from '../services/booking.service';
import { Booking } from './booking';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {
  loadedBookings: Booking[];

  constructor(private bookingService: BookingService) { }

  ngOnInit() {
    this.loadedBookings = this.bookingService.bookings;
  }

  onCancelBooking(offerId: string, slidingBooking: IonItemSliding){
    slidingBooking.close();
    // cancel booking
  }

}
