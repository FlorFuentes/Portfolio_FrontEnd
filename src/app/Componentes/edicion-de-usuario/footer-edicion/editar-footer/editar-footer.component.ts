import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Footer } from 'src/app/Model/footer';
import { FooterService } from 'src/app/servicios/footer.service';

@Component({
  selector: 'app-editar-footer',
  templateUrl: './editar-footer.component.html',
  styleUrls: ['./editar-footer.component.css']
})
export class EditarFooterComponent {

  miPortfolio: Footer[]=[];
  formFoo: FormGroup;

  constructor(private fb: FormBuilder,
    private datosPortfolio: FooterService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
    this.formFoo = this.fb.group({
      id: [''],
      link: [''],
      nombre: [''],
    })
  }

  ngOnInit(): void {

    const fooId = this.activatedRoute.snapshot.params['id'];

    this.datosPortfolio.obtenerDatosFooter().subscribe(data => {
      this.miPortfolio = data;

      const element = this.miPortfolio.find(item => item.id === parseInt(fooId));
      this.formFoo.patchValue({
        id: element?.id,
        link: element?.link,
        nombre: element?.nombre,

      })
    })
  }


  //Boton aceptar
  onSubmitFooter() {

    const foo: Footer = {
      id: parseInt(this.activatedRoute.snapshot.params['id']),
      link: this.formFoo.value.link,
      nombre: this.formFoo.value.nombre,

    };
    console.log(foo);

    this.datosPortfolio.editarFooter(foo).subscribe(() => {

    });
    alert("Formulario enviado correctamente! Click en 'Aceptar' para volver al inicio.");
    this.router.navigate(['edicion-de-usuario']);
  }






}
