import { Component } from '@angular/core';
import { Footer } from 'src/app/Model/footer';
import { FooterService } from 'src/app/servicios/footer.service';

@Component({
  selector: 'app-footer-edicion',
  templateUrl: './footer-edicion.component.html',
  styleUrls: ['./footer-edicion.component.css']
})
export class FooterEdicionComponent {
  //Data Binding
  miPortfolio: Footer[]=[];

  constructor(private datosPortfolio: FooterService) { }

 ngOnInit(): void {
   this.datosPortfolio.obtenerDatosFooter().subscribe(data => {
     this.miPortfolio = data;
   });
 }
//Funciones click 

toInicio(){
  document.getElementById("inicio")?.scrollIntoView({behavior:"smooth"});
 }

 
}
