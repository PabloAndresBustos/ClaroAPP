import { NgModule } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { ModalComponent } from './modal/modal.component';
import { ItemsComponent } from './items/items.component';
import { CardsComponent } from './cards/cards.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AccordionComponent } from './accordion/accordion.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { 
        IonToolbar, 
        IonHeader, 
        IonTitle, 
        IonCard, 
        IonFab, 
        IonContent, 
        IonFabButton, 
        IonFabList, 
        IonLabel, 
        IonMenu, 
        IonButton, 
        IonItem, 
        IonMenuToggle, 
        IonRouterOutlet, 
        IonFooter, 
        IonIcon, 
        IonToggle, 
        IonAlert,
        IonList,
        IonListHeader,
        IonApp,
        IonInput,
        IonGrid} from '@ionic/angular/standalone';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderComponent,
    ModalComponent,
    FooterComponent,
    CardsComponent,
    CartComponent,
    AccordionComponent,
    CarrouselComponent,
    ItemsComponent,
    RouterLink,
    ReactiveFormsModule,
    FormsModule,
    IonApp,
    IonRouterOutlet,
    IonList,
    IonInput,
    IonGrid,
    IonListHeader,
    IonHeader,
    IonIcon,
    IonTitle,
    IonToolbar,
    IonCard,
    IonFab,
    IonFabButton,
    IonFabList,
    IonContent,
    IonHeader,
    IonToolbar,
    IonLabel,
    IonMenu,
    IonButton,
    IonItem,
    IonMenuToggle,
    IonFooter,
    IonRouterOutlet,
    IonToggle,
    IonAlert
  ],
  exports:[
    CommonModule,
    HeaderComponent,
    ModalComponent,
    FooterComponent,
    CardsComponent,
    CartComponent,
    AccordionComponent,
    CarrouselComponent,
    ItemsComponent,
    RouterLink,
    ReactiveFormsModule,
    FormsModule,
    IonApp,
    IonRouterOutlet,
    IonList,
    IonInput,
    IonGrid,
    IonListHeader,
    IonHeader,
    IonIcon,
    IonTitle,
    IonToolbar,
    IonCard,
    IonFab,
    IonFabButton,
    IonFabList,
    IonContent,
    IonHeader,
    IonToolbar,
    IonLabel,
    IonMenu,
    IonButton,
    IonItem,
    IonMenuToggle,
    IonFooter,
    IonRouterOutlet,
    IonToggle,
    IonAlert
  ]
})
export class SharedModule { }
