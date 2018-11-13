import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SolicitudesService } from '../../../../../services/solicitudes.service'
import { SolicitantesService } from '../../../../../services/solicitantes.service'
import { ProyectoService } from '../../../../../services/proyecto.service'

import { Observable } from 'rxjs';
import { FormGroup, FormArray, FormBuilder, Validators, NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService,private _fb: FormBuilder, private router:Router,private solicitudesservice:SolicitudesService,private solicitantesservice:SolicitantesService,private proyectoservice:ProyectoService) { }
  public solicitudes;
  public solicitantes;
  public myForm: FormGroup;


  ngOnInit() {
    this.ObtenerSolicitantes();
    this.myForm = this._fb.group({
      nombre: [''],
      publicacion: [''],
      solicitante_id: [''],
      descripcion: [''],
      status: ['']
    });
  }
  onSubmit(form:NgForm){
    this.crear_solicitud(form.value);

    }
      save(model) {
        this.crear_solicitud(model);
      }
    ObtenerSolicitantes() {
      this.solicitantesservice.obtener_solicitantes().subscribe(
        data => { this.solicitantes = data},
        err => console.error(err),      () => console.log(this.solicitantes)
       );  }  

  crear_solicitud(solicitud) {
    this.spinner.show();
        this.solicitudesservice.crear_solicitud(solicitud).subscribe(
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

}
