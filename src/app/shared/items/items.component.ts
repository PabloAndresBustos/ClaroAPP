import { RouterLink } from '@angular/router';
import { Items } from 'src/app/models/items.models';
import { Component, input, OnInit } from '@angular/core';
import { IonItem, IonLabel, IonTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-items',
  standalone: true,
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
  imports: [IonTitle, 
            IonItem,
            IonLabel,
            RouterLink
            ]
})
export class ItemsComponent{

  title = input<string>();
  color = input<string>('primary');
  items = input<Items[]>();

}
