import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-mi-claro',
  templateUrl: './mi-claro.page.html',
  styleUrls: ['./mi-claro.page.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class MiClaroPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
