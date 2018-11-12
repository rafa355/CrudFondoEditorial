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

  crear_observacion(observacion) {
    return this.http.post(this.global.url+'CrearObservacion', observacion, httpOptions);
 }
}
