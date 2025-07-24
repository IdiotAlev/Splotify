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
export class ArtisModalPage implements OnInit {

  artist: any;
  constructor(private navParams : NavParams) { }

  ngOnInit() {
    this.artist = this.navParams.data['artist'];
    console.log('Artist received in modal:', this.artist);
    

  }

}
