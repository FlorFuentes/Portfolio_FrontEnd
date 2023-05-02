import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/Model/proyectos';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-editar-proyectos',
  templateUrl: './editar-proyectos.component.html',
  styleUrls: ['./editar-proyectos.component.css']
})
export class EditarProyectosComponent {
  miPortfolio: Proyectos[] = []
  formPro: FormGroup;


  constructor(private fb: FormBuilder,
    private datosPortfolio: ProyectosService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
    this.formPro = this.fb.group({
      id: [''],
      titulo: [''],
      descripcion: [''],
      link: [''],
    })
  }

   ngOnInit(): void {

    const proId = this.activatedRoute.snapshot.params['id'];

    this.datosPortfolio.obtenerDatosProyectos().subscribe(data => {
      this.miPortfolio = data;

      const element = this.miPortfolio.find(item => item.id === parseInt(proId));
      this.formPro.patchValue({
        id: element?.id,
        titulo: element?.titulo,
        descripcion: element?.descripcion,
        link: element?.link

      })
    })
  }


  //Boton aceptar
  onSubmitProyectos() {

    const pro: Proyectos = {
      id: parseInt(this.activatedRoute.snapshot.params['id']),
      titulo: this.formPro.value.titulo,
      descripcion: this.formPro.value.descripcion,
      link: this.formPro.value.link,

    };
    console.log(pro);

    this.datosPortfolio.editarProyectos(pro).subscribe(() => {

    });
    alert("Formulario enviado correctamente! Click en 'Aceptar' para volver al inicio.");
    this.router.navigate(['edicion-de-usuario']);
  }




}



