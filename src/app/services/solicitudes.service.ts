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

export class SolicitudesService {

  constructor(private http:HttpClient,private global: GlobalComponent) { }

  crear_solicitud(solicitud) {
    return this.http.post(this.global.url+'CrearSolicitud', solicitud, httpOptions);
 }
 editar_solicitud(solicitud,id) {
  return this.http.post(this.global.url+'EditarSolicitud/'+id, solicitud, httpOptions);
}

  obtener_solicitudes():Observable<any> {
    return this.http.get(this.global.url+'ObtenerSolicitudes')
  }
  datos_solicitud(id: string):Observable<any> {
    return this.http.get(this.global.url+'ObtenerSolicitud/' + id)
}
  activar_solicitud(formulario,id: string):Observable<any> {
    return this.http.post(this.global.url+'ActivarSolicitud/'+ id, formulario, httpOptions);
}
anular_solicitud(solicitud,id: string):Observable<any> {
  return this.http.post(this.global.url+'EliminarSolicitud/'+id, solicitud, httpOptions);
}
}
