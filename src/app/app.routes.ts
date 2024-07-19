import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home/personas',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage),
    children: [
      {
        path: ':route',
        loadComponent: () => import('./pages/home/bussines/bussines.page').then( m => m.BussinesPage),
        children: [
         {
          path: ':direction',
          loadComponent: () => import('./pages/home/services/services.page').then(m => m.ServicesPage),
         }
        ]
      },
    ]
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage),
    children: [
      {
        path: 'mi-claro',
        loadComponent: () => import('./pages/mi-claro/mi-claro.page').then( m => m.MiClaroPage)
      },
      {
        path: 'claro-video',
        loadComponent: () => import('./pages/claro-video/claro-video.page').then( m => m.ClaroVideoPage)
      },
      {
        path: 'claro-tienda',
        loadComponent: () => import('./pages/claro-tienda/claro-tienda.page').then( m => m.ClaroTiendaPage)
      },
      {
        path: 'claro-musica',
        loadComponent: () => import('./pages/claro-musica/claro-musica.page').then( m => m.ClaroMusicaPage)
      },
      {
        path: 'claro-pay',
        loadComponent: () => import('./pages/claro-pay/claro-pay.page').then( m => m.ClaroPayPage)
      },
      {
        path: 'forgot-password',
        loadComponent: () => import('./pages/login/forgot-password/forgot-password.page').then( m => m.ForgotPasswordPage)
      },
    ]
  },
];
