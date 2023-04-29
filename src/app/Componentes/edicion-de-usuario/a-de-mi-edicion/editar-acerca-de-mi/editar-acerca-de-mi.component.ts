import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AcercaDeMi } from 'src/app/Model/acerca-de-mi';
import { AcercaDeMiService } from 'src/app/servicios/acerca-de-mi.service';

@Component({
  selector: 'app-editar-acerca-de-mi',
  templateUrl: './editar-acerca-de-mi.component.html',
  styleUrls: ['./editar-acerca-de-mi.component.css']
})
export class EditarAcercaDeMiComponent implements OnInit {

  miPortfolio: AcercaDeMi[] = [];

  formAcercaDeMi: FormGroup;

  constructor(private fb: FormBuilder,
    private datosPortfolio: AcercaDeMiService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {

    this.formAcercaDeMi = this.fb.group({
      id: [''],
      fotoPerfil: [''],
      sobreMi: [''],
    });
  }
  ngOnInit(): void {
    const AcercaDeMiId = this.activatedRoute.snapshot.params['id'];
    this.datosPortfolio.obtenerDatosAcercaDeMi().subscribe(data => {
      this.miPortfolio = data;

      const element = this.miPortfolio.find(item => item.id === parseInt(AcercaDeMiId));
      this.formAcercaDeMi.patchValue({
        id: element?.id,
        fotoPerfil: element?.fotoPerfil,
        sobreMi: element?.sobreMi
      })
    });
  }

  //Boton aceptar
  onSubmitAcercaDeMi() {

    const acerDeMi: AcercaDeMi = {
      id: parseInt(this.activatedRoute.snapshot.params['id']),
      fotoPerfil:this.formAcercaDeMi.value.fotoPerfil,
      sobreMi: this.formAcercaDeMi.value.sobreMi,
    };
    console.log(AcercaDeMi);

    this.datosPortfolio.editarAcercaDeMi(acerDeMi).subscribe(() => {

    });
    alert("Formulario enviado correctamente! Click en 'Aceptar' para volver al inicio.");
    this.router.navigate(['edicion-de-usuario']);
  } 

}


