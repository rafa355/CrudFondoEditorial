import { Component, OnInit, Input, TemplateRef  } from '@angular/core';
import { SolicitantesService } from '../../../../services/solicitantes.service'
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormGroup, FormArray, FormBuilder, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-solicitantes',
  templateUrl: './solicitantes.component.html',
  styleUrls: ['./solicitantes.component.css']
})
export class SolicitantesComponent implements OnInit {

  @Input('data') solicitantes: Object[] = [];
  page: number = 1;
  userFilter: any = { nombre: '' };
  solicitante;
  public labels: any = {
    previousLabel: 'Anterior',
    nextLabel: 'Siguiente',
};


  constructor(private _fb: FormBuilder,private modalService: BsModalService,private spinner: NgxSpinnerService,private toastr:ToastrService,private solicitantesServices:SolicitantesService) { }
  public notificacion;
  modalRef: BsModalRef;
  public FormObservacion: FormGroup;

  ngOnInit() {
    this.ObtenerSolicitante();
    this.FormObservacion = this._fb.group({
      actualizacion: [''],
      observacion: [''],
      });
  }
 
  ObtenerSolicitante() {
   this.solicitantesServices.obtener_solicitantes().subscribe(
     data => { this.solicitantes = data },
     err => console.error(err),      () => console.log(this.solicitantes)
    );  }

    EliminarSolicitante(modelo) {
      this.spinner.show();
      this.solicitantesServices.eliminar_solicitante(modelo,this.solicitante).subscribe(
         data => { this.spinner.hide();this.notificacion = data,this.toastr.success('Usuario/Cliente Eliminado'),this.modalRef.hide(),this.ngOnInit()},
         err =>{
          this.spinner.hide();
          this.toastr.error('Ha ocurrido un error'); 
         }
        );}
                                 //modal para eliminar adjunto
                                 ModalEliminar(template: TemplateRef<any>,id:string) {
                                  this.solicitante = id;
                                  this.modalRef = this.modalService.show(template);
                            }
}
