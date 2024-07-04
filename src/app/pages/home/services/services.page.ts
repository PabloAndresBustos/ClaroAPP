import { Component, inject, Input, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ViewService } from 'src/app/services/viewService.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { Accordion } from 'src/app/models/accordion.models';


@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class ServicesPage implements OnInit {

  route = inject(ActivatedRoute);
  viewService = inject(ViewService);
  title = signal<string>('');

  currentPage(){
    return this.viewService.subPage();
  }

  pagosOnline:Accordion[] = [
    {title: 'Pagos desde Mi Claro', content: 'Instructivos'},
    {title: 'Pagos por Claro Pay', content: 'Instructivos'},
    {title: 'Pagos por PagosMisCuentas.com', content: 'Instructivos'},
    {title: 'Pagos por Pagos Link', content: 'Instructivos'}
  ]

  pagosTelefono: Accordion[] = [
    {title: 'Pagos por teléfono', content: 'Instructivos'},
    {title: 'Adherite al débito automático', content: 'Instructivos'},
  ]

  pagosPresencial: Accordion[] = [
    {title: 'Entidades de pago no bancarias', content: 'Instructivos'},
  ]
   
  constructor() { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.viewService.subPage.set(params['direction']);
      this.title.set(this.viewService.subPage().toUpperCase());
    });
  }

}
