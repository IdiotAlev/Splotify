import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavParams, IonicModule } from '@ionic/angular';
import { ModalController } from '@ionic/angular/standalone';


@Component({
  selector: 'app-smp',
  templateUrl: './smp.page.html',
  styleUrls: ['./smp.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule,IonicModule]
})
export class SmpPage implements OnInit {

  songs: any;
  constructor(private navParams : NavParams, private modalCntrll:ModalController) { }

  ngOnInit() {
    this.songs = this.navParams.data['songs'];
    console.log('Songs received in modal:', this.songs);
  }
    async selectSong(song: any) {
      await this.modalCntrll.dismiss(song);
    }

}
