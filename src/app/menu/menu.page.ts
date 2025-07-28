import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController} from '@ionic/angular';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  standalone: true,
  imports: [ CommonModule, FormsModule, IonicModule]
})
export class MenuPage implements OnInit {

  constructor(private router:Router , private storageService:StorageService) { }

  ngOnInit() {
  }

  //metodo que redirige a la vista "intro.page.html"
  async watchIntro() {
    // Verifica si el usuario ya ha visto la introducción
    if( await this.storageService.get('hasSeenIntro')==true){
      
      console.log('Ya has visto la introducción, redirigiendo a home');
      this.router.navigateByUrl('/intro');
    
    }else{
      console.log('No has visto la introducción, redirigiendo a intro');
      this.router.navigateByUrl('/intro');

      // Marca que el usuario ha visto la introducción
      await this.storageService.set('hasSeenIntro', true);
    }
  } 

  switchTheme() {
    // Cambia el tema de la aplicación
    console.log('Cambiando tema');
  }

  async logOut(){

    await this.storageService.remove('user')
    await this.storageService.remove('pws')
    console.log('Se ha borrado el storage')
    this.router.navigateByUrl('/login');



  }
}
