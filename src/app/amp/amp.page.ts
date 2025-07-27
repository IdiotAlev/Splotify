import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavParams, IonicModule } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-amp',
  templateUrl: './amp.page.html',
  styleUrls: ['./amp.page.scss'],
  standalone: true,
  imports: [ CommonModule, FormsModule, IonicModule]
})
export class AmpPage implements OnInit {
  songs: any;

  constructor(private navParams : NavParams, private modalCntrll : ModalController) { }

  ngOnInit() {
    this.songs = this.navParams.data['songs'];
    console.log('Canciones recibidas en el modal', this.songs);
  }
}
