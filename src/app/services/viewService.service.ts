import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewService {

 headerIcon = signal<string>('person-outline');
 page = signal<string>('');
 buttonPosition = signal<string>('end');
 alertOpen = signal<boolean>(false);
 
 changeIconTitle(iconName:string){
  this.headerIcon.set(iconName);
 }

 constructor() { }
}
