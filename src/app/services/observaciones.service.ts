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
export class ObservacionesService {

  constructor(private http:HttpClient,private global: GlobalComponent) { }

  crear_observacion_solicitud(observacion,id) {
    return this.http.post(this.global.url+'CrearObservacionSolicitud/'+id, observacion, httpOptions);
 }
 crear_observacion_proyecto(observacion,id) {
  return this.http.post(this.global.url+'CrearObservacionProyecto/'+id, observacion, httpOptions);
}
crear_observacion_encargado(observacion,id) {
  return this.http.post(this.global.url+'CrearObservacionEncargado/'+id, observacion, httpOptions);
}
 obtener_observaciones():Observable<any> {
  return this.http.get(this.global.url+'ObtenerObservaciones')
}
}
