//controlador de la logica de esta vista de la aplicacion
//Aqui se declara todo lo que va a usar el archivo home.page.html
//Define componentes
//importa modulos

import { Component } from '@angular/core';
import { IonicModule} from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private router:Router) {}

  //metodos que se usan en la vista "home.page.html"
  viEstaSlide() {
    console.log('A');
  }

  //metodo que cambia el tema de la vista "home.page.html"
  cambiarTema() {
    this.backgroundTheme = this.backgroundTheme === this.ligthPrimaryColor ? this.darkPrimaryColor : this.ligthPrimaryColor;
    this.fontTheme = this.fontTheme === this.fontLigthColor ? this.fontDarkColor : this.fontLigthColor;
    this.acentTheme = this.acentTheme === this.acentLigthColor ? this.acentColorDark : this.acentLigthColor;
    console.log('Tema cambiado a:', this.backgroundTheme);
  }

  watchIntro() {
    console.log('Watch Intro');
    this.router.navigateByUrl('/intro');
  }
}
