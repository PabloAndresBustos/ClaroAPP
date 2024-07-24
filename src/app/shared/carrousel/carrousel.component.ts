import { Images } from 'src/app/models/images.models';
import { ModalComponent } from '../modal/modal.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA, input, OnInit } from '@angular/core';
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
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
export class CarrouselComponent{

  openModal = input<string>();
  titleContent = input<string>();
  contentList = input<string[]>();
  subTitleContent = input<string>();
  imageList = input.required<Images[]>();

}
