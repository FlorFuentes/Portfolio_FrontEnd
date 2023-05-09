import { Component, OnInit } from '@angular/core';
// importamos las librerias de formulario que vamos a usar.
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/Model/usuario';
import { LoginService } from 'src/app/servicios/login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  form: FormGroup;
  miPortfolio: Usuario[] = [];

  // Inyectar en el constructor el formBuilder
  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private router: Router) {
    ///Creamos el grupo de controles para el formulario de login
    this.form = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.email]],
    })
  }

  ngOnInit(): void {
    
   }


  //Obtenemos los datos
  get Password() {
    return this.form.get("password");
  }

  get Mail() {
    return this.form.get("email");
  }

  get PasswordValid() {
    return this.Password?.touched && !this.Password?.valid;
  }

  get MailValid() {
    return false
  }


  onEnviar() {
    this.loginService.login(this.form.value)
      .then(response => {
        console.log(response)
        this.router.navigate(['edicion-de-usuario']);
      })
      .catch(error => console.log(error));
  }


}
