import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { IonicModule,NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [ CommonModule, FormsModule, IonicModule, ReactiveFormsModule ]
})
export class LoginPage implements OnInit {
  // Variables
  users:any;
  // Mensaje de error
  errorMessage: string = '';
  // Formulario de login
  loginForm: FormGroup;
  validationMessages = {
    email: [
      { type: 'required', message: 'Email es obligatorio' },
      { type: 'email', message: 'Email debe ser valido' }
    ],
    password: [
      { type: 'required', message: 'Contraseña es obligatoria' },
      { type: 'minlength', message: 'Contraseña debe tener al menos 6 caracteres' }
    ]

  }

  constructor( private formBuilder: FormBuilder, private authService: AuthService, private navCtrl: NavController, private storage: StorageService) {

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

  loginUse(credentials: any) {
  this.authService.loginUse(credentials)
    .then((res: any) => {
      console.log(res);
      this.storage.set('user', res.user.email);
      this.storage.set('login', true);
      this.navCtrl.navigateForward('/intro');
    })
    .catch(err => {
      this.errorMessage = err;
      console.error(err);
    });
  }
  
  goRegister() {
    this.navCtrl.navigateForward('/register');
  }

}
