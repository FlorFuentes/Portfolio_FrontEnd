import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/Model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css']
})
export class EditarExperienciaComponent {

  miPortfolio: Experiencia[] = [];

  formExpe: FormGroup;

  constructor(private fb: FormBuilder,
              private datosPortfolio: ExperienciaService,
              private activatedRoute:ActivatedRoute,
              private router: Router){
this.formExpe= this.fb.group({
  id:[''], 
  puesto:[''],
  fecha:[''],
  descripcion:[''],
})

}

ngOnInit(): void {
  
  const exId = this.activatedRoute.snapshot.params['id'];
   
  this.datosPortfolio.obtenerDatosExperiencia().subscribe(data =>{
    this.miPortfolio=data;

    const element= this.miPortfolio.find(item => item.id === parseInt(exId));
    this.formExpe.patchValue({
      id: element?.id,
      fecha: element?.fecha,
      puesto: element?.puesto,
      descripcion: element?.descripcion

    })
  })
}


//Boton aceptar
onSubmitExperiencia() {

  const exper: Experiencia = {
    id: parseInt(this.activatedRoute.snapshot.params['id']),    
    fecha: this.formExpe.value.fecha,
    puesto: this.formExpe.value.puesto,
    descripcion: this.formExpe.value.descripcion,
  };
    console.log(exper);

  this.datosPortfolio.editarExperiencia(exper).subscribe(() => {

});
    alert("Formulario enviado correctamente! Click en 'Aceptar' para volver al inicio.");
    this.router.navigate(['edicion-de-usuario']);
}

}
