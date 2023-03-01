import { Component } from '@angular/core';
import { MiServicioService } from 'src/app/servicios/mi-servicio.service';

@Component({
  selector: 'app-educacion-edicion',
  templateUrl: './educacion-edicion.component.html',
  styleUrls: ['./educacion-edicion.component.css']
})
export class EducacionEdicionComponent {
  miPortfolio: any;
  //Defino variable para recorrer el array de educacion
  educacionLista: any;
  constructor(private datosPortfolio: MiServicioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.miPortfolio = data;
      this.educacionLista= data.educacion.certificado;
    });
  }
}
