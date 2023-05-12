import { Component } from '@angular/core';
import { Educacion } from 'src/app/Model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-educacion-edicion',
  templateUrl: './educacion-edicion.component.html',
  styleUrls: ['./educacion-edicion.component.css']
})
export class EducacionEdicionComponent {
  miPortfolio: Educacion[] = [];
  //Defino variable para recorrer el array de educacion
  //educacionLista: any;
  constructor(private datosPortfolio: EducacionService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosEducacion().subscribe(data => {
      console.log(data);
      this.miPortfolio = data;
      //this.educacionLista= data.educacion.certificado;
    });
  }
  onDelete(id: any) {
    let elim = confirm("Desea eliminar este elemento?");
    if (elim == true) {
      this.datosPortfolio.borrarEducacion(id).subscribe(() => {
        alert("Elemento eliminado correctamente!");
        location.reload();
      })
    }
  }
}
