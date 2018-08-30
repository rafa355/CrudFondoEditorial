import { Injectable } from '@angular/core';
import { Encargado } from '../models/encargado'
import {Observable} from 'rxjs';
 //http
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';
import { map } from 'rxjs/operators';

const httpOptions = {
  method: 'POST',
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()

export class EncargadoService {

  constructor(private http:HttpClient) { }

  crear_encargado(encargado) {
    let body = JSON.stringify(encargado);
    console.log(encargado);
   return this.http.post('http://localhost:8000/api/CrearEncargados', encargado, httpOptions);
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
