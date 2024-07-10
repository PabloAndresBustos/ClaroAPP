import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-claro-video',
  templateUrl: './claro-video.page.html',
  styleUrls: ['./claro-video.page.scss'],
  standalone: true,
  imports: [
            IonContent, 
            IonHeader, 
            IonTitle, 
            IonToolbar, 
            CommonModule, 
            FormsModule, 
            SharedModule
            ]
})
export class ClaroVideoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
