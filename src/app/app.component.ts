import { Component, inject, OnInit } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { ViewService } from './services/viewService.service';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [SharedModule],
})
export class AppComponent implements OnInit{

  viewService = inject(ViewService);
 
  ngOnInit(){
    this.viewService.isKeyboard();
  }
}