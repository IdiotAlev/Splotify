import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
  standalone: true,
  imports: [IonicModule,CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class IntroPage implements OnInit {

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

  //arreglo de objetos que guardan los generos musicales que se usaran en la vista "home.page.html"
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


  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBack() {
    console.log("Go back clicked");
    this.router.navigateByUrl("/home");
  }
}
