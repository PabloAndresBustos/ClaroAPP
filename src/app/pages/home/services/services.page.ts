import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ViewService } from 'src/app/services/viewService.service';


@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
  standalone: true,
  imports: [
            CommonModule
           ]
})
export class ServicesPage implements OnInit {

  route = inject(ActivatedRoute);
  viewService = inject(ViewService);

  title = this.viewService.subPage();
 
  constructor() { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.viewService.subPage.set(params['direction'])
    });
  }

}
