import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { EncargadoService } from '../../../../services/encargado.service'
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormGroup, FormArray, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-disenadores',
  templateUrl: './disenadores.component.html',
  styleUrls: ['./disenadores.component.css']
})
export class DisenadoresComponent implements OnInit {
  @Input('data') encargados: Object[] = [];
  page: number = 1;
  userFilter: any = { nombre: '' };
  public labels: any = {
    previousLabel: 'Anterior',
    nextLabel: 'Siguiente',
};
modalRef: BsModalRef;
public encargado ;
public notificacion ;
public id ;
public myForm: FormGroup;

  constructor(private _fb: FormBuilder,private spinner: NgxSpinnerService,private toastr:ToastrService,private encargadoservice:EncargadoService,private modalService: BsModalService) { }
  ngOnInit() {
    this.ObtenerEncargados();
    this.myForm = this._fb.group({
      observacion: [''],
      actualizacion: [''],
    });
  }
  onSubmit(form:NgForm){
    this.EliminarEncargado(form.value,this.id);

    }
      save(model) {
        this.EliminarEncargado(model,this.id);
      }
  ObtenerEncargados() {
   this.encargadoservice.obtener_encargados().subscribe(
     data => { this.encargados = data},
     err => console.error(err),      () => console.log(this.encargados)
    );  }

    EliminarEncargado(encargado,id: string) {
      this.spinner.show();
      this.encargadoservice.eliminar_encargado(encargado,id).subscribe(
         data => { this.spinner.hide(),this.notificacion = data,this.toastr.success('Encargado Eliminado'),this.ngOnInit(),this.modalRef.hide()},
         err => {
          this.spinner.hide();
          this.toastr.error('Ha ocurrido un error'); 
         }
        );
    }
               //modal para eliminar enacargado
               ModalEliminar(template: TemplateRef<any>,id:string) {
                this.encargadoservice.obtener_encargado(id).subscribe(
                  data => {
                    this.encargado = data;
                    this.id = data.id;
                    this.modalRef = this.modalService.show(template);
                  }
                 );}
}
