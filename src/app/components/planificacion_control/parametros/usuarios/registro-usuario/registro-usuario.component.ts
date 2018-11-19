import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { FormGroup, FormArray, FormBuilder, Validators, NgForm } from '@angular/forms';
import { EncargadoService } from 'src/app/services/encargado.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {


  constructor(private _fb: FormBuilder, private router:Router,private usuarioservices:UsuariosService) { }
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
        this.usuarioservices.crear_usuario(formulario).subscribe(
           data => {
            this.router.navigate(['/usuarios']);
          },
           error => {
             console.error("Error guardando usuario");
             return Observable.throw(error);
           }
        );
      }

}
