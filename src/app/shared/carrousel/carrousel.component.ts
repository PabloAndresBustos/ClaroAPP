import { Component, Input, OnInit } from '@angular/core';
import { IonCardTitle, IonButton, IonButtons, IonModal, IonInput, IonHeader, IonToolbar, IonContent, IonTitle, IonItem } from "@ionic/angular/standalone";
import { Images } from 'src/app/models/images.models';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-carrousel',
  standalone: true,
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss'],
  imports: [
            IonItem, 
            IonTitle, 
            IonContent, 
            IonToolbar, 
            IonHeader, 
            IonInput, 
            IonModal, 
            IonButtons, 
            IonCardTitle, 
            IonButton,
            ModalComponent
          ]
})
export class CarrouselComponent  implements OnInit {

  @Input() imageList!:Images[];
  @Input() openModal!:string;

  constructor() { }

  ngOnInit() {}

}
