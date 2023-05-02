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

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http:HttpClient) { }

/*------------------------------- Ver Habilidades -------------------------------*/

public obtenerDatosHabilidades(): Observable<Habilidades[]>{
  return this.http.get<Habilidades[]>(this.ProyectoArgPrograma + "/habilidades/ver");
}

/* -------------------------------Editar Habilidades------------------------------- */

public editarHabilidades(hab: Habilidades): Observable<Habilidades>{
  console.log(hab);

  return this.http.put<Habilidades>(this.ProyectoArgPrograma + "/habilidades/editar/", hab, this.httpOptions);  
}

/*------------------------------- Agregar Habilidades------------------------------- */

public agregarHabilidades(hab: Habilidades): Observable<Habilidades> {
  return this.http.post<Habilidades>(this.ProyectoArgPrograma + `/habilidades/new`, hab, this.httpOptions);
}

/*------------------------------- Eliminar Habilidades------------------------------- */
public borrarHabilidades(id:number): Observable<any>{
  return this.http.delete<any>(this.ProyectoArgPrograma + "/habilidades/delete/" +id);
}





}
