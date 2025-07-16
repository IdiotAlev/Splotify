//controlador de la logica de esta vista de la aplicacion
//Aqui se declara todo lo que va a usar el archivo home.page.html
//Define componentes
//importa modulos

import { Component } from '@angular/core';
import { IonicModule} from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Component({
  //urls que afectan esta vista
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  //modulos que se importan para esta vista
  imports: [IonicModule, CommonModule],
  //esquemas que se usan en esta vista
  //esto es necesario para que funcione swiper ya q es un componente personalizado y no un componente de angular
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePage {
  //variables y datos que se usaran en la vista "home.page.html"

  //variables que guardan los colores que se usaran en la vista "home.page.html"
  ligthPrimaryColor='var(--Primary-Color-Ligth-Theme)';
  darkPrimaryColor='var(--Secundary-Color-Ligth-Theme)';
  ligthSecondaryColor='var(--Secundary-Color-Ligth-Theme)';
  darkSecondaryColor='var(--Secundary-Color-Dark-Theme)';

  fontLigthColor='var(--Color-Font-Dark-Theme)';
  fontDarkColor='var(--Color-Font-ligth-Theme)';

  acentLigthColor='var(--Accent-Color-Ligth-Theme)';
  acentColorDark='var(--Accent-Color-Dark-Theme)';

  backgroundTheme = this.ligthPrimaryColor;
  fontTheme = this.fontLigthColor;
  acentTheme = this.acentLigthColor;

  //constructor que se usa para inicializar la vista "home.page.html"
  constructor(private router:Router , private storageService:StorageService) {}

  //metodos que se usan en la vista "home.page.html"
  viEstaSlide() {
    console.log('A');
  }

  async ngOnInit() {
    // Este método se ejecuta al inicializar el componente
    await this.loadStorageData();
  }


  async loadStorageData() {

    const savedTheme = await this.storageService.get('theme');
    if (savedTheme) {
      console.log('Tema guardado en storage:', savedTheme);
      this.backgroundTheme = savedTheme;
      
    }

  }

  //metodo que cambia el tema de la vista "home.page.html"
  async cambiarTema() {
    this.backgroundTheme = this.backgroundTheme === this.ligthPrimaryColor ? this.darkPrimaryColor : this.ligthPrimaryColor;
    this.fontTheme = this.fontTheme === this.fontLigthColor ? this.fontDarkColor : this.fontLigthColor;
    this.acentTheme = this.acentTheme === this.acentLigthColor ? this.acentColorDark : this.acentLigthColor;
    console.log('Tema cambiado a:', this.backgroundTheme);

    // Guardar el tema actual en el almacenamiento local
    await this.storageService.set('theme', this.backgroundTheme)
    console.log('Tema guardado en storage:', this.backgroundTheme);
  }
    
  //metodo que redirige a la vista "intro.page.html"
  async watchIntro() {
    // Verifica si el usuario ya ha visto la introducción
    if( await this.storageService.get('hasSeenIntro')==true){
      
      console.log('Ya has visto la introducción, redirigiendo a home');
      this.router.navigateByUrl('/home');
    
    }else{
      console.log('No has visto la introducción, redirigiendo a intro');
      this.router.navigateByUrl('/intro');

      // Marca que el usuario ha visto la introducción
      await this.storageService.set('hasSeenIntro', true);
    }
  }
}
