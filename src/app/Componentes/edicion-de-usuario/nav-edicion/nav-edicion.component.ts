import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { LoginService } from 'src/app/servicios/login.service';


@Component({
  selector: 'app-nav-edicion',
  templateUrl: './nav-edicion.component.html',
  styleUrls: ['./nav-edicion.component.css']
})
export class NavEdicionComponent {
  //Funciones click 

  constructor(private usuario: UsuarioService, private loginService: LoginService, private router: Router) { }


  ngOnInit(): void {

  }

  toAcercademi() {
    document.getElementById("acerca-de-mi")?.scrollIntoView({ behavior: "smooth" });
  }
  toExperiencia() {
    document.getElementById("experiencia")?.scrollIntoView({ behavior: "smooth" });
  }
  toEducacion() {
    document.getElementById("educacion")?.scrollIntoView({ behavior: "smooth" });
  }
  toHabilidadestecnicas() {
    document.getElementById("habilidadestecnicas")?.scrollIntoView({ behavior: "smooth" });
  }
  toProyectos() {
    document.getElementById("proyectos")?.scrollIntoView({ behavior: "smooth" });
  }
  toRedes() {
    document.getElementById("redes")?.scrollIntoView({ behavior: "smooth" });
  }

  //Boton para cerrar sesion
  onSignOut() {
    this.loginService.logout()
      .then(() => {
        alert("Sesion cerrada correctamente!")
        this.router.navigate(['login'])
      })
      .catch(error => console.log(error))
  }

}
