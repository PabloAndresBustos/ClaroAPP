import { Component, inject, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { IonModal, IonHeader, IonContent, IonButton, IonToolbar, IonButtons, IonTitle, IonFooter, IonIcon, IonList, IonLabel, IonItem, IonListHeader, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonTabButton, IonTabBar, IonTabs, IonSegment, IonSegmentButton, IonRouterOutlet } from "@ionic/angular/standalone";
import { Pages } from 'src/app/models/pages.models';
import { ViewService } from 'src/app/services/viewService.service';

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
    IonButtons, 
    IonToolbar, 
    IonButton, 
    IonHeader, 
    IonModal, 
    IonTitle, 
    IonContent,
    IonSegment,
    IonSegmentButton,
    RouterLink
  ]
})
export class ModalComponent  implements OnInit {

  viewService = inject(ViewService);

  @ViewChild(IonModal) modal!:IonModal;

  @Input() whithList!:boolean;
  @Input() modalTrigger?:string;
  @Input() titleContent?:string;
  @Input() subTitleContent?:string;
  @Input() contentList?:string[];

  
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
