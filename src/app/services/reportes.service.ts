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

export class ReportesService {

  constructor(private http:HttpClient,private global: GlobalComponent) { }

  generar_reporte(rango,tipo) {
    return this.http.post(this.global.url+'GenerarReporte/'+ tipo, rango, httpOptions);
 }
 public getPDF(url): Observable<Blob> {   
      return this.http.get(this.global.url+'ImprimReporte/'+url, { responseType: 'blob' });
  }
  
}
