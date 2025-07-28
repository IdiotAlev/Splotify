import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { IonicModule,NavController } from '@ionic/angular';
import { StorageService } from '../services/storage.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule,ReactiveFormsModule,IonicModule]
})
export class RegisterPage implements OnInit {

  // Formulario de registro
  registerForm: FormGroup;
  validationMessages = {
    email: [
      { type: 'required', message: 'Email es obligatorio' },
      { type: 'email', message: 'Email debe ser valido' }
    ],
    password: [
      { type: 'required', message: 'Contraseña es obligatoria' },
      { type: 'minlength', message: 'Contraseña debe tener al menos 6 caracteres' }
    ],
    nombre: [
      { type: 'required', message: 'Nombre es obligatorio' },
    ],
    apellido: [
      { type: 'required', message: 'Apellido es obligatorio' },
    ]
  };

  constructor(private formBuilder:FormBuilder , private storageService: StorageService, private navCtrl : NavController) {

    // Inicializa o formulário de login con o FormBuilder
    this.registerForm = this.formBuilder.group({
      /* '' Parametos, [] validators*/
      email: new FormControl('',
      Validators.compose([
        Validators.required,
        Validators.email
      ])),
      password: new FormControl('',
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
      ])),
      nombre: new FormControl('',
        Validators.compose([
          Validators.required,
      ])),
      apellido: new FormControl('',
        Validators.compose([
          Validators.required,
      ]))
    });
  }

  ngOnInit() {
  }

  registerUser(credentials: any) {
    this.storageService.set("user", credentials.email)
    this.storageService.set('pws', credentials.password)
    console.log('Usuario registrado:', credentials);
    this.navCtrl.navigateForward('/login');
  }

  goLogin(){
    this.navCtrl.navigateForward('/login');
  }
}
