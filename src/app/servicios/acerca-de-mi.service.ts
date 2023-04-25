import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AcercaDeMi } from '../Model/acerca-de-mi';

@Injectable({
  providedIn: 'root'
})
export class AcercaDeMiService {

  private json = './assets/data/data.json';
  private ProyectoArgPrograma = 'http://localhost:8080/acercademi/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  miPortfolio: any;

//Metodos que tambien tengo en el Backend van aca
  constructor(private http: HttpClient) { }

  public obtenerDatosAcercaDeMi(): Observable<AcercaDeMi[]>{

    return this.http.get<AcercaDeMi[]>( "/acercaDeMi/ver") 
  }

  public editarAcercaDeMi(AcercaDeMi: AcercaDeMi): Observable<AcercaDeMi>{
    
    console.log(AcercaDeMi);
    
   
    return this.http.put<AcercaDeMi>('/acercaDeMi/editar', AcercaDeMi);
  }

  obtenerDatos(): Observable<any> {
    return this.http.get('./assets/data/data.json');
  } 
}
