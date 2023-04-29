import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AcercaDeMi } from '../Model/acerca-de-mi';

@Injectable({
  providedIn: 'root'
})
export class AcercaDeMiService {

  private json = './assets/data/data.json';
  private ProyectoArgPrograma = 'http://localhost:8080';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  //miPortfolio: any;

//Metodos que tambien tengo en el Backend van aca
  constructor(private http: HttpClient) { }

    /*------------------------------- Ver AcercaDeMi -------------------------------*/

  public obtenerDatosAcercaDeMi(): Observable<AcercaDeMi[]>{

    return this.http.get<AcercaDeMi[]>( this.ProyectoArgPrograma + "/acercaDeMi/ver") 
  }
  /* -------------------------------Editar AcercaDeMi------------------------------- */

  public editarAcercaDeMi(acerDeMi: AcercaDeMi): Observable<AcercaDeMi>{
    
    console.log(acerDeMi);
    
   
    return this.http.put<AcercaDeMi>(this.ProyectoArgPrograma + "/acercaDeMi/editar/", acerDeMi, this.httpOptions);
  }

  obtenerDatos(): Observable<any> {
    return this.http.get('./assets/data/data.json');
  }
  
  /*------------------------------- Eliminar AcercaDeMi------------------------------- */
   public borrarAcercaDeMi(id:number): Observable<any>{
    return this.http.delete<any>(this.ProyectoArgPrograma + "/AcercaDeMi/delete/" +id);
  }
   

}
