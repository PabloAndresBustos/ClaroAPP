import { Component, Input, OnInit, inject} from '@angular/core';
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
            IonMenuButton]
})
export class FooterComponent  implements OnInit {

  viewService = inject(ViewService);

  openAlert(){
    this.viewService.alertOpen.update(value => value = !value);
  }

  constructor() { }

  ngOnInit() {}

}
