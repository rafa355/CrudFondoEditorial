import { Component, OnInit } from '@angular/core';
import { SolicitantesService } from '../../../../services/solicitantes.service'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-solicitantes',
  templateUrl: './solicitantes.component.html',
  styleUrls: ['./solicitantes.component.css']
})
export class SolicitantesComponent implements OnInit {

  constructor(private toastr:ToastrService,private solicitantesServices:SolicitantesService) { }
  public solicitantes;
  public notificacion;
  ngOnInit() {
    this.ObtenerSolicitante();
  }
 
  ObtenerSolicitante() {
   this.solicitantesServices.obtener_solicitantes().subscribe(
     data => { this.solicitantes = data},
     err => console.error(err),      () => console.log(this.solicitantes)
    );  }

    EliminarSolicitante(id: string) {
      this.solicitantesServices.eliminar_solicitante(id).subscribe(
         data => { this.notificacion = data,this.toastr.success('Solicitante Eliminado'),this.ngOnInit()},
         err => console.error(err),
        );}
}
