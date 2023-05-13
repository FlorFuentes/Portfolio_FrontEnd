import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../Model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  private json = './assets/data/data.json';
  private ProyectoArgPrograma = 'http://localhost:8080';
  private RenderBackend= 'https://portfolio-backend-tmqc.onrender.com';


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http:HttpClient) { }

  /*------------------------------- Ver Experiencia -------------------------------*/

  public obtenerDatosExperiencia(): Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(this.RenderBackend + "/experiencia/ver");
  }

  /* -------------------------------Editar Experiencia------------------------------- */

  public editarExperiencia(expe: Experiencia): Observable<Experiencia>{
    console.log(expe);

    return this.http.put<Experiencia>(this.RenderBackend + "/experiencia/editar/", expe, this.httpOptions);  
  }

  /*------------------------------- Agregar Experiencia------------------------------- */

  public agregarExperiencia(expe: Experiencia): Observable<Experiencia> {
    return this.http.post<Experiencia>(this.RenderBackend + `/experiencia/new`, expe, this.httpOptions);
  }

  /*------------------------------- Eliminar Experiencia------------------------------- */
  public borrarExperiencia(id:number): Observable<any>{
    return this.http.delete<any>(this.RenderBackend + "/experiencia/delete/" +id);
  }
   
}
