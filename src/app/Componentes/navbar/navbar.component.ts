import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
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
