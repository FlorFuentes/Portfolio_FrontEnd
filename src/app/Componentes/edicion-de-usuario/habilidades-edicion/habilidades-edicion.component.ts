import { Component } from '@angular/core';
import { Habilidades } from 'src/app/Model/habilidades';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';

@Component({
  selector: 'app-habilidades-edicion',
  templateUrl: './habilidades-edicion.component.html',
  styleUrls: ['./habilidades-edicion.component.css']
})
export class HabilidadesEdicionComponent {
  miPortfolio: Habilidades[]=[];
  //Defino variable para recorrer el array de Habilidades
  //habilidadLista: any;
  constructor(private datosPortfolio: HabilidadesService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosHabilidades().subscribe(data => {
      console.log(data);
      this.miPortfolio = data;
      //this.habilidadLista= data.habilidadesTecnicas;
    });
  }

  onDelete(id: any) {
    let elim = confirm("Desea eliminar este elemento?");
   if (elim == true) {
     this.datosPortfolio.borrarHabilidades(id).subscribe(() => {
       alert("Elemento eliminado correctamente!");
       location.reload();
     })
   }
 } 
 
}
