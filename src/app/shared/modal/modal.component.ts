import { RouterLink } from '@angular/router';
import { Pages } from 'src/app/models/pages.models';
import { ViewService } from 'src/app/services/viewService.service';
import { Component, inject, input, OnInit, signal, viewChild, ViewChild } from '@angular/core';
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
         IonRouterOutlet, IonTitle, IonInput, IonHeader } from "@ionic/angular/standalone";


@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  imports: [IonHeader, IonInput, IonTitle, IonRouterOutlet, IonTabButton, 
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

  @ViewChild(IonModal) modal!:IonModal;

  viewService = inject(ViewService);
  textButton = signal<string>('Iniciar sesión')
  
  icon = input<boolean>(true);
  modalTrigger = input<string>();
  titleContent = input<string>();
  contentList = input<string[]>();
  apps = input.required<boolean>();
  subTitleContent = input<string>();
  moreInfo = input.required<boolean>();
  whithList = input.required<boolean>();
  selectClass = input.required<boolean>();
  
  login(){
    return this.viewService.login();
  }

  cancel(){
    this.modal.dismiss();
  }

/*   buttonText(){
    if(this.viewService.login()){
      this.textButton.set('Cerrar sesión');
    }else{
      this.textButton.set('Iniciar sesión');
    }
  } */

  loginLogOut(){
    this.viewService.login.update(value => value = !value);
  }
  
  changeTitle(title:string){
    this.viewService.subPage.set(title);
  }

  pages:Pages[] = [
    {title: 'Móviles', url: 'moviles', icon: ''},
    {title: 'Hogar', url: 'hogar', icon: ''},
    {title: 'Débito Automático', url: 'debito', icon: ''}
  ]

  buttons:Pages[] = [
    {title: 'Claro Música', url: 'claro-musica', icon: ''},
    {title: 'Claro Video', url: 'claro-video', icon: ''},
    {title: 'Tienda Claro', url: 'tienda-claro', icon: ''},
    {title: 'Mi Claro', url: 'mi-claro', icon: ''}
  ]

  constructor() { }

  ngOnInit() {

  }

}
