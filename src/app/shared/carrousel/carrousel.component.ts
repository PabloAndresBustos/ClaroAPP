import { Component, Input, OnInit } from '@angular/core';
import { IonCardTitle, IonButton, IonButtons } from "@ionic/angular/standalone";
import { Images } from 'src/app/models/images.models';

@Component({
  selector: 'app-carrousel',
  standalone: true,
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss'],
  imports: [IonButtons, IonCardTitle, IonButton]
})
export class CarrouselComponent  implements OnInit {

  @Input() imageList!:Images[];

  constructor() { }

  ngOnInit() {}

}
