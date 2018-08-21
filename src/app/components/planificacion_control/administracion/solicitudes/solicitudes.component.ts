import { Component, OnInit, TemplateRef  } from '@angular/core';
import { SolicitudesService } from '../../../../services/solicitudes.service'

import { ToastrService } from 'ngx-toastr';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css']
})
export class SolicitudesComponent implements OnInit {
  modalRef: BsModalRef;

  constructor(private solicitudesservice:SolicitudesService,private toastr:ToastrService,private modalService: BsModalService) { }
  public solicitudes;
  public solicitud ;
  public notificacion;
  ngOnInit() {
    this.ObtenerSolicitudes();
  }
  ActivarSolicitud(id: string) {
    this.solicitudesservice.activar_solicitud(id).subscribe(
       data => { this.notificacion = data,this.toastr.success('Solicitud Activada'),this.ngOnInit()},
       err => console.error(err),      () => console.log(this.notificacion)
      );
    }
  ObtenerSolicitudes() {
   this.solicitudesservice.obtener_solicitudes().subscribe(
     data => { this.solicitudes = data},
     err => console.error(err),      () => console.log(this.solicitudes)
    );  }


      AnularSolicitud(id: string) {
        this.solicitudesservice.anular_solicitud(id).subscribe(
           data => { this.notificacion = data,this.toastr.success('Solicitud Anulada'),this.ngOnInit()},
           err => console.error(err),      () => console.log(this.notificacion)
          );
        }

        openModal(template: TemplateRef<any>, id:string) {
          this.solicitudesservice.datos_solicitud(id).subscribe(
            data => { this.solicitud = data},
            err => console.error(err),      () => console.log(this.solicitud)
           );
          this.modalRef = this.modalService.show(template);
        }
}
