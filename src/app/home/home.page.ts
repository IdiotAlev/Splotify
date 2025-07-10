//controlador de la logica de esta vista de la aplicacion
//Aqui se declara todo lo que va a usar el archivo home.page.html
//Define componentes
//importa modulos

import { Component } from '@angular/core';
import { IonicModule} from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

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
  genres= [ 
    {
      title: 'Rock music',
      image: 'https://miro.medium.com/v2/resize:fit:1400/0*iUdNvJPdET3lwupr',
      description: 'El rock and roll o rocanrol​ es un género musical de ritmo marcado, derivado de una mezcla de diversos géneros de música folclórica estadounidense y popularizado desde los años 1950.​​'
    },
    {
      title: 'Electronic music',
      image: 'https://www.mashedinplastic.co.uk/wp-content/uploads/2022/05/electronic.jpg',
      description: 'La música electrónica es un género musical que utiliza instrumentos electrónicos y tecnología digital para crear sonidos y ritmos innovadores. Se caracteriza por su diversidad de estilos, desde la música dance hasta la ambient.'
    },
    {
      title: 'Pop music',
      image: 'https://i8.amplience.net/i/naras/RA_2023_In_Review_POP_HeroCollage_1644x925%202',
      description: 'La música pop es un género musical popular que abarca una amplia variedad de estilos y ritmos, caracterizado por su accesibilidad y atractivo comercial. Se originó en la cultura juvenil de mediados del siglo XX y ha evolucionado a lo largo de las décadas.'
    }
  ];
  constructor() {}
  //funciones que se usaran en la vista "home.page.html"
  viEstaSlide() {
    console.log('A');
  }
}
