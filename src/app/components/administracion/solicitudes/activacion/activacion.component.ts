import { Component, OnInit } from '@angular/core';
import { SolicitudesService } from '../../../../services/solicitudes.service'
import { ProyectoService } from '../../../../services/proyecto.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-activacion',
  templateUrl: './activacion.component.html',
  styleUrls: ['./activacion.component.css']
})
export class ActivacionComponent implements OnInit {
  public notificacion;

  constructor(private route: ActivatedRoute,private solicitudesservice:SolicitudesService,private proyectoservice:ProyectoService) { }
  id: any;
  proyectos: any;
  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.MostrarProyectos(this.id);
  }

  ActivarSolicitud(id: string) {
    this.solicitudesservice.activar_solicitud(id).subscribe(
       data => { this.notificacion = data},
       err => console.error(err),      () => console.log(this.notificacion)
      );
    }

    MostrarProyectos(id: string) {
      this.proyectoservice.obtener_proyectos_solicitud(id).subscribe(
         data => { this.proyectos = data},
         err => console.error(err),      () => console.log(this.proyectos)
        );
      }

}
