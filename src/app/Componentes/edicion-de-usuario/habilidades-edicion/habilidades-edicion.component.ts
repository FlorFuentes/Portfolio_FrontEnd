import { Component } from '@angular/core';
import { MiServicioService } from 'src/app/servicios/mi-servicio.service';

@Component({
  selector: 'app-habilidades-edicion',
  templateUrl: './habilidades-edicion.component.html',
  styleUrls: ['./habilidades-edicion.component.css']
})
export class HabilidadesEdicionComponent {
  miPortfolio: any;
  //Defino variable para recorrer el array de Habilidades
  habilidadLista: any;
  constructor(private datosPortfolio: MiServicioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.miPortfolio = data;
      this.habilidadLista= data.habilidadesTecnicas;
    });
  }
}
