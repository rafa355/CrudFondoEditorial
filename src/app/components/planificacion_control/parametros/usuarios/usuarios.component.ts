import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { UsuariosService } from '../../../../services/usuarios.service'
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormGroup, FormArray, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  @Input('data') encargados: Object[] = [];
  page: number = 1;
  userFilter: any = { name: '' };
  public labels: any = {
    previousLabel: 'Anterior',
    nextLabel: 'Siguiente',
};
modalRef: BsModalRef;
public usuarios ;
public usuario ;
public notificacion ;
public id ;
public myForm: FormGroup;

  constructor(private _fb: FormBuilder,private spinner: NgxSpinnerService,private toastr:ToastrService,private usuarioservice:UsuariosService,private modalService: BsModalService) { }
  ngOnInit() {
    this.ObtenerUsuarios();
    this.myForm = this._fb.group({
      observacion: [''],
      actualizacion: [''],
    });
  }
 
      save(model) {
        this.Eliminar_usuario(model,this.id);
      }
  ObtenerUsuarios() {
   this.usuarioservice.obtener_usuarios().subscribe(
     data => { this.usuarios = data},
     err => console.error(err),      () => console.log(this.usuarios)
    );  }

    Eliminar_usuario(encargado,id: string) {
      this.spinner.show();
      this.usuarioservice.eliminar_usuario(encargado,id).subscribe(
         data => { this.spinner.hide(),this.notificacion = data,this.toastr.success('Usuario Eliminado'),this.ngOnInit(),this.modalRef.hide()},
         err =>{
          this.spinner.hide();
          this.toastr.error('Ha ocurrido un error'); 
         }
        );}
               //modal para eliminar usuario
               ModalEliminar(template: TemplateRef<any>,id:string) {
                this.usuarioservice.obtener_usuario(id).subscribe(
                  data => {
                    this.usuario = data;
                    this.id = data.id;
                    this.modalRef = this.modalService.show(template);
                  }
                 );}
}
