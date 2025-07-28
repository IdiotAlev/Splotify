import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  urlServer='http://music.fly.dev'

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

  async getUsers(){
    return fetch(`${this.urlServer}/login`).then(
    response => response.json())
  }
  
}
