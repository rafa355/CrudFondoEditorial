import { Component, OnInit } from '@angular/core';
import { SolicitudesService } from '../../../services/solicitudes.service'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css']
})
export class SolicitudesComponent implements OnInit {

  constructor(private solicitudesservice:SolicitudesService,private toastr:ToastrService) { }
  public solicitudes;
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
}
