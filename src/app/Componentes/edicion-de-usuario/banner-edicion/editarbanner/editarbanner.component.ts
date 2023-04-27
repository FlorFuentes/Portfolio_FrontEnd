import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Banner } from 'src/app/Model/banner';
import { MiServicioService } from 'src/app/servicios/mi-servicio.service';

@Component({
  selector: 'app-editarbanner',
  templateUrl: './editarbanner.component.html',
  styleUrls: ['./editarbanner.component.css']
})
export class EditarbannerComponent implements OnInit{

  miPortfolio: Banner[] = [];

  formBanner: FormGroup;

  constructor(private fb: FormBuilder,
              private datosPortfolio: MiServicioService,
              private activatedRoute:ActivatedRoute,
              private router: Router) {

this.formBanner = this.fb.group({
    id: [''],
    nombre: [''],
    titulo: [''],
    imagen: ['']
  });
}
ngOnInit(): void {
  const bannerId= this.activatedRoute.snapshot.params['id'];
    this.datosPortfolio.obtenerDatosBanner().subscribe(data => {
    this.miPortfolio = data;

    const element= this.miPortfolio.find(item => item.id === parseInt(bannerId));
    this.formBanner.patchValue({
      id:element?.id,
      nombre: element?.titulo,
      imagen: element?.imagen
    })
  });
}

//Boton aceptar
onSubmitBanner() {

    const banner: Banner = {
    id: parseInt(this.activatedRoute.snapshot.params['id']),
    nombre: this.formBanner.value.nombre,
    titulo: this.formBanner.value.titulo,
    imagen: this.formBanner.value.imagen,
  };
    console.log(banner);

  this.datosPortfolio.editarBanner(banner).subscribe(() => {

});
    alert("Formulario enviado correctamente! Click en 'Aceptar' para volver al inicio.");
    this.router.navigate(['edicion-de-usuario']);
}

}
