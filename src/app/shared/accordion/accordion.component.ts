import { Component, Input, OnInit } from '@angular/core';
import { IonContent, IonCardTitle, IonButton, IonCardSubtitle, IonAccordionGroup, IonAccordion, IonLabel, IonItem } from '@ionic/angular/standalone';
import { Accordion } from 'src/app/models/accordion.models';

@Component({
  selector: 'app-accordion',
  standalone: true,
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  imports: [IonItem, IonLabel, IonAccordion,IonAccordionGroup, IonCardSubtitle, IonButton, IonCardTitle, IonContent]
})
export class AccordionComponent  implements OnInit {

  @Input() link!:string;
  @Input() title!:string;
  @Input() subtitle!:string;
  @Input() buttonText!:string;
  @Input() color:string = 'ligth';
  @Input() titleColor:string = 'primary';
  @Input() accordionContentList!:Accordion[];


  constructor() { }

  ngOnInit() {}

}
