import { Component } from '@angular/core';
import { MiServicioService } from 'src/app/servicios/mi-servicio.service';

@Component({
  selector: 'app-a-de-mi-edicion',
  templateUrl: './a-de-mi-edicion.component.html',
  styleUrls: ['./a-de-mi-edicion.component.css']
})
export class ADeMiEdicionComponent {
  miPortfolio: any;
  constructor(private datosPortfolio: MiServicioService){ }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.miPortfolio = data;
    });
  }
}
