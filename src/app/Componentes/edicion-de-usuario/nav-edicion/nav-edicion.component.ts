import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-edicion',
  templateUrl: './nav-edicion.component.html',
  styleUrls: ['./nav-edicion.component.css']
})
export class NavEdicionComponent {
  //Funciones click 

 toAcercademi(){
  document.getElementById("acerca-de-mi")?.scrollIntoView({behavior:"smooth"});
 }
 toExperiencia(){
  document.getElementById("experiencia")?.scrollIntoView({behavior:"smooth"});
 }
 toEducacion(){
  document.getElementById("educacion")?.scrollIntoView({behavior:"smooth"});
 }
 toHabilidadestecnicas(){
  document.getElementById("habilidadestecnicas")?.scrollIntoView({behavior:"smooth"});
 }
  toProyectos(){
  document.getElementById("proyectos")?.scrollIntoView({behavior:"smooth"});
 }
 toRedes(){
  document.getElementById("redes")?.scrollIntoView({behavior:"smooth"});
 }

}
