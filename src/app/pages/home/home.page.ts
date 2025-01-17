import { Pages } from 'src/app/models/pages.models';
import { Component, inject, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ViewService } from 'src/app/services/viewService.service';
import { Accordion } from 'src/app/models/accordion.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [ SharedModule ]
})
export class HomePage{

  viewService = inject(ViewService);
  alertMessage:string = '';
  currentRouter = inject(Router);

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

  isDarkSelected(){
    return this.viewService.isDarkSelected();
  }

  isFooterVisible(){
    return this.viewService.isFooterVisible();
  }

  isLoginPage(){
    return this.viewService.isLoginPage();
  }
  
  pages:Pages[] = [
    {title: 'Empresas', url: 'empresas', icon: 'business-outline'},
    {title: 'Negocios', url: 'negocios', icon: 'bag-handle-outline'},
    {title: 'Personas', url: 'personas', icon: 'person-outline'},
    {title: 'Contacto', url: '/contacto', icon: 'call-outline'}
  ]

  itemsPeoples:Accordion[] = [
   {content: 'Planes para tu casa'},
   {content: 'Planes para tu celu'},
   {content: 'Packs de internet'},
   {content: 'Contenidos'},
   {content: 'Roaming para tu viaje'},
   {content: 'Ayuda'} 
  ]

  itemsBussinesServices:Accordion[] = [
    {content: 'Planes para negocios'},
    {content: 'Packs de internet'},
    {content: 'Recargas'},
    {content: 'Internet móvil'},
    {content: 'Roaming'},
    {content: 'Llamadas para WiFi'},
    {content: 'Portabilidad'},
  ]

  itemWebPresence:Accordion[] = [
    {content: 'Internet + telefonía'}
  ]

  itemIot:Accordion[] = [
    {content: 'M2M gestionado'},
    {content: 'LTE-M y NB'},
    {content: 'Claro IoT'},
    {content: 'Monitoreo de Activos'},
    {content: 'Gestión de Logística Claro'},
    {content: 'Casos de éxito'}
  ]

  itemsInsfrasctucture:Accordion[] = [
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

  intensInternetCompany:Accordion[] = [
    {content: 'Internet + telefonía'},
    {content: 'Internet corporativo'}
  ]

  itemsMobilCompay:Accordion[] = [
    {content: 'Planes para empresas'},
    {content: 'Packs de internet'},
    {content: 'Recargas'},
    {content: 'Internet móvil'},
    {content: 'Roaming'},
    {content: 'Llamadas para WiFi'},
    {content: 'Portabilidad'},
  ]

  itemsDataCompay:Accordion[] = [
    {content: 'Red privada virtual multiservicios'},
    {content: 'LAN y WAN administrada'},
    {content: 'LAN to WAN'},
    {content: 'SD WAN'},
  ]

  itemsSecurityCompay:Accordion[] = [
    {content: 'Seguridad administrada'},
    {content: 'Video vigilacia IP'},
    {content: 'Seguridad avanzada en Data Center'},
    {content: 'MDM'},
  ]

  itemsVoiceCompay:Accordion[] = [
    {content: 'Tramas de telefonía'},
    {content: 'Red inteligente (0800-0810)'},
    {content: 'Central gerenciada IP'},
  ]

  itemsDataCenterCompay:Accordion[] = [
    {content: 'Servicos administrados de Data Center'},
    {content: 'Insfraestructura de Data Center'},
    {content: 'Almacenamiento de respaldo de información'},
    {content: 'Hosting dedicado'}
  ]

  itemsIotCompay:Accordion[] = [
    {content: 'M2M gestionado'},
    {content: 'LTE-M y NB'},
    {content: 'Claro IoT'},
    {content: 'Monitoreo de Activos'},
    {content: 'Gestión de Logística Claro'},
    {content: 'Casos de éxito'}
  ]

  itemsFooter:Accordion[] = [
    {content: 'Botón de baja'},
    {content: 'Portal de denuncias'}
  ]
}