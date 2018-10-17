import { Injectable,OnInit } from '@angular/core';
import { Proyecto } from '../models/proyecto'
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

export class ProyectoService  {

  constructor(private http:HttpClient,private global: GlobalComponent) {}
 
  obtener_proyectos() {
      return this.http.get(this.global.url+'ObtenerProyectos');
  }
  obtener_tipos():Observable<any> {
    return this.http.get(this.global.url+'ObtenerTiposProyectos');
}
  obtener_proyecto(id: string):Observable<any> {
    return this.http.get(this.global.url+'ObtenerProyecto/' + id)
}
obtener_proyectos_solicitud(id: string):Observable<any> {
    return this.http.get(this.global.url+'ObtenerProyectos_solicitud/' + id)
}

crear_tipo_proyecto(tipo) {
    return this.http.post(this.global.url+'CrearTipoProyecto', tipo, httpOptions);
 }

eliminar_tipo_proyecto(id: string):Observable<any> {
    return this.http.get(this.global.url+'EliminarTipoProyecto/' + id);
  }
  generar_reporte():Observable<any> {
    return this.http.get(this.global.url+'ImprimirReporte');
}
}
