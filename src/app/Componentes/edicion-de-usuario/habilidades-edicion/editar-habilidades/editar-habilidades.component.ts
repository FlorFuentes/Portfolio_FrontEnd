import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidades } from 'src/app/Model/habilidades';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';

@Component({
  selector: 'app-editar-habilidades',
  templateUrl: './editar-habilidades.component.html',
  styleUrls: ['./editar-habilidades.component.css']
})
export class EditarHabilidadesComponent {

  miPortfolio: Habilidades[] = [];

  formHabi: FormGroup;

  constructor(private fb: FormBuilder,
    private datosPortfolio: HabilidadesService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
    this.formHabi = this.fb.group({
      id: [''],
      nombre: [''],
      porcentaje: [''],
    })
  }


  ngOnInit(): void {

    const habId = this.activatedRoute.snapshot.params['id'];

    this.datosPortfolio.obtenerDatosHabilidades().subscribe(data => {
      this.miPortfolio = data;

      const element = this.miPortfolio.find(item => item.id === parseInt(habId));
      this.formHabi.patchValue({
        id: element?.id,
        nombre: element?.nombre,
        porcentaje: element?.porcentaje,

      })
    })
  }


  //Boton aceptar
  onSubmitHabilidades() {

    const habi: Habilidades = {
      id: parseInt(this.activatedRoute.snapshot.params['id']),
      nombre: this.formHabi.value.nombre,
      porcentaje: this.formHabi.value.porcentaje,
    };
    console.log(habi);

    this.datosPortfolio.editarHabilidades(habi).subscribe(() => {

    });
    alert("Formulario enviado correctamente! Click en 'Aceptar' para volver al inicio.");
    this.router.navigate(['edicion-de-usuario']);
  }

}
