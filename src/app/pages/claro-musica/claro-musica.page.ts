import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-claro-musica',
  templateUrl: './claro-musica.page.html',
  styleUrls: ['./claro-musica.page.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class ClaroMusicaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
