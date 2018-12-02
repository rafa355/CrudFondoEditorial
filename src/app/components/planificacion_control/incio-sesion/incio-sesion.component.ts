import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators, NgForm } from '@angular/forms';
import { AutenticacionService } from './../../../services/autenticacion.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-incio-sesion',
  templateUrl: './incio-sesion.component.html',
  styleUrls: ['./incio-sesion.component.css']
})
export class IncioSesionComponent implements OnInit {

  constructor(private toastr:ToastrService,private spinner: NgxSpinnerService,private router:Router,private _fb: FormBuilder,private autenticacion:AutenticacionService) { }
  public tipos;
  id: any;

  public myForm: FormGroup;

  ngOnInit() {
    this.myForm = this._fb.group({
      email: [''],
      password: ['']
      });
  }

  save(model) {
    this.iniciar_sesion(model);
  }
  iniciar_sesion(proyecto) {
    this.spinner.show();
        this.autenticacion.iniciar_sesion(proyecto).subscribe(
           data => {
            this.toastr.success('Sesion Iniciada'); 
            this.spinner.hide();
            this.handleResponse(data);
          },
           error => {
            this.spinner.hide();
            this.toastr.error('Error Iniciando Sesión'); 
           }
        );
   }
  handleResponse(data): any {
    this.autenticacion.verificar_token(data.access_token);
    this.autenticacion.cambiar_status_logueo(true);
    this.router.navigate(['/inicio']);
  }
  pasar_igual(): any {
    this.autenticacion.cambiar_status_logueo(true);
    this.router.navigate(['/inicio']);
  }
}
