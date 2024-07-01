import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-claro-musica',
  templateUrl: './claro-musica.page.html',
  styleUrls: ['./claro-musica.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ClaroMusicaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
