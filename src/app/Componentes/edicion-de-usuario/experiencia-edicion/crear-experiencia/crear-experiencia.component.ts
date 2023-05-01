import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/Model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-crear-experiencia',
  templateUrl: './crear-experiencia.component.html',
  styleUrls: ['./crear-experiencia.component.css']
})
export class CrearExperienciaComponent {

  formExpAgregar: FormGroup;
  miPortfolio: Experiencia[]=[];

  constructor(private fb: FormBuilder, 
              private datosPortfolio:ExperienciaService ,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
      this.formExpAgregar= this.fb.group({
        // id:[''],
        puesto:[''],
        fecha:[''],
        descripcion:[''],
      })
    }

    ngOnInit(): void{

    }

    onSubmitExperiencia() {

      const exper: Experiencia = {
       // id: parseInt(this.activatedRoute.snapshot.params['id']),    
        fecha: this.formExpAgregar.value.fecha,
        puesto: this.formExpAgregar.value.puesto,
        descripcion: this.formExpAgregar.value.descripcion,
      };
        console.log(exper);
    
      this.datosPortfolio.agregarExperiencia(exper).subscribe(() => {
    
    });
        alert("Formulario enviado correctamente! Click en 'Aceptar' para volver al inicio.");
        this.router.navigate(['edicion-de-usuario']);
    }
    
  
}
