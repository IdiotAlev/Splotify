//controlador de la logica de esta vista de la aplicacion
//Aqui se declara todo lo que va a usar el archivo home.page.html
// Define componentes
//importa modulos

import { Component } from '@angular/core';
import { IonicModule} from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  //urls que afectan esta vista
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonicModule, CommonModule],
})
export class HomePage {
  //variables y datos que se usaran en la vista
  mensaje="Hola mundo";
  constructor() {}
  //funciones que se usaran en la vista
  saludar() {
    console.log(this.mensaje);
  }
}
