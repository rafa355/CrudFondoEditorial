import { ProyectoService } from './../../../../../services/proyecto.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registro-tipo-proyecto',
  templateUrl: './registro-tipo-proyecto.component.html',
  styleUrls: ['./registro-tipo-proyecto.component.css']
})
export class RegistroTipoProyectoComponent implements OnInit {

  constructor(private toastr:ToastrService,private _fb: FormBuilder, private router:Router,private ProyectoService:ProyectoService) { }
  public solicitantes;
  public tipos;
  public myForm: FormGroup;

  ngOnInit() {
    this.myForm = this._fb.group({
      nombre: [''],
      });
  }

    save(model) {
      this.crear_tipo_proyecto(model);
    }

         crear_tipo_proyecto(tipo) {
        this.ProyectoService.crear_tipo_proyecto(tipo).subscribe(
           data => {
            this.toastr.success('Tipo de Proyecto Creado'),this.router.navigate(['/tipo_proyecto']);
          },
           error => {
             console.error("Error saving food!");
             return Observable.throw(error);
           }
        );
      }

}
