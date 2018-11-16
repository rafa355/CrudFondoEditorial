import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";

import { SolicitudesService } from '../../../../../services/solicitudes.service'
import { SolicitantesService } from '../../../../../services/solicitantes.service'
import { ProyectoService } from '../../../../../services/proyecto.service'

import { Observable } from 'rxjs';
import { FormGroup, FormArray, FormBuilder, Validators, NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-edicion',
  templateUrl: './edicion.component.html',
  styleUrls: ['./edicion.component.css']
})
export class EdicionComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService,private route: ActivatedRoute,private _fb: FormBuilder, private router:Router,private solicitudesservice:SolicitudesService,private solicitantesservice:SolicitantesService,private proyectoservice:ProyectoService) {
    this.myForm = this._fb.group({
      nombre: [''],
      publicacion: [''],
      solicitante_id: [''],
      descripcion: [''],
      status: [''],
      observacion: ['']
    });
   }
  public solicitud;
  id: any;
  public solicitantes;
  public myForm: FormGroup;


  ngOnInit() {
    this.id = this.route.snapshot.params["id"];

    this.ObtenerSolicitantes();
    this.ObtenerSolicitud();
  }
  onSubmit(form:NgForm){
    this.editar_solicitud(form.value);

    }
      save(model) {
        this.editar_solicitud(model);
      }
    ObtenerSolicitantes() {
      this.solicitantesservice.obtener_solicitantes().subscribe(
        data => { this.solicitantes = data},
        err => console.error(err),      () => console.log(this.solicitantes)
       );  }

  editar_solicitud(solicitud) {
    this.spinner.show();
        this.solicitudesservice.editar_solicitud(solicitud,this.id).subscribe(
           data => {
            this.spinner.hide();
            this.router.navigate(['/solicitudes']);
          },
           error => {
             console.error("Error saving food!");
             return Observable.throw(error);
           }
        );
      }
      ObtenerSolicitud() {
        this.solicitudesservice.datos_solicitud(this.id).subscribe(
          data => { this.solicitud = data,
            this.myForm = this._fb.group({
              nombre: [this.solicitud.nombre],
              publicacion: [this.solicitud.publicacion],
              solicitante_id: [this.solicitud.solicitante_id],
              descripcion: [this.solicitud.descripcion],
              status: [this.solicitud.status],
              observacion: ['']
            });},
          err => console.error(err),      () => console.log(this.solicitud)
         );
      }
}
