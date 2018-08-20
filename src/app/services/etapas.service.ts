import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
 //http
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}; 

@Injectable()

export class EtapasService {

  constructor(private http:HttpClient) {}
 
  obtener_etapa( etapa: string,id: string,):Observable<any> {
    return this.http.get('http://localhost:8000/api/ObtenerEtapa/' + etapa +'/'+ id)
}

activar_etapa( etapa: string, proyecto: string,):Observable<any> {
  return this.http.get('http://localhost:8000/api/ActivarEtapa/' + etapa +'/'+ proyecto)
}

    obtener_etapa_y_adjuntos(etapa: string,id: string,) {
          return Observable.forkJoin(
            this.http.get('http://localhost:8000/api/ObtenerEtapa/' + etapa +'/'+ id),
            this.http.get('http://localhost:8000/api/ObtenerAdjuntos/' + etapa +'/'+ id)
          );
      }
}
