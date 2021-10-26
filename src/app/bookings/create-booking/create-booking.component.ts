import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Place } from 'src/app/places/place';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {

  @Input() selectedPlace: Place;
  constructor(private modelCtrl: ModalController) { }

  ngOnInit() {}

  onCancel(){
    this.modelCtrl.dismiss(null,'cancel');
  }

  onBookPlace(){
    this.modelCtrl.dismiss({message : ' He really book the place'},'confirm');
  }

}
