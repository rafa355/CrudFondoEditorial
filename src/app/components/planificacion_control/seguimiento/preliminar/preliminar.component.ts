import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ToastrService } from 'ngx-toastr';

import { EtapasService } from '../../../../services/etapas.service';
import { Observable } from 'rxjs';
import { Etapas } from '../../../../models/etapas'


@Component({
  selector: 'app-preliminar',
  templateUrl: './preliminar.component.html',
  styleUrls: ['./preliminar.component.css']
})

export class PreliminarComponent implements OnInit {

  constructor(private route: ActivatedRoute,private etapasservice: EtapasService,private toastr:ToastrService) {}
  id: any;
  public notificacion;
  etapa:any={estado:'',transcurrido:'',estimado:''};
  public adjuntos;

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.MostrarEtapa('1',this.id);
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
}
