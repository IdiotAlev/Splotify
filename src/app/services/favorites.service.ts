import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private favorites: number[] = []; // guardamos IDs de canciones favoritas

  constructor() {}

  isFavorite(songId: number): boolean {
    return this.favorites.includes(songId);
  }

  addFavorite(songId: number): void {
    if (!this.isFavorite(songId)) {
      this.favorites.push(songId);
    }
  }

  removeFavorite(songId: number): void {
    this.favorites = this.favorites.filter(id => id !== songId);
  }

  toggleFavorite(songId: number): void {
    if (this.isFavorite(songId)) {
      this.removeFavorite(songId);
    } else {
      this.addFavorite(songId);
    }
  }

  getFavorites(): number[] {
    return this.favorites;
  }
}
