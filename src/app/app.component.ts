//llamar a los componentes q se usaran en las paginas de la app
import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import {register} from 'swiper/element/bundle';
import { IonIcon } from '@ionic/angular/standalone';

register(); // Register Swiper elements globally

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, IonIcon],
})
export class AppComponent {
  constructor() {
    

  }
}
