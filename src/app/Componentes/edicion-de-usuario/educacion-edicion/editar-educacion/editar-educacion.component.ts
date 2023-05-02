import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/Model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-editar-educacion',
  templateUrl: './editar-educacion.component.html',
  styleUrls: ['./editar-educacion.component.css']
})
export class EditarEducacionComponent {
  miPortfolio: Educacion[] = [];

  formEdu: FormGroup;

  constructor(private fb: FormBuilder,
    private datosPortfolio: EducacionService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
    this.formEdu = this.fb.group({
      id: [''],
      institucion: [''],
      descripcion: [''],
      imgDiploma: [''],
    })
  }


  ngOnInit(): void {

    const eduId = this.activatedRoute.snapshot.params['id'];

    this.datosPortfolio.obtenerDatosEducacion().subscribe(data => {
      this.miPortfolio = data;

      const element = this.miPortfolio.find(item => item.id === parseInt(eduId));
      this.formEdu.patchValue({
        id: element?.id,
        institucion: element?.institucion,
        descripcion: element?.descripcion,
        imgDiploma: element?.imgDiploma

      })
    })
  }


  //Boton aceptar
  onSubmitEducacion() {

    const edu: Educacion = {
      id: parseInt(this.activatedRoute.snapshot.params['id']),
      institucion: this.formEdu.value.institucion,
      descripcion: this.formEdu.value.descripcion,
      imgDiploma: this.formEdu.value.imgDiploma,

    };
    console.log(edu);

    this.datosPortfolio.editarEducacion(edu).subscribe(() => {

    });
    alert("Formulario enviado correctamente! Click en 'Aceptar' para volver al inicio.");
    this.router.navigate(['edicion-de-usuario']);
  }



}
