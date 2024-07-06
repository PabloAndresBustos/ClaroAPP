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

  alertOpen(){
    if(this.viewService.login()){
      this.alertMessage = "App's disponibles en tu cuenta";
    }else{
      this.alertMessage = "Inicia sesion y disfruta las Apps";
    }
    return this.viewService.alertOpen();
  }

  logginAlert(){
    return this.viewService.loginAlert();
  }
  
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

  buttonAlert(){
    if(this.viewService.login()){
      return this.alertButtons;
    }else{
      return this.loginButton;
    }
  }

  alertButtons = [
    {
      text: 'Mi Claro',
      role: 'confirm',
      handler: () => {
        this.router.navigate(['mi-claro']);
      },
    },
    {
      text: 'Claro Video',
      role: 'confirm',
      handler: () => {
        this.router.navigate(['claro-video']);
      }
    },
    {
      text: 'Claro Musica',
      role: 'confirm',
      handler: () => {
        this.router.navigate(['claro-musica']);
      }
    },
    {
      text: 'Claro Tienda',
      role: 'confirm',
      handler: () => {
        this.router.navigate(['claro-tienda']);
      }
    },
    {
      text: 'Cerrar Sesión',
      role: 'confirm',
      handler: () => {
        this.viewService.login.set(false);
        this.viewService.userName.set('Ingresar');
        this.router.navigate(['/']);
      }
    },
  ]

  loginButton = [
    {
      text: 'Iniciar sesion',
      role: 'confirm',
      handler: () => {
        this.viewService.loginAlert.update(value => value = !value);
      }
    }
  ]

  buttonLogin = [
    {
      text: 'Iniciar sesion',
      role: 'confirm',
      handler: () => {
        this.viewService.login.set(true);
        this.viewService.userName.set('Test')
      }
    }
  ]
  
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
    {content: 'Internet + telefonía'}, 
  ]

  itemsBussinesCloud:Items[] = [

  ]

  itemsFooter:Items[] = [
    {content: 'Botón de baja'},
    {content: 'Portal de denuncias'}
   ]



  ngOnInit() {
    
  }
}
