import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pages } from 'src/app/models/pages.models';
import { ViewService } from 'src/app/services/viewService.service';
import { 
        Component, 
        inject, 
        input, 
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
         IonHeader } from "@ionic/angular/standalone";


@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  imports: [
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
export class ModalComponent  implements OnInit {

  @ViewChild(IonModal) modal!:IonModal;

  viewService = inject(ViewService);
  router = inject(Router);
    
  icon = input<boolean>(true);
  modalTrigger = input<string>();
  titleContent = input<string>();
  contentList = input<string[]>();
  apps = input.required<boolean>();
  subTitleContent = input<string>();
  moreInfo = input.required<boolean>();
  whithList = input.required<boolean>();
  selectClass = input.required<boolean>();

  recoveryForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  })
  
/*   login(){
    return this.viewService.login();
  } */

  cancel(){
    this.modal.dismiss();
  }

/*   loginLogOut(){
    this.viewService.login.update(value => value = !value);
    if(this.viewService.login()){
      this.viewService.userName.set('Test');
    }else{
      this.viewService.userName.set('Ingresar');
    }
    
  } */

/*   changeButton(){
    let textButton = '';
    if(this.login()){
      textButton = 'Cerrar Sesión';
    }else{
      textButton = 'Iniciar Sesión';
    }
    return textButton;
  } */
  
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

  constructor() { }

  ngOnInit() {

  }

}
