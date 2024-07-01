import { Injectable, signal } from '@angular/core';
import { IonMenu } from '@ionic/angular/standalone';


@Injectable({
  providedIn: 'root'
})
export class ViewService {

 headerIcon = signal<string>('person-outline');
 page = signal<string>('');
 buttonPosition = signal<string>('end');
 currentMenuStatus = signal<boolean>(false);

 changeIconTitle(iconName:string){
  this.headerIcon.set(iconName);
 }

 menuStatus(menu:IonMenu){
  menu.isOpen().then(open => {
    open ? 
      this.buttonPosition.set('end') : 
      this.buttonPosition.set('start');
  })
 }

 constructor() { }
}
