import { inject, Injectable, signal } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { Keyboard } from '@capacitor/keyboard';
import { LoadingController, ToastController, ToastOptions } from '@ionic/angular/standalone';

@Injectable({
  providedIn: 'root'
})
export class ViewService {

  loadingCtrl = inject(LoadingController);
  toastCtrl = inject(ToastController);

  selectedTheme = false;
  page = signal<string>('');
  userName = signal<string>('');
  alertOpen = signal<boolean>(false);
  isLoginPage = signal<boolean>(true);
  subPage = signal<string>('moviles');
  loginAlert = signal<boolean>(false);
  headerButton = signal<boolean>(false);
  loginRecovery = signal<boolean>(false);
  buttonPosition = signal<string>('end');
  isDarkSelected = signal<boolean>(false);
  isFooterVisible = signal<boolean>(true);
  headerIcon = signal<string>('person-outline');
  //login = signal<boolean>(false);
  //logoUrl = signal<string>('');
  
  
  changeIconTitle(iconName: string) {
    this.headerIcon.set(iconName);
  }

  ChangeAppButton(){
    this.loginRecovery.update(value => value = !value);
    this.headerButton.update(value => value = !value);
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
    this.isDarkSelected.update(value => value = !value);
  }

  chageTheme() {
    const preferTheme = window.matchMedia('(prefers-color-scheme: dark)');
    this.initialTheme(preferTheme.matches);
    preferTheme.addEventListener('change', (mediaQuery) => {
      this.initialTheme(mediaQuery.matches);
    });
  }
  /* fin de seleccion de Theme */

  /* Cuando el teclado es visiible el footer no */

  isKeyboard(){
    if(Capacitor.isNativePlatform()){
      Keyboard.addListener('keyboardWillShow', () => this.isFooterVisible.set(false));
      Keyboard.addListener('keyboardDidShow', () => this.isFooterVisible.set(false));
      Keyboard.addListener('keyboardWillHide', () => this.isFooterVisible.set(true));
      Keyboard.addListener('keyboardDidHide', () => this.isFooterVisible.set(true));
    }
  }

  /* Fin de cambio de vista con el footer */

  /* Spinner Loadin */
  loading(){
    return this.loadingCtrl.create({spinner: 'bubbles'});
  }
  /* Fin Spinner Loading */

  /* Toast Alerts */
  async toastAlert(opts?: ToastOptions){
    const toast = await this.toastCtrl.create(opts);
    toast.present();
  }
  /* Fin de Toast Alerts */
}