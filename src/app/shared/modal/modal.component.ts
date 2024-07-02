import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonModal, IonHeader, IonContent, IonButton, IonToolbar, IonButtons, IonTitle, IonFooter, IonIcon } from "@ionic/angular/standalone";

@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  imports: [IonIcon, IonFooter, IonButtons, IonToolbar, IonButton, IonHeader, IonModal, IonTitle, IonContent]
})
export class ModalComponent  implements OnInit {

  @ViewChild(IonModal) modal!:IonModal;

  @Input() modalTrigger?:string;
  @Input() title!:string;
  @Input() titleContent!:string;
  @Input() content!: string;

  cancel(){
    this.modal.dismiss();
  }

  constructor() { }

  ngOnInit() {}

}
