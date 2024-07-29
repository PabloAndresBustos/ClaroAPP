import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IonText } from '@ionic/angular/standalone';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.page.html',
  styleUrls: ['./sing-up.page.scss'],
  standalone: true,
  imports: [SharedModule, IonText]
})
export class SingUpPage{

  showHidePassword = signal<boolean>(true);
  type = signal<string>('password');

  form = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required]),
    number: new FormControl('', [Validators.required, Validators.maxLength(10)])
  })

  hideShow(){
    this.showHidePassword.update(value => value =!value);

    if(this.showHidePassword()) this.type.set('password')
      else this.type.set('text')
  }

  submit(){
    console.log('test')
  }

}
