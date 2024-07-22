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
  //login = signal<boolean>(false);
  userName = signal<string>('');
  selectedTheme = false;
  isDarkSelected = signal<boolean>(false);
  //logoUrl = signal<string>('');
  loginRecovery = signal<boolean>(false);

  changeIconTitle(iconName: string) {
    this.headerIcon.set(iconName);
  }

  ChangeAppButton(){
    this.loginRecovery.update(value => value = !value)
  }

  /* Seleccion de Theme */
  initialTheme(isDark: boolean) {
    this.selectedTheme = isDark;
    this.themeStatus(isDark);
  }

  themeStatus(shouldAdd: boolean) {
    document.documentElement.classList.toggle('ion-palette-dark', shouldAdd);
  }

  toggleChange(event: any) {
    this.themeStatus(event.detail.checked);
    console.log(this.isDarkSelected())
    this.isDarkSelected.update(value => value = !value);
    console.log(this.isDarkSelected())
  }

  chageTheme() {
    const preferTheme = window.matchMedia('(prefers-color-scheme: dark)');
    this.initialTheme(preferTheme.matches);
    preferTheme.addEventListener('change', (mediaQuery) => {
      this.initialTheme(mediaQuery.matches);
    });
  }
  /* fin de seleccion de Theme */

  constructor() { }
}
