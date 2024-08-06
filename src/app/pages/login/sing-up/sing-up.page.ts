import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonText } from '@ionic/angular/standalone';
import { User } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { ViewService } from 'src/app/services/viewService.service';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.page.html',
  styleUrls: ['./sing-up.page.scss'],
  standalone: true,
  imports: [SharedModule, IonText]
})
export class SingUpPage{

  viewService = inject(ViewService);
  firebase = inject(FirebaseService);
  router = inject(Router);

  showHidePassword = signal<boolean>(true);
  type = signal<string>('password');

  form = new FormGroup({
    uid: new FormControl(''),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required])
  })

  hideShow(){
    this.showHidePassword.update(value => value =!value);

    if(this.showHidePassword()) this.type.set('password')
      else this.type.set('text')
  }

  async submit(){

    if(this.form.valid){
      const loading = await this.viewService.loading();
      loading.present();
                  
      this.firebase.singUp(this.form.value as User).then( 

        async res => {
          await this.firebase.updateUser(this.form.value.name);
          let userId = res.user.uid;
          this.form.controls.uid.setValue(userId);
          this.addUserData(userId);
          this.viewService.userName.set(res.user.displayName);
        }

      ).catch(err => {

        this.viewService.toastAlert({
          message: 'Verifica tus credenciales',
          duration: 1500,
          icon: 'alert-cicle-outline',
          color: 'primary',
          position: 'middle',
          layout: 'stacked'
        })

      }).finally(()=>{

        loading.dismiss();
      
      })
  
    }

  }

  async addUserData(uid:string){
    if(this.form.valid){

      let path = `users/${uid}`;
      delete this.form.value.password;

      this.firebase.addDocument(path, this.form.value).then(async res => {
        this.firebase.saveLocalStorage('user', this.form.value);
        this.router.navigateByUrl('/mi-claro');

      }).catch(err => {

        this.viewService.toastAlert({
          message: 'Registro completado correctamente',
          duration: 1500,
          icon: 'alert-cicle-outline',
          color: 'primary',
          position: 'middle',
          layout: 'stacked'
        })

      }).finally(() => {

        this.form.reset();

      })
    }
  }

}
