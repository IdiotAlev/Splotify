import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
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
    confirmPassword: [
      { type: 'required', message: 'Contraseña es obligatoria' },
      { type: 'minlength', message: 'Contraseña debe tener al menos 6 caracteres' }
    ],
  };

  constructor(private formBuilder:FormBuilder , private storageService: StorageService) {

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
      confirmPassword: new FormControl('',
        Validators.compose([
          Validators.minLength(6),
      ]))
    });
  }

  ngOnInit() {
  }

  async registerUser(credentials: any) {
    await this.storageService.set('user', credentials);
    console.log('Usuario registrado:', credentials);

  }

}
