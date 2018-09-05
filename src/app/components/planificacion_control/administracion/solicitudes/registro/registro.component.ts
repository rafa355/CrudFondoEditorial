import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SolicitudesService } from '../../../../../services/solicitudes.service'
import { SolicitantesService } from '../../../../../services/solicitantes.service'
import { ProyectoService } from '../../../../../services/proyecto.service'

import { Observable } from 'rxjs';
import { FormGroup, FormArray, FormBuilder, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private _fb: FormBuilder, private router:Router,private solicitudesservice:SolicitudesService,private solicitantesservice:SolicitantesService,private proyectoservice:ProyectoService) { }
  public solicitudes;
  public solicitantes;
  public tipos;
  public myForm: FormGroup;

  ngOnInit() {
    this.ObtenerSolicitantes();
    this.ObtenerTipos();

    this.myForm = this._fb.group({
      nombre: [''],
      publicacion: [''],
      solicitante_id: [''],
      status: [''],
      proyectos: this._fb.array([
      this.initlanguage(),
      ])
      });
  }
  get formData():  FormGroup {return this.myForm.get('proyectos') as FormGroup; }
  onSubmit(form:NgForm){
    this.crear_solicitud(form.value);

    }
    initlanguage() {
      return this._fb.group({
      nombre: [''],
      proyecto_type_id: [''],
      descripcion: ['']
      });
      }

      addLanguage() {
      const control = <FormArray>this.myForm.controls['proyectos'];
      control.push(this.initlanguage());
      }

      removeLanguage(i: number) {
      const control = <FormArray>this.myForm.controls['proyectos'];
      control.removeAt(i);
      }

      save(model) {
        this.crear_solicitud(model);
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
