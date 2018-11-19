import { GlobalComponent } from './../../global/global.component';
import { Component, OnInit,Input,TemplateRef } from '@angular/core';
import { ProyectoService } from '../../../../services/proyecto.service';
import { Observable } from 'rxjs';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  @Input('data') encargados: Object[] = [];
  page: number = 1;
  userFilter: any = { nombre: '' };
  public labels: any = {
    previousLabel: 'Anterior',
    nextLabel: 'Siguiente',
};
modalRef: BsModalRef;

public proyectos;
public id;
public proyecto;
constructor(private modalService: BsModalService,private proyectoservice:ProyectoService,private GlobalComponent:GlobalComponent) {}
   ngOnInit() {
    this.obtener_proyectos();
  }
 url = this.GlobalComponent.url+'ImprimirReporte';
  obtener_proyectos() {
   this.proyectoservice.obtener_proyectos().subscribe(
     data => { this.proyectos = data},
     err => console.error(err),      () => console.log(this.proyectos)
    );  }

           //modal para eliminar solicitud
           ModalEliminar(template: TemplateRef<any>,id:string) {
            this.proyectoservice.obtener_proyecto(id).subscribe(
              data => {
                this.proyecto = data;
                this.id = data.id;
                this.modalRef = this.modalService.show(template);
              }
             );}

}
