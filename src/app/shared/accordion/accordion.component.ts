import { RouterLink } from '@angular/router';
import { ModalComponent } from '../modal/modal.component';
import { Accordion } from 'src/app/models/accordion.models';
import { Component, inject, input } from '@angular/core';
import { 
        IonContent, 
        IonCardTitle, 
        IonButton, 
        IonCardSubtitle, 
        IonAccordionGroup, 
        IonAccordion, 
        IonLabel, 
        IonItem, 
        IonModal, 
        IonTitle, 
        IonToolbar, 
        IonFooter, 
        IonIcon} from '@ionic/angular/standalone';
import { ItemsComponent } from '../items/items.component';
import { ViewService } from 'src/app/services/viewService.service';


@Component({
  selector: 'app-accordion',
  standalone: true,
  templateUrl: './accordion.component.html',
  imports: [
    IonIcon, 
    IonFooter, 
    IonToolbar, 
    IonTitle,
    IonItem,
    IonLabel,
    IonAccordion,
    IonAccordionGroup,
    IonCardSubtitle,
    IonButton,
    IonCardTitle,
    IonContent,
    IonModal,
    ModalComponent,
    ItemsComponent,
    RouterLink,
  ]
})
export class AccordionComponent{
    
  viewService = inject(ViewService);
      
  link = input<string>();
  color = input<string>();
  title = input<string>();
  router = input<string>();
  subtitle = input<string>();
  whithList = input<boolean>();
  buttonText = input<string>();
  isModal = input<boolean>(false);
  titleColor = input<string>('primary');
  accordionContentList = input<Accordion[]>();
  style = input<string>('');
  
  changeHeaderButton(){
    this.viewService.headerButton.update((value) => !value)
  }
}
