import { Component } from '@angular/core';
import { MiServicioService } from 'src/app/servicios/mi-servicio.service';

@Component({
  selector: 'app-footer-edicion',
  templateUrl: './footer-edicion.component.html',
  styleUrls: ['./footer-edicion.component.css']
})
export class FooterEdicionComponent {
  //Data Binding
  miPortfolio: any;

  constructor(private datosPortfolio: MiServicioService) { }

 ngOnInit(): void {
   this.datosPortfolio.obtenerDatos().subscribe(data => {
     this.miPortfolio = data;
   });
 }
//Funciones click 

toInicio(){
  document.getElementById("inicio")?.scrollIntoView({behavior:"smooth"});
 }
}
