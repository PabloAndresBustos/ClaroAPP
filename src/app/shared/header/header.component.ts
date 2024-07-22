import { Component, OnInit, inject, input, signal } from '@angular/core';
import { IonTitle, IonToolbar, IonHeader, IonButton, IonIcon, IonList, IonItem, IonSelect, IonSelectOption, IonActionSheet, IonToggle, IonLabel } from '@ionic/angular/standalone';
import { ViewService } from 'src/app/services/viewService.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    IonToggle, 
    IonActionSheet, 
    IonIcon, 
    IonButton, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    IonHeader, 
    IonList, 
    IonItem, 
    IonSelect, 
    IonSelectOption, 
    IonLabel, 
    FormsModule,
    RouterLink
  ]
})
export class HeaderComponent  implements OnInit {

  viewService = inject(ViewService);
  modal = input<string>();
  router = input<string>();
  withButton = input<boolean>(true);
  
  getIconTitle(){
    return this.viewService.headerIcon();
  }

  getTitle(){
    return this.viewService.userName();
  }

  constructor() { }

  ngOnInit() {}

}
