import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/Model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-crear-educacion',
  templateUrl: './crear-educacion.component.html',
  styleUrls: ['./crear-educacion.component.css']
})
export class CrearEducacionComponent {

  formEduAgregar: FormGroup;
  miPortfolio: Educacion[]=[];


  constructor(private fb: FormBuilder, 
              private datosPortfolio:EducacionService ,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
      this.formEduAgregar= this.fb.group({
        // id:[''],
        institucion:[''],
        imgDiploma:[''],
        descripcion:[''],
      })
    }

    ngOnInit(): void{

    }

    onSubmitEducacion() {

      const edu: Educacion = {
       // id: parseInt(this.activatedRoute.snapshot.params['id']),    
       institucion: this.formEduAgregar.value.institucion,
        imgDiploma: this.formEduAgregar.value.imgDiploma,
        descripcion: this.formEduAgregar.value.descripcion,
      };
        console.log(edu);
    
      this.datosPortfolio.agregarEducacion(edu).subscribe(() => {
    
    });
        alert("Formulario enviado correctamente! Click en 'Aceptar' para volver al inicio.");
        this.router.navigate(['edicion-de-usuario']);
    }
    

}
