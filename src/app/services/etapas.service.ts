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
 
  obtener_etapa(id: string, etapa: string):Observable<any> {
    return this.http.get('http://localhost:8000/api/ObtenerEtapa/' + etapa +'/'+ id)
}
}
