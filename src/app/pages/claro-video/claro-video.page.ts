import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-claro-video',
  templateUrl: './claro-video.page.html',
  styleUrls: ['./claro-video.page.scss'],
  standalone: true,
  imports: [ SharedModule ]
})
export class ClaroVideoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
