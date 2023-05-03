import { Component } from '@angular/core';
import { Footer } from 'src/app/Model/footer';
import { FooterService } from 'src/app/servicios/footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  toInicio(){
    document.getElementById("inicio")?.scrollIntoView({behavior:"smooth"});
   }
  //Data Binding
   miPortfolio: Footer[]=[];

   constructor(private datosPortfolio: FooterService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosFooter().subscribe(data => {
      this.miPortfolio = data;
    });
  }
}
