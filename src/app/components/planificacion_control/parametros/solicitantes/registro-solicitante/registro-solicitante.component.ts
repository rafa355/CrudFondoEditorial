import { Component, OnInit } from '@angular/core';
import { SolicitantesService } from '../../../../../services/solicitantes.service'
import { Router } from '@angular/router';
import { FormGroup, FormArray, FormBuilder, Validators, NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registro-solicitante',
  templateUrl: './registro-solicitante.component.html',
  styleUrls: ['./registro-solicitante.component.css']
})
export class RegistroSolicitanteComponent implements OnInit {

  constructor(private toastr:ToastrService,private spinner: NgxSpinnerService,private _fb: FormBuilder, private router:Router,private solicitanteServices:SolicitantesService) { }
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
        this.spinner.show();
        this.solicitanteServices.crear_solicitante(solicitud).subscribe(
           data => {
            this.spinner.hide();
            this.toastr.success('Usuario/Cliente Creado'); 
            this.router.navigate(['/solicitantes']);
          },
           error => {
            this.spinner.hide();
            this.toastr.error('Ha ocurrido un error'); 
           }
        );
      }
}
