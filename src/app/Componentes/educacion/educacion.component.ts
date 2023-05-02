import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/Model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  miPortfolio: Educacion[]= [];
  //Defino variable para recorrer el array de educacion
  //educacionLista: any;
  constructor(private datosPortfolio: EducacionService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosEducacion().subscribe(data => {
      console.log(data);
      this.miPortfolio = data;
      //this.educacionLista= data.educacion.certificado;
    });
  }
}
