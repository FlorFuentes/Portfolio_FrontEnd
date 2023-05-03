import { Component } from '@angular/core';
import { Experiencia } from 'src/app/Model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-experiencia-edicion',
  templateUrl: './experiencia-edicion.component.html',
  styleUrls: ['./experiencia-edicion.component.css']
})
export class ExperienciaEdicionComponent {
  miPortfolio: Experiencia[]=[];
  //Defino variable para recorrer el array de educacion
  //experienciaLista: any;

  constructor(private datosPortfolio: ExperienciaService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosExperiencia().subscribe(data => {
      console.log(data);
      this.miPortfolio = data;
      //this.experienciaLista = data.experiencia;
    });
  }

  onDelete(id: any) {
    let elim = confirm("Desea eliminar este elemento?");
   if (elim == true) {
     this.datosPortfolio.borrarExperiencia(id).subscribe(() => {
       alert("Elemento eliminado correctamente!");
       location.reload();
     })
   }
 } 
 
//Boton aceptar
 
  /* 
  onSubmitExperiencia() {
    
    const exp: Experiencia = {
      id: this.formExperiencia.value.id,
      descripcion: this.formExperiencia.value.descripcion,
      fecha: this.formExperiencia.value.fecha,
      puesto: this.formExperiencia.value.puesto,
    };
    console.log(exp);

    this.datosPortfolio.editarExperiencia(exp).subscribe(() => {

    });


  }

 */

}
