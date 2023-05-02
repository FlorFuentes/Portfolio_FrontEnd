import { Component } from '@angular/core';
import { Proyectos } from 'src/app/Model/proyectos';
import { MiServicioService } from 'src/app/servicios/mi-servicio.service';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-proyectos-edicion',
  templateUrl: './proyectos-edicion.component.html',
  styleUrls: ['./proyectos-edicion.component.css']
})
export class ProyectosEdicionComponent {
  miPortfolio: Proyectos[] = [];
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

  onDelete(id: any) {
    let elim = confirm("Desea eliminar este elemento?");
    if (elim == true) {
      this.datosPortfolio.borrarProyectos(id).subscribe(() => {
        alert("Elemento eliminado correctamente!");
        location.reload();
      })
    }
  }
}
