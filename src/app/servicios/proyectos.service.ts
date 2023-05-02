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

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  constructor(private http:HttpClient) { }

  /*------------------------------- Ver Proyectos -------------------------------*/

  public obtenerDatosProyectos(): Observable<Proyectos[]>{
    return this.http.get<Proyectos[]>(this.ProyectoArgPrograma + "/proyectos/ver");
  }

  /* -------------------------------Editar Proyectos------------------------------- */

  public editarProyectos(pro: Proyectos): Observable<Proyectos>{
    console.log(pro);

    return this.http.put<Proyectos>(this.ProyectoArgPrograma + "/proyectos/editar/", pro, this.httpOptions);  
  }

  /*------------------------------- Agregar Proyectos------------------------------- */

  public agregarProyectos(pro: Proyectos): Observable<Proyectos> {
    return this.http.post<Proyectos>(this.ProyectoArgPrograma + `/proyectos/new`, pro, this.httpOptions);
  }

  /*------------------------------- Eliminar Proyectos------------------------------- */
  public borrarProyectos(id:number): Observable<any>{
    return this.http.delete<any>(this.ProyectoArgPrograma + "/proyectos/delete/" +id);
  }

}
