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
export class UsuariosService {

  constructor(private http:HttpClient,private global: GlobalComponent) { }

  obtener_usuarios():Observable<any> {
    return this.http.get(this.global.url+'ObtenerUsuarios')
  }
  obtener_usuario(id):Observable<any> {
    return this.http.get(this.global.url+'ObtenerUsuario/'+ id)
  }
  crear_usuario(usuario) {
   return this.http.post(this.global.url+'CrearUsuario', usuario, httpOptions);
}
eliminar_usuario(usuario,id) {
  return this.http.post(this.global.url+'EliminarUsuario/'+ id, usuario, httpOptions);
 }
}
