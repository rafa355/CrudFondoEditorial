import { Injectable } from '@angular/core';
import { Proyecto } from '../models/proyecto'
import { Http } from '@angular/http';

//http
import { HttpModule } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  proyectos: Proyecto[] =[
    new Proyecto('1','maria conchita'),
    new Proyecto('2','pedro conchita'),
    new Proyecto('3','pacha conchita'),
    new Proyecto('4','johu conchita'),
  
  ]

  constructor(private http:Http) { }

  ObtenerProyectos(): Observable<Proyecto[]>{
    return this.http.get('link de api aqui').map((response: Response) => response.json());
  }

}
