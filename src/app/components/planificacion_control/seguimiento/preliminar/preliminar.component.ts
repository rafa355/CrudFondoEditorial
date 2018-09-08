import { Component, OnInit, TemplateRef   } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormGroup, FormArray, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

import { EtapasService } from '../../../../services/etapas.service';
import { AdjuntoService } from '../../../../services/adjunto.service';
import { CargarimagenService } from '../../../../services/cargarimagen.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preliminar',
  templateUrl: './preliminar.component.html',
  styleUrls: ['./preliminar.component.css']
})

export class PreliminarComponent implements OnInit {

  constructor(private enviandoImagen: CargarimagenService,private _fb: FormBuilder,private router:Router,private route: ActivatedRoute,private etapasservice: EtapasService,private adjuntosservice: AdjuntoService,private toastr:ToastrService,private modalService: BsModalService) {}
  id: any;
  comentario: any;
  archivo: any;
  adjunto_id: any;
  public notificacion;
  etapa:any={estado:'',transcurrido:'',estimado:''};
  public adjuntos;
  modalRef: BsModalRef;
  public myForm: FormGroup;
  public respuestaImagenEnviada;
  public resultadoCarga;

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.MostrarEtapa('1',this.id);
    this.myForm = this._fb.group({
      ubicacion: [''],
      comentario: [''],
      });
  }

  save(model) {
    this.comentario = model;
    this.cargandoImagen(this.archivo)
  }

    MostrarEtapa(etapa:string,id: string) {
      this.etapasservice.obtener_etapa_y_adjuntos(etapa,id).subscribe(
            data => {
              this.etapa = data[0]
              this.adjuntos = data[1]
            }
          );
        }
      
        ActivarEtapa() {
          this.etapasservice.activar_etapa('1',this.id).subscribe(
             data => { this.notificacion = data,this.toastr.success('Etapa Activada'),this.ngOnInit()},
             err => console.error(err),      () => console.log(this.notificacion)
            );
          }

          Modal_Preliminar(template: TemplateRef<any>) {
            this.modalRef = this.modalService.show(template);
          }
          crear_adjunto(adjunto) {
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
          onSelected(files: FileList){
             this.archivo =files;

          }
          public cargandoImagen(files: FileList){

            this.enviandoImagen.postFileImagen(files[0],'1',this.id).subscribe(
              data => {
                this.adjunto_id= data,
                this.crear_adjunto(this.comentario),
              () => console.log(data)
              },
              error => {
                console.log(<any>error);
              }
        
            );//FIN DE METODO SUBSCRIBE
        
          }
}
