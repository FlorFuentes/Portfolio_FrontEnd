import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/Model/proyectos';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-crear-proyectos',
  templateUrl: './crear-proyectos.component.html',
  styleUrls: ['./crear-proyectos.component.css']
})
export class CrearProyectosComponent {

  formProAgregar: FormGroup;
  miPortfolio: Proyectos[] = [];


  constructor(private fb: FormBuilder,
              private datosPortfolio: ProyectosService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.formProAgregar = this.fb.group({
      // id:[''],
      titulo: [''],
      link: [''],
      descripcion: [''],
    })
  }

  ngOnInit(): void {

  }

  onSubmitProyectos() {

    const pro: Proyectos = {
     // id: parseInt(this.activatedRoute.snapshot.params['id']),    
     titulo: this.formProAgregar.value.titulo,
      link: this.formProAgregar.value.link,
      descripcion: this.formProAgregar.value.descripcion,
    };
      console.log(pro);
  
    this.datosPortfolio.agregarProyectos(pro).subscribe(() => {
  
  });
      alert("Formulario enviado correctamente! Click en 'Aceptar' para volver al inicio.");
      this.router.navigate(['edicion-de-usuario']);
  }
  

}
