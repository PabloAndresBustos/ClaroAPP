import { ActivatedRoute } from '@angular/router';
import { Images } from 'src/app/models/images.models';
import { Component, OnInit, inject } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { Accordion } from 'src/app/models/accordion.models';
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

  page() {
    return this.viweService.page();
  }

  accordionInfo: Accordion[] = [
    {
      title: 'Gestioná tu línea en un click',
      content: 'Chequeá tus megas, pagá tu factura y conocé tu plan en Mi Claro'
    },
    {
      title: 'Pagá desde tu casa',
      content: 'Con tarjetas de crédito o Visa débito desde Mi Claro, Claro Pay o llamando al *7246.'
    }
  ]

  accordionAnswer: Accordion[] = [
    {
      title: '¿Cómo y dónde pagar mi factura Claro?',
      content: 'Para pagar tu factura Claro consultá todos los lugares y formas de pago para tu plan de telefonía celular o internet Wi-Fi para tu casa haciendo click'
    },
    {
      title: '¿Cómo consultar saldo?',
      content: 'Podés consultar tu saldo Claro de la siguiente manera: A través de Mi Claro: ',
      list: [
        'Ingresá a Mi Claro con tu email y contraseña.',
        'Hacé click en la sección "Mi Consumo" para ver tu saldo y el detalle de tus consumos.',
        'Vía SMS: Enviá un SMS gratuito al 611 con la palabra "SALDO".',
        'Recibirás un mensaje de respuesta con el saldo actual de tu línea.'
      ]
    },
    {
      title: '¿Cómo activar un chip?',
      list: [
        'Si tu línea ya está activa pero pediste un nuevo chip, podés activarlo ingresando a Mi Claro  y seleccionando “Mi Chip” en el menú.',
        'Si pediste una nueva línea o número de Claro, tu chip ya estará activo.',
        'Si hiciste una portabilidad y recibiste el chip, necesitás esperar unos días a que se complete el proceso.',
        'Si tu chip no funciona, ingresá a Mi Claro y seleccioná la opción "Chatear con nosotros" para verificar el estado.',
        'En caso de que tu línea esté suspendida por robo o pérdida, podés activarla ingresando a Mi Claro, opción "Chatear con nosotros" o llamando al *611.',
        'Si la línea suspendida es corporativa, llamá al *677. Para líneas prepagas, es necesario registrar el chip a tu nombre de acuerdo con la Resolución 8507 sancionada por el Ente Nacional de Comunicaciones (ENACOM). Para más información ingresá acá.'
      ]
    },
    {
      title: '¿Qué es prepago?',
      content: 'Es un tipo de plan  en el que pagás por adelantado los servicios que vas a utilizar, como minutos de llamada, mensajes de texto y datos móviles. A diferencia de los planes pospago, en los que pagás una factura mensual, en el plan prepago cargás tu cuenta con crédito antes de usar el servicio. Con el plan prepago podrás controlar tus gastos.'
    },
    {
      title: '¿Qué es pack de datos?',
      content: 'Es un paquete de datos  móviles que podés comprar desde tu celular para acceder a internet, usar aplicaciones y hacer cualquier actividad online sin necesidad de una conexión Wi-Fi. Comprando un pack, elegís la cantidad de gigas que se adapten a tus necesidades.'
    },
  ]

  bussinesAcordion: Accordion[] = [
    {
      title: 'Planes',
      content: 'Planes disponibles para que tu negocio este conectado al 100%'
    },
    {
      title: 'Roaming',
      content: 'Seguí conectado en tus viajes'
    },
    {
      title: 'Cloud',
      content: 'Traé tu flota a Claro y llevate desde 40% OFF x 12 meses en todos los planes'
    },
    {
      title: 'Portabilidad',
      content: 'Tu negocio puede volverse ilimitada'
    }
  ]

  companyAcordion: Accordion[] = [
    {
      title: 'Planes',
      content: 'Planes disponibles para que tu negocio este conectado al 100%'
    },
    {
      title: 'Roaming',
      content: 'Seguí conectado en tus viajes'
    },
    {
      title: 'Cloud',
      content: 'Traé tu flota a Claro y llevate desde 40% OFF x 12 meses en todos los planes'
    },
    {
      title: 'IoT',
      content: 'Con la plataforma Cisco Jasper Wireless, podes administrar, monitorear y tener un control total de tus líneas destinadas al intercambio de datos entre máquinas. Especialmente diseñada para negocios de seguimiento vehicular, logística, sistemas de pago, monitoreo, telemétrica y cuidados de salud entre otros.'
    },
    {
      title: 'Internet Corporativo',
      content: 'Acceso a Internet Dedicado y Simétrico, con garantías de calidad de servicio y el mejor asesoramiento para el diseño de la solución que su negocio necesita. El servicio se ofrece a través de backbone propio de fibra óptica y tecnología IP, permitiendo escalabilidad y máxima confiabilidad.'
    },
    {
      title: 'SD-WAN',
      content: 'Es una tecnología que permite construir redes de datos entre sus oficinas de manera ágil y simple, gracias a que separa los enlaces de transmisión de la configuración y gestión de la red. Permite definir políticas de routing, priorización, seguridad y gestión a nivel de las aplicaciones de su negocio.'
    }
  ]

  imageList: Images[] = [
    {
      title: '¡ESTEMOS ALERTA!',
      url: '/assets/images/alerta.png',
      buttons: 'Conocé más',
      class: 'carousel-item active',
      modalOpen: 'open-modal-estafas',
      modalSubTitle: '¡Ante las estafas!',
      modalIcon: true,
      modalContent: [
        'Tus datos y contraseñas son personales, no las compartas con nadie por correo ni por teléfono.',
        'No abras enlaces de remitentes dudosos.',
        'Mantené tus datos de contacto actualizados para recibir alertas y avisos importantes.',
        'Sospechá de los llamados de urgencia que no te permitan tiempo para analizar y decidir.',
        'Tomate un tiempo antes de actuar, si recibís un mail de Claro, verificá que provenga de una casilla válida (@claro.com.ar o @email.claro.com.ar).',
        'Desde Claro nunca te llamaremos para solicitar tus claves, pin o códigos de acceso.',
        'Nuestros mensajes, promociones, concursos y ofertas se encuentran sólo en páginas oficiales de Claro, a las que se puede acceder desde: claro.com.ar Si recibís mensajes o llamadas publicitarias de terceros en tu teléfono móvil o fijo y no querés que suceda, registrate aquí y si ya lo hiciste e igualmente seguís recibiendo llamadas, allí mismo podés denunciarlo.',
        'Recordá que en las Redes Sociales hay perfiles falsos que buscan robar información.',
        'Nuestros perfiles oficiales están verificados (con tilde azul)Icono verificado'
      ]
    },
    {
      title: '¡Vamos Checo!, GP Autria',
      url: '/assets/images/GPAustralia.jpg',
      buttons: 'Ver más',
      class: 'carousel-item',
      modalOpen: 'open-modal-formula',
      modalSubTitle: 'Gran Premio de Austria',
      modalIcon: false,
      modalContent: ['Este contenido ya no se encuentra disponible.']
    }
  ]

  imageBussines: Images[] = [
    {
      title: 'Telemetría IOT',
      url: '/assets/images/amarillaGas.jpg',
      buttons: 'Experiencia Amarilla Gas',
      class: 'carousel-item active',
      modalOpen: 'open-telemetria-modal',
      modalSubTitle: 'Experiencia Amarilla Gas',
      modalIcon: false,
      modalContent: [
        'Solución que ofrece sensores en tanques u otros equipos, permitiendo el procesamiento y análisis estadístico de información relevante.',
        'Sitio web: www.amarillagas.com',
        'Sector / Industria: Energía',
        'PERFIL DEL CLIENTE',
        'AMARILLA GAS es una empresa familiar cuyos orígenes se remontan a la década de los 60. Nace en la Provincia del Chaco, con el fin de abastecer al mercado de combustibles y otros ramos en general.Con el paso del tiempo se fue transformando en una empresa enfocada en el servicio y soluciones para la comercialización de combustibles limpios en toda la gama de sectores necesitados de una alternativa práctica, confiable y amigable con el medio ambiente: Gas licuado de petróleo(GLP)',
        'TAMAÑO DE LA EMPRESA',
        'AMARILLA GAS cuenta con 700 colaboradores, distribuidos en más de 27 puntos operativos comerciales en la República Argentina.',
        'DESAFÍO',
        'AMARILLA GAS buscaba consolidar la relación con sus clientes, los cuales requerían intervención con el control del abastecimiento en sus instalaciones y mejora integral del servicio de atención y aprovisionamiento a través de una logística precisa',
        'SOLUCIÓN',
        'Claro Argentina, junto con su socio tecnológico CUSAT, implementaron en AMARILLA GAS el servicio de Telemetría en todos sus tanques de gas a granel, con análisis estadísticos de información relevante de fácil comprensión.',
        'TELEMETRÍA',
        'Sistema de comunicación a distancia que permite recoger, procesar y transmitir información de un dispositivo electrónico a otro.Esto es posible mediante sensores que miden magnitudes físicas y químicas(ondas, fluidos, temperatura, vibración, presión, voltaje, velocidad, tiempo, entre otros).',
        'BENEFICIOS',
        'Gracias al servicio de Telemetría implementado, AMARILLA GAS ha mejorado el contacto con sus clientes, desde la tecnología aplicada en la operación diaria siendo una herramienta que permite generar un plus diferencial a la hora de evaluar los beneficios en las propuestas comerciales.',
        'TESTIMONIAL',
        '“La implementación del servicio de Telemetría de Claro Argentina resulta clave para la optimización y ampliación de nuestra logística, la generación de recargas de manera proactiva y la constante búsqueda de fidelización de nuestros clientes, a través de la identificación y solución de desvíos comunes, como la falta de suministro.Una empresa que tiene como combustible principal el GLP, el cual no es abastecido en forma fluida en tiempo y forma, termina teniendo trastornos operativos insalvables al momento del análisis de rendimientos y costos.Es por esto que la solución brindada por Claro Argentina nos permite saber de antemano lo que está sucediendo con el almacenaje del producto de nuestros clientes, para dar una respuesta rápida, administrando el combustible y despachando según su demanda. Así mismo, nos permite optimizar costos, ser eficientes en la entrega y aportar un valor agregado al servicio que le brindamos a nuestros clientes“.',
        ' ',
        'Guillermo Steffoni',
        'Referente Técnico'
      ]
    },
    {
      title: 'Monitores en Redes GPON',
      url: '/assets/images/monitoreoGPON.jpg',
      buttons: 'Experiencia Claro Argentina',
      class: 'carousel-item',
      modalOpen: 'open-redesgpon-modal',
      modalSubTitle: 'Experiencia Claro Argentina',
      modalIcon: false,
      modalContent: [
        'Solución IoT de prevención de vandalismo sobre la red GPON, mediante sensores y conectividad NB-IoT, para evitar la pérdida del servicio a clientes.',
        'Sitio web: www.claro.com.ar',
        'Sector/Industria: Telecomunicaciones',
        'PERFIL DEL CLIENTE',
        'Dentro de la “Transformación Digital” nace el concepto de IoT - Internet de las Cosas - con el objetivo de identificar y gestionar activos u objetos por medio de equipos o sistemas automatizados, utilizando nuevas tecnologías y obteniendo un valor adicional tanto para el negocio como para el usuario final.',
        'Ante el dinámico y constante cambio evolutivo en los mercados, Claro Argentina consolida el programa de “Partners IoT”, que tiene por objetivo seleccionar desarrolladores IoT para potenciarlos bajo un esquema Win-Win.',
        'América Móvil, líder en servicios integrados de telecomunicaciones en Latinoamérica, es la empresa más grande a nivel mundial, excluyendo China e India, en términos de suscriptores móviles. Con el despliegue de su plataforma de comunicaciones de clase mundial permite ofrecer a sus clientes un portafolio de servicios de valor agregado y soluciones de comunicación mejoradas en 25 países de Latinoamérica, Estados Unidos y Europa Central y del Este.',
        'CUSAT es una empresa argentina especializada en diseñar y crear soluciones de IoT para transformar digitalmente negocios e industrias. Claro Argentina confía en su socio tecnológico CUSAT, como un facilitador de soluciones con vasta',
        'experiencia en el mercado.',
        'TAMAÑO DE LA EMPRESA',
        'Claro Argentina es subsidiaria de América Móvil, S.A.B. de C.V. BMV: AMX [NYSE: AMX]. [NASDAQ: AMOV] [LATIBEX: XAMXL], el proveedor líder de servicios de telecomunicaciones en Latinoamérica con operaciones en 18 países del continente americano.',
        'DESAFÍO',
        'Disponer de la detección de movimiento (acelerómetro) y ubicación en tiempo real de elementos pasivos de red (Cajas de acceso de FTTH / Cajas de empalmes de FO) susceptibles de robo.',
        'SOLUCIÓN',
        'Instalación de electrónica de muy bajo consumo en la comunicación (IoT) con un gestor/plataforma de recepción de eventos (Movimiento – Ubicación – Temperatura y otros).',
        'Claro Argentina implementó una solución de prevención de vandalismo sobre su red GPON, la cual incorpora sensores varios, tales como GPS, apertura de gabinetes, acelerómetro, etc. y conectividad NB-IoT (Narrow Band-IoT) a fin de detectar en tiempo real intrusiones no deseadas a la red de fibra y disparar acciones disuasivas evitando así el hecho vandálico que ocasiona la pérdida de servicio a nuestros clientes.',
        'Para minimizar los hurtos de estos elementos pasivos de la red, se optó por colocar dispositivos NB-IoT ensorizados, los cuales se activan inmediatamente al momento de la detección de un evento de movimiento brusco, lo que genera que el equipo técnico dé respuesta rápida ante un posible corte en el servicio.',
        'NB-IoT (Narrowband Internet of Things)',
        'Estándar de transmisión de datos diseñado para soportar la comunicación entre dispositivos simples, de bajo consumo de datos y gran autonomía, homologados en esta tecnología que permite conectarlos a Internet y así ser monitoreados y controlados desde cualquier lugar y a cualquier hora.',
        'BENEFICIOS',
        'Uno de los principales desafíos a resolver de CUSAT, fue desarrollar un dispositivo que funcionara con baterías, prescindiendo del acceso a la red eléctrica. Esto fue posible gracias al uso de la nueva red NB-IoT de Claro Argentina, que opera bajo los estándares de la 3GPP con el fin de soportar la comunicación de dispositivos IoT y asegurar una vida útil de las baterías hasta por 5 años. Gracias a esta implementación es posible identificar rápidamente un corte de servicio intencional de la red pasiva de GPON por robo o vandalismo para su rápida reparación. Además, permite establecer acciones para la detención en tránsito o posterior allanamiento en domicilios donde se ubiquen dichos elementos de red robados.',
        'TESTIMONIAL',
        '“La nueva red Narrow Band-IoT de Claro Argentina es una evolución en la era de la conectividad que permite conectar de manera más eficiente y con menores costos en dispositivos, sensores y objetos. Esta tecnología mejora la vida útil de las baterías, que pueden pasar a durar de 1 a 10 años y, además, gracias a las bajas frecuencias que utiliza, puede llegar a brindar cobertura en lugares de difícil acceso tales como segundos subsuelos”, aseguró Walter Nigolian. A su vez, Walter Nigolian remarcó: “Gracias a la implementación de esta tecnología en la solución de Monitoreo y Gestión de Activos en nuestra red, se logró obtener un mayor control de la red que ha permitido reducir hechos de vandalismo. También permitió desde el equipo técnico, dar una respuesta rápida y a la vez asegurar la confiabilidad, estabilidad y calidad del servicio. Desde Claro Argentina estamos trabajando en modelar esta solución para ofrecerla comercialmente a los clientes que deseen monitorear de manera más eficiente sus activos y así optimizar su negocio. Esperamos que, con el desarrollo en conjunto con el partner, pueda escalarse a otras verticales para su implementación”.',
        ' ',
        'Walter Nigolian',
        'Gerente de Servicio de valor Agregado - Claro'
      ]
    },
    {
      title: 'Logística Securizada',
      url: '/assets/images/logistica.jpg',
      buttons: 'Experiencia Silstech',
      class: 'carousel-item',
      modalIcon: false,
      modalOpen: 'open-logistica-modal',
      modalSubTitle: 'Experiencia Silstech',
      modalContent: [
        'Comunicación M2M con altos niveles de seguridad para transmisión de video mobile en flotas de transporte.',
        'Sitio web: www.sils.tech',
        'Sector/Industria: Tecnología',
        'PERFIL DEL CLIENTE',
        'SILSTECH es una empresa tecnológica cordobesa que nació en 2017 para cubrir una necesidad del sector de transporte de combustibles. Basándose en los tres pilares fundamentales del sector (seguridad de la carga, seguridad vial y logística) creó el producto SILS, Sistema Integral de Logística y Seguridad para su aplicación en el transporte de combustibles en el país. SILS combina la sinergia del desarrollo de software y hardware, para ofrecer una solución mobile de primera línea a nivel mundial.',
        'TAMAÑO DE LA EMPRESA',
        'SILSTECH cuenta con 60 empleados, en diferentes áreas, entre estas, las más importantes son las de desarrollo de software, la de I+D y de posventa. Su central se encuentra en Córdoba, pero posee distribución a nivel país para su despliegue. Está en proceso de apertura de dos oficinas de representación, en México y Paraguay, países en donde ya se encuentra realizando pruebas piloto de sus productos en el sector de transporte de combustible.',
        'DESAFÍO',
        'Contar con un sistema de Gestión Integral para el Transporte de Combustibles, útil para todos los participantes de la cadena de distribución en el país, que permita mejorar la trazabilidad del producto, minimizar las pérdidas patrimoniales y mejorar la calidad de la conducción en el transporte.',
        'SOLUCIÓN',
        'Mediante la implementación del servicio de APN privado (Access Point Name) de Claro Argentina, SILSTECH ha logrado un canal de comunicación M2M (Machine to Machine) con altos niveles de seguridad para poder transmitir Video Mobile a lo largo de toda Argentina, desde los vehículos que recorren a diario las rutas directamente hasta sus servidores.',
        'APN PRIVADO (Access Point Name)',
        'Red privada construida sobre la red de Claro para el transporte de datos cuya convergencia produce la consecuente reducción en costos operativos y de inversión, flexibilidad y escalabilidad de la infraestructura de comunicaciones, altos niveles de seguridad, desempeño y confiabilidad.',
        'M2M (Machine to Machine)',
        'Solución de conectividad que permite administrar, monitorear y tener un control total de las líneas destinadas al intercambio de datos entre máquinas, diseñado para diversas necesidades como seguimiento vehicular, logística, sistemas de pago, monitoreo, telemétrica, cuidados de salud entre muchas otras.',
        'BENEFICIOS',
        'Se estima que, al completar el despliegue del sistema a lo largo del país, SILSTECH logrará:',
        '• Reducir el 30% de accidentes viales.',
        '• Reducir notablemente los consumos de combustible, favoreciendo así al medioambiente.',
        '• Mejorar la trazabilidad del producto a lo largo de todo su despacho, reducir las situaciones inseguras, los faltantes y optimizar la logística de su despacho, logrando una disminución considerable en los tiempos inoperativos de su flota.',
        'TESTIMONIAL',
        '“Desde que implementamos el sistema integral de logística y seguridad SILS en nuestra flota de camiones de combustible, hemos reducido en un 20% los tiempos muertos de la flota por mantenimientos. Modernizamos el sistema de despacho de viajes, y como fruto de las constantes capacitaciones viales que ofrece el sistema para nuestros conductores, hemos disminuido nuestro índice de siniestros y mejorado la conducción, aportando un paso más a la seguridad del conductor y la de los demás vehículos, fortaleciendo nuestro compromiso con el medioambiente y la emisión de C02”.',
        ' ',
        'Marcelo Jorge Moyano',
        'Dirección Ejecutiva',
      ]
    }
  ]

  imageCompany: Images[] = [
    {
      title: 'Telemetría IOT',
      url: '/assets/images/amarillaGas.jpg',
      buttons: 'Experiencia Amarilla Gas',
      class: 'carousel-item active',
      modalOpen: 'open-telemetria',
      modalSubTitle: 'Experiencia Amarilla Gas',
      modalIcon: false,
      modalContent: [
        'Solución que ofrece sensores en tanques u otros equipos, permitiendo el procesamiento y análisis estadístico de información relevante.',
        'Sitio web: www.amarillagas.com',
        'Sector / Industria: Energía',
        'PERFIL DEL CLIENTE',
        'AMARILLA GAS es una empresa familiar cuyos orígenes se remontan a la década de los 60. Nace en la Provincia del Chaco, con el fin de abastecer al mercado de combustibles y otros ramos en general.Con el paso del tiempo se fue transformando en una empresa enfocada en el servicio y soluciones para la comercialización de combustibles limpios en toda la gama de sectores necesitados de una alternativa práctica, confiable y amigable con el medio ambiente: Gas licuado de petróleo(GLP)',
        'TAMAÑO DE LA EMPRESA',
        'AMARILLA GAS cuenta con 700 colaboradores, distribuidos en más de 27 puntos operativos comerciales en la República Argentina.',
        'DESAFÍO',
        'AMARILLA GAS buscaba consolidar la relación con sus clientes, los cuales requerían intervención con el control del abastecimiento en sus instalaciones y mejora integral del servicio de atención y aprovisionamiento a través de una logística precisa',
        'SOLUCIÓN',
        'Claro Argentina, junto con su socio tecnológico CUSAT, implementaron en AMARILLA GAS el servicio de Telemetría en todos sus tanques de gas a granel, con análisis estadísticos de información relevante de fácil comprensión.',
        'TELEMETRÍA',
        'Sistema de comunicación a distancia que permite recoger, procesar y transmitir información de un dispositivo electrónico a otro.Esto es posible mediante sensores que miden magnitudes físicas y químicas(ondas, fluidos, temperatura, vibración, presión, voltaje, velocidad, tiempo, entre otros).',
        'BENEFICIOS',
        'Gracias al servicio de Telemetría implementado, AMARILLA GAS ha mejorado el contacto con sus clientes, desde la tecnología aplicada en la operación diaria siendo una herramienta que permite generar un plus diferencial a la hora de evaluar los beneficios en las propuestas comerciales.',
        'TESTIMONIAL',
        '“La implementación del servicio de Telemetría de Claro Argentina resulta clave para la optimización y ampliación de nuestra logística, la generación de recargas de manera proactiva y la constante búsqueda de fidelización de nuestros clientes, a través de la identificación y solución de desvíos comunes, como la falta de suministro.Una empresa que tiene como combustible principal el GLP, el cual no es abastecido en forma fluida en tiempo y forma, termina teniendo trastornos operativos insalvables al momento del análisis de rendimientos y costos.Es por esto que la solución brindada por Claro Argentina nos permite saber de antemano lo que está sucediendo con el almacenaje del producto de nuestros clientes, para dar una respuesta rápida, administrando el combustible y despachando según su demanda. Así mismo, nos permite optimizar costos, ser eficientes en la entrega y aportar un valor agregado al servicio que le brindamos a nuestros clientes“.',
        ' ',
        'Guillermo Steffoni',
        'Referente Técnico'
      ]
    },
    {
      title: 'Monitores en Redes GPON',
      url: '/assets/images/monitoreoGPON.jpg',
      buttons: 'Experiencia Claro Argentina',
      class: 'carousel-item',
      modalOpen: 'open-redesgpon',
      modalSubTitle: 'Experiencia Claro Argentina',
      modalIcon: false,
      modalContent: [
        'Solución IoT de prevención de vandalismo sobre la red GPON, mediante sensores y conectividad NB-IoT, para evitar la pérdida del servicio a clientes.',
        'Sitio web: www.claro.com.ar',
        'Sector/Industria: Telecomunicaciones',
        'PERFIL DEL CLIENTE',
        'Dentro de la “Transformación Digital” nace el concepto de IoT - Internet de las Cosas - con el objetivo de identificar y gestionar activos u objetos por medio de equipos o sistemas automatizados, utilizando nuevas tecnologías y obteniendo un valor adicional tanto para el negocio como para el usuario final.',
        'Ante el dinámico y constante cambio evolutivo en los mercados, Claro Argentina consolida el programa de “Partners IoT”, que tiene por objetivo seleccionar desarrolladores IoT para potenciarlos bajo un esquema Win-Win.',
        'América Móvil, líder en servicios integrados de telecomunicaciones en Latinoamérica, es la empresa más grande a nivel mundial, excluyendo China e India, en términos de suscriptores móviles. Con el despliegue de su plataforma de comunicaciones de clase mundial permite ofrecer a sus clientes un portafolio de servicios de valor agregado y soluciones de comunicación mejoradas en 25 países de Latinoamérica, Estados Unidos y Europa Central y del Este.',
        'CUSAT es una empresa argentina especializada en diseñar y crear soluciones de IoT para transformar digitalmente negocios e industrias. Claro Argentina confía en su socio tecnológico CUSAT, como un facilitador de soluciones con vasta',
        'experiencia en el mercado.',
        'TAMAÑO DE LA EMPRESA',
        'Claro Argentina es subsidiaria de América Móvil, S.A.B. de C.V. BMV: AMX [NYSE: AMX]. [NASDAQ: AMOV] [LATIBEX: XAMXL], el proveedor líder de servicios de telecomunicaciones en Latinoamérica con operaciones en 18 países del continente americano.',
        'DESAFÍO',
        'Disponer de la detección de movimiento (acelerómetro) y ubicación en tiempo real de elementos pasivos de red (Cajas de acceso de FTTH / Cajas de empalmes de FO) susceptibles de robo.',
        'SOLUCIÓN',
        'Instalación de electrónica de muy bajo consumo en la comunicación (IoT) con un gestor/plataforma de recepción de eventos (Movimiento – Ubicación – Temperatura y otros).',
        'Claro Argentina implementó una solución de prevención de vandalismo sobre su red GPON, la cual incorpora sensores varios, tales como GPS, apertura de gabinetes, acelerómetro, etc. y conectividad NB-IoT (Narrow Band-IoT) a fin de detectar en tiempo real intrusiones no deseadas a la red de fibra y disparar acciones disuasivas evitando así el hecho vandálico que ocasiona la pérdida de servicio a nuestros clientes.',
        'Para minimizar los hurtos de estos elementos pasivos de la red, se optó por colocar dispositivos NB-IoT ensorizados, los cuales se activan inmediatamente al momento de la detección de un evento de movimiento brusco, lo que genera que el equipo técnico dé respuesta rápida ante un posible corte en el servicio.',
        'NB-IoT (Narrowband Internet of Things)',
        'Estándar de transmisión de datos diseñado para soportar la comunicación entre dispositivos simples, de bajo consumo de datos y gran autonomía, homologados en esta tecnología que permite conectarlos a Internet y así ser monitoreados y controlados desde cualquier lugar y a cualquier hora.',
        'BENEFICIOS',
        'Uno de los principales desafíos a resolver de CUSAT, fue desarrollar un dispositivo que funcionara con baterías, prescindiendo del acceso a la red eléctrica. Esto fue posible gracias al uso de la nueva red NB-IoT de Claro Argentina, que opera bajo los estándares de la 3GPP con el fin de soportar la comunicación de dispositivos IoT y asegurar una vida útil de las baterías hasta por 5 años. Gracias a esta implementación es posible identificar rápidamente un corte de servicio intencional de la red pasiva de GPON por robo o vandalismo para su rápida reparación. Además, permite establecer acciones para la detención en tránsito o posterior allanamiento en domicilios donde se ubiquen dichos elementos de red robados.',
        'TESTIMONIAL',
        '“La nueva red Narrow Band-IoT de Claro Argentina es una evolución en la era de la conectividad que permite conectar de manera más eficiente y con menores costos en dispositivos, sensores y objetos. Esta tecnología mejora la vida útil de las baterías, que pueden pasar a durar de 1 a 10 años y, además, gracias a las bajas frecuencias que utiliza, puede llegar a brindar cobertura en lugares de difícil acceso tales como segundos subsuelos”, aseguró Walter Nigolian. A su vez, Walter Nigolian remarcó: “Gracias a la implementación de esta tecnología en la solución de Monitoreo y Gestión de Activos en nuestra red, se logró obtener un mayor control de la red que ha permitido reducir hechos de vandalismo. También permitió desde el equipo técnico, dar una respuesta rápida y a la vez asegurar la confiabilidad, estabilidad y calidad del servicio. Desde Claro Argentina estamos trabajando en modelar esta solución para ofrecerla comercialmente a los clientes que deseen monitorear de manera más eficiente sus activos y así optimizar su negocio. Esperamos que, con el desarrollo en conjunto con el partner, pueda escalarse a otras verticales para su implementación”.',
        ' ',
        'Walter Nigolian',
        'Gerente de Servicio de valor Agregado - Claro'
      ]
    },
    {
      title: 'Logística Securizada',
      url: '/assets/images/logistica.jpg',
      buttons: 'Experiencia Silstech',
      class: 'carousel-item',
      modalIcon: false,
      modalOpen: 'open-logistica',
      modalSubTitle: 'Experiencia Silstech',
      modalContent: [
        'Comunicación M2M con altos niveles de seguridad para transmisión de video mobile en flotas de transporte.',
        'Sitio web: www.sils.tech',
        'Sector/Industria: Tecnología',
        'PERFIL DEL CLIENTE',
        'SILSTECH es una empresa tecnológica cordobesa que nació en 2017 para cubrir una necesidad del sector de transporte de combustibles. Basándose en los tres pilares fundamentales del sector (seguridad de la carga, seguridad vial y logística) creó el producto SILS, Sistema Integral de Logística y Seguridad para su aplicación en el transporte de combustibles en el país. SILS combina la sinergia del desarrollo de software y hardware, para ofrecer una solución mobile de primera línea a nivel mundial.',
        'TAMAÑO DE LA EMPRESA',
        'SILSTECH cuenta con 60 empleados, en diferentes áreas, entre estas, las más importantes son las de desarrollo de software, la de I+D y de posventa. Su central se encuentra en Córdoba, pero posee distribución a nivel país para su despliegue. Está en proceso de apertura de dos oficinas de representación, en México y Paraguay, países en donde ya se encuentra realizando pruebas piloto de sus productos en el sector de transporte de combustible.',
        'DESAFÍO',
        'Contar con un sistema de Gestión Integral para el Transporte de Combustibles, útil para todos los participantes de la cadena de distribución en el país, que permita mejorar la trazabilidad del producto, minimizar las pérdidas patrimoniales y mejorar la calidad de la conducción en el transporte.',
        'SOLUCIÓN',
        'Mediante la implementación del servicio de APN privado (Access Point Name) de Claro Argentina, SILSTECH ha logrado un canal de comunicación M2M (Machine to Machine) con altos niveles de seguridad para poder transmitir Video Mobile a lo largo de toda Argentina, desde los vehículos que recorren a diario las rutas directamente hasta sus servidores.',
        'APN PRIVADO (Access Point Name)',
        'Red privada construida sobre la red de Claro para el transporte de datos cuya convergencia produce la consecuente reducción en costos operativos y de inversión, flexibilidad y escalabilidad de la infraestructura de comunicaciones, altos niveles de seguridad, desempeño y confiabilidad.',
        'M2M (Machine to Machine)',
        'Solución de conectividad que permite administrar, monitorear y tener un control total de las líneas destinadas al intercambio de datos entre máquinas, diseñado para diversas necesidades como seguimiento vehicular, logística, sistemas de pago, monitoreo, telemétrica, cuidados de salud entre muchas otras.',
        'BENEFICIOS',
        'Se estima que, al completar el despliegue del sistema a lo largo del país, SILSTECH logrará:',
        '• Reducir el 30% de accidentes viales.',
        '• Reducir notablemente los consumos de combustible, favoreciendo así al medioambiente.',
        '• Mejorar la trazabilidad del producto a lo largo de todo su despacho, reducir las situaciones inseguras, los faltantes y optimizar la logística de su despacho, logrando una disminución considerable en los tiempos inoperativos de su flota.',
        'TESTIMONIAL',
        '“Desde que implementamos el sistema integral de logística y seguridad SILS en nuestra flota de camiones de combustible, hemos reducido en un 20% los tiempos muertos de la flota por mantenimientos. Modernizamos el sistema de despacho de viajes, y como fruto de las constantes capacitaciones viales que ofrece el sistema para nuestros conductores, hemos disminuido nuestro índice de siniestros y mejorado la conducción, aportando un paso más a la seguridad del conductor y la de los demás vehículos, fortaleciendo nuestro compromiso con el medioambiente y la emisión de C02”.',
        ' ',
        'Marcelo Jorge Moyano',
        'Dirección Ejecutiva',
      ]
    }
  ]

  accordionBussinesAnswer: Accordion[] = [
    {
      title: '¿Qué servicios ofrece Claro para negocios?',
      content: 'Claro ofrece una variedad de herramientas y recursos diseñados para mejorar la productividad y eficiencia empresarial. Esto incluye packs de internet adaptados a las necesidades de cada negocio, servicios de roaming para una conectividad global, soluciones IoT que permiten la automatización y optimización de procesos, y herramientas de gestion de actividades y monitoreo de activos para una operación más eficiente y transparente.'
    },
    {
      title: '¿Qué es el IoT y para qué sirve?',
      content: 'El internet en las cosas (IoT) es una red de dispositivos físicos conectados entre sí y a internet, capaces de recopilar y compartir datos. Su propósito principal es automatizar procesos, mejorar la eficiencia y crear experiencias más inteligentes para los usuarios.'
    },
    {
      title: '¿Comó activar el roamming?',
      content: 'Antes de viajar al extranjero y si planeas usar datos o internet en tu teléfono, es importante verificar que el servicio de roaming esté activo. Para hacerlo o activarlos,',
      titleList: 'Seguí estos pasos: ',
      list: [
        'En dispositivos iPhone: dirigite a Configuración o Ajustes, luego a Datos Celulares y seleccioná Opciones. Allí podrás activar el Roaming de Datos.',
        'En dispositivos Android: Accedé a Configuración o Ajustes, luego a Conexiones y Redes Móviles. Marcá la opción de Roaming o Itinerancia de Datos.'
      ]
    },
    {
      title: '¿Qué es la portabilidad?',
      content: 'La portabilidad  es el proceso que permite a los usuarios cambiar de operador de telefonía móvil sin necesidad de cambiar su número de teléfono. Es una opción que brinda libertad a los usuarios para elegir el proveedor de servicios que mejor se adapte a sus necesidades, sin perder su número de contacto. Al elegir Claro, tenés acceso a planes de internet diseñados para satisfacer las necesidades específicas de tu negocio'
    },
    {
      title: '¿Comó hacer llamadas por Wi-Fi?',
      content: 'Las llamadas de voz Wi-Fi  permiten hacer llamadas de voz desde Argentina o cualquier parte del mundo en la que te encuentres. Solo tenes que conectar tu smartphone a una red Wi-Fi y podés llamar a cualquier teléfono al precio de tu plan'
    }
  ]

  constructor() { }

  ngOnInit() {
    this.route.params.subscribe(params => this.viweService.page.set(params['route']));
  }

}