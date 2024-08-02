import { Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule} from '@angular/forms';
import { Pages } from 'src/app/models/pages.models';
import { ViewService } from 'src/app/services/viewService.service';
import { 
        Component, 
        inject, 
        input,
        OnDestroy,
        OnInit,
        ViewChild } from '@angular/core';
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
         IonRouterOutlet, 
         IonTitle, 
         IonInput, 
         IonHeader, 
         IonText} from "@ionic/angular/standalone";


@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  imports: [IonText, 
            IonHeader, 
            IonInput, 
            IonTitle, 
            IonRouterOutlet, 
            IonTabButton, 
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
            RouterLink,
            ReactiveFormsModule
            ]
})


export class ModalComponent{

  @ViewChild(IonModal) modal!:IonModal;

  router = inject(Router);
  viewService = inject(ViewService);
  //modalCtrl = inject(ModalController);
      
  icon = input<boolean>(true);
  modalTrigger = input<string>();
  titleContent = input<string>();
  contentList = input<string[]>();
  subTitleContent = input<string>();
  moreInfo = input.required<boolean>();
  whithList = input.required<boolean>();
  selectClass = input.required<boolean>();

  cancel(){
    this.modal.dismiss();
    this.viewService.headerButton.update((value) => !value);
  }
  
  changeTitle(title:string){
    this.viewService.subPage.set(title);
  }

  colorApps(){
    return this.viewService.isDarkSelected();
  }

  pages:Pages[] = [
    {title: 'Móviles', url: 'moviles', icon: ''},
    {title: 'Hogar', url: 'hogar', icon: ''},
    {title: 'Débito Automático', url: 'debito', icon: ''}
  ]

  buttons:Pages[] = [
    {title: 'Mi Claro', url: '/mi-claro', icon: '/assets/logos/miclaro-logo.svg'},
    {title: 'Claro Música', url: '/claro-musica', icon: '/assets/logos/claromusica-logo.svg'},
    {title: 'Claro Video', url: '/claro-video', icon: '/assets/logos/clarovideo-logo.svg'},
    {title: 'Claro Pay', url: '/claro-pay', icon: '/assets/logos/claro-pay.png'},
    {title: 'Tienda Claro', url: '/claro-tienda', icon: '/assets/logos/tienda-claro.png'}
  ]

}
