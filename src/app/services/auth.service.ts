import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private users: any[] = [];

  constructor() {
    this.loadUsers();
  }

  // Carga los usuarios desde el archivo JSON (fetch en local)
  loadUsers() {
    fetch('assets/users.json')
      .then(res => res.json())
      .then(data => {
        this.users = data;
      })
      .catch(err => {
        console.error('Error cargando usuarios:', err);
      });
  }

  loginUse(credentials: any) {
    return new Promise((resolve, reject) => {
      const user = this.users.find(u => 
        u.email === credentials.email &&
        u.password === credentials.password
      );
      if (user) {
        resolve({ msg: 'Usuario logueado', user });
      } else {
        reject('Credenciales incorrectas');
      }
    });
  }

  // Registro: solo simula agregar a users en memoria (no persiste)
  registerUser(userData: any) {
    return new Promise((resolve, reject) => {
      // Validar que no exista usuario con mismo email
      const exists = this.users.some(u => u.email === userData.email);
      if (exists) {
        reject('El correo ya está registrado');
        return;
      }

      // Crear nuevo usuario (sin password_confirmation)
      const newUser = {
        email: userData.email,
        password: userData.password,
        name: userData.name,
        last_name: userData.last_name
      };

      this.users.push(newUser);

      resolve({ msg: 'Usuario creado', user: newUser });

      
    });
  }
}
