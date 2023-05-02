import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../Model/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private ProyectoArgPrograma = 'http://localhost:8080';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http:HttpClient) { }

  /*------------------------------- Ver Usuario -------------------------------*/

  public obtenerDatosUsuario(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.ProyectoArgPrograma + "/usuarios/ver");
  }

/* -------------------------------Editar Usuario------------------------------- */

public editarUsuario(usu: Usuario): Observable<Usuario>{
  console.log(usu);

  return this.http.put<Usuario>(this.ProyectoArgPrograma + "/usuario/editar/", usu, this.httpOptions);  
}

}
