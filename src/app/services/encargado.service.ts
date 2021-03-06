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

export class EncargadoService {

  constructor(private http:HttpClient,private global: GlobalComponent) { }

  crear_encargado(encargado) {
   return this.http.post(this.global.url+'CrearEncargados', encargado, httpOptions);
}
editar_encargado(encargado,id) {
  return this.http.post(this.global.url+'EditarEncargado/'+id, encargado, httpOptions);
}
  obtener_encargados():Observable<any> {
    return this.http.get(this.global.url+'ObtenerEncargados')
}
obtener_encargado(id):Observable<any> {
  return this.http.get(this.global.url+'ObtenerEncargado/'+ id)
}
eliminar_encargado(encargado,id) {
 return this.http.post(this.global.url+'EliminarEncargado/'+ id, encargado, httpOptions);
}
obtener_encargado_principal(id_proyecto: string):Observable<any> {
  return this.http.get(this.global.url+'ObtenerPrincipal/' + id_proyecto)
}
obtener_tipos_encargados():Observable<any> {
  return this.http.get(this.global.url+'ObtenerEncargadostype')
}

asignar_encargado(id_proyecto: string,id_encargado: string):Observable<any> {
  return this.http.get(this.global.url+'AsignarEncargado/' + id_proyecto +'/'+ id_encargado)
}

}
