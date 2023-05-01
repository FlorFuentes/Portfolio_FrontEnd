import { Component } from '@angular/core';
import { Experiencia } from 'src/app/Model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {
  miPortfolio: Experiencia[]=[];
  //Defino variable para recorrer el array de educacion
  //experienciaLista: any;
  constructor(private datosPortfolio: ExperienciaService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.miPortfolio = data;
      //this.experienciaLista = data.experiencia;
    });
  }

}
