import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidades } from '../Model/habilidades';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {

  private json = './assets/data/data.json';
  private ProyectoArgPrograma = 'http://localhost:8080';
  private RenderBackend= 'https://portfolio-backend-tmqc.onrender.com';


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http:HttpClient) { }

/*------------------------------- Ver Habilidades -------------------------------*/

public obtenerDatosHabilidades(): Observable<Habilidades[]>{
  return this.http.get<Habilidades[]>(this.RenderBackend + "/habilidades/ver");
}

/* -------------------------------Editar Habilidades------------------------------- */

public editarHabilidades(hab: Habilidades): Observable<Habilidades>{
  console.log(hab);

  return this.http.put<Habilidades>(this.RenderBackend + "/habilidades/editar/", hab, this.httpOptions);  
}

/*------------------------------- Agregar Habilidades------------------------------- */

public agregarHabilidades(hab: Habilidades): Observable<Habilidades> {
  return this.http.post<Habilidades>(this.RenderBackend + `/habilidades/new`, hab, this.httpOptions);
}

/*------------------------------- Eliminar Habilidades------------------------------- */
public borrarHabilidades(id:number): Observable<any>{
  return this.http.delete<any>(this.RenderBackend + "/habilidades/delete/" +id);
}





}
