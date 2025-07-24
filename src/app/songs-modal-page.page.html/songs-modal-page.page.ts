import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavParams,IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-songs-modal-page',
  templateUrl: './songs-modal-page.page.html',
  styleUrls: ['./songs-modal-page.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class SongsModalPagePage implements OnInit {

  songs: any;
  constructor(private navParams : NavParams) { }

  ngOnInit() {
    this.songs = this.navParams.data['songs'];
    console.log('Songs received in modal:', this.songs);
  }

}
