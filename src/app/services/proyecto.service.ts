import { Injectable } from '@angular/core';
import { Proyecto } from '../models/proyecto'
@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  proyectos: Proyecto[] =[
    new Proyecto('1','maria conchita'),
    new Proyecto('2','pedro conchita'),
    new Proyecto('3','pacha conchita'),
  
  ]

  constructor() { }

  ObtenerProyectos(){
    return this.proyectos;
  }

}
