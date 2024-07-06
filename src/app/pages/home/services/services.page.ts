import { ActivatedRoute } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { Accordion } from 'src/app/models/accordion.models';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ViewService } from 'src/app/services/viewService.service';


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

  serviciosHogar: Accordion[] = [
    {title: 'Pagos por Claro Pay', content: 'Instructivos'},
    {title: 'Medios de pago Claro (AMX Claro)', content: 'Instructivos'},
    {title: 'Medios de pago Claro (Telmex)', content: 'Instructivos'},
  ]
   
  constructor() { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.viewService.subPage.set(params['direction']);
      this.title.set(this.viewService.subPage().toUpperCase());
    });
  }

}
