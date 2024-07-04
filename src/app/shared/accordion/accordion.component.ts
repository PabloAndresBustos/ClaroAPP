import { Component, inject, Input, OnInit, ViewChild } from '@angular/core';
import { IonContent, IonCardTitle, IonButton, IonCardSubtitle, IonAccordionGroup, IonAccordion, IonLabel, IonItem, IonModal, IonTitle, IonToolbar, IonFooter, IonIcon } from '@ionic/angular/standalone';
import { Accordion } from 'src/app/models/accordion.models';
import { ModalComponent } from '../modal/modal.component';

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
            ModalComponent
            ]
})
export class AccordionComponent  implements OnInit {

  
  @ViewChild(IonModal) modal!:IonModal;

  @Input() link!:string;
  @Input() title!:string;
  @Input() subtitle!:string;
  @Input() buttonText!:string;
  @Input() color:string = 'ligth';
  @Input() isModal:boolean = false;
  @Input() titleColor:string = 'primary';
  @Input() accordionContentList!:Accordion[];
  


  cancel(){
    this.modal.dismiss();
  }

  constructor() { }

  ngOnInit() {}

}
