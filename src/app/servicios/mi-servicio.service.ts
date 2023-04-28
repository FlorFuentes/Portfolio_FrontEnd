import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Banner } from '../Model/banner';

@Injectable({
  providedIn: 'root'
})
export class MiServicioService {

  private json = './assets/data/data.json';
  private ProyectoArgPrograma = 'http://localhost:8080';//Saque el (/banner/) xq tp funciona

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http:HttpClient) { }

  /*------------------------------- Ver Banner -------------------------------*/
  public obtenerDatosBanner(): Observable<Banner[]>{

    return this.http.get<Banner[]>(this.ProyectoArgPrograma + "/banner/ver");
  }

  /* -------------------------------Editar Banner------------------------------- */
  public editarBanner(banner: Banner): Observable<Banner>{
    
    console.log(banner);
    
   
    return this.http.put<Banner>(this.ProyectoArgPrograma + "/banner/editar/", banner, this.httpOptions);  
  }

    obtenerDatos(): Observable<any> {
    return this.http.get('./assets/data/data.json');
  } 

  /*------------------------------- Eliminar Banner------------------------------- */
  /* public borrarBanner(id:number): Observable<any>{
    return this.http.delete<any>(this.ProyectoArgPrograma + "/banner/delete/" +id);
  }
   */
}
