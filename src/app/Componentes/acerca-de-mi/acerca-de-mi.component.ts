import { Component } from '@angular/core';
import { AcercaDeMi } from 'src/app/Model/acerca-de-mi';
import { AcercaDeMiService } from 'src/app/servicios/acerca-de-mi.service';

@Component({
  selector: 'app-acerca-de-mi',
  templateUrl: './acerca-de-mi.component.html',
  styleUrls: ['./acerca-de-mi.component.css']
})
export class AcercaDeMiComponent{
  miPortfolio: AcercaDeMi[]=[];

  constructor(private datosPortfolio: AcercaDeMiService){ }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosAcercaDeMi().subscribe(data => {
      this.miPortfolio = data;
    });
  }
}
