import { Component, OnInit } from '@angular/core';
import { MiServicioService } from 'src/app/servicios/mi-servicio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  constructor(private datosPortfolio:MiServicioService){}

  ngOnInit(): void{
    this.datosPortfolio.obtenerDatos();
  } 
}
/*  */