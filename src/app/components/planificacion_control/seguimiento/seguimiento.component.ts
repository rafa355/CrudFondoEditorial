import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ProyectoService } from '../../../services/proyecto.service';
import { EncargadoService } from '../../../services/encargado.service';

import { ToastrService } from 'ngx-toastr';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-seguimiento',
  templateUrl: './seguimiento.component.html',
  styleUrls: ['./seguimiento.component.css']
})
export class SeguimientoComponent implements OnInit {
  id: any;
  proyecto:any={id:'',nombre:'',responsable:'',descripcion:''};
  listado_encargados: any={};
  e_principal: any={};
  modalRef: BsModalRef;

  constructor(private route: ActivatedRoute,private proyectoservice: ProyectoService,private encargadoservice: EncargadoService,private toastr:ToastrService,private modalService: BsModalService) {}

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.MostrarProyecto(this.id);
    this.mostrar_principal();
  }

  MostrarProyecto(id: string) {
   this.proyectoservice.obtener_proyecto(id).subscribe(
      data => { this.proyecto = data},
      err => console.error(err),      () => console.log(this.proyecto)
     ); 
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
      data => { this.toastr.success('Encargado Asignado'),this.ngOnInit()},
      err => console.error(err)
     );
  }

  mostrar_principal() {
    this.encargadoservice.obtener_encargado_principal(this.id).subscribe(
      data => { this.e_principal = data},
      err => console.error(err)
     );
  }
}
