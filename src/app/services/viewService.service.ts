import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewService {

 headerIcon = signal<string>('person-outline');
 page = signal<string>('');
 subPage = signal<string>('moviles');
 buttonPosition = signal<string>('end');
 alertOpen = signal<boolean>(false);
 login = signal<boolean>(false);
 
 changeIconTitle(iconName:string){
  this.headerIcon.set(iconName);
 }

 constructor() { }
}
