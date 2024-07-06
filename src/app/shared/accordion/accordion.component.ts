import { RouterLink } from '@angular/router';
import { ModalComponent } from '../modal/modal.component';
import { Accordion } from 'src/app/models/accordion.models';
import { Component, input, OnInit, ViewChild } from '@angular/core';
import { 
        IonContent, 
        IonCardTitle, 
        IonButton, 
        IonCardSubtitle, 
        IonAccordionGroup, 
        IonAccordion, 
        IonLabel, 
        IonItem, 
        IonModal, 
        IonTitle, 
        IonToolbar, 
        IonFooter, 
        IonIcon } from '@ionic/angular/standalone';




@Component({
  selector: 'app-accordion',
  standalone: true,
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  imports: [IonIcon, IonFooter, IonToolbar, IonTitle, 
            IonItem, 
            IonLabel, 
            IonAccordion,
            IonAccordionGroup, 
            IonCardSubtitle, 
            IonButton, 
            IonCardTitle, 
            IonContent,
            IonModal,
            ModalComponent,
            RouterLink
            ]
})
export class AccordionComponent  implements OnInit {

  
  @ViewChild(IonModal) modal!:IonModal;

  link = input<string>();
  color = input<string>();
  router = input<string>();
  subtitle = input<string>();
  buttonText = input<string>();
  isModal = input<boolean>(false);
  title = input.required<string>();
  titleColor = input<string>('primary');
  accordionContentList = input<Accordion[]>([]);
  
  
  
  cancel(){
    this.modal.dismiss();
  }

  constructor() { }

  ngOnInit() {}

}
