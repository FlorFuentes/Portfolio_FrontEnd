import { Component, OnInit } from '@angular/core';
import { MiServicioService } from 'src/app/servicios/mi-servicio.service';

@Component({
  selector: 'app-habilidade-tecnicas',
  templateUrl: './habilidade-tecnicas.component.html',
  styleUrls: ['./habilidade-tecnicas.component.css']
})
export class HabilidadeTecnicasComponent implements OnInit{
  miPortfolio: any;
  //Defino variable para recorrer el array de Habilidades
  habilidadLista: any;
  constructor(private datosPortfolio: MiServicioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.miPortfolio = data;
      this.habilidadLista= data.habilidadesTecnicas.habilidad;
    });
  }
}
