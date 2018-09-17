import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
 //http
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';
import { GlobalComponent } from '../components/planificacion_control/global/global.component' ;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}; 

@Injectable()

export class EtapasService {

  constructor(private http:HttpClient,private global: GlobalComponent) {}
 
  obtener_etapa( etapa: string,id: string,):Observable<any> {
    return this.http.get(this.global.url+'ObtenerEtapa/' + etapa +'/'+ id)
}

activar_etapa( etapa: string, proyecto: string,):Observable<any> {
  return this.http.get(this.global.url+'ActivarEtapa/' + etapa +'/'+ proyecto)
}

finalizar_etapa( etapa: string, proyecto: string,):Observable<any> {
  return this.http.get(this.global.url+'FinalizarEtapa/' + etapa +'/'+ proyecto)
}

consultar_etapa( etapa: string, proyecto: string,):Observable<any> {
  return this.http.get(this.global.url+'ConsultarEtapa/' + etapa +'/'+ proyecto)
}

cerrar_etapa( etapa: string, proyecto: string,):Observable<any> {
  return this.http.get(this.global.url+'CerrarEtapa/' + etapa +'/'+ proyecto)
}

    obtener_etapas_y_adjuntos(id: string,) {
          return Observable.forkJoin(
            this.http.get(this.global.url+'ObtenerEtapa/' + 1 +'/'+ id),
            this.http.get(this.global.url+'ObtenerEtapa/' + 2 +'/'+ id),
            this.http.get(this.global.url+'ObtenerEtapa/' + 3 +'/'+ id),
            this.http.get(this.global.url+'ObtenerAdjuntos/' + 1 +'/'+ id),
            this.http.get(this.global.url+'ObtenerAdjuntos/' + 2 +'/'+ id),
            this.http.get(this.global.url+'ObtenerAdjuntos/' + 3 +'/'+ id),
          );
      }
}
