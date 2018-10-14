import { Injectable } from '@angular/core';

 //http
 import { HttpClient, HttpHeaders } from '@angular/common/http';
 import 'rxjs/Rx';
 import { GlobalComponent } from '../components/planificacion_control/global/global.component' ;

 const httpOptions = {
     method: 'POST',
     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
   };

 @Injectable()

export class ProyeccionesService {

  constructor(private http:HttpClient,private global: GlobalComponent) {}

  obtener_proyecciones() {
    return this.http.get(this.global.url+'ObtenerProyecciones');
}
}
