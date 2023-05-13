import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../Model/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private ProyectoArgPrograma = 'http://localhost:8080';
  private RenderBackend= 'https://portfolio-backend-tmqc.onrender.com';


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http:HttpClient) { }

  /*------------------------------- Ver Usuario -------------------------------*/

  public obtenerDatosUsuario(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.RenderBackend + "/usuarios/ver");
  }

/* -------------------------------Editar Usuario------------------------------- */

public editarUsuario(usu: Usuario): Observable<Usuario>{
  console.log(usu);

  return this.http.put<Usuario>(this.RenderBackend + "/usuario/editar/", usu, this.httpOptions);  
}

}
