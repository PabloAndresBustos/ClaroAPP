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

  submit(){
    if(this.form.valid){
      this.firebase.singIn(this.form.value as User).then(res => console.log(res));
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