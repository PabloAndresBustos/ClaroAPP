import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewService {

  selectedTheme = false;
  page = signal<string>('');
  userName = signal<string>('');
  alertOpen = signal<boolean>(false);
  subPage = signal<string>('moviles');
  loginAlert = signal<boolean>(false);
  headerButton = signal<boolean>(false);
  loginRecovery = signal<boolean>(false);
  buttonPosition = signal<string>('end');
  isDarkSelected = signal<boolean>(false);
  headerIcon = signal<string>('person-outline'); 
  //login = signal<boolean>(false);
  //logoUrl = signal<string>('');
  
  
  changeIconTitle(iconName: string) {
    this.headerIcon.set(iconName);
  }

  ChangeAppButton(){
    this.loginRecovery.update(value => value = !value)
    this.headerButton.update(value => value = !value)
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
}