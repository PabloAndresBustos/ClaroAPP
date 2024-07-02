import { AfterViewInit, Component, OnInit, ViewChild, inject } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { Pages } from 'src/app/models/pages.models';
import { Items } from 'src/app/models/items.models';
import { ViewService } from 'src/app/services/viewService.service';
import { Accordion } from 'src/app/models/accordion.models';
import { IonMenu } from '@ionic/angular/standalone';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class HomePage implements OnInit{

  viewService = inject(ViewService);
  
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

  itemsList:Items[] = [
   {content: 'Planes para tu casa'},
   {content: 'Planes para tu celu'},
   {content: 'Packs de internet'},
   {content: 'Contenidos'},
   {content: 'Roaming para tu viaje'},
   {content: 'Ayuda'} 
  ]

  itemsFooter:Items[] = [
    {content: 'Botón de baja'},
    {content: 'Portal de denuncias'}
   ]

   movilidadList:Accordion[] = [
    {title: 'Movilidad', content: 'Plan para negocios', url: ''},
    {title: 'Movilidad', content: 'Plan para negocios', url: ''},
    {title: 'Movilidad', content: 'Plan para negocios', url: ''},
    {title: 'Movilidad', content: 'Plan para negocios', url: ''},
    {title: 'Movilidad', content: 'Plan para negocios', url: ''},
    {title: 'Movilidad', content: 'Plan para negocios', url: ''},
    {title: 'Movilidad', content: 'Plan para negocios', url: ''},
   ]

  ngOnInit() {
    
  }
}
