import { Images } from 'src/app/models/images.models';
import { Component, CUSTOM_ELEMENTS_SCHEMA, input, OnInit, signal, viewChild } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
//import { Swiper, SwiperOptions } from 'swiper/types';
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
import { SwiperContainer } from 'swiper/element';

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
export class CarrouselComponent  implements OnInit {

  //swiper = signal<SwiperContainer | null>(null);
  //swiperElementContainer = viewChild<SwiperContainer>('swpier')

  openModal = input<string>();
  titleContent = input<string>();
  contentList = input<string[]>();
  subTitleContent = input<string>();
  imageList = input.required<Images[]>();

  constructor() { }

  ngOnInit() {
 /*    const swiperElementContainer = document.querySelector('swiper-container');
    const swiperOptions:SwiperOptions = {
      loop: true,
      fadeEffect: {
        crossFade: true,
      },
      navigation: {
        enabled: true,
      },
      autoplay: {
        delay: 2000
      }
    }
    Object.assign(swiperElementContainer!, swiperOptions)
    this.swiper.set(swiperElementContainer); */
  }

}
