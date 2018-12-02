import { Component, OnInit, Input, TemplateRef  } from '@angular/core';
import { ProyectoService } from '../../../../services/proyecto.service'
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormGroup, FormArray, FormBuilder, Validators, NgForm } from '@angular/forms';
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


  constructor(private _fb: FormBuilder,private modalService: BsModalService,private spinner: NgxSpinnerService,private toastr:ToastrService,private tipos_services:ProyectoService) { }
  public notificacion;
  modalRef: BsModalRef;
  public FormObservacion: FormGroup;
  tipo_proyecto;

  ngOnInit() {
    this.ObtenerTiposProyecto();
    this.FormObservacion = this._fb.group({
      actualizacion: [''],
      observacion: [''],
      });
  }
 
  ObtenerTiposProyecto() {
   this.tipos_services.obtener_tipos().subscribe(
     data => { this.tipos = data },
     err => console.error(err),      () => console.log(this.tipos)
    );  }

    EliminarTipoProyecto(modelo) {
      this.spinner.show();
      this.tipos_services.eliminar_tipo_proyecto(modelo,this.tipo_proyecto).subscribe(
         data => { this.spinner.hide(),this.notificacion = data,this.toastr.success('Tipo de Proyecto Eliminado'),this.modalRef.hide(),this.ngOnInit()},
         err => {
          this.spinner.hide();
          this.toastr.error('Ha ocurrido un error'); 
         }
        );}
                                 //modal para eliminar adjunto
                                 ModalEliminar(template: TemplateRef<any>,id:string) {
                                  this.tipo_proyecto = id;
                                  this.modalRef = this.modalService.show(template);
                            }
}
