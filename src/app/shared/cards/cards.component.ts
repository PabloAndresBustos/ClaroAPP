import { Component, inject, input, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { 
        IonCard, 
        IonContent, 
        IonCardSubtitle, 
        IonCardHeader, 
        IonCardTitle, 
        IonButton, 
        IonCardContent, 
        IonInput, 
        IonTitle,
      } from '@ionic/angular/standalone';
import { ViewService } from 'src/app/services/viewService.service';

@Component({
  selector: 'app-cards',
  standalone: true,
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  imports:[
            ReactiveFormsModule,
            IonContent, 
            IonCard, 
            IonCardHeader, 
            IonCardTitle, 
            IonCardSubtitle, 
            IonCardContent, 
            IonButton, 
            IonInput,
            IonTitle]
})
export class CardsComponent{

  viewService = inject(ViewService);

  imageUrl = input<string>();
  title = input.required<string>();
  showInput = input<boolean>(false);
  withImage = input<boolean>(false);
  inputPlaceholder = input<string>();
  subtitle = input.required<string>();
  buttonText = input.required<string>();
  inputText = input.required<boolean>();
  contentTitle = input.required<string>();
  
  form = new FormGroup({
    number: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(10)])
  })

  async submit(){
    if(this.form.valid){
      /* Esto es decorativo */
      const loading = await this.viewService.loading();
      loading.present();
      setTimeout(() => {
        loading.dismiss();
        this.viewService.toastAlert({
          message: 'EN BREVE NOS CONTACTAREMOS',
          duration: 2500,
          color: 'primary',
          position: 'middle'
        })
      }, 2500)
    }
  }
  
  enableButton(){
    if(this.inputText()){
      return this.form.invalid 
    } else {
      return this.form.valid
    }
  }
}
