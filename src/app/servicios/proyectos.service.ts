import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from '../Model/proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  private json = './assets/data/data.json';
  private ProyectoArgPrograma = 'http://localhost:8080';
  private RenderBackend= 'https://portfolio-backend-tmqc.onrender.com';


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  constructor(private http:HttpClient) { }

  /*------------------------------- Ver Proyectos -------------------------------*/

  public obtenerDatosProyectos(): Observable<Proyectos[]>{
    return this.http.get<Proyectos[]>(this.RenderBackend + "/proyectos/ver");
  }

  /* -------------------------------Editar Proyectos------------------------------- */

  public editarProyectos(pro: Proyectos): Observable<Proyectos>{
    console.log(pro);

    return this.http.put<Proyectos>(this.RenderBackend + "/proyectos/editar/", pro, this.httpOptions);  
  }

  /*------------------------------- Agregar Proyectos------------------------------- */

  public agregarProyectos(pro: Proyectos): Observable<Proyectos> {
    return this.http.post<Proyectos>(this.RenderBackend + `/proyectos/new`, pro, this.httpOptions);
  }

  /*------------------------------- Eliminar Proyectos------------------------------- */
  public borrarProyectos(id:number): Observable<any>{
    return this.http.delete<any>(this.RenderBackend + "/proyectos/delete/" +id);
  }

}
