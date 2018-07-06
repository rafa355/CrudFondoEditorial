import { Injectable } from '@angular/core';
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

export class SolicitudesService {

  constructor(private http:HttpClient) { }

  crear_solicitud(solicitud) {
            let body = JSON.stringify(solicitud);
           return this.http.post('http://localhost:8000/api/CrearSolicitud', solicitud, httpOptions);
        }
          
  obtener_solicitudes():Observable<any> {
    return this.http.get('http://localhost:8000/api/ObtenerSolicitudes')
  }
}
