import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { IonText } from "@ionic/angular/standalone";
import { Router } from '@angular/router';
import { ViewService } from 'src/app/services/viewService.service';
import { FirebaseService } from 'src/app/services/firebase.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonText, SharedModule]
})
export class LoginPage implements OnInit, OnDestroy {

  showHidePassword = signal<boolean>(true);
  type = signal<string>('password');
  router = inject(Router);
  viewService = inject(ViewService);
  firebase = inject(FirebaseService);

  
  form = new FormGroup({
    uid: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  })

  async submit(){
    if(this.form.valid){
      
      const loading = await this.viewService.loading();
      await loading.present();

      this.firebase.singIn(this.form.value as User).then(
        res => {
          this.viewService.userName.set(res.user.displayName);
          this.getUserData(res.user.uid, res.user.displayName);
        }
      ).catch(
        err => {
          this.viewService.toastAlert({
            message: 'Error de usuario o contraseña, verifica tus credenciales',
            duration: 1500,
            icon: 'alert-cicle-outline',
            color: 'primary',
            position: 'middle',
            layout: 'stacked'
          })
        }
      ).finally(
        () => {
          loading.dismiss()
        }
      )
    }
  }

  getUserData(uid:string, userName:string){

    if(this.form.valid){
      let path = `users/${uid}`;

      this.firebase.getDocument(path).then(user => {
        this.firebase.saveLocalStorage('user', user);
        this.router.navigateByUrl('/mi-claro');

        this.viewService.toastAlert({
          message: `Bienvenido ${userName}`,
          duration: 1500,
          icon: 'person-cicle-outline',
          color: 'primary',
          position: 'middle',
          layout: 'stacked'
        })

      }).catch(()=> {

        this.viewService.toastAlert({
          message: 'Usuario no encontrado en la Base de datos',
          duration: 1500,
          icon: 'alert-cicle-outline',
          color: 'primary',
          position: 'middle',
          layout: 'stacked'
        })

        this.router.navigateByUrl('home/login');
      }).finally(()=> {
        this.form.reset();
      })
    }
  }

  hideShow(){
    this.showHidePassword.update(value => value =!value);

    if(this.showHidePassword()) this.type.set('password')
      else this.type.set('text')
  }

  forgotPassword(){
    this.router.navigateByUrl('home/forgot-password');
  }

  singUp(){
    this.router.navigateByUrl('home/sing-up');
  }

  ngOnInit() {
    this.viewService.ChangeAppButton();
    this.viewService.isLoginPage.set(false);
  }

  ngOnDestroy() {
    this.viewService.ChangeAppButton();
    this.viewService.isLoginPage.set(true);
  }

}
