import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})


export class IntroGuard implements CanActivate{
  canActivate(){
    return true; // Allow access to the intro page
  }
};
 