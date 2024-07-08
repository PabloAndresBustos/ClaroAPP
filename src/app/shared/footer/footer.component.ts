import { Component, Input, OnInit, inject, input} from '@angular/core';
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
            ModalComponent
          ]
})
export class FooterComponent  implements OnInit {

  viewService = inject(ViewService);
  openModal = input<string>();

  constructor() { }

  ngOnInit() {}

}
