import { RouterLink } from '@angular/router';
import { Pages } from 'src/app/models/pages.models';
import { ViewService } from 'src/app/services/viewService.service';
import { Component, inject, input, OnInit, ViewChild } from '@angular/core';
import { 
         IonModal, 
         IonContent, 
         IonButton, 
         IonToolbar,
         IonFooter, 
         IonIcon, 
         IonList, 
         IonLabel, 
         IonItem, 
         IonListHeader, 
         IonCardSubtitle, 
         IonCardTitle, 
         IonCardHeader, 
         IonCard, 
         IonTabButton, 
         IonSegment, 
         IonSegmentButton, 
         IonRouterOutlet 
        } from "@ionic/angular/standalone";


@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  imports: [IonRouterOutlet, IonTabButton, 
    IonCard, 
    IonCardHeader, 
    IonCardTitle, 
    IonCardSubtitle, 
    IonListHeader, 
    IonItem, 
    IonLabel, 
    IonList, 
    IonIcon, 
    IonFooter,
    IonToolbar, 
    IonButton,
    IonModal,
    IonContent,
    IonSegment,
    IonSegmentButton,
    RouterLink
  ]
})
export class ModalComponent  implements OnInit {

  viewService = inject(ViewService);

  @ViewChild(IonModal) modal!:IonModal;

  whithList = input.required<boolean>();
  modalTrigger = input<string>()
  titleContent = input<string>();
  subTitleContent = input<string>();
  contentList = input<string[]>();
  icon = input<boolean>(true);


  
  cancel(){
    this.modal.dismiss();
  }

  changeTitle(title:string){
    this.viewService.subPage.set(title);
  }

  pages:Pages[] = [
    {title: 'Móviles', url: 'moviles', icon: ''},
    {title: 'Hogar', url: 'hogar', icon: ''},
    {title: 'Débito Automático', url: 'debito', icon: ''}
  ]

  constructor() { }

  ngOnInit() {

  }

}
