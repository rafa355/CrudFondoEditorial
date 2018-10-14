import { Component, OnInit, Input } from '@angular/core';
import { ProyectoService } from '../../../../services/proyecto.service'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tipo-proyecto',
  templateUrl: './tipo-proyecto.component.html',
  styleUrls: ['./tipo-proyecto.component.css']
})
export class TipoProyectoComponent implements OnInit {

  @Input('data') tipos: Object[] = [];
  page: number = 1;
  userFilter: any = { nombre: '' };
  public labels: any = {
    previousLabel: 'Anterior',
    nextLabel: 'Siguiente',
};


  constructor(private toastr:ToastrService,private tipos_services:ProyectoService) { }
  public notificacion;
  ngOnInit() {
    this.ObtenerTiposProyecto();
  }
 
  ObtenerTiposProyecto() {
   this.tipos_services.obtener_tipos().subscribe(
     data => { this.tipos = data },
     err => console.error(err),      () => console.log(this.tipos)
    );  }

    EliminarTipoProyecto(id: string) {
      this.tipos_services.eliminar_tipo_proyecto(id).subscribe(
         data => { this.notificacion = data,this.toastr.success('Tipo de Proyecto Eliminado'),this.ngOnInit()},
         err => console.error(err),
        );}

}
