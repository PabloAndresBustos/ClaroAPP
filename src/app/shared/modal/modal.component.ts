import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonModal, IonHeader, IonContent, IonButton, IonToolbar, IonButtons, IonTitle, IonFooter, IonIcon, IonList, IonLabel, IonItem, IonListHeader, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard } from "@ionic/angular/standalone";

@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  imports: [IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonListHeader, IonItem, IonLabel, IonList, IonIcon, IonFooter, IonButtons, IonToolbar, IonButton, IonHeader, IonModal, IonTitle, IonContent]
})
export class ModalComponent  implements OnInit {

  @ViewChild(IonModal) modal!:IonModal;

  @Input() whithList!:boolean;
  @Input() modalTrigger?:string;
  @Input() titleContent?:string;
  @Input() subTitleContent?:string;
  @Input() contentList?:string[];

  

  cancel(){
    this.modal.dismiss();
  }

  constructor() { }

  ngOnInit() {
    
  }

}
