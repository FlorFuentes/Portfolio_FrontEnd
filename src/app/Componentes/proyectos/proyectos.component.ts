import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/Model/proyectos';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit{
  miPortfolio: Proyectos[]=[];
  //Defino variable para recorrer el array de educacion
  //proyectosLista: any;
  constructor(private datosPortfolio: ProyectosService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosProyectos().subscribe(data => {
      console.log(data);
      this.miPortfolio = data;
      //this.proyectosLista= data.proyectos.proyecto;
    });
  }
}
