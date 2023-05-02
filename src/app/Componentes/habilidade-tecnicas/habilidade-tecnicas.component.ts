import { Component, OnInit } from '@angular/core';
import { Habilidades } from 'src/app/Model/habilidades';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';

@Component({
  selector: 'app-habilidade-tecnicas',
  templateUrl: './habilidade-tecnicas.component.html',
  styleUrls: ['./habilidade-tecnicas.component.css']
})
export class HabilidadeTecnicasComponent implements OnInit{
  miPortfolio: Habilidades[]=[];
  
  constructor(private datosPortfolio: HabilidadesService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosHabilidades().subscribe(data => {
      console.log(data);
      this.miPortfolio = data;
    });
  }
}
