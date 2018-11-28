import { Component, OnInit,TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";

import { SolicitudesService } from '../../../../../services/solicitudes.service'
import { SolicitantesService } from '../../../../../services/solicitantes.service'
import { ProyectoService } from '../../../../../services/proyecto.service'
import { ObservacionesService } from '../../../../../services/observaciones.service'
import { FormGroup, FormArray, FormBuilder, Validators, NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-edicion',
  templateUrl: './edicion.component.html',
  styleUrls: ['./edicion.component.css']
})
export class EdicionComponent implements OnInit {

  constructor(private modalService: BsModalService,private toastr:ToastrService,private spinner: NgxSpinnerService,private route: ActivatedRoute,private _fb: FormBuilder, private router:Router,private observacionesservice:ObservacionesService,private solicitudesservice:SolicitudesService,private solicitantesservice:SolicitantesService,private proyectoservice:ProyectoService) { }
  public solicitud;
  public formulario;
  id: any;
  public solicitantes;
  public myForm: FormGroup;
  public ObservaconForm: FormGroup;

  modalRef: BsModalRef;
  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.ObtenerSolicitantes();
    this.ObtenerSolicitud();
    this.ObservaconForm = this._fb.group({
      observacion: [''],
      actualizacion: [''],
    });
  }
  save(model) {
        this.editar_solicitud(this.formulario,model);
      }
    ObtenerSolicitantes() {
      this.solicitantesservice.obtener_solicitantes().subscribe(
        data => { this.solicitantes = data},
        err => console.error(err),      () => console.log(this.solicitantes)
       );  }

  editar_solicitud(solicitud,observacion) {
    this.spinner.show();
        this.solicitudesservice.editar_solicitud(solicitud,this.id).subscribe(
           data => {
            this.crear_observacion(observacion),
            this.toastr.success('Edición Realizada'); 
            this.spinner.hide();
            this.router.navigate(['/solicitudes']);
          },
           error => {
            this.spinner.hide();
            this.toastr.error('Ha ocurrido un error'); 
           }
        );
      }
      ObtenerSolicitud() {
        this.solicitudesservice.datos_solicitud(this.id).subscribe(
          data => { this.solicitud = data,
            this.myForm = this._fb.group({
              nombre: [this.solicitud.nombre],
              publicacion: [this.solicitud.publicacion],
              solicitante_id: [this.solicitud.solicitante_id],
              descripcion: [this.solicitud.descripcion],
              contacto: [this.solicitud.contacto],
              correo: [this.solicitud.correo],
              telefono: [this.solicitud.telefono],
              status: [this.solicitud.status],
            });},
          err => console.error(err),      () => console.log(this.solicitud)
         );
      }
                 //modal para crear observacion
                 ModalObservacion(template: TemplateRef<any>,formulario) {
                   this.formulario = formulario;
                    this.modalRef = this.modalService.show(template);
                }
                crear_observacion(observacion){
                  this.observacionesservice.crear_observacion_solicitud(observacion,this.id).subscribe(
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
