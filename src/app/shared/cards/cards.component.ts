import { Component, Input, OnInit } from '@angular/core';
import { 
        IonCard, 
        IonContent, 
        IonCardSubtitle, 
        IonCardHeader, 
        IonCardTitle, 
        IonButton, 
        IonCardContent, 
        IonInput, 
        IonTitle, IonLabel } from '@ionic/angular/standalone';

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

  @Input() title!:string;
  @Input() subtitle!:string;
  @Input() contentTitle!:string;
  @Input() inputPlaceholder!:string;
  @Input() buttonText!:string;

  @Input() showInput:boolean = false;
  

  constructor() { }

  ngOnInit() {}

}
