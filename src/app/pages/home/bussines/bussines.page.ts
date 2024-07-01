import { Component, OnInit, inject, signal } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ActivatedRoute } from '@angular/router';
import { Accordion } from 'src/app/models/accordion.models';
import { Images } from 'src/app/models/images.models';
import { ViewService } from 'src/app/services/viewService.service';

@Component({
  selector: 'app-bussines',
  templateUrl: './bussines.page.html',
  styleUrls: ['./bussines.page.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class BussinesPage implements OnInit {

  route = inject(ActivatedRoute);
  viweService = inject(ViewService);

  page(){
    return this.viweService.page();
  }

  accordionInfo:Accordion[] = [
    {title: 'Gestioná tu línea en un click', content: 'Chequeá tus megas, pagá tu factura y conocé tu plan en Mi Claro'},
    {title: 'Pagá desde tu casa', content: 'Con tarjetas de crédito o Visa débito desde Mi Claro, Claro Pay o llamando al *7246.'}
  ]

  accordionAnswer:Accordion[] = [
    {title: '¿Cómo y dónde pagar mi factura Claro?', content: 'Para pagar tu factura Claro consultá todos los lugares y formas de pago para tu plan de telefonía celular o internet Wi-Fi para tu casa haciendo click'},
    {title: '¿Cómo consultar saldo?', content: 'Podés consultar tu saldo Claro de la siguiente manera: A través de Mi Claro: - Ingresá a Mi Claro con tu email y contraseña. - Hacé click en la sección "Mi Consumo" para ver tu saldo y el detalle de tus consumos. Vía SMS: - Enviá un SMS gratuito al 611 con la palabra "SALDO". - Recibirás un mensaje de respuesta con el saldo actual de tu línea.'},
    {title: '¿Cómo activar un chip?', content: 'Si tu línea ya está activa pero pediste un nuevo chip, podés activarlo ingresando a Mi Claro  y seleccionando “Mi Chip” en el menú. Si pediste una nueva línea o número de Claro, tu chip ya estará activo. Si hiciste una portabilidad y recibiste el chip, necesitás esperar unos días a que se complete el proceso. Si tu chip no funciona, ingresá a Mi Claro y seleccioná la opción "Chatear con nosotros" para verificar el estado. En caso de que tu línea esté suspendida por robo o pérdida, podés activarla ingresando a Mi Claro, opción "Chatear con nosotros" o llamando al *611. Si la línea suspendida es corporativa, llamá al *677. Para líneas prepagas, es necesario registrar el chip a tu nombre de acuerdo con la Resolución 8507 sancionada por el Ente Nacional de Comunicaciones (ENACOM). Para más información ingresá acá.'},
    {title: '¿Qué es prepago?', content: 'Es un tipo de plan  en el que pagás por adelantado los servicios que vas a utilizar, como minutos de llamada, mensajes de texto y datos móviles. A diferencia de los planes pospago, en los que pagás una factura mensual, en el plan prepago cargás tu cuenta con crédito antes de usar el servicio. Con el plan prepago podrás controlar tus gastos.'},
    {title: '¿Qué es pack de datos?', content: 'Es un paquete de datos  móviles que podés comprar desde tu celular para acceder a internet, usar aplicaciones y hacer cualquier actividad online sin necesidad de una conexión Wi-Fi. Comprando un pack, elegís la cantidad de gigas que se adapten a tus necesidades.'},
  ]

  imageList:Images[] = [
    {title: '¡ESTEMOS ALERTA!', url: '/assets/images/alerta.png', buttons: 'Conocé más'},
    {title: '¡Vamos Checo!, GP Autria', url: '/assets/images/GPAustralia.jpg', buttons: 'Ver más'}
  ]

  constructor() { }

  ngOnInit() {
    this.route.params.subscribe(params => this.viweService.page.set(params['route']));
  }

}
