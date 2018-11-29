import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
 //http
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';
import { GlobalComponent } from '../components/planificacion_control/global/global.component' ;

const httpOptions = {
  method: 'POST',
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}; 
@Injectable()
export class ContadorService {

  constructor(private http:HttpClient,private global: GlobalComponent) { }
  obtener_contadores(formulario) {
    return Observable.forkJoin(
      this.http.post(this.global.url+'SolicitudesEstado', formulario, httpOptions),
      this.http.post(this.global.url+'SolicitudesUsuarioCliente', formulario, httpOptions),
      this.http.post(this.global.url+'SolicitudesTipo', formulario, httpOptions),
      this.http.post(this.global.url+'ProyectosUsuarioCliente', formulario, httpOptions),
      this.http.post(this.global.url+'ProyectosGenerales', formulario, httpOptions),
    );
}
obtener_contadores_principal() {
  return this.http.get(this.global.url+'ObtenerContadoresGenerales');
}
}
