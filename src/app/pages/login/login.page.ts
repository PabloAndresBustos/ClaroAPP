import { Component, input, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { IonText } from "@ionic/angular/standalone";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonText, SharedModule, RouterLink]
})
export class LoginPage implements OnInit {

  showHidePassword = signal<boolean>(true);
  type = signal<string>('password');
  router = input<string>();
  
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  })

  hideShow(){
    this.showHidePassword.update(value => value =!value);

    if(this.showHidePassword()) this.type.set('password')
      else this.type.set('text')
  }

  submit(){
    console.log(this.form.value);
  }

  constructor() { }

  ngOnInit() {
  }

}