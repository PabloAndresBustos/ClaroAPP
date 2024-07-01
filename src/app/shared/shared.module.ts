import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CardsComponent } from './cards/cards.component';
import { CartComponent } from './cart/cart.component';
import { FooterComponent } from './footer/footer.component';
import { AccordionComponent } from './accordion/accordion.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { ItemsComponent } from './items/items.component';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonToolbar, IonHeader, IonTitle, IonCard, IonFab, IonContent, IonFabButton, IonFabList, IonLabel, IonMenu, IonButton, IonItem, IonMenuToggle, IonRouterOutlet, IonFooter, IonIcon, IonToggle } from '@ionic/angular/standalone';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    CardsComponent,
    CartComponent,
    AccordionComponent,
    CarrouselComponent,
    ItemsComponent,
    RouterLink,
    FormsModule,
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
    IonToggle
  ],
  exports:[
    CommonModule,
    HeaderComponent,
    FooterComponent,
    CardsComponent,
    CartComponent,
    AccordionComponent,
    CarrouselComponent,
    ItemsComponent,
    RouterLink,
    FormsModule,
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
    IonToggle
  ]
})
export class SharedModule { }
