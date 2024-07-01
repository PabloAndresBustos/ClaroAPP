import { Component, Input, OnInit } from '@angular/core';
import { IonItem, IonLabel, IonTitle } from '@ionic/angular/standalone';
import { Items } from 'src/app/models/items.models';

@Component({
  selector: 'app-items',
  standalone: true,
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
  imports: [IonTitle, 
    IonItem,
    IonLabel
  ]
})
export class ItemsComponent  implements OnInit {

  @Input() color:string = 'primary'
  @Input() title!:string; 
  @Input() items!:Items[];
  

  constructor() { }

  ngOnInit() {}

}
