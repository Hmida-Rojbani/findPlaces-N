import { Injectable } from '@angular/core';
import { Place } from '../places/place';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private places: Place[] = [
    new Place(
      'p1',
      'Dar el Janna',
      'Maison du paradis, Bizert',
      'https://1001tunisie.com/wp-content/uploads/2020/09/Maison-Hotes-Dar-El-Jenna-Bizerte-Tunisie.jpg',
      65.5
    ),
    new Place(
      'p2',
      'Dar salma',
      'Nabeul',
      'https://tunisie.co/uploads/images/content/dar-selma-031019-01.jpg',
      55
    ),
    new Place(
      'p3',
      'Dar el bhar',
      'Hammamet',
      'https://www.voyage-tunisie.info/wp-content/uploads/2018/03/hammamet.jpg',
      80
    )
  ];
  constructor() { }

  getPlaces(){
    return [...this.places];
  }
}
