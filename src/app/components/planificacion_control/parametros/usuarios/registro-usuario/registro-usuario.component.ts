import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { FormGroup, FormArray, FormBuilder, Validators, NgForm } from '@angular/forms';
import { EncargadoService } from 'src/app/services/encargado.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {


  constructor(private toastr:ToastrService,private spinner: NgxSpinnerService,private _fb: FormBuilder, private router:Router,private usuarioservices:UsuariosService) { }
  public encargados;
  public tipos;
  public myForm: FormGroup;

  ngOnInit() {
   this.myForm = this._fb.group({
      name: [''],
      email: [''],
      password: [''],
      });
  }

    save(model) {
      this.crear_usuario(model);
    }

    crear_usuario(formulario) {
          this.spinner.show();
        this.usuarioservices.crear_usuario(formulario).subscribe(
           data => {
            this.toastr.success('Usuario Creado'); 
            this.router.navigate(['/usuarios']);
          },
           error => {
            this.spinner.hide();
            this.toastr.error('Ha ocurrido un error'); 
           }
        );
      }

}
