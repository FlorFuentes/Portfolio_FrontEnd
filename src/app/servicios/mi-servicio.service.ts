import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MiServicioService {

  constructor() { }

  obtenerDatos(){
    console.log("El servicio esta corriendo")
  } 
}
