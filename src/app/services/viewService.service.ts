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
 loginAlert = signal<boolean>(false);
 login = signal<boolean>(false);
 userName = signal<string>('');
 //logoUrl = signal<string>('');
 
 changeIconTitle(iconName:string){
  this.headerIcon.set(iconName);
 }

 constructor() { }
}
