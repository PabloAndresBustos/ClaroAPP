import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-claro-pay',
  templateUrl: './claro-pay.page.html',
  styleUrls: ['./claro-pay.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ClaroPayPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
