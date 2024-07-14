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
    {title: 'Pagos desde Mi Claro', 
     content: 'Sin consumir us datos, pagá tus facturas en Mi Claro con tus tarjetas de crédito o con Visa Débito.',
     titleList: 'Pasos a seguir: ',
     list: [
      'Iniciá sesión en Mi Claro y elegí la opción "Pagar mi Factura".',
      'Conocé el importe a pagar y hace clic en “Continuar”.',
      'Ingresá el monto a paga y hace clic en “Continuar”.',
      'Ingresá los datos de tu tarjeta. 5. Confirmá el pago y ¡listo!',
     ]
    },
    {title: 'Pagos por Claro Pay', 
     content: 'Pagá tu factura al instante desde Claro Pay sin consumir tus datos y con beneficios todos los meses. Podes elegir pagar con Dinero en Cuenta o con tus tarjetas de debito o crédito.',
     titleList: 'Entrá ahora en Claro Pay  y empezá a disfrutar tus beneficios.',
     list: [
      'Ingresá a la opción Pagá tu factura Claro.',
      'Seleccioná el medio de pago con el que quierés pagar.',
      'Presioná Confirmar.',
      'Y listo!'
     ]
    },
    {title: 'Pagos por PagosMisCuentas.com', 
     content: 'Pagá al instante desde www.pagomiscuentas.com o desde tu homebanking.',
     titleList: 'Pasos a seguir: ',
     list: [
      'Ingresar el rubro: "Telefonía".',
      'Seleccionar la empresa: "Claro".',
      'Ingresar tu Número de cuenta: son los 11 dígitos que figuran en el frente de la factura.',
      'Importe: El monto a pagar aparecerá en la plataforma. Si es la primera vez que pagás o a la fecha no tenés emitida una factura, tendrás que ingresarlo. * Podés encontrar tu Número de cuenta en: *',
      'Tu notificación de Factura.',
      'Mi Claro.',
      'O enviando un SMS con la palabra "CUENTA" al 611.'
     ]
    },
    {title: 'Pagos por Pagos Link', 
     content: 'Pagá desde www.pagar.com.ar  o desde tu homebanking',
     titleList: 'Pasos a seguir: ',
     list: [
      'Ingresar rubro: "Telefonía".',
      'Seleccionar ente: "Claro".',
      'Ingresar tu Número de cuenta: son los 11 dígitos que figuran en el frente de la factura.',
      'Importe: El monto a pagar aparecerá en la plataforma. Si es la primera vez que pagás o a la fecha no tenés emitida una factura, tendrás que ingresarlo. Tu pago se registra dentro de las 48 horas hábiles. Podés agendar estos datos para pagar tu próxima factura. Podés encontrar tu Número de cuenta en:',
      'Tu notificación de Factura',
      'Mi Claro',
      'O enviando un SMS con la palabra "CUENTA" al 611.'
     ]
    },
     
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
