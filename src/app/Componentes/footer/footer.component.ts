import { Component } from '@angular/core';
import { MiServicioService } from 'src/app/servicios/mi-servicio.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  toInicio(){
    document.getElementById("inicio")?.scrollIntoView({behavior:"smooth"});
   }
  //Data Binding
   miPortfolio: any;

   constructor(private datosPortfolio: MiServicioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.miPortfolio = data;
    });
  }
}
