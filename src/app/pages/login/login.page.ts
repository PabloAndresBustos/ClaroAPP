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
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  })

  async submit(){
    if(this.form.valid){
      
      const loading = await this.viewService.loading();
      await loading.present();

      this.firebase.singIn(this.form.value as User).then(
        res => {
          console.log(res)
          this.router.navigateByUrl('/mi-claro');
        }
      ).catch(
        err => {
          console.log(err)
          this.viewService.toastAlert({
            message: 'Error de usuario o contraseña, verifica tus credenciales',
            duration: 1500,
            icon: 'alert-cicle-outline',
            color: 'primary',
            position: 'middle',
          })
          this.router.navigateByUrl('home/login');
        }
      ).finally(
        () => {
          loading.dismiss()
        }
      )
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

  ngOnInit() {
    this.viewService.ChangeAppButton();
    this.viewService.isLoginPage.set(false);
  }

  ngOnDestroy() {
    this.viewService.ChangeAppButton();
    this.viewService.isLoginPage.set(true);
  }

}
