import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SolicitudesService } from '../../../../services/solicitudes.service'
import { SolicitantesService } from '../../../../services/solicitantes.service'
import { ProyectoService } from '../../../../services/proyecto.service'

import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private router:Router,private solicitudesservice:SolicitudesService,private solicitantesservice:SolicitantesService,private proyectoservice:ProyectoService) { }
  public solicitudes;
  public solicitantes;
  public tipos;

  ngOnInit() {
    this.ObtenerSolicitantes();
    this.ObtenerTipos();
  }
  onSubmit(form:NgForm){
    this.crear_solicitud(form.value);

    }
    
    ObtenerSolicitantes() {
      this.solicitantesservice.obtener_solicitantes().subscribe(
        data => { this.solicitantes = data},
        err => console.error(err),      () => console.log(this.solicitantes)
       );  }
   
       ObtenerTipos() {
        this.proyectoservice.obtener_tipos().subscribe(
          data => { this.tipos = data},
          err => console.error(err),      () => console.log(this.tipos)
         );  }
  
  crear_solicitud(solicitud) {
        this.solicitudesservice.crear_solicitud(solicitud).subscribe(
           data => {
            this.router.navigate(['/solicitudes']);
          },
           error => {
             console.error("Error saving food!");
             return Observable.throw(error);
           }
        );
      }

}
