import { Component, input, OnInit } from '@angular/core';
import { 
        IonCard, 
        IonContent, 
        IonCardSubtitle, 
        IonCardHeader, 
        IonCardTitle, 
        IonButton, 
        IonCardContent, 
        IonInput, 
        IonTitle,
      } from '@ionic/angular/standalone';

@Component({
  selector: 'app-cards',
  standalone: true,
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  imports:[
            
    IonContent, 
            IonCard, 
            IonCardHeader, 
            IonCardTitle, 
            IonCardSubtitle, 
            IonCardContent, 
            IonButton, 
            IonInput,
            IonTitle]
})
export class CardsComponent  implements OnInit {

  title = input.required<string>();
  subtitle = input.required<string>();
  contentTitle = input.required<string>();
  inputPlaceholder = input.required<string>();
  buttonText = input.required<string>();
  showInput = input<boolean>(false);
  

  constructor() { }

  ngOnInit() {}

}
