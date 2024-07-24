import { Component, Input, OnInit, inject, input, signal} from '@angular/core';
import { 
        IonButton, 
        IonFooter, 
        IonIcon, 
        IonTitle, 
        IonToolbar, 
        IonLabel, 
        IonItem, 
        IonContent, 
        IonFabButton,
        IonFab,
        IonFabList, 
        IonButtons, 
        IonMenuButton
      } from '@ionic/angular/standalone';
import { ViewService } from 'src/app/services/viewService.service';
import { ModalComponent } from '../modal/modal.component';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [IonButtons, 
            IonContent,
            IonItem, 
            IonLabel, 
            IonFooter, 
            IonTitle, 
            IonToolbar, 
            IonButton, 
            IonIcon,
            IonFab,
            IonFabList,
            IonFabButton,
            IonMenuButton,
            ModalComponent,
            RouterLink
          ]
})
export class FooterComponent{

  viewService = inject(ViewService);
  router = inject(Router);
  openModal = input<string>();
  
  loginRecovery(){
    return this.viewService.loginRecovery();
  }

  ChangeAppButton(){
    this.router.navigateByUrl('/');
    return this.viewService.ChangeAppButton();
  }

}
