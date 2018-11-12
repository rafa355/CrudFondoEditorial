import { Component, OnInit, TemplateRef  } from '@angular/core';
import { SolicitudesService } from '../../../../services/solicitudes.service'

import { ToastrService } from 'ngx-toastr';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';


import { Observable } from 'rxjs';
import { FormGroup, FormArray, FormBuilder, Validators, NgForm } from '@angular/forms';
@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css']
})
export class SolicitudesComponent implements OnInit {
  modalRef: BsModalRef;

  constructor(private _fb: FormBuilder,private solicitudesservice:SolicitudesService,private toastr:ToastrService,private modalService: BsModalService) { }
  public solicitudes;
  public solicitud ;
  public id ;
  public notificacion;
  public myForm: FormGroup;

  ngOnInit() {
    this.ObtenerSolicitudes();

    this.myForm = this._fb.group({
      observacion: [''],
    });
  }

  onSubmit(form:NgForm){
    this.AnularSolicitud(form.value,this.id);

    }
      save(model) {
        this.AnularSolicitud(model,this.id);
      }
      ObtenerSolicitudes() {
      this.solicitudesservice.obtener_solicitudes().subscribe(
        data => { this.solicitudes = data},
        err => console.error(err),      () => console.log(this.solicitudes)
        );}


      AnularSolicitud(solicitud,id: string) {
        this.solicitudesservice.anular_solicitud(solicitud,id).subscribe(
           data => { this.notificacion = data,this.toastr.success('Solicitud Anulada'),this.ngOnInit(),this.modalRef.hide()},
           err => console.error(err),      () => console.log(this.notificacion)
          );}

        openModal(template: TemplateRef<any>,otro: TemplateRef<any>, id:string) {
          this.solicitudesservice.datos_solicitud(id).subscribe(
            data => {
              this.solicitud = data;
              if(data.proyecto != 0){
              this.modalRef = this.modalService.show(template);
            }else{
              this.modalRef = this.modalService.show(otro);}},
            err => console.error(err),      () => console.log(this.solicitud)
           );}
           //modal para eliminar solicitud
           ModalEliminar(template: TemplateRef<any>,id:string) {
            this.solicitudesservice.datos_solicitud(id).subscribe(
              data => {
                this.solicitud = data;
                this.id = data.id;
                this.modalRef = this.modalService.show(template);
              }
             );}
}
