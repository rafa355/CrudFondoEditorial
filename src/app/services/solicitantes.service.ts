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
export class SolicitantesService {

  constructor(private http:HttpClient,private global: GlobalComponent) { }

  obtener_solicitantes():Observable<any> {
    return this.http.get(this.global.url+'ObtenerSolicitantes')
  }

  crear_solicitante(solicitante) {
   return this.http.post(this.global.url+'CrearSolicitante', solicitante, httpOptions);
}
eliminar_solicitante(modelo,id: string):Observable<any> {
  return this.http.post(this.global.url+'EliminarSolicitante/'+id, modelo, httpOptions);
}
}
