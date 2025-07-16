import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private _storage: Storage | null = null;
  
  constructor(private storage: Storage) { 
    
  }

  //inicializar el storage
  async init( ) {
    const storage = await this.storage.create();  
    this._storage = storage;
  }

  //verificar si el storage esta listo
  private async ready(){
    if (!this._storage) {
      await this.init();
    }
  }

  //setear variables en el storage
  public async set(key: string, value: any) {
    await this.ready();
    return this._storage?.set(key, value);
  }

  //obtener variables del storage
  public async get(key: string){
    await this.ready();
    return this._storage?.get(key);
  }

  //remover variables del storage
  public async remove(key: string){
    await this.ready();
    return this._storage?.remove(key);
  }

  //limpiar todo el storage
  public async clear(){
    await this.ready();
    return this._storage?.clear();
  }

  //Obtener todas las claves del storage
  public async keys() {
    await this.ready();
    return this._storage?.keys();
  }

  //Obtener el tamaño del storage
  public async length() {
    await this.ready();
    return this._storage?.length();
  }

}
