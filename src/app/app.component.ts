import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonIcon, IonFabButton, IonMenu, IonContent } from '@ionic/angular/standalone'
import { SharedModule } from './shared/shared.module';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonFabButton, IonIcon, IonApp, IonRouterOutlet, SharedModule, IonMenu, IonContent],
})
export class AppComponent {
  constructor() {}
}
