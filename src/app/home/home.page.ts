//controlador de la logica de esta vista de la aplicacion
//Aqui se declara todo lo que va a usar el archivo home.page.html
//Define componentes
//importa modulos

import { Component } from '@angular/core';
import { IonicModule, ModalController} from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { MusicService } from '../services/music.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SmpPage } from '../smp/smp.page';

// Importa el componente de modal de canciones

@Component({
  //urls que afectan esta vista
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  //modulos que se importan para esta vista
  imports: [IonicModule, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  //esquemas que se usan en esta vista
  //esto es necesario para que funcione swiper ya q es un componente personalizado y no un componente de angular
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

  tracks:any;
  albums:any;
  artist:any;
  currentSong:any;

  song: any={
    name:'',
    artist: '',
    previewUrl:'',
    playing:'false'
  };

  //constructor que se usa para inicializar la vista "home.page.html"
  constructor(private router:Router , private storageService:StorageService, private  musicService: MusicService, private modalCntrll :ModalController) {}

  //metodos que se usan en la vista "home.page.html"
  viEstaSlide() {
    console.log('A');
  }

  async ngOnInit() {
    //this.getLocalArtists();
    this.loadTracks();
    this.loadAlbums();
    this.loadArtist(); // Cargar un artista por defecto al iniciar
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

  loadTracks() {
    this.musicService.getTracks().then(tracks => {  
      this.tracks = tracks;
      console.log('Tracks cargados:', this.tracks);
    })
  }

  loadAlbums() {
    this.musicService.getAlbums().then(albums => {  
      this.albums = albums;
      console.log('albumes cargados:', this.albums);
    })
  }

  loadArtist() {
    this.musicService.getArtist().then(artist => {
      this.artist = artist;
      console.log('Artista cargado:', this.artist);
    })
  }

  //getLocalArtists() {
  //  this.localArtists = this.musicService.getLocalArtists(); 
  //  console.log('Artistas locales cargados:', this.localArtists.artists);
  //

  async showSongsByAlbum(albumId: string) {
    console.log('Album ID:', albumId);
    const songs = await this.musicService.getSongByAlbum(albumId);
    console.log('Canciones del álbum:', songs);

    const modal = await this.modalCntrll.create({
      component: SmpPage,
      componentProps: {
        'songs': songs
      }
    });
    modal.present();

  }

  async showSongsByArtistId(artistId: string) {
    console.log('Artist ID:', artistId);
    const songs = await this.musicService.getSongByArtistId(artistId);
    console.log('Canciones del artista:', songs);

    //const modal = await this.modalCntrll.create({
     // component: SmpPage,
      //componentProps: {
        //'songs': songs
      //}
    //});
    //modal.onDidDismiss().then((result) => {
      //if (result.data) {
        //console.log('Canción seleccionada:', result.data);
        //this.song = result.data;
      //}
    //}); 
    //modal.present();
    
  }
}

