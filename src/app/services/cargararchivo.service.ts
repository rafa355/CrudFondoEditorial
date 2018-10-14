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
export class CargararchivoService {

	constructor(private http: HttpClient,private global: GlobalComponent){}

	public EnviarArchivo(Archivo: File,etapa: string,id: string){
		const formData = new FormData();
		formData.append('imagenPropia', Archivo, Archivo.name); 
		return this.http.post(this.global.url+'CargarImagen/'+ etapa +'/'+ id, formData);
  }
}
