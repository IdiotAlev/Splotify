import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [ CommonModule, FormsModule, IonicModule, ReactiveFormsModule ]
})
export class LoginPage implements OnInit {

  // Formulario de login
  loginForm: FormGroup;
  validationMessages = {
    email: [
      { type: 'required', message: 'Email es obligatorio' },
      { type: 'email', message: 'Email debe ser valido' }
    ]
  }

    constructor( private formBuilder: FormBuilder) {

    // Inicializa o formulário de login con o FormBuilder
    this.loginForm = this.formBuilder.group({
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
      ]))
    });

   }

  ngOnInit() {
  }

  loginUser(credentials: any) {
    console.log(credentials);
  }
}
