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

  imageUrl = input<string>();
  title = input.required<string>();
  showInput = input<boolean>(false);
  withImage = input<boolean>(false);
  inputPlaceholder = input<string>();
  subtitle = input.required<string>();
  buttonText = input.required<string>();
  inputText = input.required<boolean>();
  contentTitle = input.required<string>();
  
  
  constructor() { }

  ngOnInit() {}

}
