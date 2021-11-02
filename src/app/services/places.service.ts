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
      65.5,
      new Date('2021-06-01'),
      new Date('2022-02-01')
    ),
    new Place(
      'p2',
      'Dar salma',
      'Nabeul',
      'https://tunisie.co/uploads/images/content/dar-selma-031019-01.jpg',
      55,
      new Date('2021-01-01'),
      new Date('2021-12-31')
    ),
    new Place(
      'p3',
      'Dar el bhar',
      'Hammamet',
      'https://www.voyage-tunisie.info/wp-content/uploads/2018/03/hammamet.jpg',
      80,
      new Date('2021-06-01'),
      new Date('2022-12-01')
    )
  ];
  constructor() { }

  getPlaces(){
    return [...this.places];
  }

  getPlace(id: string){
    return {
      ...this.places.find(p => p.id === id)
    };
  }

  addPlace(
    title: string,
    description: string,
    price: number,
    dateFrom: Date,
    dateTo: Date
  ) {
    const newPlace = new Place(
      Math.random().toString(),
      title,
      description,
      'https://lonelyplanetimages.imgix.net/mastheads/GettyImages-538096543_medium.jpg?sharp=10&vib=20&w=1200',
      price,
      dateFrom,
      dateTo,
      //this.authService.userId
    );
  }
}
