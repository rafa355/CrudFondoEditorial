import { Injectable,OnInit } from '@angular/core';
import { Proyecto } from '../models/proyecto'
import {Observable} from 'rxjs';
 //http
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';
import { map } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()

export class ProyectoService  {

  constructor(private http:HttpClient) {}
 
  obtener_proyectos() {
      return this.http.get('http://localhost:8000/api/ObtenerProyectos');
  }
  obtener_tipos() {
    return this.http.get('http://localhost:8000/api/ObtenerTiposProyectos');
}
  obtener_proyecto(id: string):Observable<any> {
    return this.http.get('http://localhost:8000/api/ObtenerProyecto/' + id)
}
obtener_proyectos_solicitud(id: string):Observable<any> {
    return this.http.get('http://localhost:8000/api/ObtenerProyectos_solicitud/' + id)
}
}
