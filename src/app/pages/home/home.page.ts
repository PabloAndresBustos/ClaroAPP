import { Router } from '@angular/router';
import { Pages } from 'src/app/models/pages.models';
import { Items } from 'src/app/models/items.models';
import { Component, OnInit, inject } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ViewService } from 'src/app/services/viewService.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class HomePage implements OnInit{

  viewService = inject(ViewService);
  router = inject(Router);
  alertMessage:string = '';
 
  onWillOpen(){
    this.viewService.buttonPosition.set('start')
  }

  onDidOpen(){
    this.viewService.buttonPosition.set('start')
  }

  onWillClose(){
    this.viewService.buttonPosition.set('end')
  }

  onDidClose(){
    this.viewService.buttonPosition.set('end')
  }

  buttonPosition(){
    return this.viewService.buttonPosition();
  }

  changeTitleIcon(iconName:string){
    return this.viewService.changeIconTitle(iconName);
  }

  page(){
    return this.viewService.page();
  }
  
  constructor() { }
  
  pages:Pages[] = [
    {title: 'Empresas', url: 'empresas', icon: 'business-outline'},
    {title: 'Negocios', url: 'negocios', icon: 'bag-handle-outline'},
    {title: 'Personas', url: 'personas', icon: 'person-outline'},
    {title: 'Contacto', url: '/contacto', icon: 'call-outline'}
  ]

  itemsPeoples:Items[] = [
   {content: 'Planes para tu casa'},
   {content: 'Planes para tu celu'},
   {content: 'Packs de internet'},
   {content: 'Contenidos'},
   {content: 'Roaming para tu viaje'},
   {content: 'Ayuda'} 
  ]

  itemsBussinesServices:Items[] = [
    {content: 'Planes para negocios'},
    {content: 'Packs de internet'},
    {content: 'Recargas'},
    {content: 'Internet móvil'},
    {content: 'Roaming'},
    {content: 'Llamadas para WiFi'},
    {content: 'Portabilidad'},
  ]

  itemWebPresence:Items[] = [
    {content: 'Internet + telefonía'}
  ]

  itemIot:Items[] = [
    {content: 'M2M gestionado'},
    {content: 'LTE-M y NB'},
    {content: 'Claro IoT'},
    {content: 'Monitoreo de Activos'},
    {content: 'Gestión de Logística Claro'},
    {content: 'Casos de éxito'}
  ]

  itemsInsfrasctucture:Items[] = [
    {content: 'Claro Cloud Empresarial'},
    {content: 'Nube Pública'},
    {content: 'Presencia web'},
    {content: 'Claro drive Negocio'},
    {content: 'Correo empresas'},
    {content: 'Google Workspace'},
    {content: 'Claro backup'},
    {content: 'Soluciones Knox'}, 
    {content: 'Seguridad Empresas'},
    {content: 'MDM Workspace ONE'}, 
  ]

  intensInternetCompany:Items[] = [
    {content: 'Internet + telefonía'},
    {content: 'Internet corporativo'}
  ]

  itemsMobilCompay:Items[] = [
    {content: 'Planes para empresas'},
    {content: 'Packs de internet'},
    {content: 'Recargas'},
    {content: 'Internet móvil'},
    {content: 'Roaming'},
    {content: 'Llamadas para WiFi'},
    {content: 'Portabilidad'},
  ]

  itemsDataCompay:Items[] = [
    {content: 'Red privada virtual multiservicios'},
    {content: 'LAN y WAN administrada'},
    {content: 'LAN to WAN'},
    {content: 'SD WAN'},
  ]

  itemsSecurityCompay:Items[] = [
    {content: 'Seguridad administrada'},
    {content: 'Video vigilacia IP'},
    {content: 'Seguridad avanzada en Data Center'},
    {content: 'MDM'},
  ]

  itemsVoiceCompay:Items[] = [
    {content: 'Tramas de telefonía'},
    {content: 'Red inteligente (0800-0810)'},
    {content: 'Central gerenciada IP'},
  ]

  itemsDataCenterCompay:Items[] = [
    {content: 'Servicos administrados de Data Center'},
    {content: 'Insfraestructura de Data Center'},
    {content: 'Almacenamiento de respaldo de información'},
    {content: 'Hosting dedicado'}
  ]

  itemsIotCompay:Items[] = [
    {content: 'M2M gestionado'},
    {content: 'LTE-M y NB'},
    {content: 'Claro IoT'},
    {content: 'Monitoreo de Activos'},
    {content: 'Gestión de Logística Claro'},
    {content: 'Casos de éxito'}
  ]

  itemsFooter:Items[] = [
    {content: 'Botón de baja'},
    {content: 'Portal de denuncias'}
   ]



  ngOnInit() {
    
  }
}
