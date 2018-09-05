import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
 //http
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';

const httpOptions = {
  method: 'POST',
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()

export class AdjuntoService {

  constructor(private http:HttpClient) { }

  crear_adjunto(adjunto,etapa: string,id: string) {
    let body = JSON.stringify(adjunto);
    console.log(adjunto);
   return this.http.post('http://localhost:8000/api/CrearAdjunto/'+ etapa +'/'+ id, adjunto, httpOptions);
}

  obtener_encargados():Observable<any> {
    return this.http.get('http://localhost:8000/api/ObtenerEncargados')
}
obtener_encargado_principal(id_proyecto: string):Observable<any> {
  return this.http.get('http://localhost:8000/api/ObtenerPrincipal/' + id_proyecto)
}
obtener_tipos_encargados():Observable<any> {
  return this.http.get('http://localhost:8000/api/ObtenerEncargadostype')
}

asignar_encargado(id_proyecto: string,id_encargado: string):Observable<any> {
  return this.http.get('http://localhost:8000/api/AsignarEncargado/' + id_proyecto +'/'+ id_encargado)
}
}
