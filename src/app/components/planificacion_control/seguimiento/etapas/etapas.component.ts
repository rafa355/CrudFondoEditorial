import { Component, OnInit, TemplateRef   } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormGroup, FormArray, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';

import { EtapasService } from '../../../../services/etapas.service';
import { AdjuntoService } from '../../../../services/adjunto.service';
import { CargararchivoService } from '../../../../services/cargararchivo.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-etapas',
  templateUrl: './etapas.component.html',
  styleUrls: ['./etapas.component.css']
})
export class EtapasComponent implements OnInit {

  constructor(private location: Location,private enviandoArchivo: CargararchivoService,private _fb: FormBuilder,private router:Router,private route: ActivatedRoute,private etapasservice: EtapasService,private adjuntosservice: AdjuntoService,private toastr:ToastrService,private modalService: BsModalService) {}
  id: any;
  comentario: any;
  archivo: any;
  adjunto_id: any;
  public notificacion;
  public etapa_preliminar:any={estado:'',transcurrido:'',estimado:''};
  public etapa_diagramacion:any={estado:'',transcurrido:'',estimado:''};
  public etapa_publicacion:any={estado:'',transcurrido:'',estimado:''};
  public adjuntos_preliminar;
  public adjuntos_diagramacion;
  public adjuntos_revision;
  public adjuntos_publicacion;
  modalRef: BsModalRef;
  public myForm: FormGroup;
  public respuestaImagenEnviada;
  public resultadoCarga;
  public etapa_activa = '';

    ngOnInit() {
      this.id = this.route.snapshot.params["id"];
      this.MostrarEtapas(this.id);
      this.myForm = this._fb.group({
        ubicacion: [''],
        comentario: [''],
        });
    }
    //Metodo para guardar archivo y comentario
    save(model) {
      this.comentario = model;
      this.CargarArchivo(this.archivo)
    }
        //Metodo para activar etapa
        MostrarEtapas(id: string) {
          this.etapasservice.obtener_etapas_y_adjuntos(id).subscribe(
              data => {
                this.etapa_preliminar = data[0]
                this.etapa_diagramacion = data[1]
                this.etapa_publicacion = data[2]
                this.adjuntos_preliminar = data[3]
                this.adjuntos_diagramacion = data[4]
                this.adjuntos_publicacion = data[5]
                if(this.etapa_preliminar.estado == 1){this.etapa_activa = '1' }
                else if(this.etapa_diagramacion.estado == 1){this.etapa_activa = '2' }
                else if(this.etapa_publicacion.estado == 1){this.etapa_activa = '3' }
              }
            );
          }
        //Metodo para activar etapa
        ActivarEtapa() {
          this.etapasservice.activar_etapa('1',this.id).subscribe(
             data => { this.notificacion = data,this.toastr.success('Etapa Activada'),this.ngOnInit()},
             err => console.error(err),      () => console.log(this.notificacion)
            );
          }
        //Metodo para finalizar etapa
        FinalizarEtapa() {
          this.etapasservice.finalizar_etapa(this.etapa_activa,this.id).subscribe(
             data => { this.notificacion = data,this.toastr.error('Etapa Finalizada'),this.ngOnInit(),this.modalRef.hide();},
             err => console.error(err),      () => console.log(this.notificacion)
            );
          }
        //Metodo para mostrar modal
        Modal(template: TemplateRef<any>) {
           this.modalRef = this.modalService.show(template);
        }
        //Metodo para cargar comentario
        crear_comentario(adjunto) {
            this.adjuntosservice.crear_adjunto(adjunto,this.adjunto_id).subscribe(
               data => {
                this.toastr.success('Adjunto Creado'),this.ngOnInit(),this.modalRef.hide()
              },
               error => {
                 console.error("Error saving food!");
                 return Observable.throw(error);
               }
            );
          }
          //al seleccionar archivo se guarga el valor en una auxiliar
          onSelected(files: FileList){
             this.archivo =files;
          }
          //Metodo para cargar el archivo
          public CargarArchivo(files: FileList){
            this.enviandoArchivo.EnviarArchivo(files[0],this.etapa_activa,this.id).subscribe(
              data => {
                this.adjunto_id= data,
                this.crear_comentario(this.comentario),
              () => console.log(data)
              },
              error => {
                console.log(<any>error);
              }
            );//FIN DE METODO SUBSCRIBE
          }

}
