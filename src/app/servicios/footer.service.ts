import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Footer } from '../Model/footer';
import { Observable, reduce } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  private json = './assets/data/data.json';
  private ProyectoArgPrograma = 'http://localhost:8080';
  private RenderBackend= 'https://portfolio-backend-tmqc.onrender.com';


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  constructor(private http:HttpClient) { }

  /*------------------------------- Ver Redes -------------------------------*/

  public obtenerDatosFooter(): Observable<Footer[]>{
    return this.http.get<Footer[]>(this.RenderBackend + "/redes/ver");
  }

  /* -------------------------------Editar Redes------------------------------- */

  public editarFooter(foo: Footer): Observable<Footer>{
    console.log(foo);

    return this.http.put<Footer>(this.RenderBackend + "/redes/editar/", foo, this.httpOptions);  
  }

  
}
