import { Component } from '@angular/core';
import { MiServicioService } from 'src/app/servicios/mi-servicio.service';

@Component({
  selector: 'app-experiencia-edicion',
  templateUrl: './experiencia-edicion.component.html',
  styleUrls: ['./experiencia-edicion.component.css']
})
export class ExperienciaEdicionComponent {
  miPortfolio: any;
  //Defino variable para recorrer el array de educacion
  experienciaLista: any;
  constructor(private datosPortfolio: MiServicioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.miPortfolio = data;
      this.experienciaLista = data.experiencia;
    });
  }
}
