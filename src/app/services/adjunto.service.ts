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

export class AdjuntoService {

  constructor(private http:HttpClient,private global: GlobalComponent) { }

  crear_adjunto(adjunto,id: string) {
    let body = JSON.stringify(adjunto);
    console.log(adjunto);
   return this.http.post(this.global.url+'CrearAdjunto/'+ id, adjunto, httpOptions);
}

  obtener_encargados():Observable<any> {
    return this.http.get(this.global.url+'ObtenerEncargados')
}
obtener_encargado_principal(id_proyecto: string):Observable<any> {
  return this.http.get(this.global.url+'ObtenerPrincipal/' + id_proyecto)
}
obtener_tipos_encargados():Observable<any> {
  return this.http.get(this.global.url+'ObtenerEncargadostype')
}

asignar_encargado(id_proyecto: string,id_encargado: string):Observable<any> {
  return this.http.get(this.global.url+'AsignarEncargado/' + id_proyecto +'/'+ id_encargado)
}
}
