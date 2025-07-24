// Rutas de todas las paginas de la aplicacion 
import { Routes } from '@angular/router';
import { IntroGuard } from './guards/intro.guard';
import { loginGuard } from './guards/login.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'menu/home',
    pathMatch: 'full',
  },
  {
    path: 'intro',
    loadComponent: () => import('./intro/intro.page').then( m => m.IntroPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'menu',
    loadComponent: () => import('./menu/menu.page').then( m => m.MenuPage),
    children:[
      {
        path: 'home',
        loadComponent: () => import('./home/home.page').then((m) => m.HomePage), canActivate: [ loginGuard, IntroGuard ]
     },
    ]
    
  },
  {
    path: 'songs-modal-page',
    loadComponent: () => import('./songs-modal-page.page.html/songs-modal-page.page').then( m => m.SongsModalPagePage)
  },
  {
    path: 'artis-modal',
    loadComponent: () => import('./artis-modal/artis-modal.page').then( m => m.ArtisModalPage)
  },
  {
    path: 'artis-modal',
    loadComponent: () => import('./artis-modal/artis-modal.page').then( m => m.ArtisModalPage)
  },
];
