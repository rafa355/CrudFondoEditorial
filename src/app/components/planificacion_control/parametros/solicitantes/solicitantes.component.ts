import { Component, OnInit, Input } from '@angular/core';
import { SolicitantesService } from '../../../../services/solicitantes.service'
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-solicitantes',
  templateUrl: './solicitantes.component.html',
  styleUrls: ['./solicitantes.component.css']
})
export class SolicitantesComponent implements OnInit {

  @Input('data') solicitantes: Object[] = [];
  page: number = 1;
  userFilter: any = { nombre: '' };
  public labels: any = {
    previousLabel: 'Anterior',
    nextLabel: 'Siguiente',
};


  constructor(private spinner: NgxSpinnerService,private toastr:ToastrService,private solicitantesServices:SolicitantesService) { }
  public notificacion;
  ngOnInit() {
    this.ObtenerSolicitante();
  }
 
  ObtenerSolicitante() {
   this.solicitantesServices.obtener_solicitantes().subscribe(
     data => { this.solicitantes = data },
     err => console.error(err),      () => console.log(this.solicitantes)
    );  }

    EliminarSolicitante(id: string) {
      this.spinner.show();
      this.solicitantesServices.eliminar_solicitante(id).subscribe(
         data => { this.spinner.hide();this.notificacion = data,this.toastr.success('Usuario/Cliente Eliminado'),this.ngOnInit()},
         err =>{
          this.spinner.hide();
          this.toastr.error('Ha ocurrido un error'); 
         }
        );}
}
