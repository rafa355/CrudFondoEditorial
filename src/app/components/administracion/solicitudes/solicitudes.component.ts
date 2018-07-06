import { Component, OnInit } from '@angular/core';
import { SolicitudesService } from '../../../services/solicitudes.service'

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css']
})
export class SolicitudesComponent implements OnInit {

  constructor(private solicitudesservice:SolicitudesService) { }
  public solicitudes;
  ngOnInit() {
    this.ObtenerSolicitudes();
  }
 
  ObtenerSolicitudes() {
   this.solicitudesservice.obtener_solicitudes().subscribe(
     data => { this.solicitudes = data},
     err => console.error(err),      () => console.log(this.solicitudes)
    );  }

}
