import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidades } from 'src/app/Model/habilidades';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';

@Component({
  selector: 'app-crear-habilidades',
  templateUrl: './crear-habilidades.component.html',
  styleUrls: ['./crear-habilidades.component.css']
})
export class CrearHabilidadesComponent {

  formHabiAgregar: FormGroup;
  miPortfolio: Habilidades[]=[];

  constructor(private fb: FormBuilder, 
              private datosPortfolio:HabilidadesService ,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
      this.formHabiAgregar= this.fb.group({
        // id:[''],
        nombre:[''],
        porcentaje:[''],
      })
    }

    ngOnInit(): void {
    }
  
  
    //Boton aceptar
    onSubmitHabilidades() {
  
      const habi: Habilidades = {
        //id: parseInt(this.activatedRoute.snapshot.params['id']),
        nombre: this.formHabiAgregar.value.nombre,
        porcentaje: this.formHabiAgregar.value.porcentaje,
      };
      console.log(habi);
  
      this.datosPortfolio.agregarHabilidades(habi).subscribe(() => {
  
      });
      alert("Formulario enviado correctamente! Click en 'Aceptar' para volver al inicio.");
      this.router.navigate(['edicion-de-usuario']);
    }
  

}
