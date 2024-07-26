import { routes } from './app/app.routes';
import { enableProdMode, importProvidersFrom } from '@angular/core';
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

if (environment.production) {
  enableProdMode();
}

register();



bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideAnimationsAsync(), 
    provideFirebaseApp(
      () => initializeApp(
        {"projectId":"claro-app-a57a4",
         "appId":"1:95517353463:web:a8f08ba1c4404cccac7af2",
         "storageBucket":"claro-app-a57a4.appspot.com",
         "apiKey":"AIzaSyBXetp1Mto4RPhzpeJXy9OIM_5zT6DxyYw",
         "authDomain":"claro-app-a57a4.firebaseapp.com",
         "messagingSenderId":"95517353463"}
        )
      ), 
      provideAuth(
        () => getAuth()
      ),
      provideFirestore(
        () => getFirestore()
      ),
  ],
});
