import { Images } from 'src/app/models/images.models';
import { ModalComponent } from '../modal/modal.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, input, OnInit } from '@angular/core';
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
        IonItem, 
        ModalController} from "@ionic/angular/standalone";
import { ViewService } from 'src/app/services/viewService.service';

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

  modalCtrl = inject(ModalController);
  viewService = inject(ViewService);

  openModal = input<string>();
  titleContent = input<string>();
  contentList = input<string[]>();
  subTitleContent = input<string>();
  imageList = input.required<Images[]>();

  changeHeaderButton(){
    this.viewService.headerButton.update((value) => !value)
  }

  ionViewWillEnter(){
    this.modalCtrl.dismiss().then( () => console.log('chau'))
  }

}
