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
export class ContadorService {

  constructor(private http:HttpClient,private global: GlobalComponent) { }
  obtener_contadores() {
    return Observable.forkJoin(
      this.http.get(this.global.url+'ProduccionTotal'),
      this.http.get(this.global.url+'EnPreliminar'),
      this.http.get(this.global.url+'EnDiagramacion'),
      this.http.get(this.global.url+'EnPublicacion'),
    );
}
}
