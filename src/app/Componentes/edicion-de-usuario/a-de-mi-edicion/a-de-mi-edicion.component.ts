import { Component } from '@angular/core';
import { AcercaDeMi } from 'src/app/Model/acerca-de-mi';
import { AcercaDeMiService } from 'src/app/servicios/acerca-de-mi.service';

@Component({
  selector: 'app-a-de-mi-edicion',
  templateUrl: './a-de-mi-edicion.component.html',
  styleUrls: ['./a-de-mi-edicion.component.css']
})
export class ADeMiEdicionComponent {
  //miPortfolio: any;

  miPortfolio: AcercaDeMi[] = [];

  constructor(private datosPortfolio: AcercaDeMiService){ }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosAcercaDeMi().subscribe(data => {
      this.miPortfolio = data;
    });
  }
   
/*
  */

  //Boton aceptar
   /* onSubmitAcercaDeMi() {

    const acer: AcercaDeMi = {
      id: this.formAcercaDeMi.value.id;
      fotoPerfil: this.formAcercaDeMi.value.fotoPerfil;
      sobreMi: this.formAcercaDeMi.value.sobreMi;
    };
    console.log(acer);

    this.datosPortfolio.editarAcercaDeMi(acer).subscribe(() => {

    });


  }
 */
  
}
