import { Component, OnInit } from '@angular/core';
import { ProyectoService } from '../../../services/proyecto.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  public proyectos;
   constructor(private proyectoservice:ProyectoService) {}
   ngOnInit() {
    this.obtener_proyectos();
  }
 
  obtener_proyectos() {
   this.proyectoservice.obtener_proyectos().subscribe(
     data => { this.proyectos = data},
     err => console.error(err),      () => console.log(this.proyectos)
    );  }

}
