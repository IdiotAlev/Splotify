import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavParams, IonicModule } from '@ionic/angular';
import { ModalController } from '@ionic/angular/standalone';
import { MusicService } from '../services/music.service';


@Component({
  selector: 'app-smp',
  templateUrl: './smp.page.html',
  styleUrls: ['./smp.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule,IonicModule]
})
export class SmpPage implements OnInit {

  artist:any;
  songs: any;
  constructor(private navParams : NavParams, private modalCntrll:ModalController, private musicService:MusicService) { }

  ngOnInit() {
    this.loadArtist();
    this.songs = this.navParams.data['songs'];
    console.log('Songs received in modal:', this.songs);
  }
    async selectSong(song: any) {
      await this.modalCntrll.dismiss(song);
    }

  loadArtist() {
    this.musicService.getArtist().then(artist => {
      this.artist = artist;
      console.log('Artista cargado  modal :', this.artist);
    })
  }
  
}
