import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  loginUse(credendials: any){
    return new Promise((accept, reject) => {
      if (
        credendials.email === 'admin@gmail.com' 
        && credendials.password === '123456'
      ) {
        accept("Login successful");
      } else {
        reject("Invalid credentials" );
      }
    });
  }

}
