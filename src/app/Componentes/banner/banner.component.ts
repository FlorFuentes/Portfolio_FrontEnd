import { Component } from '@angular/core';
import { Banner } from 'src/app/Model/banner';
import { MiServicioService } from 'src/app/servicios/mi-servicio.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent  {
  miPortfolio: Banner[]=[];

  constructor(private datosPortfolio: MiServicioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosBanner().subscribe(data => {
      this.miPortfolio = data;
    });
  }
}
