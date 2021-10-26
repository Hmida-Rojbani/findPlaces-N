import { Injectable } from '@angular/core';
import { Booking } from '../bookings/booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private _bookings: Booking[] = [
    {
      id: 'xyz',
      placeId: 'p1',
      placeTitle: 'Dar el Janna',
      guestNumber: 2,
      userId: 'abc'
    }
  ]

  constructor() { }

  get bookings(){
    return [...this._bookings];
  }
}
