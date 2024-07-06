import { Images } from 'src/app/models/images.models';
import { Component, input, OnInit } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { 
        IonCardTitle, 
        IonButton, 
        IonButtons, 
        IonModal, 
        IonInput, 
        IonHeader, 
        IonToolbar, 
        IonContent, 
        IonTitle, 
        IonItem } from "@ionic/angular/standalone";

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

  openModal = input<string>();
  titleContent = input<string>();
  contentList = input<string[]>();
  subTitleContent = input<string>();
  imageList = input.required<Images[]>();

  constructor() { }

  ngOnInit() {}

}
