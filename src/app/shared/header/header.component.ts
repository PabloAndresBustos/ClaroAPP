import { Component, OnInit, inject } from '@angular/core';
import { IonTitle, IonToolbar, IonHeader, IonButton, IonIcon, IonList, IonItem, IonSelect, IonSelectOption, IonActionSheet, IonToggle, IonLabel } from '@ionic/angular/standalone';
import { ViewService } from 'src/app/services/viewService.service';


@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonToggle, IonActionSheet, IonIcon, IonButton, IonHeader, IonTitle, IonToolbar, IonHeader, IonList, IonItem, IonSelect, IonSelectOption, IonLabel]
})
export class HeaderComponent  implements OnInit {

  viewService = inject(ViewService);

  getIconTitle(){
    return this.viewService.headerIcon();
  }

  getTitle(){
    return this.viewService.userName();
  }

  getLogin(){
    return this.viewService.login();
  }

  logoUrl(){
    return this.viewService.logoUrl();
  }

  constructor() { }

  ngOnInit() {}

}
