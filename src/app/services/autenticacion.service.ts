import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

 //http
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';
import { GlobalComponent } from '../components/planificacion_control/global/global.component' ;

const httpOptions = {
  method: 'POST',
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AutenticacionService {
  private LogueadoValido = new BehaviorSubject <boolean>(this.logueado());
  StatusLogueo = this.LogueadoValido.asObservable();

  constructor(private http:HttpClient,private global: GlobalComponent) { }

  iniciar_sesion(formulario) {
   return this.http.post(this.global.url+'login', formulario, httpOptions);
  }
  logueado(){
    return this.validar_token();
  }
  cambiar_status_logueo(value: boolean){
    this.LogueadoValido.next(value)
  }
  verificar_token(access_token: any): any {
    this.guardar_token(access_token);
  }

  guardar_token(token){
    localStorage.setItem('token',token)
  }
  obtener_token(){
    return localStorage.getItem('token')
  }
  remover_token(){
    localStorage.removeItem('token')
  }
  validar_token(){
   const token = this.obtener_token();
    if(token){
      const valido = this.separar_token(token)
      if(valido){
        return (valido.iss === this.global.url+'login')? true:false; 
      }
    }
    return false;
  }
  separar_token(token){
    const separado =token.split('.')[1];
    return this.decodificar_token(separado);
  }
  decodificar_token(separado: any): any {
    return JSON.parse(atob(separado))
  }

}

