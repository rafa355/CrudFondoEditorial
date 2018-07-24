import { Component, OnInit , OnChanges} from '@angular/core';
import { SolicitudesService } from '../../../../services/solicitudes.service'
import { ProyectoService } from '../../../../services/proyecto.service'
import { EncargadoService } from '../../../../services/encargado.service'
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { FormGroup, FormArray, FormBuilder, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-activacion',
  templateUrl: './activacion.component.html',
  styleUrls: ['./activacion.component.css']
})
export class ActivacionComponent implements OnInit {
  public notificacion;
  public myForm: FormGroup;

  constructor(private router:Router,private _fb: FormBuilder,private route: ActivatedRoute,private solicitudesservice:SolicitudesService,private proyectoservice:ProyectoService,private encargadoservice:EncargadoService) { }
  id: any;
  proyectos: any;
  encargados: any;
  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.MostrarProyectos(this.id);
    this.ObtenerEncargados();

    this.myForm = this._fb.group({
      proyectos: this._fb.array([
        this._fb.group({
          proyecto_id: [''],
          encargado_id: [''],
          })
        ])
      });

  }

  ngOnchanges(){}
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

      ObtenerEncargados() {
        this.encargadoservice.obtener_encargados().subscribe(
          data => { this.encargados = data},
          err => console.error(err),      () => console.log(this.encargados)
         );  }

      Asignar(id_proyecto:string,id_encargado:string){
        this.encargadoservice.asignar_encargado(id_proyecto,id_encargado).subscribe(
          data => { this.notificacion = data},
          err => console.error(err),      () => console.log(this.notificacion)
         );       }

}
