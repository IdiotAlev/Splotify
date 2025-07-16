import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Injectable({
  providedIn: 'root'
})

export class loginGuard implements CanActivate{
  constructor(private storageService: StorageService) {

  }
  async canActivate() {
    // Validar si el usuario está logueado
    const isLoggedIn = await this.storageService.get('user');
    console.log('User logged in:', isLoggedIn);
    
    // If the user is not logged in, redirecciona a la página de inicio de sesión
    if (!isLoggedIn) {
      return false; 
    }else{
      return true; // permite el acceso a la ruta
    }
  }
};