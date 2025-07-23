import { Injectable } from '@angular/core';
//import * as dataArtist from "./artistas.json";

@Injectable({
  providedIn: 'root'
})
export class MusicService {
 
  urlServer= 'http://music.fly.dev';
  constructor() { }

  getTracks() {
    return fetch(`${this.urlServer}/tracks`).then(
      response => response.json()
    )
  };

  getAlbums(){
    return fetch(`${this.urlServer}/albums`).then(
      response => response.json()
    )
  }

 // getLocalArtists() {
   // return dataArtist;
  //}

  getSongByAlbum(albumId: string) {
    return fetch(`${this.urlServer}/tracks/album/${albumId}`).then(
      response => response.json()
    )
  }
}
