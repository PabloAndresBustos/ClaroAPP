import { routes } from './app/app.routes';
import { enableProdMode } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { bootstrapApplication } from '@angular/platform-browser';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';


bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideAnimationsAsync(), 
    provideFirebaseApp(
      () => initializeApp(environment.firebaseConfig)
      ), 
      provideAuth(
        () => getAuth()
      ),
      provideFirestore(
        () => getFirestore()
      ),
  ],
});

if (environment.production) {
  enableProdMode();
}

register();

