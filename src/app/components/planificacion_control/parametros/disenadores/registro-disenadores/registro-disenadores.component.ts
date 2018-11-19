import { Component, OnInit } from '@angular/core';
import { EncargadoService } from '../../../../../services/encargado.service'
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { FormGroup, FormArray, FormBuilder, Validators, NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-registro-disenadores',
  templateUrl: './registro-disenadores.component.html',
  styleUrls: ['./registro-disenadores.component.css']
})
export class RegistroDisenadoresComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService,private _fb: FormBuilder, private router:Router,private encargadoservice:EncargadoService) { }
  public encargados;
  public tipos;
  public myForm: FormGroup;

  ngOnInit() {
    this.ObtenerEncargados();
    this.ObtenerTipos();

    this.myForm = this._fb.group({
      nombre: [''],
      correo: [''],
      responsable_type_id: [''],
      });
  }

    save(model) {
      this.crear_encargado(model);
    }
       ObtenerTipos() {
        this.encargadoservice.obtener_tipos_encargados().subscribe(
          data => { this.tipos = data},
          err => console.error(err),      () => console.log(this.tipos)
         );  }

      ObtenerEncargados() {
          this.encargadoservice.obtener_encargados().subscribe(
            data => { this.encargados = data},
            err => console.error(err),      () => console.log(this.encargados)
           );  }

      crear_encargado(solicitud) {
          this.spinner.show();
        this.encargadoservice.crear_encargado(solicitud).subscribe(
           data => {
            this.spinner.hide();
            this.router.navigate(['/diseñadores']);
          },
           error => {
            this.spinner.hide();
             console.error("Error saving food!");
             return Observable.throw(error);
           }
        );
      }

}
