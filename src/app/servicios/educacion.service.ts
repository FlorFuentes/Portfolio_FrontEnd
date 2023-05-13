import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Educacion } from '../Model/educacion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  
  private json = './assets/data/data.json';
  private ProyectoArgPrograma = 'http://localhost:8080';
  private RenderBackend= 'https://portfolio-backend-tmqc.onrender.com';


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  
  constructor(private http:HttpClient) { }

   /*------------------------------- Ver Educacion -------------------------------*/

   public obtenerDatosEducacion(): Observable<Educacion[]>{
    return this.http.get<Educacion[]>(this.RenderBackend + "/educacion/ver");
  }

   /* -------------------------------Editar Educacion------------------------------- */

   public editarEducacion(edu: Educacion): Observable<Educacion>{
    console.log(edu);

    return this.http.put<Educacion>(this.RenderBackend + "/educacion/editar/", edu, this.httpOptions);  
  }

   /*------------------------------- Agregar Educacion------------------------------- */

  public agregarEducacion(edu: Educacion): Observable<Educacion> {
    return this.http.post<Educacion>(this.RenderBackend + `/educacion/new`, edu, this.httpOptions);
  }

  /*------------------------------- Eliminar Educacion------------------------------- */
  public borrarEducacion(id:number): Observable<any>{
    return this.http.delete<any>(this.RenderBackend + "/educacion/delete/" +id);
  }
  




  
}
