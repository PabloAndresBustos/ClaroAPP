import { Component, OnInit, inject } from '@angular/core';
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
    {
      title: '¡ESTEMOS ALERTA!', 
      url: '/assets/images/alerta.png', 
      buttons: 'Conocé más', 
      class: 'carousel-item active', 
      modalOpen: 'open-modal-estafas', 
      modalContent: 'Tus datos y contraseñas son personales, no las compartas con nadie por correo ni por teléfono. No abras enlaces de remitentes dudosos. Mantené tus datos de contacto actualizados para recibir alertas y avisos importantes. Sospechá de los llamados de urgencia que no te permitan tiempo para analizar y decidir. Tomate un tiempo antes de actuar, si recibís un mail de Claro, verificá que provenga de una casilla válida (@claro.com.ar o @email.claro.com.ar). Desde Claro nunca te llamaremos para solicitar tus claves, pin o códigos de acceso. Nuestros mensajes, promociones, concursos y ofertas se encuentran sólo en páginas oficiales de Claro, a las que se puede acceder desde: claro.com.ar Si recibís mensajes o llamadas publicitarias de terceros en tu teléfono móvil o fijo y no querés que suceda, registrate aquí y si ya lo hiciste e igualmente seguís recibiendo llamadas, allí mismo podés denunciarlo. Recordá que en las Redes Sociales hay perfiles falsos que buscan robar información. Nuestros perfiles oficiales están verificados (con tilde azul)Icono verificado'
    },
    {
      title: '¡Vamos Checo!, GP Autria', 
      url: '/assets/images/GPAustralia.jpg', 
      buttons: 'Ver más', 
      class: 'carousel-item', 
      modalOpen: 'open-modal-formula', 
      modalContent: ''
    }
  ]

  constructor() { }

  ngOnInit() {
    this.route.params.subscribe(params => this.viweService.page.set(params['route']));
  }

}
