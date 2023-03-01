import { Component } from '@angular/core';
import { MiServicioService } from 'src/app/servicios/mi-servicio.service';

@Component({
  selector: 'app-banner-edicion',
  templateUrl: './banner-edicion.component.html',
  styleUrls: ['./banner-edicion.component.css']
})
export class BannerEdicionComponent {
  miPortfolio: any;

  constructor(private datosPortfolio: MiServicioService) { }

 ngOnInit(): void {
   this.datosPortfolio.obtenerDatos().subscribe(data => {
     this.miPortfolio = data;
   });
 }
}
