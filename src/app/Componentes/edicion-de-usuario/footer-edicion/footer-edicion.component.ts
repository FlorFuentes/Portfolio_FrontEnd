import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-edicion',
  templateUrl: './footer-edicion.component.html',
  styleUrls: ['./footer-edicion.component.css']
})
export class FooterEdicionComponent {
//Funciones click 

toInicio(){
  document.getElementById("inicio")?.scrollIntoView({behavior:"smooth"});
 }
}
