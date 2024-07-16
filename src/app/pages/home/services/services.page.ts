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
     content: 'Sin consumir tus datos, pagá tus facturas en Mi Claro con tus tarjetas de crédito o con Visa Débito.',
     titleList: 'Pasos a seguir: ',
     list: [
      '1. Iniciá sesión en Mi Claro y elegí la opción "Pagar mi Factura".',
      '2. Conocé el importe a pagar y hace clic en “Continuar”.',
      '3. Ingresá el monto a paga y hace clic en “Continuar”.',
      '4. Ingresá los datos de tu tarjeta. 5. Confirmá el pago y ¡listo!',
     ]
    },
    {title: 'Pagos por Claro Pay', 
     content: 'Pagá tu factura al instante desde Claro Pay sin consumir tus datos y con beneficios todos los meses. Podes elegir pagar con Dinero en Cuenta o con tus tarjetas de debito o crédito.',
     titleList: 'Entrá ahora en Claro Pay  y empezá a disfrutar tus beneficios.',
     list: [
      '1. Ingresá a la opción Pagá tu factura Claro.',
      '2. Seleccioná el medio de pago con el que quierés pagar.',
      '3. Presioná Confirmar.',
      '4. Y listo!'
     ]
    },
    {title: 'Pagos por PagosMisCuentas.com', 
     content: 'Pagá al instante desde www.pagomiscuentas.com o desde tu homebanking.',
     titleList: 'Pasos a seguir: ',
     list: [
      '1. Ingresar el rubro: "Telefonía".',
      '2. Seleccionar la empresa: "Claro".',
      '3. Ingresar tu Número de cuenta: son los 11 dígitos que figuran en el frente de la factura.',
      '4. IMPORTANTE: El monto a pagar aparecerá en la plataforma. Si es la primera vez que pagás o a la fecha no tenés emitida una factura, tendrás que ingresarlo. * Podés encontrar tu Número de cuenta en: *',
      '5. Tu notificación de Factura.',
      '6. Mi Claro.',
      '7. O enviando un SMS con la palabra "CUENTA" al 611.'
     ]
    },
    {title: 'Pagos por Pagos Link', 
     content: 'Pagá desde www.pagar.com.ar  o desde tu homebanking',
     titleList: 'Pasos a seguir: ',
     list: [
      '1. Ingresar rubro: "Telefonía".',
      '2. Seleccionar ente: "Claro".',
      '3. Ingresar tu Número de cuenta: son los 11 dígitos que figuran en el frente de la factura.',
      '4. IMPORTANTE: El monto a pagar aparecerá en la plataforma. Si es la primera vez que pagás o a la fecha no tenés emitida una factura, tendrás que ingresarlo. Tu pago se registra dentro de las 48 horas hábiles. Podés agendar estos datos para pagar tu próxima factura. Podés encontrar tu Número de cuenta en:',
      '5. Tu notificación de Factura',
      '6. Mi Claro',
      '7. O enviando un SMS con la palabra "CUENTA" al 611.'
     ]
    },
     
  ]

  pagosTelefono: Accordion[] = [
    {title: 'Pagos por teléfono', 
     content: 'Con tarjetas de crédito o con Visa Débito llamando al *7246 desde tu celular o al 0800-123-7246 opción 1  desde un teléfono fijo.'},
    {title: 'Adherite al débito automático',
     content: 'Disponible con las principales tarjetas. Adherite llamando al *7246 o al 0800-123-7246.'},
  ]

  pagosPresencial: Accordion[] = [
    {title: 'Entidades de pago no bancarias',
     content: 'Pagá al instante con tu factura, número de cuenta o línea en las siguientes entidades de pago:',
     list: [
      '● Pago Fácil',
      '● Rapipago',
      '● Cobro Express',
      '● Pluspagos',
      '● Ripsa',
      '● Pronto Pago',
      '● Multipago',
      '● Cobro Virtual',
      '● Provincia Net',
      'Podés encontrar tu número de cuenta en:',
      '● Tu notificación de factura',
      '● Mi Claro',
      '● O envianos un SMS con la palabra "CUENTA" al 611'
     ]
    },
  ]

  serviciosHogar: Accordion[] = [
    {title: 'Pagos por Claro Pay',
      content: 'Pagá tu factura al instante desde Claro Pay sin consumir tus datos y con beneficios todos los meses. Podes elegir pagar con Dinero en Cuenta o con tus tarjetas de debito o crédito.',
      titleList: 'Entrá ahora en Claro Pay  y empezá a disfrutar tus beneficios.',
      list: [
       '1. Ingresá a la opción Pagá tu factura Claro.',
       '2. Seleccioná el medio de pago con el que quierés pagar.',
       '3. Presioná Confirmar.',
       '4. Y listo!'
      ]
    },
    {title: 'Medios de pago Claro (AMX Claro)',
     list: [
      '● PAGOS DESDE MI CLARO ●',
      
      '1. Sin consumir tus datos, pagá tus facturas en Mi Claro con tus tarjetas de crédito o con Visa Débito.',
      '2. Iniciá sesión en Mi Claro y elegí la opción "Pagar mi Factura".',
      '3. Conocé el importe a pagar y hace clic en “Continuar”.',
      '4. Ingresá el monto a paga y hace clic en “Continuar”.',
      '5. Ingresá los datos de tu tarjeta. 5. Confirmá el pago y ¡listo!',
      
      '● PAGOS POR PagosMisCuentas.com ●',
      
      '1. Pagá al instante desde www.pagomiscuentas.com o desde tu homebanking.',
      '2. Ingresar el rubro: "Telefonía".',
      '3. Seleccionar la empresa: "Claro".',
      '4. Ingresar tu Número de cuenta: son los 11 dígitos que figuran en el frente de la factura.',
      '5. IMPORTANTE: El monto a pagar aparecerá en la plataforma. Si es la primera vez que pagás o a la fecha no tenés emitida una factura, tendrás que ingresarlo. * Podés encontrar tu Número de cuenta en: *',
      '6. Tu notificación de Factura.',
      '7. Mi Claro.',
      '8. O enviando un SMS con la palabra "CUENTA" al 611.',
      
      '● PAGOS POR Pagos Link ●',
      
      '1. Pagá desde www.pagar.com.ar  o desde tu homebanking',
      '2. Ingresar rubro: "Telefonía".',
      '3. Seleccionar ente: "Claro".',
      '4. Ingresar tu Número de cuenta: son los 11 dígitos que figuran en el frente de la factura.',
      '5. IMPORTANTE: El monto a pagar aparecerá en la plataforma. Si es la primera vez que pagás o a la fecha no tenés emitida una factura, tendrás que ingresarlo. Tu pago se registra dentro de las 48 horas hábiles. Podés agendar estos datos para pagar tu próxima factura. Podés encontrar tu Número de cuenta en:',
      '6. Tu notificación de Factura',
      '7. Mi Claro',
      '8. O enviando un SMS con la palabra "CUENTA" al 611.',
      
      '● PAGOS POR TELEFONO ●',
      
      'Con tarjetas de crédito o con Visa Débito llamando al *7246 desde tu celular o al 0800-123-7246 opción 1  desde un teléfono fijo.',
      
      '● PAGOS POR Ualá ●',
      
      'Pagá al instante desde la App',
      'Pasos a seguir: ',
      '1. Ingresar a la opción "Pagos".',
      '2. Escanear factura o ingresar el código de barras de la factura.',
      '3. Ingresar el importe a abonar.'
     ]
    },
    {title: 'Medios de pago Claro (Telmex)',
     list: [
      '● PAGOS POR PagosMisCuentas.com ●',

      'Pagá al instante desde www.pagomiscuentas.com o desde tu homebanking.',
      '1.Ingresar el rubro: "Telefonía".',
      '2.Seleccionar la empresa: "Claro".',
      '3.Ingresar tu Número de cuenta: son los 11 dígitos que figuran en el frente de la factura.',
      'IMPORTANTE: El monto a pagar aparecerá en la plataforma. Si es la primera vez que pagás o a la fecha no tenés emitida una factura, tendrás que ingresarlo. * Podés encontrar tu Número de cuenta en: *',
      'Tu notificación de Factura.',
      'Mi Claro.',
      'O enviando un SMS con la palabra "CUENTA" al 611.',

      '● PAGOS POR Red Link ●',

      'Pagá desded www.redlink.com.ar o desde tu homebanking',
      '1.Ingresar rubro: "Telefonía".',
      '2.Seleccionar ente: "Claro Telmex".',
      '3.Ingresar tu Código de Pago Electrónico.',
      'IMPORTANTE: Se puede pagar hasta el primer vencimiento.',
      'Tu pago se registra dentro de las 48 horas hábiles. Podés agendar estos datos para pagar tu próxima factura.',

      '● PAGOS POR TELEFONO ●',

      'Rapipago por teléfono: 0800-345-RAPI(7274)',

      '● PAGOS CON DEBITO ●',

      'Podés adherirte a través de nuestro servicio de atención al cliente al 0800-122-3000 (Comercial), 0800-122-2222 (Residencial), 0800-122-4652 (Larga Distancia).',
      'Podés hacerlo con cualquier entidad bancaria y con las principales tarjetas de crédito: ',
      '● Visa',
      '● MastarCard',
      '● Naranja',
      '● American Express',
      '● Cabal',
      '● Diners',
      '● Nativa',
      '● Credencial',
      '● CMR',
      '● MAS'
     ]
    },
  ]
   
  constructor() { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.viewService.subPage.set(params['direction']);
      this.title.set(this.viewService.subPage().toUpperCase());
    });
  }

}