import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Banner } from 'src/app/Model/banner';
import { MiServicioService } from 'src/app/servicios/mi-servicio.service';

@Component({
  selector: 'app-banner-edicion',
  templateUrl: './banner-edicion.component.html',
  styleUrls: ['./banner-edicion.component.css']
})
export class BannerEdicionComponent {

 

  miPortfolio: Banner[] = [];
  constructor(private datosPortfolio: MiServicioService) { }



  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosBanner().subscribe(data => {
      this.miPortfolio = data;
    });
  }

  //Boton aceptar
  /* onSubmitBanner() {

    const banner: Banner = {
      id: this.formBanner.value.id,
      nombre: this.formBanner.value.nombre,
      titulo: this.formBanner.value.titulo,
      imagen: this.formBanner.value.imagen,
    };
    console.log(banner);

    this.datosPortfolio.editarBanner(banner).subscribe(() => {

    });


  }

  */
} 

