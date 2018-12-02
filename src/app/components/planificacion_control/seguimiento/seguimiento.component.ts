import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ProyectoService } from '../../../services/proyecto.service';
import { EncargadoService } from '../../../services/encargado.service';
import { FormGroup, FormArray, FormBuilder, Validators, NgForm } from '@angular/forms';
import {DomSanitizer} from '@angular/platform-browser';

import { ToastrService } from 'ngx-toastr';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { CargararchivoService } from 'src/app/services/cargararchivo.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { GlobalComponent } from '../global/global.component';

@Component({
  selector: 'app-seguimiento',
  templateUrl: './seguimiento.component.html',
  styleUrls: ['./seguimiento.component.css']
})
export class SeguimientoComponent implements OnInit {
  id: any;
  proyecto:any={id:'',nombre:'',responsable:'',descripcion:''};
  listado_encargados: any={};
  e_principal: '';
  tipo: '';
  modalRef: BsModalRef;

  constructor(private GlobalComponent:GlobalComponent,private sanitizer:DomSanitizer,private spinner: NgxSpinnerService,private enviandoArchivo: CargararchivoService,private _fb: FormBuilder,private route: ActivatedRoute,private proyectoservice: ProyectoService,private encargadoservice: EncargadoService,private toastr:ToastrService,private modalService: BsModalService) {}
  public myForm: FormGroup;
  url = this.GlobalComponent.urlImagen;

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.MostrarProyecto(this.id);
    this.mostrar_principal();
    this.myForm = this._fb.group({
      ubicacion: [''],
      });
  }

  MostrarProyecto(id: string) {
   this.proyectoservice.obtener_proyecto(id).subscribe(
      data => { this.proyecto = data,this.tipo = data.proyectotype.nombre},
      err => console.error(err)
     );
   }

          //Metodo para cargar el archivo
          public CargarArchivo(files: FileList){
              this.spinner.show();
              this.enviandoArchivo.CargarImagen(files[0],this.id).subscribe(
                data => {
                  this.spinner.hide();
                  this.toastr.success('Imagen Cambiada');
                  this.ngOnInit();
                },
                error => {
                  this.spinner.hide();
                  this.toastr.error('Ha ocurrido un error');
                }
              );//FIN DE METODO SUBSCRIBE
            }

   Modal_Encargado(template: TemplateRef<any>) {
    this.encargadoservice.obtener_encargados().subscribe(
      data => { this.listado_encargados = data},
      err => console.error(err),      () => console.log(this.listado_encargados)
     );
    this.modalRef = this.modalService.show(template);
  }
  asignar_encargado(encargado:string) {
    this.encargadoservice.asignar_encargado(this.id,encargado).subscribe(
      data => { this.toastr.success('Encargado Asignado'),this.ngOnInit(),this.modalRef.hide();},
      err => console.error(err)
     );
  }

  mostrar_principal() {
    this.encargadoservice.obtener_encargado_principal(this.id).subscribe(
    data => { if(data){ this.e_principal = data.encargado.nombre}else{this.e_principal = data}},
      err => console.error(err),() => console.log(this.e_principal)
     );
  }

}
