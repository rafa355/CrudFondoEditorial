import { Component, OnInit,TemplateRef } from '@angular/core';
import { EncargadoService } from '../../../../../services/encargado.service'
import { Router, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { FormGroup, FormArray, FormBuilder, Validators, NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ObservacionesService } from 'src/app/services/observaciones.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-edicion-disenadores',
  templateUrl: './edicion-disenadores.component.html',
  styleUrls: ['./edicion-disenadores.component.css']
})
export class EdicionDisenadoresComponent implements OnInit {

  constructor(private modalService: BsModalService,private observacionesservice:ObservacionesService,private toastr:ToastrService,private spinner: NgxSpinnerService,private route: ActivatedRoute,private _fb: FormBuilder, private router:Router,private encargadoservice:EncargadoService) { }
  public encargado;
  public tipos;
  public myForm: FormGroup;
  public ObservaconForm: FormGroup;
  public id;
  public formulario;
  modalRef: BsModalRef;

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.ObtenerEncargado();
    this.ObtenerTipos();
    this.ObservaconForm = this._fb.group({
      observacion: [''],
      actualizacion: [''],
    });
  }

  save(model) {
    this.editar_encargado(this.formulario,model);
  }


     editar_encargado(encargado,observacion) {
      this.spinner.show();
          this.encargadoservice.editar_encargado(encargado,this.id).subscribe(
             data => {
              this.crear_observacion(observacion),
              this.spinner.hide();
              this.toastr.success('Edición Realizada'); 
              this.router.navigate(['/diseñadores']);
            },
             error => {
              this.spinner.hide();
              this.toastr.error('Ha ocurrido un error'); 
             }
          );
     }
       ObtenerTipos() {
        this.encargadoservice.obtener_tipos_encargados().subscribe(
          data => { this.tipos = data},
          err => console.error(err),      () => console.log(this.tipos)
         );  }

      ObtenerEncargado() {
          this.encargadoservice.obtener_encargado(this.id).subscribe(
            data => {
              this.encargado = data;
              this.myForm = this._fb.group({
              nombre: [this.encargado.nombre],
              correo: [this.encargado.correo],
              responsable_type_id: [this.encargado.responsable_type_id],
              });
              },
            err => console.error(err),      () => console.log(this.encargado)
           );  }
                       //modal para crear observacion
                       ModalObservacion(template: TemplateRef<any>,formulario) {
                        this.formulario = formulario;
                         this.modalRef = this.modalService.show(template);
                     }
                     crear_observacion(observacion){
                       this.observacionesservice.crear_observacion_encargado(observacion,this.id).subscribe(
                         data => {
                           this.modalRef.hide();
                           console.log('comentario creado');
                        },
                         error => {
                           this.toastr.error('Ha ocurrido un error'); 
                         }
                      );
                     }

}
