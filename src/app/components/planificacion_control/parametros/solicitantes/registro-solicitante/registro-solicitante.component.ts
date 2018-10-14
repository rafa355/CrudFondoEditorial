import { Component, OnInit } from '@angular/core';
import { SolicitantesService } from '../../../../../services/solicitantes.service'
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { FormGroup, FormArray, FormBuilder, Validators, NgForm } from '@angular/forms';
@Component({
  selector: 'app-registro-solicitante',
  templateUrl: './registro-solicitante.component.html',
  styleUrls: ['./registro-solicitante.component.css']
})
export class RegistroSolicitanteComponent implements OnInit {

  constructor(private _fb: FormBuilder, private router:Router,private solicitanteServices:SolicitantesService) { }
  public solicitantes;
  public tipos;
  public myForm: FormGroup;

  ngOnInit() {
    this.myForm = this._fb.group({
      nombre: [''],
      solicitante_type_id: [''],
      });
  }

    save(model) {
      this.crear_solicitante(model);
    }

         crear_solicitante(solicitud) {
        this.solicitanteServices.crear_solicitante(solicitud).subscribe(
           data => {
            this.router.navigate(['/solicitantes']);
          },
           error => {
             console.error("Error saving food!");
             return Observable.throw(error);
           }
        );
      }
}
