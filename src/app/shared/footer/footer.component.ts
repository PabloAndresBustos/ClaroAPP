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
        IonMenuButton,
        IonMenu} from '@ionic/angular/standalone';
import { ViewService } from 'src/app/services/viewService.service';
import { ModalComponent } from '../modal/modal.component';
import { ActivatedRoute, RouterLink } from '@angular/router';


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
export class FooterComponent  implements OnInit {

  viewService = inject(ViewService);
  router = inject(ActivatedRoute);
  openModal = input<string>();
  
  loginRecovery(){
    return this.viewService.loginRecovery();
  }

  ChangeAppButton(){
    return this.viewService.ChangeAppButton();
  }

  headerButton(){
    this.viewService.headerButton.update(value => value = !value);
  }

  constructor() { }

  ngOnInit() {
    
  }

}
